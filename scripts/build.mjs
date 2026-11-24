import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { buildAssets } from "./assets.mjs";
import { solve, normalize } from "../src/force-core.mjs";
import { renderBlocks, addHeadingIds, extractToc, normalizeTag, isVenueTag } from "./render.mjs";
import { layout, domainOf, escapeHtml as esc } from "./templates.mjs";

// ---------------------------------------------------------------- 工具
/**
 * 移除 Obsidian 的 %% %% 注释（Zotero 导入痕迹等），可跨行。
 * 原文里对措辞的清理已经一次性回写到 notes/ 源文件，构建期不再需要净化规则。
 */
function stripObsidianComments(text) {
  let out = text.replace(/%%[\s\S]*?%%/g, "");
  // 兜底：删掉落单的 %% 标记
  out = out.split("\n").filter((l) => !/^\s*%%\s*$/.test(l)).join("\n");
  return out;
}

const ROOT = path.resolve(import.meta.dirname, "..");
// 部署到 GitHub Pages 子路径时（如 /notes_PhD/）所有绝对资源需要带前缀
const SITE_BASE = (process.env.SITE_BASE || "").replace(/\/+$/, "");
const OUT = path.join(ROOT, "site");
const NOTES = path.join(ROOT, "notes");
const ATTACH = path.join(ROOT, "attachments");

const log = (...a) => console.log("[build]", ...a);

// ---------------------------------------------------------------- 读取笔记

function walkMd(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkMd(p, acc);
    else if (e.name.endsWith(".md")) acc.push(p);
  }
  return acc;
}

const rawFiles = walkMd(NOTES);
log(`发现 ${rawFiles.length} 个 markdown 文件`);

// 用相对 ROOT 的 POSIX 路径作为 key，与清理规则里的写法保持一致
const fileMap = new Map();
for (const abs of rawFiles) {
  const rel = path.relative(ROOT, abs).split(path.sep).join("/");
  fileMap.set(rel, fs.readFileSync(abs, "utf8"));
}

// ---------------------------------------------------------------- 内容清理
// 净化规则已应用于源文件，构建期不再做替换。

// ---------------------------------------------------------------- 图片索引

const imageIndex = new Map(); // basename -> 站点内路径
function walkAll(dir, cb) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkAll(p, cb);
    else cb(p);
  }
}
const assetCopies = []; // {from, to}
const addAsset = (abs, siteSubPath) => {
  assetCopies.push({ from: abs, to: siteSubPath });
  const base = path.basename(abs);
  if (!imageIndex.has(base)) imageIndex.set(base, siteSubPath);
};
walkAll(NOTES, (p) => {
  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(p)) {
    const rel = path.relative(NOTES, p).split(path.sep).join("/");
    addAsset(p, `/assets/notes/${rel}`);
  }
});
walkAll(ATTACH, (p) => {
  if (/\.(png|jpe?g|gif|webp|svg)$/i.test(p)) {
    const rel = path.relative(ATTACH, p).split(path.sep).join("/");
    addAsset(p, `/assets/attachments/${rel}`);
  }
});
log(`图片资源：${imageIndex.size} 个`);

// ---------------------------------------------------------------- 解析笔记

const notes = [];
const byCitekey = new Map();

for (const [rel, raw] of fileMap) {
  const { data, content } = matter(raw);
  const citekey = data.Citekey && String(data.Citekey).trim();
  if (!citekey) continue;

  const cleaned = stripObsidianComments(content);
  const notesBody = extractNotesSection(cleaned);
  const bodyLen = notesBody.replace(/\s/g, "").length;

  const tags = (Array.isArray(data.Tags) ? data.Tags : []).map(normalizeTag).filter(Boolean);
  const venueTag = tags.find(isVenueTag);
  const topicTags = tags.filter((t) => !isVenueTag(t));

  const year = parseInt(String(data.Year || "").match(/\d{4}/)?.[0] || "0", 10) || null;

  const note = {
    citekey,
    rel,
    title: String(data.Title || citekey).trim(),
    year,
    venue: venueTag ? venueTag.split("/")[0] : null,
    venueTag: venueTag || null,
    tags: topicTags,
    allTags: tags,
    firstAuthor: data.FirstAuthor ? String(data.FirstAuthor).trim() : "",
    authors: data.Author ? String(data.Author).trim() : "",
    itemType: data.ItemType ? String(data.ItemType).trim() : "",
    conference: data.Conference ? String(data.Conference).trim() : "",
    journal: data.Journal ? String(data.Journal).trim() : "",
    doi: data.DOI ? String(data.DOI).trim() : "",
    url: data.URL ? String(data.URL).trim() : "",
    rating: Number(data.rating) || 0,
    raw: cleaned,
    bodyLen,
    hasBody: bodyLen > 20,
  };
  notes.push(note);

  // 去重：同一 citekey 保留正文更长的版本
  const prev = byCitekey.get(citekey);
  if (!prev || note.bodyLen > prev.bodyLen) byCitekey.set(citekey, note);
}

function extractNotesSection(content) {
  const idx = content.search(/^##\s*Notes\s*$/m);
  if (idx === -1) return content;
  const after = content.slice(idx).replace(/^##\s*Notes\s*$/m, "");
  const end = after.search(/^##\s*Annotations\s*$/m);
  return end === -1 ? after : after.slice(0, end);
}

const uniqueNotes = [...byCitekey.values()];
log(`解析 ${notes.length} 篇，去重后 ${uniqueNotes.length} 篇`);

// ---------------------------------------------------------------- 站点 URL

const noteUrl = (n) => `${SITE_BASE}/notes/${n.citekey}.html`;
const citekeyToUrl = new Map(uniqueNotes.map((n) => [n.citekey, noteUrl(n)]));

// 解析内部链接目标（可能带路径或只有文件名）
function resolveNote(raw) {
  const base = path.basename(String(raw).split("\\").join("/")).replace(/\.md$/, "");
  if (citekeyToUrl.has(base)) return citekeyToUrl.get(base);
  return null;
}

function resolveImage(raw) {
  const base = path.basename(String(raw).split("\\").join("/"));
  const p = imageIndex.get(base);
  return p ? `${SITE_BASE}${p}` : null;
}

// ---------------------------------------------------------------- 统计

const byYear = new Map();
for (const n of uniqueNotes) {
  if (!n.year || n.year < 1970) continue;
  if (!byYear.has(n.year)) byYear.set(n.year, []);
  byYear.get(n.year).push(n);
}
const years = [...byYear.keys()].sort((a, b) => a - b);

const venueCount = new Map();
for (const n of uniqueNotes) {
  if (!n.venue) continue;
  venueCount.set(n.venue, (venueCount.get(n.venue) || 0) + 1);
}

const tagCount = new Map();
for (const n of uniqueNotes) for (const t of n.tags) tagCount.set(t, (tagCount.get(t) || 0) + 1);

const withBody = uniqueNotes.filter((n) => n.hasBody).length;


// ---------------------------------------------------------------- 图数据

// 节点权重：正文越丰富、评分越高，节点越大
function nodeWeight(n) {
  const base = n.hasBody ? 1 + Math.min(n.bodyLen / 2000, 2.2) : 0.55;
  return Number((base * (1 + (n.rating || 0) * 0.05)).toFixed(3));
}

const graphNodes = uniqueNotes.map((n) => ({
  id: n.citekey,
  t: n.title,
  y: n.year,
  v: n.venue,
  g: n.tags.slice(0, 4),
  r: n.rating,
  a: n.hasBody ? 1 : 0,
  w: nodeWeight(n),
}));

// 边：标签共现（权重最高）+ 同会议同年
const graphLinks = [];
const seen = new Set();
const pushLink = (a, b, kind, weight) => {
  if (a === b) return;
  const [x, y] = a < b ? [a, b] : [b, a];
  const key = `${x}|${y}|${kind}`;
  if (seen.has(key)) return;
  seen.add(key);
  graphLinks.push({ s: x, t: y, k: kind, w: weight });
};

// 标签倒排，同一标签内两两成边（大标签限制邻居数，避免爆量）
const tagIndex = new Map();
for (const n of uniqueNotes) {
  for (const t of n.tags) {
    if (!tagIndex.has(t)) tagIndex.set(t, []);
    tagIndex.get(t).push(n.citekey);
  }
}
const MAX_TAG_NEIGHBORS = 26;
for (const [tag, members] of tagIndex) {
  if (members.length < 2) continue;
  const list = members.slice(0, MAX_TAG_NEIGHBORS);
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      pushLink(list[i], list[j], "tag", 1);
    }
  }
}

// 度数：这个节点连了多少条边。
// 用 sqrt 压缩后再映射到 0~1，避免少数巨节点独占整个尺寸区间。
const degreeOf = new Map();
for (const l of graphLinks) {
  degreeOf.set(l.s, (degreeOf.get(l.s) || 0) + 1);
  degreeOf.set(l.t, (degreeOf.get(l.t) || 0) + 1);
}
const maxDegree = Math.max(1, ...degreeOf.values());
for (const n of graphNodes) {
  const d = degreeOf.get(n.id) || 0;
  // dg: 归一化后的度数（0~1），前端拿它做面积映射
  n.dg = Number(Math.sqrt(d / maxDegree).toFixed(4));
  n.dd = d;
}

log(`图：${graphNodes.length} 节点 / ${graphLinks.length} 边（最大度数 ${maxDegree}）`);

const stats = {
  total: uniqueNotes.length,
  withBody,
  years: years.length,
  venues: venueCount.size,
  tags: tagCount.size,
  firstYear: years[0],
  lastYear: years[years.length - 1],
  links: graphLinks.length,
};


// ---------------------------------------------------------------- 渲染笔记页

const ctx = { resolveImage, resolveNote };
const rendered = [];

for (const n of uniqueNotes) {
  // 去掉 frontmatter 后，正文包含 TLDR/cite/Contribution 等 callout + Notes + Annotations
  let body = n.raw;

  // Annotations 段落单独处理，折叠展示
  const annIdx = body.search(/^##\s*Annotations\s*$/m);
  let notesPart = body;
  let annPart = "";
  if (annIdx !== -1) {
    notesPart = body.slice(0, annIdx);
    annPart = body.slice(annIdx).replace(/^##\s*Annotations\s*$/m, "");
  }

  // Notes 里的二级标题若与"Notes"重名则保留原样
  const html = addHeadingIds(renderBlocks(notesPart, ctx));
  const annHtml = annPart.trim() ? addHeadingIds(renderBlocks(annPart, ctx)) : "";
  const toc = extractToc(html);

  n._html = html;
  n._annHtml = annHtml;
  n._toc = toc;
  rendered.push(n);
}

// ---------------------------------------------------------------- 写站点

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "notes"), { recursive: true });

// 前端资源（必须在 rmSync 之后）
{
  const a = await buildAssets();
  log(`前端资源 app.js ${a.js} / style.css ${a.css} / katex +${a.fonts} fonts`);
}

// 静态资源
for (const { from, to } of assetCopies) {
  const dest = path.join(OUT, to.replace(/^\//, ""));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(from, dest);
}
log(`拷贝资源 ${assetCopies.length} 个`);

// 数据 JSON —— 图谱布局同样在构建期求解，浏览器端只渲染
fs.mkdirSync(path.join(OUT, "data"), { recursive: true });
{
  const idx = new Map();
  const simNodes = graphNodes.map((n, i) => {
    idx.set(n.id, i);
    const dom = domainOf(n.g);
    const ang = i * 2.399963229728653;
    const rad = Math.sqrt(i / Math.max(1, graphNodes.length)) * 520;
    return {
      id: n.id,
      t: n.t,
      year: n.y,
      v: n.v,
      tags: n.g,
      rating: n.r,
      hasBody: n.a,
      w: n.w,
      dg: n.dg,
      dd: n.dd,
      color: dom.hex,
      dk: dom.key,
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      vx: 0,
      vy: 0,
    };
  });

  const simLinks = graphLinks
    .map((l) => {
      const a = idx.get(l.s);
      const b = idx.get(l.t);
      return a === undefined || b === undefined ? null : { s: a, t: b, k: l.k };
    })
    .filter(Boolean);

  // 全图 784 节点 / 7791 边，边太多会把图压成球，采样后求解
  const solveLinks = simLinks.length > 2400 ? simLinks.filter((_, i) => i % 3 === 0) : simLinks;

  const t0 = Date.now();
  const res = solve(simNodes, solveLinks, {
    iterations: 1400,
    alphaDecay: 0.005,
    alphaMin: 0.002,
    linkDistance: 22,
    charge: -900,
    gravity: 0.008,
    cluster: true,
    clusterStrength: 0.03,
    linkStrength: 0.035,
    maxSpeed: 30,
  });
  normalize(simNodes, 0.02, 0.02);
  log(`graph 布局求解 ${res.iterations} 次迭代 / ${Date.now() - t0}ms（边 ${solveLinks.length}）`);

  fs.writeFileSync(
    path.join(OUT, "data", "graph.json"),
    JSON.stringify({
      nodes: simNodes.map((n) => ({
        id: n.id,
        t: n.t,
        y: n.year,
        v: n.v,
        g: n.tags,
        r: n.rating,
        a: n.hasBody,
        w: n.w,
        dg: n.dg,
        dd: n.dd,
        d: n.color,
        dk: n.dk,
        x: Number(n.x.toFixed(4)),
        ny: Number(n.y.toFixed(4)),
      })),
      links: simLinks,
    })
  );
}

const searchIndex = uniqueNotes.map((n) => ({
  i: n.citekey,
  t: n.title,
  y: n.year,
  v: n.venue,
  g: n.tags,
  a: n.hasBody ? 1 : 0,
  r: n.rating,
  s: n.hasBody ? buildSearchSnippet(n) : buildSearchSnippet(n),
}));

function buildSearchSnippet(n) {
  const tldr = n.raw.match(/\*\*TLDR\*\*::\s*([^\n]+)/);
  return tldr ? tldr[1].trim().slice(0, 240) : "";
}

fs.writeFileSync(path.join(OUT, "data", "search.json"), JSON.stringify(searchIndex));

// 只有 ≥3 篇的标签/会议会生成独立页面，其余在笔记页里链到索引
const TAG_PAGE_MIN = 3;
const VENUE_PAGE_MIN = 3;

const tagPages = new Set([...tagCount].filter(([, c]) => c >= TAG_PAGE_MIN).map(([t]) => t));
const venuePages = new Set([...venueCount].filter(([, c]) => c >= VENUE_PAGE_MIN).map(([v]) => v));
// 标签名可能含 /（如 dataset/traffic），一律替换成 - 以保证文件系统与 URL 一致
const tagSlug = (t) =>
  encodeURIComponent(String(t).toLowerCase().replace(/[\s/]+/g, "-"));

// 单篇笔记页
for (const n of rendered) {
  const html = layout({
    title: n.title,
    description: n.title,
    page: "note",
    note: n,
    content: n._html,
    annHtml: n._annHtml,
    toc: n._toc,
    related: buildRelated(n),
    noteUrl,
    notes: uniqueNotes,
    years,
    venues: [...venueCount],
    tagPages,
    venuePages,
    stats,
  });
  fs.writeFileSync(path.join(OUT, "notes", `${n.citekey}.html`), html);
}
log(`生成 ${rendered.length} 个笔记页`);

function buildRelated(n) {
  // 按标签重合度排序，取前 6
  const scored = [];
  for (const other of uniqueNotes) {
    if (other.citekey === n.citekey) continue;
    const overlap = other.tags.filter((t) => n.tags.includes(t)).length;
    if (!overlap) continue;
    scored.push({ n: other, score: overlap });
  }
  scored.sort((a, b) => b.score - a.score || (b.n.bodyLen || 0) - (a.n.bodyLen || 0));
  return scored.slice(0, 6).map((s) => s.n);
}

// ---------------------------------------------------------------- 索引页

// 首页需要领域分布统计（先算好，避免首页内嵌全量图数据）
const domainCounts = new Map(); // key: domain.key → [domain, count]
for (const n of uniqueNotes) {
  const d = domainOf(n.tags);
  const cur = domainCounts.get(d.key);
  if (cur) cur[1]++;
  else domainCounts.set(d.key, [d, 1]);
}

// hero 图谱单独抽样输出，控制首页体积
const HERO_MAX = 620;
const heroNodes = (() => {
  if (graphNodes.length <= HERO_MAX) return graphNodes;
  const keep = new Set();
  const byYearMap = new Map();
  for (const n of graphNodes) {
    if (!byYearMap.has(n.y)) byYearMap.set(n.y, []);
    byYearMap.get(n.y).push(n);
  }
  const perYear = Math.max(3, Math.round((HERO_MAX / byYearMap.size) * 0.55));
  for (const arr of byYearMap.values()) {
    arr.sort((a, b) => b.w - a.w);
    arr.slice(0, perYear).forEach((n) => keep.add(n.id));
  }
  const pool = graphNodes.filter((n) => !keep.has(n.id));
  while (keep.size < HERO_MAX && pool.length) {
    keep.add(pool.splice(Math.floor(Math.random() * pool.length), 1)[0].id);
  }
  return graphNodes.filter((n) => keep.has(n.id));
})();
const heroIds = new Set(heroNodes.map((n) => n.id));
const heroLinks = graphLinks.filter((l) => heroIds.has(l.s) && heroIds.has(l.t));

// 首页节点的度数按"这张图里实际画出来的边"重新统计
const heroDegreeOf = new Map();
for (const l of heroLinks) {
  heroDegreeOf.set(l.s, (heroDegreeOf.get(l.s) || 0) + 1);
  heroDegreeOf.set(l.t, (heroDegreeOf.get(l.t) || 0) + 1);
}
const heroMaxDegree = Math.max(1, ...heroDegreeOf.values());
const heroDeg = new Map(
  heroNodes.map((n) => [n.id, Number(Math.sqrt((heroDegreeOf.get(n.id) || 0) / heroMaxDegree).toFixed(4))])
);
log(`hero 图：${heroNodes.length} 节点 / ${heroLinks.length} 边（最大度数 ${heroMaxDegree}）`);

// 在 Node 里把布局跑到收敛：浏览器端不再出现"粒子乱飞"的求解过程
{
  const idx = new Map();
  const simNodes = heroNodes.map((n, i) => {
    idx.set(n.id, i);
    const dom = domainOf(n.g);
    // 黄金角螺旋做初值，避免整体旋转对称导致的长时间摆动
    const ang = i * 2.399963229728653;
    const rad = Math.sqrt(i / Math.max(1, heroNodes.length)) * 380;
    return {
      id: n.id,
      year: n.y,
      w: n.w,
      color: dom.hex,
      dk: dom.key,
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      vx: 0,
      vy: 0,
    };
  });

  const simLinks = heroLinks
    .map((l) => {
      const s0 = idx.get(l.s);
      const t0 = idx.get(l.t);
      return s0 === undefined || t0 === undefined ? null : { s: s0, t: t0 };
    })
    .filter(Boolean);

  const t0 = Date.now();
  const res = solve(simNodes, simLinks, {
    iterations: 1200,
    alphaDecay: 0.006,
    alphaMin: 0.002,
    linkDistance: 30,
    charge: -520,
    gravity: 0.006,
    cluster: true,
    clusterStrength: 0.022,
    linkStrength: 0.03,
    maxSpeed: 30,
  });
  normalize(simNodes, 0.02, 0.03);
  log(`hero 布局求解 ${res.iterations} 次迭代 / ${Date.now() - t0}ms`);

  fs.writeFileSync(
    path.join(OUT, "data", "hero-graph.json"),
    JSON.stringify({
      nodes: simNodes.map((n) => ({
        i: n.id,
        y: n.year,
        w: n.w,
        dg: heroDeg.get(n.id),
        d: n.color,
        x: Number(n.x.toFixed(4)),
        ny: Number(n.y.toFixed(4)),
      })),
      links: simLinks,
    })
  );
}

// 首页
fs.writeFileSync(
  path.join(OUT, "index.html"),
  layout({
    title: "PhD Reading Notes",
    description: "A PhD reading log on generative models, time series, and clinical machine learning.",
    page: "home",
    stats,
    domainCounts: [...domainCounts.values()],
    years: years.map((y) => ({ year: y, count: byYear.get(y).length })),
    topTags: [...tagCount].sort((a, b) => b[1] - a[1]).slice(0, 14),
    recent: [...uniqueNotes].sort((a, b) => (b.year || 0) - (a.year || 0)).slice(0, 6),
    noteUrl,
  })
);

// 图谱页
fs.writeFileSync(
  path.join(OUT, "graph.html"),
  layout({
    title: "Knowledge Graph",
    description: "Interactive graph of all notes.",
    page: "graph",
    stats,
    noteUrl,
  })
);

// 全部笔记 / 年份 / 标签 / 会议
fs.writeFileSync(
  path.join(OUT, "notes.html"),
  layout({
    title: "All Notes",
    description: "Complete index of reading notes.",
    page: "notes",
    notes: [...uniqueNotes].sort((a, b) => (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title)),
    years: years.map((y) => ({ year: y, count: byYear.get(y).length })),
    venues: [...venueCount].sort((a, b) => b[1] - a[1]),
    tags: [...tagCount].sort((a, b) => b[1] - a[1]),
    stats,
    noteUrl,
  })
);

// 标签页：≥3 篇的标签独立成页，长尾标签收进统一索引，避免数千个空壳页
fs.mkdirSync(path.join(OUT, "tags"), { recursive: true });

const majorTags = [...tagCount].filter(([, c]) => c >= TAG_PAGE_MIN);
const minorTags = [...tagCount].filter(([, c]) => c < TAG_PAGE_MIN);

for (const [tag] of majorTags) {
  const items = uniqueNotes
    .filter((n) => n.tags.includes(tag))
    .sort((a, b) => (b.year || 0) - (a.year || 0));
  fs.writeFileSync(
    path.join(OUT, "tags", `${tagSlug(tag)}.html`),
    layout({
      title: `#${tag}`,
      description: `Notes tagged ${tag}`,
      page: "tag",
      tag,
      notes: items,
      noteUrl,
      stats,
    })
  );
}
log(`生成 ${majorTags.length} 个标签页（≥${TAG_PAGE_MIN} 篇），${minorTags.length} 个长尾标签收进索引`);

// 标签总索引
fs.writeFileSync(
  path.join(OUT, "tags.html"),
  layout({
    title: "Topics",
    description: "All research topics covered in the notes.",
    page: "tags",
    majorTags,
    minorTags,
    notes: uniqueNotes,
    stats,
    noteUrl,
  })
);

// 会议页：同样只给主流会议建页
fs.mkdirSync(path.join(OUT, "venues"), { recursive: true });
const majorVenues = [...venueCount].filter(([, c]) => c >= VENUE_PAGE_MIN);
for (const [venue] of majorVenues) {
  const items = uniqueNotes.filter((n) => n.venue === venue).sort((a, b) => (b.year || 0) - (a.year || 0));
  fs.writeFileSync(
    path.join(OUT, "venues", `${encodeURIComponent(venue)}.html`),
    layout({
      title: venue,
      description: `Notes from ${venue}`,
      page: "venue",
      venue,
      notes: items,
      noteUrl,
      stats,
    })
  );
}
log(`生成 ${majorVenues.length} 个会议页`);

// 404
fs.writeFileSync(
  path.join(OUT, "404.html"),
  layout({ title: "Not Found", description: "Page not found", page: "404", stats, noteUrl })
);

log("完成");
console.log(
  JSON.stringify(
    {
      notes: stats.total,
      withBody: stats.withBody,
      years: stats.years,
      venues: stats.venues,
      tags: stats.tags,
      graphLinks: stats.links,
      strippedComments: true,
    },
    null,
    2
  )
);

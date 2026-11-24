import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

export const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const esc = escapeHtml;

/** 领域配色：按标签归属把笔记分到几个大类，用于图谱着色 */
const DOMAIN_RULES = [
  {
    key: "gen",
    name: "Generative Models",
    color: "var(--d-gen)",
    hex: "#a78bfa",
    test: /diffusion|generative|gan|vae|flow-matching|score|autoregressive|rectified|consistency|text-to-image|image-generation|image-synthesis|normalizing/i,
    desc: "Diffusion, score-based and flow models",
  },
  {
    key: "ts",
    name: "Time Series",
    color: "var(--d-ts)",
    hex: "#5eead4",
    test: /time-series|forecast|imputation|irregular|anomaly-detection|spatio|traffic|temporal|seasonal|residual|multiscale/i,
    desc: "Forecasting, imputation and irregular sampling",
  },
  {
    key: "llm",
    name: "LLM & Foundation",
    color: "var(--d-llm)",
    hex: "#60a5fa",
    test: /large-language|llm|foundation|transformer|language-model|prompt|reasoning|rag|retrieval|instruction|alignment|chain-of-thought|bert|gpt/i,
    desc: "Language models, transformers and prompting",
  },
  {
    key: "clin",
    name: "Clinical & Biomedical",
    color: "var(--d-clin)",
    hex: "#fb7185",
    test: /clinical|sepsis|ehr|electronic-health|biomedical|medical|patient|icu|ecg|eeg|health|mimic/i,
    desc: "Clinical prediction and healthcare data",
  },
  {
    key: "graph",
    name: "Graphs & Dynamics",
    color: "var(--d-graph)",
    hex: "#fbbf24",
    test: /graph|hypergraph|neural-ode|differential|dynamic|state-space|causal|koopman|operator|physics|sde/i,
    desc: "Graph structure, ODEs and dynamical systems",
  },
  {
    key: "learn",
    name: "Learning & Methods",
    color: "var(--d-learn)",
    hex: "#34d399",
    test: /self-supervised|contrastive|supervised-learning|unsupervised|representation-learning|meta-learning|mixture-of-experts|reinforcement-learning|backpropagation|gradient|activation|generalization|computer-vision|sequence-modeling|attention|encoder-decoder|clustering|k-means|signal-processing|optimization|training|regularization|benchmark|neural-network/i,
    desc: "Representation learning, training and general ML",
  },
];

export function domainOf(tags) {
  const joined = (tags || []).join(" ");
  for (const r of DOMAIN_RULES) if (r.test.test(joined)) return r;
  return { key: "other", name: "Other", color: "var(--d-other)", hex: "#8b95ad", desc: "Surveys and other topics" };
}

export const DOMAINS = DOMAIN_RULES;

/** 站点根路径，便于部署到子目录时调整 */
const BASE = process.env.SITE_BASE || "";

export const url = (p) => {
  if (!p) return BASE || "/";
  if (/^https?:/.test(p)) return p;
  return `${BASE}${p}`;
};

// ------------------------------------------------------------------ 图标

const ICON = {
  search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  graph: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8 16.5 16 7.5M8.2 18h7.4"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  minus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  target: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.5"/></svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>`,
  menu: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
};

const BRAND_GLYPH = `<svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
  <circle cx="22" cy="22" r="3.4" fill="#5eead4"/>
  <circle cx="22" cy="22" r="17" stroke="#a78bfa" stroke-width="1" opacity=".4"/>
  <circle cx="36" cy="12" r="2.4" fill="#a78bfa"/>
  <circle cx="8" cy="30" r="2" fill="#60a5fa"/>
  <circle cx="29" cy="38" r="1.6" fill="#fb7185"/>
  <circle cx="12" cy="9" r="1.5" fill="#fbbf24"/>
  <path d="M22 22 36 12M22 22 8 30M22 22 29 38M22 22 12 9" stroke="#5eead4" stroke-width=".8" opacity=".35"/>
</svg>`;

const BRAND_MARK = `<svg class="mark" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="3" fill="#5eead4"/>
  <circle cx="12" cy="12" r="9.2" stroke="#a78bfa" stroke-width="1.1" opacity=".55"/>
  <circle cx="19.5" cy="7" r="1.9" fill="#a78bfa"/>
  <circle cx="4.8" cy="16.6" r="1.5" fill="#60a5fa"/>
  <circle cx="16.4" cy="19.8" r="1.2" fill="#5eead4" opacity=".8"/>
  <path d="M12 12 19.5 7M12 12 4.8 16.6M12 12 16.4 19.8" stroke="#5eead4" stroke-width=".8" opacity=".32"/>
</svg>`;

// ------------------------------------------------------------------ layout

/**
 * @param {object} o
 * @param {string} o.title
 * @param {string} [o.description]
 * @param {string} o.page  home|graph|notes|tag|venue|note|404
 * @param {string} [o.content] 正文 HTML
 */
export function layout(o) {
  const {
    title,
    description = "PhD reading notes",
    page,
    content = "",
    note,
    annHtml = "",
    toc = [],
    related = [],
    stats,
    notes,
    years,
    venues,
    tags,
    majorTags,
    minorTags,
    tagPages,
    venuePages,
    domainCounts,
    tag,
    venue,
    topTags,
    recent,
    noteUrl,
  } = o;

  const isHome = page === "home";
  // 首页与图谱页是整块画布，用页内自己的抬头，不要全局悬浮导航
  const isImmersive = isHome || page === "graph";
  const fullTitle = isHome ? "论文笔记 · PhD Reading Notes" : `${title} · 论文笔记`;

  const navLink = (href, label, key) =>
    `<a href="${url(href)}"${page === key ? ' class="active"' : ""}>${label}</a>`;

  return `<!DOCTYPE html>
<html lang="zh-CN" data-base="${escapeHtml(BASE)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="color-scheme" content="dark">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="#5eead4"/><circle cx="12" cy="12" r="9.2" stroke="#a78bfa" stroke-width="1.1" fill="none" opacity=".6"/><circle cx="19.5" cy="7" r="1.9" fill="#a78bfa"/><circle cx="4.8" cy="16.6" r="1.5" fill="#60a5fa"/></svg>`
  )}">
<link rel="stylesheet" href="${url("/assets/style.css")}">
<link rel="stylesheet" href="${url("/assets/katex.min.css")}">
<script>
  // 同步内联，避免暗色闪白
  document.documentElement.dataset.page = ${JSON.stringify(page)};
</script>
</head>
<body>

${renderNav(page)}

${page === "note" ? '<div class="progress-bar" id="progress"></div>' : ""}

<main>
${page === "home" ? renderHome({ stats, domainCounts, years, recent, noteUrl }) : ""}
${page === "graph" ? renderGraphPage({ stats }) : ""}
${page === "notes" ? renderNotesIndex({ notes, years, venues, tags, stats, noteUrl }) : ""}
${page === "tag" ? renderTagPage({ tag, notes, noteUrl }) : ""}
${page === "tags" ? renderTagsPage({ majorTags, minorTags, stats }) : ""}
${page === "venue" ? renderVenuePage({ venue, notes, noteUrl }) : ""}
${page === "note" ? renderNote({ note, content, annHtml, toc, related, noteUrl, notes, years, venues, tagPages, venuePages, stats }) : ""}
${page === "404" ? render404() : ""}
</main>

${page !== "note" && page !== "graph" ? renderFooter(stats) : ""}

${renderSearchOverlay()}

<script src="${url("/assets/app.js")}" type="module"></script>
</body>
</html>`;
}

// ------------------------------------------------------------------ nav

/**
 * 全站唯一的一套导航。
 *
 * 之前首页另起一套抬头、图谱页又有自己的 pill 组，导致点来点去导航
 * 会在三个不同位置、三套不同条目之间跳。现在所有页面共用这一个函数。
 */
function renderNav(page) {
  const items = [
    { href: "/", label: "首页", key: "home" },
    { href: "/notes.html", label: "全部笔记", key: "notes" },
    { href: "/tags.html", label: "主题", key: "tags" },
    { href: "/graph.html", label: "图谱", key: "graph" },
  ];
  // 笔记详情归"全部笔记"这一支，标签页归"主题"，避免详情页导航全无高亮
  const activeKey = { note: "notes", tag: "tags", venue: "notes" }[page] || page;

  const links = items
    .map((it) => {
      const on = it.key === activeKey;
      return `<a href="${url(it.href)}"${on ? ' class="active" aria-current="page"' : ""}>${it.label}</a>`;
    })
    .join("");

  return `<nav class="nav" id="nav">
  <a class="nav-brand" href="${url("/")}">${BRAND_MARK}<span>论文<em class="brand-us">·</em>笔记</span></a>
  <div class="nav-links">${links}</div>
  <div class="nav-spacer"></div>
  <button class="nav-search" id="search-open" aria-label="搜索">
    ${ICON.search}<span>搜索笔记</span><kbd>⌘K</kbd>
  </button>
  <button class="nav-toggle" id="nav-toggle" aria-label="目录">${ICON.menu}</button>
</nav>`;
}

// ------------------------------------------------------------------ footer

function renderFooter(stats) {
  return `<footer class="footer">
  <div>
    <div style="color:var(--text-dim);margin-bottom:4px">论文笔记</div>
    <div>${stats ? `${stats.total} 篇论文 · ${stats.firstYear}–${stats.lastYear}` : ""}</div>
  </div>
  <div style="text-align:right">
    <div>Built from an Obsidian vault · <a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</a></div>
    <div style="margin-top:4px">Rendered with a custom Markdown pipeline</div>
  </div>
</footer>`;
}

// ------------------------------------------------------------------ home

/**
 * 首页与图谱页的分工：
 *   首页 = 叙述性入口。大字、一句话、研究方向与阅读轨迹、入场动效。
 *   图谱页 = 工具。全屏拓扑、过滤、缩放，供查关系。
 */
function renderHome({ stats, domainCounts: domainCountsIn, years, recent, noteUrl }) {
  const domainCounts = new Map(domainCountsIn || []);
  const domList = [...domainCounts].sort((a, b) => b[1] - a[1]);
  const total = stats.total;
  const peak = years.reduce((a, b) => (b.count > a.count ? b : a), years[0]);

  // 领域占比条
  const domBars = domList
    .slice(0, 6)
    .map(([d, c]) => {
      const pct = ((c / total) * 100).toFixed(1);
      return `<div class="dom-row" style="--c:${d.hex};--w:${(c / domList[0][1]) * 100}%">
        <span class="dom-name">${esc(d.name)}</span>
        <span class="dom-track"><span class="dom-fill"></span></span>
        <span class="dom-n">${c}<em>${pct}%</em></span>
      </div>`;
    })
    .join("");

  // 年份：面积折线。逐年排 31 行会让前 20 行全是"1 篇"的空条，形状读不出来。
  const maxY = Math.max(...years.map((y) => y.count));
  const W = 1000;
  const H = 190;
  const padL = 6;
  const padR = 6;
  const padT = 14;
  const padB = 30;

  const xAt = (i) => padL + (i / Math.max(1, years.length - 1)) * (W - padL - padR);
  const yAt = (c) => padT + (1 - c / maxY) * (H - padT - padB);

  const pts = years.map((y, i) => `${xAt(i).toFixed(2)},${yAt(y.count).toFixed(2)}`);
  const linePath = `M${pts.join("L")}`;
  const areaPath = `M${xAt(0).toFixed(2)},${(H - padB).toFixed(2)}L${pts.join("L")}L${xAt(
    years.length - 1
  ).toFixed(2)},${(H - padB).toFixed(2)}Z`;

  // 只标注少数关键年份，且相邻标签间距不足就丢弃，避免末尾年份挤在一起
  const tickCandidates = years
    .map((y, i) => ({ ...y, i }))
    .filter((y, i) => i === 0 || y.year % 5 === 0 || y.count === maxY);

  const minGap = 52;
  const ticks = [];
  for (const cand of tickCandidates) {
    const x = xAt(cand.i);
    if (ticks.length && Math.abs(x - xAt(ticks[ticks.length - 1].i)) < minGap) continue;
    ticks.push(cand);
  }
  // 末年份单独处理：与已选标签距离够近才加
  const lastIdx = years.length - 1;
  const lastX = xAt(lastIdx);
  if (!ticks.length || Math.abs(lastX - xAt(ticks[ticks.length - 1].i)) >= minGap) {
    ticks.push({ ...years[lastIdx], i: lastIdx });
  } else {
    ticks[ticks.length - 1] = { ...years[lastIdx], i: lastIdx };
  }

  const tickLabels = ticks
    .map(
      (y) => `<text x="${xAt(y.i).toFixed(1)}" y="${H - 8}" class="yr-tick" text-anchor="${
        y.i === 0 ? "start" : y.i === lastIdx ? "end" : "middle"
      }">${y.year}</text>`
    )
    .join("");

  const peakX = xAt(years.findIndex((y) => y.count === maxY));
  const peakY = yAt(maxY);

  const yearChart = `<svg class="yr-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="按年份的论文数量分布">
    <defs>
      <linearGradient id="yrGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5eead4" stop-opacity=".38"/>
        <stop offset="100%" stop-color="#a78bfa" stop-opacity=".02"/>
      </linearGradient>
      <linearGradient id="yrLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#5eead4"/>
        <stop offset="100%" stop-color="#a78bfa"/>
      </linearGradient>
    </defs>
    <line x1="${padL}" y1="${H - padB}" x2="${W - padR}" y2="${H - padB}" class="yr-axis"/>
    <path d="${areaPath}" fill="url(#yrGrad)" class="yr-area"/>
    <path d="${linePath}" fill="none" stroke="url(#yrLine)" stroke-width="2" class="yr-line"/>
    <circle cx="${peakX.toFixed(1)}" cy="${peakY.toFixed(1)}" r="4.5" class="yr-peak"/>
    <text x="${peakX.toFixed(1)}" y="${(peakY - 14).toFixed(1)}" class="yr-peak-label" text-anchor="middle">${maxY} 篇</text>
    ${tickLabels}
  </svg>`;

  const recentItems = recent
    .map(
      (n) => `<a class="rr-item reveal" href="${noteUrl(n)}">
        <span class="rr-yr">${n.year || "—"}</span>
        <span class="rr-t">${esc(n.title)}</span>
      </a>`
    )
    .join("");

  return `
<!-- ============================ hero ============================ -->
<section class="hero" id="hero">
  <canvas id="hero-canvas" aria-hidden="true"></canvas>
  <canvas id="hero-spark" aria-hidden="true"></canvas>

  <div class="hero-inner">
    <p class="hero-kicker reveal" style="--d:0">
      <span class="kick-dot" aria-hidden="true"></span>
      PhD Reading Notes · ${stats.firstYear}—${stats.lastYear}
    </p>

    <h1 class="hero-title">
      <span class="line reveal" style="--d:1">读过 <em class="num" data-count="${total}">${total}</em> 篇论文，</span>
      <span class="line reveal" style="--d:2">它们之间有 <em class="num" data-count="${stats.links}">${stats.links}</em> 条连线。</span>
    </h1>

    <p class="hero-sub reveal" style="--d:3">
      一个博士生的阅读轨迹：生成模型、时间序列、临床机器学习。
      每篇都记了贡献、方法与自己的判断。
    </p>

    <div class="hero-cta reveal" style="--d:4">
      <a class="btn btn-primary" href="${url("/graph.html")}">
        探索关系图谱 ${ICON.arrow}
      </a>
      <a class="btn btn-ghost" href="${url("/notes.html")}">浏览全部笔记</a>
    </div>

    <dl class="hero-facts reveal" style="--d:5">
      <div><dt>${stats.withBody}</dt><dd>篇有完整方法梳理</dd></div>
      <div><dt>${stats.tags}</dt><dd>个主题标签</dd></div>
      <div><dt>${stats.venues}</dt><dd>个会议 / 期刊</dd></div>
      <div><dt>${peak.year}</dt><dd>读得最多的一年（${peak.count} 篇）</dd></div>
    </dl>
  </div>

</section>

<!-- ============================ 领域 ============================ -->
<section class="block" id="s-domains">
  <div class="block-head">
    <span class="block-kicker">01 — 研究方向</span>
    <h2 class="block-title">在读什么</h2>
    <p class="block-desc">
      标签共现把笔记聚成几团。${esc(domList[0][0].name)} 是最大的一支，${domList[0][1]} 篇，
      占全部的 ${((domList[0][1] / total) * 100).toFixed(0)}%。
    </p>
  </div>
  <div class="dom-bars reveal">${domBars}</div>
</section>

<!-- ============================ 年份 ============================ -->
<section class="block" id="s-years">
  <div class="block-head">
    <span class="block-kicker">02 — 阅读轨迹</span>
    <h2 class="block-title">什么时候读的</h2>
    <p class="block-desc">
      按论文发表年份排列，共跨 ${years.length} 年。近年密度陡增，
      ${peak.year} 年是峰值，一年 ${peak.count} 篇。
    </p>
  </div>
  <div class="yr-chart reveal">${yearChart}</div>
</section>

<!-- ============================ 最近 ============================ -->
<section class="block" id="s-recent">
  <div class="block-head">
    <span class="block-kicker">03 — 最近</span>
    <h2 class="block-title">最近读的几篇</h2>
    <p class="block-desc">按发表年份倒序，取最新的六篇。</p>
  </div>
  <div class="strip-items reveal">${recentItems}</div>
</section>
`;
}

// ------------------------------------------------------------------ graph page

function renderGraphPage({ stats }) {
  return `
<div class="graph-page">
  <canvas id="graph-canvas"></canvas>


  <div class="graph-ui">
    <div class="graph-panel graph-search">
      ${ICON.search}
      <input type="search" id="graph-filter" placeholder="过滤标题、标签、年份…" autocomplete="off" spellcheck="false">
      <span class="cnt" id="graph-cnt">${stats.total}</span>
    </div>

    <div class="graph-panel graph-controls">
      <button id="g-zoom-in" title="放大" aria-label="放大">${ICON.plus}</button>
      <button id="g-zoom-out" title="缩小" aria-label="缩小">${ICON.minus}</button>
      <button id="g-reset" title="重置视图" aria-label="重置视图">${ICON.target}</button>
    </div>

    <div class="graph-panel graph-legend" id="graph-legend">
      <div class="lg-title">Domains</div>
    </div>

    <div class="graph-hint">
      <span><b>拖拽</b> 平移</span><span><b>滚轮</b> 缩放</span><span><b>悬停</b> 高亮邻接</span><span><b>点击</b> 打开笔记</span>
    </div>

    <div class="graph-tooltip" id="graph-tip"></div>
  </div>
</div>
`;
}

// ------------------------------------------------------------------ notes index

function renderNotesIndex({ notes, years, venues, tags, stats, noteUrl }) {
  const rows = notes
    .map((n) => {
      const d = domainOf(n.tags);
      return `<a class="note-row" href="${noteUrl(n)}"
        data-title="${esc(n.title.toLowerCase())}"
        data-year="${n.year || ""}"
        data-venue="${esc(n.venue || "")}"
        data-tags="${esc(n.tags.join(" ").toLowerCase())}"
        data-body="${n.hasBody ? 1 : 0}">
      <span class="nr-year">${n.year || "—"}</span>
      <span class="nr-title">${esc(n.title)}${n.hasBody ? "" : '<span class="nr-stub">摘要</span>'}
        <span class="nr-tags">${n.tags
          .slice(0, 4)
          .map((t) => `<span>${esc(t)}</span>`)
          .join("")}</span>
      </span>
      <span class="nr-right"><span class="nr-venue">${esc(n.venue || "")}</span></span>
    </a>`;
    })
    .join("");

  const yearOpts = years
    .map((y) => `<option value="${y.year}">${y.year} (${y.count})</option>`)
    .join("");
  const venueOpts = venues
    .map(([v, c]) => `<option value="${esc(v)}">${esc(v)} (${c})</option>`)
    .join("");

  return `
<div class="page-head">
  <h1 class="page-title">全部笔记</h1>
  <p class="page-sub">${stats.total} 篇论文，其中 ${stats.withBody} 篇有完整的方法梳理与推导记录。按年份、会议或标签筛选，或用关键词搜索标题与标签。</p>
</div>

<div class="page-head" style="padding-top:0">
  <div class="filters">
    <input class="filter-input" id="f-q" type="search" placeholder="搜索标题 / 标签…" autocomplete="off">
    <select class="filter-select" id="f-year"><option value="">全部年份</option>${yearOpts}</select>
    <select class="filter-select" id="f-venue"><option value="">全部会议</option>${venueOpts}</select>
    <select class="filter-select" id="f-body">
      <option value="">全部内容</option>
      <option value="1">仅完整笔记</option>
      <option value="0">仅摘要</option>
    </select>
    <span class="filter-count" id="f-count">${stats.total} 篇</span>
  </div>
</div>

<div class="note-list" id="note-list">
  ${rows}
  <div class="empty-state" id="empty" style="display:none">没有匹配的笔记，试试放宽筛选条件。</div>
</div>
`;
}

// ------------------------------------------------------------------ tag / venue pages

function renderTagPage({ tag, notes, noteUrl }) {
  const rows = notes
    .map(
      (n) => `<a class="note-row" href="${noteUrl(n)}">
      <span class="nr-year">${n.year || "—"}</span>
      <span class="nr-title">${esc(n.title)}${n.hasBody ? "" : '<span class="nr-stub">摘要</span>'}</span>
      <span class="nr-right"><span class="nr-venue">${esc(n.venue || "")}</span></span>
    </a>`
    )
    .join("");

  return `
<div class="page-head">
  <div style="font-size:12px;color:var(--text-faint);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px">Tag</div>
  <h1 class="page-title">#${esc(tag)}</h1>
  <p class="page-sub">${notes.length} 篇笔记带有这个标签。</p>
</div>
<div class="note-list">${rows}</div>
`;
}

function renderVenuePage({ venue, notes, noteUrl }) {
  const rows = notes
    .map(
      (n) => `<a class="note-row" href="${noteUrl(n)}">
      <span class="nr-year">${n.year || "—"}</span>
      <span class="nr-title">${esc(n.title)}${n.hasBody ? "" : '<span class="nr-stub">摘要</span>'}</span>
      <span class="nr-right"><span class="nr-venue">${esc(n.venue)}</span></span>
    </a>`
    )
    .join("");

  return `
<div class="page-head">
  <div style="font-size:12px;color:var(--text-faint);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px">Venue</div>
  <h1 class="page-title">${esc(venue)}</h1>
  <p class="page-sub">${notes.length} 篇笔记来自 ${esc(venue)}。</p>
</div>
<div class="note-list">${rows}</div>
`;
}

// ------------------------------------------------------------------ tags index

function renderTagsPage({ majorTags, minorTags, stats }) {
  const majorHtml = majorTags
    .map(
      ([tag, count]) => `<a class="tag-cloud-item" href="${url(
        "/tags/" + encodeURIComponent(String(tag).toLowerCase().replace(/[\s/]+/g, "-")) + ".html"
      )}" data-n="${count}">
      <span class="tc-hash">#</span><span class="tc-name">${esc(tag)}</span><span class="tc-n">${count}</span>
    </a>`
    )
    .join("");

  const minorHtml = minorTags
    .map(
      ([tag, count]) => `<span class="tag-minor" data-n="${count}">#${esc(tag)}<i>${count}</i></span>`
    )
    .join("");

  return `
<div class="page-head">
  <h1 class="page-title">Topics</h1>
  <p class="page-sub">全部 ${stats.tags} 个标签。${majorTags.length} 个主要主题各有独立页面，长尾标签列在下方。</p>
</div>

<div class="page-head" style="padding-top:0">
  <div class="tag-cloud" id="tag-cloud">${majorHtml}</div>

  <div style="margin-top:44px">
    <div class="section-title" style="margin-bottom:18px">Long tail</div>
    <div class="tag-minor-cloud">${minorHtml}</div>
  </div>
</div>
`;
}

// ------------------------------------------------------------------ note page

function renderNote({ note, content, annHtml, toc, related, noteUrl, tagPages, venuePages, stats }) {
  const n = note;

  const tocHtml = toc
    .map(
      (t) =>
        `<a class="lv${t.level}" href="#${t.id}" data-toc="${t.id}">${esc(t.text)}</a>`
    )
    .join("");

  const relatedHtml = related.length
    ? `<div class="related">
      <h3>相关笔记</h3>
      <div class="related-grid">
        ${related
          .map(
            (r) => `<a class="related-item" href="${noteUrl(r)}">
            <span class="rv">${esc(r.venue || "")} ${r.year || ""}</span>
            <span class="rt">${esc(r.title)}</span>
          </a>`
          )
          .join("")}
      </div>
    </div>`
    : "";

  const tagsHtml = n.tags
    .map((t) => {
      const has = !tagPages || tagPages.has(t);
      const href = has
        ? `/tags/${encodeURIComponent(t.toLowerCase().replace(/[\s/]+/g, "-"))}.html`
        : "/tags.html";
      return `<a href="${url(href)}"${has ? "" : ' title="该标签笔记较少，见标签索引"'}>#${esc(t)}</a>`;
    })
    .join("");

  const venueChip = n.venue
    ? (() => {
        const has = !venuePages || venuePages.has(n.venue);
        const href = has ? `/venues/${encodeURIComponent(n.venue)}.html` : "/notes.html";
        return `<a class="chip" href="${url(href)}">${esc(n.venue)}</a>`;
      })()
    : "";

  const metaLine = [n.journal, n.conference].filter(Boolean).join(" · ");

  const annBlock = annHtml
    ? `<details class="annotations">
      <summary>Annotations<span class="ann-meta">原文摘录与批注</span></summary>
      <div class="prose">${annHtml}</div>
    </details>`
    : "";

  return `
<div class="note-layout">
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-head">
      <span>${stats.total} 篇笔记</span>
      <button id="sidebar-close" aria-label="关闭">✕</button>
    </div>
    <div class="tree" id="tree" data-current="${esc(n.citekey)}"></div>
  </aside>

  <div class="article-wrap">
    <article class="article">
      <div class="note-meta-top">
        ${n.year ? `<span class="chip">${n.year}</span>` : ""}
        ${venueChip}
        ${n.hasBody ? "" : '<span class="chip" style="border-style:dashed">仅摘要</span>'}
        <span style="margin-left:auto">
          <a href="${url("/notes.html")}">全部笔记</a>
        </span>
      </div>

      <h1 class="note-title">${esc(n.title)}</h1>

      ${
        n.authors || n.firstAuthor
          ? `<div class="note-byline">
              <span class="authors">${esc(formatAuthors(n.authors || n.firstAuthor))}</span>
              ${metaLine ? `<span class="src">${esc(metaLine)}</span>` : ""}
            </div>`
          : ""
      }

      ${tagsHtml ? `<div class="note-tags">${tagsHtml}</div>` : ""}

      <div class="prose" id="note-body">
        ${content}
      </div>

      ${annBlock}
      ${relatedHtml}

      <div class="pager" id="pager"></div>
    </article>
  </div>

  <div class="toc-col">
    <div class="toc-title">On this page</div>
    <nav class="toc" id="toc">${tocHtml}</nav>
  </div>
</div>

<script id="note-neighbors" type="application/json">${JSON.stringify({
    note: n.citekey,
    title: n.title,
    tags: n.tags,
    year: n.year,
  })}</script>
`;
}

function formatAuthors(raw) {
  if (!raw) return "";
  // 形如 "Gu, Albert; Dao, Tri;" → 逐个 name 反转
  const parts = raw
    .split(/[;；]/)
    .map((x) => x.trim())
    .filter((x) => x && !/^[,\s]+$/.test(x));
  if (!parts.length) return raw;
  const names = parts.map((p) => {
    const [last, first] = p.split(",").map((x) => x.trim());
    return first ? `${first} ${last}` : last;
  });
  if (names.length > 6) return names.slice(0, 5).join(", ") + ` et al. (${names.length})`;
  return names.join(", ");
}

// ------------------------------------------------------------------ 404

function render404() {
  return `<div class="notfound">
  <div>
    <div class="code">404</div>
    <p style="color:var(--text-dim);margin:0 0 24px">这个页面不存在。</p>
    <a class="btn btn-primary" href="${url("/")}">返回首页</a>
  </div>
</div>`;
}

// ------------------------------------------------------------------ 搜索层

function renderSearchOverlay() {
  return `<div class="search-overlay" id="search-overlay">
  <div class="search-box">
    <div class="search-input-row">
      ${ICON.search}
      <input type="search" id="search-input" placeholder="搜索论文标题、标签、摘要…" autocomplete="off" spellcheck="false">
      <kbd>ESC</kbd>
    </div>
    <div class="search-results" id="search-results"></div>
    <div class="search-foot">
      <span><kbd>↑</kbd><kbd>↓</kbd> 选择</span>
      <span><kbd>↵</kbd> 打开</span>
      <span id="search-total"></span>
    </div>
  </div>
</div>`;
}

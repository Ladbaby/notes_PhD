import MarkdownIt from "markdown-it";
import katex from "katex";

const md = new MarkdownIt({ html: true, linkify: true, breaks: false, typographer: false });

// Zotero 的 zotero:// 深链只在本地 Zotero 客户端里有效，公开站点上点了没反应。
// 保留可见文字（"Page 3"），去掉不可用的链接。
md.core.ruler.push("strip-zotero-links", (state) => {
  const walk = (tokens) => {
    for (const t of tokens) {
      if (t.type !== "link_open") continue;
      const href = t.attrGet("href") || "";
      if (!/^zotero:\/\//i.test(href)) continue;
      t.attrSet("href", "#");
      t.attrSet("class", "dead-link");
      t.attrSet("title", "原链接指向 Zotero 本地库，网页版不可用");
    }
    return tokens;
  };
  for (const t of state.tokens) {
    if (t.children) walk(t.children);
  }
});

// ---------------------------------------------------------------- 工具函数

const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** 对路径逐段做 URL 编码（保留 /），文件名里的空格必须编码，否则 markdown 链接会被截断 */
const encodePath = (p) =>
  String(p)
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");

const slug = (s) =>
  String(s)
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "section";

/** 归一化标签：小写、去空、保留 / 层级 */
export const normalizeTag = (t) => String(t).trim().replace(/\s+/g, "-");

/** 会议标签形如 ICLR/2024 */
export const isVenueTag = (t) => /^[^/]+\/\d{4}$/.test(t);

// ---------------------------------------------------------------- 数学公式

/** 先把数学公式抽成占位符，避免 markdown-it 破坏 _ * \ 等字符 */
function protectMath(text) {
  const store = [];
  // 用 Unicode 私用区字符做占位符：NUL 会被 markdown-it 替换成 U+FFFD 导致还原失败
  const OPEN = "\uE000";
  const CLOSE = "\uE001";
  const put = (html) => `${OPEN}${store.push(html) - 1}${CLOSE}`;

  let out = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, body) => {
    const tex = body.trim();
    try {
      return put(katex.renderToString(tex, { displayMode: true, throwOnError: false, output: "html" }));
    } catch {
      return put(`<pre class="math-error">${escapeHtml(tex)}</pre>`);
    }
  });

  // 行内公式：$...$，排除 $ 后紧跟空格 / 数字货币写法
  out = out.replace(/(?<![\\$])\$(?!\s)([^$\n]{1,400}?)(?<!\s)\$(?![\d$])/g, (m, body) => {
    const tex = body.trim();
    if (!tex) return m;
    try {
      return put(katex.renderToString(tex, { displayMode: false, throwOnError: false, output: "html" }));
    } catch {
      return m;
    }
  });

  return {
    text: out,
    restore: (html) => html.replace(/\uE000(\d+)\uE001/g, (_, i) => store[Number(i)]),
  };
}

// ---------------------------------------------------------------- 行内语法

/**
 * @param {string} text
 * @param {{ resolveImage: (raw:string)=>string|null, resolveNote: (raw:string)=>string|null }} ctx
 */
function inlineTransforms(text, ctx) {
  let out = text;

  // Obsidian 高亮 ==text==
  out = out.replace(/==([^=\n]+?)==/g, '<mark class="ob-highlight">$1</mark>');

  // 图片嵌入 ![[path/to.png]] / ![[img.png|300]]
  out = out.replace(/!\[\[([^\]|]+?)(?:\|([^\]]*))?\]\]/g, (m, raw, size) => {
    const src = ctx.resolveImage(raw.trim());
    if (!src) return `<span class="missing-image">[图片缺失: ${escapeHtml(raw.trim())}]</span>`;
    const w = size && /^\d+$/.test(size.trim()) ? ` width="${size.trim()}"` : "";
    return `<img class="ob-img" src="${escapeHtml(encodePath(src))}" alt=""${w} loading="lazy">`;
  });

  // 标准 Markdown 图片会被 markdown-it 处理，这里提前把文件名重写为站点路径
  out = out.replace(/(!\[[^\]]*\]\()([^)\s]+)(\))/g, (m, pre, href, post) => {
    if (/^(https?:)?\/\//.test(href) || href.startsWith("data:")) return m;
    const src = ctx.resolveImage(decodeURIComponent(href));
    return src ? `${pre}${encodePath(src)}${post}` : `<span class="missing-image">[图片缺失: ${escapeHtml(href)}]</span>`;
  });

  // 内部笔记链接 [text](citekey.md) —— 重写为站点 URL
  out = out.replace(/(?<!!)\[([^\]]*)\]\(([^)\s]+\.md)\)/g, (m, label, href) => {
    const url = ctx.resolveNote(decodeURIComponent(href));
    const text_ = label || href.replace(/\.md$/, "");
    return url
      ? `<a class="wikilink" href="${escapeHtml(url)}">${text_}</a>`
      : `<span class="broken-link" title="笔记不存在：${escapeHtml(href)}">${text_}</span>`;
  });

  // 外部链接 target=_blank
  out = out.replace(/(<a\s[^>]*href="https?:\/\/[^"]*")/g, '$1 target="_blank" rel="noopener"');

  return out;
}

// ---------------------------------------------------------------- Callout

const DEFAULT_TITLE = {
  info: "Info",
  cite: "Reference",
  quote: "Highlight",
  note: "Note",
  warning: "Warning",
  question: "Question",
  syn: "Contribution",
  synth: "Contribution",
};

const CALLOUT_META = {
  info: { icon: "◈", cls: "info" },
  cite: { icon: "❝", cls: "cite" },
  quote: { icon: "❞", cls: "quote" },
  note: { icon: "✎", cls: "note" },
  warning: { icon: "⚠", cls: "warning" },
  question: { icon: "?", cls: "question" },
  syn: { icon: "◎", cls: "syn" },
  synth: { icon: "◎", cls: "syn" },
};

/**
 * 把 `> [!type]` 块渲染成 HTML。
 * Obsidian 里这种块内常见的 `**Label**:: value` 会被渲染成「标签 + 内容」结构。
 */
function renderCallout(type, title, color, bodyLines, ctx, renderBlocksFn) {
  const meta = CALLOUT_META[type.toLowerCase()] || { icon: "◆", cls: "note" };
  const body = bodyLines.join("\n").trim();

  let head = title ? title.trim() : "";
  let content = body;

  // `**Label**:: value` 形式
  const kv = body.match(/^\*\*(.+?)\*\*::\s*([\s\S]*)$/);
  if (kv) {
    head = head || kv[1].trim();
    content = kv[2].trim();
  }

  const styleAttr = color ? ` style="--callout-accent:${escapeHtml(color)}"` : "";
  const colorCls = color ? " has-color" : "";
  const bodyHtml = content ? renderBlocksFn(content, ctx) : "";

  const label = head || DEFAULT_TITLE[type.toLowerCase()] || "";
  const headHtml = `<div class="callout-head"><span class="callout-icon">${meta.icon}</span><span class="callout-title">${escapeHtml(
    label
  )}</span></div>`;

  return `<div class="callout callout-${meta.cls}${colorCls}"${styleAttr}>${headHtml}<div class="callout-body">${bodyHtml}</div></div>`;
}

// ---------------------------------------------------------------- 块级解析

/** 判断是否为 callout 起始行 */
const CALLOUT_START = /^>\s*\[!([A-Za-z]+)(?:\|([^\]]+))?\]\s*(.*)$/;

/**
 * 把笔记正文切成块并渲染。
 * 交给 markdown-it 的部分只包含它认识的语法，Obsidian 专有块先被解析掉。
 */
export function renderBlocks(text, ctx) {
  const lines = text.split("\n");
  const out = [];
  let buf = [];

  const flushMd = () => {
    if (!buf.length) return;
    const chunk = buf.join("\n");
    buf = [];
    if (!chunk.trim()) return;
    const { text: protectedText, restore } = protectMath(inlineTransforms(chunk, ctx));
    out.push(restore(md.render(protectedText)));
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // --- Callout ---
    const cm = line.match(CALLOUT_START);
    if (cm) {
      flushMd();
      const type = cm[1];
      const color = cm[2] || null;
      const titleInline = cm[3] || "";
      const body = [];
      let j = i + 1;
      for (; j < lines.length; j++) {
        const l = lines[j];
        // 遇到下一个 callout 头就结束当前块
        if (CALLOUT_START.test(l)) break;
        if (/^>\s?/.test(l)) {
          body.push(l.replace(/^>\s?/, ""));
        } else if (l.trim() === "" && j + 1 < lines.length && /^>\s?/.test(lines[j + 1]) && !CALLOUT_START.test(lines[j + 1])) {
          body.push("");
        } else break;
      }
      // 若首行带了标题文本则并入正文开头
      if (titleInline.trim()) body.unshift(titleInline);
      out.push(renderCallout(type, "", color, body, ctx, renderBlocks));
      i = j - 1;
      continue;
    }

    // --- !!! admonition ---
    const am = line.match(/^!!!\s*([A-Za-z]+)\s*(.*)$/);
    if (am) {
      flushMd();
      const kind = am[1].toLowerCase();
      const title = am[2].trim();
      const body = [];
      let j = i + 1;
      for (; j < lines.length; j++) {
        if (/^\s{2,}\S/.test(lines[j]) || lines[j].trim() === "") {
          if (lines[j].trim() === "" && j + 1 < lines.length && !/^\s{2,}\S/.test(lines[j + 1])) break;
          body.push(lines[j].replace(/^\s{4}/, "").replace(/^\s{1,3}/, ""));
        } else break;
      }
      const icon = kind === "question" ? "?" : kind === "note" ? "✎" : "◆";
      out.push(
        `<div class="callout callout-${escapeHtml(kind)}"><div class="callout-head"><span class="callout-icon">${icon}</span><span class="callout-title">${escapeHtml(
          title || kind
        )}</span></div><div class="callout-body">${renderBlocks(body.join("\n"), ctx)}</div></div>`
      );
      i = j - 1;
      continue;
    }

    buf.push(line);
  }

  flushMd();

  // Zotero 深链只在本地客户端有效。上面的 md 规则只覆盖 markdown 链接，
  // 而 Zotero 导出的目录是直接写在笔记里的 HTML，这里统一兜底。
  return out
    .join("\n")
    .replace(
      /<a\s+([^>]*?)href="zotero:\/\/[^"]*"([^>]*)>/gi,
      (_m, a, b) => `<a ${a}${b} class="dead-link" title="原链接指向 Zotero 本地库，网页版不可用">`
    );
}

// ---------------------------------------------------------------- 标题锚点

/** 给 h2/h3 加 id，供目录与锚点跳转使用。跳过 callout 内部标题。 */
export function addHeadingIds(html) {
  const used = new Map();
  return html.replace(/<h([234])>([\s\S]*?)<\/h\1>/g, (m, lvl, inner) => {
    const plain = inner
      .replace(/<[^>]+>/g, "")
      .replace(/&[a-z]+;/g, " ")
      .trim();
    if (!plain) return m;
    let id = slug(plain);
    const n = used.get(id) || 0;
    used.set(id, n + 1);
    if (n > 0) id = `${id}-${n}`;
    return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
  });
}

/** 从渲染后的 HTML 提取目录 */
export function extractToc(html) {
  const toc = [];
  const re = /<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/g;
  let m;
  while ((m = re.exec(html))) {
    const text = m[3]
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .trim();
    if (text) toc.push({ level: Number(m[1]), id: m[2], text });
  }
  return toc;
}

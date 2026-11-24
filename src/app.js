/* ============================================================
   notes_PhD — client runtime
   ============================================================ */

const BASE = document.documentElement.dataset.base || "";
const page = document.documentElement.dataset.page || "";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ------------------------------------------------------------ nav

const nav = $("#nav");
if (nav) {
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ------------------------------------------------------------ 搜索

let searchData = null;
let searchPromise = null;

function loadSearch() {
  if (!searchPromise) {
    searchPromise = fetch(`${BASE}/data/search.json`)
      .then((r) => r.json())
      .then((d) => (searchData = d))
      .catch(() => (searchData = []));
  }
  return searchPromise;
}

function initSearchOverlay() {
  const overlay = $("#search-overlay");
  const input = $("#search-input");
  const results = $("#search-results");
  const total = $("#search-total");
  if (!overlay || !input) return;

  let idx = -1;
  let items = [];

  const open = async () => {
    overlay.classList.add("open");
    document.body.classList.add("no-scroll");
    input.value = "";
    input.focus();
    await loadSearch();
    total.textContent = searchData ? `${searchData.length} 篇可搜索` : "";
    render("");
  };
  const close = () => {
    overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
    idx = -1;
  };

  const score = (item, q) => {
    const t = item.t.toLowerCase();
    const tags = (item.g || []).join(" ").toLowerCase();
    let s = 0;
    if (t.startsWith(q)) s += 100;
    if (t.includes(q)) s += 50;
    if (tags.includes(q)) s += 22;
    if (item.s && item.s.toLowerCase().includes(q)) s += 8;
    if (String(item.y) === q) s += 40;
    return s;
  };

  const render = (q) => {
    const query = q.trim().toLowerCase();
    let list;
    if (!query) {
      list = (searchData || []).slice(0, 30);
    } else {
      list = (searchData || [])
        .map((it) => ({ it, s: score(it, query) }))
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s || (b.it.r || 0) - (a.it.r || 0))
        .slice(0, 40)
        .map((x) => x.it);
    }
    items = list;
    idx = list.length ? 0 : -1;

    if (!list.length) {
      results.innerHTML = `<div class="search-none">没有找到匹配「${escapeHtml(q)}」的笔记</div>`;
      return;
    }

    results.innerHTML = list
      .map(
        (it, i) => `<a class="sr-item${i === idx ? " sel" : ""}" href="${BASE}/notes/${it.i}.html">
        <div class="sr-t">${hl(it.t, query)}</div>
        <div class="sr-m">
          ${it.y ? `<span>${it.y}</span>` : ""}
          ${it.v ? `<span>${escapeHtml(it.v)}</span>` : ""}
          ${it.a ? "" : '<span style="opacity:.6">摘要</span>'}
        </div>
        ${it.s ? `<div class="sr-s">${hl(it.s, query)}</div>` : ""}
      </a>`
      )
      .join("");
  };

  const move = (d) => {
    if (!items.length) return;
    idx = (idx + d + items.length) % items.length;
    $$(".sr-item", results).forEach((el, i) => el.classList.toggle("sel", i === idx));
    const sel = $(".sr-item.sel", results);
    if (sel) sel.scrollIntoView({ block: "nearest" });
  };

  input.addEventListener("input", () => render(input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      move(-1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const sel = $(".sr-item.sel", results);
      if (sel) location.href = sel.getAttribute("href");
    } else if (e.key === "Escape") {
      close();
    }
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      overlay.classList.contains("open") ? close() : open();
    }
    if (e.key === "Escape" && overlay.classList.contains("open")) close();
  });

  const btn = $("#search-open");
  if (btn) btn.addEventListener("click", open);

  const nf = $("#graph-filter");
  if (nf) {
    nf.addEventListener("input", () => {
      /* graph 页自己处理 */
    });
  }

  window.__openSearch = open;
}

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function hl(text, q) {
  const safe = escapeHtml(text);
  if (!q) return safe;
  const i = safe.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return safe;
  return safe.slice(0, i) + "<mark style='background:rgba(94,234,212,.22);color:#5eead4;padding:0 1px;border-radius:2px'>" + safe.slice(i, i + q.length) + "</mark>" + safe.slice(i + q.length);
}

// ------------------------------------------------------------ 笔记页

/** 侧栏目录：从 search.json 客户端构建，避免每页内嵌 784 条链接 */
async function buildSidebar() {
  const el = $("#tree");
  if (!el) return;
  const current = el.dataset.current || "";
  await loadSearch();
  if (!searchData) return;

  // 年份 → 会议 → 笔记
  const map = new Map();
  for (const x of searchData) {
    const y = x.y || 0;
    if (!map.has(y)) map.set(y, new Map());
    const vk = x.v || "—";
    const vm = map.get(y);
    if (!vm.has(vk)) vm.set(vk, []);
    vm.get(vk).push(x);
  }

  const cur = searchData.find((x) => x.i === current);
  const curYear = cur ? cur.y : null;

  const yearKeys = [...map.keys()].sort((a, b) => b - a);
  const parts = [];

  for (const y of yearKeys) {
    const vm = map.get(y);
    const total = [...vm.values()].reduce((s, a) => s + a.length, 0);
    const isCur = y === curYear;

    const venueParts = [];
    for (const vk of [...vm.keys()].sort()) {
      const items = vm.get(vk).sort((a, b) => a.t.localeCompare(b.t));
      const hasCur = items.some((i) => i.i === current);
      const noteItems = items
        .map(
          (i) =>
            `<a class="tree-note${i.i === current ? " current" : ""}" href="${BASE}/notes/${i.i}.html" title="${escapeHtml(
              i.t
            )}">${escapeHtml(i.t)}</a>`
        )
        .join("");

      if (vk === "—" || items.length === 1) {
        venueParts.push(noteItems);
      } else {
        venueParts.push(
          `<details class="tree-venue"${hasCur || isCur ? " open" : ""}>
            <summary>${escapeHtml(vk)}<span class="tree-count">${items.length}</span></summary>
            <div class="tree-notes">${noteItems}</div>
          </details>`
        );
      }
    }

    // 只有当前年份默认展开，其余折叠以减少 DOM
    parts.push(
      `<details class="tree-year"${isCur ? " open" : ""}>
        <summary>${y || "未知"}<span class="tree-count">${total}</span></summary>
        <div class="tree-notes">${venueParts.join("")}</div>
      </details>`
    );
  }

  el.innerHTML = parts.join("");
}

function initNotePage() {
  const body = $("#note-body");
  if (!body) return;

  // 阅读进度
  const bar = $("#progress");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
    if (bar) bar.style.width = `${Math.min(100, p * 100)}%`;
    updateToc();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // TOC 高亮
  const tocLinks = $$("#toc a");
  const heads = tocLinks
    .map((a) => {
      const id = a.dataset.toc;
      const el = document.getElementById(id);
      return el ? { el, a } : null;
    })
    .filter(Boolean);

  function updateToc() {
    if (!heads.length) return;
    const top = window.scrollY + 120;
    let cur = heads[0];
    for (const h of heads) {
      if (h.el.offsetTop <= top) cur = h;
    }
    heads.forEach((h) => h.a.classList.toggle("active", h === cur));
  }

  // 移动端侧栏
  const sidebar = $("#sidebar");
  const toggle = $("#nav-toggle");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => sidebar.classList.toggle("open"));
    const close = $("#sidebar-close");
    if (close) close.addEventListener("click", () => sidebar.classList.remove("open"));
  }

  // 相邻笔记
  const pager = $("#pager");
  const data = $("#note-neighbors");
  if (pager && data) {
    try {
      const cur = JSON.parse(data.textContent);
      buildPager(pager, cur);
    } catch {}
  }

  // 图片点击放大
  $$("#note-body img, .annotations img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const ov = document.createElement("div");
      ov.style.cssText =
        "position:fixed;inset:0;z-index:300;background:rgba(4,5,10,.94);display:grid;place-items:center;padding:32px;cursor:zoom-out;backdrop-filter:blur(6px)";
      const im = document.createElement("img");
      im.src = img.src;
      im.style.cssText = "max-width:100%;max-height:100%;border-radius:8px;box-shadow:0 24px 80px rgba(0,0,0,.7)";
      ov.appendChild(im);
      ov.addEventListener("click", () => ov.remove());
      document.addEventListener(
        "keydown",
        function esc(e) {
          if (e.key === "Escape") {
            ov.remove();
            document.removeEventListener("keydown", esc);
          }
        }
      );
      document.body.appendChild(ov);
    });
  });
}

async function buildPager(pager, cur) {
  // 用 search.json 的排序（年份倒序）推断前后
  await loadSearch();
  if (!searchData) return;
  const list = [...searchData].sort((a, b) => (b.y || 0) - (a.y || 0) || a.t.localeCompare(b.t));
  const i = list.findIndex((x) => x.i === cur.note);
  if (i === -1) return;
  const prev = list[i - 1];
  const next = list[i + 1];
  const cell = (it, dir) =>
    it
      ? `<a href="${BASE}/notes/${it.i}.html" class="${dir}">
          <span class="dir">${dir === "prev" ? "← 上一篇" : "下一篇 →"}</span>
          <span class="ttl">${escapeHtml(it.t)}</span>
        </a>`
      : "<span></span>";
  pager.innerHTML = cell(prev, "prev") + cell(next, "next");
}

// ------------------------------------------------------------ 笔记索引页

function initNotesIndex() {
  const list = $("#note-list");
  if (!list) return;
  const rows = $$(".note-row", list);
  const q = $("#f-q");
  const fYear = $("#f-year");
  const fVenue = $("#f-venue");
  const fBody = $("#f-body");
  const count = $("#f-count");
  const empty = $("#empty");

  const apply = () => {
    const query = (q?.value || "").trim().toLowerCase();
    const year = fYear?.value || "";
    const venue = fVenue?.value || "";
    const bodymode = fBody?.value || "";
    let shown = 0;

    for (const r of rows) {
      let ok = true;
      if (query) {
        const hay = `${r.dataset.title} ${r.dataset.tags}`;
        ok = query.split(/\s+/).every((w) => hay.includes(w));
      }
      if (ok && year) ok = r.dataset.year === year;
      if (ok && venue) ok = r.dataset.venue === venue;
      if (ok && bodymode) ok = r.dataset.body === bodymode;
      r.style.display = ok ? "" : "none";
      if (ok) shown++;
    }
    if (count) count.textContent = `${shown} 篇`;
    if (empty) empty.style.display = shown ? "none" : "";
  };

  [q, fYear, fVenue, fBody].forEach((el) => el && el.addEventListener("input", apply));

  // 从 URL hash 预筛选年份
  if (location.hash.startsWith("#y") && fYear) {
    fYear.value = location.hash.slice(2);
    apply();
  }

  // 年份直达链接
  const nav2 = $("#nav-toggle");
  if (nav2) nav2.addEventListener("click", () => {});
}

// ------------------------------------------------------------ 首页

/**
 * 首页背景图谱的性能约定：
 *
 *   canvas 只在尺寸变化时重绘一次，之后完全静态。
 *   动效交给 CSS transform / opacity，走合成器，不碰 CPU 光栅化。
 *
 * 之前每帧 redraw 620 个节点和几千条线，而视觉上只是极微弱的呼吸，
 * 代价与收益完全不匹配——这是"什么都不干 GPU 占用却很高"的直接原因。
 */
/**
 * 首页图谱的动态层：节点呼吸式明灭 + 光点沿边穿梭。
 *
 * 分成两张 canvas 的原因：静态的节点与连线只画一次，永不重绘；
 * 这张只画几十个会变的小东西。若混在一起，每帧都要重画几千条线，
 * 而肉眼根本看不出那些线在动——纯浪费。
 */
function startSparkles(nodes, links) {
  const cv = $('#hero-spark');
  if (!cv || !nodes.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = cv.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  let W = 0;
  let H = 0;


  // 光点：沿着真实存在的边奔跑，从一个节点滑到另一个节点
  const SPARKS = Math.min(26, links.length);
  const sparks = [];
  const pickSpark = () => {
    const l = links[(Math.random() * links.length) | 0];
    const s = nodes[l.s];
    const t = nodes[l.t];
    const len = Math.hypot(t.x - s.x, t.y - s.y);
    return { s, t, u: 0, speed: (60 + Math.random() * 90) / Math.max(len, 1), hue: Math.random() };
  };
  for (let i = 0; i < SPARKS; i++) {
    const sp = pickSpark();
    sp.u = Math.random(); // 错开出发时间，避免同时起步
    sparks.push(sp);
  }

  function resize() {
    const rect = cv.getBoundingClientRect();
    W = Math.round(rect.width);
    H = Math.round(rect.height);
    if (!W || !H) return false;
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return true;
  }

  const easeInOut = (x) => 0.5 - 0.5 * Math.cos(Math.PI * x);

  let last = 0;
  let raf = 0;
  let running = false;
  let visible = true;

  function frame(ts) {
    raf = requestAnimationFrame(frame);
    // 限到 ~30fps：这类缓慢氛围动效不需要 60，省一半光栅化
    if (ts - last < 33) return;
    last = ts;
    if (!visible || document.hidden) return;

    ctx.clearRect(0, 0, W, H);

    // 2) 光点沿边穿梭，带一小段拖尾
    for (const sp of sparks) {
      sp.u += sp.speed * 0.033;
      if (sp.u >= 1) {
        Object.assign(sp, pickSpark(), { u: 0 });
        continue;
      }
      const x = sp.s.x + (sp.t.x - sp.s.x) * sp.u;
      const y = sp.s.y + (sp.t.y - sp.s.y) * sp.u;
      const fade = Math.sin(Math.PI * sp.u); // 两端淡入淡出，不会突然出现/消失
      const hue = sp.hue < 0.5 ? '150, 240, 210' : '190, 200, 255';

      // 短而亮的拖尾：太长会和静态的边混在一起，看不出是&quot;在跑&quot;
      const trail = 0.055;
      const px = sp.s.x + (sp.t.x - sp.s.x) * Math.max(0, sp.u - trail);
      const py = sp.s.y + (sp.t.y - sp.s.y) * Math.max(0, sp.u - trail);
      const g = ctx.createLinearGradient(px, py, x, y);
      g.addColorStop(0, `rgba(${hue}, 0)`);
      g.addColorStop(1, `rgba(${hue}, ${(0.95 * fade).toFixed(3)})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = 2.4;
      ctx.lineCap = `round`;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(x, y);
      ctx.stroke();

      // 光头：三层同心圆做柔光，小尺寸下也能一眼看到
      ctx.fillStyle = `rgba(${hue}, 1)`;
      ctx.globalAlpha = 0.16 * fade;
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.3 * fade;
      ctx.beginPath();
      ctx.arc(x, y, 4.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = fade;
      ctx.beginPath();
      ctx.arc(x, y, 2.1, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }

  function start() {
    if (running || !resize()) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, W, H);
  }

  start();

  // 滚出首屏或切到别的标签页就停掉，不后台空转
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
  }, { threshold: 0 });
  io.observe(cv);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else if (visible) start();
  });

  let rt = null;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (resize()) {
        last = 0;
      }
    }, 220);
  });
}

async function initHero() {
  const canvas = $("#hero-canvas");
  if (!canvas) return;

  let payload;
  try {
    const res = await fetch(`${BASE}/data/hero-graph.json`);
    payload = await res.json();
  } catch {
    return;
  }
  const { nodes: rawNodes, links: rawLinks } = payload;
  if (!rawNodes || !rawNodes.length) return;

  const ctx = canvas.getContext("2d");

  const nodes = rawNodes.map((n) => ({ nx: n.x, ny: n.ny, w: n.w, color: n.d, x: 0, y: 0, r: 0 }));
  const links = rawLinks
    .map((l) => {
      const s = typeof l.s === "number" ? l.s : -1;
      const t = typeof l.t === "number" ? l.t : -1;
      return s >= 0 && t >= 0 && s < nodes.length && t < nodes.length ? { s, t } : null;
    })
    .filter(Boolean);

  let lastKey = "";

  function paint() {
    const rect = canvas.getBoundingClientRect();
    const W = Math.round(rect.width);
    const H = Math.round(rect.height);
    if (!W || !H) return;

    // 尺寸没变就不重绘。这是"只在必要时画"的关键。
    const key = `${W}x${H}`;
    if (key === lastKey) return;
    lastKey = key;

    // 装饰层用 1x 位图足够，DPR 2 会让像素数翻 4 倍而没有可见收益
    const dpr = 1;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const span = Math.max(W, H) * 1.15;
    const cx = W / 2;
    const cy = H / 2;
    for (const n of nodes) {
      n.x = cx + (n.nx - 0.5) * span;
      n.y = cy + (n.ny - 0.5) * span;
      n.r = 0.6 + Math.sqrt(n.w || 1) * 0.6;
    }

    // 边
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(130,155,210,1)";
    ctx.globalAlpha = 0.055;
    ctx.beginPath();
    for (let k = 0; k < links.length; k += 2) {
      const l = links[k];
      const s = nodes[l.s];
      const t = nodes[l.t];
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
    }
    // 一次性提交所有线段，而不是逐条 stroke
    ctx.stroke();

    // 节点：按颜色分组，减少状态切换
    const byColor = new Map();
    for (const n of nodes) {
      if (!byColor.has(n.color)) byColor.set(n.color, []);
      byColor.get(n.color).push(n);
    }

    for (const [color, group] of byColor) {
      ctx.fillStyle = color;

      ctx.globalAlpha = 0.16;
      ctx.beginPath();
      for (const n of group) {
        ctx.moveTo(n.x + n.r * 3.4, n.y);
        ctx.arc(n.x, n.y, n.r * 3.4, 0, Math.PI * 2);
      }
      ctx.fill();

      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      for (const n of group) {
        ctx.moveTo(n.x + n.r, n.y);
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      }
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    canvas.classList.add("ready");
  }

// ---- 动态层：闪烁节点 + 沿边穿梭的光点
  // 静态图谱已经画好在另一张 canvas 上；这里只画会变的部分，
  // 图层少、元素少，30fps 足够，静止/隐藏时立刻停。
  paint();
  startSparkles(nodes, links);

  // 只在窗口尺寸真正变化时重绘（防抖），不进入任何逐帧循环
  let rt = null;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(paint, 220);
  });

  // 星云是 fixed 定位，滚出 hero 后要淡出，否则会落在后面章节的文字底下
  // 标签页不可见时暂停全部动画，避免后台白烧 GPU
  document.addEventListener("visibilitychange", () => {
    const paused = document.hidden;
    const hero = $("#hero");
    if (hero) hero.style.animationPlayState = paused ? "paused" : "";
    for (const el of $$(".neb")) el.style.animationPlayState = paused ? "paused" : "";
    canvas.style.animationPlayState = paused ? "paused" : "";
  });

  initCounters();
  initScrollReveal();
}

/** 数字从 0 滚到目标值。只在入场跑一次，结束后不再占用。 */
function initCounters() {
  const els = $$(".hero-title .num");
  if (!els.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const run = (el) => {
    const target = Number(el.dataset.count) || 0;
    const dur = 1250;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = Math.round(target * e).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString("en-US");
    };
    requestAnimationFrame(tick);
  };

  setTimeout(() => els.forEach(run), 420);
}

/** 区块进入视口时揭示。触发后立即 unobserve，不常驻监听。 */
function initScrollReveal() {
  const blocks = $$(".block .reveal");
  if (!blocks.length) return;

  if (!("IntersectionObserver" in window)) {
    blocks.forEach((b) => b.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );

  blocks.forEach((b) => io.observe(b));
}

// ------------------------------------------------------------ 图谱页

/**
 * 全图 784 节点。坐标在构建期求解完成，这里只负责：
 * 渲染、缩放平移、悬停高亮邻接、关键词/领域过滤。
 * 不再有任何力导向求解，因此打开即定型。
 */
function initGraphPage() {
  const canvas = $("#graph-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const tip = $("#graph-tip");
  const filterInput = $("#graph-filter");
  const cnt = $("#graph-cnt");
  const legend = $("#graph-legend");

  const DOMAIN_HEX = {
    gen: "#a78bfa",
    ts: "#5eead4",
    llm: "#60a5fa",
    clin: "#fb7185",
    graph: "#fbbf24",
    learn: "#34d399",
    other: "#8b95ad",
  };
  const DOMAIN_NAME = {
    gen: "Generative Models",
    ts: "Time Series",
    llm: "LLM & Foundation",
    clin: "Clinical & Biomedical",
    graph: "Graphs & Dynamics",
    learn: "Learning & Methods",
    other: "Other",
  };

  let W = 0;
  let H = 0;
  let dpr = 1;
  let nodes = [];
  let links = [];
  let adj = [];
  let view = { x: 0, y: 0, s: 1 };
  let hoverIdx = -1;
  let dirty = true;
  const hiddenDomains = new Set();

  // 入场动画进度 0→1。p 用 easeOutCubic，收尾自然停住。
  let introP = 0;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const posOf = (n) => {
    if (introP >= 1) return { nx: n.nx, ny: n.ny };
    const e = easeOut(introP);
    return { nx: n.sx + (n.nx - n.sx) * e, ny: n.sy + (n.ny - n.sy) * e };
  };

  const toScreen = (n) => {
    const p = posOf(n);
    return {
      x: (p.nx - 0.5) * Math.min(W, H) * 1.02 * view.s + W / 2 + view.x,
      y: (p.ny - 0.5) * Math.min(W, H) * 1.02 * view.s + H / 2 + view.y,
    };
  };

  function resize() {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width;
    H = r.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dirty = true;
    requestDraw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    if (!nodes.length) return;

    const focusing = hoverIdx >= 0;
    const nbrs = focusing ? new Set(adj[hoverIdx]) : null;
    // 可见节点很少时进入"稀疏模式"
    let visible = 0;
    for (const n of nodes) if (!n.hidden) visible++;
    const sparse = visible > 0 && visible <= 60;

    // 边：默认只画带权重的骨架边，否则 7791 条线会糊成一个白球
    for (const l of links) {
      if (!focusing && !l.w) continue;
      const s = nodes[l.s];
      const t = nodes[l.t];
      if (s.hidden || t.hidden) continue;
      const ps = toScreen(s);
      const pt = toScreen(t);

      let alpha = 0.085;
      if (focusing) {
        const near = l.s === hoverIdx || l.t === hoverIdx;
        alpha = near ? 0.55 : 0.008;
      }
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = focusing && (l.s === hoverIdx || l.t === hoverIdx) ? "rgba(94,234,212,1)" : "rgba(140,160,205,1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(ps.x, ps.y);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }

    // 节点
    for (const n of nodes) {
      if (n.hidden) continue;
      const p = toScreen(n);
      if (p.x < -30 || p.y < -30 || p.x > W + 30 || p.y > H + 30) continue;

      let alpha = n.hasBody ? 0.9 : 0.38;
      let scale = 1;
      // 结果很少时放大节点，否则筛完只剩一片难以辨认的小点
      if (sparse) scale = 1.9;
      if (focusing) {
        if (n.idx === hoverIdx) {
          alpha = 1;
          scale = 1.7;
        } else if (nbrs.has(n.idx)) {
          alpha = 0.95;
          scale = 1.2;
        } else {
          alpha = 0.07;
        }
      }

      const r = (0.95 + Math.sqrt(n.w || 1) * 0.62) * scale;

      ctx.globalAlpha = alpha * 0.14;
      ctx.fillStyle = n.d;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * 2.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();

      if (n.idx === hoverIdx) {
        ctx.globalAlpha = 0.9;
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 3.5, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // ---- 标签：悬停时直接标在图上。
    // 只高亮边而不说"另一头是谁"，等于让人沿着细线去猜，没有意义。
    if (focusing) {
      const labelTargets = [hoverIdx, ...nbrs];
      // 邻接太多时只标注最近的若干个，避免文字糊成一片
      const MAX_LABELS = 14;

      ctx.textBaseline = "middle";
      ctx.font = "500 11px ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

      // 已占用的标签矩形，用于简单避让：重叠就往下挪
      const placed = [];
      const overlaps = (box) =>
        placed.some((b) => box.x < b.x + b.w && box.x + box.w > b.x && box.y < b.y + b.h && box.y + box.h > b.y);

      let drawn = 0;
      for (const idx of labelTargets) {
        if (drawn >= MAX_LABELS) break;
        const n = nodes[idx];
        if (!n || n.hidden) continue;
        const p = toScreen(n);
        if (p.x < -80 || p.y < -30 || p.x > W + 80 || p.y > H + 30) continue;

        const isCenter = idx === hoverIdx;
        const text = isCenter ? n.t : trimLabel(n.t, 22);

        // 文字底色，保证在密集边线上仍可读
        const tw = ctx.measureText(text).width;
        const padX = 5;
        const bx = p.x + 10;
        const by = p.y - 9;

        // 避让：与已放置的标签重叠时，向下逐级挪 19px，最多试 6 次
        let fy = by;
        for (let attempt = 0; attempt < 6; attempt++) {
          const box = { x: bx - padX, y: fy, w: tw + padX * 2, h: 18 };
          if (!overlaps(box)) break;
          fy += 19;
        }
        placed.push({ x: bx - padX, y: fy, w: tw + padX * 2, h: 18 });

        ctx.globalAlpha = isCenter ? 0.92 : 0.78;
        ctx.fillStyle = "rgba(6, 8, 14, 0.82)";
        roundRect(ctx, bx - padX, fy, tw + padX * 2, 18, 4);
        ctx.fill();

        ctx.globalAlpha = isCenter ? 1 : 0.9;
        ctx.fillStyle = isCenter ? "#f2f5ff" : "rgba(200, 212, 240, 0.95)";
        ctx.fillText(text, bx, fy + 9);

        // 引线：从节点指向标签，避免标签脱离节点。
        // 注意：这里不能复用上面节点循环里的 r（那是循环内 const，已出作用域）。
        const nodeR = (0.95 + Math.sqrt(n.w || 1) * 0.62) * (sparse ? 1.9 : 1) * (isCenter ? 1.7 : 1.2);
        ctx.globalAlpha = 0.25;
        ctx.strokeStyle = "rgba(150,170,220,1)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x + nodeR + 2, p.y);
        ctx.lineTo(bx - padX, p.y);
        ctx.stroke();

        drawn++;
      }
    }

    ctx.globalAlpha = 1;
    dirty = false;
  }

  /** 过长标题截断（按字符，中文标题为主） */
  function trimLabel(t, max) {
    const s = String(t || "");
    return s.length > max ? s.slice(0, max - 1) + "…" : s;
  }

  /** 圆角矩形路径 */
  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  // 按需渲染：只有状态变了才请求一帧。
  // 常驻的 requestAnimationFrame 即使什么都不画也会持续唤醒主线程，
  // 静止时应当完全不占用。
  let rafId = 0;
  function requestDraw() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      if (dirty) draw();
    });
  }

  function hitTest(mx, my) {
    let best = -1;
    let bestD = Infinity;
    for (const n of nodes) {
      if (n.hidden) continue;
      const p = toScreen(n);
      const d = Math.hypot(p.x - mx, p.y - my);
      const r = 0.95 + Math.sqrt(n.w || 1) * 0.62;
      const thr = Math.max(r + 8, 12);
      if (d < thr && d < bestD) {
        bestD = d;
        best = n.idx;
      }
    }
    return best;
  }

  // ---- 载入
  fetch(`${BASE}/data/graph.json`)
    .then((r) => r.json())
    .then(({ nodes: rawNodes, links: rawLinks }) => {
      nodes = rawNodes.map((n, i) => ({
        idx: i,
        id: n.id,
        t: n.t,
        y: n.y,
        v: n.v,
        g: n.g || [],
        r: n.r,
        hasBody: n.a,
        w: n.w,
        d: n.d || DOMAIN_HEX[n.dk] || DOMAIN_HEX.other,
        dk: n.dk,
        nx: n.x,
        ny: n.ny,
        hidden: false,
        // 入场：从中心附近的一个随机偏移出发，向最终位置收敛。
        // 与 Obsidian 打开图谱时"点先散开再归位"的观感一致。
        sx: 0.5 + (Math.random() - 0.5) * 0.06,
        sy: 0.5 + (Math.random() - 0.5) * 0.06,
        anim: 0,
      }));

      // 构建期已把端点写成节点下标；兼容字符串 id 的旧格式
      links = rawLinks
        .map((l) => {
          const s = typeof l.s === "number" ? l.s : -1;
          const t = typeof l.t === "number" ? l.t : -1;
          return s >= 0 && t >= 0 && s < nodes.length && t < nodes.length ? { s, t } : null;
        })
        .filter(Boolean);

      adj = nodes.map(() => []);
      for (const l of links) {
        adj[l.s].push(l.t);
        adj[l.t].push(l.s);
      }
      // 每个节点只保留连接最"枢纽"邻居的 3 条边作为骨架。
      // 全局阈值在这里无效：度数中位 15 但长尾极重，阈值会把几乎所有边都留下，
      // 7791 条线叠在一起就是一团白雾。
      const PER_NODE = 3;
      const byNode = nodes.map(() => []);
      links.forEach((l, i) => {
        byNode[l.s].push(i);
        byNode[l.t].push(i);
      });
      const keep = new Set();
      for (let i = 0; i < nodes.length; i++) {
        const inc = byNode[i];
        if (!inc.length) continue;
        inc.sort((a, b) => {
          const la = links[a];
          const lb = links[b];
          const oa = la.s === i ? la.t : la.s;
          const ob = lb.s === i ? lb.t : lb.s;
          return adj[ob].length - adj[oa].length;
        });
        for (const ei of inc.slice(0, PER_NODE)) keep.add(ei);
      }
      links.forEach((l, i) => (l.w = keep.has(i)));

      resize();
      buildLegend();
      applyFilter();
      canvas.classList.add("ready");

      // 入场动画：约 900ms 从中心散开归位，结束后彻底停止请求帧
      const t0 = performance.now();
      const DUR = 900;
      const stepIntro = (now) => {
        const t = Math.min(1, (now - t0) / DUR);
        introP = t;
        dirty = true;
        draw();
        if (t < 1) requestAnimationFrame(stepIntro);
        else introP = 1;
      };
      requestAnimationFrame(stepIntro);
    });

  // ---- 图例
  function buildLegend() {
    const counts = new Map();
    for (const n of nodes) counts.set(n.dk, (counts.get(n.dk) || 0) + 1);
    const order = ["ts", "gen", "llm", "clin", "graph", "learn", "other"];

    legend.innerHTML =
      `<div class="lg-title">Domains</div>` +
      order
        .filter((k) => counts.has(k))
        .map(
          (k) => `<div class="lg-row" data-dk="${k}">
            <span class="dot" style="background:${DOMAIN_HEX[k]}"></span>
            <span>${DOMAIN_NAME[k]}</span>
            <span class="lg-n">${counts.get(k)}</span>
          </div>`
        )
        .join("");

    $$(".lg-row", legend).forEach((row) => {
      row.addEventListener("click", () => {
        const k = row.dataset.dk;
        if (hiddenDomains.has(k)) hiddenDomains.delete(k);
        else hiddenDomains.add(k);
        row.classList.toggle("off", hiddenDomains.has(k));
        applyFilter();
      });
    });
  }

  // ---- 过滤
  function applyFilter() {
    const q = (filterInput?.value || "").trim().toLowerCase();
    let shown = 0;
    for (const n of nodes) {
      let ok = !hiddenDomains.has(n.dk);
      if (ok && q) {
        const hay = `${n.t} ${(n.g || []).join(" ")} ${n.y} ${n.v || ""}`.toLowerCase();
        ok = q.split(/\s+/).every((w) => hay.includes(w));
      }
      n.hidden = !ok;
      if (ok) shown++;
    }
    if (cnt) cnt.textContent = shown;
    dirty = true;
    requestDraw();
  }

  if (filterInput) filterInput.addEventListener("input", applyFilter);

  // ---- 缩放 / 平移
  function zoomAt(factor, cx, cy) {
    const px = cx ?? W / 2;
    const py = cy ?? H / 2;
    const before = { x: (px - W / 2 - view.x) / view.s, y: (py - H / 2 - view.y) / view.s };
    view.s = Math.max(0.25, Math.min(8, view.s * factor));
    view.x = px - W / 2 - before.x * view.s;
    view.y = py - H / 2 - before.y * view.s;
    dirty = true;
    requestDraw();
  }

  $("#g-zoom-in")?.addEventListener("click", () => zoomAt(1.4));
  $("#g-zoom-out")?.addEventListener("click", () => zoomAt(1 / 1.4));
  $("#g-reset")?.addEventListener("click", () => {
    view = { x: 0, y: 0, s: 1 };
    if (filterInput) filterInput.value = "";
    hiddenDomains.clear();
    $$(".lg-row", legend).forEach((r) => r.classList.remove("off"));
    applyFilter();
  });

  // ---- 指针
  let drag = null;

  canvas.addEventListener("mousedown", (e) => {
    const r = canvas.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    drag = { x: mx, y: my, moved: 0, hit: hitTest(mx, my) };
    canvas.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;

    if (drag) {
      const dx = mx - drag.x;
      const dy = my - drag.y;
      drag.moved += Math.abs(dx) + Math.abs(dy);
      view.x += dx;
      view.y += dy;
      drag.x = mx;
      drag.y = my;
      dirty = true;
      requestDraw();
      return;
    }

    if (e.target !== canvas) return;

    const hit = hitTest(mx, my);
    if (hit !== hoverIdx) {
      hoverIdx = hit;
      dirty = true;
      requestDraw();
      if (hit >= 0) showTip(nodes[hit], e.clientX, e.clientY);
      else tip?.classList.remove("show");
    } else if (hit >= 0) {
      showTip(nodes[hit], e.clientX, e.clientY);
    }
    canvas.style.cursor = hit >= 0 ? "pointer" : "grab";
  });

  window.addEventListener("mouseup", () => {
    if (drag && drag.moved < 6 && drag.hit >= 0) {
      location.href = `${BASE}/notes/${nodes[drag.hit].id}.html`;
    }
    drag = null;
    canvas.style.cursor = "grab";
  });

  canvas.addEventListener("mouseleave", () => {
    if (hoverIdx !== -1) {
      hoverIdx = -1;
      dirty = true;
      requestDraw();
    }
    tip?.classList.remove("show");
  });

  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      zoomAt(Math.exp(-e.deltaY * 0.0016), e.clientX - r.left, e.clientY - r.top);
    },
    { passive: false }
  );

  // 触摸缩放
  let pinch = 0;
  canvas.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 2) {
        pinch = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      } else if (e.touches.length === 1) {
        const r = canvas.getBoundingClientRect();
        const t = e.touches[0];
        drag = { x: t.clientX - r.left, y: t.clientY - r.top, moved: 0, hit: hitTest(t.clientX - r.left, t.clientY - r.top) };
      }
    },
    { passive: true }
  );
  canvas.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length === 2 && pinch) {
        const d = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        zoomAt(d / pinch);
        pinch = d;
      } else if (e.touches.length === 1 && drag) {
        const r = canvas.getBoundingClientRect();
        const t = e.touches[0];
        const mx = t.clientX - r.left;
        const my = t.clientY - r.top;
        view.x += mx - drag.x;
        view.y += my - drag.y;
        drag.moved += Math.abs(mx - drag.x) + Math.abs(my - drag.y);
        drag.x = mx;
        drag.y = my;
        dirty = true;
        requestDraw();
      }
    },
    { passive: true }
  );
  canvas.addEventListener("touchend", () => {
    if (drag && drag.moved < 8 && drag.hit >= 0) {
      location.href = `${BASE}/notes/${nodes[drag.hit].id}.html`;
    }
    pinch = 0;
    drag = null;
  });

  // ---- tooltip
  function showTip(n, clientX, clientY) {
    if (!tip) return;
    tip.innerHTML = `<div class="tt-title">${escapeHtml(n.t)}</div>
      <div class="tt-meta">
        ${n.y ? `<span>${n.y}</span>` : ""}
        ${n.v ? `<span>${escapeHtml(n.v)}</span>` : ""}
        ${n.hasBody ? "" : "<span>仅摘要</span>"}
      </div>
      ${
        n.g && n.g.length
          ? `<div class="tt-tags">${n.g.slice(0, 5).map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>`
          : ""
      }`;
    tip.classList.add("show");
    const r = canvas.getBoundingClientRect();
    const tw = 300;
    let x = clientX - r.left + 16;
    let y = clientY - r.top + 16;
    if (x + tw > r.width) x = clientX - r.left - tw - 16;
    if (y + 150 > r.height) y = Math.max(8, clientY - r.top - 160);
    tip.style.left = `${Math.max(8, x)}px`;
    tip.style.top = `${y}px`;
  }

  let rt = null;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(resize, 120);
  });
}

// ------------------------------------------------------------ boot

function boot() {
  initSearchOverlay();
  if (page === "home") initHero();
  if (page === "graph") initGraphPage();
  if (page === "note") {
    try {
      initNotePage();
    } catch (e) {
      console.error("[note]", e);
    }
    buildSidebar().catch((e) => console.error("[sidebar]", e));
  }
  if (page === "notes") initNotesIndex();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

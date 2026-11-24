/**
 * 力导向求解核心 —— 构建期与运行期共用
 *
 * 关键设计：求解过程完全不该被用户看见。构建期在 Node 里跑到收敛，
 * 坐标直接写进 JSON，浏览器只负责渲染（或从略微扰动的状态继续小幅松弛）。
 *
 * 纯函数式：不碰 DOM、不碰 canvas，输入输出都是普通对象。
 */

/** 一次物理积分 */
export function step(nodes, links, alpha, opts) {
  const n = nodes.length;
  if (!n) return;

  const {
    charge = -190,
    gravity = 0.035,
    linkDistance = 44,
    linkStrength = 0.055,
    damping = 0.82,
    maxSpeed = 24,
    cell = 88,
    cluster = false,
    clusterStrength = 0.045,
    centerX = 0,
    centerY = 0,
  } = opts;

  // ---- 斥力（网格分桶近似）
  const grid = new Map();
  for (let i = 0; i < n; i++) {
    const nd = nodes[i];
    const key = (Math.floor(nd.x / cell) << 16) ^ Math.floor(nd.y / cell);
    let b = grid.get(key);
    if (!b) grid.set(key, (b = []));
    b.push(i);
  }

  const cxOf = (nd) => Math.floor(nd.x / cell);
  const cyOf = (nd) => Math.floor(nd.y / cell);

  for (let i = 0; i < n; i++) {
    const nd = nodes[i];
    const bx = cxOf(nd);
    const by = cyOf(nd);
    for (let ox = -1; ox <= 1; ox++) {
      for (let oy = -1; oy <= 1; oy++) {
        const b = grid.get(((bx + ox) << 16) ^ (by + oy));
        if (!b) continue;
        for (let k = 0; k < b.length; k++) {
          const j = b[k];
          if (j <= i) continue;
          const o = nodes[j];
          let dx = nd.x - o.x;
          let dy = nd.y - o.y;
          let d2 = dx * dx + dy * dy;
          if (d2 < 0.01) {
            dx = (Math.random() - 0.5) * 2;
            dy = (Math.random() - 0.5) * 2;
            d2 = 4;
          }
          if (d2 > 100000) continue;
          const d = Math.sqrt(d2);
          const f = (charge * alpha) / d2;
          const fx = (dx / d) * f;
          const fy = (dy / d) * f;
          nd.vx += fx;
          nd.vy += fy;
          o.vx -= fx;
          o.vy -= fy;
        }
      }
    }
  }

  // ---- 向心力
  const g = gravity * alpha;
  for (let i = 0; i < n; i++) {
    const nd = nodes[i];
    nd.vx += (centerX - nd.x) * g;
    nd.vy += (centerY - nd.y) * g;
  }

  // ---- 领域聚类：让同领域形成可辨识的团块
  if (cluster) {
    const centers = new Map();
    for (let i = 0; i < n; i++) {
      const nd = nodes[i];
      const key = nd.dk || "other";
      let c = centers.get(key);
      if (!c) centers.set(key, (c = { x: 0, y: 0, n: 0 }));
      c.x += nd.x;
      c.y += nd.y;
      c.n++;
    }
    const s = clusterStrength * alpha;
    for (let i = 0; i < n; i++) {
      const nd = nodes[i];
      const c = centers.get(nd.dk || "other");
      if (!c || c.n < 2) continue;
      nd.vx += (c.x / c.n - nd.x) * s;
      nd.vy += (c.y / c.n - nd.y) * s;
    }
  }

  // ---- 弹簧
  const k = linkStrength * alpha;
  for (let li = 0; li < links.length; li++) {
    const l = links[li];
    const s = nodes[l.s];
    const t = nodes[l.t];
    if (!s || !t) continue;
    const dx = t.x - s.x;
    const dy = t.y - s.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
    const f = ((d - linkDistance) / d) * k;
    const fx = dx * f;
    const fy = dy * f;
    s.vx += fx;
    s.vy += fy;
    t.vx -= fx;
    t.vy -= fy;
  }

  // ---- 积分
  for (let i = 0; i < n; i++) {
    const nd = nodes[i];
    if (nd.fixed) continue;
    nd.vx *= damping;
    nd.vy *= damping;
    const sp = Math.hypot(nd.vx, nd.vy);
    if (sp > maxSpeed) {
      nd.vx = (nd.vx / sp) * maxSpeed;
      nd.vy = (nd.vy / sp) * maxSpeed;
    }
    nd.x += nd.vx;
    nd.y += nd.vy;
  }
}

/**
 * 在构建期把布局跑到收敛（同步、无动画）。
 * @returns {{nodes: object[], iterations: number, ms: number}}
 */
export function solve(nodes, links, opts = {}) {
  const {
    iterations = 900,
    alphaMin = 0.001,
    alphaDecay = 0.008,
    startAlpha = 1,
    ...rest
  } = opts;

  const t0 = Date.now();
  let alpha = startAlpha;
  let it = 0;

  for (; it < iterations && alpha > alphaMin; it++) {
    step(nodes, links, alpha, rest);
    alpha *= 1 - alphaDecay;
  }

  // 求解后把速度清零，避免浏览器接手时残余抖动
  for (const nd of nodes) {
    nd.vx = 0;
    nd.vy = 0;
  }

  return { nodes, iterations: it, ms: Date.now() - t0 };
}

/**
 * 归一化坐标到 [0,1]²，用分位数而非极值定边界。
 *
 * 力导向总有几个远端离群点，若按 min/max 缩放，它们会独占整个画幅，
 * 把 98% 的节点压成中心一团。取 q 分位做边界，离群点夹到边上。
 */
export function normalize(nodes, padding = 0.04, q = 0.02) {
  const xs = nodes.map((n) => n.x).sort((a, b) => a - b);
  const ys = nodes.map((n) => n.y).sort((a, b) => a - b);
  if (!xs.length) return { width: 1, height: 1 };

  const pick = (arr, t) => arr[Math.min(arr.length - 1, Math.max(0, Math.round((arr.length - 1) * t)))];
  let minX = pick(xs, q);
  let maxX = pick(xs, 1 - q);
  let minY = pick(ys, q);
  let maxY = pick(ys, 1 - q);

  const w = Math.max(1e-6, maxX - minX);
  const h = Math.max(1e-6, maxY - minY);
  const span = Math.max(w, h);
  const offX = (span - w) / 2;
  const offY = (span - h) / 2;
  const scale = 1 - padding * 2;
  const lo = padding;
  const hi = 1 - padding;

  // 线性映射，且不裁切：超出 [0,1] 的离群点自然落在画幅外，
  // 稀疏到看不出边界，比把一堆点压到边线上形成方框要好。
  for (const n of nodes) {
    n.x = ((n.x - minX + offX) / span) * scale + padding;
    n.y = ((n.y - minY + offY) / span) * scale + padding;
  }
  return { width: w / span, height: h / span };
}

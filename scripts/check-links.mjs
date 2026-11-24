import fs from "node:fs";
import path from "node:path";

const walk = (d, o = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, o) : o.push(p);
  }
  return o;
};

const BASE = process.env.SITE_BASE || "";
const files = walk("site");
const html = files.filter((f) => f.endsWith(".html"));

let broken = 0;
let checked = 0;
const examples = [];

for (const f of html) {
  const s = fs.readFileSync(f, "utf8");
  const re = /(?:href|src)="([^"]+)"/g;
  let m;
  while ((m = re.exec(s))) {
    let u = m[1];
    if (/^(https?:|data:|mailto:|javascript:|#)/.test(u)) continue;
    u = u.split("#")[0].split("?")[0];
    if (!u) continue;
    checked++;
    let rel = BASE && u.startsWith(BASE) ? u.slice(BASE.length) : u;
    if (!rel.startsWith("/")) rel = "/" + rel;
    const target = path.join("site", decodeURIComponent(rel));
    if (!fs.existsSync(target)) {
      broken++;
      if (examples.length < 10) examples.push(`${u}  <-  ${f}`);
    }
  }
}

console.log(`BASE=${BASE || "(root)"} | checked ${checked} | broken ${broken}`);
examples.forEach((e) => console.log("  " + e));
process.exit(broken ? 1 : 0);

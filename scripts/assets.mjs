import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

export async function buildAssets() {
const OUT = path.join(ROOT, "site", "assets");
fs.mkdirSync(OUT, { recursive: true });

// app.js
await build({
  entryPoints: [path.join(ROOT, "src", "app.js")],
  bundle: true,
  minify: true,
  format: "esm",
  target: ["es2020", "chrome100", "firefox100", "safari15"],
  outfile: path.join(OUT, "app.js"),
  legalComments: "none",
});

// style.css
const css = fs.readFileSync(path.join(ROOT, "src", "style.css"), "utf8");
const cssMin = css
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s*\n\s*/g, "\n")
  .replace(/\n{2,}/g, "\n")
  .trim();
fs.writeFileSync(path.join(OUT, "style.css"), cssMin);

// katex
const KATEX = path.join(ROOT, "node_modules", "katex", "dist");
fs.copyFileSync(path.join(KATEX, "katex.min.css"), path.join(OUT, "katex.min.css"));
const fontsOut = path.join(OUT, "fonts");
fs.mkdirSync(fontsOut, { recursive: true });
let fontCount = 0;
for (const f of fs.readdirSync(path.join(KATEX, "fonts"))) {
  fs.copyFileSync(path.join(KATEX, "fonts", f), path.join(fontsOut, f));
  fontCount++;
}

const kb = (p) => `${(fs.statSync(p).size / 1024).toFixed(1)} KB`;
return {
  js: kb(path.join(OUT, "app.js")),
  css: kb(path.join(OUT, "style.css")),
  fonts: fontCount,
};
}

/**
 * 一次性脚本：把构建期的内容清理回写到 notes/ 源文件。
 *
 * 用途：让仓库可以公开（构建期的中性化只影响渲染结果，git 里仍是原文）。
 * 执行后净化规则会"未命中"，所以这里直接把规则里的 from 全部替换掉，
 * 而不是复用 applySanitize（后者要求命中，回写后就必然失败）。
 *
 * 只处理规则明确列出的字符串，不做任何模糊匹配。
 */

import fs from "node:fs";
import path from "node:path";
import { NEUTRALIZE, REMOVE_LINES, REMOVE_QUOTE_LINES } from "./sanitize.mjs";

const DRY = process.argv.includes("--dry-run");

const report = {
  neutralized: 0,
  removedLines: 0,
  removedQuoteLines: 0,
  filesTouched: new Set(),
  unchanged: [],
  missing: [],
};

// ---- 换词
for (const [file, from, to] of NEUTRALIZE) {
  if (!fs.existsSync(file)) {
    report.missing.push(file);
    continue;
  }
  const cur = fs.readFileSync(file, "utf8");
  if (!cur.includes(from)) {
    report.unchanged.push({ file, from });
    continue;
  }
  // 只替换第一处，避免同一句话被重复替换
  const next = cur.replace(from, to);
  if (!DRY) fs.writeFileSync(file, next);
  report.neutralized++;
  report.filesTouched.add(file);
}

// ---- 整行删除
for (const r of REMOVE_LINES) {
  if (!fs.existsSync(r.file)) {
    report.missing.push(r.file);
    continue;
  }
  const cur = fs.readFileSync(r.file, "utf8");
  if (!cur.includes(r.match)) {
    report.unchanged.push({ file: r.file, from: r.match });
    continue;
  }
  const lines = cur.split("\n");
  const kept = lines.filter((l) => !l.includes(r.match));
  if (!DRY) fs.writeFileSync(r.file, kept.join("\n"));
  report.removedLines += lines.length - kept.length;
  report.filesTouched.add(r.file);
}

// ---- 引用行删除
for (const r of REMOVE_QUOTE_LINES) {
  if (!fs.existsSync(r.file)) {
    report.missing.push(r.file);
    continue;
  }
  const cur = fs.readFileSync(r.file, "utf8");
  if (!cur.includes(r.match)) {
    report.unchanged.push({ file: r.file, from: r.match });
    continue;
  }
  const lines = cur.split("\n");
  const kept = lines.filter((l) => !l.includes(r.match));
  if (!DRY) fs.writeFileSync(r.file, kept.join("\n"));
  report.removedQuoteLines += lines.length - kept.length;
  report.filesTouched.add(r.file);
}

console.log(`${DRY ? "[dry-run] " : ""}回写结果`);
console.log(`  换词: ${report.neutralized}`);
console.log(`  删行: ${report.removedLines}`);
console.log(`  删引用行: ${report.removedQuoteLines}`);
console.log(`  涉及文件: ${report.filesTouched.size}`);
if (report.missing.length) {
  console.log(`  文件缺失: ${report.missing.length}`);
  report.missing.forEach((f) => console.log(`    - ${f}`));
}
if (report.unchanged.length) {
  console.log(`  未命中（可能已处理过）: ${report.unchanged.length}`);
  report.unchanged.forEach((u) => console.log(`    - ${u.file}: ${u.from.slice(0, 40)}`));
}

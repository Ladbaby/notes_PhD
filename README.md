# notes_PhD

博士期间的论文阅读笔记库，从 Obsidian vault 生成的静态站点。

**784 篇论文** · 1973–2026 · 覆盖生成模型、时间序列建模、临床机器学习与大模型方向。

## 站点特性

- **知识图谱** — 784 个节点、7791 条边，由标签共现构建，支持缩放 / 拖拽 / 悬停高亮邻接 / 关键词过滤
- **Obsidian 风格渲染** — Callout（`> [!info]` / `[!cite]` / `[!quote]` / `[!question]`）、`==高亮==`、`%%注释%%` 剥离、`![[图片]]` 嵌入、双链重写
- **KaTeX 数学公式** — 行内与块级公式全部预渲染
- **全文检索** — `⌘K` / `Ctrl+K` 唤出，按标题、标签、年份、TLDR 加权排序
- **多维筛选** — 全部笔记页支持按年份 / 会议 / 标签 / 是否有正文组合筛选

## 本地使用

```bash
npm install
npm run dev          # 构建 + 起本地服务器 (http://localhost:4173)
```

单独执行：

```bash
npm run build        # 生成 site/
npm run serve        # 预览已生成的 site/
```

生成的 `site/` 目录是纯静态文件，可直接部署到任何静态托管。

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/deploy.yml`，推送到 `main` 后自动构建并发布。

首次部署需要在 GitHub 仓库中设置：
**Settings → Pages → Build and deployment → Source 选择 `GitHub Actions`**

### 关于子路径

默认部署地址是 `https://<user>.github.io/<repo>/`，工作流里已经通过 `SITE_BASE` 处理了资源前缀：

```yaml
env:
  SITE_BASE: /${{ github.event.repository.name }}
```

以下两种情况需要把它改成空字符串：

| 部署位置 | `SITE_BASE` |
| --- | --- |
| `https://<user>.github.io/<repo>/` | `/${{ github.event.repository.name }}`（默认） |
| `https://<user>.github.io/`（根仓库） | `""` |
| 自定义域名 | `""` |

本地验证子路径构建（Git Bash 下需要 `MSYS_NO_PATHCONV=1`，否则 `/xxx` 会被改写成 Windows 路径）：

```bash
MSYS_NO_PATHCONV=1 SITE_BASE=/notes_PhD npm run build
```

## 目录结构

```
notes/              # 原始 Obsidian 笔记，按年份/会议分层
attachments/        # Zotero 导出的图片附件
src/                # 前端源码
  app.js            # 力导向图谱、搜索、筛选、笔记页交互
  style.css         # 设计系统
scripts/
  build.mjs         # 站点生成器
  render.mjs        # Obsidian 风格 Markdown 渲染管线
  sanitize.mjs      # 内容清理与中性化规则
  templates.mjs     # 页面模板
  assets.mjs        # 前端资源打包（esbuild）
  serve.mjs         # 本地预览服务器
site/               # 构建产物（已 gitignore）
```

## 内容清理

`scripts/sanitize.mjs` 在**构建期**对笔记内容做清理，原始 markdown 文件不会被修改：

1. **吐槽中性化** — 把口语化的负面评价改写成技术性表述（如「经典的吹水文」→「核心思路简洁，但本质上仍是架构层面的重组」），保留原有判断，但换成适合公开展示的措辞
2. **隐私移除** — 删除求职意向等个人内容
3. **注释剥离** — 移除 `%% %%` 包裹的 Zotero 导入痕迹
4. **重复合并** — 22 组重复 citekey 按正文完整度去重

每条规则都是精确字符串匹配，**未命中即构建失败**，避免笔记内容变动后规则悄悄失效。新增规则时在 `NEUTRALIZE` 数组里追加 `[文件路径, 原文, 替换文本]` 即可。

## 笔记格式

笔记由 Zotero 导出，frontmatter 字段：

```yaml
---
Title: "论文标题"
Tags: [ICLR/2024, time-series-forecasting, ...]   # 含会议的年份标签
Authors: "Last, First; ..."
Year: "2024"
Citekey: author_ShortTitle_2024                  # 决定笔记的 URL
rating: 1-5
---
```

正文以 Callout 开头（TLDR / Bibliography / Contribution），后接 `## Notes` 手写笔记与 `## Annotations` 原文摘录。

标注为「仅摘要」的笔记正文为空（早年批量导入），在图谱与索引中仍保留，以呈现完整的阅读轨迹。

## 技术说明

站点无运行时框架依赖：

- 图谱是手写的 canvas 力导向实现（网格加速斥力 + 弹簧 + 领域聚类力），没有引入 d3 运行时
- 首页图谱数据经抽样（620 节点）单独输出，避免首屏加载全量图数据
- 笔记页侧栏由 `search.json` 客户端渲染，避免每页内嵌 700+ 条链接

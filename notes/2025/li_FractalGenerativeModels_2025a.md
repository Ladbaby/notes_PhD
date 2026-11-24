---
Title: Fractal Generative Models
Tags:
  - fractal-generative-models
  - modularization
  - atomic-generative-modules
  - self-similar-architectures
  - recursive-models
ZoteroLink: zotero://open-pdf/library/items/EW355C8M
FirstAuthor: Li, Tianhong
Author: Sun, Qinyi; Fan, Lijie; He, Kaiming;
Year: "2025"
ItemType: article
DOI: 10.48550/arXiv.2502.17437
Citekey: li_FractalGenerativeModels_2025a
Publisher: arXiv
rating: 5
---
> [!info]
> **TLDR**:: To address the need for deeper modularization in generative modeling, this paper introduces fractal generative models that recursively invoke atomic modules, demonstrating strong performance on pixel-by-pixel image generation.

> [!cite]
> **Bibliography**:: Li, T., Sun, Q., Fan, L., & He, K. (2025). _Fractal Generative Models_ (arXiv:2502.17437). arXiv. [https://doi.org/10.48550/arXiv.2502.17437](https://doi.org/10.48550/arXiv.2502.17437)

> [!info]
> **Contribution**:: 分形生成模型

![](Pasted%20image%2020250324154913.png)

## Notes

有点类似把一个三角形分成四个小的三角形一样，分形生成模型把一张大的图片**递归地**分割成很多小的图片，然后每一层都有一个生成器负责学习

![](2025-03-12-20-18-29.png)

我理解的模型结构如上

和其它多尺度方式的区别

- **Hi-Patch**: 比 Hi-Patch 多了**不同尺度下的原始时序**作为输入
- **Visual Autoregressive Model** (NeurIPS 24 best paper): VAR 是直接预测下一个尺度，而不是**预测同一个尺度的之后再分割**

和时序预测/填补的区别：

- 时序不存在类别标签
- 时序预测/填补一般用 MSE/MAE 作为 Loss，而本文用**交叉熵**作为 Loss，其中**图像作为 groundtruth**

![](2025-03-19-20-51-09.png)

上图说明了分形和多尺度在时间分辨率上的差别，可以作为引入不规则的切入点

![](2025-03-19-21-20-14.png)

上图说明的是 patch_len 必须比 pred_len 大的问题，算是拿来做预测的时候会遇到的小坑

## Annotations
%% begin annotations %%


### Imported: 2025-03-24 3:47 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we introduce a new level of modularization by abstracting generative models into atomic generative modules
>
> [Page 1](zotero://open-pdf/library/items/EW355C8M?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we instantiate our fractal framework using autoregressive models as the atomic generative modules and examine it on the challenging task of pixelby-pixel image generation, demonstrating strong performance in both likelihood estimation and generation quality
>
> [Page 1](zotero://open-pdf/library/items/EW355C8M?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> GPT-like causal transformer (AR) and a random-order, BERT-like bidirectional transformer (MAR) (Figure 6).
>
> [Page 5](zotero://open-pdf/library/items/EW355C8M?page=5) 



%% end annotations %%

%% Import Date: 2025-03-24T15:48:03.486+08:00 %%

---
Title: "LSCD: Lomb--Scargle Conditioned Diffusion for Time series Imputation"
Tags:
  - ICML/2025
  - diffusion-model
  - time-series-imputation
  - lomb-scargle
  - irregular-sampling
ZoteroLink: zotero://open-pdf/library/items/MXDRT98J
FirstAuthor: Fons, Elizabeth
Author: Sztrajman, Alejandro; El-Laham, Yousef; Ferrer, Luciana; Vyetrenko, Svitlana; Veloso, Manuela;
Year: "2025"
ItemType: conferencePaper
Citekey: fons_LSCDLombScargleConditioned_2025
motivation: 现有频域的方法需要完整观测
Conference: Forty-second International Conference on Machine Learning
rating: 1
---
> [!info]
> **TLDR**:: To overcome FFT's uniform sampling assumption in irregular time series, this paper introduces a differentiable Lomb–Scargle layer within a diffusion model for spectrum-conditioned imputation.

> [!cite]
> **Bibliography**:: Fons, E., Sztrajman, A., El-Laham, Y., Ferrer, L., Vyetrenko, S., & Veloso, M. (2025, June 18). _LSCD: Lomb--Scargle Conditioned Diffusion for Time series Imputation_. Forty-second International Conference on Machine Learning. [https://openreview.net/forum?id=GdYg0Ohx0k](https://openreview.net/forum?id=GdYg0Ohx0k)

> [!info]
> **Contribution**:: 含缺失值的情况下用频域信息

## Notes

我审稿的，没想到这么低分都能捞回来。

- 最大的问题是题目里有不规则，但是实际上这个模型压根就没法处理不规则时间戳（会算出来 nan）。
- 模型图**有错误**
- 实验部分的设计有很大问题：1. 花了大量篇幅在**合成的正弦数据集上对比**；2. 可视化图展示的是**数据分布**而不是**频率分布**
- 代码链接里**没有代码**
- 图里的元素分辨率不一致

本质上就是 [CSDI](tashiro_CSDIConditionalScorebased_2021.md) 加了个 Lomb--Scargle 的频域学习模块，好在从实验效果上来说，确实要比 CSDI 强。


## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Many methods operate on the frequencydomain, relying on the Fast Fourier Transform (FFT) which assumes uniform sampling, therefore requiring prior interpolation that can distort the spectra
>
> [Page 1](zotero://open-pdf/library/items/MXDRT98J?page=1)


%% Import Date: 2026-05-12T03:11:52.000+00:00 %%

---
Title: "Pathformer: Multi-scale Transformers with Adaptive Pathways for Time Series Forecasting"
Tags:
  - ICLR/2024
  - time-series-forecasting
  - multiscale
  - transformer
  - adaptive-pathways
ZoteroLink: zotero://open-pdf/library/items/HX8SKS4M
FirstAuthor: Chen, Peng
Author: Zhang, Yingying; Cheng, Yunyao; Shu, Yang; Wang, Yihang; Wen, Qingsong; Yang, Bin; Guo, Chenjuan;
Year: "2024"
ItemType: conferencePaper
Citekey: chen_PathformerMultiscaleTransformers_2024
motivation: 现有方法局限于有限或者单一的尺度
Conference: The Twelfth International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address the limitation of fixed-scale modeling in time series forecasting, Pathformer employs adaptive pathways that dynamically adjust multi-scale attention based on varying temporal dynamics to capture both global correlations and local details.

> [!cite]
> **Bibliography**:: Chen, P., Zhang, Y., Cheng, Y., Shu, Y., Wang, Y., Wen, Q., Yang, B., & Guo, C. (2023, October 13). _Pathformer: Multi-scale Transformers with Adaptive Pathways for Time Series Forecasting_. The Twelfth International Conference on Learning Representations. [https://openreview.net/forum?id=lJkOCMP2aW](https://openreview.net/forum?id=lJkOCMP2aW)

> [!info]
> **Contribution**:: 多 patch 大小的多尺度

## Notes

![](Pasted%20image%2020231225202216.png)

![](Pasted%20image%2020260106102521.png)

和 MOIRAI 的做法应该说是差不多的，只不过这篇理论上更早一点，都是多个 patch 长度可选，然后聚合。

patch + 多尺度 + seasonal-trend，不过组合地非常适合

- 多尺度：模型的输入会动态地被划分成多个尺度的 patch
- 尺度划分依据：由 seasonal-trend 决定。看原文意思应该是选择 top-K 的振幅对应的频率。trend 似乎会用来决定每个频率的权重
- dual attention: 会进行 intra-patch attention 和 inter-patch attention，如下图

![](Pasted%20image%2020231225201653.png)


## Annotations
%% begin annotations %%


### Imported: 2026-01-06 10:23 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> On the contrary, considering different temporal distances enables modeling dependencies from different ranges, such as global and local correlations
>
> [Page 2](zotero://open-pdf/library/items/J6TLT3Q5?page=2) 



%% end annotations %%

%% Import Date: 2026-01-06T10:23:05.242+08:00 %%

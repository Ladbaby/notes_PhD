---
Title: "iTransformer: Inverted Transformers Are Effective for Time Series Forecasting"
Tags:
  - ICLR/2024
  - time-series-forecasting
  - transformer
  - inverted-transformers
  - multivariate-time-series
ZoteroLink: zotero://open-pdf/library/items/VAFSNVEZ
FirstAuthor: Liu, Yong
Author: Hu, Tengge; Zhang, Haoran; Wu, Haixu; Wang, Shiyu; Ma, Lintao; Long, Mingsheng;
Year: "2024"
ItemType: conferencePaper
Citekey: liu_iTransformerInvertedTransformers_2023
motivation: 传统transformer把每个时刻当作token，混杂了各个通道的信息
Conference: The Twelfth International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To overcome Transformer limitations in handling large lookback windows and fused variate embeddings, iTransformer repurposes the architecture by applying attention on inverted dimensions to capture multivariate correlations while preserving temporal structures.

> [!cite]
> **Bibliography**:: Liu, Y., Hu, T., Zhang, H., Wu, H., Wang, S., Ma, L., & Long, M. (2023, October 13). _iTransformer: Inverted Transformers Are Effective for Time Series Forecasting_. The Twelfth International Conference on Learning Representations. [https://openreview.net/forum?id=JePfAI8fah](https://openreview.net/forum?id=JePfAI8fah)

> [!info]
> **Contribution**:: 把注意力维度从时间维反转为变量维；核心思路简洁，但本质上仍是架构层面的重组

## Notes

![](Pasted%20image%2020260105164048.png)

就是把每个 token 的定义从单个时刻变成了单个变量

## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Besides, the embedding for each temporal token fuses multiple variates that represent potential delayed events and distinct physical measurements, which may fail in learning variate-centric representations and result in meaningless attention maps.
>
> [Page 1](zotero://open-pdf/library/items/VAFSNVEZ?page=1)


%% Import Date: 2026-05-12T02:23:34.000+00:00 %%

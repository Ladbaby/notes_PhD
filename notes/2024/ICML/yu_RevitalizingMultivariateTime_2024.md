---
Title: "Revitalizing Multivariate Time Series Forecasting: Learnable Decomposition with Inter-Series Dependencies and Intra-Series Variations Modeling"
Tags:
  - ICML/2024
  - time-series-forecasting
  - learnable-decomposition
  - inter-series-correlations
  - intra-series-variations
ZoteroLink: zotero://open-pdf/library/items/DEVNDQ3F
FirstAuthor: Yu, Guoqi
Author: Zou, Jing; Hu, Xiaowei; Aviles-Rivero, Angelica I.; Qin, Jing; Wang, Shujun;
Year: "2024"
ItemType: conferencePaper
Citekey: yu_RevitalizingMultivariateTime_2024
motivation: 现有方法可能难以处理较复杂的季节性
Conference: Forty-first International Conference on Machine Learning
rating: 3
---
> [!info]
> **TLDR**:: To address the limitations of basic moving averages in capturing non-linear trends and complex dependencies in multivariate time series, this paper introduces Leddam, which employs a learnable decomposition strategy and a dual attention module to simultaneously model dynamic trends, inter-series dependencies, and intra-series variations.

> [!cite]
> **Bibliography**:: Yu, G., Zou, J., Hu, X., Aviles-Rivero, A. I., Qin, J., & Wang, S. (2024, June 6). _Revitalizing Multivariate Time Series Forecasting: Learnable Decomposition with Inter-Series Dependencies and Intra-Series Variations Modeling_. Forty-first International Conference on Machine Learning. [https://openreview.net/forum?id=87CYNyCGOo](https://openreview.net/forum?id=87CYNyCGOo)

> [!info]
> **Contribution**:: 可学习的季节趋势性分解，实验效果非常鲁棒，绝对值得点赞

## Notes

![](Pasted%20image%2020260105171300.png)

Leddam 的可学习季节趋势分解其实就是个一维卷积，说出来其实挺挫的，但是神奇的是实验效果真的特别好

## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> existing methods, relying on basic moving average kernels, may struggle with the non-linear structure and complex trends in real-world data.
>
> [Page 1](zotero://open-pdf/library/items/DEVNDQ3F?page=1)


%% Import Date: 2026-05-12T02:29:57.000+00:00 %%

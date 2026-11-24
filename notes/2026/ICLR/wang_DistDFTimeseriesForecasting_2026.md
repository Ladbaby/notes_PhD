---
Title: "DistDF: Time-series Forecasting Needs Joint-distribution Wasserstein Alignment"
Tags:
  - ICLR/2026
  - time-series-forecasting
  - Wasserstein-alignment
  - joint-distribution
  - label-autocorrelation
  - distribution-alignment
ZoteroLink: zotero://open-pdf/library/items/NH5LVBWV
FirstAuthor: Wang, Eric
Author: Pan, Licheng; Lu, Yuan; Chu, Zhixuan; Li, Xiaoxi; He, Shuting; Chan, Zi Ciu; Li, Haoxuan; Wen, Qingsong; Lin, Zhouchen;
Year: "2026"
ItemType: conferencePaper
Conference: The Fourteenth International Conference on Learning Representations
Citekey: wang_DistDFTimeseriesForecasting_2026
rating: 3
---
> [!info]
> **TLDR**:: To address the biased mean squared error estimation caused by label autocorrelation in time-series forecasting, this paper introduces DistDF, which minimizes a tractable joint-distribution Wasserstein discrepancy that upper bounds the conditional forecast-label discrepancy.

> [!cite]
> **Bibliography**:: Wang, E., Pan, L., Lu, Y., Chu, Z., Li, X., He, S., Chan, Z. C., Li, H., Wen, Q., & Lin, Z. (2026). DistDF: Time-series Forecasting Needs Joint-distribution Wasserstein Alignment. In _The Fourteenth International Conference on Learning Representations_.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> conditional negative log-likelihood
>
>> MSE和条件负似然是什么鬼关系
>
> [Page 1](zotero://open-pdf/library/items/NH5LVBWV?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> this estimation proves to be biased in the presence of label autocorrelation
>
> [Page 1](zotero://open-pdf/library/items/NH5LVBWV?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> which trains forecast models by minimizing the discrepancy between the conditional distributions of forecast and label sequences
>
> [Page 2](zotero://open-pdf/library/items/NH5LVBWV?page=2)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> However, one key distinction warrants emphasis: both Fourier and principal component transformations guarantee only marginally decorrelated of the obtained components (i.e., diagonal Σ), not the required conditional decorrelation (i.e., diagonal Σ|X )3;
>
>> 说FreDF和Time-o1的局限
>
> [Page 3](zotero://open-pdf/library/items/NH5LVBWV?page=3)


%% Import Date: 2026-05-12T03:45:54.000+00:00 %%

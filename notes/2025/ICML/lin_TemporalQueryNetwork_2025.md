---
Title: Temporal Query Network for Efficient Multivariate Time Series Forecasting
Tags:
  - ICML/2025
  - time-series-forecasting
  - multivariate-time-series
  - attention
  - temporal-query
ZoteroLink: zotero://open-pdf/library/items/NA3UV9FT
FirstAuthor: Lin, Shengsheng
Author: Chen, Haojun; Wu, Haijie; Qiu, Chunyun; Lin, Weiwei;
Year: "2025"
ItemType: conferencePaper
Citekey: lin_TemporalQueryNetwork_2025
motivation: 无
Conference: Forty-second International Conference on Machine Learning
rating: 2
---
> [!info]
> **TLDR**:: To address insufficient modeling of multivariate correlations in time series forecasting, this paper introduces Temporal Query Network, which uses periodically shifted learnable vectors in attention mechanisms to capture global inter-variable patterns efficiently.

> [!cite]
> **Bibliography**:: Lin, S., Chen, H., Wu, H., Qiu, C., & Lin, W. (2025, June 18). _Temporal Query Network for Efficient Multivariate Time Series Forecasting_. Forty-second International Conference on Machine Learning. [https://openreview.net/forum?id=e24CueVty2](https://openreview.net/forum?id=e24CueVty2)

> [!info]
> **Contribution**:: 整个数据集层面的变量间关系？其实 GNN 早就能做到

## Notes

![](Pasted%20image%2020260107110440.png)

![](Pasted%20image%2020260107110452.png)

动机图画得太糟糕了，我就不贴了

[CycleNet](lin_CycleNetEnhancingTime_2024.md) 的基础上，考虑全局+局部的变量间关系

实际的实验效果还挺不错的


## Annotations
%% begin annotations %%


### Imported: 2026-01-07 11:02 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> instability of sample-level correlations
>
>> 强调通过所有样本来获得变量间关系，而非单个样本
>
> [Page ](zotero://open-pdf/library/items/NA3UV9FT?page=) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> more effectively capture multivariate correlations, thereby improving model performance
>
> [Page 1](zotero://open-pdf/library/items/NA3UV9FT?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> instability of sample-level correlations
>
>> 强调通过所有样本来获得变量间关系，而非单个样本
>
> [Page 1](zotero://open-pdf/library/items/NA3UV9FT?page=1)


%% Import Date: 2026-05-12T03:14:33.000+00:00 %%

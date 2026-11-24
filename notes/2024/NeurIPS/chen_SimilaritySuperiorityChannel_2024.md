---
Title: "From Similarity to Superiority: Channel Clustering for Time Series Forecasting"
Tags:
  - NeurIPS/2024
  - time-series-forecasting
  - channel-clustering
  - channel-independence
  - multivariate-time-series
  - graph-neural-networks
ZoteroLink: zotero://open-pdf/library/items/VIQ4AYN8
FirstAuthor: Chen, Jialin
Author: Lenssen, Jan Eric; Feng, Aosong; Hu, Weihua; Fey, Matthias; Tassiulas, Leandros; Leskovec, Jure; Ying, Rex;
Year: 2024
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: 37
Page: 130635-130663
DOI: 10.52202/079017-4152
Citekey: chen_SimilaritySuperiorityChannel_2024
motivation: 缺少一种平衡CI和CD的做法
rating: 4
---
> [!info]
> **TLDR**:: To resolve the trade-off between Channel-Independent generalization and Channel-Dependent oversmoothing in time series forecasting, the authors introduce a Channel Clustering Module that dynamically groups similar channels to leverage cluster information instead of individual identities.

> [!cite]
> **Bibliography**:: Chen, J., Lenssen, J. E., Feng, A., Hu, W., Fey, M., Tassiulas, L., Leskovec, J., & Ying, R. (2024). From Similarity to Superiority: Channel Clustering for Time Series Forecasting. _Advances in Neural Information Processing Systems_, _37_, 130635–130663. [https://doi.org/10.52202/079017-4152](https://doi.org/10.52202/079017-4152)

> [!info]
> **Contribution**:: 变量聚类的做法平衡CI和CD，而且算是插件

## Notes

![](Pasted%20image%2020260106101744.png)

大体上是在 CI 模型的基础上塞一个变量聚类模块。以后涉及变量聚类的做法大概都离不开这篇文章了。


## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> There is a lack of channel strategy that effectively balances individual channel treatment for improved forecasting performance without overlooking essential interactions between channels.
>
> [Page 1](zotero://open-pdf/library/items/VIQ4AYN8?page=1)


%% Import Date: 2026-05-12T02:40:35.000+00:00 %%

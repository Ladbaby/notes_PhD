---
Title: "Crossformer: Transformer Utilizing Cross-Dimension Dependency for Multivariate Time Series Forecasting"
Tags:
  - ICLR/2023
  - time-series-forecasting
  - transformer
  - cross-dimension-dependency
  - multivariate-time-series
ZoteroLink: zotero://open-pdf/library/items/HD4NDPVW
FirstAuthor: Zhang, Yunhao
Author: Yan, Junchi;
Year: "2023"
ItemType: conferencePaper
Citekey: zhang_CrossformerTransformerUtilizing_2023
motivation: 给transformers加入变量间关系建模
Conference: The Eleventh International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address the neglect of cross-dimension dependency in multivariate time series forecasting, Crossformer utilizes Dimension-Segment-Wise embedding and Two-Stage Attention within a hierarchical encoder-decoder to jointly capture cross-time and cross-variable dependencies.

> [!cite]
> **Bibliography**:: Zhang, Y., & Yan, J. (2022, September 29). _Crossformer: Transformer Utilizing Cross-Dimension Dependency for Multivariate Time Series Forecasting_. The Eleventh International Conference on Learning Representations. [https://openreview.net/forum?id=vSVLM2j9eie](https://openreview.net/forum?id=vSVLM2j9eie)

> [!info]
> **Contribution**:: attention里加入router

![](Pasted%20image%2020231128210445.png)
## Notes

和前面[xue_MakeTransformerGreat_2023](xue_MakeTransformerGreat_2023.md)那篇的想法有点像，也是不仅仅考虑时间上的依赖，还考虑不同维度之间的依赖

## Two-Stage Attention Layer

比较有意思的其实是 Figure 2(c)，它用了称为 router 的机制，来减小跨维度间的自注意力，将复杂度从 $O(N^2)$ 降到 $O(D)$

中间的固定数量的 vector 就是关键所在。不过这种做法的合理性它没有论证
## Annotations
%% begin annotations %%


### Imported: 2023-11-28 9:02 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> embedded vector should represent a series segment of single dimension (Fig. 1 (c)), rather than the values of all dimensions at single step (Fig. 1 (b))
>
> [Page 4](zotero://open-pdf/library/items/Q2MJANPE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Dimension-Segment-Wise (DSW) embedding
>
> [Page 4](zotero://open-pdf/library/items/Q2MJANPE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Router mechanism
>
> [Page 5](zotero://open-pdf/library/items/Q2MJANPE?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> segment merging to capture dependency at different scales
>
> [Page 5](zotero://open-pdf/library/items/Q2MJANPE?page=5) 



%% end annotations %%

%% Import Date: 2023-11-28T21:02:55.370+08:00 %%

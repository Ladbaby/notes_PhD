---
Title: "Autoformer: Decomposition Transformers with Auto-Correlation for Long-Term Series Forecasting"
Tags:
  - NeurIPS/2021
  - time-series-forecasting
  - autoformer
  - decomposition
  - autocorrelation
ZoteroLink: zotero://open-pdf/library/items/KREVJFG3
FirstAuthor: Wu, Haixu
Author: Xu, Jiehui; Wang, Jianmin; Long, Mingsheng;
Year: "2021"
ItemType: conferencePaper
Citekey: wu_AutoformerDecompositionTransformers_2021
motivation: 改进transformers对于复杂的时序特征的学习能力（将decomposition加入模型结构中）
Conference: Advances in Neural Information Processing Systems
Publisher: Curran Associates, Inc.
Volume: "34"
Page: 22419–22430
rating: 2
---
> [!info]
> **TLDR**:: To address the inefficiency and information bottlenecks of Transformer-based long-term time series forecasting, Autoformer employs a novel decomposition architecture with an Auto-Correlation mechanism that leverages series periodicity for efficient dependency discovery.

> [!cite]
> **Bibliography**:: Wu, H., Xu, J., Wang, J., & Long, M. (2022). _Autoformer: Decomposition Transformers with Auto-Correlation for Long-Term Series Forecasting_ (arXiv:2106.13008). arXiv. [https://doi.org/10.48550/arXiv.2106.13008](https://doi.org/10.48550/arXiv.2106.13008)

> [!info]
> **Contribution**:: 经典 baseline

![](Pasted%20image%2020231128205005.png)

## Notes

模型主要关注两个问题：

- 复杂的时序模式：用 decomposition 解决
- self-attention：用 auto-correlation 代替

## Decomposition 

分解是一种将复杂时序分解成多种不同类别的简单一些的时序的方法

以往的方法主要都是在预测之前进行预处理，然而这有点小问题：新预测出来的时序其实并没有也被分解

所以干脆把分解作为一个模块，给塞进模型里面，这样子就能边预测边分解了

## Auto-Correlation

见 Figure 3，感觉是把周期性的特点给利用上了，只有周期对应位置的片段才会参与注意力

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 8:42 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> long-term forecasting problem of time series
>
> [Page 1](zotero://open-pdf/library/items/MW9694AN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> intricate temporal patterns of the long-term future prohibit the model from finding reliable dependencies
>
> [Page 1](zotero://open-pdf/library/items/MW9694AN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Transformers have to adopt the sparse versions of point-wise self-attentions for long series efficiency, resulting in the information utilization bottleneck
>
> [Page 1](zotero://open-pdf/library/items/MW9694AN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Auto-Correlation
>
> [Page 1](zotero://open-pdf/library/items/MW9694AN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> time series decomposition [1, 33] deconstructs a time series into several components, each representing one of the underlying categories of patterns that are more predictable
>
> [Page 3](zotero://open-pdf/library/items/MW9694AN?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> pre-processing
>
> [Page 3](zotero://open-pdf/library/items/MW9694AN?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> overlooks the hierarchical interaction between the underlying patterns of series in the long-term future
>
> [Page 3](zotero://open-pdf/library/items/MW9694AN?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> progressively decompose
>
> [Page 3](zotero://open-pdf/library/items/MW9694AN?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> including both the past series and the predicted intermediate results
>
> [Page 3](zotero://open-pdf/library/items/MW9694AN?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> seasonal part modeling
>
> [Page 4](zotero://open-pdf/library/items/MW9694AN?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> extracts the potential trend from the intermediate hidden variables during the decoder
>
> [Page 4](zotero://open-pdf/library/items/MW9694AN?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> reflects the time-delay similarities
>
> [Page 5](zotero://open-pdf/library/items/MW9694AN?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> align similar sub-series that are at the same phase position of estimated periods
>
> [Page 5](zotero://open-pdf/library/items/MW9694AN?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For the information aggregation, we adopt the time delay block to aggregate the similar sub-series from underlying periods.
>
> [Page 6](zotero://open-pdf/library/items/MW9694AN?page=6) 



%% end annotations %%

%% Import Date: 2023-11-28T20:42:41.455+08:00 %%

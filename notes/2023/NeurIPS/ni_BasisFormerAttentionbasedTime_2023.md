---
Title: "BasisFormer: Attention-based Time Series Forecasting with Learnable and Interpretable Basis"
Tags:
  - NeurIPS/2023
  - time-series-forecasting
  - attention
  - basis-functions
  - interpretable-ml
ZoteroLink: zotero://open-pdf/library/items/KRFD8EZI
FirstAuthor: Ni, Zelin
Author: Yu, Hang; Liu, Shizhan; Li, Jianguo; Lin, Weiyao;
Year: "2023"
ItemType: conferencePaper
Citekey: ni_BasisFormerAttentionbasedTime_2023
Conference: Thirty-seventh Conference on Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To address the limitation of existing methods in simultaneously tailoring bases to specific data and ensuring distinct correlations, BasisFormer uses adaptive self-supervised contrastive learning to acquire interpretable bases for accurate forecasting.

> [!cite]
> **Bibliography**:: Ni, Z., Yu, H., Liu, S., Li, J., & Lin, W. (2023, November 2). _BasisFormer: Attention-based Time Series Forecasting with Learnable and Interpretable Basis_. Thirty-seventh Conference on Neural Information Processing Systems. [https://openreview.net/forum?id=xx3qRKvG0T](https://openreview.net/forum?id=xx3qRKvG0T)

> [!info]
> **Contribution**:: 一种提取过去特征来组合预测值的做法

## Notes

![](Pasted%20image%2020240916214815.png)

还有点意思，文章把 trend, seasonal, time embedding 之类的东西称为 basis，然后提出的预测方法是：

- 自监督的方法训练得到 basis
- 计算各个 basis 和过去片段之间的相似程度
- 预测时，根据相似程度计算权重，组合各个 basis 得到预测结果

## Annotations
%% begin annotations %%


### Imported: 2024-09-16 9:46 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> First, we acquire bases through adaptive self-supervised learning, which treats the historical and future sections of the time series as two distinct views and employs contrastive learning
>
> [Page 1](zotero://open-pdf/library/items/KRFD8EZI?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we design a Coef module that calculates the similarity coefficients between the time series and bases in the historical view via bidirectional crossattention
>
>> 所以是选择过去相似的片段作为未来的增强的意思？
>
> [Page 1](zotero://open-pdf/library/items/KRFD8EZI?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> consolidates
>
>> 巩固
>
> [Page 1](zotero://open-pdf/library/items/KRFD8EZI?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Bases, such as trends and seasonalities
>
>> bases定义成了趋势和季节性
>
> [Page 1](zotero://open-pdf/library/items/KRFD8EZI?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> the linear (or convolution) layers in MLPs [4] (or CNNs [5]) can be regarded as implicit bases, as they act as filter banks to decompose the time series
>
>> MLP能够视为filter？？？
>
> [Page 1](zotero://open-pdf/library/items/KRFD8EZI?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> since they provide reference points for predicting future sequences
>
>> 时间嵌入都给你定义成了basis。。。
>
> [Page 2](zotero://open-pdf/library/items/KRFD8EZI?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Specifically, although Transformer and its variants learn the covariate embeddings, they add or concatenate the same embeddings to different time series embedding in a restricted manner. For MLP and CNN, they adopt the same linear and convolution layers for all time series
>
>> 感觉这观点可以用于不规则阿，说不同序列的密度不同什么的
>
> [Page 2](zotero://open-pdf/library/items/KRFD8EZI?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> exploit a bipartite graph to represent such relations, where the nodes in one set represent the time series (see green nodes in Figure 1) and the nodes in the other set represent the basis vectors
>
>> 二部图表示时序和bassi之间的关系
>
> [Page 4](zotero://open-pdf/library/items/KRFD8EZI?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we aggregate the N basis vectors by computing the coefficients weighted sum of  ̃ zy over the dimension of N , that is
>
>> 实际上是多个basis成分的组合？
>
> [Page 5](zotero://open-pdf/library/items/KRFD8EZI?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the coefficient w.r.t. the corresponding basis vector in cy as the positive sample, and the coefficient w.r.t. the remaining basis vectors in cy as the negative sample
>
>> 这一部分稍微没那么有解释性
>
> [Page 5](zotero://open-pdf/library/items/KRFD8EZI?page=5) 



%% end annotations %%

%% Import Date: 2024-09-16T21:46:57.742+08:00 %%

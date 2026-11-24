---
Title: "MSHyper: Multi-Scale Hypergraph Transformer for Long-Range Time Series Forecasting"
Tags:
  - graphs
  - hypergraph
  - time-series-forecasting
  - transformer
  - multiscale
ZoteroLink: zotero://open-pdf/library/items/4YPBVIBH
FirstAuthor: Shang, Zongjiang
Author: Chen, Ling;
Year: "2024"
ItemType: article
DOI: 10.48550/arXiv.2401.09261
Citekey: shang_MSHyperMultiScaleHypergraph_2024
motivation: 现有方法无法建模多尺度的时序pattern之间的高阶交互
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the inability of previous methods to model high-order interactions in long-range time series forecasting, this paper proposes a Multi-Scale Hypergraph Transformer that uses multi-scale hypergraphs and tri-stage message passing to capture complex pattern interactions.

> [!cite]
> **Bibliography**:: Shang, Z., & Chen, L. (2024). _MSHyper: Multi-Scale Hypergraph Transformer for Long-Range Time Series Forecasting_ (arXiv:2401.09261). arXiv. [https://doi.org/10.48550/arXiv.2401.09261](https://doi.org/10.48550/arXiv.2401.09261)

> [!info]
> **Contribution**:: 多尺度 hypergraph 的时序预测

## Notes

![](Pasted%20image%2020241027104107.png)

hypergraph 在这里的节点含义是多个尺度的时间维度的观测值，不同颜色代表的是不同的尺度

子图 b 中上半是尺度间的关系（association relationship），下半是尺度内的时间维度关系（sequential relationship）。所以这是一种单变量的时间维度关系的建模方法


## Annotations
%% begin annotations %%


### Imported: 2024-10-27 10:39 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, previous works lack the ability to model highorder interactions.
>
>> ？什么叫high-order？
>
> [Page 1](zotero://open-pdf/library/items/4YPBVIBH?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Then by treating hyperedges as nodes, we also build a hyperedge graph to enhance hypergraph modeling
>
> [Page 1](zotero://open-pdf/library/items/4YPBVIBH?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> these methods only use edges to model pairwise interactions and lack the ability to model high-order interactions (i.e., simultaneous interactions between multiple temporal patterns
>
>> ？temporal pattern还能互相影响？
>
> [Page 1](zotero://open-pdf/library/items/4YPBVIBH?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> high-order interactions between daily, weekly, and monthly patterns
>
>> 还是抽象了，pattern之间要怎么交互？主要是给自己的hyperedge的交互找一个理由
>
> [Page 1](zotero://open-pdf/library/items/4YPBVIBH?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> temporal proximity rules
>
>> 时间邻近原则
>
> [Page 1](zotero://open-pdf/library/items/4YPBVIBH?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (a) and (b) are the sequential relationship and association relationship
>
>> 感觉sequential就是temporal，association就是vairable
>
> [Page 4](zotero://open-pdf/library/items/4YPBVIBH?page=4) 



%% end annotations %%

%% Import Date: 2024-10-27T10:39:45.428+08:00 %%

---
Title: "Learning with Hypergraphs: Clustering, Classification, and Embedding"
Tags:
  - NeurIPS/2006
  - hypergraph
  - clustering
  - classification
  - embedding
ZoteroLink: zotero://open-pdf/library/items/MELX6V7J
FirstAuthor: Zhou, Dengyong
Author: Huang, Jiayuan; Schölkopf, Bernhard;
Year: "2006"
ItemType: conferencePaper
Volume: "19"
Publisher: MIT Press
Citekey: zhou_LearningHypergraphsClustering_2006
motivation: 现有的 pair-wise 图建模难以覆盖更加高层的交互，例如表示不了时间维度的交互
Conference: Advances in Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To address information loss from reducing complex relationships to pairwise graphs, this paper generalizes spectral clustering to hypergraphs, enabling effective embedding and transductive classification.

> [!cite]
> **Bibliography**:: Zhou, D., Huang, J., & Schölkopf, B. (2006). Learning with Hypergraphs: Clustering, Classification, and Embedding. _Advances in Neural Information Processing Systems_, _19_. [https://papers.nips.cc/paper_files/paper/2006/hash/dff8e9c2ac33381546d96deea9922999-Abstract.html](https://papers.nips.cc/paper_files/paper/2006/hash/dff8e9c2ac33381546d96deea9922999-Abstract.html)

> [!info]
> **Contribution**:: hypergraph 起源

## Notes

![](Pasted%20image%2020241027102026.png)

这张图就很好地诠释了 hypergraph 和 hyperedge 的概念

假设把 $v_i$ 看作是时序的变量维度，$e_i$ 看作是时序的时间维度，那么中间的图就是只能表达出不同的变量之间的交互关系（pair-wise），而没法直接表达出时间维度的（比如一个变量里究竟有几个时刻有观测值）

最右边的 hypergraph 就使用 hyperedge 来表达，实际上就是把同一个时刻有观测的变量给一起圈了起来，比起是边，更像是面积。

## Annotations
%% begin annotations %%


### Imported: 2024-10-27 10:17 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In many real-world problems, however, relationships among the objects of our interest are more complex than pairwise
>
> [Page 1](zotero://open-pdf/library/items/MELX6V7J?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> cardinality
>
>> 基数
>
> [Page 3](zotero://open-pdf/library/items/MELX6V7J?page=3) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> incidence matrix
>
>> 关联矩阵
>
> [Page 3](zotero://open-pdf/library/items/MELX6V7J?page=3) 



%% end annotations %%

%% Import Date: 2024-10-27T10:17:29.485+08:00 %%

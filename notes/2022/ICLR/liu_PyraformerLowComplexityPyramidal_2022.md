---
Title: "Pyraformer: Low-Complexity Pyramidal Attention for Long-Range Time Series Modeling and Forecasting"
Tags:
  - ICLR/2022
  - time-series-forecasting
  - pyramidal-attention
  - long-range-dependency
  - attention
ZoteroLink: zotero://open-pdf/library/items/CWIK7V3I
FirstAuthor: Liu, Shizhan
Author: Yu, Hang; Liao, Cong; Li, Jianguo; Lin, Weiyao; Liu, Alex X.; Dustdar, Schahram;
Year: "2022"
ItemType: conferencePaper
Citekey: liu_PyraformerLowComplexityPyramidal_2022
motivation: 无
Conference: International Conference on Learning Representations
rating: 3
---
> [!info]
> **TLDR**:: To capture long-range temporal dependencies in time series forecasting with low complexity, Pyraformer employs a pyramidal attention module that achieves constant signal path length and linear time-space complexity.

> [!cite]
> **Bibliography**:: Liu, S., Yu, H., Liao, C., Li, J., Lin, W., Liu, A. X., & Dustdar, S. (2021, October 6). _Pyraformer: Low-Complexity Pyramidal Attention for Long-Range Time Series Modeling and Forecasting_. International Conference on Learning Representations. [https://openreview.net/forum?id=0EXmFzUn5I](https://openreview.net/forum?id=0EXmFzUn5I)

> [!info]
> **Contribution**:: 金字塔型的 attention，比较省

## Notes

![](Pasted%20image%2020240825101003.png)

和你猜的一样的思路

具体实现的思路也好理解：先建树，后运用树注意力

![](Pasted%20image%2020240825101137.png)

建树这一步的多尺度计算用的是卷积：

![](Pasted%20image%2020240825101228.png)

树注意力的话见 Eq.2，大体上是每个节点的 attention 计算涉及老爸、邻居和儿子



## Annotations
%% begin annotations %%


### Imported: 2024-08-25 10:07 am


> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> paramount
>
>> 最重要的 /ˈpærəmaʊnt/
>
> [Page 1](zotero://open-pdf/library/items/Z5F4ULTQ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we introduce the pyramidal attention module (PAM) in which the inter-scale tree structure summarizes features at different resolutions and the intra-scale neighboring connections model the temporal dependencies of different ranges
>
> [Page 1](zotero://open-pdf/library/items/Z5F4ULTQ?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> parsimonious
>
>> 简约 /ˌpɑːsɪˈməʊniəs/
>
> [Page 1](zotero://open-pdf/library/items/Z5F4ULTQ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The architecture of Pyraformer
>
>> 大体上是一个先建树，后运用树注意力的思路
>
> [Page 4](zotero://open-pdf/library/items/Z5F4ULTQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In general, each node in the graph can attend to a set of neighboring nodes N(s) ℓ at three scales: the adjacent A nodes at the same scale including the node itself (denoted as A(s) ℓ ), the C children it has in the C-ary tree (denoted as C(s) ℓ ), and the parent of it in the C-ary tree (denoted P(s) ℓ )
>
>> 每个节点的 attention 计算涉及老爸、邻居和儿子
>
> [Page 5](zotero://open-pdf/library/items/Z5F4ULTQ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Specifically, the coarse-scale nodes are introduced scale by scale from bottom to top by performing convolutions on the corresponding children nodes C(s) ℓ .
>
>> 用卷积得到更加粗粒度的节点
>
> [Page 6](zotero://open-pdf/library/items/Z5F4ULTQ?page=6) 



%% end annotations %%

%% Import Date: 2024-08-25T10:07:33.924+08:00 %%

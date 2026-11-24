---
Title: "FourierGNN: Rethinking Multivariate Time Series Forecasting from a Pure Graph Perspective"
Tags:
  - NeurIPS/2023
  - time-series-forecasting
  - graphs
  - multivariate-time-series
  - fourier-transform
ZoteroLink: zotero://open-pdf/library/items/XPG2JCQG
FirstAuthor: Yi, Kun
Author: Zhang, Qi; Fan, Wei; He, Hui; Hu, Liang; Wang, Pengyang; An, Ning; Cao, Longbing; Niu, Zhendong;
Year: "2023"
ItemType: conferencePaper
Citekey: yi_FourierGNNRethinkingMultivariate_2023
motivation: 现有方法把时间和变量分别用两个子模块分别建模
Conference: Thirty-seventh Conference on Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To address the compatibility issues and separated spatiotemporal modeling in existing GNN-based forecasting, the paper introduces FourierGNN, which reformulates multivariate time series as hypervariate graphs and employs Fourier Graph Operators for unified, efficient prediction.

> [!cite]
> **Bibliography**:: Yi, K., Zhang, Q., Fan, W., He, H., Hu, L., Wang, P., An, N., Cao, L., & Niu, Z. (2023, November 2). _FourierGNN: Rethinking Multivariate Time Series Forecasting from a Pure Graph Perspective_. Thirty-seventh Conference on Neural Information Processing Systems. [https://openreview.net/forum?id=bGs1qWQ1Fx](https://openreview.net/forum?id=bGs1qWQ1Fx)

> [!info]
> **Contribution**:: HyperIMTS 的灵感来源

## Notes
![](Pasted%20image%2020260104193801.png)


## Annotations
%% begin annotations %%


### Imported: 2026-01-04 7:35 pm


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> the separate spatial and temporal modeling naturally violates the unified spatiotemporal inter-dependencies in real world
>
> [Page ](zotero://open-pdf/library/items/XPG2JCQG?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> represents sliding windows as space-time fully-connected graphs
>
> [Page ](zotero://open-pdf/library/items/XPG2JCQG?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> reveals FGO’s equivalence to graph convolutions in the time domain
>
> [Page ](zotero://open-pdf/library/items/XPG2JCQG?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> FourierGNN is built upon our proposed Fourier Graph Operator (FGO), which as a replacement of classic graph operation units (e.g., convolutions), performs matrix multiplications in Fourier space of graphs
>
>> 为了解决复杂度的问题
>
> [Page 2](zotero://open-pdf/library/items/XPG2JCQG?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we assume all nodes in the hypervariate graph Gt are fully-connected
>
> [Page 4](zotero://open-pdf/library/items/XPG2JCQG?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We define SA,W := F (κ) ∈ Cn×d×d as a Fourier Graph Operator (FGO),
>
>> FGO
>
> [Page 4](zotero://open-pdf/library/items/XPG2JCQG?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> between F(X) and FGO S in Fourier space corresponds to a graph shift operation (i.e., a graph convolution) in the time domain [20]
>
> [Page 4](zotero://open-pdf/library/items/XPG2JCQG?page=4) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> the separate spatial and temporal modeling naturally violates the unified spatiotemporal inter-dependencies in real world
>
> [Page 1](zotero://open-pdf/library/items/XPG2JCQG?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> represents sliding windows as space-time fully-connected graphs
>
> [Page 1](zotero://open-pdf/library/items/XPG2JCQG?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> reveals FGO’s equivalence to graph convolutions in the time domain
>
> [Page 1](zotero://open-pdf/library/items/XPG2JCQG?page=1)


%% Import Date: 2026-05-12T01:52:06.000+00:00 %%

---
Title: "TimeMixer: Decomposable Multiscale Mixing for Time Series Forecasting"
Tags:
  - ICLR/2024
  - time-series-forecasting
  - multiscale-mixing
  - temporal-decomposition
  - time-series-analysis
ZoteroLink: zotero://open-pdf/library/items/YMERYVU4
FirstAuthor: Wang, Shiyu
Author: Wu, Haixu; Shi, Xiaoming; Hu, Tengge; Luo, Huakun; Ma, Lintao; Zhang, James Y.; Zhou, Jun;
Year: "2024"
ItemType: conferencePaper
Citekey: wang_TimeMixerDecomposableMultiscale_2024
Conference: The Twelfth International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address intricate temporal variations in time series forecasting, TimeMixer employs a fully MLP-based architecture with decomposable mixing blocks that disentangle and aggregate multiscale seasonal and trend information.

> [!cite]
> **Bibliography**:: Wang, S., Wu, H., Shi, X., Hu, T., Luo, H., Ma, L., Zhang, J. Y., & Zhou, J. (2023, October 13). _TimeMixer: Decomposable Multiscale Mixing for Time Series Forecasting_. The Twelfth International Conference on Learning Representations. [https://openreview.net/forum?id=7oLshfEIC2](https://openreview.net/forum?id=7oLshfEIC2)

> [!info]
> **Contribution**::多尺度的融合，不规则数据集上表现不错 

## Notes

![](Pasted%20image%2020241013105412.png)

看图基本上就能看懂，就是在每个尺度内都进行趋势和季节性的分解

## Annotations
%% begin annotations %%


### Imported: 2024-10-13 10:51 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> time series present distinct patterns in different sampling scales
>
> [Page 1](zotero://open-pdf/library/items/LZ357IEV?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Past-Decomposable-Mixing
>
> [Page 1](zotero://open-pdf/library/items/LZ357IEV?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Future-Multipredictor-Mixing (FMM)
>
> [Page 1](zotero://open-pdf/library/items/LZ357IEV?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> downsample
>
> [Page 3](zotero://open-pdf/library/items/LZ357IEV?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> average pooling
>
> [Page 3](zotero://open-pdf/library/items/LZ357IEV?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> from the lower-level fine-scale time series upwards
>
> [Page 4](zotero://open-pdf/library/items/LZ357IEV?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the upper coarse scale time series can easily provide clear macro information than the lower level
>
> [Page 5](zotero://open-pdf/library/items/LZ357IEV?page=5) 



%% end annotations %%

%% Import Date: 2024-10-13T10:51:59.254+08:00 %%

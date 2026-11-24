---
Title: "Warpformer: A Multi-scale Modeling Approach for Irregular Clinical Time Series"
Tags:
  - KDD/2023
  - irregular-time-series
  - multiscale
  - clinical-data
  - transformer
  - time-series-forecasting
ZoteroLink: zotero://open-pdf/library/items/KSNIY25K
FirstAuthor: Zhang, Jiawen
Author: Zheng, Shun; Cao, Wei; Bian, Jiang; Li, Jia;
Year: "2023"
ItemType: conferencePaper
Page: 3273-3285
DOI: 10.1145/3580305.3599543
Citekey: zhang_WarpformerMultiscaleModeling_2023
motivation: 现有方法很少考虑不同序列之间采样率的显著差异
Conference: Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining
rating: 2
---
> [!info]
> **TLDR**:: Addressing the overlooked inter-series discrepancy in irregularly sampled multivariate time series, Warpformer employs a specific input representation, adaptive warping, and multi-scale attention to unify signals across varying sampling rates.

> [!cite]
> **Bibliography**:: Zhang, J., Zheng, S., Cao, W., Bian, J., & Li, J. (2023). Warpformer: A Multi-scale Modeling Approach for Irregular Clinical Time Series. _Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining_, 3273–3285. [https://doi.org/10.1145/3580305.3599543](https://doi.org/10.1145/3580305.3599543)

> [!info]
> **Contribution**:: 不规则这边最先出现的多尺度方法

## Notes
>
>Comment: KDD23 Research Track.

![](Pasted%20image%2020241120154510.png)

说实话，没看懂 warp 这一步究竟是干什么的，可能需要对于 Dynamic Time Warping 这一块有了解才行

> 后记：warp 大概的意思就是把不同采样点给重新映射到一个 warping curve 上，总之是可以实现下采样

不过全文的动机抓的很好：现有不规则方法没有考虑粗粒度和细粒度之前的差异

## Annotations
%% begin annotations %%


### Imported: 2024-11-20 3:43 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> intra-series irregularity
>
> [Page 1](zotero://open-pdf/library/items/KSNIY25K?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inter-series discrepancy
>
> [Page 1](zotero://open-pdf/library/items/KSNIY25K?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> significant variability in sampling rates among diverse series
>
> [Page 1](zotero://open-pdf/library/items/KSNIY25K?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> including a specific input representation that explicitly characterizes both intra-series irregularity and inter-series discrepancy, a warping module that adaptively unifies irregular time series in a given scale, and a customized attention module for representation learning
>
> [Page 1](zotero://open-pdf/library/items/KSNIY25K?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we stack multiple warping and attention modules to learn at different scales, producing multi-scale representations that balance coarse-grained and fine-grained signals for downstream tasks
>
> [Page 1](zotero://open-pdf/library/items/KSNIY25K?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> on one hand, a fine-grained unification retains detailed variations for frequently monitored signals but leads to very sparse placements of sporadically observed signals; on the other hand, a coarse-grained unification provides more balanced placements for all type of signals and can be used to obtain much clearer overall trending, but it sacrifices detailed variations for high-frequency signals
>
>> 大概意思是采样率高的时序粒度细，采样率低的时序粒度粗，只考虑一种粒度就不太平衡
>
> [Page 2](zotero://open-pdf/library/items/KSNIY25K?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> multi-scale approach for irregular time series
>
> [Page 2](zotero://open-pdf/library/items/KSNIY25K?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> However, the former unifies all time series in one group of pre-specified reference time points, limiting its capability in identifying a data-oriented unification to balance fine-grained and coarse-grained information.
>
>> 设置reference point忽略了细和粗粒度信息的不同
>
> [Page 3](zotero://open-pdf/library/items/KSNIY25K?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Besides, the latter is easy to suffer from the severe imbalance in the observations of different signals and lose the opportunity to capture the general trending hidden from the coarse-grained and balanced view.
>
>> set-based的坏处
>
> [Page 3](zotero://open-pdf/library/items/KSNIY25K?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> temporal misalignment. The underlying reasons could be phase shift, sampling rates, precision, etc
>
> [Page 3](zotero://open-pdf/library/items/KSNIY25K?page=3) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> inter-series discrepancy denotes the presence of dramatically different sampling rates among multiple time series, leading to a significant imbalance in the occurrence of different signals
>
>> discrepancy的定义
>
> [Page 1](zotero://open-pdf/library/items/KSNIY25K?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> because these models do not include specific mechanisms to handle irregularity in time, which essentially conveys indispensable information on its own
>
>> informative missingness的作证
>
> [Page 2](zotero://open-pdf/library/items/KSNIY25K?page=2)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Firstly, the reliance on pre-specified hyper-parameters, such as the number of layers and per-layer unification granularity, poses a challenge in terms of efficiency in hyper-parameter tuning
>
>> 局限1：选超参
>
> [Page 9](zotero://open-pdf/library/items/KSNIY25K?page=9)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Secondly, the maintenance of both temporal and variate dimensions in internal feature representations introduces additional space complexity
>
>> 局限2：空间复杂度
>
> [Page 9](zotero://open-pdf/library/items/KSNIY25K?page=9)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Finally, Warpformer’s dependence on gradients from downstream tasks limits its use to supervised settings, which may affect its generalization performance in real-world scenarios with limited labeled data
>
>> 局限3：受限于有监督场景
>
> [Page 9](zotero://open-pdf/library/items/KSNIY25K?page=9)


%% Import Date: 2026-05-12T02:38:34.000+00:00 %%

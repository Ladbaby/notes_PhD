---
Title: "Irregular Multivariate Time Series Forecasting: A Transformable Patching Graph Neural Networks Approach"
Tags:
  - ICML/2024
  - irregular-time-series
  - graphs
  - multivariate-time-series-forecasting
  - patching
ZoteroLink: zotero://open-pdf/library/items/6EPRHXGD
FirstAuthor: Zhang, Weijia
Author: Yin, Chenlong; Liu, Hao; Zhou, Xiaofang; Xiong, Hui;
Year: "2024"
ItemType: conferencePaper
Citekey: zhang_IrregularMultivariateTime_2024
motivation: 不规则时序未对齐的问题仍未解决
Conference: Forty-first International Conference on Machine Learning
rating: 2
---
> [!info]
> **TLDR**:: To address the underexplored challenge of modeling correlations between asynchronous irregular multivariate time series, this paper proposes t-PatchGNN, which transforms data into uniform patches and uses time-adaptive graph neural networks to capture dynamic inter-series relationships.

> [!cite]
> **Bibliography**:: Zhang, W., Yin, C., Liu, H., Zhou, X., & Xiong, H. (2024, June 6). _Irregular Multivariate Time Series Forecasting: A Transformable Patching Graph Neural Networks Approach_. Forty-first International Conference on Machine Learning. [https://openreview.net/forum?id=UZlMXUGI6e](https://openreview.net/forum?id=UZlMXUGI6e)

> [!info]
> **Contribution**:: 最早将 patch 用于不规则的顶会文章？

## Notes

![](Pasted%20image%2020240811153747.png)

审稿正好审了这篇

总的来说其实没啥惊喜，只不过是 patch 的首次应用，让不同的 patch 有类似的分辨率而不是时间长度。推理效率看起来还可以


## Annotations
%% begin annotations %%


### Imported: 2024-08-11 3:34 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the challenge of modeling correlations between asynchronous IMTS remains underexplored
>
> [Page 1](zotero://open-pdf/library/items/6EPRHXGD?page=1) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> model complicated correlations between variables
>
> [Page 3](zotero://open-pdf/library/items/6EPRHXGD?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we propose to divide each univariate irregular time series o1:L as a series of transformable patches [olp:rp ]pP=1 with variable-length consecutive observations
>
> [Page 4](zotero://open-pdf/library/items/6EPRHXGD?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we first adopt a continuous time embedding (Shukla & Marlin, 2021) to encode the continuous time of observations
>
>> 居然是mTAN？
>
> [Page 4](zotero://open-pdf/library/items/6EPRHXGD?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we introduce the Transformable Time-aware Convolution Network (TTCN) (Zhang et al., 2023b) to capture the semantics within it
>
> [Page 4](zotero://open-pdf/library/items/6EPRHXGD?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To address this, we incorporate patch embedding Htf p = [htf,n p ]nN=1 ∈ RN×D, which implies the time-varying semantics of time series at the patch-level temporal resolution, into the static variable embedding through a gated adding operation:
>
> [Page 6](zotero://open-pdf/library/items/6EPRHXGD?page=6)


%% Import Date: 2026-05-12T02:30:12.000+00:00 %%

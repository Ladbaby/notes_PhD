---
Title: Biased Temporal Convolution Graph Network for Time Series Forecasting with Missing Values
Tags:
  - ICLR/2024
  - time-series-forecasting
  - graphs
  - missing-data
  - temporal-convolution
ZoteroLink: zotero://open-pdf/library/items/K6PABAP7
Year: 2024
ItemType: conferencePaper
Conference: The Twelfth International Conference on Learning Representations
Citekey: chen_BiasedTemporalConvolution_2024
FirstAuthor: Chen, Xiaodan
Author: Li, Xiucheng; Liu, Bo; Li, Zhijun;
score: 2
---
> [!info]
> **TLDR**:: To address performance degradation in multivariate time series forecasting caused by partial data observation, this paper proposes a Biased Temporal Convolution Graph Network that injects bias into temporal and spatial modules to explicitly account for missing patterns.

> [!cite]
> **Bibliography**:: Chen, X., Li, X., Liu, B., & Li, Z. (2024). Biased Temporal Convolution Graph Network for Time Series Forecasting with Missing Values. _The Twelfth International Conference on Learning Representations_, .

> [!info]
> **Contribution**:: 

## Notes

- 时间：比较少见的用 CNN 处理缺失值的设计，将卷积的结果根据实际的观测值数量进行 rescale
- 空间：根据缺失率决定边的权重


## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Biased Temporal Convolution Graph Network
>
> [Page 1](zotero://open-pdf/library/items/66CSDQSE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> temporal dependencies and spatial structure
>
> [Page 1](zotero://open-pdf/library/items/66CSDQSE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> MultiScale Instance PartialTCN
>
> [Page 1](zotero://open-pdf/library/items/66CSDQSE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Biased GCN
>
> [Page 1](zotero://open-pdf/library/items/66CSDQSE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, this two-step process separates the forecasting from the imputation, and the accumulated errors may impede the model performance and lead to suboptimal solutions
>
> [Page 2](zotero://open-pdf/library/items/66CSDQSE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> these methods are not dedicated to time series forecasting
>
> [Page 2](zotero://open-pdf/library/items/66CSDQSE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> thus cannot utilize the sparsity of the observations
>
> [Page 2](zotero://open-pdf/library/items/66CSDQSE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> injecting bias to account for missing patterns
>
> [Page 2](zotero://open-pdf/library/items/66CSDQSE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> instance-independent partial temporal convolution to capture the dependency within each time series
>
> [Page 4](zotero://open-pdf/library/items/66CSDQSE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Biased GCN module constructs a graph among different instances and conducts graph convolution to model the spatial correlation
>
> [Page 4](zotero://open-pdf/library/items/66CSDQSE?page=4)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> TCN
>
>> Temporal Convolution Network
>
> [Page 4](zotero://open-pdf/library/items/66CSDQSE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> TCN exhibits more favorable sequence modeling abilities in comparison to RNNs
>
> [Page 4](zotero://open-pdf/library/items/66CSDQSE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the convolution operation permits a simple modification to account for partial observations as evidenced in computer vision
>
> [Page 4](zotero://open-pdf/library/items/66CSDQSE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the parameters of partial TCN are shareable across different instances
>
> [Page 4](zotero://open-pdf/library/items/66CSDQSE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> x′ = (K sum(mt−K:t) (xt−K:t ⊙ mt−K:t) W + b, if sum(mt−K:t) > 0, 0, otherwise.
>
> [Page 4](zotero://open-pdf/library/items/66CSDQSE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> multi-scale convolution with different kernel sizes
>
> [Page 5](zotero://open-pdf/library/items/66CSDQSE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> max pooling
>
> [Page 5](zotero://open-pdf/library/items/66CSDQSE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> explore the spatial structure of the temporally fused feature map X′ and updated M
>
> [Page 5](zotero://open-pdf/library/items/66CSDQSE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> each time series is treated as a graph node
>
> [Page 5](zotero://open-pdf/library/items/66CSDQSE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> explicitly incorporates the missing patterns into the graph structure learning to account for the missing values
>
> [Page 5](zotero://open-pdf/library/items/66CSDQSE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adaptive graph structure learning approach
>
> [Page 5](zotero://open-pdf/library/items/66CSDQSE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The i-th row of E1 (resp. E2), denoted by e(1) i (resp. e(2) i ), is the embedding of i-th time series and e(1)⊤ i e(2) j quantifies the correlation strength from node i to node j.
>
> [Page 5](zotero://open-pdf/library/items/66CSDQSE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> filling the missing entries with zeros and the values imputed by TimesNet (Wu et al., 2023),
>
> [Page 7](zotero://open-pdf/library/items/66CSDQSE?page=7)


%% Import Date: 2026-05-12T01:32:04.000+00:00 %%

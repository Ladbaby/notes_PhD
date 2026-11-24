---
Title: Locally Connected Echo State Networks for Time Series Forecasting
Tags:
  - ICLR/2024
  - Echo-State-Networks
  - time-series-forecasting
  - locally-connected
  - reservoir-computing
ZoteroLink: zotero://open-pdf/library/items/XTRUMPGZ
Year: "2024"
ItemType: conferencePaper
Conference: The Thirteenth International Conference on Learning Representations
Citekey: _LocallyConnectedEcho_2024
rating: 2
---
> [!info]
> **TLDR**:: To address the high time and space complexities of standard Echo State Networks, this work introduces Locally Connected ESNs with locally connected reservoirs and weight adaptation to enable substantially larger, more efficient networks.

> [!cite]
> **Bibliography**::  (2024). Locally Connected Echo State Networks for Time Series Forecasting. In _The Thirteenth International Conference on Learning Representations_.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> asymptotic
>
>> 渐进的
>
> [Page 1](zotero://open-pdf/library/items/XTRUMPGZ?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> resistance to overfitting, a fast (one-shot) training procedure, and a simple architecture
>
>> ESN相比于基于梯度学习的模型的优势
>
> [Page 1](zotero://open-pdf/library/items/XTRUMPGZ?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> The first is the quadratic time and space complexity of each ESN step, which, in practical terms, limits the network size to hundreds or a few thousand neurons. The second is that reservoirs with long memory make the network unstable and oversensitive to hyperparameter perturbations.
>
>> ESN的短板
>
> [Page 1](zotero://open-pdf/library/items/XTRUMPGZ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where z(t) ∈ Rn represents the pre-activation potentials before being processed by the tanh activation function, γ ∈ R is the leakage parameter, and μb ∈ R denotes a constant bias shared by all neurons.
>
> [Page 3](zotero://open-pdf/library/items/XTRUMPGZ?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We propose a local topology that reduces the asymptotic time complexity of the ESN step without compromising accuracy
>
>> 在一个小的范围内进行连接，可以降复杂度
>
> [Page 4](zotero://open-pdf/library/items/XTRUMPGZ?page=4)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> However, since the reservoir is composed of randomly initialized weights, it does not differentiate between useful information and noise present in the data. As the memory capacity of the network increases, its sensitivity to both signal and noise grows accordingly
>
>> 传统ESN的劣势
>
> [Page 4](zotero://open-pdf/library/items/XTRUMPGZ?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It simply gives each neuron a lookback connection to its historical state at a random time horizon
>
>> 每个memory随机连接到过去的一个时刻的状态
>
> [Page 4](zotero://open-pdf/library/items/XTRUMPGZ?page=4)


%% Import Date: 2026-05-12T02:21:21.000+00:00 %%

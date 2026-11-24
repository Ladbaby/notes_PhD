---
Title: Locally Connected Echo State Networks for Time Series Forecasting
Tags:
  - time-series-forecasting
  - echo-state-networks
  - reservoir-computing
  - locally-connected
  - ICLR/2025
ZoteroLink: zotero://open-pdf/library/items/B676PFSR
Year: 2025
ItemType: conferencePaper
Citekey: matzner_LocallyConnectedEcho_2025
Conference: The Thirteenth International Conference on Learning Representations
FirstAuthor: Matzner, Filip
Author: Mráz, František;
rating: 2
---
> [!info]
> **TLDR**:: To overcome the scalability and memory limitations of standard Echo State Networks, this work introduces Locally Connected ESNs with locally connected reservoirs and weight adaptation to enable larger, more efficient models for time series forecasting.

> [!cite]
> **Bibliography**:: _Locally Connected Echo State Networks for Time Series Forecasting_. (2024, October 4). The Thirteenth International Conference on Learning Representations. [https://openreview.net/forum?id=KeRwLLwZaw](https://openreview.net/forum?id=KeRwLLwZaw)

> [!info]
> **Contribution**:: 

## Notes

ICLR 2025 under review

从标题就可以看出来还挺有意思的，是对于经典网络 ESN 的一种改进的尝试

得先从 ESN 是什么说起：

![](Pasted%20image%2020241220161235.png)

大概就是有一个稀疏连接的储备池，是不更新且随机初始化的，唯一要学习的就是输出层

某种意义上来说和 Rocket 的思路有一点类似

好处：

- 不容易过拟合
- 训练飞快
- 模型简单

劣势：

- 储备池内的计算复杂度较高
- 拥有较大的记忆长度时候会不太稳定

于是本文提出了 LCESN，具体的改进是：

- 仅在小范围内进行连接，避免任意两点之间连接的高复杂性
	![](Pasted%20image%2020241220161810.png)
- 每一个神经元有一个到过去随机一个时刻的连接
	![](Pasted%20image%2020241220161823.png)

## Annotations
%% begin annotations %%


### Imported: 2024-12-20 4:10 pm


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



%% end annotations %%

%% Import Date: 2024-12-20T16:10:46.026+08:00 %%

---
Title: Learning Deep Time-index Models for Time Series Forecasting
Tags:
  - ICML/2023
  - time-series-forecasting
  - time-index-models
  - dataset/ETT
  - dataset/electricity
  - dataset/exchange
  - dataset/traffic
  - dataset/weather
  - dataset/ILI
ZoteroLink: zotero://open-pdf/library/items/97YQ8HKE
FirstAuthor: Woo, Gerald
Author: Liu, Chenghao; Sahoo, Doyen; Kumar, Akshat; Hoi, Steven;
Year: "2023"
ItemType: journalArticle
Citekey: woo_LearningDeepTimeindex_2023
motivation: 改进time-index模型用于预测
rating: 2
---

> [!info]
> **TLDR**:: To address the inability of naive deep time-index models to generalize due to lacking inductive bias, this paper proposes DeepTime, a meta-optimization framework that learns efficient and accurate forecasting models.

> [!cite]
> Woo, G., Liu, C., Sahoo, D., Kumar, A., & Hoi, S. C. H. (2023). Learning Deep Time-index Models for Time Series Forecasting. International Conference on Machine Learning (ICML), 37217–37237.


> [!info]
> **Contribution**:: time-index 模型用于预测

![](Pasted%20image%2020231128165423.png)

![](Pasted%20image%2020231128165441.png)

## Notes

长时序预测任务

改进了 deep time-index models

文章提到了两大类时序预测的模型：

- historical-value model

    > Historical-value models predict future time step(s) as a function of **past observations**
- time-index model

    > models whose predictions are purely functions of the corresponding **time-index** features at future time-step(s)

也就是说，输入的东西不一样。感觉被它这么一说，扩散相关的方法好像都是 historical-vale 的？

## Model Architecture

结构出奇简单，就是个多了 concatenated Fourier features 的 MLP

## Meta-optimization Framework

抽象一点的优化框架，分为内外两层

- 内层：

    作用于 lookback window，优化 locally stationary distribution $\theta_t^*$
- 外层：

    优化出 inductive bias，作用于整个时序

内外层的关系：

> Each lookback window has it’s own optimal base parameters, which are then used to predict the immediate following forecast horizon

外层就是把一个个 window 的信息结合起来

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:41 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> are far more expressive
>
> [Page 1](zotero://open-pdf/library/items/97YQ8HKE?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> being unable to generalize to unseen time steps due to the lack of inductive bias
>
> [Page 1](zotero://open-pdf/library/items/97YQ8HKE?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> There are two typical approaches to time series forecasting – historical-value, and time-index models
>
> [Page 1](zotero://open-pdf/library/items/97YQ8HKE?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> model temporal relationships at the data sampling frequency.
>
> [Page 1](zotero://open-pdf/library/items/97YQ8HKE?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> leading historical-value models to be prone to capturing spurious correlations.
>
> [Page 1](zotero://open-pdf/library/items/97YQ8HKE?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> yt = g(τt) + s(τt) + h(τt), where g, s, h represent trend, periodic, and holiday components respectively
>
> [Page 1](zotero://open-pdf/library/items/97YQ8HKE?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> ablations
>
>> 消融实验
>
> [Page 2](zotero://open-pdf/library/items/97YQ8HKE?page=2) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> extrapolation
>
>> 外推法
>
> [Page 2](zotero://open-pdf/library/items/97YQ8HKE?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inductive biases
>
> [Page 2](zotero://open-pdf/library/items/97YQ8HKE?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> to retain the flexibility and expressiveness of the neural network, as well as to learn inductive bias to guarantee extrapolation capability over unseen time steps from time series data
>
> [Page 2](zotero://open-pdf/library/items/97YQ8HKE?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> two stages, the inner, and outer learning process.
>
> [Page 2](zotero://open-pdf/library/items/97YQ8HKE?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> standard supervised learning process
>
> [Page 2](zotero://open-pdf/library/items/97YQ8HKE?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> earn a strong inductive bias
>
> [Page 2](zotero://open-pdf/library/items/97YQ8HKE?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> minimizing a reconstruction loss
>
> [Page 3](zotero://open-pdf/library/items/97YQ8HKE?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> coordinatebased models
>
> [Page 3](zotero://open-pdf/library/items/97YQ8HKE?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> experience difficulty in learning high frequency functions,
>
> [Page 3](zotero://open-pdf/library/items/97YQ8HKE?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> concatenating multiple Fourier basis functions with diverse scale parameters, i.e. γ(τ ) = [sin(2πB1τ ), cos(2πB1τ ), . . . , sin(2πBSτ ), cos(2πBSτ )]T , where elements in Bs ∈ Rd/2×c are sampled from N (0, σ2 s ),
>
> [Page 3](zotero://open-pdf/library/items/97YQ8HKE?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> locally stationary distribution, θ∗
>
> [Page 4](zotero://open-pdf/library/items/97YQ8HKE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> optimizes the meta parameters over the entire time series
>
> [Page 4](zotero://open-pdf/library/items/97YQ8HKE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inductive bias
>
> [Page 4](zotero://open-pdf/library/items/97YQ8HKE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Let the L time steps preceding the forecast horizon at time step t, be the lookback window, Yt−L:t = [yt−L; . . . ; yt−1]T ∈ RL×m
>
> [Page 4](zotero://open-pdf/library/items/97YQ8HKE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Yt−L:t, Yt:t+H ),
>
> [Page 4](zotero://open-pdf/library/items/97YQ8HKE?page=4) 



%% end annotations %%

%% Import Date: 2023-11-28T16:41:23.515+08:00 %%

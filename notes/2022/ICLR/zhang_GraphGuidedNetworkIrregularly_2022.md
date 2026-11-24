---
Title: Graph-Guided Network for Irregularly Sampled Multivariate Time Series
Tags:
  - ICLR/2022
  - graphs
  - irregular-time-series
  - graph-neural-network
  - multivariate-time-series
ZoteroLink: zotero://open-pdf/library/items/YUDIKMQK
FirstAuthor: Zhang, Xiang
Author: Zeman, Marko; Tsiligkaridis, Theodoros; Zitnik, Marinka;
Year: "2022"
ItemType: conferencePaper
Citekey: zhang_GraphGuidedNetworkIrregularly_2022
motivation: 针对不规则时序的特征来建模变量间的关系和随时间推移的演化
Conference: International Conference on Learning Representations
rating: 3
---

> [!info]
> **TLDR**:: To handle irregularly sampled multivariate time series with varying sensor observations, RAINDROP employs a graph neural network that learns time-varying sensor dependencies via a novel message passing operator to embed samples and predict misaligned readouts.

> [!cite]
> **Bibliography**:: Zhang, X., Zeman, M., Tsiligkaridis, T., & Zitnik, M. (2021, October 6). _Graph-Guided Network for Irregularly Sampled Multivariate Time Series_. International Conference on Learning Representations. 

> [!info]
> **Contribution**:: 随时间变化的变量间关系建模

![](Pasted%20image%2020231202165134.png)
## Notes

其实是个学习 observational representation 的模型，只不过作者把它冠以了随时间动态变化这么个看起来高大上的讲法。在面对观测值较多的输入时速度极其慢。

关于我关心的他怎么处理缺失值的问题，它直接将输入 $x_{i,u}^t$ 非线性映射 $\mathbf{h}_{i,u}^t=\sigma(x_{i,u}^t\mathbf{R}_u)$ 到了==高维度空间==；而且对于每个维度来说，这个 transform 其实都不太一样，具体的实现上，==通过该变量是否被观测，决定权重向量们 $\mathbf{R}_u$ 的值==

对于缺失值的处理思路是，利用图网络，使用已经观测到的变量的值，对于未观测的变量的值进行**填补**

## Annotations
%% begin annotations %%


### Imported: 2023-12-02 3:58 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> represents every sample as a separate sensor graph
>
> [Page 1](zotero://open-pdf/library/items/EVMMGIIM?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> models time-varying dependencies between sensors with a novel message passing operator
>
> [Page 1](zotero://open-pdf/library/items/EVMMGIIM?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> classify
>
> [Page 1](zotero://open-pdf/library/items/EVMMGIIM?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> However, the absence of observations can be informative on its own (Little & Rubin, 2014) and thus imputing missing observations is not necessarily beneficial
>
>> 对于imputation的弊端的论述
>
> [Page 1](zotero://open-pdf/library/items/EVMMGIIM?page=1) 

> [!quote|#5fb236] <mark style="background-color: #5fb236">Highlight</mark>
> Thus, recent methods circumvent the imputation stage and directly model irregularly sampled time series (Che et al., 2018; Horn et al., 2020).
>
>> 待研究
>
> [Page 2](zotero://open-pdf/library/items/EVMMGIIM?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> model temporal dynamics of sensor dependencies and how those relationships evolve over time
>
> [Page 2](zotero://open-pdf/library/items/EVMMGIIM?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> aggregates them into a sensor embedding using temporal attention
>
> [Page 4](zotero://open-pdf/library/items/EVMMGIIM?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> map observation xt i,u to a high-dimensional space using a nonlinear transformation: ht i,u = σ(xt i,uRu)
>
> [Page 5](zotero://open-pdf/library/items/EVMMGIIM?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sensorspecific transformations because values recorded at different sensors can follow different distributions, which is achieved by trainable weight vectors Ru depending on what sensor is activated
>
>> 需要具体看看是怎么做到的
>
> [Page 5](zotero://open-pdf/library/items/EVMMGIIM?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> produces observation embedding ht i,v for sensor v through its relational connection with u
>
> [Page 6](zotero://open-pdf/library/items/EVMMGIIM?page=6) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> The observation embeddings at different timestamps have unequal importance to the the sensor embedding
>
>> 不同时间步的观测值，对于某个变量而言，重要性也会不同
>
> [Page 6](zotero://open-pdf/library/items/EVMMGIIM?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> RAINDROP can seamlessly use a set-based readout function such as averaging aggregation
>
> [Page 7](zotero://open-pdf/library/items/EVMMGIIM?page=7) 



%% end annotations %%

%% Import Date: 2023-12-02T15:58:37.568+08:00 %%

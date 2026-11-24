---
Title: "A Survey on Graph Neural Networks for Time Series: Forecasting, Classification, Imputation, and Anomaly Detection"
Tags:
  - graphs
  - time-series-analysis
  - survey
  - time-series-forecasting
  - anomaly-detection
ZoteroLink: zotero://open-pdf/library/items/VYKUEHK3
FirstAuthor: Jin, Ming
Author: Koh, Huan Yee; Wen, Qingsong; Zambon, Daniele; Alippi, Cesare; Webb, Geoffrey I.; King, Irwin; Pan, Shirui;
Year: 2023
ItemType: article
DOI: 10.48550/arXiv.2307.03759
Citekey: jin_SurveyGraphNeural_2023
code: https://github.com/KimMeen/Awesome-GNN4TS
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of modeling complex inter-temporal and inter-variable relationships in time series data, this survey provides a comprehensive taxonomy and review of graph neural network approaches for forecasting, classification, anomaly detection, and imputation.

> [!cite]
> **Bibliography**:: Jin, M., Koh, H. Y., Wen, Q., Zambon, D., Alippi, C., Webb, G. I., King, I., & Pan, S. (2023). _A Survey on Graph Neural Networks for Time Series: Forecasting, Classification, Imputation, and Anomaly Detection_ (arXiv:2307.03759). arXiv. [https://doi.org/10.48550/arXiv.2307.03759](https://doi.org/10.48550/arXiv.2307.03759)

> [!info]
> **Contribution**:: 图网络综述

## Notes

### 1. Introduction

非图网络的方法的缺陷：无法在非欧式空间里对于空间关系进行直接建模

### 2. Definition and Notation

>[!Note] Attribute Graph
>$\mathcal{G}=(\mathbf{A},\mathbf{X})$，其中 $\mathbf{A}$ 是adjacency matrix，$\mathbf{X}$ 是 node-feature matrix

>[!note] Spatial-Temporal Graph
> 就是 Attribute Graph 加上了时间的维度，变成了动态图

![](Pasted%20image%2020231203162216.png)

上图这种利用边对于多变量之间的关系进行建模是最常见的

> [!note] Graph Neural Network
> 有两个最重要的函数：`AGGREGATE` 和 `COMBINE`
> 大致的思路是，神经网络的每一层的每个节点都包含 `AGGREGATE` 从邻居（其它变量）得到的信息，以及该节点对应的 embedding；`COMBINE` 会将上一层的 embedding 和这一层的邻居信息进行合并，得到这一层这个节点的 embedding

### 3. Framework and Categorization

#### 3.1 Task-Oriented Taxonomy

##### 3.1.1 Forecasting

一般由 spatial-temporal GNN 和一个 predictor 组成，而这个 predictor 常见的是 MLP

比较有意思的概念区分其实是：

- **deterministic** time series forecasting: 比如 MLP 这种，最小化预测和 ground truth 之间的差距
- **probabilistic** time series forecasting: 比如扩散模型，预测的是概率分布

##### 3.1.2 Imputation

这里文章做了个很奇怪的概念区分：

假设带缺失值的时序为 $\tilde{X}_{t-T:t}$，对应的完整时序为 $X_{t-T:t}$

- in-sample imputation: train on $\tilde{X}_{t-T:t}$, evaluate on $X_{t-T:t}$
- out-of-sample imputation: train on $\tilde{X}_{t-T:t}$, but evaluate on $X_{t:t+H}$

挺怪的。。。这么区分真的有啥用吗

#### 3.2 Unified Methodological Framework

从宏观来看的话，图网络的模型基本上就是两个模块凑在一起：

- **Spatial Module**: 都是用图网络，只不过具体来说还能细分为两类：
	- *spectral* GNNs
		> are based on spectral graph theory and use the graph shift operator (like the graph Laplacian) to capture node relationships in the graph frequency domain

		（谱方法这一支的数学工具比较重，需要额外补图信号处理的背景）
	- *spatial* GNNs
		> spatial GNNs simplify spectral GNNs by directly designing filters that are localized to each node’s neighborhood
- **Temporal Module**: 啥都有，时域e.g., RNN, CNN, Attention；频域e.g., Fourier transform

### 9. Future Directions

- **Pre-training, Transfer Learning, and Large Models**
- **Robustness**: 要是系统变化快，模型的稳定性就很重要了
- **Interpretability**
- **Uncertainty Quantification**
## Annotations
%% begin annotations %%


### Imported: 2023-12-03 4:00 pm


> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> advent
>
>> /'ædvənt/<br />
到来
>
> [Page 1](zotero://open-pdf/library/items/VYKUEHK3?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> one of the biggest limitations of the above methods is that they do not explicitly model the spatial relations existing between time series in non-Euclidean space
>
>> 非图模型在非欧式空间里不能直接对空间关键进行建模
>
> [Page 2](zotero://open-pdf/library/items/VYKUEHK3?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the set of N nodes
>
> [Page 3](zotero://open-pdf/library/items/VYKUEHK3?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the set of edges
>
> [Page 3](zotero://open-pdf/library/items/VYKUEHK3?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where the i-th row xi ∈ RD represents the D-dimensional feature vector of node vi.
>
>> [i, D] i个变量 每个变量的维度是 D
>
> [Page 3](zotero://open-pdf/library/items/VYKUEHK3?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Spatial-Temporal Graph
>
>> 一连串的attribute graph
>
> [Page 4](zotero://open-pdf/library/items/VYKUEHK3?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> graph convolution
>
> [Page 4](zotero://open-pdf/library/items/VYKUEHK3?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> AGGREGATE(·) and COMBINE(·)
>
> [Page 4](zotero://open-pdf/library/items/VYKUEHK3?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> AGGREGATE(·) function computes and aggregates messages from neighboring nodes
>
> [Page 4](zotero://open-pdf/library/items/VYKUEHK3?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> COMBINE(·) function merges the aggregated and previous states to transform node embeddings
>
>> 上一层的embedding+这一层的邻居信息=这一层的embedding
>
> [Page 4](zotero://open-pdf/library/items/VYKUEHK3?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a(k) i and h(k) i represent the aggregated message from neighbors and the transformed node embedding of node vi in the k-th layer, respectively
>
>> k是层数 i是节点（变量）数
>
> [Page 4](zotero://open-pdf/library/items/VYKUEHK3?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> heuristics or learned from data
>
>> 两种建图的方式
>
> [Page 4](zotero://open-pdf/library/items/VYKUEHK3?page=4) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> A simple example is the construction of adjacency matrix A based on the cosine similarity between time series
>
>> ？这是什么做法
>
> [Page 4](zotero://open-pdf/library/items/VYKUEHK3?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> learn the graph structure from the data end-to-end with the downstream task
>
> [Page 5](zotero://open-pdf/library/items/VYKUEHK3?page=5) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> the predictor is, normally, a multi-layer perceptron
>
>> predictor一般是MLP？！
>
> [Page 5](zotero://open-pdf/library/items/VYKUEHK3?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> deterministic time series forecasting
>
> [Page 5](zotero://open-pdf/library/items/VYKUEHK3?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> probabilistic time series forecasting
>
>> 也就是说 某种意义上diffusion其实和MLP不在一个赛道上 一个probabilistic 一个 deterministic
>
> [Page 5](zotero://open-pdf/library/items/VYKUEHK3?page=5) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> In-sample imputation involves filling missing values in a given time series, while out-of-sample imputation pertains to inferring missing data not present in the training dataset
>
>> 他想说一种训练集里见不到，另一种见得到？？？
>
> [Page 5](zotero://open-pdf/library/items/VYKUEHK3?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This quality becomes critical when dealing with time series data generated by rapidly evolving systems
>
> [Page 19](zotero://open-pdf/library/items/VYKUEHK3?page=19) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> decision-making
>
> [Page 19](zotero://open-pdf/library/items/VYKUEHK3?page=19) 



%% end annotations %%

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> advent
>
>> /'ædvənt/<br>到来
>
> [Page 1](zotero://open-pdf/library/items/VYKUEHK3?page=1)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> tandem
>
>> 同时地
>
> [Page 8](zotero://open-pdf/library/items/VYKUEHK3?page=8)


> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> advent
>
>> /'ædvənt/<br>到来
>
> [Page 1](zotero://open-pdf/library/items/VYKUEHK3?page=1)


%% Import Date: 2026-05-15T14:20:50.000+00:00 %%

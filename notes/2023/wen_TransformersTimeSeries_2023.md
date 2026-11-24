---
Title: "Transformers in Time Series: A Survey"
Tags:
  - transformer
  - time-series
  - survey
  - time-series-forecasting
  - long-range-dependency
ZoteroLink: zotero://open-pdf/library/items/B7REWWDY
FirstAuthor: Wen, Qingsong
Author: Zhou, Tian; Zhang, Chaoli; Chen, Weiqi; Ma, Ziqing; Yan, Junchi; Sun, Liang;
Year: "2023"
ItemType: article
DOI: 10.48550/arXiv.2202.07125
Citekey: wen_TransformersTimeSeries_2023
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the growing interest and structural challenges of applying Transformers to time series data, this paper systematically reviews architectural adaptations, application categories, and empirical performance while suggesting future research directions.

> [!cite]
> **Bibliography**:: Wen, Q., Zhou, T., Zhang, C., Chen, W., Ma, Z., Yan, J., & Sun, L. (2023). _Transformers in Time Series: A Survey_ (arXiv:2202.07125). arXiv. [https://doi.org/10.48550/arXiv.2202.07125](https://doi.org/10.48550/arXiv.2202.07125)

> [!info]
> **Contribution**:: 时序用transformers综述

## Notes
>
>Comment: Accepted by 32nd International Joint Conference on Artificial Intelligence (IJCAI 2023). 9 pages. The first work to comprehensively and systematically summarize time series Transformers. The GitHub repository is https://github.com/qingsongedu/time-series-transformers-review.

transformers 因为可以对长时间的依赖关系进行建模，这优点非常吸引人

## Network Modifications for Time Series

### Positional Encoding

为了让模型知道时序的顺序信息，比较常见的做法是首先将位置信息编码成向量，然后和输入的时序一起注入进模型

- **Vanilla Positional Encoding**

    指的是 17 年最原始的那种，用正余弦，因为有些参数是人肉捏出来的，难免没那么适合

- **Learnable Positional Encoding**

    让模型自己学

- **Timestamp Encoding**

    假如能够拿到时间戳信息的话，甚至可以考虑将时间戳编码进 embedding

### Attention Module

对于 self-attention 模块的解释还挺形象的：

> It can be viewed as a fully connected layer with weights that are dynamically generated based on the pairwise similarity of input patterns

由于原版的 self-attention 的复杂度是 $O(N^2)$，故降低复杂度是一个重要挑战

- sparsity bias
- low-rank property of self-attention matrix

### Architecture-based Attention Innovation

在模型的结构上做出一些改变，比如说在注意力模块之间塞入池化层

## Experiments

- 鲁棒性

    在输入的时序变长之后，模型的准确度有较大程度的下滑

- 模型大小

    一般而言，层数越多会让模型表现越好，但是时序这边反而没有这种现象，所以如何堆叠深度需要研究


## 未来研究方向

### Inductive Biases

> **inductive bias** refers to the tendency of models to rely heavily on the training data and make poor predictions when encountering unseen data. This bias can occur due to various factors such as overfitting, lack of generalization or unfit data.

让 transformers 拥有更好的泛化能力，比如加入序列的周期性信息、频率信息

### GNN

transformers + GNN 好像拥有很不错的效果

### 预训练模型

除了时序分类之外，没有什么时序预训练模型

### Architecture Level Variants

现有的尝试基本上都没有在模型的架构层面进行改动，而一般是在改动 attention 模块

### Neural architectural search

超参数对于模型的性能有很大影响，而利用 AutoML 的技巧，比如 NAS，可以更高效地填写超参（而非人为填


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 8:51 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> capture long-range dependencies and interactions
>
> [Page 1](zotero://open-pdf/library/items/B7REWWDY?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> network structure
>
> [Page 1](zotero://open-pdf/library/items/B7REWWDY?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> applications
>
> [Page 1](zotero://open-pdf/library/items/B7REWWDY?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> first encode positional information as vectors and then inject them into the model as a
>
> [Page 2](zotero://open-pdf/library/items/B7REWWDY?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> additional input together with the input time series
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> learning appropriate positional embeddings from time series data can be much more effective
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> encode timestamps as additional positional encoding by using learnable embedding layers
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It can be viewed as a fully connected layer with weights that are dynamically generated based on the pairwise similarity of input patterns
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> O(N 2)
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sparsity bias
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> low-rank property
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> renovate
>
>> 翻新
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> multi-resolution aspect
>
> [Page 3](zotero://open-pdf/library/items/B7REWWDY?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> overstationarization problem
>
> [Page 4](zotero://open-pdf/library/items/B7REWWDY?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> More works and designs need to be investigated to fully utilize long sequence input for better performance
>
> [Page 6](zotero://open-pdf/library/items/B7REWWDY?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It raises a question about how to design a proper Transformer architecture with deeper layers to increase the model’s capacity and achieve better forecasting performance
>
> [Page 6](zotero://open-pdf/library/items/B7REWWDY?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the simple seasonal-trend decomposition model can significantly boost model’s performance by 50 % to 80%
>
> [Page 6](zotero://open-pdf/library/items/B7REWWDY?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> series periodicity
>
> [Page 7](zotero://open-pdf/library/items/B7REWWDY?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> frequency processing
>
> [Page 7](zotero://open-pdf/library/items/B7REWWDY?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> combine Transformers and GNNs for effectively spatial-temporal modeling
>
> [Page 7](zotero://open-pdf/library/items/B7REWWDY?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> architecture-level
>
> [Page 7](zotero://open-pdf/library/items/B7REWWDY?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> AutoML technique like Neural architecture search (NAS)
>
> [Page 7](zotero://open-pdf/library/items/B7REWWDY?page=7) 



%% end annotations %%

%% Import Date: 2023-11-28T20:51:35.189+08:00 %%

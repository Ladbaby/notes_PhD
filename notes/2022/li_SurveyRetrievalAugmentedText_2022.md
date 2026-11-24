---
Title: A Survey on Retrieval-Augmented Text Generation
Tags:
  - survey
  - retrieval-augmented-generation
  - text-generation
  - natural-language-processing
  - knowledge-grounded-generation
ZoteroLink: zotero://open-pdf/library/items/XKUCGCH9
FirstAuthor: Li, Huayang
Author: Su, Yixuan; Cai, Deng; Wang, Yan; Liu, Lemao;
Year: "2022"
ItemType: article
DOI: 10.48550/arXiv.2202.01110
Citekey: li_SurveyRetrievalAugmentedText_2022
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the need for a comprehensive overview of retrieval-augmented text generation, this survey reviews its generic paradigm and notable approaches across dialogue, translation, and other tasks while identifying key future research directions.

> [!cite]
> **Bibliography**:: Li, H., Su, Y., Cai, D., Wang, Y., & Liu, L. (2022). _A Survey on Retrieval-Augmented Text Generation_ (arXiv:2202.01110). arXiv. [https://doi.org/10.48550/arXiv.2202.01110](https://doi.org/10.48550/arXiv.2202.01110)

> [!info]
> **Contribution**:: 检索增强综述

## Notes
>
>Comment: all authors contributed equally.

## 1. 数据来源

### 1.1 Training Corpus

直接从训练数据里提取

### 1.2 External Data

顾名思义，外部数据集

常用于的任务是：
- domain adaptation
- knowledge update

### 1.3 Unsupervised Data

无标签数据

## 2. Retrieval Metrics

那到底索引的算法有啥类型呢？

### 2.1 Sparse-vector Retrieval

属于有监督的数据集会用的方法

比较标签之间的相似度

### 2.2 Dense-vector Retrieval

和上一个相比，会先把数据 encode 成低维度的 vector 再进行比较

### 2.3 Task-specific Retrieval

把下游任务和 retriever 一起训练，为了特定任务而优化

## 3. Integration

如何将这么样的模块融合进现有的模型里呢？

### 3.1 Data Augmentation

单纯将提取出来的数据和原来的数据进行拼接

### 3.2 Attention Mechanisms

用 attention (不熟)

### 3.3 Skeleton Extraction

没太懂，似乎是个别文章提出来的方法

## 4. Future Directions

### 4.1 Retrieval Sensitivity

假如提取出来的数据和原来的数据相似度不高的话，会有大问题

### 4.2 Retrieval Efficiency

overhead 太大

### 4.3 Local vs. Global Optimization

没太懂


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 5:02 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The knowledge is not necessary to be implicitly stored in model parameters, but is explicitly acquired in a plug-and-play manner, leading to great scalibility;
>
> [Page 1](zotero://open-pdf/library/items/XKUCGCH9?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> potentially alleviates the difficulty of text generation.
>
> [Page 1](zotero://open-pdf/library/items/XKUCGCH9?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> y = f (x, z)
>
> [Page 2](zotero://open-pdf/library/items/XKUCGCH9?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> yr may benefit the response generation, if xr (or yr) is similar (or relevant) to the input x
>
> [Page 2](zotero://open-pdf/library/items/XKUCGCH9?page=2) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> corpus
>
>> 语料库
>
> [Page 2](zotero://open-pdf/library/items/XKUCGCH9?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sparsevector retrieval, dense-vector retrieval, and trainingbased retrieval
>
> [Page 2](zotero://open-pdf/library/items/XKUCGCH9?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> making the model be able to re-access it during inference
>
> [Page 2](zotero://open-pdf/library/items/XKUCGCH9?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> domain adaptation and knowledge update
>
> [Page 2](zotero://open-pdf/library/items/XKUCGCH9?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> aligning source-side sentences and the corresponding target-side translations in a dense vector space, i.e., aligning x and yr when xr is absent.
>
> [Page 2](zotero://open-pdf/library/items/XKUCGCH9?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Sparse-vector Retrieval
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> When a supervised corpus is used, {〈xr, yr〉} is retrieved by measuring the similarity between x and x
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Dense-vector Retrieval
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> which encodes the text to low-dimensional dense vectors via BERT-based encoders. The retrieval score are computed via inner products between vectors.
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Task-specific Retrieval
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> wish to consider a memory only if it can indeed boost the quality of final generation.
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> unify the memory retriever and its downstream generation model into a learnable whole. Such memory retrieval is end-to-end optimized for task-specific objectives
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Data Augmentation
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Attention Mechanisms
>
> [Page 3](zotero://open-pdf/library/items/XKUCGCH9?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In the training phase, the loss is locally back-propagated to only a few retrieved examples while in the inference phase the metric is globally conducted among all examples in the memory.
>
> [Page 8](zotero://open-pdf/library/items/XKUCGCH9?page=8) 



%% end annotations %%

%% Import Date: 2023-11-28T17:02:57.420+08:00 %%

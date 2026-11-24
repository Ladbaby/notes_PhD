---
Title: Causal Discovery with Attention-Based Convolutional Neural Networks
Tags:
  - causal-discovery
  - time-series-analysis
  - observational-data
  - machine-learning-and-knowledge-extraction/2019
  - CNN
ZoteroLink: zotero://open-pdf/library/items/JASCK9F7
FirstAuthor: Nauta, Meike
Author: Bucur, Doina; Seifert, Christin;
Year: "2019"
ItemType: journalArticle
Journal: Machine Learning and Knowledge Extraction
Volume: "1"
Issue: "1"
Page: 312-340
DOI: 10.3390/make1010019
Citekey: nauta_CausalDiscoveryAttentionBased_2019
motivation: 现有的时序因果发现方法还没怎么试过用深度学习
Publisher: Multidisciplinary Digital Publishing Institute
rating: 2
---
> [!info]
> **TLDR**:: To address the lack of deep learning in time series causal discovery, this paper introduces TCDF, an attention-based CNN framework that learns causal graph structures and time delays from observational data.

> [!cite]
> **Bibliography**:: Nauta, M., Bucur, D., & Seifert, C. (2019). Causal Discovery with Attention-Based Convolutional Neural Networks. _Machine Learning and Knowledge Extraction_, _1_(1), Article 1. [https://doi.org/10.3390/make1010019](https://doi.org/10.3390/make1010019)

> [!info]
> **Contribution**::因果发现领域的高被引文章 

## Notes

借助这篇文章来了解时序因果发现的领域。

这任务本质上是**变量间依赖**的推测

- 数据集 groundtruth: "causal graph"，以三元组 `(i, j, t)` 的形式表示，其中变量 `i` 为“因”，变量 `j` 为“果”，`t` 为时间滞后
![](Pasted%20image%2020260104155956.png)

然后训练方式很特殊：

![](Pasted%20image%2020260104155521.png)
- 只有训练、验证集，**没有测试集**
- **训练**阶段：一种接近于预测任务的训练方式，但是**输入和输出会重叠**（一般只错位 1 步）
- **测试**阶段：还是拿训练阶段的样本做输入，但是目的是获取模型结构中的张量/权重值。通过注意力分数/卷积权重，来判断不同变量间的关系。

![](Pasted%20image%2020260104155712.png)
这篇文章的 AD_DSTCN 做法似乎是让每个不同的变量都有一个对应的网络，有点点 MoE 的意思，这样每个对应的网络就专注于发现当前变量的成因


## Annotations
%% begin annotations %%


### Imported: 2026-01-04 3:53 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We therefore present the Temporal Causal Discovery Framework (TCDF), a deep learning framework that learns a causal graph structure by discovering causal relationships in observational time series data
>
> [Page ](zotero://open-pdf/library/items/JASCK9F7?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By interpreting the internal parameters of the convolutional networks, TCDF can also discover the time delay between a cause and the occurrence of its effect.
>
> [Page ](zotero://open-pdf/library/items/JASCK9F7?page=) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We therefore present the Temporal Causal Discovery Framework (TCDF), a deep learning framework that learns a causal graph structure by discovering causal relationships in observational time series data
>
> [Page 1](zotero://open-pdf/library/items/JASCK9F7?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By interpreting the internal parameters of the convolutional networks, TCDF can also discover the time delay between a cause and the occurrence of its effect.
>
> [Page 1](zotero://open-pdf/library/items/JASCK9F7?page=1)


%% Import Date: 2026-05-12T00:24:14.000+00:00 %%

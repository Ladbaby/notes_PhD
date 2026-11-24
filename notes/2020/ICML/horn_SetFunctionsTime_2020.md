---
Title: Set Functions for Time Series
Tags:
  - irregular-time-series
  - set-functions
  - set-based-learning
  - healthcare-data
  - ICML/2020
ZoteroLink: zotero://open-pdf/library/items/U277DUGT
FirstAuthor: Horn, Max
Author: Moor, Michael; Bock, Christian; Rieck, Bastian; Borgwardt, Karsten;
Year: "2020"
ItemType: conferencePaper
Publisher: PMLR
Page: 4353-4363
Citekey: horn_SetFunctionsTime_2020
motivation: 现有方法还难以应对不规则性
Conference: International Conference on Machine Learning
rating: 2
---
> [!info]
> **TLDR**:: To address the difficulty of transferring deep neural networks to irregularly-sampled and asynchronous healthcare time series, this paper proposes SeFT, a scalable and data-efficient method based on differentiable set functions that enables parallelizable classification with per-observation contribution quantification.

> [!cite]
> **Bibliography**:: Horn, M., Moor, M., Bock, C., Rieck, B., & Borgwardt, K. (2020). Set Functions for Time Series. _Proceedings of the 37th International Conference on Machine Learning_, 4353–4363. [https://proceedings.mlr.press/v119/horn20a.html](https://proceedings.mlr.press/v119/horn20a.html)

> [!info]
> **Contribution**:: 不规则领域最早的文章之一，set-based 非填充方法 

## Notes

![](Pasted%20image%2020260106112013.png)

基于集合的方法。最初会觉得这已经不算时间序列、无从学习，但复现下来发现只要时间戳信息给足，模型多少都能学到一些规律。不过 set-based 方法确实不显式建模观测值之间的依赖关系。


## Annotations
%% begin annotations %%


### Imported: 2026-01-06 11:17 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This paper proposes a novel approach for classifying irregularly-sampled time series with unaligned measurements, focusing on high scalability and data efficiency
>
> [Page ](zotero://open-pdf/library/items/U277DUGT?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> computing an attention over the set input elements, and subsequently, computing the sum over all elements in the set
>
> [Page 5](zotero://open-pdf/library/items/U277DUGT?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By contrast, our approach computes the embeddings of set elements independently, leading to lower runtime and memory complexity of O(n)
>
>> 这就是set-based方法不考虑观测值之间关系的理由
>
> [Page 5](zotero://open-pdf/library/items/U277DUGT?page=5) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This paper proposes a novel approach for classifying irregularly-sampled time series with unaligned measurements, focusing on high scalability and data efficiency
>
> [Page 1](zotero://open-pdf/library/items/U277DUGT?page=1)


%% Import Date: 2026-05-12T00:27:58.000+00:00 %%

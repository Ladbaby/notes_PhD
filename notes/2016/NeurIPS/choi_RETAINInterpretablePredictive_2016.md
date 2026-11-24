---
Title: "RETAIN: An Interpretable Predictive Model for Healthcare using Reverse Time Attention Mechanism"
Tags:
  - NeurIPS/2016
  - healthcare
  - classification
  - interpretability
  - attention
ZoteroLink: zotero://open-pdf/library/items/FPTW3GPX
FirstAuthor: Choi, Edward
Author: Bahadori, Mohammad Taha; Sun, Jimeng; Kulas, Joshua; Schuetz, Andy; Stewart, Walter;
Year: "2016"
ItemType: conferencePaper
Volume: "29"
Publisher: Curran Associates, Inc.
Citekey: choi_RETAINInterpretablePredictive_2016
Conference: Advances in Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To resolve the trade-off between accuracy and interpretability in medical predictive models, this work introduces RETAIN, a reverse-time attention mechanism that identifies influential past visits and clinical variables in Electronic Health Records.

> [!cite]
> **Bibliography**:: Choi, E., Bahadori, M. T., Sun, J., Kulas, J., Schuetz, A., & Stewart, W. (2016). RETAIN: An Interpretable Predictive Model for Healthcare using Reverse Time Attention Mechanism. _Advances in Neural Information Processing Systems_, _29_. [https://papers.nips.cc/paper_files/paper/2016/hash/231141b34c82aa95e48810a9d1b33a79-Abstract.html](https://papers.nips.cc/paper_files/paper/2016/hash/231141b34c82aa95e48810a9d1b33a79-Abstract.html)

> [!info]
> **Contribution**:: 

## Notes

![](Pasted%20image%2020240811160932.png)

试图兼顾精度和可解释性

其实本体是两个 RNN，分别沿着 visit（应该是时间）和 variable 两个维度做计算，得到 attention weights

稍微比较特殊的是，他的 RNN 是反着进行学习的，说是可以让近期的 visit 影响更大（？没懂

所以我还没太懂 attention 到底哪里出现了？

## Annotations
%% begin annotations %%


### Imported: 2024-08-11 4:07 pm


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> This tradeoff poses challenges in medicine where both accuracy and interpretability are important
>
>> 这句话还是很认可的
>
> [Page 1](zotero://open-pdf/library/items/FPTW3GPX?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> key diagnoses
>
> [Page 1](zotero://open-pdf/library/items/FPTW3GPX?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> RETAIN mimics physician practice by attending the EHR data in a reverse time order so that recent clinical visits are likely to receive higher attention.
>
>> ？没懂
>
> [Page 1](zotero://open-pdf/library/items/FPTW3GPX?page=1) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> visit-level attention a
>
> [Page 3](zotero://open-pdf/library/items/FPTW3GPX?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> variable-level attention
>
> [Page 3](zotero://open-pdf/library/items/FPTW3GPX?page=3)


%% Import Date: 2026-05-12T00:07:31.000+00:00 %%

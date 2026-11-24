---
Title: Neural Rough Differential Equations for Long Time Series
Tags:
  - ICML/2021
  - neural-cde
  - rough-paths
  - time-series-analysis
  - neural-ODE
ZoteroLink: zotero://open-pdf/library/items/NBKE2TF4
FirstAuthor: Morrill, James
Author: Salvi, Cristopher; Kidger, Patrick; Foster, James; Lyons, Terry;
Year: "2021"
ItemType: article
DOI: 10.48550/arXiv.2009.08295
Citekey: morrill_NeuralRoughDifferential_2021
motivation: 改进CDE以更好处理长时序
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address memory and scalability limitations in modeling long irregular time series with Neural CDEs, this paper introduces Neural RDEs that represent input signals via log-signatures, enabling efficient processing of sequences up to 17k observations.

> [!cite]
> **Bibliography**:: Morrill, J., Salvi, C., Kidger, P., Foster, J., & Lyons, T. (2021). _Neural Rough Differential Equations for Long Time Series_ (arXiv:2009.08295). arXiv. [https://doi.org/10.48550/arXiv.2009.08295](https://doi.org/10.48550/arXiv.2009.08295)

> [!info]
> **Contribution**:: RDE

![](Pasted%20image%2020231128211902.png)

![](Pasted%20image%2020231128211921.png)
## Notes
>
>Comment: Published at ICML 2021.

由这篇文章提出的使用 RDE

主要过程见 Figure 1 和 Figure 4

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 9:17 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we instead represent the input signal over small time intervals through its log-signature, which are statistics describing how the signal drives a CDE
>
> [Page 1](zotero://open-pdf/library/items/NBKE2TF4?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> tackling long time series
>
> [Page 1](zotero://open-pdf/library/items/NBKE2TF4?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it is possible to numerically solve CDEs not by pointwise evaluations of the control path (as in the existing Neural CDE approach), but by using a specific summarisation – known as the log-signature – of the control path over short time intervals
>
> [Page 2](zotero://open-pdf/library/items/NBKE2TF4?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The path of log-signatures is more slowly varying (in a higher dimensional space), and needs fewer integration steps to resolve
>
> [Page 5](zotero://open-pdf/library/items/NBKE2TF4?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> depth 1
>
> [Page 5](zotero://open-pdf/library/items/NBKE2TF4?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Neural RDE approach generalises the existing Neural CDE approach
>
>> depth=1时RDE=CDE
>
> [Page 5](zotero://open-pdf/library/items/NBKE2TF4?page=5) 



%% end annotations %%

%% Import Date: 2023-11-28T21:17:41.280+08:00 %%

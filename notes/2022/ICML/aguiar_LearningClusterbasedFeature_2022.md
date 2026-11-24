---
Title: Learning of Cluster-based Feature Importance for Electronic Health Record Time-series
Tags:
  - PMLR/2022
  - electronic-health-records
  - feature-importance
  - clustering
  - time-series-analysis
ZoteroLink: zotero://open-pdf/library/items/GIAAY89G
FirstAuthor: Aguiar, Henrique
Author: Santos, Mauro; Watkinson, Peter; Zhu, Tingting;
Year: "2022"
ItemType: conferencePaper
Publisher: PMLR
Page: 161-179
Citekey: aguiar_LearningClusterbasedFeature_2022
Conference: International Conference on Machine Learning
rating: 2
---
> [!info]
> **TLDR**:: To address the lack of clinical interpretability and sensitivity to class imbalance in EHR trajectory clustering, this paper proposes a supervised deep learning model with novel loss functions and feature-time attention to identify clinically understandable phenotypes.

> [!cite]
> **Bibliography**:: Aguiar, H., Santos, M., Watkinson, P., & Zhu, T. (2022). Learning of Cluster-based Feature Importance for Electronic Health Record Time-series. _Proceedings of the 39th International Conference on Machine Learning_, 161–179. [https://proceedings.mlr.press/v162/aguiar22a.html](https://proceedings.mlr.press/v162/aguiar22a.html)

> [!info]
> **Contribution**:: 

## Notes

![](Pasted%20image%2020240827193241.png)

感觉没啥特别好说的，通过使用两个不同的 loss，一个是信息熵相关的 loss 来避免聚类结果不均匀，然后还有个 loss 控制 cluster representation vector 之间的差异化

不过它提出了分类不平衡的现象叫做 "cluster collapse"

## Annotations
%% begin annotations %%


### Imported: 2024-08-27 7:30 pm


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> As such, clustering is regularly used to identify similar groups within the patient cohort to improve prediction
>
>> 说明cluster有用的证据
>
> [Page 1](zotero://open-pdf/library/items/GIAAY89G?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A weighted loss to address target outcome imbalance
>
> [Page 2](zotero://open-pdf/library/items/GIAAY89G?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> information entropy
>
> [Page 5](zotero://open-pdf/library/items/GIAAY89G?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Both Ldist and Lclus are important to address an issue we call cluster collapse, a phenomenon observed during training where clusters may tend to collapse.
>
>> 还有这种问题？
>
> [Page 5](zotero://open-pdf/library/items/GIAAY89G?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> cluster representation vectors
>
> [Page 5](zotero://open-pdf/library/items/GIAAY89G?page=5) 



%% end annotations %%

%% Import Date: 2024-08-27T19:30:25.452+08:00 %%

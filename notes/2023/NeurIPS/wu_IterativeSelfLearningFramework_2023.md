---
Title: An Iterative Self-Learning Framework for Medical Domain Generalization
Tags:
  - NeurIPS/2023
  - medical-domain-generalization
  - self-learning
  - domain-generalization
  - self-supervised-learning
ZoteroLink: zotero://open-pdf/library/items/HKDRXB6K
FirstAuthor: Wu, Zhenbang
Author: Yao, Huaxiu; Liebovitz, David; Sun, Jimeng;
Year: "2023"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "36"
Page: 54833-54854
Citekey: wu_IterativeSelfLearningFramework_2023
rating: 2
---

> [!info]
> **TLDR**:: To address domain shift in medical data where latent patient domains are unknown and single-model generalization is sub-optimal, this paper proposes an iterative self-learning framework that discovers decoupled domains and trains personalized classifiers for each.

> [!cite]
> **Bibliography**:: Wu, Z., Yao, H., Liebovitz, D., & Sun, J. (2023). An Iterative Self-Learning Framework for Medical Domain Generalization. _Advances in Neural Information Processing Systems_, _36_, 54833–54854.

> [!info]
> **Contribution**:: 

## Annotations
%% begin annotations %%

和我的想法其实极其接近，但是他做的是分类任务，而且不当作时序

虽然看起来很简单似的，但是每一个做法都可以看出来是深思熟虑过的


### Imported: 2024-08-04 9:06 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, in healthcare settings, patients can be classified into numerous latent domains, where the actual domain categorizations are unknown
>
> [Page 1](zotero://open-pdf/library/items/HKDRXB6K?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> each patient domain exhibits distinct clinical characteristics, making it sub-optimal to train a single model for all domains
>
> [Page 1](zotero://open-pdf/library/items/HKDRXB6K?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> iteratively discovers decoupled domains and trains personalized classifiers for each decoupled domain.
>
> [Page 1](zotero://open-pdf/library/items/HKDRXB6K?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Domain generalization
>
> [Page 1](zotero://open-pdf/library/items/HKDRXB6K?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, in the medical field, patients can be classified into numerous latent domains that are not directly observable
>
> [Page 2](zotero://open-pdf/library/items/HKDRXB6K?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, patients from different domains possess distinct characteristics and require different treatment approaches [2, 58]. For example, as shown in Fig. 1, fever is considered a normal symptom for patients with viral infections as it helps stimulate the immune system. On the other hand, it can be a bad signal for patients with cardiovascular disease, leading to complications.
>
>> 不错的例子
>
> [Page 2](zotero://open-pdf/library/items/HKDRXB6K?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Instead, we propose to decouple these clinical features and discover the clusters separately for each type of feature. To achieve this, we maintain a distinct latent space for each type of features using a feature-specific patient encoder
>
>> 感觉每个域单独一个classifier的做法有争议
>
> [Page 2](zotero://open-pdf/library/items/HKDRXB6K?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we effectively reduce the number of domains from exponential to linear to the number of feature types
>
>> 分解的确是有这个好处
>
> [Page 2](zotero://open-pdf/library/items/HKDRXB6K?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In this paper, our goal is to train a model fφ(·) on source data Ptr that can generalize to target data Pte despite potential domain shifts.
>
> [Page 3](zotero://open-pdf/library/items/HKDRXB6K?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> decoupled domain discovery and domainspecific model customization
>
> [Page 3](zotero://open-pdf/library/items/HKDRXB6K?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Although domain labels are not initially available, we hypothesize that the domain information is encoded in the learned latent representations and can be recovered with the clustering technique
>
>> 可以，假设很清楚
>
> [Page 3](zotero://open-pdf/library/items/HKDRXB6K?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We model E(·) using a three-layer Transformer [48] framework
>
>> 居然是用transformer
>
> [Page 4](zotero://open-pdf/library/items/HKDRXB6K?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> event embedding look-up table with ClinicalBERT [3] embeddings of the event name and then project it down to our hidden dimension of size h.
>
>> 原来还有ClinicalBERT这种玩意？
>
> [Page 4](zotero://open-pdf/library/items/HKDRXB6K?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For each type t ∈ T , the type-specific representation ht is computed by averaging the representations of all events of that type
>
>> 所以说是每个type的所有event的表达做平均？
>
> [Page 4](zotero://open-pdf/library/items/HKDRXB6K?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To perform clustering, standard clustering techniques such as k-Means and Gaussian Mixture Model (GMM) require specifying the number of clusters, which is less ideal as the number of clusters can be difficult to choose and may vary across latent spaces. Inspired by GEORGE [46], we adopt a fully automated hierarchical clustering technique by monitoring the Silouette score [40]
>
>> 聚类原来是这样搞定的
>
> [Page 4](zotero://open-pdf/library/items/HKDRXB6K?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Readmission prediction, which aims to determine whether a patient will be readmitted within the next 15 days following discharge
>
> [Page 6](zotero://open-pdf/library/items/HKDRXB6K?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Mortality prediction, which aims to predict whether a patient will pass away upon discharge in the eICU setting, or within 90 days after discharge in the MIMIC-IV setting
>
> [Page 6](zotero://open-pdf/library/items/HKDRXB6K?page=6) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Ntr is the number of source training data,
>
>> 纯爱战士震怒
>
> [Page 4](zotero://open-pdf/library/items/HKDRXB6K?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> each patient’s hospital visit is represented by a set of vectors {ht}t∈T , with each vector capturing the patient’s health status from a specific type of events
>
> [Page 4](zotero://open-pdf/library/items/HKDRXB6K?page=4)


%% Import Date: 2026-05-12T01:51:47.000+00:00 %%

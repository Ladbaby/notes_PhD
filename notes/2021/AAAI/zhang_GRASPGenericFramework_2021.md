---
Title: "GRASP: Generic Framework for Health Status Representation Learning Based on Incorporating Knowledge from Similar Patients"
Tags:
  - AAAI/2021
  - healthcare
  - electronic-health-records
  - representation-learning
  - health-status
ZoteroLink: zotero://open-pdf/library/items/5A74XP7B
FirstAuthor: Zhang, Chaohe
Author: Gao, Xin; Ma, Liantao; Wang, Yasha; Wang, Jiangtao; Tang, Wen;
Year: "2021"
ItemType: journalArticle
Journal: Proceedings of the AAAI Conference on Artificial Intelligence
Volume: "35"
Issue: "1"
Page: 715-723
DOI: 10.1609/aaai.v35i1.16152
Citekey: zhang_GRASPGenericFramework_2021
rating: 2
---
> [!info]
> **TLDR**:: To address inadequate representations in sparse EMR data, GRASP enhances patient prognosis by extracting and fusing knowledge from similar patients within a defined cohort.

> [!cite]
> **Bibliography**:: Zhang, C., Gao, X., Ma, L., Wang, Y., Wang, J., & Tang, W. (2021). GRASP: Generic Framework for Health Status Representation Learning Based on Incorporating Knowledge from Similar Patients. _Proceedings of the AAAI Conference on Artificial Intelligence_, _35_(1), Article 1. [https://doi.org/10.1609/aaai.v35i1.16152](https://doi.org/10.1609/aaai.v35i1.16152)

> [!info]
> **Contribution**:: 不仅考虑单个病人的表达，还会考虑相似病人的表达

## Notes

![](Pasted%20image%2020240819103040.png)

主要流程：

- backbone 提取单个病人的特征表达
- 特征空间里找相似样本，建立 K-nearest neighbor (K-NN) graph
- GCN 增强不同类之间特征的关联关系，得到相似病人的 guidance representation
- 融合单个病人的特征表达 $h_T$ 和 guidance representation $h_C$

文章里提到的关于使用相近病人的表达的好处：

- 省去添加额外辅助信息
- 类比医生看病的时候，首先联想相近病人的症状
	> goes to see a doctor, the doctor will first examine the lab test results. Then, as shown in Figure 1, the doctor usually recalls the health status of the similar patients that she/he has treated, or looks up their records from the hospital system, and then assess and treat the current patient

关于聚类的时候的操作，文章特地强调了和常规 K-Means 的细微区别：

- 需要平衡 exploration 和 exploitation，即训练初期需要多探索、后期需要选最优。说 sampling 可以解决这个问题
- Gumbel-Max technique

## Annotations
%% begin annotations %%


### Imported: 2024-08-19 10:28 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> GRASP first finds patients in the dataset who have similar conditions and similar results (i.e., the similar patients), and then enhances the representation learning and prognosis of the given patient by leveraging knowledge extracted from these similar patients
>
> [Page 1](zotero://open-pdf/library/items/5A74XP7B?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> cohort
>
>> 队列/ˈkəʊhɔːt/
>
> [Page 1](zotero://open-pdf/library/items/5A74XP7B?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> GRAM (Choi et al. 2017) and KAME (Ma et al. 2018b) incorporate the ontologies of the medical codes
>
> [Page 1](zotero://open-pdf/library/items/5A74XP7B?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, these approaches do not work well when people hardly obtain external information or prior knowledge about them, especially for some rare diseases or emerging diseases (e.g., COVID-19)
>
> [Page 1](zotero://open-pdf/library/items/5A74XP7B?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> how to fully utilize such EMR data to learn adequate patient representations without external knowledge?
>
>> 好问题，我要是也能够解决的话那就很好
>
> [Page 1](zotero://open-pdf/library/items/5A74XP7B?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> goes to see a doctor, the doctor will first examine the lab test results. Then, as shown in Figure 1, the doctor usually recalls the health status of the similar patients that she/he has treated, or looks up their records from the hospital system, and then assess and treat the current patient
>
>> 可借鉴
>
> [Page 2](zotero://open-pdf/library/items/5A74XP7B?page=2) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> connotation
>
>> 内涵/ˌkɒnəˈteɪʃn/
>
> [Page 2](zotero://open-pdf/library/items/5A74XP7B?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> However, this idea does not work well in a space with uneven data distribution
>
>> 好观察
>
> [Page 2](zotero://open-pdf/library/items/5A74XP7B?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> fully considering both the current patient’s information and the auxiliary information from similar ones.
>
> [Page 2](zotero://open-pdf/library/items/5A74XP7B?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adaptively fuses them to depict the patient more comprehensively.
>
> [Page 2](zotero://open-pdf/library/items/5A74XP7B?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> EMR Data Description
>
>> 图还有点意思，可以借鉴
>
> [Page 3](zotero://open-pdf/library/items/5A74XP7B?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> guidance representation
>
> [Page 3](zotero://open-pdf/library/items/5A74XP7B?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> current patient representation and guidance representation
>
> [Page 3](zotero://open-pdf/library/items/5A74XP7B?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> RNN is used to illustrate the process in Figure 4 and here
>
> [Page 3](zotero://open-pdf/library/items/5A74XP7B?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For a specific patient, as discussed before, the knowledge from the similar patients can be utilized as guidance for the analysis or prognosis
>
> [Page 3](zotero://open-pdf/library/items/5A74XP7B?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This will be more challenging for those unbalanced datasets.
>
> [Page 3](zotero://open-pdf/library/items/5A74XP7B?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> in the early training phase, when the model is not convergent and the representations are not fully learned, the result is unstable
>
>> 观点可以
>
> [Page 3](zotero://open-pdf/library/items/5A74XP7B?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we need exploration to find better cluster attribution in the earlier training phase and exploitation to maintain the
>
> [Page 3](zotero://open-pdf/library/items/5A74XP7B?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> current best decision later
>
> [Page 4](zotero://open-pdf/library/items/5A74XP7B?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we can acquire a more robust selection by introducing the Gumbel-Max technique
>
> [Page 4](zotero://open-pdf/library/items/5A74XP7B?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a K-nearest neighbor (K-NN) graph G is constructed from the centroids of clusters and A is the adjacency matrix of the graph, which shows the connectivity between the K-nearest centroid (cluster) representations.
>
> [Page 4](zotero://open-pdf/library/items/5A74XP7B?page=4) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> GRASP first finds patients in the dataset who have similar conditions and similar results (i.e., the similar patients), and then enhances the representation learning and prognosis of the given patient by leveraging knowledge extracted from these similar patients
>
> [Page 715](zotero://open-pdf/library/items/5A74XP7B?page=715)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> cohort
>
>> 队列/ˈkəʊhɔːt/
>
> [Page 715](zotero://open-pdf/library/items/5A74XP7B?page=715)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> GRAM (Choi et al. 2017) and KAME (Ma et al. 2018b) incorporate the ontologies of the medical codes
>
> [Page 715](zotero://open-pdf/library/items/5A74XP7B?page=715)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, these approaches do not work well when people hardly obtain external information or prior knowledge about them, especially for some rare diseases or emerging diseases (e.g., COVID-19)
>
> [Page 715](zotero://open-pdf/library/items/5A74XP7B?page=715)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> how to fully utilize such EMR data to learn adequate patient representations without external knowledge?
>
>> 好问题，我要是也能够解决的话那就很好
>
> [Page 715](zotero://open-pdf/library/items/5A74XP7B?page=715)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> goes to see a doctor, the doctor will first examine the lab test results. Then, as shown in Figure 1, the doctor usually recalls the health status of the similar patients that she/he has treated, or looks up their records from the hospital system, and then assess and treat the current patient
>
>> 可借鉴
>
> [Page 716](zotero://open-pdf/library/items/5A74XP7B?page=716)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> connotation
>
>> 内涵/ˌkɒnəˈteɪʃn/
>
> [Page 716](zotero://open-pdf/library/items/5A74XP7B?page=716)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> However, this idea does not work well in a space with uneven data distribution
>
>> 好观察
>
> [Page 716](zotero://open-pdf/library/items/5A74XP7B?page=716)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> fully considering both the current patient’s information and the auxiliary information from similar ones.
>
> [Page 716](zotero://open-pdf/library/items/5A74XP7B?page=716)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adaptively fuses them to depict the patient more comprehensively.
>
> [Page 716](zotero://open-pdf/library/items/5A74XP7B?page=716)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> EMR Data Description
>
>> 图还有点意思，可以借鉴
>
> [Page 717](zotero://open-pdf/library/items/5A74XP7B?page=717)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> guidance representation
>
> [Page 717](zotero://open-pdf/library/items/5A74XP7B?page=717)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> current patient representation and guidance representation
>
> [Page 717](zotero://open-pdf/library/items/5A74XP7B?page=717)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> RNN is used to illustrate the process in Figure 4 and here
>
> [Page 717](zotero://open-pdf/library/items/5A74XP7B?page=717)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For a specific patient, as discussed before, the knowledge from the similar patients can be utilized as guidance for the analysis or prognosis
>
> [Page 717](zotero://open-pdf/library/items/5A74XP7B?page=717)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This will be more challenging for those unbalanced datasets.
>
> [Page 717](zotero://open-pdf/library/items/5A74XP7B?page=717)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> in the early training phase, when the model is not convergent and the representations are not fully learned, the result is unstable
>
>> 观点可以
>
> [Page 717](zotero://open-pdf/library/items/5A74XP7B?page=717)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we need exploration to find better cluster attribution in the earlier training phase and exploitation to maintain the
>
> [Page 717](zotero://open-pdf/library/items/5A74XP7B?page=717)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> current best decision later
>
> [Page 718](zotero://open-pdf/library/items/5A74XP7B?page=718)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we can acquire a more robust selection by introducing the Gumbel-Max technique
>
> [Page 718](zotero://open-pdf/library/items/5A74XP7B?page=718)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a K-nearest neighbor (K-NN) graph G is constructed from the centroids of clusters and A is the adjacency matrix of the graph, which shows the connectivity between the K-nearest centroid (cluster) representations.
>
> [Page 718](zotero://open-pdf/library/items/5A74XP7B?page=718)


%% Import Date: 2026-05-12T00:37:52.000+00:00 %%

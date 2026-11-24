---
Title: Patient Subtyping via Time-Aware LSTM Networks
Tags:
  - KDD/2017
  - patient-subgroups
  - LSTM
  - temporal-dynamics
  - disease-heterogeneity
ZoteroLink: zotero://open-pdf/library/items/QBXKFR82
FirstAuthor: Baytas, Inci M.
Author: Xiao, Cao; Zhang, Xi; Wang, Fei; Jain, Anil K.; Zhou, Jiayu;
Year: "2017"
ItemType: conferencePaper
Conference: Proceedings of the 23rd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining
Publisher: Association for Computing Machinery
Location: New York, NY, USA
Page: 65–74
DOI: 10.1145/3097983.3097997
ISBN: 978-1-4503-4887-4
Citekey: baytas_PatientSubtypingTimeAware_2017
motivation: 划分每个病人的亚种病症。让LSTM适用于不规则
rating: 2
---
> [!info]
> **TLDR**:: To address patient subtyping challenges caused by irregular time intervals in longitudinal records, the paper proposes a Time-Aware LSTM unit that applies time-decay subspace decomposition to learn robust patient representations for clustering.

> [!cite]
> **Bibliography**:: Baytas, I. M., Xiao, C., Zhang, X., Wang, F., Jain, A. K., & Zhou, J. (2017). Patient Subtyping via Time-Aware LSTM Networks. _Proceedings of the 23rd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining_, , 65–74. https://doi.org/10.1145/3097983.3097997

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> heterogeneity
>
>> 异质性
>
> [Page 65](zotero://open-pdf/library/items/QBXKFR82?page=65)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> therapeutic intervention
>
>> 治疗干预
>
> [Page 65](zotero://open-pdf/library/items/QBXKFR82?page=65)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> patient subtyping
>
> [Page 65](zotero://open-pdf/library/items/QBXKFR82?page=65)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Given that time lapse between successive elements in patient records can vary from days to months, the design of traditional LSTM may lead to suboptimal performance
>
> [Page 65](zotero://open-pdf/library/items/QBXKFR82?page=65)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> is crucial to address the heterogeneity in the patients which ultimately leads to precision medicine where patients are provided with treatments tailored to their unique health status
>
> [Page 65](zotero://open-pdf/library/items/QBXKFR82?page=65)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> unsupervised learning
>
> [Page 65](zotero://open-pdf/library/items/QBXKFR82?page=65)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> capture the relationships and the dependencies between the elements of the
>
> [Page 65](zotero://open-pdf/library/items/QBXKFR82?page=65)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> record sequence in order to learn more effective and robust representations, which can then be used in the clustering stage to obtain the patient groups
>
> [Page 66](zotero://open-pdf/library/items/QBXKFR82?page=66)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> eir proposed approach, called “DeepCare”
>
> [Page 66](zotero://open-pdf/library/items/QBXKFR82?page=66)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> unsupervised clustering problem
>
> [Page 69](zotero://open-pdf/library/items/QBXKFR82?page=69)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> learn an effective single representation
>
> [Page 69](zotero://open-pdf/library/items/QBXKFR82?page=69)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> representation learned by the encoder is a summary of the input sequence
>
> [Page 69](zotero://open-pdf/library/items/QBXKFR82?page=69)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Given a single representation of each patient, patients are grouped by the k-means clustering algorithm
>
> [Page 70](zotero://open-pdf/library/items/QBXKFR82?page=70)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> classication task
>
> [Page 70](zotero://open-pdf/library/items/QBXKFR82?page=70)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> clustering task
>
> [Page 70](zotero://open-pdf/library/items/QBXKFR82?page=70)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> MIMIC is an ICU data, therefore sequence length for the majority of patients is very small such as one or two admissions
>
> [Page 70](zotero://open-pdf/library/items/QBXKFR82?page=70)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> PPMI aims to identify biomarkers of the progression of Parkinson’s disease
>
> [Page 71](zotero://open-pdf/library/items/QBXKFR82?page=71)


%% Import Date: 2026-05-12T00:10:59.000+00:00 %%

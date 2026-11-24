---
Title: Source-Free Domain Adaptation with Temporal Imputation for Time Series Data
Tags:
  - KDD/2023
  - source-free-domain-adaptation
  - time-series
  - temporal-imputation
  - domain-adaptation
ZoteroLink: zotero://open-pdf/library/items/9VIJZ2JZ
FirstAuthor: Ragab, Mohamed
Author: Eldele, Emadeldeen; Wu, Min; Foo, Chuan-Sheng; Li, Xiaoli; Chen, Zhenghua;
Year: "2023"
ItemType: conferencePaper
Conference: Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining
Publisher: Association for Computing Machinery
Location: New York, NY, USA
Page: 1989–1998
DOI: 10.1145/3580305.3599507
ISBN: 979-8-4007-0103-0
Citekey: ragab_SourceFreeDomainAdaptation_2023
motivation: 探索时序下做无源域适应任务
rating: 2
---
> [!info]
> **TLDR**:: To address the lack of source-free domain adaptation methods for time series that handle temporal dynamics, the paper proposes MAPU, which uses a temporal imputer to enforce consistency between source and target features in the embedding space.

> [!cite]
> **Bibliography**:: Ragab, M., Eldele, E., Wu, M., Foo, C., Li, X., & Chen, Z. (2023). Source-Free Domain Adaptation with Temporal Imputation for Time Series Data. _Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining_, , 1989–1998. https://doi.org/10.1145/3580305.3599507

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Accepted in KDD'23.

这工作好像很有意思，标题也基本说明了他们干的事情：

- source-free domain adaptation

    > aims to adapt a pretrained model from a labeled source domain to an unlabeled target domain without access to the source domain data

    可以看得出来，大概就是使用已经在有变迁的数据上训练过的模型，来迁移到无标签的数据上

- temporally consistent

    它的贡献好像主要集中在这里。之前的模型是没有为了时序数据而直接考虑时间上的先后关系的，为此他们专门搞了一个 recurrent imputer (见 Figure 3) 来建立这种依赖关系

## 复现

因为挺感兴趣就顺手复现了一下，感觉代码里面有一些，我觉得是故意为之的小错误，稍微解决一下之后还算很好复现


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 5:01 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adapt a pretrained model from a labeled source domain to an unlabeled target domain without access to the source domain data, preserving source domain privacy.
>
> [Page 1](zotero://open-pdf/library/items/PGW9CUYZ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> random masking
>
> [Page 1](zotero://open-pdf/library/items/PGW9CUYZ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> embedding space
>
> [Page 1](zotero://open-pdf/library/items/PGW9CUYZ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> temporally consistent
>
> [Page 1](zotero://open-pdf/library/items/PGW9CUYZ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> leverage pre-labeled source data for training
>
> [Page 1](zotero://open-pdf/library/items/PGW9CUYZ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> on unlabeled target data, while also addressing the distribution shift between the two domains
>
> [Page 2](zotero://open-pdf/library/items/PGW9CUYZ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> even two signals with similar observations can lead to differing predictions if the temporal order is different
>
> [Page 2](zotero://open-pdf/library/items/PGW9CUYZ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the temporal imputation network is trained to impute the original signal from the masked signal in the feature space
>
> [Page 2](zotero://open-pdf/library/items/PGW9CUYZ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the imputation network is used to guide the target model to generate target features that can be imputed by the source imputation network
>
> [Page 2](zotero://open-pdf/library/items/PGW9CUYZ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Discrepancy-based methods use statistical distances to align the feature representations of the source and target domains
>
> [Page 2](zotero://open-pdf/library/items/PGW9CUYZ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the encoder network 𝑓𝜃 is used to generate the corresponding latent features 𝐻𝑆 and 𝐻 ′ 𝑆 respectively
>
> [Page 3](zotero://open-pdf/library/items/PGW9CUYZ?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> jointly trained with both a generic source-free adaptation loss L𝑠𝑓 and our temporal imputation loss L𝑇 𝑚𝑎𝑝𝑢
>
> [Page 5](zotero://open-pdf/library/items/PGW9CUYZ?page=5) 


%% Import Date: 2026-05-11T02:40:52.000+00:00 %%

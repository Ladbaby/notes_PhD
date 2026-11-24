---
Title: Source-Free Domain Adaptation with Temporal Imputation for Time Series Data
Tags:
  - arXiv/2023
  - source-free-domain-adaptation
  - time-series
  - temporal-imputation
  - domain-adaptation
  - time-series-classification
ZoteroLink: zotero://open-pdf/library/items/PGW9CUYZ
FirstAuthor: Ragab, Mohamed
Author: Eldele, Emadeldeen; Wu, Min; Foo, Chuan-Sheng; Li, Xiaoli; Chen, Zhenghua;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2307.07542
Citekey: ragab_SourceFreeDomainAdaptation_2023
rating: 2
---
> [!info]
> **TLDR**:: To address the lack of source-free domain adaptation methods for time series, this paper proposes MAPU, which uses random masking and temporal imputation to enforce temporal consistency between source and target features.

> [!cite]
> **Bibliography**:: Ragab, M., Eldele, E., Wu, M., Foo, C., Li, X., & Chen, Z. (2023). Source-Free Domain Adaptation with Temporal Imputation for Time Series Data. https://doi.org/10.48550/arXiv.2307.07542

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Accepted in KDD'23.

## Annotations


%% begin annotations %%
%% end annotations %%

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


%% Import Date: 2026-05-12T02:08:45.000+00:00 %%

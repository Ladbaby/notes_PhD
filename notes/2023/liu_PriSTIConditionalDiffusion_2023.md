---
Title: "PriSTI: A Conditional Diffusion Framework for Spatiotemporal Imputation"
Tags:
  - arXiv/2023
  - diffusion-model
  - spatio-temporal-modeling
  - conditional-generation
  - missing-data
ZoteroLink: zotero://open-pdf/library/items/D7IWUGV2
FirstAuthor: Liu, Mingzhe
Author: Huang, Han; Feng, Hao; Sun, Leilei; Du, Bowen; Fu, Yanjie;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2302.09746
Citekey: liu_PriSTIConditionalDiffusion_2023
rating: 2
---
> [!info]
> **TLDR**:: To address error accumulation in autoregressive spatiotemporal imputation, this paper proposes PriSTI, a conditional diffusion framework that leverages enhanced prior modeling and spatiotemporal attention to accurately reconstruct missing data.

> [!cite]
> **Bibliography**:: Liu, M., Huang, H., Feng, H., Sun, L., Du, B., & Fu, Y. (2023). PriSTI: A Conditional Diffusion Framework for Spatiotemporal Imputation. https://doi.org/10.48550/arXiv.2302.09746

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: This paper has been accepted as a full paper at ICDE 2023.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> with enhanced prior modeling
>
> [Page 1](zotero://open-pdf/library/items/D7IWUGV2?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Consider geographic information
>
> [Page 2](zotero://open-pdf/library/items/D7IWUGV2?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Construct and utilize conditional information
>
> [Page 2](zotero://open-pdf/library/items/D7IWUGV2?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> extracts conditional features from enhanced observations, calculating the spatiotemporal attention weights using the extracted global context prior.
>
> [Page 2](zotero://open-pdf/library/items/D7IWUGV2?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> without considering the spatial relationships, and simply utilize the observed values as conditional information
>
> [Page 3](zotero://open-pdf/library/items/D7IWUGV2?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> conditional information X and adjacency matrix A as input
>
> [Page 4](zotero://open-pdf/library/items/D7IWUGV2?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> interpolated conditional information X is constructed based on all observed values
>
> [Page 4](zotero://open-pdf/library/items/D7IWUGV2?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> conditional feature extraction module
>
> [Page 4](zotero://open-pdf/library/items/D7IWUGV2?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> interpolate the observed value to obtain the enhanced coarse conditional information
>
>> 直接线性插值来做数据增强？？？
>
> [Page 4](zotero://open-pdf/library/items/D7IWUGV2?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> noise estimation module to calculate the attention weights, which provides a better global context prior for spatiotemporal dependencies learning.
>
> [Page 5](zotero://open-pdf/library/items/D7IWUGV2?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> takes the concatenation of conditional information and perturbed values as the input,
>
> [Page 5](zotero://open-pdf/library/items/D7IWUGV2?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the mixture of conditional and noisy information increases the learning difficulty
>
> [Page 5](zotero://open-pdf/library/items/D7IWUGV2?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> can not be solved by a simple binary mask identifier
>
> [Page 5](zotero://open-pdf/library/items/D7IWUGV2?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we design a learnable module γ(·) to model a conditional feature Hpri with spatiotemporal information as a global context prior, named Conditional Feature Extraction Module.
>
> [Page 5](zotero://open-pdf/library/items/D7IWUGV2?page=5)


%% Import Date: 2026-05-12T02:04:21.000+00:00 %%

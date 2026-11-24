---
Title: Scaling Diffusion Transformers to 16 Billion Parameters
Tags:
  - arXiv/2024
  - diffusion-transformers
  - mixture-of-experts
  - conditional-image-generation
  - sparse-moE
ZoteroLink: zotero://open-pdf/library/items/P9UEETW3
FirstAuthor: Fei, Zhengcong
Author: Fan, Mingyuan; Yu, Changqian; Li, Debang; Huang, Junshi;
Year: "2024"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2407.11633
Citekey: fei_ScalingDiffusionTransformers_2024
rating: 1
---
> [!info]
> **TLDR**:: To address the computational inefficiency of dense diffusion Transformers, this paper introduces DiT-MoE, which utilizes shared expert routing and balance loss to achieve scalable, high-performance image generation with significantly reduced inference costs.

> [!cite]
> **Bibliography**:: Fei, Z., Fan, M., Yu, C., Li, D., & Huang, J. (2024). Scaling Diffusion Transformers to 16 Billion Parameters. https://doi.org/10.48550/arXiv.2407.11633

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> shared expert routing and expert-level balance loss
>
> [Page 1](zotero://open-pdf/library/items/P9UEETW3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Expert selection shows preference with spatial position and denoising time step, while insensitive with different class-conditional information
>
> [Page 1](zotero://open-pdf/library/items/P9UEETW3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> As the MoE layers go deeper, the selection of experts gradually shifts from specific spacial position to dispersion and balance
>
> [Page 1](zotero://open-pdf/library/items/P9UEETW3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Expert specialization tends to be more concentrated at the early time step and then gradually uniform after half
>
> [Page 1](zotero://open-pdf/library/items/P9UEETW3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Referring to [15, 74], we incorporate additional ns experts to serve as shared experts.
>
>> shared expert的设计还算有意思
>
> [Page 4](zotero://open-pdf/library/items/P9UEETW3?page=4)


%% Import Date: 2026-05-12T02:56:41.000+00:00 %%

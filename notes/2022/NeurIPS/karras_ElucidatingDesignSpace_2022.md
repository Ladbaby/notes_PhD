---
Title: Elucidating the Design Space of Diffusion-Based Generative Models
Tags:
  - NeurIPS/2022
  - diffusion-model
  - generative-models
  - score-matching
  - sampling-algorithms
ZoteroLink: zotero://open-pdf/library/items/2MCWWAHF
FirstAuthor: Karras, Tero
Author: Aittala, Miika; Aila, Timo; Laine, Samuli;
Year: "2022"
ItemType: article
Journal: Advances in Neural Information Processing Systems
Volume: "35"
Page: 26565-26577
Citekey: karras_ElucidatingDesignSpace_2022
Publisher: arXiv
DOI: 10.48550/arXiv.2206.00364
rating: 2
---
> [!info]
> **TLDR**:: To address the convoluted theory and practice of diffusion-based generative models, this paper presents a modular design space that separates concrete design choices, enabling improved sampling efficiency and generation quality.

> [!cite]
> **Bibliography**:: Karras, T., Aittala, M., Aila, T., & Laine, S. (2022). Elucidating the Design Space of Diffusion-Based Generative Models. _Advances in Neural Information Processing Systems_, _35_, 26565-26577.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> tangible
>
>> 有形的？
>
> [Page 1](zotero://open-pdf/library/items/2MCWWAHF?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Thus, our work is in the context of denoising score matching
>
> [Page 1](zotero://open-pdf/library/items/2MCWWAHF?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> High levels of noise lead to oversaturated colors
>
> [Page 2](zotero://open-pdf/library/items/2MCWWAHF?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> non-leaking augmentation
>
> [Page 2](zotero://open-pdf/library/items/2MCWWAHF?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Euler’s method
>
> [Page 4](zotero://open-pdf/library/items/2MCWWAHF?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, it tends to lead to worse output quality [47, 49] than stochastic sampling that injects fresh noise into the image in each step
>
> [Page 6](zotero://open-pdf/library/items/2MCWWAHF?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The implicit Langevin diffusion drives the sample towards the desired marginal distribution at a given time, actively correcting for any errors made in earlier sampling steps
>
> [Page 6](zotero://open-pdf/library/items/2MCWWAHF?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> First, we add noise to the sample according to a factor γi ≥ 0 to reach a higher noise level ˆ ti = ti + γiti. Second, from the increased-noise sample ˆ xi, we solve the ODE backward from ˆ ti to ti+1 with a single step
>
> [Page 7](zotero://open-pdf/library/items/2MCWWAHF?page=7)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> prevent potential overfitting
>
> [Page 9](zotero://open-pdf/library/items/2MCWWAHF?page=9)


%% Import Date: 2026-05-12T01:09:18.000+00:00 %%

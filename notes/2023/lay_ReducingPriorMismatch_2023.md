---
Title: Reducing the Prior Mismatch of Stochastic Differential Equations for Diffusion-based Speech Enhancement
Tags:
  - arXiv/2023
  - speech-enhancement
  - diffusion-model
  - stochastic-differential-equations
  - score-based-generative-models
  - prior-mismatch
ZoteroLink: zotero://open-pdf/library/items/VRS74JMA
FirstAuthor: Lay, Bunlong
Author: Welker, Simon; Richter, Julius; Gerkmann, Timo;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2302.14748
Citekey: lay_ReducingPriorMismatch_2023
rating: 2
---
> [!info]
> **TLDR**:: To resolve the distribution mismatch in speech enhancement diffusion models, the authors propose a Brownian bridge forward process that reduces this discrepancy while improving performance with fewer iterations and hyperparameters.

> [!cite]
> **Bibliography**:: Lay, B., Welker, S., Richter, J., & Gerkmann, T. (2023). Reducing the Prior Mismatch of Stochastic Differential Equations for Diffusion-based Speech Enhancement. https://doi.org/10.48550/arXiv.2302.14748

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: 5 pages, 3 figures.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> but may also negatively affect the speech enhancement performance as the reverse process may become unstable
>
> [Page 1](zotero://open-pdf/library/items/VRS74JMA?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> replace the forward process in [7,8] with an SDE based on a Brownian bridge process
>
> [Page 1](zotero://open-pdf/library/items/VRS74JMA?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> maximal interpolation factor (MIF)
>
> [Page 2](zotero://open-pdf/library/items/VRS74JMA?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we propose to employ an SDE that has a linear interpolation factor k(t) = t, where 0 ≤ t ≤ T < Tmax = 1. Substituting k(t) = t the mean of the SDE in (4) becomes
>
> [Page 2](zotero://open-pdf/library/items/VRS74JMA?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SDEs that linearly transform the starting condition (X0 = S and zero variance for t = 0) to the terminal condition (XT = Y and zero variance for t = 1) with a constant diffusion coefficient of g(t) = 1 are called Brownian bridges
>
> [Page 3](zotero://open-pdf/library/items/VRS74JMA?page=3)


%% Import Date: 2026-05-12T02:01:47.000+00:00 %%

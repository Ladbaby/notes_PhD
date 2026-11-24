---
Title: "PriorGrad: Improving Conditional Denoising Diffusion Models with Data-Dependent Adaptive Prior"
Tags:
  - arXiv/2022
  - diffusion-model
  - conditional-generation
  - adaptive-prior
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/WJSHS4FG
FirstAuthor: Lee, Sang-gil
Author: Kim, Heeseung; Shin, Chaehun; Tan, Xu; Liu, Chang; Meng, Qi; Qin, Tao; Chen, Wei; Yoon, Sungroh; Liu, Tie-Yan;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2106.06406
Citekey: lee_PriorGradImprovingConditional_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the inefficiency caused by the discrepancy between standard Gaussian priors and complex data distributions in diffusion models, this paper proposes PriorGrad, an adaptive prior derived from data statistics that accelerates speech synthesis convergence and improves perceptual quality.

> [!cite]
> **Bibliography**:: Lee, S., Kim, H., Shin, C., Tan, X., Liu, C., Meng, Q., Qin, T., Chen, W., Yoon, S., & Liu, T. (2022). PriorGrad: Improving Conditional Denoising Diffusion Models with Data-Dependent Adaptive Prior. https://doi.org/10.48550/arXiv.2106.06406

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: ICLR 2022. 19 pages, 7 figures, 8 tables. Audio samples: https://speechresearch.github.io/priorgrad/.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> whereas the corresponding data distribution may be more complicated than the standard Gaussian distribution, which potentially introduces inefficiency in denoising the prior noise into the data sample because of the discrepancy between the data and the prior
>
> [Page 1](zotero://open-pdf/library/items/WJSHS4FG?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adaptive prior derived from the data statistics based on the conditional information.
>
> [Page 1](zotero://open-pdf/library/items/WJSHS4FG?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adaptive noise
>
> [Page 2](zotero://open-pdf/library/items/WJSHS4FG?page=2)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> granularity
>
>> 颗粒性
>
> [Page 2](zotero://open-pdf/library/items/WJSHS4FG?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> mapping them as the mean and variance of the Gaussian prior
>
> [Page 2](zotero://open-pdf/library/items/WJSHS4FG?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> − ELBO = C(Σ) + T ∑ t=1 γtEx0, ‖  −  θ(√  ̄ αt(x0 − μ) + √1 −  ̄ αt , t)‖2 Σ−1 ,
>
> [Page 4](zotero://open-pdf/library/items/WJSHS4FG?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Contrary to original DDPM, which used N (0, I) as the prior without any assumption on data, through Proposition 1, we train the model with N (μ, Σ),
>
> [Page 4](zotero://open-pdf/library/items/WJSHS4FG?page=4)


%% Import Date: 2026-05-12T01:20:46.000+00:00 %%

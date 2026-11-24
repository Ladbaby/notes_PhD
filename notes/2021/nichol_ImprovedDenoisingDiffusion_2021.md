---
Title: Improved Denoising Diffusion Probabilistic Models
Tags:
  - arXiv/2021
  - denoising-diffusion
  - generative-models
  - log-likelihood
  - sampling-efficiency
ZoteroLink: zotero://open-pdf/library/items/GVK99BB4
FirstAuthor: Nichol, Alex
Author: Dhariwal, Prafulla;
Year: "2021"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2102.09672
Citekey: nichol_ImprovedDenoisingDiffusion_2021
rating: 2
---
> [!info]
> **TLDR**:: To address the high computational cost of sampling in denoising diffusion models, the authors propose learning reverse process variances to enable efficient sampling with significantly fewer forward passes.

> [!cite]
> **Bibliography**:: Nichol, A., & Dhariwal, P. (2021). Improved Denoising Diffusion Probabilistic Models. https://doi.org/10.48550/arXiv.2102.09672

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> achieve competitive loglikelihoods while maintaining high sample quality.
>
> [Page 1](zotero://open-pdf/library/items/GVK99BB4?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sampling with an order of magnitude fewer forward passes
>
> [Page 1](zotero://open-pdf/library/items/GVK99BB4?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> allow DDPMs to achieve much better log-likelihoods on image datasets
>
> [Page 3](zotero://open-pdf/library/items/GVK99BB4?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> in the limit of infinite diffusion steps, the choice of σt might not matter at all for sample quality. In other words, as we add more diffusion steps, the model mean μθ(xt, t) determines the distribution much more than Σθ(xt, t).
>
> [Page 3](zotero://open-pdf/library/items/GVK99BB4?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> improve log-likelihood by using a better choice of Σθ(xt, t).
>
> [Page 3](zotero://open-pdf/library/items/GVK99BB4?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we found it better to parameterize the variance as an interpolation between βt and  ̃ βt in the
>
> [Page 3](zotero://open-pdf/library/items/GVK99BB4?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> log domain
>
> [Page 4](zotero://open-pdf/library/items/GVK99BB4?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We use a small offset s to prevent βt from being too small near t = 0, since we found that having tiny amounts of noise at the beginning of the process made it hard for the network to predict   accurately enough
>
> [Page 4](zotero://open-pdf/library/items/GVK99BB4?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We hypothesized that the gradient of Lvlb was much noisier than that of Lhybrid.
>
> [Page 5](zotero://open-pdf/library/items/GVK99BB4?page=5)


%% Import Date: 2026-05-12T00:52:00.000+00:00 %%

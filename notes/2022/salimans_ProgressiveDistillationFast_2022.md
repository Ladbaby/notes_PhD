---
Title: Progressive Distillation for Fast Sampling of Diffusion Models
Tags:
  - NeurIPS/2022
  - diffusion-model
  - progressive-distillation
  - fast-sampling
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/Q8YW8XRE
FirstAuthor: Salimans, Tim
Author: Ho, Jonathan;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2202.00512
Citekey: salimans_ProgressiveDistillationFast_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the slow sampling time of diffusion models, this paper introduces new parameterizations for stability and a progressive distillation method that reduces sampling steps by half iteratively, enabling high-quality generation in as few as four steps.

> [!cite]
> **Bibliography**:: Salimans, T., & Ho, J. (2022). Progressive Distillation for Fast Sampling of Diffusion Models. https://doi.org/10.48550/arXiv.2202.00512

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Published as a conference paper at ICLR 2022.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we present new parameterizations of diffusion models that provide increased stability when using few sampling steps
>
> [Page 1](zotero://open-pdf/library/items/Q8YW8XRE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> distill a trained deterministic diffusion sampler, using many steps, into a new diffusion model that takes half as many sampling steps
>
> [Page 1](zotero://open-pdf/library/items/Q8YW8XRE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sampling can be accomplished in relatively few steps in strongly conditioned settings
>
> [Page 1](zotero://open-pdf/library/items/Q8YW8XRE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> probability flow ODE
>
> [Page 2](zotero://open-pdf/library/items/Q8YW8XRE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> instead of the original data x, we have the student model denoise towards a target  ̃ x that makes a single student DDIM step match 2 teacher DDIM step
>
> [Page 3](zotero://open-pdf/library/items/Q8YW8XRE?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> blurry prediction
>
>> 会牺牲样本多样性？
>
> [Page 4](zotero://open-pdf/library/items/Q8YW8XRE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By making sharper predictions, the student model can make faster progress during sampling
>
> [Page 4](zotero://open-pdf/library/items/Q8YW8XRE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we sample this discrete time such that the highest time index corresponds to a signal-tonoise ratio of zero, i.e. α1 = 0,
>
> [Page 4](zotero://open-pdf/library/items/Q8YW8XRE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> xθ(zt) = 1 αt (zt − σtˆ  θ(zt)) divides by αt → 0
>
> [Page 5](zotero://open-pdf/library/items/Q8YW8XRE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> observed data zt =   is no longer informative of x and predictions ˆ  θ (zt ) no longer implicitly predict x
>
> [Page 5](zotero://open-pdf/library/items/Q8YW8XRE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> implied prediction ˆ xθ(zt) remains stable as λt = log[α2 t /σ2 t ] varies
>
> [Page 5](zotero://open-pdf/library/items/Q8YW8XRE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> smoothly interpolating between predicting x directly and predicting via
>
> [Page 5](zotero://open-pdf/library/items/Q8YW8XRE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The setup of Ho et al. (2020) weights the reconstruction loss by the signal-to-noise ratio, implicitly gives a weight of zero to data with zero SNR, and is therefore not a suitable choice for distillation
>
> [Page 5](zotero://open-pdf/library/items/Q8YW8XRE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ‘truncated SNR’ weighting.
>
> [Page 5](zotero://open-pdf/library/items/Q8YW8XRE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ‘SNR+1’ weighting.
>
> [Page 5](zotero://open-pdf/library/items/Q8YW8XRE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> our method never needs to run the original model at the full number of sampling steps
>
> [Page 8](zotero://open-pdf/library/items/Q8YW8XRE?page=8)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> at every iteration of progressive distillation, the number of model evaluations is independent of the number of teacher sampling steps, allowing our method to scale up to large numbers of teacher steps at a logarithmic cost in total distillation time
>
> [Page 8](zotero://open-pdf/library/items/Q8YW8XRE?page=8)


%% Import Date: 2026-05-12T01:24:38.000+00:00 %%

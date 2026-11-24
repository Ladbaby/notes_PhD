---
Title: "Argmax Flows and Multinomial Diffusion: Learning Categorical Distributions"
Tags:
  - NeurIPS/2021
  - argmax-flows
  - multinomial-diffusion
  - categorical-data
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/SPP895I4
FirstAuthor: Hoogeboom, Emiel
Author: Nielsen, Didrik; Jaini, Priyank; Forré, Patrick; Welling, Max;
Year: "2021"
ItemType: conferencePaper
Conference: Advances in Neural Information Processing Systems
Volume: "34"
Publisher: Curran Associates, Inc.
Page: 12454–12465
Citekey: hoogeboom_ArgmaxFlowsMultinomial_2021
rating: 2
---
> [!info]
> **TLDR**:: To address the limitation of generative models on ordinal data for categorical tasks, this paper introduces Argmax Flows and Multinomial Diffusion to enable effective text and image segmentation modeling.

> [!cite]
> **Bibliography**:: Hoogeboom, E., Nielsen, D., Jaini, P., Forré, P., & Welling, M. (2021). Argmax Flows and Multinomial Diffusion: Learning Categorical Distributions. _Advances in Neural Information Processing Systems_, _34_, 12454–12465.

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="8"><p>类别扩散模型</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Generative flows
>
> [Page 1](zotero://open-pdf/library/items/SPP895I4?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> diffusion models
>
> [Page 1](zotero://open-pdf/library/items/SPP895I4?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> categorical data
>
> [Page 1](zotero://open-pdf/library/items/SPP895I4?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Argmax Flows
>
> [Page 1](zotero://open-pdf/library/items/SPP895I4?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Multinomial Diffusion
>
> [Page 1](zotero://open-pdf/library/items/SPP895I4?page=1)

> [!quote|#e56eee] <mark style="background-color: #e56eee">Highlight</mark>
> trajectory
>
>> 轨迹
>
> [Page 2](zotero://open-pdf/library/items/SPP895I4?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> multinomial diffusion process using a categorical distribution that has a t chance of resampling a category uniformly
>
> [Page 5](zotero://open-pdf/library/items/SPP895I4?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> elementwise
>
> [Page 5](zotero://open-pdf/library/items/SPP895I4?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Intuïtively, for each next timestep, a little amount of uniform noise t over the K classes is introduced, and with a large probability (1 t) the previous value xt 1 is sampled
>
> [Page 5](zotero://open-pdf/library/items/SPP895I4?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> not predict the parameters for the generative trajectory directly, but rather to predict the noise using the posterior equation for q
>
> [Page 6](zotero://open-pdf/library/items/SPP895I4?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> p(x0|x1)=C(x0| ˆ x0) and p(xt 1|xt)=C(xt 1|✓post(xt, ˆ x0)) where ˆ x0 = μ(xt,t) (14)
>
> [Page 6](zotero://open-pdf/library/items/SPP895I4?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> faster than iterative approaches
>
> [Page 10](zotero://open-pdf/library/items/SPP895I4?page=10)


%% Import Date: 2026-05-12T00:47:04.000+00:00 %%

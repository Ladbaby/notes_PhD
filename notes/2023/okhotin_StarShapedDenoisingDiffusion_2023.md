---
Title: Star-Shaped Denoising Diffusion Probabilistic Models
Tags:
  - arXiv/2023
  - diffusion-model
  - non-Markovian
  - generative-models
  - noising-process
ZoteroLink: zotero://open-pdf/library/items/T48E3YHK
FirstAuthor: Okhotin, Andrey
Author: Molchanov, Dmitry; Arkhipkin, Vladimir; Bartosh, Grigory; Alanov, Aibek; Vetrov, Dmitry;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2302.05259
Citekey: okhotin_StarShapedDenoisingDiffusion_2023
rating: 2
---
> [!info]
> **TLDR**:: To overcome the limitation of standard diffusion models to Gaussian and discrete processes, Star-Shaped DDPMs enable efficient training and sampling for arbitrary noising distributions in the exponential family.

> [!cite]
> **Bibliography**:: Okhotin, A., Molchanov, D., Arkhipkin, V., Bartosh, G., Alanov, A., & Vetrov, D. (2023). Star-Shaped Denoising Diffusion Probabilistic Models. https://doi.org/10.48550/arXiv.2302.05259

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We propose Star-Shaped Denoising Diffusion Probabilistic Models (SS-DDPM)
>
> [Page 1](zotero://open-pdf/library/items/T48E3YHK?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> arbitrary noising distributions, and admits efficient training and sampling algorithms for a wide range of distributions that lie in the exponential family.
>
> [Page 1](zotero://open-pdf/library/items/T48E3YHK?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, for data distributed on manifolds, bounded volumes, or with other features, the injection of Gaussian noise can be unnatural, breaking the data structure
>
> [Page 2](zotero://open-pdf/library/items/T48E3YHK?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The problem is that we have to maintain a connection between the distributions defining the Markov noising process that gradually destroys information and its marginal distributions
>
> [Page 2](zotero://open-pdf/library/items/T48E3YHK?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Specifically, we must define the steps, q(xt|xt−1), in a manner that enables us to compute the explicit form of the marginals, q(xt|x0), and also compute the posterior distributions, q(xt−1|xt, x0), which is only feasible for simple distributions such as Gaussian, Gamma (Nachmani et al., 2021), and categorical (Hoogeboom et al., 2021
>
> [Page 3](zotero://open-pdf/library/items/T48E3YHK?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> non-Markovian forward process qSS(x0:T )
>
> [Page 3](zotero://open-pdf/library/items/T48E3YHK?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> qSS(x0:T ) = q(x0) T ∏ t=1 qSS(xt|x0),
>
> [Page 3](zotero://open-pdf/library/items/T48E3YHK?page=3)


%% Import Date: 2026-05-12T02:07:22.000+00:00 %%

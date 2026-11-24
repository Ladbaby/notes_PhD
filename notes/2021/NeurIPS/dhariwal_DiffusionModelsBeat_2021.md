---
Title: Diffusion Models Beat GANs on Image Synthesis
Tags:
  - NeurIPS/2021
  - diffusion-model
  - image-synthesis
  - classifier-guidance
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/PFD7D9VC
FirstAuthor: Dhariwal, Prafulla
Author: Nichol, Alex;
Year: "2021"
ItemType: article
Conference: Advances in Neural Information Processing Systems
Volume: "34"
Publisher: arXiv
Page: 8780–8794
Citekey: dhariwal_DiffusionModelsBeat_2021
DOI: 10.48550/arXiv.2105.05233
rating: 2
---
> [!info]
> **TLDR**:: To overcome diffusion models' previous inferior image synthesis quality compared to GANs, this work introduces architectural improvements and classifier guidance to achieve superior sample fidelity and diversity.

> [!cite]
> **Bibliography**:: Dhariwal, P., & Nichol, A. (2021). Diffusion Models Beat GANs on Image Synthesis. _Advances in Neural Information Processing Systems_, _34_, 8780–8794.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> fidelity
>
>> /fɪˈdeləti/忠诚
>
> [Page 1](zotero://open-pdf/library/items/PFD7D9VC?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> trading off diversity for fidelity
>
> [Page 2](zotero://open-pdf/library/items/PFD7D9VC?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it measures how well a model captures the full ImageNet class distribution while still producing individual samples that are convincing examples of a single class.
>
> [Page 3](zotero://open-pdf/library/items/PFD7D9VC?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> who argued that it is more consistent with human
>
> [Page 3](zotero://open-pdf/library/items/PFD7D9VC?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> judgement than Inception Score
>
> [Page 4](zotero://open-pdf/library/items/PFD7D9VC?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> finding that architecture can indeed give a substantial boost to sample quality on much larger and more diverse datasets at a higher resolution
>
> [Page 4](zotero://open-pdf/library/items/PFD7D9VC?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> increased depth helps performance, it increases training time and takes longer to reach the same performance as a wider model,
>
> [Page 5](zotero://open-pdf/library/items/PFD7D9VC?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> condition diffusion models on class labels
>
> [Page 6](zotero://open-pdf/library/items/PFD7D9VC?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> exploiting a classifier p(y|x) to improve a diffusion generator
>
> [Page 6](zotero://open-pdf/library/items/PFD7D9VC?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In particular, we can train a classifier pφ(y|xt, t) on noisy images xt, and then use gradients ∇xt log pφ(y|xt, t) to guide the diffusion sampling process towards an arbitrary class label y.
>
> [Page 6](zotero://open-pdf/library/items/PFD7D9VC?page=6)


%% Import Date: 2026-05-12T00:46:10.000+00:00 %%

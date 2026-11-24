---
Title: Diffusion Models Already Have A Semantic Latent Space
Tags:
  - ICLR/2022
  - diffusion-model
  - semantic-latent-space
  - image-manipulation
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/S7VN2BMM
FirstAuthor: Kwon, Mingi
Author: Jeong, Jaeseok; Uh, Youngjung;
Year: "2022"
ItemType: conferencePaper
Conference: The Eleventh International Conference on Learning Representations
Citekey: kwon_DiffusionModelsAlready_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the lack of semantic latent space in diffusion models, this paper proposes an asymmetric reverse process that discovers a controllable semantic latent space enabling robust image manipulation in frozen pretrained models.

> [!cite]
> **Bibliography**:: Kwon, M., Jeong, J., & Uh, Y. (2022). Diffusion Models Already Have A Semantic Latent Space. In _The Eleventh International Conference on Learning Representations_.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Our semantic latent space, named h-space, has nice properties to accommodate semantic image manipulation: homogeneity, linearity, robustness, and consistency across timesteps
>
> [Page 1](zotero://open-pdf/library/items/S7VN2BMM?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The same shift in this space results in the same attribute change in all images
>
> [Page 2](zotero://open-pdf/library/items/S7VN2BMM?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We choose its bottleneck, the deepest feature maps ht, to control εtθ
>
> [Page 4](zotero://open-pdf/library/items/S7VN2BMM?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> directly optimizing ∆ht on multiple timesteps requires many iterations of training with a carefully chosen learning rate and its scheduling. Instead, we define an implicit function ft(ht) which produces ∆ht for given ht and t. ft is implemented as a small neural network with two 1 × 1 convolutions concatenating timestep t
>
> [Page 4](zotero://open-pdf/library/items/S7VN2BMM?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Diffusion models generate the high-level context in the early stage and imperceptible fine details in the later stage
>
> [Page 5](zotero://open-pdf/library/items/S7VN2BMM?page=5)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Although DDIM achieves nearly perfect inversion by removing stochasticity (η = 0), Karras et al. (2022) demonstrate that stochasticity improves image quality
>
>> 随机性能提升样本质量？
>
> [Page 6](zotero://open-pdf/library/items/S7VN2BMM?page=6)


%% Import Date: 2026-05-12T00:57:57.000+00:00 %%

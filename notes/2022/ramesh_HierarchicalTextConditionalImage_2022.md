---
Title: Hierarchical Text-Conditional Image Generation with CLIP Latents
Tags:
  - arXiv/2022
  - image-generation
  - CLIP
  - hierarchical-models
  - text-to-image
  - diffusion-model
ZoteroLink: zotero://open-pdf/library/items/DF38ENEW
FirstAuthor: Ramesh, Aditya
Author: Dhariwal, Prafulla; Nichol, Alex; Chu, Casey; Chen, Mark;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2204.06125
Citekey: ramesh_HierarchicalTextConditionalImage_2022
rating: 2
---
> [!info]
> **TLDR**:: To leverage CLIP representations for image generation, this work proposes a two-stage model using a prior to generate image embeddings and a diffusion decoder to synthesize images, thereby improving diversity and enabling zero-shot language-guided manipulations.

> [!cite]
> **Bibliography**:: Ramesh, A., Dhariwal, P., Nichol, A., Chu, C., & Chen, M. (2022). Hierarchical Text-Conditional Image Generation with CLIP Latents. https://doi.org/10.48550/arXiv.2204.06125

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="8"><p>CVPR 2022</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a prior that generates a CLIP image embedding given a text caption
>
> [Page 1](zotero://open-pdf/library/items/DF38ENEW?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a decoder that generates an image conditioned on the image embedding
>
> [Page 1](zotero://open-pdf/library/items/DF38ENEW?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> using the CLIP latent space
>
> [Page 1](zotero://open-pdf/library/items/DF38ENEW?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a CLIP text embedding is first fed to an autoregressive or diffusion prior to produce an image embedding, and then this embedding is used to condition a diffusion decoder which produces a final image
>
> [Page 3](zotero://open-pdf/library/items/DF38ENEW?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> combine the CLIP image embedding decoder with a prior model
>
> [Page 3](zotero://open-pdf/library/items/DF38ENEW?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A decoder P (x|zi, y) that produces images x conditioned on CLIP image embeddings zi (and optionally text captions y).
>
> [Page 3](zotero://open-pdf/library/items/DF38ENEW?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We use diffusion models [25, 48] to produce images conditioned on CLIP image embeddings (and optionally text captions).
>
> [Page 4](zotero://open-pdf/library/items/DF38ENEW?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we need a prior model that produces zi from captions y to enable image generations from text captions.
>
> [Page 4](zotero://open-pdf/library/items/DF38ENEW?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Diffusion prior: The continuous vector zi is directly modelled using a Gaussian diffusion model conditioned on the caption y.
>
> [Page 4](zotero://open-pdf/library/items/DF38ENEW?page=4)


%% Import Date: 2026-05-12T01:24:08.000+00:00 %%

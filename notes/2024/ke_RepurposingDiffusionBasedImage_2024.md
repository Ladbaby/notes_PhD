---
Title: Repurposing Diffusion-Based Image Generators for Monocular Depth Estimation
Tags:
  - arXiv/2024
  - diffusion-model
  - monocular-depth-estimation
  - image-generation
  - self-supervised-learning
ZoteroLink: zotero://open-pdf/library/items/5SSXYBU4
FirstAuthor: Ke, Bingxin
Author: Obukhov, Anton; Huang, Shengyu; Metzger, Nando; Daudt, Rodrigo Caye; Schindler, Konrad;
Year: "2024"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2312.02145
Citekey: ke_RepurposingDiffusionBasedImage_2024
rating: 2
---
> [!info]
> **TLDR**:: To address monocular depth estimators' struggle with zero-shot generalization to unfamiliar content, the authors introduce Marigold, which leverages priors from Stable Diffusion for affine-invariant depth estimation.

> [!cite]
> **Bibliography**:: Ke, B., Obukhov, A., Huang, S., Metzger, N., Daudt, R. C., & Schindler, K. (2024). Repurposing Diffusion-Based Image Generators for Monocular Depth Estimation. https://doi.org/10.48550/arXiv.2312.02145

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: CVPR 2024 camera ready.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We fine-tune just the U-Net by optimizing the standard diffusion objective relative to the depth latent code
>
> [Page 4](zotero://open-pdf/library/items/5SSXYBU4?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> frozen VAE
>
> [Page 4](zotero://open-pdf/library/items/5SSXYBU4?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To implement the conditioning of the latent denoiser εθ(z(d) t , z(x), t) on input image x, we concatenate the image and depth latent codes into a single input zt = cat(z(d) t , z(x)) along the feature dimension
>
> [Page 4](zotero://open-pdf/library/items/5SSXYBU4?page=4)


%% Import Date: 2026-05-12T02:58:48.000+00:00 %%

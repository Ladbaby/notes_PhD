---
Title: "InferGrad: Improving Diffusion Models for Vocoder by Considering Inference in Training"
Tags:
  - arXiv/2022
  - diffusion-model
  - vocoder
  - inference-training
  - denoising-diffusion
ZoteroLink: zotero://open-pdf/library/items/H3Z9W55D
FirstAuthor: Chen, Zehua
Author: Tan, Xu; Wang, Ke; Pan, Shifeng; Mandic, Danilo; He, Lei; Zhao, Sheng;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2202.03751
Citekey: chen_InferGradImprovingDiffusion_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the slow inference speed of diffusion models caused by numerous iterations, InferGrad jointly optimizes training and inference schedules to reduce iteration counts while maintaining high generation quality.

> [!cite]
> **Bibliography**:: Chen, Z., Tan, X., Wang, K., Pan, S., Mandic, D., He, L., & Zhao, S. (2022). InferGrad: Improving Diffusion Models for Vocoder by Considering Inference in Training. https://doi.org/10.48550/arXiv.2202.03751

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: 5 Pages, 2 figures. Accepted to ICASSP 2022.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> noise schedule β
>
> [Page 2](zotero://open-pdf/library/items/H3Z9W55D?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we present InferGrad which improves DDPMs by incorporating a range of inference schedules that uses a few inference iterations into the training process
>
> [Page 2](zotero://open-pdf/library/items/H3Z9W55D?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> when we set N   T for fast sampling, the distance between two adjacent inference steps is enlarged and the generation quality decreases. In InferGrad
>
> [Page 2](zotero://open-pdf/library/items/H3Z9W55D?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we propose to use an infer loss LI to measure the distance between the ground truth x0 and the generated sample ˆ x0
>
> [Page 2](zotero://open-pdf/library/items/H3Z9W55D?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> When the number of inference steps N is small, the DDPMs sample quality is sensitive to inference schedule ˆ β.
>
> [Page 2](zotero://open-pdf/library/items/H3Z9W55D?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> include a range of ˆ β into L
>
> [Page 2](zotero://open-pdf/library/items/H3Z9W55D?page=2)


%% Import Date: 2026-05-12T01:17:04.000+00:00 %%

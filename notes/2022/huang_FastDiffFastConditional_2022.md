---
Title: "FastDiff: A Fast Conditional Diffusion Model for High-Quality Speech Synthesis"
Tags:
  - arXiv/2022
  - diffusion-model
  - speech-synthesis
  - fast-sampling
  - text-to-speech
ZoteroLink: zotero://open-pdf/library/items/EL75J3KM
FirstAuthor: Huang, Rongjie
Author: Lam, Max W. Y.; Wang, Jun; Su, Dan; Yu, Dong; Ren, Yi; Zhao, Zhou;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2204.09934
Citekey: huang_FastDiffFastConditional_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the slow iterative sampling of diffusion models in speech synthesis, this paper introduces FastDiff, which uses time-aware convolutions and a noise schedule predictor to enable high-quality, real-time end-to-end text-to-speech generation.

> [!cite]
> **Bibliography**:: Huang, R., Lam, M. W. Y., Wang, J., Su, D., Yu, D., Ren, Y., & Zhao, Z. (2022). FastDiff: A Fast Conditional Diffusion Model for High-Quality Speech Synthesis. https://doi.org/10.48550/arXiv.2204.09934

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Accepted by IJCAI 2022.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> dilated convolution layers
>
>> 传统方法
>
> [Page 2](zotero://open-pdf/library/items/EL75J3KM?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> At time step t, we follow [Vaswani et al., 2017] to embed the step index into an 128-dimensional positional encoding (PE) vector et
>
> [Page 2](zotero://open-pdf/library/items/EL75J3KM?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> time-aware location-variable convolution (LVC)
>
> [Page 2](zotero://open-pdf/library/items/EL75J3KM?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> FastDiff adopts the noise scheduling algorithm in the bilateral denoising diffusion models (BDDMs) [Lam et al., 2022] to predict a sampling noise schedule much shorter than the noise schedule used in training.
>
>> 说是比其它方法更优
>
> [Page 3](zotero://open-pdf/library/items/EL75J3KM?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> 1) a iterative refinement model θ that minimizes a variational bound of the score function, and 2) a noise predictor φ that optimizes the noise schedule for a tighter evidence lower bound.
>
> [Page 3](zotero://open-pdf/library/items/EL75J3KM?page=3)


%% Import Date: 2026-05-12T01:18:52.000+00:00 %%

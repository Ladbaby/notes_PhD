---
Title: "Grad-TTS: A Diffusion Probabilistic Model for Text-to-Speech"
Tags:
  - arXiv/2021
  - diffusion-probabilistic-models
  - text-to-speech
  - score-based-decoder
  - monotonic-alignment
  - mel-spectrogram
ZoteroLink: zotero://open-pdf/library/items/PQI9MK5A
FirstAuthor: Popov, Vadim
Author: Vovk, Ivan; Gogoryan, Vladimir; Sadekova, Tasnima; Kudinov, Mikhail;
Year: "2021"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2105.06337
Citekey: popov_GradTTSDiffusionProbabilistic_2021
rating: 2
---
> [!info]
> **TLDR**:: To address the rigid trade-off between sound quality and inference speed in text-to-speech synthesis, Grad-TTS employs a score-based decoder within a stochastic differential equation framework to enable flexible, controllable reconstruction of mel-spectrograms from noise.

> [!cite]
> **Bibliography**:: Popov, V., Vovk, I., Gogoryan, V., Sadekova, T., & Kudinov, M. (2021). Grad-TTS: A Diffusion Probabilistic Model for Text-to-Speech. https://doi.org/10.48550/arXiv.2105.06337

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="8"><p>ICML 2021</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> N (μ, Σ) instead of N (0, I)
>
> [Page 3](zotero://open-pdf/library/items/PQI9MK5A?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> diagonal covariance matrix Σ
>
> [Page 3](zotero://open-pdf/library/items/PQI9MK5A?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> βt, which we will refer to as noise schedule
>
> [Page 3](zotero://open-pdf/library/items/PQI9MK5A?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ordinary differential equation
>
> [Page 3](zotero://open-pdf/library/items/PQI9MK5A?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> encoder, duration predictor, and decoder.
>
> [Page 4](zotero://open-pdf/library/items/PQI9MK5A?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Glow-TTS
>
> [Page 4](zotero://open-pdf/library/items/PQI9MK5A?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> encoded text sequence  ̃ μ1:L and frame-wise features μ1:F .
>
> [Page 4](zotero://open-pdf/library/items/PQI9MK5A?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Informally speaking, the duration predictor tells us how many frames each element of text input lasts.
>
> [Page 4](zotero://open-pdf/library/items/PQI9MK5A?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ordinary differential equation (ODE)
>
> [Page 4](zotero://open-pdf/library/items/PQI9MK5A?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> I
>
>> 应该是单位协方差矩阵？
>
> [Page 4](zotero://open-pdf/library/items/PQI9MK5A?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> step size h
>
> [Page 4](zotero://open-pdf/library/items/PQI9MK5A?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (i) searching for an optimal alignment A∗ given fixed encoder parameters; (ii) fixing this alignment A∗ and taking one step of stochastic gradient descent to optimize loss function with respect to
>
> [Page 5](zotero://open-pdf/library/items/PQI9MK5A?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> encoder parameters
>
> [Page 5](zotero://open-pdf/library/items/PQI9MK5A?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> dynamic programming
>
> [Page 5](zotero://open-pdf/library/items/PQI9MK5A?page=5)


%% Import Date: 2026-05-12T00:52:15.000+00:00 %%

---
Title: A Study on Speech Enhancement Based on Diffusion Probabilistic Model
Tags:
  - arXiv/2021
  - diffusion-model
  - speech-enhancement
  - denoising
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/W4P9THFS
FirstAuthor: Lu, Yen-Ju
Author: Tsao, Yu; Watanabe, Shinji;
Year: "2021"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2107.11876
Citekey: lu_StudySpeechEnhancement_2021
rating: 2
---

> [!info]
> **TLDR**:: To address speech enhancement, this work proposes DiffuSE, which employs a supportive reverse process that injects noisy speech at each step to enable high-quality, fast inference with fewer sampling steps.

> [!cite]
> **Bibliography**:: Lu, Y., Tsao, Y., & Watanabe, S. (2021). A Study on Speech Enhancement Based on Diffusion Probabilistic Model. https://doi.org/10.48550/arXiv.2107.11876

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: To appear in APSIPA 2021.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The fundamental architecture of the proposed DiffuSE model is similar to that of DiffWave
>
> [Page 1](zotero://open-pdf/library/items/W4P9THFS?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we designed an advanced reverse process, termed the supportive reverse process,
>
> [Page 1](zotero://open-pdf/library/items/W4P9THFS?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> DiffuSE uses the noisy spectral features as the conditioner, rather than the clean Mel-spectral features used in DiffWave
>
> [Page 1](zotero://open-pdf/library/items/W4P9THFS?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we combine the noisy speech signal into the reverse process instead of the isotropic Gaussian noise
>
> [Page 1](zotero://open-pdf/library/items/W4P9THFS?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> pretrained the model using clean Mel-spectral features as a conditioner
>
> [Page 1](zotero://open-pdf/library/items/W4P9THFS?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We propose a novel supportive reverse process, specifically for the SE task, which combines the noisy speech signals during the reverse process
>
> [Page 2](zotero://open-pdf/library/items/W4P9THFS?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> to eliminate noise signals from the noisy input more effectively
>
> [Page 3](zotero://open-pdf/library/items/W4P9THFS?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> replaces the combination of predicted mean and Gaussian noise by the noisy signal
>
> [Page 3](zotero://open-pdf/library/items/W4P9THFS?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the supportive reverse process directly uses the noisy speech signal y as the input of the reverse process rather than the Gaussian noise
>
> [Page 3](zotero://open-pdf/library/items/W4P9THFS?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> After pretraining, we changed the conditioner from clean Mel-spectral features to the noisy spectral features, reset the parameters in the conditioner encoder, and preserved other parameters for the SE training.
>
> [Page 4](zotero://open-pdf/library/items/W4P9THFS?page=4)


%% Import Date: 2026-05-12T00:51:15.000+00:00 %%

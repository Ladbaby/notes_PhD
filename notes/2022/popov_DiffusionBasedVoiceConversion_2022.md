---
Title: Diffusion-Based Voice Conversion with Fast Maximum Likelihood Sampling Scheme
Tags:
  - arXiv/2022
  - voice-conversion
  - diffusion-model
  - maximum-likelihood-sampling
  - one-shot-learning
ZoteroLink: zotero://open-pdf/library/items/JIBK89SE
FirstAuthor: Popov, Vadim
Author: Vovk, Ivan; Gogoryan, Vladimir; Sadekova, Tasnima; Kudinov, Mikhail; Wei, Jiansheng;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2109.13821
Citekey: popov_DiffusionBasedVoiceConversion_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of high-quality one-shot many-to-many voice conversion, the authors propose a scalable diffusion-based solution featuring a novel Stochastic Differential Equations solver for accelerated real-time synthesis.

> [!cite]
> **Bibliography**:: Popov, V., Vovk, I., Gogoryan, V., Sadekova, T., Kudinov, M., & Wei, J. (2022). Diffusion-Based Voice Conversion with Fast Maximum Likelihood Sampling Scheme. https://doi.org/10.48550/arXiv.2109.13821

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="8"><p>ICLR 2022</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> utterance
>
>> 语言
>
> [Page 1](zotero://open-pdf/library/items/JIBK89SE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> solves the disentanglement problem by employing the encoder predicting “average voice”:
>
> [Page 2](zotero://open-pdf/library/items/JIBK89SE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it is trained to transform mel features corresponding to each phoneme into mel features corresponding to this phoneme averaged across a large multi-speaker dataset
>
>> mel: Mel-frequency cepstral coefficients (MFCCs)
>
> [Page 2](zotero://open-pdf/library/items/JIBK89SE?page=2)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> phoneme
>
>> 音素
>
> [Page 2](zotero://open-pdf/library/items/JIBK89SE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> As for decoder, in our VC model, it is designed as a part of a Diffusion Probabilistic Model
>
> [Page 2](zotero://open-pdf/library/items/JIBK89SE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> develop a novel inference scheme that significantly reduces the number of iterations sufficient to produce samples of decent quality and does not require model re-training
>
> [Page 2](zotero://open-pdf/library/items/JIBK89SE?page=2)

> [!quote|#ffd400] Image
>
> [Page 2](zotero://open-pdf/library/items/JIBK89SE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We choose average phoneme-level mel features as speaker-independent speech representation.
>
> [Page 3](zotero://open-pdf/library/items/JIBK89SE?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The decoder architecture is based on U-Net
>
> [Page 4](zotero://open-pdf/library/items/JIBK89SE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> maximizes the loglikelihood of sample paths of the forward diffusion
>
> [Page 4](zotero://open-pdf/library/items/JIBK89SE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> in case of generation with strong conditioning (e.g. mel-spectrogram inversion) the assumptions on the data distribution may become viable
>
> [Page 6](zotero://open-pdf/library/items/JIBK89SE?page=6)


%% Import Date: 2026-05-12T01:23:26.000+00:00 %%

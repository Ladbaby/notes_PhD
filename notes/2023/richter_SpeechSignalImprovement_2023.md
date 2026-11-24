---
Title: Speech Signal Improvement Using Causal Generative Diffusion Models
Tags:
  - arXiv/2023
  - diffusion-model
  - speech-enhancement
  - causal-processing
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/JWS2E358
FirstAuthor: Richter, Julius
Author: Welker, Simon; Lemercier, Jean-Marie; Lay, Bunlong; Peer, Tal; Gerkmann, Timo;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2303.08674
Citekey: richter_SpeechSignalImprovement_2023
rating: 2
---
> [!info]
> **TLDR**:: To address diverse speech signal distortions with causal processing, this work adapts a generative diffusion model by replacing global normalization with causal adaptive gain control and utilizing diverse training data.

> [!cite]
> **Bibliography**:: Richter, J., Welker, S., Lemercier, J., Lay, B., Peer, T., & Gerkmann, T. (2023). Speech Signal Improvement Using Causal Generative Diffusion Models. https://doi.org/10.48550/arXiv.2303.08674

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Accepted by ICASSP 2023.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> CAUSAL
>
>> 因果关系的
>
> [Page 1](zotero://open-pdf/library/items/JWS2E358?page=1)

> [!quote|#ffd400] Image
>
> [Page 1](zotero://open-pdf/library/items/JWS2E358?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> short-time Fourier transform (STFT)
>
> [Page 1](zotero://open-pdf/library/items/JWS2E358?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> automatic gain control (AGC)
>
> [Page 1](zotero://open-pdf/library/items/JWS2E358?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> data corruption model D used to simulate various distortion types
>
> [Page 1](zotero://open-pdf/library/items/JWS2E358?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This reverse process involves the score function of xt, i.e., the gradient of its log-probability. Functioning as a prior for clean speech, it is unavailable at inference time and is thus approximated by a trained deep neural network (DNN) sθ called the score model.
>
> [Page 1](zotero://open-pdf/library/items/JWS2E358?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To match the unit-scale training condition of the score model, i.e., normalization of corrupted speech y (see Fig. 1a), we use a causal AGC system before feeding the mixture to the diffusion process,
>
> [Page 2](zotero://open-pdf/library/items/JWS2E358?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we recursively track the maximum value per magnitude frame averaged over the frequency bins to normalize the spectrogram in a causal manner
>
> [Page 2](zotero://open-pdf/library/items/JWS2E358?page=2)


%% Import Date: 2026-05-12T02:09:14.000+00:00 %%

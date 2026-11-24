---
Title: "Diff-TTS: A Denoising Diffusion Model for Text-to-Speech"
Tags:
  - arXiv/2021
  - text-to-speech
  - denoising-diffusion
  - non-autoregressive
  - speech-synthesis
  - mel-spectrogram
ZoteroLink: zotero://open-pdf/library/items/5B3FNRTQ
FirstAuthor: Jeong, Myeonghun
Author: Kim, Hyeongju; Cheon, Sung Jun; Choi, Byoung Jin; Kim, Nam Soo;
Year: "2021"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2104.01409
Citekey: jeong_DiffTTSDenoisingDiffusion_2021
rating: 2
---
> [!info]
> **TLDR**:: To improve naturalness and architectural efficiency in neural text-to-speech, this work proposes Diff-TTS, a non-autoregressive model using a denoising diffusion framework with likelihood-based optimization and accelerated sampling for fast, high-quality speech synthesis.

> [!cite]
> **Bibliography**:: Jeong, M., Kim, H., Cheon, S. J., Choi, B. J., & Kim, N. S. (2021). Diff-TTS: A Denoising Diffusion Model for Text-to-Speech. https://doi.org/10.48550/arXiv.2104.01409

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Submitted to INTERSPEECH 2021.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> to boost up the inference speed, we leverage the accelerated sampling method that allows Diff-TTS to generate raw waveforms much faster without significantly degrading perceptual quality
>
> [Page 1](zotero://open-pdf/library/items/5B3FNRTQ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> non-AR
>
> [Page 1](zotero://open-pdf/library/items/5B3FNRTQ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> loglikelihood-based optimization method
>
> [Page 1](zotero://open-pdf/library/items/5B3FNRTQ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> variance schedule β1, β2, ..., βT .
>
> [Page 2](zotero://open-pdf/library/items/5B3FNRTQ?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the denoising diffusion implicit model (DDIM)
>
> [Page 2](zotero://open-pdf/library/items/5B3FNRTQ?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the reverse transition is skipped out by a decimation factor γ
>
> [Page 2](zotero://open-pdf/library/items/5B3FNRTQ?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The decoder predicts Gaussian noise from the t-th step latent variable conditioned on phoneme embedding and diffusion step embedding.
>
> [Page 3](zotero://open-pdf/library/items/5B3FNRTQ?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> each diffusion time-step has a different  θ(·, t, c)
>
> [Page 3](zotero://open-pdf/library/items/5B3FNRTQ?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Finally, the decoder obtains the Gaussian noise corresponding to phoneme sequence and diffusion time-step
>
> [Page 3](zotero://open-pdf/library/items/5B3FNRTQ?page=3)


%% Import Date: 2026-05-12T00:50:16.000+00:00 %%

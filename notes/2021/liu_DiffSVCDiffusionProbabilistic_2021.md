---
Title: "DiffSVC: A Diffusion Probabilistic Model for Singing Voice Conversion"
Tags:
  - arXiv/2021
  - diffusion-model
  - singing-voice-conversion
  - phonetic-posteriorgrams
  - audio-synthesis
ZoteroLink: zotero://open-pdf/library/items/ZHNJME6G
FirstAuthor: Liu, Songxiang
Author: Cao, Yuewen; Su, Dan; Meng, Helen;
Year: "2021"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2105.13871
Citekey: liu_DiffSVCDiffusionProbabilistic_2021
rating: 2
---
> [!info]
> **TLDR**:: To achieve high-fidelity and expressive singing voice conversion, DiffSVC employs a denoising diffusion probabilistic model that utilizes phonetic posteriorgrams, fundamental frequency, and loudness features to predict Gaussian noise in mel spectrograms.

> [!cite]
> **Bibliography**:: Liu, S., Cao, Y., Su, D., & Meng, H. (2021). DiffSVC: A Diffusion Probabilistic Model for Singing Voice Conversion. https://doi.org/10.48550/arXiv.2105.13871

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Preprint. 8 pages, 2 figures and 1 table.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The diffusion/forward process is a Markov chain with fixed parameters
>
> [Page 1](zotero://open-pdf/library/items/ZHNJME6G?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We use an ASR acousic model to extract phonetic posteriorgrams (PPGs) from singing signals as the content features
>
> [Page 1](zotero://open-pdf/library/items/ZHNJME6G?page=1)

> [!quote|#ffd400] Image
>
> [Page 3](zotero://open-pdf/library/items/ZHNJME6G?page=3)

> [!quote|#ff6666] <mark style="background-color: #ff6666">Highlight</mark>
> Diffusion Decoder
>
>> 到底哪里有diffusion
>
> [Page 3](zotero://open-pdf/library/items/ZHNJME6G?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> content, melody and loudness
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Deep-FSMN (DFSMN)-based ASR acoustic model
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> phonemes
>
>> 音素
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> isotropic
>
>> 各向同性
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> DiffSVC represents the melody of a singing signal using its fundamental frequency contour in logarithmic scale
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A-weighting mechanism of a singing signal’s power spectrum is adopted to compute loudness features, following [4]
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The processed PPG features, Log-F0 features and loudness features are added elementwisely to obtain the conditioner e, which is token as additional input to the diffusion decoder
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> indicates the amount of noise added to the noisy mel spectrogram yt
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> bidirectional residual convolutional architecture proposed in [15] with a slight difference
>
> [Page 4](zotero://open-pdf/library/items/ZHNJME6G?page=4)

> [!quote|#ffd400] Image
>
> [Page 5](zotero://open-pdf/library/items/ZHNJME6G?page=5)


%% Import Date: 2026-05-12T00:51:01.000+00:00 %%

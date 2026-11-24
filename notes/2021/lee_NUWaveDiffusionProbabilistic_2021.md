---
Title: "NU-Wave: A Diffusion Probabilistic Model for Neural Audio Upsampling"
Tags:
  - Interspeech/2021
  - diffusion-model
  - audio-upsampling
  - neural-vocoder
  - audio-super-resolution
ZoteroLink: zotero://open-pdf/library/items/6TDSYI98
FirstAuthor: Lee, Junhyeok
Author: Han, Seungu;
Year: "2021"
ItemType: conferencePaper
Conference: Interspeech 2021
Page: 1634-1638
DOI: 10.21437/Interspeech.2021-36
Citekey: lee_NUWaveDiffusionProbabilistic_2021
rating: 2
---
> [!info]
> **TLDR**:: To address the limitation of existing audio upsampling models that generate only up to 16kHz, this work introduces NU-Wave, a lightweight diffusion probabilistic model engineered on neural vocoders to produce high-quality 48kHz waveforms from lower-rate inputs.

> [!cite]
> **Bibliography**:: Lee, J., & Han, S. (2021). NU-Wave: A Diffusion Probabilistic Model for Neural Audio Upsampling. _Interspeech 2021_, , 1634-1638. https://doi.org/10.21437/Interspeech.2021-36

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Accepted to Interspeech 2021.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> modifying them to a conditional generative model for x, where x is a local condition like mel-spectrogram
>
> [Page 2](zotero://open-pdf/library/items/6TDSYI98?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Our method directly generates waveform from waveform without feature extraction such as short-time Fourier transform spectrogram or phonetic posteriorgram.
>
> [Page 2](zotero://open-pdf/library/items/6TDSYI98?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> diffused signal
>
> [Page 2](zotero://open-pdf/library/items/6TDSYI98?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> DiffWave includes an integer timestep t in the inputs to indicate a discrete noise level [19]. On the other hand, inputs of WaveGrad contain a continuous noise level √  ̄ α to have a different number of iterations during inference [20]
>
> [Page 2](zotero://open-pdf/library/items/6TDSYI98?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the receptive field for the conditional signal yd needs to be larger than the receptive field for the noisy input y ̄
>
> [Page 2](zotero://open-pdf/library/items/6TDSYI98?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> While DiffWave upsampled the local condition with transposed convolution [19], we adopt linear interpolation to build a single neural network architecture that could be utilized for different upscaling ratios.
>
> [Page 2](zotero://open-pdf/library/items/6TDSYI98?page=2)


%% Import Date: 2026-05-12T00:50:46.000+00:00 %%

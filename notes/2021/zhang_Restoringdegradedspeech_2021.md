---
Title: Restoring degraded speech via a modified diffusion model
Tags:
  - Interspeech/2021
  - speech-restoration
  - diffusion-model
  - DiffWave
  - speech-enhancement
  - neural-vocoder
ZoteroLink: zotero://open-pdf/library/items/UNL9XT66
FirstAuthor: Zhang, Jianwei
Author: Jayasuriya, Suren; Berisha, Visar;
Year: "2021"
ItemType: conferencePaper
Conference: Interspeech 2021
Page: 221-225
DOI: 10.21437/Interspeech.2021-1889
Citekey: zhang_Restoringdegradedspeech_2021
rating: 2
---
> [!info]
> **TLDR**:: To restore speech degraded by deterministic operations like compression and clipping, the authors modify DiffWave by replacing its mel-spectrum upsampler with a deep CNN that conditions waveform generation on the degraded spectrum.

> [!cite]
> **Bibliography**:: Zhang, J., Jayasuriya, S., & Berisha, V. (2021). Restoring degraded speech via a modified diffusion model. _Interspeech 2021_, , 221-225. https://doi.org/10.21437/Interspeech.2021-1889

> [!info]
> **Contribution**:: 

## Notes
>
><p xmlns="http://www.w3.org/1999/xhtml" id="title"><strong>Contents</strong></p><ul xmlns="http://www.w3.org/1999/xhtml" style="list-style-type: none; padding-left:0px" id="toc"><li><a href="zotero://open-pdf/0_CNBV9JGN/1">1  Introduction</a></li><li style="padding-top:8px"><a href="zotero://open-pdf/0_CNBV9JGN/2">2  Methods</a><ul style="list-style-type: none; padding-left:12px"><li style="padding-top:4px"><a href="zotero://open-pdf/0_CNBV9JGN/2">2.1  DiffWave for restoring degraded speech</a></li><li style="padding-top:4px"><a href="zotero://open-pdf/0_CNBV9JGN/2">2.2  Deep CNN for Conditioner Upsampling</a></li></ul></li><li style="padding-top:8px"><a href="zotero://open-pdf/0_CNBV9JGN/2">3  Experiments</a><ul style="list-style-type: none; padding-left:12px"><li style="padding-top:4px"><a href="zotero://open-pdf/0_CNBV9JGN/2">3.1  Implementation Details</a></li><li style="padding-top:4px"><a href="zotero://open-pdf/0_CNBV9JGN/3">3.2  Objective evaluations</a></li><li style="padding-top:4px"><a href="zotero://open-pdf/0_CNBV9JGN/4">3.3  Subjective evaluations</a></li></ul></li><li style="padding-top:4px"><a href="zotero://open-pdf/0_CNBV9JGN/4">4  Conclusions</a></li><li style="padding-top:4px"><a href="zotero://open-pdf/0_CNBV9JGN/4">5  Acknowledgements</a></li><li style="padding-top:4px"><a href="zotero://open-pdf/0_CNBV9JGN/5">6  References</a></li></ul>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We replace the mel-spectrum upsampler in DiffWave with a deep CNN upsampler, which is trained to alter the degraded speech mel-spectrum to match that of the original speech
>
> [Page 1](zotero://open-pdf/library/items/UNL9XT66?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> an upsampler network, a diffusion embedding network, and residual learn-
>
> [Page 2](zotero://open-pdf/library/items/UNL9XT66?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ing blocks
>
> [Page 2](zotero://open-pdf/library/items/UNL9XT66?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In Diffwave, the upsampler network is used to increase the dimension of the input mel-spectrum to be the conditioner for speech waveform synthesis
>
> [Page 2](zotero://open-pdf/library/items/UNL9XT66?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a deep CNN upsampler, to replace the original one.
>
> [Page 2](zotero://open-pdf/library/items/UNL9XT66?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This is then fed through cross-stacked CNN layers and transpose layers to decrease the channel size while increasing the mel-spectrum dimension to match the output speech waveform’s dimension
>
> [Page 2](zotero://open-pdf/library/items/UNL9XT66?page=2)


%% Import Date: 2026-05-12T00:55:33.000+00:00 %%

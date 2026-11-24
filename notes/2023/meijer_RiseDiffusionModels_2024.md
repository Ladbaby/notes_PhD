---
Title: The Rise of Diffusion Models in Time-Series Forecasting
Tags:
  - survey
  - diffusion-model
  - time-series-forecasting
  - generative-ai
  - conditional-diffusion
ZoteroLink: zotero://open-pdf/library/items/ZTV6VTTS
FirstAuthor: Meijer, Caspar
Author: Chen, Lydia Y.;
Year: "2024"
ItemType: article
DOI: 10.48550/arXiv.2401.03006
Citekey: meijer_RiseDiffusionModels_2024
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the lack of comprehensive resources on diffusion models for time-series forecasting, this survey provides a chronological overview of 11 implementations, detailing their conditioning methods, theoretical foundations, and comparative effectiveness.

> [!cite]
> **Bibliography**:: Meijer, C., & Chen, L. Y. (2024). _The Rise of Diffusion Models in Time-Series Forecasting_ (arXiv:2401.03006). arXiv. [https://doi.org/10.48550/arXiv.2401.03006](https://doi.org/10.48550/arXiv.2401.03006)

> [!info]
> **Contribution**:: 扩散用于时序预测的综述

## Notes
>
>Comment: 23 pages, 10 figures, 12 tables, For complete LuaTeX source: https://github.com/Capsar/The-Rise-of-Diffusion-Models-in-Time-Series-Forecasting , Written by: Caspar Meijer, Supervised by: Lydia Y. Chen.


## Annotations
%% begin annotations %%


### Imported: 2024-01-18 2:40 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> discrete space
>
> [Page 6](zotero://open-pdf/library/items/ZTV6VTTS?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> continuous time
>
> [Page 6](zotero://open-pdf/library/items/ZTV6VTTS?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> even though the score-based generative modeling with SDEs is described in continuous time, the solutions are still solved iteratively
>
> [Page 6](zotero://open-pdf/library/items/ZTV6VTTS?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In traditional diffusion models, conditioning is typically introduced during the training process, as represented in equation (24). However, a novel approach introduces conditions during the inference stage by employing the concept of guidance
>
>> 我去，好有道理
>
> [Page 8](zotero://open-pdf/library/items/ZTV6VTTS?page=8) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SSSDS4 uses S4 models [89] instead of dilated convolutions or transformer layers
>
> [Page 17](zotero://open-pdf/library/items/ZTV6VTTS?page=17) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SSSDS4 has reduced the internal representation of shape (batch dim, diffusion dim, input channel dim, time dim) in CSDI to shape (batch dim, diffusion dim, time dim).
>
> [Page 17](zotero://open-pdf/library/items/ZTV6VTTS?page=17) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> At last, SSSDS4 only applies the diffusion process to the segments that need to be imputed, as this yields better results than applying the diffusion process to all segments
>
> [Page 17](zotero://open-pdf/library/items/ZTV6VTTS?page=17) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ODE method to enhance prediction speeds without compromising accuracy.
>
> [Page 23](zotero://open-pdf/library/items/ZTV6VTTS?page=23) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Continued investigation into the S4 layers [90] is encouraged, given their promising results in surpassing Transformers in foundation models
>
> [Page 23](zotero://open-pdf/library/items/ZTV6VTTS?page=23) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> modeling time-series as continuous functions with time-dependent noise
>
> [Page 23](zotero://open-pdf/library/items/ZTV6VTTS?page=23) 



%% end annotations %%

%% Import Date: 2024-01-18T14:40:28.307+08:00 %%

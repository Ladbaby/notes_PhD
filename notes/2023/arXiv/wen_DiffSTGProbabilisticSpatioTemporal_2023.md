---
Title: "DiffSTG: Probabilistic Spatio-Temporal Graph Forecasting with Denoising Diffusion Models"
Tags:
  - arXiv/2023
  - spatio-temporal-graph
  - denoising-diffusion-models
  - probabilistic-forecasting
  - uncertainty-modeling
ZoteroLink: zotero://open-pdf/library/items/3UHRQ9XW
FirstAuthor: Wen, Haomin
Author: Lin, Youfang; Xia, Yutong; Wan, Huaiyu; Zimmermann, Roger; Liang, Yuxuan;
Year: 2023
ItemType: webpage
DOI: 10.48550/arXiv.2301.13629
Citekey: wen_DiffSTGProbabilisticSpatioTemporal_2023
Journal: arXiv.org
rating: 2
---
> [!info]
> **TLDR**:: To address spatio-temporal graph forecasting’s inability to model intrinsic uncertainties, DiffSTG introduces a non-autoregressive framework using UGnet to capture complex dependencies and generate probabilistic multi-horizon predictions simultaneously.

> [!cite]
> **Bibliography**:: Wen, H., Lin, Y., Xia, Y., Wan, H., Zimmermann, R., & Liang, Y. (2023). DiffSTG: Probabilistic Spatio-Temporal Graph Forecasting with Denoising Diffusion Models. _arXiv.org_, . https://doi.org/10.48550/arXiv.2301.13629

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations



> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> inherently
>
>> 固有的
>
> [Page 1](zotero://open-pdf/library/items/3UHRQ9XW?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> de facto
>
>> 实际上存在的
>
> [Page 1](zotero://open-pdf/library/items/3UHRQ9XW?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Spatio-Temporal Graph Neural Networks (STGNN) have emerged as the dominant model in this research line. They resort to GNNs for modeling spatial correlations among nodes, and Temporal Convolutional Networks (TCN) or Recurrent Neural Networks (RNN) for capturing temporal dependencies
>
> [Page 1](zotero://open-pdf/library/items/3UHRQ9XW?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> which indicates a potential outbreaking of passenger flows in that region
>
>> 相比于给定值，这个模型会给出一个范围
>
> [Page 1](zotero://open-pdf/library/items/3UHRQ9XW?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ithout capturing the spatial correlations between different nodes
>
> [Page 2](zotero://open-pdf/library/items/3UHRQ9XW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> suffer notorious inefficiency due to their sequential nature, thereby posing a hurdle to long-term forecasting.
>
> [Page 2](zotero://open-pdf/library/items/3UHRQ9XW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> performs more accurate denoising in the reverse process by virtue of capturing ST dependencies
>
> [Page 2](zotero://open-pdf/library/items/3UHRQ9XW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> non-autoregressive fashion
>
> [Page 2](zotero://open-pdf/library/items/3UHRQ9XW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> generates multi-horizon predictions all at once
>
> [Page 2](zotero://open-pdf/library/items/3UHRQ9XW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> DiffSTG can effectively model the complex ST dependencies and intrinsic uncertainties within STG data
>
> [Page 2](zotero://open-pdf/library/items/3UHRQ9XW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> UGNet
>
> [Page 2](zotero://open-pdf/library/items/3UHRQ9XW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> modeling ST-dependencies
>
> [Page 2](zotero://open-pdf/library/items/3UHRQ9XW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> F : (xh; G) → [xTh+1, · · · , xTh+Tp ] := xp,
>
> [Page 3](zotero://open-pdf/library/items/3UHRQ9XW?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> min θ L(θ) = min θ Exall 0 ,  ∥ ∥ ∥  −  θ ( xall n , n|xall msk, G )∥ ∥ ∥ 2 2
>
> [Page 4](zotero://open-pdf/library/items/3UHRQ9XW?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Unet-based
>
> [Page 4](zotero://open-pdf/library/items/3UHRQ9XW?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> WaveNet-based
>
> [Page 4](zotero://open-pdf/library/items/3UHRQ9XW?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It adopts an Unet-like architecture in the temporal dimension to capture temporal dependencies at different granularities (e.g., 15 minutes or 30 minutes), and utilizes GNN to model the spatial correlations.
>
> [Page 4](zotero://open-pdf/library/items/3UHRQ9XW?page=4) 




%% Import Date: 2026-05-13T19:57:52.000+00:00 %%

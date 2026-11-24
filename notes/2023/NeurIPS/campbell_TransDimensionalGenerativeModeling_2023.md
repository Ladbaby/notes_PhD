---
Title: Trans-Dimensional Generative Modeling via Jump Diffusion Models
Tags:
  - NeurIPS/2023
  - generative-models
  - diffusion-model
  - jump-diffusion
  - variable-dimensionality
ZoteroLink: zotero://open-pdf/library/items/QW5QDL2I
FirstAuthor: Campbell, Andrew
Author: Harvey, William; Weilbach, Christian Dietrich; Bortoli, Valentin De; Rainforth, Tom; Doucet, Arnaud;
Year: "2023"
ItemType: conferencePaper
Conference: Thirty-seventh Conference on Neural Information Processing Systems
Citekey: campbell_TransDimensionalGenerativeModeling_2023
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of generating data with varying dimensionality, the authors introduce a jump diffusion process that jointly models state and dimension through dimension-destroying and dimension-creating dynamics.

> [!cite]
> **Bibliography**:: Campbell, A., Harvey, W., Weilbach, C. D., Bortoli, V. D., Rainforth, T., & Doucet, A. (2023). Trans-Dimensional Generative Modeling via Jump Diffusion Models. In _Thirty-seventh Conference on Neural Information Processing Systems_.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> jointly modeling the state and dimension of each datapoint.
>
> [Page 1](zotero://open-pdf/library/items/QW5QDL2I?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> molecular and video datasets
>
> [Page 1](zotero://open-pdf/library/items/QW5QDL2I?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> first sampling the number of dimensions from the empirical distribution obtained from the training data, and then sampling data using a fixed dimension diffusion model (FDDM) conditioned on this number of dimensions
>
> [Page 1](zotero://open-pdf/library/items/QW5QDL2I?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> , an unconditional diffusion model is trained that end-users can then easily and cheaply condition on their task of interest through guiding the generative diffusion process [3, 12–14] without needing to perform any further training or fine-tuning of the model on their task of interest
>
>> 扩散指引生成
>
> [Page 2](zotero://open-pdf/library/items/QW5QDL2I?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This can lead to incorrect generations for datasets where the dimension greatly affects the nature of the datapoint created, e.g. small molecules have completely different properties to large molecules.
>
> [Page 2](zotero://open-pdf/library/items/QW5QDL2I?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> autoregressive type models which generate dimensions sequentially
>
>> 在扩散的基础上，自回归地生成新的维度
>
> [Page 2](zotero://open-pdf/library/items/QW5QDL2I?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adds noise and removes dimensions
>
> [Page 2](zotero://open-pdf/library/items/QW5QDL2I?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> denoises and adds dimensions,
>
> [Page 2](zotero://open-pdf/library/items/QW5QDL2I?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> n components
>
>> 指的是点云里面可能包含多少个点？？？
>
> [Page 3](zotero://open-pdf/library/items/QW5QDL2I?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> process transitions to a different dimensional space with the new value for the process being drawn from a transition kernel Kt(Y|X)
>
> [Page 3](zotero://open-pdf/library/items/QW5QDL2I?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The rate at which jumps occur (jumps per unit time) is given by a rate function λt(X) : X → R≥0.
>
> [Page 3](zotero://open-pdf/library/items/QW5QDL2I?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Jump X′ t=  Xt with probability 1 − λt(Xt)dt Y ∼ Kt(Y|Xt) with probability λt(Xt)dt
>
> [Page 3](zotero://open-pdf/library/items/QW5QDL2I?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> When a jump occurs in the forward process, one component of the current state will be deleted. For example, one point in a point cloud or a single frame in a video is deleted
>
> [Page 3](zotero://open-pdf/library/items/QW5QDL2I?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> only one component is ever deleted
>
> [Page 3](zotero://open-pdf/library/items/QW5QDL2I?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It takes in the current value X, the new component yadd and an index i ∈ {1, . . . , n + 1} and inserts yadd into X at location i such that the resulting value Y = ins(X, yadd, i) has del(Y, i) = X
>
> [Page 4](zotero://open-pdf/library/items/QW5QDL2I?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The distribution of molecule sizes changes depending on these conditions
>
> [Page 8](zotero://open-pdf/library/items/QW5QDL2I?page=8)


%% Import Date: 2026-05-12T01:46:43.000+00:00 %%

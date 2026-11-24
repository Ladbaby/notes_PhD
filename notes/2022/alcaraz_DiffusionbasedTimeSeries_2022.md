---
Title: Diffusion-based Time Series Imputation and Forecasting with Structured State Space Models
Tags:
  - TMLR/2022
  - time-series
  - diffusion-model
  - state-space-models
  - imputation
ZoteroLink: zotero://open-pdf/library/items/PV4MT3I3
FirstAuthor: Alcaraz, Juan Lopez
Author: Strodthoff, Nils;
Year: "2022"
ItemType: journalArticle
Journal: Transactions on Machine Learning Research
Citekey: alcaraz_DiffusionbasedTimeSeries_2022
rating: 2
---
> [!info]
> **TLDR**:: To address missing value imputation in time series data, the paper proposes SSSD, a model combining conditional diffusion models with structured state space models to capture long-term dependencies and handle challenging blackout-missing scenarios.

> [!cite]
> **Bibliography**:: Alcaraz, J. L., & Strodthoff, N. (2022). Diffusion-based Time Series Imputation and Forecasting with Structured State Space Models. _Transactions on Machine Learning Research_, .

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (conditional) diffusion models
>
> [Page 1](zotero://open-pdf/library/items/PV4MT3I3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> structured state space models
>
> [Page 1](zotero://open-pdf/library/items/PV4MT3I3?page=1)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> modality
>
>> 模式
>
> [Page 1](zotero://open-pdf/library/items/PV4MT3I3?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> As these bands do not allow visually assessing the quality of individual imputations, we always additionally show a randomly selected single sample in orange
>
>> ？有你这么选择样本的？不应该取中间的值吗
>
> [Page 2](zotero://open-pdf/library/items/PV4MT3I3?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the noise of the diffusion process is introduced just to the regions to be imputed, which turns out to be superior to approaches proposed in the context of image inpainting
>
>> ?这能行？
>
> [Page 2](zotero://open-pdf/library/items/PV4MT3I3?page=2)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> and εθ(xt, t) is parameterized using a neural network, which is equivalent to earlier score-matching techniques
>
>> 预测噪声和预测score是等价的？
>
> [Page 3](zotero://open-pdf/library/items/PV4MT3I3?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> structured state-space model
>
> [Page 4](zotero://open-pdf/library/items/PV4MT3I3?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the formalism draws on a linear state space transition equation, connecting a one-dimensional input sequence u(t) to a one-dimensional output sequence y(t) via a N -dimensional hidden state x(t).
>
> [Page 4](zotero://open-pdf/library/items/PV4MT3I3?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> relation between input and output can be written as a convolution operation
>
> [Page 4](zotero://open-pdf/library/items/PV4MT3I3?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the resulting S4 layer parametrizes a shape-preserving mapping of data with shape (batch, model dimension, length dimension) and can therefore be used as a drop-in replacement for transformer, RNN, or one-dimensional convolution layers (with appropriate padding)
>
> [Page 4](zotero://open-pdf/library/items/PV4MT3I3?page=4)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> SaShiMi
>
>> 生鱼片？？？
>
> [Page 4](zotero://open-pdf/library/items/PV4MT3I3?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Third, we investigate CSDIS4, a modification of the CSDI (Tashiro et al., 2021) architecture, where we replace the transformer layer operating in the time direction by an S4 model. In this way, we aim to assess potential improvements of an architecture that is more adapted to the domain of time series.
>
>> 好家伙，直接改？
>
> [Page 5](zotero://open-pdf/library/items/PV4MT3I3?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> s a direct replacement for convolutional layers in the original Diffwave architecture
>
> [Page 5](zotero://open-pdf/library/items/PV4MT3I3?page=5)


%% Import Date: 2026-05-12T01:15:25.000+00:00 %%

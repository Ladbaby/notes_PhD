---
Title: "Diffusion-TS: Interpretable Diffusion for General Time Series Generation"
Tags:
  - ICLR/2023
  - time-series
  - diffusion-model
  - transformer
  - generative-models
  - multivariate-time-series
ZoteroLink: zotero://open-pdf/library/items/DAVD6TF6
Year: "2023"
ItemType: conferencePaper
Conference: The Twelfth International Conference on Learning Representations
Citekey: _DiffusionTSInterpretableDiffusion_2023b
rating: 2
---
> [!info]
> **TLDR**:: To address the lack of DDPM-based frameworks for general multivariate time series production, Diffusion-TS generates high-quality samples using an encoder-decoder Transformer with disentangled temporal representations and Fourier-based loss for direct sample reconstruction.

> [!cite]
> **Bibliography**::  (2023). Diffusion-TS: Interpretable Diffusion for General Time Series Generation. In _The Twelfth International Conference on Learning Representations_.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> using an encoder-decoder Transformer with disentangled temporal representations
>
> [Page 1](zotero://open-pdf/library/items/DAVD6TF6?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> train the model to directly reconstruct the sample instead of the noise in each diffusion step, combining a Fourier-based loss term
>
> [Page 1](zotero://open-pdf/library/items/DAVD6TF6?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> The second challenge lies in that the rich combinations of independent components like trend, seasonality, and local idiosyncrasy of a real-world time series are usually destroyed by gradually adding the noise to data in the diffusion process
>
>> 好好好 这观点很好
>
> [Page 1](zotero://open-pdf/library/items/DAVD6TF6?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> reconstruction-based sampling,
>
> [Page 2](zotero://open-pdf/library/items/DAVD6TF6?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> maintaining high degree of diversity and novelty
>
>> 你也能guidance？
>
> [Page 2](zotero://open-pdf/library/items/DAVD6TF6?page=2)

> [!quote|#ffd400] Image
>
>> 这个对seasonal trend的建模还可以
>
> [Page 2](zotero://open-pdf/library/items/DAVD6TF6?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> polynomial regressor
>
> [Page 4](zotero://open-pdf/library/items/DAVD6TF6?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we capture the seasonal component of the time series in Fourier synthetic layers using Fourier bases
>
> [Page 4](zotero://open-pdf/library/items/DAVD6TF6?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> top K amplitudes and K is a hyperparameter
>
>> 大概可以理解为一种基于振幅大小的去噪？只保留振幅大的
>
> [Page 4](zotero://open-pdf/library/items/DAVD6TF6?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Fourier-based loss term is beneficial for the accurate reconstruction of the time series signals
>
>> 傅里叶变换加到损失里
>
> [Page 4](zotero://open-pdf/library/items/DAVD6TF6?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> modeled x0 is conditioned on targets y
>
> [Page 5](zotero://open-pdf/library/items/DAVD6TF6?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Dhariwal & Nichol (2021) shows a gradient-guided way to overcome this limitation
>
>> 这文章讨论了classifier guidance
>
> [Page 5](zotero://open-pdf/library/items/DAVD6TF6?page=5)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Cold start refers to training model when little or no data is available
>
>> 第一次知道
>
> [Page 9](zotero://open-pdf/library/items/DAVD6TF6?page=9)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We use only 10/25/50/75% of the time series data in each dataset as training data respectively. Then we remove time series values from the rest dataset, leading to 10% ∼ 20% missing values for a data point. After cold starts on the regular part of the dataset, we leverage the model to impute these irregular time series then continue training by incorporating them into the training set. We call this process irregular training
>
>> 啊？大概就是用规则数据集来模拟不规则
>
> [Page 9](zotero://open-pdf/library/items/DAVD6TF6?page=9)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> in shorter time
>
>> 速度慢是缺陷
>
> [Page 9](zotero://open-pdf/library/items/DAVD6TF6?page=9)


%% Import Date: 2026-05-12T01:32:19.000+00:00 %%

---
Title: "Diffusion-TS: Interpretable Diffusion for General Time Series Generation"
Tags:
  - diffusion-model
  - time-series-generation
  - ICLR/2024
  - denoising-diffusion
  - transformer
ZoteroLink: zotero://open-pdf/library/items/DAVD6TF6
Year: "2023"
ItemType: conferencePaper
Citekey: _DiffusionTSInterpretableDiffusion_2023b
motivation: 现有的无条件的扩散生成尝试较少且存在不少问题
Conference: The Twelfth International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address the lack of general time series generation in diffusion models, this paper introduces Diffusion-TS, a Transformer-based framework using disentangled temporal representations and Fourier-based loss for high-quality multivariate synthesis.

> [!cite]
> **Bibliography**:: _Diffusion-TS: Interpretable Diffusion for General Time Series Generation_. (2023, October 13). The Twelfth International Conference on Learning Representations. [https://openreview.net/forum?id=4h1apFjO99](https://openreview.net/forum?id=4h1apFjO99)

> [!info]
> **Contribution**:: 扩散+seasonal-trend+guidance

## Notes

ICLR 2024 poster，得分 856

和我构思的模型非常接近

backbone 的结构：

- transformer 对噪声 $x_t$, position 进行 encode
- 拆成两个后续的层：

	- trend: 就是正常的分解出 trend
	- seasonal: ==傅里叶变换后，取振幅最大的前 $K$ 个，用以过滤噪声==

- 两部分的输出最终合成 $\hat{x_0}$

其他的一些调整：

- 直接预测时序，而非预测噪声（感觉不是什么好做法
- 损失函数多加了一项频域的损失（通过傅里叶变换）

### guidance

3.4 节应该是目前威胁最大的部分，因为这篇文章展示了 classifier guidance 那种注入 gradient 的想法，可以说是一种直接的竞争

目前的 idea 和他的区别在于：

- 我要用的是 DDPM++ 而不是 DDPM
- backbone 不需要进行 decomposition
- condition 部分进行 decomposition

总之，希望构建出一个非常合适的 condition，让模型能够在不直接进行 decomposition 的情况下，也能得到较好的效果

## Annotations
%% begin annotations %%


### Imported: 2023-12-25 10:27 am


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
> ![[attachments/_DiffusionTSInterpretableDiffusion_2023b/image-2-x189-y214.png]]
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



%% end annotations %%

> [!quote|#ffd400] Image
>
>> 这个对seasonal trend的建模还可以
>
> [Page 2](zotero://open-pdf/library/items/DAVD6TF6?page=2)


%% Import Date: 2026-05-12T02:20:54.000+00:00 %%

---
Tags:
  - NeurIPS/2021
  - time-series-imputation
  - score-based-diffusion
  - healthcare
  - air-quality
Title: "CSDI: Conditional Score-based Diffusion Models for Probabilistic Time Series Imputation"
ZoteroLink: zotero://open-pdf/library/items/8LM8VTRU
FirstAuthor: Tashiro, Yusuke
Author: Song, Jiaming; Song, Yang; Ermon, Stefano;
Year: "2021"
ItemType: conferencePaper
Volume: "34"
Publisher: Curran Associates, Inc.
Page: 24804–24816
Citekey: tashiro_CSDIConditionalScorebased_2021
motivation: 第一个拿扩散来做时序填补的
Conference: Advances in Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To address missing value imputation in time series, the authors propose CSDI, a conditional score-based diffusion model explicitly trained to exploit correlations between observed data.

> [!Cite]
> Tashiro, Y., Song, J., Song, Y., & Ermon, S. (2021). CSDI: Conditional Score-based Diffusion Models for Probabilistic Time Series Imputation. _Advances in Neural Information Processing Systems_, _34_, 24804–24816. [https://proceedings.neurips.cc/paper/2021/hash/cfe8504bda37b575c70ee1a8276f3486-Abstract.html](https://proceedings.neurips.cc/paper/2021/hash/cfe8504bda37b575c70ee1a8276f3486-Abstract.html)


>[!Synth]
>**Contribution**:: 扩散填补


![](Pasted%20image%2020231127205935.png)
## Notes

时序填补任务

  

看了会模型结构，感觉确实没有什么特别的，只是把扩散模型迁移到了填补任务而已

  

## Implementation

  

鉴于填补的目标和拥有的数据的维度不同，我们采用 zero-padding 来填上空缺的部分

  

除此之外，为了学习 feature 之间的关联和 时间 之间的关联，采用了 Temporal Transformer layer 和 Feature Transformer layer 两个层来对输入扩散模型之前的数据进行学习

  

## 看代码

  

### 关于 `time_embedding` 函数

  

The function `time_embedding` appears to be implementing positional encoding for time series data. Positional encoding is commonly used in Transformer-based models, like the one used in the original Transformer architecture and its variants, to provide information about the position of elements in a sequence. It allows the model to distinguish between different positions in the input sequence since Transformers do not have an inherent sense of order.

  

In the context of natural language processing, positional encoding is used to help the Transformer understand the order of words in a sentence. Similarly, in your time series model, this function is used to embed temporal information into the data so that the model can differentiate between different time steps.

  

Here's a breakdown of the function:

  

1.  `pos`: This is the input representing the positions (or time steps) of your time series data. It seems to be a tensor of shape `(batch_size, sequence_length)`, where `batch_size` is the number of sequences in your batch, and `sequence_length` is the length of each sequence.

2.  `d_model`: This parameter specifies the dimension of the embedding. It's set to 128 by default.

3.  `pe`: This is the positional encoding tensor that will be generated and returned by the function. It's initialized with zeros and has a shape of `(batch_size, sequence_length, d_model)`.

4.  `position`: This line `position = pos.unsqueeze(2)` is reshaping the `pos` tensor to add an extra dimension at axis 2. This is done to match the dimensions of the `div_term` tensor that will be used for sinusoidal calculations.

5.  `div_term`: This tensor is used to calculate the sine and cosine values for the positional encoding. It's a tensor of shape `(d_model // 2,)` where each element corresponds to a frequency value. The frequencies decrease exponentially as you move along the tensor.

6.  The lines `pe[:, :, 0::2] = torch.sin(position * div_term)` and `pe[:, :, 1::2] = torch.cos(position * div_term)` apply the sine and cosine functions to different slices of the `pe` tensor. These slices correspond to different dimensions of the embedding, and the sine and cosine values are applied to introduce distinct patterns for different positions.

  

The use of sine and cosine functions, along with the frequency modulation from `div_term`, is a common technique to create distinct positional encodings that capture the sequential order of the data. By adding these positional encodings to your input data, the model can incorporate temporal information into its understanding of the data, even though Transformers inherently lack this capability.




## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:04 pm


> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Unlike existing score-based diffusion models, the reverse process can take observations (on the top left of the figure) as a conditional input, allowing the model to exploit information in the observations for denoising
>
> [Page 2](zotero://open-pdf/library/items/852Y3JIS?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> We utilize an attention mechanism to capture the temporal and feature dependencies of time series
>
> [Page 2](zotero://open-pdf/library/items/852Y3JIS?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> We propose conditional score-based diffusion models for probabilistic imputation (CSDI), and implement CSDI for time series imputation. To train the conditional diffusion model, we develop a self-supervised training method. • We empirically show that CSDI improves the continuous ranked probability score (CRPS) by 40-65% over existing probabilistic methods on healthcare and environmental data. Moreover, deterministic imputation with CSDI decreases the mean absolute error (MAE) by 5-20% compared to the state-of-the-art methods developed for deterministic imputation. • We demonstrate that CSDI can also be applied to time series interpolations and probabilistic forecasting, and is competitive with existing baselines designed for these tasks.
>
> [Page 2](zotero://open-pdf/library/items/852Y3JIS?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> estimate the true conditional data distribution q(xta 0 | xco 0 ) with a model distribution pθ (xta 0 | xco 0 )
>
> [Page 4](zotero://open-pdf/library/items/852Y3JIS?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> model the conditional distribution p(xta t−1 | xta t , xco 0 ) without approximations
>
> [Page 4](zotero://open-pdf/library/items/852Y3JIS?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> the conditional model is reduced to the unconditional one under no conditional observations and can also be used for data generation.
>
> [Page 4](zotero://open-pdf/library/items/852Y3JIS?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> The observed values are separated into red imputation targets xta 0 and blue conditional observations xco 0
>
> [Page 5](zotero://open-pdf/library/items/852Y3JIS?page=5) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Random strategy
>
> [Page 5](zotero://open-pdf/library/items/852Y3JIS?page=5) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Historical strategy
>
> [Page 5](zotero://open-pdf/library/items/852Y3JIS?page=5) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Mix strategy
>
> [Page 6](zotero://open-pdf/library/items/852Y3JIS?page=6) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Test pattern strategy
>
> [Page 6](zotero://open-pdf/library/items/852Y3JIS?page=6) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> K features
>
> [Page 6](zotero://open-pdf/library/items/852Y3JIS?page=6) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> L length
>
> [Page 6](zotero://open-pdf/library/items/852Y3JIS?page=6) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> temporal Transformer layer takes tensors with (1, L, C) shape as inputs and learns temporal dependency. The feature Transformer layer takes tensors with (K, 1, C) shape as inputs and learns feature dependency
>
> [Page 6](zotero://open-pdf/library/items/852Y3JIS?page=6) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> applying zero padding
>
>> 描述如何处理训练时候挖掉的值
>
> [Page 6](zotero://open-pdf/library/items/852Y3JIS?page=6) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> we utilize a two dimensional attention mechanism in each residual layer instead of a convolution architecture
>
> [Page 6](zotero://open-pdf/library/items/852Y3JIS?page=6) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> median values of imputations are shown as the line and 5% and 95% quantiles are shown as the shade.
>
> [Page 8](zotero://open-pdf/library/items/852Y3JIS?page=8) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Since the dataset has no ground-truth, we randomly choose 10/50/90% of time points and use observed values at these time points as ground-truth on the test data.
>
> [Page 9](zotero://open-pdf/library/items/852Y3JIS?page=9) 



%% end annotations %%

> [!quote|#fff066] <mark style="background-color: #fff066">Highlight</mark>
> "linear attention transformer"
>
> [Page 17](zotero://open-pdf/library/items/8LM8VTRU?page=17)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the minimum noise level β1 = 0.0001, and the maximum noise level βT = 0.5
>
> [Page 18](zotero://open-pdf/library/items/8LM8VTRU?page=18)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> add noise to both the target and the conditional observations xco
>
> [Page 4](zotero://open-pdf/library/items/852Y3JIS?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the added noise can harm useful information in the observations
>
>> 把 condition 上也加了噪声，就不好了
>
> [Page 4](zotero://open-pdf/library/items/852Y3JIS?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we use time embedding of s = {s1:L} to learn the temporal dependency
>
> [Page 7](zotero://open-pdf/library/items/852Y3JIS?page=7)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> 128-dimensions
>
> [Page 7](zotero://open-pdf/library/items/852Y3JIS?page=7)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> categorical feature embedding for K features, where the dimension is 16.
>
> [Page 7](zotero://open-pdf/library/items/852Y3JIS?page=7)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The processed dataset contains around 80% missing values. Since the dataset has no ground-truth, we randomly choose 10/50/90% of observed values as ground-truth on the test data
>
> [Page 7](zotero://open-pdf/library/items/852Y3JIS?page=7)


%% Import Date: 2026-05-12T00:47:46.000+00:00 %%

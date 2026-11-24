---
Title: "CoST: Contrastive Learning of Disentangled Seasonal-Trend Representations for Time Series Forecasting"
Tags:
  - ICLR/2022
  - time-series-forecasting
  - contrastive-learning
  - seasonal-trend-decomposition
  - representation-learning
ZoteroLink: zotero://open-pdf/library/items/VM54XIH7
FirstAuthor: Woo, Gerald
Author: Liu, Chenghao; Sahoo, Doyen; Kumar, Akshat; Hoi, Steven;
Year: "2021"
ItemType: conferencePaper
Citekey: woo_CoSTContrastiveLearning_2021
motivation: 认为先解构出特征表达，再进行拟合是更加合理的
Conference: International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address the limitations of end-to-end training for long sequence time series forecasting, this paper proposes CoST, which uses contrastive learning in both time and frequency domains to extract disentangled seasonal and trend representations for improved prediction.

> [!cite]
> **Bibliography**:: Woo, G., Liu, C., Sahoo, D., Kumar, A., & Hoi, S. (2021, October 6). _CoST: Contrastive Learning of Disentangled Seasonal-Trend Representations for Time Series Forecasting_. International Conference on Learning Representations

> [!info]
> **Contribution**:: 对比学习+seasonal-trend做预测，有和其它模型结合的可能

![](Pasted%20image%2020231210110136.png)

![](Pasted%20image%2020231210105124.png)
## Notes

有和其他模型结合的可能性

动机是认为先学习特征表示，再进行简单的拟合，会比直接拟合效果更加出色。具体的实现是用了**对比学习**（从 CV 迁移）

> 在 rebuttal 里，作者认为对比学习有利于区分错误样本，不会像 seq-to-seq 一样

对比学习的具体过程如下：

- 由于trend $T$、season $S$ 在整个时序受干扰的时候，拥有不变性，但错误 $E$ 会受到干扰，所以通过施加 scale, shift and jitter 三种不同的 intervention 作为数据增强，可以进行一种 "proxy contrastive learning" 任务
- 通过施加干扰实现的数据增强，然后解构出 seasonal 和 trend 的部分，最后还原的 $X^{*}$ 就是干净样本

至于具体的模型结构的话，从上面的结构图也可以看出：

- 首先通过 backbone 来 encode
- 同样的 embedding 分别交给 seasonal 和 trend 的解构器：
	- trend 这边，有一系列并行的不同大小的卷积核，最后通过 average pool 合到一起
	- seasonal 这边，标准的 FFT 过后通过一个线性层学习（每个频率一个权重），然后 iFFT

损失函数包含 trend 和 seasonal 两个大部分，不过 seasonal 这边有个小设计，包含了 amplitude 和 phase 两个组成部分的损失，理由是为了避免损失里出现 complex number：

$$
\mathcal{L}=\mathcal{L}_{\mathrm{time}}+{\frac{\alpha}{2}}(\mathcal{L}_{\mathrm{amp}}+\mathcal{L}_{\mathrm{phase}}),
$$

> 根据曾坤的说法，因为傅里叶变换得到的结果是复数，所以有很多种做法可以
## Annotations
%% begin annotations %%


### Imported: 2023-12-10 10:46 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> representation learning
>
> [Page 1](zotero://open-pdf/library/items/VM54XIH7?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> we argue that a more promising paradigm for time series forecasting, is to first learn disentangled feature representations, followed by a simple regression fine-tuning step
>> 说花精力学习特征表示，再进行简单的拟合更加有效？
>
> [Page 1](zotero://open-pdf/library/items/VM54XIH7?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inductive biases
>
> [Page 2](zotero://open-pdf/library/items/VM54XIH7?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> frequency domain contrastive loss to encourage discriminative seasonal representations
>
> [Page 2](zotero://open-pdf/library/items/VM54XIH7?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Formally, we aim to learn a nonlinear feature embedding function V = f (X), where X ∈ Rh×m and V ∈ Rh×d, to project m-dimensional raw signals into a d-dimensional latent space for each timestamp
>
>> 感觉有和time index结合的可能性
>
> [Page 2](zotero://open-pdf/library/items/VM54XIH7?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a smaller window leads to under-fitting, while a larger model leads to over-fitting and over-parameterization issues
>
>> 原来lookback window的长度很重要
>
> [Page 4](zotero://open-pdf/library/items/VM54XIH7?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Each expert is implemented as a 1d causal convolution with d input channels and dT output channels, where the kernel size of the i-th expert is 2i
>
> [Page 4](zotero://open-pdf/library/items/VM54XIH7?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> contrastive learning
>
> [Page 4](zotero://open-pdf/library/items/VM54XIH7?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> i) how can we support intra-frequency interactions (between feature dimensions) which allows the representations to encode periodic information more easily, and, ii) what kind of learning signal is required to learn representations which are able to discriminate between different seasonality patterns?
>
>> 频域学习的两个问题
>
> [Page 5](zotero://open-pdf/library/items/VM54XIH7?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> he learnable Fourier layer, which enables frequency domain interactions, is implemented via a perelement linear layer
>
> [Page 5](zotero://open-pdf/library/items/VM54XIH7?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To overcome the issue of constructing a loss function with complex-valued representations, each frequency can be uniquely represented by its amplitude and phase representations,
>
> [Page 5](zotero://open-pdf/library/items/VM54XIH7?page=5) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> we argue that a more promising paradigm for time series forecasting, is to first learn disentangled feature representations, followed by a simple regression fine-tuning step
>
> [Page 1](zotero://open-pdf/library/items/VM54XIH7?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> As E is not predictable, the optimal prediction can be achieved if we are able to uncover X? which only depends on T and S.
>
> [Page 3](zotero://open-pdf/library/items/VM54XIH7?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we can see that the seasonal and trend modules do not influence or inform each other.
>
> [Page 3](zotero://open-pdf/library/items/VM54XIH7?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we construct a proxy contrastive learning task inspired by Mitrovic et al. (2020). Specifically, we use data augmentations as interventions on the error E and learn invariant representations of T and S via contrastive learning
>
> [Page 3](zotero://open-pdf/library/items/VM54XIH7?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> scale, shift and jitter
>
> [Page 3](zotero://open-pdf/library/items/VM54XIH7?page=3)


%% Import Date: 2026-05-12T01:01:08.000+00:00 %%

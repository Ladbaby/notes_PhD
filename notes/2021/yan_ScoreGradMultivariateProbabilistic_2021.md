---
Title: "ScoreGrad: Multivariate Probabilistic Time Series Forecasting with Continuous Energy-based Generative Models"
Tags:
  - arXiv/2021
  - time-series-forecasting
  - energy-based-models
  - score-based-generative-models
  - multivariate-probabilistic
ZoteroLink: zotero://open-pdf/library/items/ZPXBG9VE
FirstAuthor: Yan, Tijin
Author: Zhang, Hongwei; Zhou, Tong; Zhan, Yufeng; Xia, Yuanqing;
Year: "2021"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2106.10121
Citekey: yan_ScoreGradMultivariateProbabilistic_2021
rating: 2
---
> [!info]
> **TLDR**:: To overcome the limitations of functional form constraints and hyperparameter sensitivity in existing generative time series models, the authors propose ScoreGrad, a probabilistic forecasting framework based on continuous energy-based generative models and conditional stochastic differential equations.

> [!cite]
> **Bibliography**:: Yan, T., Zhang, H., Zhou, T., Zhan, Y., & Xia, Y. (2021). ScoreGrad: Multivariate Probabilistic Time Series Forecasting with Continuous Energy-based Generative Models. https://doi.org/10.48550/arXiv.2106.10121

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: 12 pages, 10 figures.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the recorded data from different sensors can form multivariate time series data
>
> [Page 1](zotero://open-pdf/library/items/ZPXBG9VE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sensitive to the noise scales
>
> [Page 1](zotero://open-pdf/library/items/ZPXBG9VE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the number of steps used for noise injection needs to be carefully designed
>
> [Page 1](zotero://open-pdf/library/items/ZPXBG9VE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the sampling methods for generation process in DDPM can be further extended.
>
> [Page 1](zotero://open-pdf/library/items/ZPXBG9VE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the first continuous energy-based generative model used for multivariate time series forecasting.
>
> [Page 1](zotero://open-pdf/library/items/ZPXBG9VE?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> perturbing data with various levels of noise and trains a Noise Conditioned Score Network (NCSN) sθ(x, σ) to estimate scores corresponding to all noise levels
>
> [Page 2](zotero://open-pdf/library/items/ZPXBG9VE?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SDE can be reversed if ∇x log pt(x) at each intermediate time step is known
>
> [Page 3](zotero://open-pdf/library/items/ZPXBG9VE?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> exploding variance
>
> [Page 3](zotero://open-pdf/library/items/ZPXBG9VE?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the variance is always upper bounded by the corresponding VP SDE
>
> [Page 3](zotero://open-pdf/library/items/ZPXBG9VE?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The trained score network can be used to construct reversetime SDE and use numerical methods to sample from p0. [10] also proposes predictor-corrector (PC) methods for sampling,
>
>> score-based 的原文提出的
>
> [Page 3](zotero://open-pdf/library/items/ZPXBG9VE?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> iterative forecasting strategy is adopted for given prediction time steps
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Ft corresponds to hidden state ht−1 if recurrent neural networks like RNN, GRU are used.
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> What’s more, the iterative forecasting strategy in Eq. 13 can be converted to a conditional prediction problem in Eq. 15.
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Ft is used as a conditioner for SDE based score matching models at each time step.
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> If the conditional score function ∇x log pts (xt|Ft) is known at each intermediate time step, the reverse continuous-time SDE can be solved and we can generate conditional samples with numerical SDE solvers
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In this paper, the conditional score function is implemented with a neural network
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> he conditioned score network is designed to have 8 residual blocks and the structure of a single block is shown in Fig. 3
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> dilated
>
>> 扩张
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> hen one part of output serves as output of the block and the othe
>
> [Page 4](zotero://open-pdf/library/items/ZPXBG9VE?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> 5 one is summed up with skip-connection input and then used as the input of the next block.
>
> [Page 5](zotero://open-pdf/library/items/ZPXBG9VE?page=5)

> [!quote|#ffd400] Image
>
> [Page 5](zotero://open-pdf/library/items/ZPXBG9VE?page=5)

> [!quote|#ff6666] <mark style="background-color: #ff6666">Highlight</mark>
> continuous
>
>> 为啥强调连续？
>
> [Page 5](zotero://open-pdf/library/items/ZPXBG9VE?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> As for sampler, it can be designed based on predictorcorrector (PC) samplers as shown in [10]
>
> [Page 5](zotero://open-pdf/library/items/ZPXBG9VE?page=5)

> [!quote|#ffd400] Image
>
> [Page 5](zotero://open-pdf/library/items/ZPXBG9VE?page=5)


%% Import Date: 2026-05-12T00:55:18.000+00:00 %%

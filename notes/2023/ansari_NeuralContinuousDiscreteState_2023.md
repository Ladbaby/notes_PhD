---
Title: Neural Continuous-Discrete State Space Models for Irregularly-Sampled Time Series
Tags:
  - arXiv/2023
  - state-space-models
  - irregular-time-series
  - continuous-time
  - missing-data
ZoteroLink: zotero://open-pdf/library/items/8J2DL6HY
FirstAuthor: Ansari, Abdul Fatir
Author: Heng, Alvin; Lim, Andre; Soh, Harold;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2301.11308
Citekey: ansari_NeuralContinuousDiscreteState_2023
rating: 2
---
> [!info]
> **TLDR**:: To address irregularly sampled time series with missing observations, the Neural Continuous-Discrete State Space Model disentangles recognition from dynamics using auxiliary variables for efficient Bayesian inference and improved imputation and forecasting.

> [!cite]
> **Bibliography**:: Ansari, A. F., Heng, A., Lim, A., & Soh, H. (2023). Neural Continuous-Discrete State Space Models for Irregularly-Sampled Time Series. https://doi.org/10.48550/arXiv.2301.11308

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: ICML 2023 Camera Ready Version; Code available at https://github.com/clear-nus/NCDSSM.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> observations, yk,
>
> [Page 1](zotero://open-pdf/library/items/8J2DL6HY?page=1)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> Amortized
>
>> 摊销（分期付款
>
> [Page 1](zotero://open-pdf/library/items/8J2DL6HY?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> auxiliary variables
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> accurate inference algorithm that performs amortized inference for auxiliary variables
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Itˆ o SDE
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> state
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Brownian motion
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> f (·, t) : Rm → Rm is the drift function and G(·, t) : Rm → Rm×m is the diffusion function at time t.
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The evolution of the marginal density of the state, pt(zt)
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> noisy transformations (called measurements or observations), atk ∈ Rd, of the state, ztk , at discrete timesteps tk ∈ {t0, . . . , tT }
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> nd xtk (or xk for short) to represent its value at the time tk associated with the k-th discrete timestep
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (Continuous-Discrete State Space Model). A continuous-discrete state space model is one where the latent state, zt, follows the continuous-time dynamics governed by Eq. (1) and the measurement, ak, at time tk is obtained from the measurement model p(ak|ztk ).
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> These are known as the filtering and smoothing problems
>
> [Page 2](zotero://open-pdf/library/items/8J2DL6HY?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the latent state, zt ∈ Rm, evolves in continuous time, emitting linear-Gaussian auxiliary variables, at ∈ Rh, which in turn emit observations, yt ∈ Rd
>
> [Page 3](zotero://open-pdf/library/items/8J2DL6HY?page=3)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> succinct
>
>> 简明的
>
> [Page 3](zotero://open-pdf/library/items/8J2DL6HY?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (i) it allows disentangling representation learning (or recognition) from dynamics (encoded by zt) and (ii) it enables the use of arbitrary decoders to model the conditional distribution p(yt|at)
>
> [Page 3](zotero://open-pdf/library/items/8J2DL6HY?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We model the initial (prior) distribution of the states as a multivariate Gaussian distribution,
>
> [Page 3](zotero://open-pdf/library/items/8J2DL6HY?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> multivariate Gaussian distributions
>
> [Page 3](zotero://open-pdf/library/items/8J2DL6HY?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we split our inference procedure into two inference steps: (i) for auxiliary variables and (ii) for states
>
> [Page 4](zotero://open-pdf/library/items/8J2DL6HY?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Given the variational distribution qφ(a0:T |y0:T ) in Eq. (14), we can draw samples,  ̃ a0:T ∼ qφ(a0:T |y0:T ), from it.
>
> [Page 4](zotero://open-pdf/library/items/8J2DL6HY?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sequential Bayesian inference (i.e., filtering and smoothing)
>
> [Page 6](zotero://open-pdf/library/items/8J2DL6HY?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> unconditional generative model
>
> [Page 6](zotero://open-pdf/library/items/8J2DL6HY?page=6)


%% Import Date: 2026-05-12T01:55:29.000+00:00 %%

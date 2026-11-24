---
Title: Modeling Irregular Time Series with Continuous Recurrent Units
Tags:
  - ICML/2022
  - irregular-time-series
  - continuous-recurrent-units
  - recurrent-neural-network
  - sequence-modeling
ZoteroLink: zotero://open-pdf/library/items/FQQR5KGA
FirstAuthor: Schirmer, Mona
Author: Eltayeb, Mazin; Lessmann, Stefan; Rudolph, Maja;
Year: "2022"
ItemType: conferencePaper
Citekey: schirmer_ModelingIrregularTime_2022
motivation: 让RNN更好建模不规则的时间间隔
Conference: International Conference on Machine Learning
Publisher: PMLR
Page: 19388-19405
rating: 2
---

> [!info]
> **TLDR**:: To address the limitation of standard RNNs in handling irregular observation intervals, the paper introduces continuous recurrent units that model hidden states via linear stochastic differential equations and closed-form Kalman filter computations.

> [!cite]
> **Bibliography**:: Schirmer, M., Eltayeb, M., Lessmann, S., & Rudolph, M. (2022). Modeling Irregular Time Series with Continuous Recurrent Units. International Conference on Machine Learning (ICML), 19388–19405.

> [!info]
> **Contribution**:: ODE 换 SDE

![](Pasted%20image%2020231207100309.png)
## Notes

拿 RNN 做不规则的文章，具体思路见 Figure 1

输入->encode->隐空间表示->通过卡尔曼滤波得到隐状态->decode

说 RNN 其实也是假定输入是均匀的，如果没猜错的话这里用了 encode 来解决

感觉就是 ODE 系列的方法，只不过换成了 SDE
## Annotations
%% begin annotations %%


### Imported: 2023-12-07 9:50 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> continuous recurrent units (CRUs)
>
> [Page 1](zotero://open-pdf/library/items/E9V3A9SW?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> modern RNNs typically assume regular sampling rates
>
> [Page 1](zotero://open-pdf/library/items/E9V3A9SW?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> First, a probabilistic state space provides an explicit notion of uncertainty for an uncertainty-driven gating mechanism and for confidence evaluation of predictions.
>
> [Page 1](zotero://open-pdf/library/items/E9V3A9SW?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Second, as the Kalman filter is the optimal solution for the linear filtering problem (Kalman, 1960), the gating
>
> [Page 1](zotero://open-pdf/library/items/E9V3A9SW?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> mechanism is optimal in a locally linear state space
>
> [Page 2](zotero://open-pdf/library/items/E9V3A9SW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Third, the latent state at any point in time can be resolved analytically, therefore bypassing the need for numerical integration techniques or variational approximations.
>
> [Page 2](zotero://open-pdf/library/items/E9V3A9SW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Neural ODE approaches typically rely on a numerical ODE solver
>
> [Page 2](zotero://open-pdf/library/items/E9V3A9SW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> but generally rely on variational approximations and numerical solvers
>
> [Page 2](zotero://open-pdf/library/items/E9V3A9SW?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> These models are typically quite large
>
> [Page 3](zotero://open-pdf/library/items/E9V3A9SW?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The recursive computations of the CRU can be derived using the continuous-discrete Kalman filter (Jazwinski, 1970) and are in closed form
>
> [Page 3](zotero://open-pdf/library/items/E9V3A9SW?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> latent state z ∈ RM of a CRU has continuous dynamics,
>
> [Page 3](zotero://open-pdf/library/items/E9V3A9SW?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> latent observation noise σobs t
>
> [Page 3](zotero://open-pdf/library/items/E9V3A9SW?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The mean and variance of the latent state is inferred using the predict and update step of the continuous-discrete Kalman filter (red)
>
> [Page 4](zotero://open-pdf/library/items/E9V3A9SW?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Given the latent observations, the posterior distribution of the latent state (Eqn. (5)) is computed recursively, alternating between a predict and an update step
>
> [Page 4](zotero://open-pdf/library/items/E9V3A9SW?page=4) 



%% end annotations %%

%% Import Date: 2023-12-07T09:50:52.830+08:00 %%

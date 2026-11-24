---
Title: Neural Controlled Differential Equations for Irregular Time Series
Tags:
  - NeurIPS/2020
  - highly-cited
  - irregular-time-series
  - neural-cde
  - continuous-time
ZoteroLink: zotero://open-pdf/library/items/ZFE4CM5B
FirstAuthor: Kidger, Patrick
Author: Morrill, James; Foster, James; Lyons, Terry;
Year: 2020
ItemType: conferencePaper
Citekey: kidger_NeuralControlledDifferential_2020
motivation: 改进ODE
Publisher: Curran Associates, Inc.
Conference: Advances in Neural Information Processing Systems
Volume: 33
Page: 6696–6707
rating: 2
---

> [!info]
> **TLDR**:: To address neural ODEs' inability to adjust trajectories based on subsequent observations, this paper introduces neural controlled differential equations that leverage controlled differential equation mathematics to model partially-observed irregularly-sampled time series with memory-efficient backpropagation.

> [!cite]
> **Bibliography**:: Kidger, Patrick, et al. "Neural controlled differential equations for irregular time series." Advances in Neural Information Processing Systems 33 (2020): 6696-6707.

> [!info]
> **Contribution**:: CDE

![](Pasted%20image%2020231128211426.png)
## Notes
>
>Comment: Accepted at NeurIPS 2020 (Spotlight).

ODE 之前的限制是：

> the solution to an ordinary differential equation is determined by its initial condition, and there is no mechanism for adjusting the trajectory based on subsequent observations.

Figure 1 里提供了一种直观对比，但是 Path $X$ 到底是怎么保证平滑的这就有点奇怪了

## 缺点

- 速度慢：甚至比 RNN 慢 5 倍
- 参数的数量很容易变得非常多
- 无法衡量不确定性

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 9:07 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the solution to an ordinary differential equation is determined by its initial condition, and there is no mechanism for adjusting the trajectory based on subsequent observations
>
> [Page 1](zotero://open-pdf/library/items/7FG6X957?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> in the field of rough analysis
>
> [Page 2](zotero://open-pdf/library/items/7FG6X957?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> controlled differential equations
>
> [Page 2](zotero://open-pdf/library/items/7FG6X957?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Just as Neural ODEs are the continuous analogue of a ResNet, the Neural CDE is the continuous analogue of an RNN
>
> [Page 2](zotero://open-pdf/library/items/7FG6X957?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> As x is often assumed to be a discretisation of an underlying process, observed only through x, then X is an approximation to this underlying process
>
> [Page 3](zotero://open-pdf/library/items/7FG6X957?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The essential difference is that equation (3) is driven by the data process X, whilst equation (1) is driven only by the identity function ι : R → R. In this way, the Neural CDE is naturally adapting to incoming data, as changes in X change the local dynamics of the system
>
> [Page 3](zotero://open-pdf/library/items/7FG6X957?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adjoint backpropagation
>
> [Page 4](zotero://open-pdf/library/items/7FG6X957?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Neural CDEs were still roughly fives times slower than RNN models
>
> [Page 8](zotero://open-pdf/library/items/7FG6X957?page=8) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> can easily be very large
>
> [Page 8](zotero://open-pdf/library/items/7FG6X957?page=8) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Modelling uncertainty
>
> [Page 9](zotero://open-pdf/library/items/7FG6X957?page=9) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Natural cubic splines were used to construct the path X from the time series x.
>
> [Page 9](zotero://open-pdf/library/items/7FG6X957?page=9) 



%% end annotations %%

%% Import Date: 2023-11-28T21:07:23.330+08:00 %%

---
Title: Neural Ordinary Differential Equations
Tags:
  - NeurIPS/2018
  - highly-cited
  - neural-ODE
  - continuous-depth-models
  - implicit-neural-networks
  - differential-equations
ZoteroLink: zotero://open-pdf/library/items/V784ZVCW
FirstAuthor: Chen, Ricky T. Q.
Author: Rubanova, Yulia; Bettencourt, Jesse; Duvenaud, David K;
Year: "2018"
ItemType: conferencePaper
Citekey: chen_NeuralOrdinaryDifferential_2018
motivation: 提出NODE
Conference: Advances in Neural Information Processing Systems
Publisher: Curran Associates, Inc.
Volume: "31"
rating: 2
---
> [!info]
> **TLDR**:: To overcome the limitations of discrete layer sequences, this paper parameterizes the derivative of the hidden state as a neural network solved by blackbox ODE solvers, enabling constant memory costs and scalable backpropagation.

> [!cite]
> **Bibliography**:: Chen, Ricky TQ, et al. "Neural ordinary differential equations." Advances in neural information processing systems 31 (2018).

> [!info]
> **Contribution**:: ODE

![](Pasted%20image%2020231205164859.png)
## Notes

文章一开头 Figure 1 就将 ODE 和残差网络进行对比，强调 ODE 通过微分得到**连续**的状态：

residual networks, recurrent neural network decoders, normalizing flows 都是离散的隐藏状态变化：

$$
\mathbf{h}_{t+1}=\mathbf{h}_t+f(\mathbf{h}_t,\theta_t)
$$

假如把每一个时间步无线细分，那就得到了微分形式，也就是用 ODE 表达的：

$$
\frac{d\mathbf{h}(t)}{dt}=f(\mathbf{h}(t),t,\theta)
$$

## Annotations
%% begin annotations %%


### Imported: 2023-12-05 4:45 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> These continuous-depth models have constant memory cost, adapt their evaluation strategy to each input, and can explicitly trade numerical precision for speed
>
> [Page 1](zotero://open-pdf/library/items/TEFLERS3?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> discrete
>
> [Page 1](zotero://open-pdf/library/items/TEFLERS3?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> continuously
>
> [Page 1](zotero://open-pdf/library/items/TEFLERS3?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Not storing any intermediate quantities of the forward pass
>
> [Page 1](zotero://open-pdf/library/items/TEFLERS3?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> how the gradient of the loss depends on the hidden state z(t) at each instant
>
> [Page 2](zotero://open-pdf/library/items/TEFLERS3?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> adjoint a(t)
>
> [Page 2](zotero://open-pdf/library/items/TEFLERS3?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The rate of events can be parameterized by a function of the latent state: p(event at time t| z(t)) = λ(z(t)).
>
> [Page 7](zotero://open-pdf/library/items/TEFLERS3?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inhomogeneous Poisson process
>
> [Page 7](zotero://open-pdf/library/items/TEFLERS3?page=7) 



%% end annotations %%

%% Import Date: 2023-12-05T16:46:02.201+08:00 %%

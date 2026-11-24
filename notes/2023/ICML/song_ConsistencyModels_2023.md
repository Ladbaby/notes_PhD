---
Tags:
  - ICML/2023
  - diffusion-model
  - consistency-models
  - fast-sampling
  - data-editing
Title: Consistency Models
ZoteroLink: zotero://open-pdf/library/items/IMTFPRII
FirstAuthor: Song, Yang
Author: Dhariwal, Prafulla; Chen, Mark; Sutskever, Ilya;
Year: 2023
ItemType: conferencePaper
Citekey: song_ConsistencyModels_2023
motivation: 加速生成
Publisher: PMLR
Conference: International Conference on Machine Learning
Page: 32211-32252
rating: 2
---
> [!info]
> **TLDR**:: To address the slow iterative sampling of diffusion models, this work introduces consistency models that directly map noise to data for fast one-step generation and zero-shot editing.

> [!Cite]
> Song, Y., Dhariwal, P., Chen, M., & Sutskever, I. (2023). _Consistency Models_ (arXiv:2303.01469). arXiv. [https://doi.org/10.48550/arXiv.2303.01469](https://doi.org/10.48550/arXiv.2303.01469)

>[!Synth]
>**Contribution**:: 提出CM加速扩散的反向过程
>

# Notes

又是Yang Song大佬写的，上一篇[song_ScoreBasedGenerativeModeling_2021](song_ScoreBasedGenerativeModeling_2021.md)的续作，大概是一种蒸馏的手段，同时自己可以作为一种单独的模型

  ![](Pasted%20image%2020231127160650.png)

> The core idea of the CM is to learn the function that maps any points on a trajectory of the PF-ODE to that trajectory’s origin (i.e., the solution of the PF-ODE)

将 consistency function 定义为 $f:(x_t,t)\longmapsto x_\epsilon$，其中 $\epsilon$ 为无穷小量，则不同的时间步之间需要满足 self-consistency property：

$$
f(x_t,t)=f(x_{t'},t'), \forall t, t' \in [\epsilon, T].
$$
为了保证 $f_\theta(x,\epsilon)=x$，就把这函数设计成了 skip connection 的形式（对，就是 resnet 的那种意思）：

$$
f_\theta(x,t)=c_{skip}(t)x+c_{out}(t)F_\theta(x,t)
$$
$c_{skip}(\epsilon)=1$ 且 $c_{out}(\epsilon)=0$，$F_\theta(x,t)$ 是任意神经网络




## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:13 pm


> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> outperform existing distillation techniques
>
> [Page 1](zotero://open-pdf/library/items/F6YGHV69?page=1) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Models of these mappings are called consistency models, as their outputs are trained to be consistent for points on the same trajectory
>
> [Page 1](zotero://open-pdf/library/items/F6YGHV69?page=1) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> points on the same trajectory map to the same initial point
>
> [Page 2](zotero://open-pdf/library/items/F6YGHV69?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> generate pairs of adjacent points on a PF ODE trajectory
>
> [Page 2](zotero://open-pdf/library/items/F6YGHV69?page=2) 

> [!quote|#ffd400] Image
> ![[attachments/songConsistencyModels2023/image-3-x37-y572.png]]
>
> [Page 3](zotero://open-pdf/library/items/F6YGHV69?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> f pxε, εq “ xε
>
> [Page 3](zotero://open-pdf/library/items/F6YGHV69?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> boundary condition.
>
> [Page 3](zotero://open-pdf/library/items/F6YGHV69?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> For consistency models based on deep neural networks, we discuss two ways to implement this boundary condition almost for free
>
> [Page 3](zotero://open-pdf/library/items/F6YGHV69?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> skip connections,
>
> [Page 3](zotero://open-pdf/library/items/F6YGHV69?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> fθpx, tq “ cskipptqx ` coutptqFθpx, tq,
>
> [Page 3](zotero://open-pdf/library/items/F6YGHV69?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> minimizing its output differences on the pair pˆ xφ tn , xtn`1 q
>
> [Page 4](zotero://open-pdf/library/items/F6YGHV69?page=4) 



%% end annotations %%

> [!quote|#ffd400] Image
>
> [Page 3](zotero://open-pdf/library/items/F6YGHV69?page=3)


%% Import Date: 2026-05-12T01:42:14.000+00:00 %%

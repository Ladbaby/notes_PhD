---
Title: Poisson Flow Generative Models
Tags:
  - NeurIPS/2022
  - generative-models
  - diffusion-model
  - score-based-models
  - poisson-flow
ZoteroLink: zotero://open-pdf/library/items/Y299VP5H
FirstAuthor: Xu, Yilun
Author: Liu, Ziming; Tegmark, Max; Jaakkola, Tommi;
Year: "2022"
ItemType: article
DOI: 10.48550/arXiv.2209.11178
Citekey: xu_PoissonFlowGenerative_2022
motivation: 提出新的一类生成模型——泊松流
rating: 2
---
> [!info]
> **TLDR**:: To address the sampling efficiency and robustness limitations of existing generative models, this paper proposes a Poisson flow generative model that maps uniform distributions to data via an augmented electric field, enabling faster and more stable image generation.

> [!cite]
> **Bibliography**:: Xu, Y., Liu, Z., Tegmark, M., & Jaakkola, T. (2022). _Poisson Flow Generative Models_ (arXiv:2209.11178). arXiv. [https://doi.org/10.48550/arXiv.2209.11178](https://doi.org/10.48550/arXiv.2209.11178)

> [!info]
> **Contribution**:: 泊松流模型

![](Pasted%20image%2020231205165348.png)
## Notes

据说是个比扩散更好的生成式模型，[公众号推送](https://mp.weixin.qq.com/s/W8Zt07e3oNkfg6xOvPQ4SQ)

> 泊松流生成模型（Poisson flow generative model，PFGM）。在该模型中，数据以**带电粒子**的形式表示，这些“粒子”聚合形成电场，电场特性取决于任一时刻电荷的分布情况。之所以被称为泊松流模型，是因为电荷的运动受到泊松方程的约束。泊松方程源于库仑定律：两电荷间的静电力与它们之间的距离平方成反比（与牛顿引力公式类似）
>
> 相比于扩散方法，PFGM能够生成同等质量的图像，而且速度快10至20倍
>
> 当D被设定为无穷大时，增强版的泊松流模型就与扩散模型无二了


## 为什么叫泊松流

因为灵感来自[泊松方程](https://en.wikipedia.org/wiki/Poisson%27s_equation)：

> the solution to Poisson's equation is the ==potential field== caused by a given electric charge or mass density distribution

至于方程的解，可以用格林公式来算



## Annotations
%% begin annotations %%


### Imported: 2023-12-05 4:49 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> charges flow upward along electric field lines, their initial distribution in the z = 0 plane transforms into a distribution on the hemisphere of radius r that becomes uniform in the r → ∞ limit.
>
> [Page 1](zotero://open-pdf/library/items/Y299VP5H?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> estimate the normalized field in the augmented space.
>
> [Page 1](zotero://open-pdf/library/items/Y299VP5H?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> backward ODE
>
> [Page 1](zotero://open-pdf/library/items/Y299VP5H?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> viscous
>
>> 粘性
>
> [Page 1](zotero://open-pdf/library/items/Y299VP5H?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we interpret N dimensional data points x (images, say) as positive electric charges in the z = 0 plane of an N + 1-dimensional space (see Fig. 1(a)) filled with a viscous liquid (say honey)
>
> [Page 1](zotero://open-pdf/library/items/Y299VP5H?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> law of motion will cause a uniform distribution for their hemisphere crossings in the r → ∞ limit
>
> [Page 1](zotero://open-pdf/library/items/Y299VP5H?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> generate a uniform distribution of negative charges on the hemisphere, then track their motion back to the z = 0 plane, where they will be distributed as the data distribution.
>
> [Page 2](zotero://open-pdf/library/items/Y299VP5H?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Coulomb’s law
>
>> 库伦定理
>
> [Page 2](zotero://open-pdf/library/items/Y299VP5H?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Poisson field,
>
> [Page 2](zotero://open-pdf/library/items/Y299VP5H?page=2) 



%% end annotations %%

%% Import Date: 2023-12-05T16:49:45.098+08:00 %%

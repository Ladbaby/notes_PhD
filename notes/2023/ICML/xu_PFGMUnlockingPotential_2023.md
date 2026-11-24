---
Title: "PFGM++: Unlocking the Potential of Physics-Inspired Generative Models"
Tags:
  - generative-models
  - diffusion-model
  - poisson-flow
  - physics-inspired-ml
  - ICML/2023
ZoteroLink: zotero://open-pdf/library/items/CVCDV8WD
FirstAuthor: Xu, Yilun
Author: Liu, Ziming; Tian, Yonglong; Tong, Shangyuan; Tegmark, Max; Jaakkola, Tommi;
Year: "2023"
ItemType: article
DOI: 10.48550/arXiv.2302.04265
Citekey: xu_PFGMUnlockingPotential_2023
motivation: 统一泊松流和扩散模型
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To unify diffusion models and Poisson Flow Generative Models while trading off robustness against rigidity, the authors introduce PFGM++, which embeds generative trajectories in higher-dimensional space with an unbiased objective and direct hyperparameter alignment.

> [!cite]
> **Bibliography**:: Xu, Y., Liu, Z., Tian, Y., Tong, S., Tegmark, M., & Jaakkola, T. (2023). _PFGM++: Unlocking the Potential of Physics-Inspired Generative Models_ (arXiv:2302.04265). arXiv. [https://doi.org/10.48550/arXiv.2302.04265](https://doi.org/10.48550/arXiv.2302.04265)

> [!info]
> **Contribution**:: 统一泊松流和扩散

![](Pasted%20image%2020231205165805.png)

## Notes
>
>Comment: Code is available at https://github.com/Newbeeer/pfgmpp.

也是[xu_PoissonFlowGenerative_2022](xu_PoissonFlowGenerative_2022.md)的续作，也是同一帮人

最核心的是介绍了一个超参 $D$，以统一泊松流模型 ($D=1$) 和扩散模型 ($D\rightarrow \infty$)

至于超参 $D$ 的含义：之前泊松流模型是将 $N$ 维的数据点映射到 $N+1$ 维上，而这个统一的模型则是将 $N$ 维的数据点映射到 $N+D$ 维上

不同的 $D$ 值会带来不同的表现：较小的 $D$ 可以对于模型错误更加鲁棒，而较大的 $D$ 则是模型的学习能力更高效

---

future research:

- it may be possible to identify the “sweet spot” value of $D$
- there may be opportunities to develop stochastic samplers for PFGM++, with the reverse SDE in diffusion models as a special case
- PFGM++ framework may show a greater advantage over its special case (diffusion models) in emergent fields, such as biology data

## 聊天

> What does "**biased**" mean in sentence "We propose a perturbation-based objective to dispense with any biased large batch derived electric field targets, allowing unbiased training", in terms of machine learning

In the context of machine learning, the term "biased" refers to a situation where the data or the training process introduces systematic errors or inaccuracies into the model. Bias can occur for various reasons, such as an unrepresentative training dataset, a flawed data collection process, or a biased choice of features. ==It essentially means that the model has learned to make predictions or decisions that are systematically skewed or inaccurate== because of these factors.

In the sentence you provided, "biased large batch derived electric field targets" suggests that there may have been a bias introduced into the training process when creating the electric field targets using a large batch of data. The proposed perturbation-based objective is meant to address or mitigate this bias, making the training process more unbiased and the resulting model more accurate and fair in its predictions.


## Annotations
%% begin annotations %%


### Imported: 2023-12-05 4:55 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The new models reduce to PFGM when D=1 and to diffusion models when D→∞
>
> [Page 1](zotero://open-pdf/library/items/CVCDV8WD?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> trade off robustness against rigidity
>
> [Page 1](zotero://open-pdf/library/items/CVCDV8WD?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> dispense
>
>> 这里应该是抛弃的意思
>
> [Page 1](zotero://open-pdf/library/items/CVCDV8WD?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> provide a direct alignment method for transferring well-tuned hyperparameters from diffusion models (D→∞) to any finite D values
>
> [Page 1](zotero://open-pdf/library/items/CVCDV8WD?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> models with smaller D exhibit improved robustness against modeling errors
>
> [Page 1](zotero://open-pdf/library/items/CVCDV8WD?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> surjection
>
>> 满射
>
> [Page 1](zotero://open-pdf/library/items/CVCDV8WD?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> infinite N +D-dimensional hemisphere
>
> [Page 1](zotero://open-pdf/library/items/CVCDV8WD?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> perturbation-based training objective
>
> [Page 1](zotero://open-pdf/library/items/CVCDV8WD?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, small D also leads to a heavy-tailed sampling problem at any fixed augmentation norm making learning more challenging
>
> [Page 2](zotero://open-pdf/library/items/CVCDV8WD?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> insensitive to missteps (robustness) and allowing effective learning (rigidity)
>
> [Page 2](zotero://open-pdf/library/items/CVCDV8WD?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We propose a perturbation-based objective to dispense with any biased large batch derived electric field targets, allowing unbiased training
>
> [Page 2](zotero://open-pdf/library/items/CVCDV8WD?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Inspired by denoising scorematching (Vincent, 2011), we design the perturbation kernel
>
> [Page 4](zotero://open-pdf/library/items/CVCDV8WD?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For example, it may be possible to identify the “sweet spot” value of D for different architectures and tasks by analyzing the behavior of errors
>
> [Page 8](zotero://open-pdf/library/items/CVCDV8WD?page=8) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> here may be opportunities to develop stochastic samplers for PFGM++, with the reverse SDE in diffusion models as a special case
>
> [Page 8](zotero://open-pdf/library/items/CVCDV8WD?page=8) 



%% end annotations %%

%% Import Date: 2023-12-05T16:55:44.174+08:00 %%

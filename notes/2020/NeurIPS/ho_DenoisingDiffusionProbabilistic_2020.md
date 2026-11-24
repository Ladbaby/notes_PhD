---
Title: Denoising Diffusion Probabilistic Models
Tags:
  - NeurIPS/2020
  - diffusion-model
  - denoising-score-matching
  - highly-cited
  - dataset/CIFAR10
  - dataset/CelebA
ZoteroLink: zotero://open-pdf/library/items/XMKIA5J7
FirstAuthor: Ho, Jonathan
Author: Jain, Ajay; Abbeel, Pieter;
Year: "2020"
ItemType: conferencePaper
Volume: "33"
Publisher: Curran Associates, Inc.
Page: 6840–6851
Citekey: ho_DenoisingDiffusionProbabilistic_2020
motivation: 提出扩散模型用于高质量图像生成
Conference: Advances in Neural Information Processing Systems
rating: 2
---

> [!info]
> **TLDR**:: To improve high-quality image synthesis, this work trains diffusion probabilistic models using a weighted variational bound linked to denoising score matching, enabling progressive lossy decompression.

> [!Cite]
> Ho, J., Jain, A., & Abbeel, P. (2020). Denoising Diffusion Probabilistic Models. _Advances in Neural Information Processing Systems_, _33_, 6840–6851. [https://proceedings.neurips.cc/paper/2020/hash/4c5bcfec8584af0d967f1ab10179ca4b-Abstract.html](https://proceedings.neurips.cc/paper/2020/hash/4c5bcfec8584af0d967f1ab10179ca4b-Abstract.html)

>[!Synth]
>**Contribution**:: 扩散模型原文

![](Pasted%20image%2020231127201903.png)

## Notes
>
>NeurIPS 2020

扩散模型的原文.


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 3:53 pm


> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> do not have competitive log likelihoods compared to other likelihood-based models
>
> [Page 2](zotero://open-pdf/library/items/XMKIA5J7?page=2) 

> [!quote|#a28ae5] <mark style="background-color: ">Highlight</mark>
> imperceptible
>
>> 细微的
>
> [Page 2](zotero://open-pdf/library/items/XMKIA5J7?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Markov chain that gradually adds Gaussian noise to the data
>
> [Page 2](zotero://open-pdf/library/items/XMKIA5J7?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> N (xt; √1 − βtxt−1, βtI)
>
>> normal distribution with mean ${\sqrt{1,-,\beta_{t}}}{\bf x}{t-1}$ and covariance matrix $\beta{t}{\bf I}$, evaluated at ${\bf x}_{t}$
>
> [Page 2](zotero://open-pdf/library/items/XMKIA5J7?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> q(xt|x0) = N (xt; √  ̄ αtx0, (1 −  ̄ αt)I)
>
> [Page 2](zotero://open-pdf/library/items/XMKIA5J7?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Equation (5) uses KL divergence to directly compare pθ(xt−1|xt) against forward process posteriors, which are tractable when conditioned on x0
>
> [Page 3](zotero://open-pdf/library/items/XMKIA5J7?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> establish a new explicit connection between diffusion models and denoising score matching
>
> [Page 3](zotero://open-pdf/library/items/XMKIA5J7?page=3) 

> [!quote|#ffd400] Image
> ![[attachments/hoDenoisingDiffusionProbabilistic2020/image-4-x93-y612.png]]
>
> [Page 4](zotero://open-pdf/library/items/XMKIA5J7?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> x0 ≈ ˆ x0 = (xt − √1 −  ̄ αt θ(xt)) /√  ̄ αt
>
> [Page 7](zotero://open-pdf/library/items/XMKIA5J7?page=7) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In addition, we show that a certain parameterization of diffusion models reveals an equivalence with denoising score matching over multiple noise levels during training and with annealed Langevin dynamics during sampling (Section 3.2) [55, 61]. We obtained our best sample quality results using this parameterization (Section 4.2), so we consider this equivalence to be one of our primary contributions
>
> [Page 2](zotero://open-pdf/library/items/XMKIA5J7?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> σ2 t= ̃ βt = 1−  ̄ αt−1 1−  ̄ αt βt
>
> [Page 3](zotero://open-pdf/library/items/XMKIA5J7?page=3)

> [!quote|#ffd400] Image
>
> [Page 4](zotero://open-pdf/library/items/XMKIA5J7?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> xt−1 = 1 √αt ( xt − βt √1−  ̄ αt  θ(xt, t) ) + σtz,
>
>> 采样过程的核心公式
>
> [Page 4](zotero://open-pdf/library/items/XMKIA5J7?page=4)


%% Import Date: 2026-05-12T00:31:00.000+00:00 %%

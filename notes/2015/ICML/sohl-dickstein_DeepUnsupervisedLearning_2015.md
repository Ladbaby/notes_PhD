---
Title: Deep Unsupervised Learning using Nonequilibrium Thermodynamics
Tags:
  - ICML/2015
  - normalizing-flows
  - variational-autoencoder
  - flow-based-models
  - diffusion-model
ZoteroLink: zotero://open-pdf/library/items/PDV5G39K
FirstAuthor: Sohl-Dickstein, Jascha
Author: Weiss, Eric; Maheswaranathan, Niru; Ganguli, Surya;
Year: 2015
ItemType: conferencePaper
Conference: International Conference on Machine Learning
Publisher: PMLR
Page: 2256-2265
Citekey: sohl-dickstein_DeepUnsupervisedLearning_2015
motivation: 提出扩散，兼顾灵活性和可求解性
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of balancing flexibility with computational tractability in generative modeling, this paper proposes a diffusion-based approach that learns a reverse process to restore data structure destroyed by iterative forward diffusion.

> [!cite]
> **Bibliography**:: Sohl-Dickstein, J., Weiss, E., Maheswaranathan, N., & Ganguli, S. (2015). Deep Unsupervised Learning using Nonequilibrium Thermodynamics. In _International Conference on Machine Learning_., 2256-2265

> [!info]
> **Contribution**:: 扩散起源

## Notes

>扩散模型最早提出的地方.

似乎是扩散模型真正的**起源**

- 试图从一个简单的数据分布（高斯分布）变成目标的==连续==数据分布
- 预测每一步的噪声比预测整个函数更加 tractable

推测：需要先验分布也是概率意义上连续的，pink noise 是否是连续？

## 和 20 年那篇的关系

The main difference between the two papers is that the latter one ==focuses on image synthesis== using diffusion probabilistic models, while the former one introduces the general framework of diffusion probabilistic models for deep unsupervised learning²⁴. The latter paper also proposes a novel **weighted variational bound** and a **progressive lossy decompression scheme** that improve the sample quality and efficiency of diffusion probabilistic models². The latter paper is indeed based on the previous one, as it uses the same forward and reverse diffusion processes, but with some modifications and extensions²⁴.

Source: Conversation with Bing, 6/20/2023(1) An In-Depth Guide to Denoising Diffusion Probabilistic Models - LearnOpenCV. https://learnopencv.com/denoising-diffusion-probabilistic-models/ Accessed 6/20/2023.
(2) Introduction to Diffusion Models for Machine Learning - AssemblyAI. https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/ Accessed 6/20/2023.
(3) Deep Unsupervised Learning using Nonequilibrium Thermodynamics. https://arxiv.org/abs/1503.03585 Accessed 6/20/2023.
(4) Deep Unsupervised Learning using Nonequilibrium Thermodynamics - arXiv.org. https://arxiv.org/pdf/1503.03585v4 Accessed 6/20/2023.


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:32 pm


> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> aptly
>
>> 恰当地
>
> [Page 1](zotero://open-pdf/library/items/Q4KLY4BZ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Our method uses a Markov chain to gradually convert one distribution into another, an idea used in non-equilibrium statistical physics (Jarzynski, 1997) and sequential Monte Carlo (Neal, 2001).
>
> [Page 2](zotero://open-pdf/library/items/Q4KLY4BZ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Estimating small perturbations is more tractable than explicitly describing the full distribution with a single, non-analytically-normalizable, potential function.
>
> [Page 2](zotero://open-pdf/library/items/Q4KLY4BZ?page=2) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> simultaneously achieves both flexibility and tractability.
>
> [Page 1](zotero://open-pdf/library/items/Q4KLY4BZ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> simultaneously achieves both flexibility and tractability
>
> [Page 1](zotero://open-pdf/library/items/PDV5G39K?page=1)


%% Import Date: 2026-05-15T12:40:01.000+00:00 %%

---
Title: Generative Modeling by Estimating Gradients of the Data Distribution
Tags:
  - score-matching
  - score-based-generative-models
  - diffusion-model
  - Langevin-dynamics
  - score-based-models
  - NeurIPS/2019
ZoteroLink: zotero://open-pdf/library/items/J5WAKEPN
FirstAuthor: Song, Yang
Author: Ermon, Stefano;
Year: "2019"
ItemType: conferencePaper
Volume: "32"
Publisher: Curran Associates, Inc.
Citekey: song_GenerativeModelingEstimating_2019
motivation: 提出score-based生成模型
Conference: Advances in Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To address ill-defined gradients for data on low-dimensional manifolds, the paper proposes a generative model that jointly estimates scores across noise levels and uses annealed Langevin dynamics for sampling.

> [!cite]
> **Bibliography**:: Song, Y., & Ermon, S. (2019). Generative Modeling by Estimating Gradients of the Data Distribution. _Advances in Neural Information Processing Systems_, _32_. [https://papers.nips.cc/paper_files/paper/2019/hash/3001ef257407d5a371a96dcd947c7d93-Abstract.html](https://papers.nips.cc/paper_files/paper/2019/hash/3001ef257407d5a371a96dcd947c7d93-Abstract.html)

> [!info]
> **Contribution**:: DDPM++有关score的理论基础

## Notes

其实[song_ScoreBasedGenerativeModeling_2021](song_ScoreBasedGenerativeModeling_2021.md)这篇对应的演讲，从动机层面很大一部分来自于这篇文章的内容，包括为什么用 score，如何计算 score

scliced score matching 似乎没见人用过，这里只和lqf讨论了 denoising score matching

原本的我们的设想是，通过直接计算数据分布对应的 score，来得到数据分布对应的概率分布。但是实际操作的时候会有问题，数学表达式里会有非常难以计算的项

所以其中一种做法是，我们往原本的数据分布里加噪声，并将 score matching 应用于估计这些==带噪声的样本==的 score：

![](b79fe0d58ccd5fc647517e4d5b12484.png)

> 不是估计添加的噪声对应的 score！真要那样不就成了学习纯高斯噪声了吗！

这里面 $p(x_t|x_0)$ 是我们人为定义的，表示已知 $x_0$ 的情况下，噪声样本 $x_t$ 的概率。

- Q:  $p(x_t|x_0)$ 是咋定义出来的，你咋知道样本加了高斯噪声之后会得到什么样子的分布？

	A: 只要前向过程里 $\mathrm{d}\mathbf{x}=\mathbf{f}(\mathbf{x},t)\mathrm{d}t+g(t)\mathrm{d}\mathbf{w}$ 中的 $\mathbf{f}$ 是关于 $x$ 线性的，那么 $x_t|x_0$ 就会服从高斯分布。其均值是 $\alpha_t x_0$ ，方差是 $\sigma^2_t$ 。而 $\alpha$ 和 $\sigma$ 都可以通过 $f$ 和 $g$ 来表示出来

	> 还挺神奇。。。

## Annotations
%% begin annotations %%


%% end annotations %%

%% Import Date: 2024-01-23T15:22:48.258+08:00 %%

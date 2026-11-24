---
Title: Deconstructing Denoising Diffusion Models for Self-Supervised Learning
Tags:
  - diffusion-model
  - self-supervised-learning
  - representation-learning
  - denoising-autoencoders
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/9SXAMK3J
FirstAuthor: Chen, Xinlei
Author: Liu, Zhuang; Xie, Saining; He, Kaiming;
Year: "2024"
ItemType: article
DOI: 10.48550/arXiv.2401.14404
Citekey: chen_DeconstructingDenoisingDiffusion_2024
motivation: 探索扩散模型的表示学习能力
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To understand how Denoising Diffusion Models learn representations, the authors deconstruct these models into classical Denoising Autoencoders, revealing that most modern components are nonessential for effective self-supervised learning.

> [!cite]
> **Bibliography**:: Chen, X., Liu, Z., Xie, S., & He, K. (2024). _Deconstructing Denoising Diffusion Models for Self-Supervised Learning_ (arXiv:2401.14404). arXiv. [https://doi.org/10.48550/arXiv.2401.14404](https://doi.org/10.48550/arXiv.2401.14404)

> [!info]
> **Contribution**:: 研究了扩散各个部分在自监督学习中的实际影响

![](Pasted%20image%2020240131155712.png)
## Notes

何恺明和meta合作搞的一个大型消融实验，谢谢明哥

![](Pasted%20image%2020240131155959.png)

首先是对比了传统的 DAE 和现在的 DDM 之间的区别，并说明原本的 DAE 是用来做自监督表示学习的，而 DDM 并不是，文章通过一点点把 DDM 改成 DAE，来探究 DDM 中的各个部分到底是怎么影响自监督表示学习的结果的

文章做了一堆消融实验之后得到了一些有意思的结论：

- 低维度的隐空间，使得DAE可以学到更好的表达，比直接作用于原图像的像素上更好。其中低维空间的维度数量设置也非常关键。

	他们发现准确度是随着维度的数量，先上升后下降的
- tokenizer 用什么其实并不是很重要

	于是文章后面就用一个非常简单的 PCA 来作为 tokenizer 一样的存在。并说 PCA 其实并不需要神经网络学习，它的存在更像是数据预处理过程
- DDM 中使用多个 level 的噪声比较类似于数据增强的作用。即不用也不会性能下降特别多
- 调整 noise schedule 为 linear 的话，会提升 linear probe accuracy，但是降低生成质量
- 去除类别标签提升了 linear probe accuracy，但是降低了生成照片的质量

	推测是因为去除类别标签会迫使模型学习更多 semantics
- 直接预测样本而不是噪声的话，linear probe accuracy 下降

## Annotations
%% begin annotations %%


### Imported: 2024-01-31 3:54 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> DDMs influence self-supervised representation learning. We observe that only a very few modern components are critical for learning good representations, while many others are nonessential.
>
> [Page 1](zotero://open-pdf/library/items/9SXAMK3J?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inspecting the representation learning ability of DDMs
>
> [Page 1](zotero://open-pdf/library/items/9SXAMK3J?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it remains largely unclear whether the representation capability is gained by a denoising-driven process, or a diffusion-driven process
>
> [Page 1](zotero://open-pdf/library/items/9SXAMK3J?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> tokenizer [33] that creates a low-dimensional latent space.
>
> [Page 2](zotero://open-pdf/library/items/9SXAMK3J?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> it is the lowdimensional latent space, rather than the tokenizer specifics, that enables a DAE to achieve good representations
>
> [Page 2](zotero://open-pdf/library/items/9SXAMK3J?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> The role of using multiple levels of noise is analogous to a form of data augmentation, which can be beneficial, but not an enabling factor.
>
> [Page 2](zotero://open-pdf/library/items/9SXAMK3J?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> gained by the denoising-driven process, not a diffusion-driven process
>
> [Page 2](zotero://open-pdf/library/items/9SXAMK3J?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Transformer-based DDM
>
> [Page 3](zotero://open-pdf/library/items/9SXAMK3J?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> DiT trains much faster than other UNet-based DDMs (see [32]) while achieving better generation quality
>
>> 好好好好好好好
>
> [Page 3](zotero://open-pdf/library/items/9SXAMK3J?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> linear probe accuracy from 57.5% to 62.1% (Tab. 1), even though the generation quality is greatly hurt as expected (FID from 11.6 to 34.2).
>
> [Page 3](zotero://open-pdf/library/items/9SXAMK3J?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Removing the class-conditioning can force the model to learn more semantics.
>
> [Page 3](zotero://open-pdf/library/items/9SXAMK3J?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> This change greatly improves the linear probe accuracy from 59.0% to 63.4% (Tab. 1), suggesting that the original schedule focuses too much on noisier regimes. On the other hand, as expected, doing so further hurts the generation ability, leading to a FID of 93.2
>
> [Page 4](zotero://open-pdf/library/items/9SXAMK3J?page=4) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> selfsupervised learning performance is not correlated to generation quality
>
> [Page 4](zotero://open-pdf/library/items/9SXAMK3J?page=4) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Latent dimension of the tokenizer is crucial for DDM to work well in self-supervised learning.
>
> [Page 5](zotero://open-pdf/library/items/9SXAMK3J?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> is analogous to a form of image pre-processing
>
> [Page 5](zotero://open-pdf/library/items/9SXAMK3J?page=5) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> High-resolution, pixel-based DDMs are inferior for selfsupervised learning.
>
> [Page 5](zotero://open-pdf/library/items/9SXAMK3J?page=5) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> With the modification of predicting clean data (rather than noise), the linear probe accuracy degrades from 65.1% to 62.4% (Tab. 3). This suggests that the choice of the prediction target influences the representation quality
>
> [Page 6](zotero://open-pdf/library/items/9SXAMK3J?page=6) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> scaling the data by γt is not necessary in our scenario
>
> [Page 6](zotero://open-pdf/library/items/9SXAMK3J?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we can apply a standard ViT network [15] that directly operate on images, as if there is no tokenizer.
>
> [Page 6](zotero://open-pdf/library/items/9SXAMK3J?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> operating on the image space with inverse PCA can achieve similar results as operating on the latent space
>
> [Page 6](zotero://open-pdf/library/items/9SXAMK3J?page=6)


%% Import Date: 2026-05-12T02:55:31.000+00:00 %%

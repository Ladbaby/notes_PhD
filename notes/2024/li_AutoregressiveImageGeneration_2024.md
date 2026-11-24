---
Title: Autoregressive Image Generation without Vector Quantization
Tags:
  - kai-ming-he
  - diffusion-model
  - autoregressive-image-generation
  - continuous-tokens
  - image-generation
ZoteroLink: zotero://open-pdf/library/items/V5G2QBLN
FirstAuthor: Li, Tianhong
Author: Tian, Yonglong; Li, He; Deng, Mingyang; He, Kaiming;
Year: "2024"
ItemType: article
DOI: 10.48550/arXiv.2406.11838
Citekey: li_AutoregressiveImageGeneration_2024
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the conventional reliance on vector-quantized tokens for autoregressive image generation, this paper proposes modeling per-token probability distributions via diffusion in continuous space, eliminating discrete tokenizers while preserving sequence modeling speed.

> [!cite]
> **Bibliography**:: Li, T., Tian, Y., Li, H., Deng, M., & He, K. (2024). _Autoregressive Image Generation without Vector Quantization_ (arXiv:2406.11838). arXiv. [https://doi.org/10.48550/arXiv.2406.11838](https://doi.org/10.48550/arXiv.2406.11838)

> [!info]
> **Contribution**:: 把扩散模型替换成了解码器

## Notes

![](Pasted%20image%2020240624225203.png)

这一部分的表述比较绕，理论动机与实现之间的对应关系需要额外梳理

我感觉大体上的意思是，把一般的自回归生成式模型的解码器给替换成扩散模型。而不是一般的那种离散量化的解码器。好处是可以使用连续建模的编码器？

然后把自回归模型的划分范围给扩大了，大体上感觉是想说明方法可以很泛用

## Annotations
%% begin annotations %%


### Imported: 2024-06-24 10:49 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> vector-quantized tokens
>
> [Page 1](zotero://open-pdf/library/items/V5G2QBLN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> while a discrete-valued space can facilitate representing a categorical distribution, it is not a necessity for autoregressive modeling
>
> [Page 1](zotero://open-pdf/library/items/V5G2QBLN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> per-token probability distribution using a diffusion procedure
>
> [Page 1](zotero://open-pdf/library/items/V5G2QBLN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> our image generator achieves strong results while enjoying the speed advantage of sequence modeling
>
> [Page 1](zotero://open-pdf/library/items/V5G2QBLN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> What is needed is to model the per-token probability distribution, which can be measured by a loss function and used to draw samples from
>
>> 重要的是每个token的概率分布的学习，而不是离散
>
> [Page 1](zotero://open-pdf/library/items/V5G2QBLN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> categorical distribution
>
> [Page 1](zotero://open-pdf/library/items/V5G2QBLN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> predicts a vector z for each token, which serves as a conditioning for a denoising network (e.g., a small MLP).
>
> [Page 1](zotero://open-pdf/library/items/V5G2QBLN?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> continuous-valued token x
>
> [Page 2](zotero://open-pdf/library/items/V5G2QBLN?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> model the probability distribution p(x|z) of this token
>
> [Page 2](zotero://open-pdf/library/items/V5G2QBLN?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This method eliminates the need for discrete-valued tokenizers
>
> [Page 2](zotero://open-pdf/library/items/V5G2QBLN?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Conceptually, this small prediction head, applied to each token, behaves like a loss function for measuring the quality of z. We refer to this loss function as Diffusion Loss.
>
> [Page 2](zotero://open-pdf/library/items/V5G2QBLN?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> per-token distribution by diffusion
>
> [Page 2](zotero://open-pdf/library/items/V5G2QBLN?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> joint distribution of all tokens
>
> [Page 2](zotero://open-pdf/library/items/V5G2QBLN?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It uses a pre-defined number of mixtures, which can limit the types of distributions it can represent
>
> [Page 2](zotero://open-pdf/library/items/V5G2QBLN?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Intuitively, τ controls the sample diversity by adjusting the noise variance
>
> [Page 4](zotero://open-pdf/library/items/V5G2QBLN?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it does not constrain how the previous tokens communicate with the next token
>
> [Page 4](zotero://open-pdf/library/items/V5G2QBLN?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> allows each token to see all tokens in the sequence
>
> [Page 5](zotero://open-pdf/library/items/V5G2QBLN?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> better communication across tokens.
>
> [Page 5](zotero://open-pdf/library/items/V5G2QBLN?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> small MLP
>
> [Page 6](zotero://open-pdf/library/items/V5G2QBLN?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a width of 1024 channels.
>
> [Page 6](zotero://open-pdf/library/items/V5G2QBLN?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> kv-cache
>
> [Page 6](zotero://open-pdf/library/items/V5G2QBLN?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> MAR performs “next set-of-tokens prediction”. It progressively reduces the masking ratio from 1.0 to 0 with a cosine schedule
>
> [Page 6](zotero://open-pdf/library/items/V5G2QBLN?page=6) 



%% end annotations %%

%% Import Date: 2024-06-24T22:49:39.304+08:00 %%

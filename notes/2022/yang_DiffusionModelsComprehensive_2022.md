---
Title: "Diffusion Models: A Comprehensive Survey of Methods and Applications"
Tags:
  - arXiv/2022
  - diffusion-model
  - generative-models
  - image-synthesis
  - video-generation
  - molecule-design
ZoteroLink: zotero://open-pdf/library/items/YFSVHXF6
FirstAuthor: Yang, Ling
Author: Zhang, Zhilong; Song, Yang; Hong, Shenda; Xu, Runsheng; Zhao, Yue; Shao, Yingxia; Zhang, Wentao; Cui, Bin; Yang, Ming-Hsuan;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2209.00796
Citekey: yang_DiffusionModelsComprehensive_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the fragmented landscape of diffusion model research, this survey categorizes work into efficient sampling, likelihood estimation, and structured data handling while reviewing diverse applications to identify key focus areas and future directions.

> [!cite]
> **Bibliography**:: Yang, L., Zhang, Z., Song, Y., Hong, S., Xu, R., Zhao, Y., Shao, Y., Zhang, W., Cui, B., & Yang, M. (2022). Diffusion Models: A Comprehensive Survey of Methods and Applications. https://doi.org/10.48550/arXiv.2209.00796

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: 39 pages, 9 figures, citing 289 papers, project: https://github.com/YangLing0818/Diffusion-Models-Papers-Survey-Taxonomy
<div data-schema-version="8"><p>扩散模型综述</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> broken the long-time dominance of generative adversarial networks (GANs
>
> [Page 3](zotero://open-pdf/library/items/YFSVHXF6?page=3)

> [!quote|#ffd400] Note
>
>> /tækˈsɒnəmi/分类
>
> [Page 4](zotero://open-pdf/library/items/YFSVHXF6?page=4)

> [!quote|#ffd400] Note
>
>> 连乘的符号就是大写pi
>
> [Page 6](zotero://open-pdf/library/items/YFSVHXF6?page=6)

> [!quote|#ffd400] Note
>
>> /ˌpɜːtəˈbeɪʃn/扰动
>
> [Page 6](zotero://open-pdf/library/items/YFSVHXF6?page=6)

> [!quote|#ffd400] Note
>
>> Multivariate normal distribution - Wikipedia
>
> [Page 6](zotero://open-pdf/library/items/YFSVHXF6?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Intuitively speaking, this forward process slowly injects noise to data until all structures are lost
>
> [Page 6](zotero://open-pdf/library/items/YFSVHXF6?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> With this reverse Markov chain in hand, we can generate a data sample x0 by first sampling a noise vector x 𝑇 ∼ 𝑝 (x𝑇 ), then iteratively sampling from the learnable transition kernel x𝑡−1 ∼ 𝑝𝜃 (x𝑡−1 | x𝑡 ) until 𝑡 = 1.
>
> [Page 6](zotero://open-pdf/library/items/YFSVHXF6?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> minimizing the Kullback-Leibler (KL)
>
> [Page 6](zotero://open-pdf/library/items/YFSVHXF6?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The objective of DDPM training is to maximize the VLB (or equivalently, minimizing the negative VLB)
>
> [Page 7](zotero://open-pdf/library/items/YFSVHXF6?page=7)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Given a probability density function 𝑝 (x), its score function is defined as the gradient of the log probability density ∇x log 𝑝 (x)
>
> [Page 7](zotero://open-pdf/library/items/YFSVHXF6?page=7)

> [!quote|#ffd400] Note
>
>> 布朗运动引入随机性
>
> [Page 9](zotero://open-pdf/library/items/YFSVHXF6?page=9)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Wiener process
>
> [Page 9](zotero://open-pdf/library/items/YFSVHXF6?page=9)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> faster and more efficient sampling, more accurate likelihood and density estimation, and handling data with special structures
>
> [Page 9](zotero://open-pdf/library/items/YFSVHXF6?page=9)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Manifold
>
>> 流形
>
> [Page 17](zotero://open-pdf/library/items/YFSVHXF6?page=17)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> intrinsic
>
>> 固有的
>
> [Page 17](zotero://open-pdf/library/items/YFSVHXF6?page=17)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> optimizing a diffusion model can be seen as training an infinitely deep hierarchical VAE
>
> [Page 20](zotero://open-pdf/library/items/YFSVHXF6?page=20)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It receives a Gaussian white noise signal as input and iteratively refines the signal with a gradient-based sampler
>
> [Page 26](zotero://open-pdf/library/items/YFSVHXF6?page=26)


%% Import Date: 2026-05-12T01:27:23.000+00:00 %%

---
Title: "MagicAnimate: Temporally Consistent Human Image Animation using Diffusion Model"
Tags:
  - diffusion-model
  - image-to-video
  - human-animation
  - temporal-consistency
  - pose-guided
ZoteroLink: zotero://open-pdf/library/items/V8VM7UXK
code: https://github.com/magic-research/magic-animate
FirstAuthor: Xu, Zhongcong
Author: Zhang, Jianfeng; Liew, Jun Hao; Yan, Hanshu; Liu, Jia-Wei; Zhang, Chenxu; Feng, Jiashi; Shou, Mike Zheng;
Year: "2023"
ItemType: article
DOI: 10.48550/arXiv.2311.16498
Citekey: xu_MagicAnimateTemporallyConsistent_2023
motivation: 解决视频生成缺少对于时间维度的建模
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address temporal inconsistency and identity loss in human image animation, this paper introduces MagicAnimate, a diffusion-based framework using a video diffusion model and novel appearance encoder to enhance temporal coherence and preserve reference details.

> [!cite]
> **Bibliography**:: Xu, Z., Zhang, J., Liew, J. H., Yan, H., Liu, J.-W., Zhang, C., Feng, J., & Shou, M. Z. (2023). _MagicAnimate: Temporally Consistent Human Image Animation using Diffusion Model_ (arXiv:2311.16498). arXiv. [https://doi.org/10.48550/arXiv.2311.16498](https://doi.org/10.48550/arXiv.2311.16498)

> [!info]
> **Contribution**:: 时域一致的图片转视频

![](Pasted%20image%2020231210162106.png)
## Notes
>
>Comment: Project Page at https://showlab.github.io/magicanimate.

最近 Github 的 trending 上经常看到的一个 repo 对应的文章，居然比想象的要有收获

主要 focus 在了 temporal consistent 这个问题上，说人话就是不同时间步的帧之间的连贯性

应对的方法是将扩散模型原本 2-D 的 U-Net 给增加一个维度，**temporal attention** 层，变成 3-D 的 U-Net，也按照惯例加入了 sinusoidal positional encoding 让模型知道当前处于哪一帧

到此原本就结束了，但是文章发现 **temporal attention 会降低模型生成的单帧质量**，而且现在的视频生成数据集还是太少了，无法支撑起高质量的结果，所以想出了一招：**有一定的概率，训练数据会被替换成Laion（一个非常大的图片数据集）里的人的图片**，这样子就变成了重构任务（此时 DensePose 不生效）。感觉像是提升扩散模型的生成能力

为了让模型输出的视频片段之间是连续的，实际在操作的时候采用了一种类似滑动窗口的做法，不同的输出窗口之间创造一些重叠
## Annotations
%% begin annotations %%


### Imported: 2023-12-10 4:19 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> frame-warping
>
> [Page 1](zotero://open-pdf/library/items/V8VM7UXK?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> face challenges in maintaining temporal consistency throughout the animation due to the lack of temporal modeling and poor preservation of reference identity
>
> [Page 1](zotero://open-pdf/library/items/V8VM7UXK?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> first develop a video diffusion model to encode temporal information
>
> [Page 1](zotero://open-pdf/library/items/V8VM7UXK?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> to maintain the appearance coherence across frames, we introduce a novel appearance encoder to retain the intricate details of the reference image
>
> [Page 1](zotero://open-pdf/library/items/V8VM7UXK?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we further employ a simple video fusion technique to encourage smooth transitions for long video animation
>
> [Page 1](zotero://open-pdf/library/items/V8VM7UXK?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> flickering results
>
> [Page 2](zotero://open-pdf/library/items/V8VM7UXK?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> incorporating temporal attention blocks into the diffusion network
>
> [Page 2](zotero://open-pdf/library/items/V8VM7UXK?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> image-video joint training strategy to leverage diverse single-frame image data for augmentation
>
> [Page 2](zotero://open-pdf/library/items/V8VM7UXK?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inflate the original 2D UNet to 3D temporal UNet by inserting temporal attention layers
>
> [Page 3](zotero://open-pdf/library/items/V8VM7UXK?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We then stack K consecutive poses into a DensePose sequence p1:K for motion guidance
>
> [Page 3](zotero://open-pdf/library/items/V8VM7UXK?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> reshape the features into R(NHW )×K×C to compute cross-frame information along the temporal dimension
>
> [Page 3](zotero://open-pdf/library/items/V8VM7UXK?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> add sinusoidal positional encoding to make the model aware of the position for each frame within the video
>
> [Page 3](zotero://open-pdf/library/items/V8VM7UXK?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we pass these features to the spatial self-attention layers in the UNet blocks by concatenating each feature in ya with the original UNet self-attention hidden states to inject the appearance information
>
> [Page 4](zotero://open-pdf/library/items/V8VM7UXK?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we choose DensePose [8] as the motion signal pi for dense and robust pose conditions
>
> [Page 4](zotero://open-pdf/library/items/V8VM7UXK?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sliding window method to improve transition smoothness in the inference stage.
>
> [Page 4](zotero://open-pdf/library/items/V8VM7UXK?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> image-video joint training strategy.
>
> [Page 5](zotero://open-pdf/library/items/V8VM7UXK?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We draw a random number r ∼ U (0, 1), where U (·, ·) denotes uniform distribution. If r ≤ τ0, we use the sampled image for training. In this case, the conditioning pose pi is estimated from Iref, and the learning objective of our framework becomes reconstruction
>
> [Page 5](zotero://open-pdf/library/items/V8VM7UXK?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Although the introduction of temporal attention in the second stage helps improve temporal modeling, we also notice that this leads to degraded per-frame quality
>
> [Page 5](zotero://open-pdf/library/items/V8VM7UXK?page=5) 



%% end annotations %%

%% Import Date: 2023-12-10T16:19:07.455+08:00 %%

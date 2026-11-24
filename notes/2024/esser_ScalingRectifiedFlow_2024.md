---
Title: Scaling Rectified Flow Transformers for High-Resolution Image Synthesis
Tags:
  - rectified-flow
  - image-synthesis
  - diffusion-model
  - generative-models
  - high-resolution-image-synthesis
ZoteroLink: zotero://open-pdf/library/items/EN8KRS3G
FirstAuthor: Esser, Patrick
Author: Kulal, Sumith; Blattmann, Andreas; Entezari, Rahim; Müller, Jonas; Saini, Harry; Levi, Yam; Lorenz, Dominik; Sauer, Axel; Boesel, Frederic; Podell, Dustin; Dockhorn, Tim; English, Zion; Lacey, Kyle; Goodwin, Alex; Marek, Yannik; Rombach, Robin;
Year: "2024"
ItemType: article
DOI: 10.48550/arXiv.2403.03206
Citekey: esser_ScalingRectifiedFlow_2024
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the underutilization of rectified flow in generative modeling, this work improves training via perceptually biased noise sampling and introduces a dual-modality transformer architecture that enhances text comprehension and high-resolution synthesis.

> [!cite]
> **Bibliography**:: Esser, P., Kulal, S., Blattmann, A., Entezari, R., Müller, J., Saini, H., Levi, Y., Lorenz, D., Sauer, A., Boesel, F., Podell, D., Dockhorn, T., English, Z., Lacey, K., Goodwin, A., Marek, Y., & Rombach, R. (2024). _Scaling Rectified Flow Transformers for High-Resolution Image Synthesis_ (arXiv:2403.03206). arXiv. [https://doi.org/10.48550/arXiv.2403.03206](https://doi.org/10.48550/arXiv.2403.03206)

> [!info]
> **Contribution**:: Stable Diffusion 3 的文章

## Notes

最明显的提升应该是，对于文字的书写能力更加优秀

backbone 基于 DiT（即transformers作为backbone的扩散模型）改进了多模态的能力。具体来说，首先是混合使用了三种不同的 text encoder:

![](Pasted%20image%2020240313105043.png)

一般来说，使用多个 text encoder 是在提升整体的模型性能。本文认为这样做同样可以提升灵活性，因为推理阶段可以只用三个 encoder 里面的两个，可以省掉 T5 这个 4.7B 的结构，而不会性能损失太多（除非 prompt 真的很复杂）。

> 整体模型参数量800M~8B

---

另一个关于多模态的改进是，由于文本和图片的 embedding 本来相差就挺大的，于是使用不同的两套权重，但是一起做注意力计算。这样既能各自学习，又可以考虑相互关系

![](Pasted%20image%2020240313110350.png)

## Annotations
%% begin annotations %%


### Imported: 2024-03-13 10:42 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Rectified flow is a recent generative model formulation that connects data and noise in a straight line
>
> [Page 1](zotero://open-pdf/library/items/EN8KRS3G?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we improve existing noise sampling techniques for training rectified flow models by biasing them towards perceptually relevant scales
>
> [Page 1](zotero://open-pdf/library/items/EN8KRS3G?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> uses separate weights for the two modalities and enables a bidirectional flow of information between image and text tokens, improving text comprehension, typography, and human preference ratings
>
> [Page 1](zotero://open-pdf/library/items/EN8KRS3G?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> While specifying a forward path from data to noise leads to efficient training, it also raises the question of which path to choose.
>
> [Page 2](zotero://open-pdf/library/items/EN8KRS3G?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> which connects data and noise on a straight line.
>
> [Page 2](zotero://open-pdf/library/items/EN8KRS3G?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> mostly limited to class-conditional models
>
> [Page 2](zotero://open-pdf/library/items/EN8KRS3G?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> introducing a re-weighting of the noise scales in rectified flow models, similar to noise-predictive diffusion models
>
> [Page 2](zotero://open-pdf/library/items/EN8KRS3G?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> a fixed text representation is fed directly
>
> [Page 2](zotero://open-pdf/library/items/EN8KRS3G?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> into the model (e.g., via cross-attention (Vaswani et al., 2017; Rombach et al., 2022)), is not ideal,
>
> [Page 2](zotero://open-pdf/library/items/EN8KRS3G?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> incorporates learnable streams for both image and text tokens
>
> [Page 2](zotero://open-pdf/library/items/EN8KRS3G?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Thus, we aim to give more weight to intermediate timesteps by sampling them more frequently.
>
> [Page 4](zotero://open-pdf/library/items/EN8KRS3G?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> condition the network on both the timestep of the diffusion process and the class label.
>
> [Page 4](zotero://open-pdf/library/items/EN8KRS3G?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> After embedding this patch encoding and the text encoding cctxt to a common dimensionality, we
>
> [Page 4](zotero://open-pdf/library/items/EN8KRS3G?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> concatenate the two sequences
>
> [Page 5](zotero://open-pdf/library/items/EN8KRS3G?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> two separate sets of weights for the two modalities
>
> [Page 5](zotero://open-pdf/library/items/EN8KRS3G?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> both representations can work in their own space yet take the other one into account
>
> [Page 5](zotero://open-pdf/library/items/EN8KRS3G?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> additionally increases the flexibility of our MM-DiTbased rectified flow during inference.
>
> [Page 11](zotero://open-pdf/library/items/EN8KRS3G?page=11) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This offers means for trading off model performance for improved memory efficiency, which is particularly relevant for the 4.7B parameters of T5-XXL (Raffel et al., 2019) that require significant amounts of VRAM
>
> [Page 12](zotero://open-pdf/library/items/EN8KRS3G?page=12) 



%% end annotations %%

%% Import Date: 2024-03-13T10:42:18.650+08:00 %%

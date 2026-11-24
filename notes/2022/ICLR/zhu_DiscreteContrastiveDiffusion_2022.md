---
Title: Discrete Contrastive Diffusion for Cross-Modal Music and Image Generation
Tags:
  - ICLR/2022
  - diffusion-model
  - cross-modal-generation
  - contrastive-learning
  - music-generation
ZoteroLink: zotero://open-pdf/library/items/WBY9MBFD
FirstAuthor: Zhu, Ye
Author: Wu, Yu; Olszewski, Kyle; Ren, Jian; Tulyakov, Sergey; Yan, Yan;
Year: "2022"
ItemType: conferencePaper
Conference: The Eleventh International Conference on Learning Representations
Citekey: zhu_DiscreteContrastiveDiffusion_2022
rating: 2
---
> [!info]
> **TLDR**:: To improve input-output correspondence in conditional diffusion models, this work explicitly maximizes mutual information via a Conditional Discrete Contrastive Diffusion loss, enhancing alignment and accelerating convergence.

> [!cite]
> **Bibliography**:: Zhu, Y., Wu, Y., Olszewski, K., Ren, J., Tulyakov, S., & Yan, Y. (2022). Discrete Contrastive Diffusion for Cross-Modal Music and Image Generation. In _The Eleventh International Conference on Learning Representations_.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we explicitly enhance input-output connections by maximizing their mutual information
>
> [Page 1](zotero://open-pdf/library/items/WBY9MBFD?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ); Song & Ermon (2020a) have been proven to be very powerful for data representation learning. Their high-level idea aims to learn the representation z of raw data x based on the assumption that a properly encoded z benefits the ability of a generative model p to reconstruct the raw data given z as prior
>
> [Page 2](zotero://open-pdf/library/items/WBY9MBFD?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> intra-negative samples
>
> [Page 3](zotero://open-pdf/library/items/WBY9MBFD?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inter-negative samples
>
> [Page 3](zotero://open-pdf/library/items/WBY9MBFD?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Vector quantization is a classical technique in which a high-dimensional space is represented using a discrete number of vectors
>
> [Page 4](zotero://open-pdf/library/items/WBY9MBFD?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> and demonstrate how it helps to maximize the mutual information between the conditioning and generated discrete data representation
>
> [Page 4](zotero://open-pdf/library/items/WBY9MBFD?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Given the data pair (c, x), where c is the conditioning information from a given input modality (e.g., videos, text, or a class label), our objective is to generate a data sample x in the target modality (e.g., music audio or images) corresponding to c
>
> [Page 4](zotero://open-pdf/library/items/WBY9MBFD?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We introduce a set of negative VQ sequences Z′ = {z1, z2, ..., zN }, encoded from N negative samples X′ = {x1, x2, ..., xN }
>
> [Page 4](zotero://open-pdf/library/items/WBY9MBFD?page=4)

> [!quote|#ffd400] Image
>
> [Page 4](zotero://open-pdf/library/items/WBY9MBFD?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we illustrate our proposed step-wise parallel diffusion (bottom left) and sample-wise auxiliary diffusion (bottom right)
>
> [Page 5](zotero://open-pdf/library/items/WBY9MBFD?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> I(z0; c) ≥ log(N ) − LCDCD
>
> [Page 5](zotero://open-pdf/library/items/WBY9MBFD?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we propose the parallel variant to learn the internal coherence of the audio sequential data by emphasizing the gradual change at each time step, while the auxiliary mechanism focuses more on the sample-level connections to the conditioning
>
>> parallel更强调序列数据的时间依赖；auxiliay强调样本和条件之间的关系
>
> [Page 5](zotero://open-pdf/library/items/WBY9MBFD?page=5)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Specifically, Dhariwal & Nichol (2021) introduces the idea of classifier based guidance for the diffusion denoising probabilistic models with continuous state space. Classifier-free guidance is proposed in Ho & Salimans (2022).
>
> [Page 24](zotero://open-pdf/library/items/WBY9MBFD?page=24)


%% Import Date: 2026-05-12T01:02:00.000+00:00 %%

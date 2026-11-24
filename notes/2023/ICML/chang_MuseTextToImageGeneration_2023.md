---
Tags:
  - ICML/2023
  - text-to-image
  - masked-generative-transformers
  - discrete-token-space
  - efficient-image-synthesis
Title: "Muse: Text-To-Image Generation via Masked Generative Transformers"
ZoteroLink: zotero://open-pdf/library/items/2YPMSB89
FirstAuthor: Chang, Huiwen
Author: Zhang, Han; Barber, Jarred; Maschinot, Aaron; Lezama, Jose; Jiang, Lu; Yang, Ming-Hsuan; Murphy, Kevin Patrick; Freeman, William T.; Rubinstein, Michael; Li, Yuanzhen; Krishnan, Dilip;
Year: 2023
ItemType: conferencePaper
Citekey: chang_MuseTextToImageGeneration_2023
motivation: 提出transformer+mask实现的text-to-image模型，比扩散更快
Publisher: PMLR
Conference: International Conference on Machine Learning
Page: 4055-4075
rating: 2
---
> [!info]
> **TLDR**:: To address the inefficiency of diffusion and autoregressive text-to-image models, Muse achieves state-of-the-art generation by using parallel decoding of discrete tokens conditioned on pre-trained LLM embeddings.

> [!Cite]
> Chang, H., Zhang, H., Barber, J., Maschinot, A. J., Lezama, J., Jiang, L., Yang, M.-H., Murphy, K., Freeman, W. T., Rubinstein, M., Li, Y., & Krishnan, D. (2023). _Muse: Text-To-Image Generation via Masked Generative Transformers_ (arXiv:2301.00704). arXiv. [https://doi.org/10.48550/arXiv.2301.00704](https://doi.org/10.48550/arXiv.2301.00704)

>[!Synth]
>**Contribution**:: 遮罩图像进行生成

## Notes

和 cold diffusion 那篇一样，都被人认为是代替现有扩散过程的方法

  

大概来说，就是使用 mask 来代替添加噪声的过程

  

> 总觉得好像和 diffusion 的结构也不是那么像，毕竟并没有真的把所有的信息都掩盖掉

  

## Contributions

  

- 生成样本质量更好（quality, diversity and alignment with text prompts）

- 比现有模型更快（e.g., Stable Diffusion）

  
  

## Reddit 的讨论

  

[链接](https://www.reddit.com/r/singularity/comments/101ynds/muse_texttoimage_generation_via_masked_generative/)

  

保证质量的同时，模型大小更小

  

## 模型结构

  

模型到底会干些什么事情：

  

> The model first converts an input image into visual tokens. Next, it iteratively masks and resamples a random subset of tokens, conditioned on text prompts. This has the effect of moving the tokenized image into the typical set of the conditional distribution of images given a text prompt. Finally, the model uses the masked tokens as well as the text embedding to predict the masked image tokens.

  

概括下就是：

- 先把图像转换成 visual token

- 往 visual token 上加 mask

- 以 masked token 和 text embedding 作为输入，预测那些被遮罩掉的部分，来重构出完整的样子

  

至于啥是 image token：

> a token is a discrete representation of a **visual feature** in an image, such as an object, its spatial relationships, pose, cardinality, etc.

  

## TL;DR

  

> Muse is a text-to-image Transformer model that generates high-fidelity images from text descriptions. It achieves state-of-the-art image generation performance while being significantly more efficient than diffusion or autoregressive models. The model is trained on a ==masked modeling task in discrete token space==, which enables fine-grained language understanding and translates to high-fidelity image generation. The use of a **pre-trained large language model** enables the understanding of visual concepts such as objects, their spatial relationships, pose, cardinality, etc. The critical component for the model's inference time efficiency is the use of **parallel decoding** to predict multiple output tokens in a single forward pass. The key assumption underlying the effectiveness of the parallel decoding is a ==Markovian property that many tokens are conditionally independent given other tokens.==

  

- **parallel decoding**

  

    提高推断时候的效率

  

## how is it compared with denoising diffusion probabilistic model?

  

> Muse is compared to denoising diffusion probabilistic models such as **Imagen** and **DALL-E 2**. Compared to pixel-space diffusion models, Muse is significantly more efficient due to the use of discrete tokens and requiring fewer sampling iterations.

  

也就是宣称比扩散模型效率高得多？

  

## MaskGIT: Masked Generative Image Transformer

  

这篇文章的前身，实际上是调优了一些

  

感觉 MaskGIT 相比之下并不是 text-to-image 特化的，比较大的贡献主要在于 parallel decoding

  

## Stable Diffusion

  

关于它为什么叫 stable:

> it uses a latent variable model, a weighted variational bound, and a CLIP text encoder



## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:14 pm


> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Masked Generative Transformers
>
> [Page 1](zotero://open-pdf/library/items/JVU3ZMRR?page=1) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> discrete token
>
> [Page 2](zotero://open-pdf/library/items/JVU3ZMRR?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> higher number of iterations at inference time.
>
> [Page 3](zotero://open-pdf/library/items/JVU3ZMRR?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> cross-attention
>
> [Page 4](zotero://open-pdf/library/items/JVU3ZMRR?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Once the base model is trained, the reconstructed lower-resolution tokens and text tokens are passed into the super-res model that then learns to predict masked tokens at a higher resolution
>
> [Page 4](zotero://open-pdf/library/items/JVU3ZMRR?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> map these rich visual and semantic concepts in the LLM embeddings to the generated images
>
> [Page 4](zotero://open-pdf/library/items/JVU3ZMRR?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> These embedding vectors are linearly projected to the hidden size of our Transformer models (base and super-res)
>
> [Page 4](zotero://open-pdf/library/items/JVU3ZMRR?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> maps an input image into a sequence of tokens
>
> [Page 5](zotero://open-pdf/library/items/JVU3ZMRR?page=5) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> We found that directly predicting 512 × 512 resolution leads the model to focus on low-level details over large-scale semantics
>
> [Page 5](zotero://open-pdf/library/items/JVU3ZMRR?page=5) 



%% end annotations %%

%% Import Date: 2023-11-28T16:15:02.072+08:00 %%

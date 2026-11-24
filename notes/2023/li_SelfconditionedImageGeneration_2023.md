---
Title: Self-conditioned Image Generation via Generating Representations
Tags:
  - class-unconditional-image-generation
  - self-conditioned-generation
  - representation-conditioned-generation
  - self-supervised-learning
  - image-generation
ZoteroLink: zotero://open-pdf/library/items/X7SQW6UL
FirstAuthor: Li, Tianhong
Author: Katabi, Dina; He, Kaiming;
Year: 2023
ItemType: article
DOI: 10.48550/arXiv.2312.03701
Citekey: li_SelfconditionedImageGeneration_2023
motivation: 提高无条件图像生成的质量
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To enable high-quality class-unconditional image generation without human annotations, this paper conditions a pixel generator on self-supervised representations sampled by a representation diffusion model.

> [!cite]
> **Bibliography**:: Li, T., Katabi, D., & He, K. (2023). _Self-conditioned Image Generation via Generating Representations_ (arXiv:2312.03701). arXiv. [https://doi.org/10.48550/arXiv.2312.03701](https://doi.org/10.48550/arXiv.2312.03701)

> [!info]
> **Contribution**:: 提高 self-conditioned 的生成质量，使 classifier-free guidance 无监督可用

![](Pasted%20image%2020231218102110.png)
## Notes

挂了何恺明的名字

self-conditioned 下的生成任务，大概就是追赶 class-conditional 的表现

从上图中可以看到，整个流程分成了三个步骤：

1. **Distribution Mapping**: 把图片分布 encode 成更低维度的表示分布
2. **Representation Generation**: 用一个扩散模型，来学习表示分布
3. **Pixel Generation**: 生成阶段，将第二步的扩散模型的输出，作为**condition**，引导另一个生成模型（任意）来生成图片

其实仔细想想的话，这整个结构其实和 Latent Diffusion Model 非常相似：

- 第一步和第二步是一模一样的
- 第三步，LDM 里是将第二步中的扩散模型的输出，用 VAE 进行 decode 得到图片；本文则是将那部分输出作为 condition，引导另一个生成模型的生成

关于一些问题：

- 为什么需要步骤 b，用步骤 a 生成的表示去当条件不行吗？

	> 因为需要学习分布，才能得到没学到过的表示

- classfier-free guidance 时序能不能用？

	看起来很可能可以用

## Annotations
%% begin annotations %%


### Imported: 2023-12-18 10:16 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> classunconditional image generation
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> self-supervised representation distribution which is mapped from the image distribution using a pre-trained encoder
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> representation diffusion model
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1) 

> [!quote|#5fb236] <mark style="background-color: #5fb236">Highlight</mark>
> self-conditioned image generation
>
>> self conditioned就是self supervised的具体表现
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1) 

> [!quote|#5fb236] <mark style="background-color: #5fb236">Highlight</mark>
> it learns a representation generator to map a noise distribution to the representation distribution;
>
>> 为什么需要步骤b，用步骤a生成分布不行吗？
>> 因为要生成没见过的表示
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it learns a pixel generator (e.g., LDM [52] or MAGE [39]) to map a noise distribution to the image distribution conditioned on the representation distribution.
>
>> 感觉整个架构非常接近于LDM，区别在于步骤c生成的时候，rep在LDM里是被VAE decode的，这里是作为条件指导其它模型生成<br />
能不能用deeptime代替RDM？
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Such image representation should also retain sufficient information to guide the pixel generation process. To realize this, we develop a Representation Diffusion Model (RDM) to generate low-dimensional self-supervised image representations.
>
>> 所以步骤b是为了学习分布，而非得到离散的表达？
>
> [Page 2](zotero://open-pdf/library/items/X7SQW6UL?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The backbone consists of an input layer that projects the representation to hidden dimension 𝐶, followed by 𝑁 fully connected (fc) blocks, and an output layer that projects the hidden latent back to the original representation dimension
>
> [Page 3](zotero://open-pdf/library/items/X7SQW6UL?page=3) 

> [!quote|#5fb236] <mark style="background-color: #5fb236">Highlight</mark>
> Classifier-free Guidance
>
>> 时序能不能用？
>
> [Page 5](zotero://open-pdf/library/items/X7SQW6UL?page=5) 



%% end annotations %%

> [!quote|#5fb236] <mark style="background-color: #5fb236">Highlight</mark>
> self-conditioned image generation
>
>> self conditioned和self supervised的概念有点晕
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it learns a pixel generator (e.g., LDM [52] or MAGE [39]) to map a noise distribution to the image distribution conditioned on the representation distribution.
>
>> 感觉整个架构非常接近于LDM，区别在于步骤c生成的时候，rep在LDM里是被VAE decode的，这里是作为条件指导其它模型生成<br>能不能用deeptime代替RDM？
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Firstly, self-conditioning on representations is a more intuitive approach for unconditional image generation, mirroring an artist’s process of conceptualizing an abstract idea before translating it onto a canvas. Secondly, similar to how self-supervised learning has transcended supervised learning, self-conditioned image generation, utilizing extensive unlabeled datasets, has the potential to exceed the performance of conditional image generation. Thirdly, by omitting reliance on human annotations, selfconditioned generation paves the way for generative applications in domains beyond human annotation capabilities, such as molecule design or drug discovery.
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1)


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it learns a pixel generator (e.g., LDM [52] or MAGE [39]) to map a noise distribution to the image distribution conditioned on the representation distribution.
>
>> 感觉整个架构非常接近于LDM，区别在于步骤c生成的时候，rep在LDM里是被VAE decode的，这里是作为条件指导其它模型生成<br>能不能用deeptime代替RDM？
>
> [Page 1](zotero://open-pdf/library/items/X7SQW6UL?page=1)


%% Import Date: 2026-05-15T14:22:21.000+00:00 %%

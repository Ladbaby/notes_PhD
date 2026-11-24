---
Title: Attention is All you Need
Tags:
  - NeurIPS/2017
  - transformer
  - self-attention
  - sequence-transduction
  - encoder-decoder
  - machine-translation
ZoteroLink: zotero://open-pdf/library/items/X44A3RYM
FirstAuthor: Vaswani, Ashish
Author: Shazeer, Noam; Parmar, Niki; Uszkoreit, Jakob; Jones, Llion; Gomez, Aidan N; Kaiser, Łukasz; Polosukhin, Illia;
Year: "2017"
ItemType: conferencePaper
Volume: "30"
Publisher: Curran Associates, Inc.
Citekey: vaswani_AttentionAllyou_2017
motivation: 提出transformers，不需要RNN或者CNN的结构
Conference: Advances in Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To overcome the limitations of recurrent and convolutional sequence transduction models, the authors propose an attention-only architecture that eliminates recurrence and convolutions, enabling superior parallelizability and training efficiency.

> [!cite]
> **Bibliography**:: Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is All you Need. _Advances in Neural Information Processing Systems_, _30_. [https://papers.nips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html](https://papers.nips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html)

> [!info]
> **Contribution**:: transformers 原文

![](Pasted%20image%2020231128203448.png)

## Notes

参考[油管的视频](https://www.youtube.com/watch?v=qaWMOYf4ri8)解释

视频里把整个结构简化成了这样的形式：

![](Pasted%20image%2020231224111425.png)

省略了 output embedding 之后，整个结构看起来清晰非常多

- 预处理

	- tokenization
	- embedding
	- positional encoding

- 核心结构

	三层的 transformer blocks:
	- attention
	- feedforward

- 计算概率

	- softmax

假如从数据的角度看上面的这个结构的话：

![](Pasted%20image%2020231224111951.png)

他认为 positional encoding 是在 embedding 空间，对于每一个位置的 token，各自进行一种特定方向的位移。虽然听起来很奇怪，但是模型就是学会了每个 token 之间的相对位置

至于模型的主干的话，其实单有 feedforward 层也可以预测下一个词，不过 attention 在这里起到了==提供一个全局的视野==的作用

---

最后其实还提到了 ChatGPT 这样的问答模型需要的步骤：**fine-tuning**。因为原始的 transformers 只是获得了挨个蹦单词的能力，它其实并没有一个“提问-回答”的训练过程。fine-tuning 这里就是让 transformers 再在一个精心调教的问答数据集上进行调整，让模型的回答能够贴合问题

### Attention

具体解释见知识库里的笔记

文章特地提到了 Multi-Head Attention 和 Scaled Dot-Product Attention 的区别，给出的 Multi-Head 的优势是：

> Multi-Head Attention allows the model to jointly attend to information from different representation subspaces at different positions

multi-head 就是多个 scaled dot-product 叠在一起，好处是可以学习出来哪个 scaled dot-product 的效果比较好，给好的线性变换一个较高的权重

## Annotations
%% begin annotations %%

### Imported: 2023-11-28 8:32 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> multi-head self-attention mechanism
>
> [Page 3](zotero://open-pdf/library/items/X44A3RYM?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the decoder inserts a third sub-layer, which performs multi-head attention over the output of the encoder stack
>
> [Page 3](zotero://open-pdf/library/items/X44A3RYM?page=3) 

%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To facilitate these residual connections, all sub-layers in the model, as well as the embedding layers, produce outputs of dimension dmodel = 512
>
> [Page 3](zotero://open-pdf/library/items/X44A3RYM?page=3)


%% Import Date: 2026-05-12T00:11:14.000+00:00 %%

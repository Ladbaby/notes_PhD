---
Title: Learning Transferable Visual Models From Natural Language Supervision
Tags:
  - ICML/2021
  - vision-language-model
  - contrastive-learning
  - zero-shot
  - image-captioning
  - star
ZoteroLink: zotero://open-pdf/library/items/4BSWZQ9C
FirstAuthor: Radford, Alec
Authors: Kim, Jong Wook; Hallacy, Chris; Ramesh, Aditya; Goh, Gabriel; Agarwal, Sandhini; Sastry, Girish; Askell, Amanda; Mishkin, Pamela; Clark, Jack; Krueger, Gretchen; Sutskever, Ilya;
Year: 2021
ItemType: conferencePaper
Citekey: radford_LearningTransferableVisual_2021
motivation: 提出CLIP，让模型能够从输入文本中直接得到对应的图像概念
Author: Kim, Jong Wook; Hallacy, Chris; Ramesh, Aditya; Goh, Gabriel; Agarwal, Sandhini; Sastry, Girish; Askell, Amanda; Mishkin, Pamela; Clark, Jack; Krueger, Gretchen; Sutskever, Ilya;
Publisher: PMLR
Conference: International Conference on Machine Learning
Page: 8748-8763
rating: 2
---
> [!info]
> **TLDR**:: To overcome the limited generality of fixed-category supervision, the authors pre-train image representations on 400 million internet image-text pairs using caption matching, enabling zero-shot transfer to diverse downstream tasks.

> [!cite]
> **Bibliography**:: Radford, A., Kim, J. W., Hallacy, C., Ramesh, A., Goh, G., Agarwal, S., Sastry, G., Askell, A., Mishkin, P., Clark, J., Krueger, G., & Sutskever, I. (2021). _Learning Transferable Visual Models From Natural Language Supervision_ (arXiv:2103.00020). arXiv. [https://doi.org/10.48550/arXiv.2103.00020](https://doi.org/10.48550/arXiv.2103.00020)

> [!info]
> **Contribution**:: CLIP原文

![](Pasted%20image%2020231128101448.png)
## Notes

CLIP 这个用的特别多的模型就来自这个文章，同时也是 stable diffusion 的 text-encoder

训练了一个 pre-training 的模型，任务是预测哪个 caption 对应哪个 image

似乎在这之前的模型都主要是图像及其类别的学习，并没有学习图片和对应的自然语言描述的情况。

!!! note
    把原本的 class 的标签塞进 "A photo of a {object}" 这样的语句当中，就简单地把原来的类别标签转变成语言描述了

同时，为了提高效率，还选择了将图片的描述整个作为匹配的对象，而非描述当中的某个单词

## Pre-training VS Transfer Learning

两个概念关联程度挺高

pre-training
: is the process of training a model on a large and general dataset, such as natural language or images, and obtaining a *pre-trained model* that can be used as a start point for other tasks

transfer learning
: using a pre-trained model and **fine-tuning** it on a specific task or dataset

感觉就是 transfer learning 可以依赖于 pre-training？

## Contrastive representation learning

> Contrastive representation learning is a technique to learn low-dimensional representations of data by contrasting between similar and dissimilar samples
> 
> The idea is to take the representation of a point, and pull it closer to the representations of some points (called **positives**) while pushing it apart from the representations of other points (called **negatives**) in the embedding space

似乎听推荐组的同学说过

因为这里的任务是描述-图片配对，所以可以使用这方法


## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We demonstrate that the simple pre-training task of predicting which caption goes with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400 million (image, text) pairs collected from the internet
>
> [Page 1](zotero://open-pdf/library/items/ZNGNASAM?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The text encoder is a Transformer (Vaswani et al., 2017) with the architecture modifications described in Radford et al. (2019).
>
> [Page 5](zotero://open-pdf/library/items/ZNGNASAM?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The text sequence is bracketed with [SOS] and [EOS] tokens and the activations of the highest layer of the transformer at the [EOS] token are treated as the feature representation of the text which is layer normalized and then linearly projected into the multi-modal embedding space
>
> [Page 5](zotero://open-pdf/library/items/ZNGNASAM?page=5)


%% Import Date: 2026-05-12T00:42:31.000+00:00 %%

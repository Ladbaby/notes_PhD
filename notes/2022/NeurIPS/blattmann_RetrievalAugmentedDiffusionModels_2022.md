---
Title: Retrieval-Augmented Diffusion Models
Tags:
  - NeurIPS/2022
  - diffusion-model
  - retrieval-augmented-generation
  - generative-models
  - semi-parametric
ZoteroLink: zotero://open-pdf/library/items/73I69IDW
FirstAuthor: Blattmann, Andreas
Author: Rombach, Robin; Oktay, Kaan; Müller, Jonas; Ommer, Björn;
Year: 2022
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: 35
Page: 15309-15324
Citekey: blattmann_RetrievalAugmentedDiffusionModels_2022
Conference: Advances in Neural Information Processing Systems
motivation: "减少模型参数"
rating: 2
---
> [!info]
> **TLDR**:: To address the reliance on massive parametric models for image synthesis, this work introduces a semi-parametric approach that conditions small diffusion models on retrieved nearest neighbors from an external database, significantly reducing parameter count while maintaining competitive performance.

> [!cite]
> **Bibliography**:: Blattmann, A., Rombach, R., Oktay, K., Müller, J., & Ommer, B. (2022). Retrieval-Augmented Diffusion Models. _Advances in Neural Information Processing Systems_, _35_, 15309-15324.

> [!info]
> **Contribution**:: 检索增强用于图像

![](Pasted%20image%2020231128163746.png)

## Notes
>
>Comment: NeurIPS 2022.

声称可以在未训练的任务上也能得到相当出色的结果

大概的意思是，这个模型有个很特殊的组成部分：retrieval function。它干的事情是：

> given a query from the training data, retrieves suitable data representations from the external dataset

啥叫 suitable 呢？

> nearest neighbor lookup

似乎是一个在 retrieval-augmented NLP 里提出来的东西

就是说训练的时候模型拿到的不知是一个样本，还有一些从 external dataset 里获取到的 nearest neighbors。声称这样的做法可以：
- "learn to compose new scenes based on retrieved visual instances"，而非从头开始生成
- 减少需要的 parameter 数量
- 降低计算需求

标题里的 semi 意思正是 retrieval function 和所抽取出来的数据是非参数化的


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:34 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> During training we retrieve a set of nearest neighbors from this external database for each training instance and condition the generative model on these informative samples
>
> [Page 1](zotero://open-pdf/library/items/PDRHM6WB?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The evaluation shows competitive performance on tasks which the generative model has not been trained on
>
> [Page 1](zotero://open-pdf/library/items/PDRHM6WB?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> retrieval-augmented NLP
>
> [Page 1](zotero://open-pdf/library/items/PDRHM6WB?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> nearest neighbor lookup
>
> [Page 2](zotero://open-pdf/library/items/PDRHM6WB?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> learn to compose new scenes based on retrieved visual instances.
>
> [Page 2](zotero://open-pdf/library/items/PDRHM6WB?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> reduced parameter count
>
> [Page 2](zotero://open-pdf/library/items/PDRHM6WB?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> post-hoc model modification
>
> [Page 2](zotero://open-pdf/library/items/PDRHM6WB?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> retrieval-augmented diffusion (RDM)
>
> [Page 2](zotero://open-pdf/library/items/PDRHM6WB?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> using scaNN [28] for the NNsearch
>
> [Page 2](zotero://open-pdf/library/items/PDRHM6WB?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Retrieval-Augmented Generative Models
>
> [Page 3](zotero://open-pdf/library/items/PDRHM6WB?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> but also a (fixed) set of data representations and a non-learnable retrieval function
>
> [Page 3](zotero://open-pdf/library/items/PDRHM6WB?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> latent diffusion models
>
> [Page 4](zotero://open-pdf/library/items/PDRHM6WB?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we use the cross-attention conditioning mechanism
>
> [Page 5](zotero://open-pdf/library/items/PDRHM6WB?page=5) 


%% Import Date: 2026-05-11T03:06:11.000+00:00 %%

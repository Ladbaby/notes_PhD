---
Title: A Survey on Contrastive Self-supervised Learning
Tags:
  - arXiv/2021
  - contrastive-learning
  - self-supervised-learning
  - representation-learning
  - computer-vision
  - natural-language-processing
ZoteroLink: zotero://open-pdf/library/items/4Y98HCYL
FirstAuthor: Jaiswal, Ashish
Author: Babu, Ashwin Ramesh; Zadeh, Mohammad Zaki; Banerjee, Debapriya; Makedon, Fillia;
Year: "2021"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2011.00362
Citekey: jaiswal_SurveyContrastiveSelfsupervised_2021
rating: 2
---
> [!info]
> **TLDR**:: To address the high cost of annotating large-scale datasets, this paper reviews contrastive self-supervised learning methods, detailing their pretext tasks, architectures, downstream performance, and future directions.

> [!cite]
> **Bibliography**:: Jaiswal, A., Babu, A. R., Zadeh, M. Z., Banerjee, D., & Makedon, F. (2021). A Survey on Contrastive Self-supervised Learning. https://doi.org/10.48550/arXiv.2011.00362

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: 20 pages, 18 figures, 6 tables.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It aims at embedding augmented versions of the same sample close to each other while trying to push away embeddings from different samples
>
> [Page 1](zotero://open-pdf/library/items/4Y98HCYL?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Unlike generative models, contrastive learning (CL) is a discriminative approach that aims at grouping similar samples closer and diverse samples far from each other as shown in figure
>
> [Page 3](zotero://open-pdf/library/items/4Y98HCYL?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> feature representations of the images
>
> [Page 3](zotero://open-pdf/library/items/4Y98HCYL?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> During training referring to figure 2, the augmented version of the original sample is considered as a positive sample, and the rest of the samples in the batch/dataset (depends on the method being used) are considered negative samples
>
> [Page 3](zotero://open-pdf/library/items/4Y98HCYL?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The differentiation is achieved with the help of some pretext task
>
> [Page 3](zotero://open-pdf/library/items/4Y98HCYL?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The learned model from the pretext task can be used for any downstream tasks such as classification, segmentation, detection, etc. in computer vision
>
> [Page 4](zotero://open-pdf/library/items/4Y98HCYL?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A video contains a sequence of semantically related frames
>
> [Page 5](zotero://open-pdf/library/items/4Y98HCYL?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a video with shuffled order in the sequence of its image frames acts as a positive sample while all other videos in the batch/dataset would be negative samples
>
> [Page 5](zotero://open-pdf/library/items/4Y98HCYL?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The goal is to use a contrastive loss to train the model such that clips taken from the same video are arranged closer whereas clips from different videos are pushed away in the embedding space
>
> [Page 5](zotero://open-pdf/library/items/4Y98HCYL?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The main aim of a pre-text task is to compel the model to be invariant to these transformations while remaining discriminative to other data points
>
> [Page 7](zotero://open-pdf/library/items/4Y98HCYL?page=7)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In "next sentence prediction", the model predicts whether two inputs sentences can be consecutive sentences or not
>
> [Page 8](zotero://open-pdf/library/items/4Y98HCYL?page=8)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It can be seen as a dictionary-lookup task where the dictionary is sometimes the whole training set and the rest of the times some subset of the dataset
>
> [Page 8](zotero://open-pdf/library/items/4Y98HCYL?page=8)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> cosine similarity
>
> [Page 8](zotero://open-pdf/library/items/4Y98HCYL?page=8)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> this architecture follows an end-to-end approach with two encoders that share parameters, but instead of using instance-based contrastive approach, they utilize a clustering algorithm to group similar features together.
>
> [Page 10](zotero://open-pdf/library/items/4Y98HCYL?page=10)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> instance-based learning
>
> [Page 10](zotero://open-pdf/library/items/4Y98HCYL?page=10)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Contrastive learning focuses on comparing the embeddings with a Noise Contrastive Estimation (NCE)
>
> [Page 12](zotero://open-pdf/library/items/4Y98HCYL?page=12)

> [!quote|#ffd400] Image
>
> [Page 12](zotero://open-pdf/library/items/4Y98HCYL?page=12)


%% Import Date: 2026-05-12T00:50:02.000+00:00 %%

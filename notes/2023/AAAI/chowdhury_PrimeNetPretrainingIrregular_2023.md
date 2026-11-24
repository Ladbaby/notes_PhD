---
Title: "PrimeNet: Pre-training for Irregular Multivariate Time Series"
Tags:
  - AAAI/2023
  - irregular-time-series
  - representation-learning
  - transformer
  - pre-training
ZoteroLink: zotero://open-pdf/library/items/B445B39Y
FirstAuthor: Chowdhury, Ranak Roy
Author: Li, Jiacheng; Zhang, Xiyuan; Hong, Dezhi; Gupta, Rajesh K.; Shang, Jingbo;
Year: "2023"
ItemType: journalArticle
Journal: Proceedings of the AAAI Conference on Artificial Intelligence
Volume: "37"
Issue: "6"
Page: 7184-7192
DOI: 10.1609/aaai.v37i6.25876
Citekey: chowdhury_PrimeNetPretrainingIrregular_2023
motivation: 考虑了不规则特性的预训练模型
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of irregular multivariate time series where existing methods ignore asynchronicity, PrimeNet learns self-supervised representations via time-sensitive contrastive learning and density-aware data reconstruction.

> [!cite]
> **Bibliography**:: Chowdhury, R. R., Li, J., Zhang, X., Hong, D., Gupta, R. K., & Shang, J. (2023). PrimeNet: Pre-training for Irregular Multivariate Time Series. _Proceedings of the AAAI Conference on Artificial Intelligence_, _37_(6), Article 6. [https://doi.org/10.1609/aaai.v37i6.25876](https://doi.org/10.1609/aaai.v37i6.25876)

> [!info]
> **Contribution**:: 不规则预训练模型

![](Pasted%20image%2020240116154511.png)

## Notes

整个文章是使用对比学习和重构两个部分作为损失进行预训练+针对不同下游任务进行微调的模式。而且整篇文章都围绕着“密度”在做文章

对比学习这部分，他试图使用 sampling 作为 data augmentation 的手段。因为 time-slicing 或者 random sampling 在不规则里使用的话都会有问题：

![](Pasted%20image%2020240116155031.png)
![](Pasted%20image%2020240116155043.png)
于是本文就设计了一种==考虑采样密度==的采样方式，如上图最右边。它会先估算一下当前样本附近的样本密度，然后得到所有密度之后，进行排序，在稀疏和稠密的区域都分别取一些样本，避免只取到稠密区域的样本

重构损失的学习这部分至少说的还挺有道理。为了用 mask 来对齐所有的样本维度，他就使用了 "constant time duration masking"：

![](Pasted%20image%2020240116155425.png)

防止有些 mask 片段的长度非常长，造成重构的难度大幅度提升

## Annotations
%% begin annotations %%


### Imported: 2024-01-16 3:37 pm


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> such irregularity offers insight about domain property of the data
>
> [Page 1](zotero://open-pdf/library/items/B445B39Y?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> always masks a constant time duration to accommodate reconstruction for regions of different sampling density
>
> [Page 1](zotero://open-pdf/library/items/B445B39Y?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Therefore, we propose a fixed time masking technique that always masks over the same duration of data instead
>
> [Page 2](zotero://open-pdf/library/items/B445B39Y?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> captures the interaction between feature values with their corresponding sampling times
>
> [Page 3](zotero://open-pdf/library/items/B445B39Y?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> models the self-attention within features.
>
> [Page 3](zotero://open-pdf/library/items/B445B39Y?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For every sampling time Ti, we compute its mean time interval, Zi, by averaging the time lapse between its immediate predecessor, Ti−1, and successor, Ti+1, to estimate the local density of the sampled features at Ti (Line 1).
>
>> 有点意思 估计密度
>
> [Page 4](zotero://open-pdf/library/items/B445B39Y?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> compute the timespan qn to mask separately for each feature n (Line 5)
>
>> 也有意思，根据不同的特征维度，选用不同的mask密度
>
> [Page 4](zotero://open-pdf/library/items/B445B39Y?page=4) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> such irregularity offers insight about domain property of the data
>
> [Page 7184](zotero://open-pdf/library/items/B445B39Y?page=7184)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> always masks a constant time duration to accommodate reconstruction for regions of different sampling density
>
> [Page 7184](zotero://open-pdf/library/items/B445B39Y?page=7184)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Therefore, we propose a fixed time masking technique that always masks over the same duration of data instead
>
> [Page 7185](zotero://open-pdf/library/items/B445B39Y?page=7185)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> captures the interaction between feature values with their corresponding sampling times
>
> [Page 7186](zotero://open-pdf/library/items/B445B39Y?page=7186)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> models the self-attention within features.
>
> [Page 7186](zotero://open-pdf/library/items/B445B39Y?page=7186)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For every sampling time Ti, we compute its mean time interval, Zi, by averaging the time lapse between its immediate predecessor, Ti−1, and successor, Ti+1, to estimate the local density of the sampled features at Ti (Line 1).
>
>> 有点意思 估计密度
>
> [Page 7187](zotero://open-pdf/library/items/B445B39Y?page=7187)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the XN is formed from all other instances in the same mini-batch
>
> [Page 7187](zotero://open-pdf/library/items/B445B39Y?page=7187)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Normalized Temperature-scaled Cross Entropy (NT-Xent) Loss
>
> [Page 7187](zotero://open-pdf/library/items/B445B39Y?page=7187)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> compute the timespan qn to mask separately for each feature n (Line 5)
>
>> 也有意思，根据不同的特征维度，选用不同的mask密度
>
> [Page 7187](zotero://open-pdf/library/items/B445B39Y?page=7187)


%% Import Date: 2026-05-12T01:29:04.000+00:00 %%

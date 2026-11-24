---
Title: "SAMformer: Unlocking the Potential of Transformers in Time Series Forecasting with Sharpness-Aware Minimization and Channel-Wise Attention"
Tags:
  - ICML/2024
  - time-series-forecasting
  - transformer
  - sharpness-aware-minimization
  - channel-wise-attention
ZoteroLink: zotero://open-pdf/library/items/I5VPFQQL
FirstAuthor: Ilbert, Romain
Author: Odonnat, Ambroise; Feofanov, Vasilii; Virmaux, Aladin; Paolo, Giuseppe; Palpanas, Themis; Redko, Ievgen;
Year: "2024"
ItemType: conferencePaper
Citekey: ilbert_SAMformerUnlockingPotential_2024
Conference: Forty-first International Conference on Machine Learning
rating: 2
---
> [!info]
> **TLDR**:: To address transformers' inferior performance in multivariate long-term forecasting caused by attention-induced poor generalization, the authors propose SAMformer, a shallow model optimized with sharpness-aware optimization to escape bad local minima.

> [!cite]
> **Bibliography**:: Ilbert, R., Odonnat, A., Feofanov, V., Virmaux, A., Paolo, G., Palpanas, T., & Redko, I. (2024, June 6). _SAMformer: Unlocking the Potential of Transformers in Time Series Forecasting with Sharpness-Aware Minimization and Channel-Wise Attention_. Forty-first International Conference on Machine Learning. [https://openreview.net/forum?id=8kLzL5QBh2](https://openreview.net/forum?id=8kLzL5QBh2)

> [!info]
> **Contribution**:: 分析了现有 transformers 时序预测表现欠佳的原因

## Notes

其实文章本身没做什么很创新的事情，只不过分析的比较详细且有理有据，然后就利用了两个现有的方法来解决，于是就中了

现有的 transformers 的核心问题是 attention 层容易变成单位矩阵，然后就一直这样了，陷入局部最优。于是本文就用了一种叫 Sharpness-Aware Minimization 的技术来解决。然后。。。就没有了？

## Annotations
%% begin annotations %%


### Imported: 2024-07-19 5:00 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> converges to sharp local minima. We further identify that attention is mainly responsible for this phenomenon
>
> [Page 2](zotero://open-pdf/library/items/I5VPFQQL?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sharpness-aware minimization (SAM)
>
> [Page 2](zotero://open-pdf/library/items/I5VPFQQL?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We can see that the attention matrix is close to the identity matrix right after the very first epoch and barely changes afterward, especially with the softmax amplifying the differences in the matrix values.
>
>> 罪魁祸首
>
> [Page 4](zotero://open-pdf/library/items/I5VPFQQL?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It shows the emergence of attention’s entropy collapse with a full-rank attention matrix, which was identified in Zhai et al. (2023) as one of the reasons behind the hardness of training transformers
>
> [Page 4](zotero://open-pdf/library/items/I5VPFQQL?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sharpness-aware minimization framework
>
> [Page 4](zotero://open-pdf/library/items/I5VPFQQL?page=4) 

> [!quote|#ffd400] Image
> ![[attachments/ilbert_SAMformerUnlockingPotential_2024/image-4-x84-y122.png]]
>
> [Page 4](zotero://open-pdf/library/items/I5VPFQQL?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Reversible Instance Normalization
>
>> 又是你？
>
> [Page 5](zotero://open-pdf/library/items/I5VPFQQL?page=5) 



%% end annotations %%

> [!quote|#ffd400] Image
>
> [Page 4](zotero://open-pdf/library/items/I5VPFQQL?page=4)


%% Import Date: 2026-05-12T02:27:35.000+00:00 %%

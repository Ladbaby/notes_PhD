---
Title: "FEDformer: Frequency Enhanced Decomposed Transformer for Long-term Series Forecasting"
Tags:
  - ICML/2022
  - time-series-forecasting
  - time-series
  - transformer
  - seasonal-trend-decomposition
ZoteroLink: zotero://open-pdf/library/items/CLNR9TGG
FirstAuthor: Zhou, Tian
Author: Ma, Ziqing; Wen, Qingsong; Wang, Xue; Sun, Liang; Jin, Rong;
Year: 2022
ItemType: article
Conference: Proceedings of the 39th International Conference on Machine Learning
Page: 27268-27286
Citekey: zhou_FEDformerFrequencyEnhanced_2022
motivation: 解决transformers无法建模全局trend、计算开销大的问题
rating: 2
---
> [!info]
> **TLDR**:: Long-term forecasting suffers from Transformer inefficiency and poor global trend capture by combining seasonal-trend decomposition for global profiles with frequency-enhanced Transformers to reduce prediction error while achieving linear complexity.

> [!cite]
> **Bibliography**:: Zhou, T., Ma, Z., Wen, Q., Wang, X., Sun, L., & Jin, R. (2022). FEDformer: Frequency Enhanced Decomposed Transformer for Long-term Series Forecasting. In _International Conference on Machine Learning_., 27268-27286

> [!info]
> **Contribution**:: 

![](Pasted%20image%2020231128210647.png)
## Notes
>
>Comment: Accepted by The 39th International Conference on Machine Learning (ICML 2022).


和 Autoformer 对比的话，就会发现这模型图简直就差不多一模一样。所以抛开文章提到的关于 decompose 的重要性，本文的重点还是集中在频域的使用上

## Compact Representation of Time Series in Frequency Domain

文章的前提描述是：傅里叶分析假如保留所有频率的结果的话，会导致较差的表现，因为高频容易受噪声干扰。而只保留低频也不好。

所以，他们的做法是随机选取一定数量的傅里叶分量 (Fourier components)，同时覆盖低频与高频。这个做法初看有些反直觉，但论文从理论和实验两方面都给出了可行性论证

甚至顺带可以把 $O(N^2)$ 的复杂度给降到 $O(N)$
## Annotations



> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> seasonal-trend decomposition method
>
> [Page 1](zotero://open-pdf/library/items/CLNR9TGG?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> decomposition method captures the global profile of time series while Transformers capture more detailed structures
>
> [Page 1](zotero://open-pdf/library/items/CLNR9TGG?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sparse representation
>
> [Page 1](zotero://open-pdf/library/items/CLNR9TGG?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> frequency enhanced
>
> [Page 1](zotero://open-pdf/library/items/CLNR9TGG?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> frequency domain mapping
>
> [Page 2](zotero://open-pdf/library/items/CLNR9TGG?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> selecting a fixed number of Fourier components
>
> [Page 2](zotero://open-pdf/library/items/CLNR9TGG?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> keeping a compact representation of time series using a small number of selected Fourier components
>
> [Page 2](zotero://open-pdf/library/items/CLNR9TGG?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A′ is able to preserve most of the information from A
>
> [Page 3](zotero://open-pdf/library/items/CLNR9TGG?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where F (·) is a set of average pooling filters and Softmax(L(x)) is the weights for mixing these extracted trends.
>
> [Page 6](zotero://open-pdf/library/items/CLNR9TGG?page=6)


%% Import Date: 2026-05-15T13:30:56.000+00:00 %%

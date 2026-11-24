---
Title: "ImputeFormer: Low Rankness-Induced Transformers for Generalizable Spatiotemporal Imputation"
Tags:
  - KDD/2024
  - spatio-temporal-modeling
  - transformer
  - low-rank
  - missing-data
ZoteroLink: zotero://open-pdf/library/items/DMW6PDES
FirstAuthor: Nie, Tong
Author: Qin, Guoyang; Ma, Wei; Mei, Yuewen; Sun, Jian;
Year: "2024"
ItemType: conferencePaper
Conference: Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining
Publisher: Association for Computing Machinery
Location: New York, NY, USA
Page: 2260–2271
DOI: 10.1145/3637528.3671751
ISBN: 979-8-4007-0490-1
Citekey: nie_ImputeFormerLowRanknessInduced_2024
motivation: 基于低秩先验的插补 Transformer，理论铺垫较长
rating: 2
---
> [!info]
> **TLDR**:: To address the trade-off between limited capacity in low-rank models and lacking structural priors in deep learning for spatiotemporal imputation, this paper introduces a low rankness-induced Transformer that balances inductive bias with expressivity.

> [!cite]
> **Bibliography**:: Nie, T., Qin, G., Ma, W., Mei, Y., & Sun, J. (2024). ImputeFormer: Low Rankness-Induced Transformers for Generalizable Spatiotemporal Imputation. _Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining_, , 2260–2271. https://doi.org/10.1145/3637528.3671751

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The former assumes general structural priors but has limited model capacity
>
> [Page 2260](zotero://open-pdf/library/items/DMW6PDES?page=2260)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> lacks prior knowledge of the underlying spatiotemporal structures
>
> [Page 2260](zotero://open-pdf/library/items/DMW6PDES?page=2260)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Low-rank models can filter out informative signals and generate a smooth reconstruction, resulting in truncating too much energy in the left part of its spectrum
>
> [Page 2261](zotero://open-pdf/library/items/DMW6PDES?page=2261)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Deep models can preserve high-frequency noise and generate sharp imputations, maintaining too much energy for the right part of the singular spectrum
>
> [Page 2261](zotero://open-pdf/library/items/DMW6PDES?page=2261)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Our approach, referred to as Imputation Transformers (ImputeFormer), imposes low-rankness and achieves attention factorization equivalently by introducing a projected attention in the temporal dimension and an embedded attention in
>
> [Page 2261](zotero://open-pdf/library/items/DMW6PDES?page=2261)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the spatial dimension
>
> [Page 2261](zotero://open-pdf/library/items/DMW6PDES?page=2261)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A Fourier sparsity loss is also proposed to regularize the solution’s spectrum
>
> [Page 2261](zotero://open-pdf/library/items/DMW6PDES?page=2261)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Spurious correlations
>
>> 虚假相关性
>
> [Page 2263](zotero://open-pdf/library/items/DMW6PDES?page=2263)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> High-rank estimations
>
>> 大概是过度学习的意思？
>
> [Page 2263](zotero://open-pdf/library/items/DMW6PDES?page=2263)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Scalability issue
>
>> 计算复杂
>
> [Page 2263](zotero://open-pdf/library/items/DMW6PDES?page=2263)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it can be viewed as a channel-wise matrix factorization to reduce redundancy within each time series.
>
> [Page 2264](zotero://open-pdf/library/items/DMW6PDES?page=2264)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In some cases, specific spatial events, such as traffic congestion, can lead to non-local patterns and unusual records
>
>> 多变量的动机
>
> [Page 2264](zotero://open-pdf/library/items/DMW6PDES?page=2264)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we can reduce the complexity using the associative property of matrix multiplication if we can decouple the softmax function. To this end, we apply the softmax on separate side of the Q-K matrix and approximate A as:
>
>> 还能这样减少attention计算量？
>
> [Page 2264](zotero://open-pdf/library/items/DMW6PDES?page=2264)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By computing the multiplication of 𝜎1 (K e (ℓ ) 𝑒 )T and Z(ℓ ) 𝑡 at first, the above process admits a O (𝑁 𝐷emb) time complexity, which scales linearly with respect to the number of sensors
>
> [Page 2264](zotero://open-pdf/library/items/DMW6PDES?page=2264)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Since E is decoupled from temporal information, it is robust to missing values and reliable to infer a correlation map for global imputation
>
>> 这里的观点是node embedding因为不受时间维度影响所以对填补来说比较可靠，但其实有点问题
>
> [Page 2264](zotero://open-pdf/library/items/DMW6PDES?page=2264)


%% Import Date: 2026-05-12T02:37:37.000+00:00 %%

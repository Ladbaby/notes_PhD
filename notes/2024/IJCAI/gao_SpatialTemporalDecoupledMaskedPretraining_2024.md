---
Title: Spatial-Temporal-Decoupled Masked Pre-training for Spatiotemporal Forecasting
Tags:
  - IJCAI/2024
  - spatiotemporal-forecasting
  - masked-pre-training
  - spatial-temporal-decoupling
  - self-supervised-learning
ZoteroLink: zotero://open-pdf/library/items/XNT3S4GZ
FirstAuthor: Gao, Haotian
Author: Jiang, Renhe; Dong, Zheng; Deng, Jinliang; Ma, Yuxin; Song, Xuan;
Year: 2024
ItemType: conferencePaper
Volume: 5
Page: 3998-4006
DOI: 10.24963/ijcai.2024/442
Citekey: gao_SpatialTemporalDecoupledMaskedPretraining_2024
motivation: 现有方法难以应对输入和输出窗口的时序特征不一致的问题
Conference: Thirty-Third International Joint Conference on Artificial Intelligence
rating: 2
---

> [!info]
> **TLDR**:: To address the spatiotemporal mirage problem caused by entangled spatial and temporal dependencies in masked pre-training, this study proposes a Spatial-Temporal-Decoupled framework that independently models these dimensions for improved forecasting accuracy.

> [!cite]
> **Bibliography**:: Gao, H., Jiang, R., Dong, Z., Deng, J., Ma, Y., & Song, X. (2024). _Spatial-Temporal-Decoupled Masked Pre-training for Spatiotemporal Forecasting_. _5_, 3998–4006. [https://doi.org/10.24963/ijcai.2024/442](https://doi.org/10.24963/ijcai.2024/442)

> [!info]
> **Contribution**:: 找动机的问题找得很好？

## Notes
![](Pasted%20image%2020260106161336.png)

模型只能说平平无奇，就是两个维度分别做掩码然后重构。

实际性能的话，在时空数据集上确实排名第一，但是在其他数据集上经常报错？


## Annotations
%% begin annotations %%


### Imported: 2026-01-06 4:11 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> spatiotemporal mirage, i.e., similar input time series followed by dissimilar future values and vice versa
>
>> 哦就是输入和输出窗口的性质不同
>
> [Page ](zotero://open-pdf/library/items/XNT3S4GZ?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> So we intend to introduce a masked pre-training phase involving long-range input
>
>> 回看特别长的时间窗口来捕捉长期的时间关系
>
> [Page 3](zotero://open-pdf/library/items/XNT3S4GZ?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This approach separately executes mask-reconstruction tasks along temporal and spatial dimension
>
> [Page 3](zotero://open-pdf/library/items/XNT3S4GZ?page=3) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> spatiotemporal mirage, i.e., similar input time series followed by dissimilar future values and vice versa
>
>> 哦就是输入和输出窗口的性质不同
>
> [Page 3998](zotero://open-pdf/library/items/XNT3S4GZ?page=3998)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> So we intend to introduce a masked pre-training phase involving long-range input
>
>> 回看特别长的时间窗口来捕捉长期的时间关系
>
> [Page 4000](zotero://open-pdf/library/items/XNT3S4GZ?page=4000)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This approach separately executes mask-reconstruction tasks along temporal and spatial dimension
>
> [Page 4000](zotero://open-pdf/library/items/XNT3S4GZ?page=4000)


%% Import Date: 2026-05-12T02:36:21.000+00:00 %%

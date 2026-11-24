---
Title: "TimeSiam: A Pre-Training Framework for Siamese Time-Series Modeling"
Tags:
  - ICML/2024
  - time-series
  - pre-training
  - siamese-networks
  - temporal-correlation
ZoteroLink: zotero://open-pdf/library/items/84CG2K2E
FirstAuthor: Dong, Jiaxiang
Author: Wu, Haixu; Wang, Yuxuan; Qiu, Yun-Zhong; Zhang, Li; Wang, Jianmin; Long, Mingsheng;
Year: "2024"
ItemType: conferencePaper
Conference: International Conference on Machine Learning
Publisher: PMLR
Page: 11412-11436
Citekey: dong_TimeSiamPreTrainingFramework_2024
rating: 2
---
> [!info]
> **TLDR**:: To address the distortion of temporal correlations in existing time series pre-training methods, this paper proposes TimeSiam, a Siamese network framework that captures intrinsic temporal dependencies through past-to-current reconstruction and learnable lineage embeddings.

> [!cite]
> **Bibliography**:: Dong, J., Wu, H., Wang, Y., Qiu, Y., Zhang, L., Wang, J., & Long, M. (2024). TimeSiam: A Pre-Training Framework for Siamese Time-Series Modeling. In _International Conference on Machine Learning_., 11412-11436

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="8"><p>大数据集<br>预测、分类<br>Siamese network</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, randomly masking time series or calculating series-wise similarity will distort or neglect inherent temporal correlations crucial in time series data.
>
> [Page 1](zotero://open-pdf/library/items/84CG2K2E?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Unlike prior, as shown in Figure 1, TimeSiam proposes to sample pairs of subseries across different timestamps from the same time series, termed “Siamese subseries”
>
>> 就是拆分原始长序列成为子序列的意思
>
> [Page 2](zotero://open-pdf/library/items/84CG2K2E?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It is worth noting that to further demonstrate the pre-training benefits under large and diverse data, we employ the TSLD dataset, which is constructed by merging time series datasets from multiple domains that are nonoverlapping with the other datasets
>
>> TSLD是个大数据集？
>
> [Page 5](zotero://open-pdf/library/items/84CG2K2E?page=5)


%% Import Date: 2026-05-12T02:26:35.000+00:00 %%

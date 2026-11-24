---
Title: "SCINet: Time Series Modeling and Forecasting with Sample Convolution and Interaction"
Tags:
  - NeurIPS/2022
  - time-series-forecasting
  - sample-convolution
  - multiscale
  - intra-sample-interaction
ZoteroLink: zotero://open-pdf/library/items/49YZD8AV
FirstAuthor: Liu, Minhao
Author: Zeng, Ailing; Chen, Muxi; Xu, Zhijian; Lai, Qiuxia; Ma, Lingna; Xu, Qiang;
Year: "2022"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "35"
Page: 5816-5828
Citekey: liu_SCINetTimeSeries_2022
motivation: 无
rating: 2
---

> [!info]
> **TLDR**:: To address the lack of specialized temporal modeling in generic sequence networks, SCINet leverages preserved temporal relations after downsampling through a recursive downsample-convolve-interact architecture.

> [!cite]
> **Bibliography**:: Liu, M., Zeng, A., Chen, M., Xu, Z., Lai, Q., Ma, L., & Xu, Q. (2022). SCINet: Time Series Modeling and Forecasting with Sample Convolution and Interaction. _Advances in Neural Information Processing Systems_, _35_, 5816–5828.

> [!info]
> **Contribution**:: 递归卷积多尺度

## Notes

![](Pasted%20image%2020260106111434.png)

这个跟 ReIMTS 甚至还有点像，也是递归。只不过它选择了用卷积进行重采样。


## Annotations
%% begin annotations %%


### Imported: 2026-01-06 11:13 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SCINet is a recursive downsample-convolve-interact architecture. In each layer, we use multiple convolutional filters to extract distinct yet valuable temporal features from the downsampled sub-sequences or features. By combining these rich features aggregated from multiple resolutions, SCINet effectively models time series with complex temporal dynamics
>
>> 递归下采样的框架
>
> [Page ](zotero://open-pdf/library/items/49YZD8AV?page=) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SCINet is a recursive downsample-convolve-interact architecture. In each layer, we use multiple convolutional filters to extract distinct yet valuable temporal features from the downsampled sub-sequences or features. By combining these rich features aggregated from multiple resolutions, SCINet effectively models time series with complex temporal dynamics
>
>> 递归下采样的框架
>
> [Page 1](zotero://open-pdf/library/items/49YZD8AV?page=1)


%% Import Date: 2026-05-12T01:11:08.000+00:00 %%

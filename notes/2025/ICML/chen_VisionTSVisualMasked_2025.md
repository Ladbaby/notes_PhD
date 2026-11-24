---
Title: "VisionTS: Visual Masked Autoencoders Are Free-Lunch Zero-Shot Time Series Forecasters"
Tags:
  - ICML/2025
  - time-series-forecasting
  - visual-masked-autoencoders
  - zero-shot
  - foundation-model
ZoteroLink: zotero://open-pdf/library/items/P2GLUZ54
FirstAuthor: Chen, Mouxiang
Author: Shen, Lefei; Li, Zhuo; Wang, Xiaoyun Joy; Sun, Jianling; Liu, Chenghao;
Year: "2025"
ItemType: conferencePaper
Citekey: chen_VisionTSVisualMasked_2025
motivation: 现有基于 LLM 的方法会有不同领域之间的隔阂？？？
Conference: Forty-second International Conference on Machine Learning
rating: 3
---
> [!info]
> **TLDR**:: To overcome the cross-domain gap and in-domain heterogeneity in time series forecasting foundation models, this paper reformulates forecasting as image reconstruction using a pre-trained visual masked autoencoder.

> [!cite]
> **Bibliography**:: Chen, M., Shen, L., Li, Z., Wang, X. J., Sun, J., & Liu, C. (2025, June 18). _VisionTS: Visual Masked Autoencoders Are Free-Lunch Zero-Shot Time Series Forecasters_. Forty-second International Conference on Machine Learning. [https://openreview.net/forum?id=5DSj3MfWrB&noteId=rKhNYLEbSM](https://openreview.net/forum?id=5DSj3MfWrB&noteId=rKhNYLEbSM)

> [!info]
> **Contribution**:: 拿视觉模型 MAE 来做时序

## Notes

![](Pasted%20image%2020260107114005.png)

怎么说呢，看着似乎确实能对应起来。

![](Pasted%20image%2020260107114044.png)

实际上是把时序转成灰度图一样的东西，然后喂给 MAE。

实验效果还可以，就是跑得实在是太慢了。


## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> severe cross-domain gap or in-domain heterogeneity
>
> [Page 1](zotero://open-pdf/library/items/P2GLUZ54?page=1)


%% Import Date: 2026-05-12T03:11:07.000+00:00 %%

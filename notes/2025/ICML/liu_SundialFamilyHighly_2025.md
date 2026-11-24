---
Title: "Sundial: A Family of Highly Capable Time Series Foundation Models"
Tags:
  - ICML/2025
  - time-series-forecasting
  - foundation-model
  - flow-matching
  - transformer
ZoteroLink: zotero://open-pdf/library/items/9BDBHRHR
FirstAuthor: Liu, Yong
Author: Qin, Guo; Shi, Zhiyuan; Chen, Zhi; Yang, Caiyin; Huang, Xiangdong; Wang, Jianmin; Long, Mingsheng;
Year: "2025"
ItemType: conferencePaper
Citekey: liu_SundialFamilyHighly_2025
motivation: 无
Conference: Forty-second International Conference on Machine Learning
rating: 1
---
> [!info]
> **TLDR**:: To enable native pre-training of Transformers on continuous time series without discrete tokenization, Sundial employs a TimeFlow Loss based on flow-matching to mitigate mode collapse and achieve flexible, scalable generative forecasting.

> [!cite]
> **Bibliography**:: Liu, Y., Qin, G., Shi, Z., Chen, Z., Yang, C., Huang, X., Wang, J., & Long, M. (2025, June 18). _Sundial: A Family of Highly Capable Time Series Foundation Models_. Forty-second International Conference on Machine Learning. [https://openreview.net/forum?id=LO7ciRpjI5](https://openreview.net/forum?id=LO7ciRpjI5)

> [!info]
> **Contribution**:: Timer-XL续作，而且数据集上又整了个更大的

## Notes

![](Pasted%20image%2020260106163605.png)

正文大量篇幅在论证「连续性」与 flow-matching 损失的理论动机，但这部分与最终性能之间的因果关系并不清晰。

而且只开源一个几乎只能推理的 huggingface 模型，完全就不想其他人接着改是吧

[Timer-XL](liu_TimerXLLongContextTransformers_2025.md) 的续作

## Annotations
%% begin annotations %%


### Imported: 2026-01-06 4:34 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we pad the input at the beginning
>
>> 在头部填充，大概是为了预测任务考虑的
>
> [Page 4](zotero://open-pdf/library/items/9BDBHRHR?page=4) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Motivated by the empirical observation that a larger patch size improves the performance in decoder-only Transformers (Das et al., 2023b) while a small patch size can be more flexible to accommodate data of different frequencies
>
>> patch size对结果的影响
>
> [Page 5](zotero://open-pdf/library/items/9BDBHRHR?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> FEV leaderboard
>
> [Page 7](zotero://open-pdf/library/items/9BDBHRHR?page=7) 



%% end annotations %%

%% Import Date: 2026-01-06T16:34:20.143+08:00 %%

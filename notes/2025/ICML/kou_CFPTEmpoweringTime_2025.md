---
Title: "CFPT: Empowering Time Series Forecasting through Cross-Frequency Interaction and Periodic-Aware Timestamp Modeling"
Tags:
  - ICML/2025
  - time-series-forecasting
  - cross-frequency-interaction
  - periodic-aware-timestamp-modeling
  - long-term-forecasting
ZoteroLink: zotero://open-pdf/library/items/WXF528ZM
FirstAuthor: Kou, Feifei
Author: Wang, Jiahao; Shi, Lei; Yao, Yuhan; Li, Yawen; Zhu, Suguo; Zhang, Zhongbao; Du, Junping;
Year: "2025"
ItemType: conferencePaper
Citekey: kou_CFPTEmpoweringTime_2025
motivation: 现有方法缺少对于频率间和频率内的同时考虑
Conference: Forty-second International Conference on Machine Learning
rating: 2
---
> [!info]
> **TLDR**:: To address insufficient exploration of cross-frequency interactions and timestamp periodicity in long-term forecasting, CFPT employs a frequency-domain fusion mechanism and 2D convolution on periodic tensors to capture these complex dependencies.

> [!cite]
> **Bibliography**:: Kou, F., Wang, J., Shi, L., Yao, Y., Li, Y., Zhu, S., Zhang, Z., & Du, J. (2025, June 18). _CFPT: Empowering Time Series Forecasting through Cross-Frequency Interaction and Periodic-Aware Timestamp Modeling_. Forty-second International Conference on Machine Learning. [https://openreview.net/forum?id=hHYjiOJFum](https://openreview.net/forum?id=hHYjiOJFum)

> [!info]
> **Contribution**:: 预训练时序模型的一类适配方案；贡献以训练策略调整为主

## Notes

![](Pasted%20image%2020260104162400.png)

它说周期内和周期间的信息没有被充分利用。但我怎么觉得这和 patch 内和 patch 间的意思差不多？

![](Pasted%20image%2020260104162537.png)

然后方法是在 timestamp 上做二维卷积。。。很难评，这不就是 TimesNet 应用在了时间戳上吗。而且据我的经验来说，时间戳一般对预测结果影响并不大才对。

## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> the interaction learning between different frequency components and the exploitation of periodic characteristics inherent in timestamps.
>
> [Page 1](zotero://open-pdf/library/items/WXF528ZM?page=1)


%% Import Date: 2026-05-12T03:13:45.000+00:00 %%

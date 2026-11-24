---
Title: "SegRNN: Segment Recurrent Neural Network for Long-Term Time-Series Forecasting"
Tags:
  - time-series-forecasting
  - recurrent-neural-network
  - long-term-forecasting
  - time-series
  - IoT-J/2026
ZoteroLink: zotero://open-pdf/library/items/PQ2VU3R4
FirstAuthor: Lin, Shengsheng
Author: Lin, Weiwei; Wu, Wentai; Zhao, Feiyu; Mo, Ruichao; Zhang, Haotong;
Year: 2026
ItemType: journalArticle
DOI: 10.1109/JIOT.2025.3647705
Citekey: lin_SegRNNSegmentRecurrent_2026
motivation: 大量自回归阻止了 RNN 用于预测
rating: 2
Journal: IEEE Internet of Things Journal
Volume: 13
Issue: 5
Page: 9861-9871
---
> [!info]
> **TLDR**:: To overcome the computational inefficiency of RNNs in long-term time series forecasting, this work introduces SegRNN, which reduces recurrent iterations via segment-wise processing and parallel multi-step forecasting to significantly improve speed and accuracy.

> [!cite]
> **Bibliography**:: Lin, S., Lin, W., Wu, W., Zhao, F., Mo, R., & Zhang, H. (2026). SegRNN: Segment Recurrent Neural Network for Long-Term Time-Series Forecasting. _IEEE Internet of Things Journal_, _13_(5), 9861-9871. https://doi.org/10.1109/JIOT.2025.3647705

> [!info]
> **Contribution**:: 把 patch 机制应用于 RNN

## Notes

![](Pasted%20image%2020241013103254.png)

相当好懂，基本就是在 RNN 的基础上引入了 patch 机制

其它改进包括并行的解码


## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> The substantial number of recurrent iterations are the fundamental reasons behind the limitations of RNNs in LTSF
>
> [Page 1](zotero://open-pdf/library/items/PQ2VU3R4?page=1)


%% Import Date: 2026-05-12T02:03:11.000+00:00 %%

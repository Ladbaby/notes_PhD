---
Title: "PGN: The RNN's New Successor is Effective for Long-Range Time Series Forecasting"
Tags:
  - NeurIPS/2024
  - time-series-forecasting
  - long-range-dependency
  - recurrent-neural-network
  - pyramid-gru-network
ZoteroLink: zotero://open-pdf/library/items/UT5HGFIE
FirstAuthor: Jia, Yuxin
Author: Lin, Youfang; Yu, Jing; Wang, Shuo; Liu, Tianhao; Wan, Huaiyu;
Year: "2024"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "37"
Page: 84139-84168
Citekey: jia_PGNRNNNew_2024a
motivation: RNN 难以处理长时间依赖
rating: 1
---

> [!info]
> **TLDR**:: To overcome RNN limitations in capturing long-term dependencies for time series forecasting, the authors propose Parallel Gated Network and Temporal PGN, which use historical information extraction and dual-branch modeling to efficiently predict long-range futures.

> [!cite]
> **Bibliography**:: Jia, Y., Lin, Y., Yu, J., Wang, S., Liu, T., & Wan, H. (2024). PGN: The RNN’s New Successor is Effective for Long-Range Time Series Forecasting. _Advances in Neural Information Processing Systems_, _37_, 84139–84168.

> [!info]
> **Contribution**:: 说是 RNN 的继任者还是太吹牛了，不过效果也没有很差就是了。图画的很不错。

## Notes
![](Pasted%20image%2020260107105911.png)

这个对比图确实一眼就吸引住了人，非常值得借鉴

![](Pasted%20image%2020260107110018.png)

- **PGN**: 用 HIE 层代替 RNN 中的单个隐藏状态，消息传递需要经过的路径从 $O(L)$ 变为 $O(1)$

    质疑：虽然传播路径变短，但是计算量增大？
- **TPGN**: 用 PGN 实现的长时序预测模型

## Annotations
%% begin annotations %%


%% end annotations %%

%% Import Date: 2026-01-07T10:55:17.114+08:00 %%

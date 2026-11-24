---
Title: "CycleNet: Enhancing Time Series Forecasting through Modeling Periodic Patterns"
Tags:
  - NeurIPS/2024
  - time-series-forecasting
  - periodic-patterns
  - cycle-net
  - temporal-dependence
ZoteroLink: zotero://open-pdf/library/items/RLPZA7FM
FirstAuthor: Lin, Shengsheng
Author: Lin, Weiwei; Hu, Xinyi; Wu, Wentai; Mo, Ruichao; Zhong, Haocheng;
Year: "2024"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "37"
Page: 106315-106345
Citekey: lin_CycleNetEnhancingTime_2024
motivation: 无
rating: 3
---
> [!info]
> **TLDR**:: To address the challenge of capturing long-term periodic patterns in time series forecasting, CycleNet introduces Residual Cycle Forecasting with learnable recurrent cycles to model periodicity and predict residuals.

> [!cite]
> **Bibliography**:: Lin, S., Lin, W., Hu, X., Wu, W., Mo, R., & Zhong, H. (2024). CycleNet: Enhancing Time Series Forecasting through Modeling Periodic Patterns. _Advances in Neural Information Processing Systems_, _37_, 106315–106345.

> [!info]
> **Contribution**:: 相当于是支持了超出输入长度的周期性的建模

## Notes

[SparseTSF](lin_SparseTSFModelingLongterm_2024.md) 的进一步延申

![](Pasted%20image%2020260104190758.png)
用一个超参数来记录可能的周期性，喂给线性层前先去除掉稳定的周期性，线性层的输出再恢复周期性。

理论上是个非常通用的想法。


## Annotations
%% begin annotations %%


### Imported: 2026-01-04 7:05 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> presence of shared periodic patterns
>
>> 指的应该是一些超出了seq_len长度的周期性
>
> [Page 2](zotero://open-pdf/library/items/RLPZA7FM?page=2) 



%% end annotations %%

%% Import Date: 2026-01-04T19:05:55.648+08:00 %%

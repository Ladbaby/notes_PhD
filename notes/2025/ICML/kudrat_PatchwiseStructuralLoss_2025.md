---
Title: Patch-wise Structural Loss for Time Series Forecasting
Tags:
  - ICML/2025
  - time-series-forecasting
  - patch-wise-structural-loss
  - loss-function
  - temporal-dependence
ZoteroLink: zotero://open-pdf/library/items/X4PM4HXL
FirstAuthor: Kudrat, Dilfira
Author: Xie, Zongxia; Sun, Yanru; Jia, Tianyu; Hu, Qinghua;
Year: "2025"
ItemType: conferencePaper
Citekey: kudrat_PatchwiseStructuralLoss_2025
motivation: 现有方法用MSE很难捕获复杂时序特征
Conference: Forty-second International Conference on Machine Learning
rating: 4
---
> [!info]
> **TLDR**:: To address the neglect of structural dependencies in time-series forecasting by point-wise loss functions, this paper introduces Patch-wise Structural loss to enhance structural alignment by comparing local statistical properties at the patch level.

> [!cite]
> **Bibliography**:: Kudrat, D., Xie, Z., Sun, Y., Jia, T., & Hu, Q. (2025, June 18). _Patch-wise Structural Loss for Time Series Forecasting_. Forty-second International Conference on Machine Learning. [https://openreview.net/forum?id=p1KkW2kgDp](https://openreview.net/forum?id=p1KkW2kgDp)

> [!info]
> **Contribution**:: 一种考虑趋势项等时序特征的损失函数

## Notes

![](Pasted%20image%2020260110103612.png)

这个动机是非常有说服力的，因为我自己实验的时候也会遇到这种问题

损失在 MSE 的基础上引入了一些其它的项：

MSE + $\lambda\times$ ($\alpha\cdot L_{corr}$ + $\beta\cdot L_{var}$ + $\gamma\cdot L_{mean}$)


## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> which treat each time step independently and neglect the structural dependencies inherent in time series data, making it challenging to capture complex temporal patterns accurately
>
> [Page 1](zotero://open-pdf/library/items/X4PM4HXL?page=1)


%% Import Date: 2026-05-12T03:14:00.000+00:00 %%

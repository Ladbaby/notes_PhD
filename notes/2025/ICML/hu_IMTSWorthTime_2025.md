---
Title: "IMTS is Worth Time X Channel Patches: Visual Masked Autoencoders for Irregular Multivariate Time Series Prediction"
Tags:
  - ICML/2025
  - irregular-time-series
  - time-series-forecasting
  - masked-autoencoder
  - missing-data
ZoteroLink: zotero://open-pdf/library/items/BNWCJ4IJ
FirstAuthor: Hu, Zhangyi
Author: Wu, Jiemin; Xu, Hua; Liao, Mingqian; Feng, Ninghui; Gao, Bo; Lai, Songning; Yue, Yutao;
Year: "2025"
ItemType: conferencePaper
Citekey: hu_IMTSWorthTime_2025
motivation: 把视觉领域的 MAE 范式迁移到不规则时序，动机的充分性有待讨论
Conference: Forty-second International Conference on Machine Learning
rating: 1
---
> [!info]
> **TLDR**:: To address the challenge of forecasting Irregular Multivariate Time Series with extensive missing data, VIMTS adapts Visual Masked AutoEncoders by patching temporal features, leveraging cross-channel dependencies, and employing coarse-to-fine prediction.

> [!cite]
> **Bibliography**:: Hu, Z., Wu, J., Xu, H., Liao, M., Feng, N., Gao, B., Lai, S., & Yue, Y. (2025, June 18). _IMTS is Worth Time X Channel Patches: Visual Masked Autoencoders for Irregular Multivariate Time Series Prediction_. Forty-second International Conference on Machine Learning. [https://openreview.net/forum?id=2mnZ7AjMim](https://openreview.net/forum?id=2mnZ7AjMim)

> [!info]
> **Contribution**:: 把视觉 MAE 的 patch 化思路迁移到不规则多变量时序；方法迁移为主

## Notes

![](Pasted%20image%2020260107113555.png)

图的渐变色看着挺高级，但实际上就是把 [VisionTS](chen_VisionTSVisualMasked_2025.md) 给套到了不规则这边

按笔记作者的复现结果，实验表现明显低于论文报告值

## Annotations
%% begin annotations %%


### Imported: 2026-01-07 11:33 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Existing methods struggle to capture reliable temporal patterns from such data due to significant missing values
>
>> 早就解决很久了
>
> [Page ](zotero://open-pdf/library/items/BNWCJ4IJ?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we integrate self-supervised learning for improved IMTS modeling by adapting the visual MAE to IMTS data
>
>> 其实只是把MAE给在不规则时序上跑了跑。。。
>
> [Page ](zotero://open-pdf/library/items/BNWCJ4IJ?page=) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Existing methods struggle to capture reliable temporal patterns from such data due to significant missing values
>
>> 早就解决很久了
>
> [Page 1](zotero://open-pdf/library/items/BNWCJ4IJ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we integrate self-supervised learning for improved IMTS modeling by adapting the visual MAE to IMTS data
>
>> 其实只是把MAE给在不规则时序上跑了跑。。。
>
> [Page 1](zotero://open-pdf/library/items/BNWCJ4IJ?page=1)


%% Import Date: 2026-05-12T03:12:48.000+00:00 %%

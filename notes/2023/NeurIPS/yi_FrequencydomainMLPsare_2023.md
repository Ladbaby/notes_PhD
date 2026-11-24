---
Title: Frequency-domain MLPs are More Effective Learners in Time Series Forecasting
Tags:
  - NeurIPS/2023
  - time-series-forecasting
  - frequency-domain
  - multi-layer-perceptron
  - fourier-transform
ZoteroLink: zotero://open-pdf/library/items/TCS6UUP9
FirstAuthor: Yi, Kun
Author: Zhang, Qi; Fan, Wei; Wang, Shoujin; Wang, Pengyang; He, Hui; An, Ning; Lian, Defu; Cao, Longbing; Niu, Zhendong;
Year: "2023"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "36"
Page: 76656-76679
Citekey: yi_FrequencydomainMLPsare_2023
motivation: 现有MLP方法受限于信息瓶颈？？？
rating: 2
---

> [!info]
> **TLDR**:: To address point-wise mapping bottlenecks in MLP-based time series forecasting, this paper proposes FreTS, which transforms signals to the frequency domain to leverage global views and energy compaction for improved learning.

> [!cite]
> **Bibliography**:: Yi, K., Zhang, Q., Fan, W., Wang, S., Wang, P., He, H., An, N., Lian, D., Cao, L., & Niu, Z. (2023). Frequency-domain MLPs are More Effective Learners in Time Series Forecasting. _Advances in Neural Information Processing Systems_, _36_, 76656–76679.

> [!info]
> **Contribution**:: 至少频域+MLP确实没什么人做过

## Notes
![](Pasted%20image%2020260104214255.png)
变量和时间维度分别转化为频域后进行学习。
要说有什么比较明显的特色的话，应该就是那些可以处理复数数据的MLP层了。


## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> point-wise mappings and information bottleneck
>
> [Page 1](zotero://open-pdf/library/items/TCS6UUP9?page=1)


%% Import Date: 2026-05-12T01:52:31.000+00:00 %%

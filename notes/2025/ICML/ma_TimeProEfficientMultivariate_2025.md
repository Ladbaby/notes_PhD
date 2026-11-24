---
Title: "TimePro: Efficient Multivariate Long-term Time Series Forecasting with Variable- and Time-Aware Hyper-state"
Tags:
  - ICML/2025
  - time-series-forecasting
  - mamba
  - multivariate-time-series
  - state-space-models
ZoteroLink: zotero://open-pdf/library/items/2QC9ZGYL
FirstAuthor: Ma, Xiaowen
Author: Ni, Zhen-Liang; Xiao, Shuai; Chen, Xinghao;
Year: "2025"
ItemType: conferencePaper
Citekey: ma_TimeProEfficientMultivariate_2025
motivation: 现有方法难以处理异步的变量间关系
Conference: Forty-second International Conference on Machine Learning
rating: 2
---
> [!info]
> **TLDR**:: To address the multi-delay issue in long-term time series forecasting where variables influence targets over distinct intervals, TimePro constructs variate- and time-aware hyper-states that preserve fine-grained temporal features and adaptively select focused time points.

> [!cite]
> **Bibliography**:: Ma, X., Ni, Z.-L., Xiao, S., & Chen, X. (2025, June 18). _TimePro: Efficient Multivariate Long-term Time Series Forecasting with Variable- and Time-Aware Hyper-state_. Forty-second International Conference on Machine Learning. [https://openreview.net/forum?id=s69Ei2VrIW](https://openreview.net/forum?id=s69Ei2VrIW)

> [!info]
> **Contribution**:: PatchTST 的 Mamba+CNN 代替

## Notes

![](Pasted%20image%2020250610101222.png)

- 时间维度：patch粒度的变量表征，然后沿着时间方向做卷积来交换信息
- 变量维度：mamba的状态迁移实现的

后记：因为包含手搓的 cuda 核心，代码只能在特定的 GPU 上跑起来，很恶心。然后实际性能还不一定比 PatchTST 强。

## Annotations
%% begin annotations %%


### Imported: 2025-06-10 9:54 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In long-term time series forecasting, different variables often influence the target variable over distinct time intervals, a challenge known as the multi-delay issue
>
> [Page 1](zotero://open-pdf/library/items/CUCGGEHY?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Then, we perform a reshape on the plain state to recover the fine-grained time dimension of the embedding
>
>> 所以搞了半天就是有一个patch粒度的变量表征，然后沿着时间方向做卷积来交换信息？？？变量间的信息交互似乎是通过mamba的状态迁移实现的
>
> [Page 5](zotero://open-pdf/library/items/CUCGGEHY?page=5) 



%% end annotations %%

%% Import Date: 2025-06-10T09:54:34.083+08:00 %%

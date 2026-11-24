---
Title: Graph Neural Flows for Unveiling Systemic Interactions Among Irregularly Sampled Time Series
Tags:
  - NeurIPS/2024
  - graphs
  - normalizing-flows
  - irregular-time-series
  - system-dynamics
ZoteroLink: zotero://open-pdf/library/items/C8WD4HT3
FirstAuthor: Mercatali, Giangiacomo
Author: Freitas, Andre; Chen, Jie;
Year: 2024
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: 37
Page: 57183-57206
DOI: 10.52202/079017-1822
Citekey: mercatali_GraphNeuralFlows_2024
motivation: 现有ODE系的方法没有考虑变量间依赖
rating: 1
---

> [!info]
> **TLDR**:: Modeling systemic interactions among irregularly sampled time series requires capturing complex dependencies; this paper uses graph neural flows to jointly learn directed acyclic graphs representing conditional dependencies and continuous-time ODEs for accurate dynamics prediction.

> [!cite]
> **Bibliography**:: Mercatali, G., Freitas, A., & Chen, J. (2024). Graph Neural Flows for Unveiling Systemic Interactions Among Irregularly Sampled Time Series. _Advances in Neural Information Processing Systems_, _37_, 57183–57206. [https://doi.org/10.52202/079017-1822](https://doi.org/10.52202/079017-1822)

> [!info]
> **Contribution**:: 将图神经网络与连续流（flow）建模结合；贡献以方法组合为主

## Notes

虽然这类方法整体上更偏方法论组合，但这篇的动机陈述相对扎实——核心是考察变量间存在依赖关系时会带来什么影响。

![](Pasted%20image%2020241220163146.png)

关于数据的解释倒是有点意思。这里画的应该是可以用 ODE 来描述的系统随时间变化的轨迹，其中是变量间有依赖，和变量间无依赖的两种情况的对比，可以看到有依赖的轨迹之间有交叉，无依赖的则没有。而且对于 ODE 方法来说，起始的时刻不同，最终求解的时候的轨迹就不太一样。这倒是对于引入图结构来说是一种非常强有力的佐证

然后文章的写作的话就显得有些割裂。很明显为了避免和主流的不规则时序预测方法比较，全文都是非常深奥的 ODE 的视角的描述。对比方法里面也基本只比了 ODE 的方法


## Annotations
%% begin annotations %%


%% end annotations %%

%% Import Date: 2026-01-04T21:47:42.225+08:00 %%

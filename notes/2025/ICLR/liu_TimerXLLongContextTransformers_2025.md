---
Title: "Timer-XL: Long-Context Transformers for Unified Time Series Forecasting"
Tags:
  - ICLR/2025
  - time-series-forecasting
  - transformer
  - long-context
  - causal-inference
ZoteroLink: zotero://open-pdf/library/items/XV4KMCWX
FirstAuthor: Liu, Yong
Author: Qin, Guo; Huang, Xiangdong; Wang, Jianmin; Long, Mingsheng;
Year: "2025"
ItemType: conferencePaper
Citekey: liu_TimerXLLongContextTransformers_2025
motivation: 多变量的大模型
Conference: The Thirteenth International Conference on Learning Representations
---
> [!info]
> **TLDR**:: To unify multidimensional time series forecasting, Timer-XL generalizes next token prediction to multivariate sequences using a decoder-only Transformer with TimeAttention to capture fine-grained dependencies.

> [!cite]
> **Bibliography**:: Liu, Y., Qin, G., Huang, X., Wang, J., & Long, M. (2024, October 4). _Timer-XL: Long-Context Transformers for Unified Time Series Forecasting_. The Thirteenth International Conference on Learning Representations. [https://openreview.net/forum?id=KMCJXjlDDr](https://openreview.net/forum?id=KMCJXjlDDr)

> [!info]
> **Contribution**:: 提出大模型处理多变量的方法

## Notes

![](Pasted%20image%2020260106195755.png)

这个处理思路还是挺有意思的，见下面 Highlight 的解析

## Annotations
%% begin annotations %%


### Imported: 2026-01-06 7:45 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we propose a universal TimeAttention to capture fine-grained intra- and inter-series dependencies of flattened time series tokens (patches), which is further enhanced by deft position embedding for temporal causality and variable equivalence
>
>> 看起来似乎有变量间依赖建模？
>
> [Page ](zotero://open-pdf/library/items/XV4KMCWX?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we adopt the variable dependencies C, an all-one matrix, as the left-operand of Kronecker product, expanding temporal mask to a block matrix, which exactly reflects dependencies of multivariate next token prediction.
>
>> 这个讲故事的方式有点意思，C * T的确是让单变量的依赖直接扩展成了多变量的依赖。不过从Figure 12上看，其实就是所有的patch之间都做注意力，有点把时间和变量依赖纠缠到一起了，应该只是通过两个不同的位置编码区分。
>
> [Page 5](zotero://open-pdf/library/items/XV4KMCWX?page=5) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we propose a universal TimeAttention to capture fine-grained intra- and inter-series dependencies of flattened time series tokens (patches), which is further enhanced by deft position embedding for temporal causality and variable equivalence
>
>> 看起来似乎有变量间依赖建模？
>
> [Page 1](zotero://open-pdf/library/items/XV4KMCWX?page=1)


%% Import Date: 2026-05-12T02:28:19.000+00:00 %%

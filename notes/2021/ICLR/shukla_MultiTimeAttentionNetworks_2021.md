---
Title: Multi-Time Attention Networks for Irregularly Sampled Time Series
Tags:
  - ICLR/2021
  - irregular-time-series
  - multi-time-attention
  - healthcare
  - MIMIC-III
ZoteroLink: zotero://open-pdf/library/items/6PQSR72Z
FirstAuthor: Shukla, Satya Narayan
Author: Marlin, Benjamin;
Year: "2021"
ItemType: conferencePaper
Citekey: shukla_MultiTimeAttentionNetworks_2021
motivation: 分析医疗数据的需求，试图应对不规则时序
Conference: International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of irregularly sampled, sparse physiological time series data, this paper proposes Multi-Time Attention Networks that learn continuous time embeddings and use attention to create fixed-length representations.

> [!cite]
> **Bibliography**:: Shukla, S. N., & Marlin, B. M. (2021). Multi-Time Attention Networks for Irregularly Sampled Time Series. International Conference on Learning Representations (ICLR), abs/2101.10318.


> [!info]
> **Contribution**:: mTAN经典方法

![](Pasted%20image%2020231128165640.png)

## Notes
>
>Comment: Accepted at International Conference on Learning Representations (ICLR) 2021.

mTAN 算是**重采样**类型的方法

具体来说，它设计的上图 mTAN 模块，就是为了利用 attention 的模块，把每一个维度的时序数据都转变成定长的表示，以便输入其它只接受非不规则输入的后续模型

encoder 和 decoder 里都存在上述的 mTAN 模块，只不过处理的方向是反过来的，encode 是不规则到规则，decode 是规则到不规则

跑的测试似乎同时包括了**预测**和**分类**两种任务

## 讨论

lyc 师兄说这模型的性能不错，不过实验似乎并没有**测试集**，只有验证集和训练集，得确认一下情况


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:52 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> use an attention mechanism to produce a fixed-length representation of a time series containing a variable number of observations
>
> [Page 1](zotero://open-pdf/library/items/ZL26XUJD?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> re-represent a sparse and irregularly sampled time series in a fixed-dimensional space.
>
> [Page 3](zotero://open-pdf/library/items/ZL26XUJD?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we represent time series d for data case n as a tuple sdn = (tdn, xdn)
>
>> 好像是 set based 的表示方法
>
> [Page 3](zotero://open-pdf/library/items/ZL26XUJD?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We generalize the notion of a positional encoding used in transformer-based models to continuous time.
>
> [Page 3](zotero://open-pdf/library/items/ZL26XUJD?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The periodic terms can capture periodicity in time series data. In this case, ωih and αih represent the frequency and phase of the sine function
>
> [Page 3](zotero://open-pdf/library/items/ZL26XUJD?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> map the time values into a higher dimensional space
>
> [Page 3](zotero://open-pdf/library/items/ZL26XUJD?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The time embedding component described above takes a continuous time point and embeds it into H different dr-dimensional spaces
>
> [Page 3](zotero://open-pdf/library/items/ZL26XUJD?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> scaled dot product attention
>
> [Page 4](zotero://open-pdf/library/items/ZL26XUJD?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> kernel smoother
>
> [Page 4](zotero://open-pdf/library/items/ZL26XUJD?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> softmax function
>
> [Page 4](zotero://open-pdf/library/items/ZL26XUJD?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Different input dimensions can leverage different time embeddings via learned sparsity patterns in the parameter tensor U
>
> [Page 4](zotero://open-pdf/library/items/ZL26XUJD?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we define the auxiliary function ρ(s) to return the set of time points at which there is an observation on any dimension of s
>
> [Page 5](zotero://open-pdf/library/items/ZL26XUJD?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> input the set of reference time points r and the time series s and outputs a sequence of mTAN embeddings of length |r|,
>
>> 前文构建的是t和s为输入的函数，这里构建的是r和s为输入的函数
>
> [Page 5](zotero://open-pdf/library/items/ZL26XUJD?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> discretized
>
> [Page 5](zotero://open-pdf/library/items/ZL26XUJD?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We focus on predicting in-hospital mortality.
>
> [Page 7](zotero://open-pdf/library/items/ZL26XUJD?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> predicting in-hospital mortality using the first 48 hours of data
>
> [Page 7](zotero://open-pdf/library/items/ZL26XUJD?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We focus on classifying each time point in the sequence into one of eleven types of activities
>
> [Page 7](zotero://open-pdf/library/items/ZL26XUJD?page=7) 



%% end annotations %%

%% Import Date: 2023-11-28T16:52:20.844+08:00 %%

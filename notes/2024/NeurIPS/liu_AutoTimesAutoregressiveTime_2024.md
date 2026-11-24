---
Title: "AutoTimes: Autoregressive Time Series Forecasters via Large Language Models"
Tags:
  - NeurIPS/2024
  - time-series-forecasting
  - large-language-model
  - autoregressive
  - pre-training
ZoteroLink: zotero://open-pdf/library/items/ZT2MYMU5
FirstAuthor: Liu, Yong
Author: Qin, Guo; Huang, Xiangdong; Wang, Jianmin; Long, Mingsheng;
Year: "2024"
ItemType: conferencePaper
Citekey: liu_AutoTimesAutoregressiveTime_2024
Conference: The Thirty-eighth Annual Conference on Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To overcome the underutilization of LLMs for time series due to their autoregressive nature, AutoTimes repurposes decoder-only LLMs to generate arbitrary-length forecasts by projecting time series into language token embeddings.

> [!cite]
> **Bibliography**:: Liu, Y., Qin, G., Huang, X., Wang, J., & Long, M. (2024, November 6). _AutoTimes: Autoregressive Time Series Forecasters via Large Language Models_. The Thirty-eighth Annual Conference on Neural Information Processing Systems. [https://openreview.net/forum?id=FOvZztnp1H](https://openreview.net/forum?id=FOvZztnp1H)

> [!info]
> **Contribution**:: 

## Notes

![](Pasted%20image%2020241220220827.png)

真要说有多创新吧我是真觉得没啥

大概就是指出现有的 LLM4TS 有这些问题：

- 非自回归生成，和 LLM 自回归的生成天然不同（这压根其实不算问题）
- 用语言作为 prompt，而不是用纯时序，所以有模态分歧

于是他们的做法就是用 decoder-only 的 LLM，进行自回归的生成，然后剩下要做的事情就是将时序输入对齐到 LLM 的输入 embedding 空间

![](Pasted%20image%2020241220221119.png)

对齐的大致示意图就是这样，把时序分成 patch 之后对应到 LLM 的 token

![](Pasted%20image%2020241220221154.png)

整体的结构就是以上面的 segment embedding + time embedding（直接用 LLM 编码时间的文本） 作为输入

## Annotations
%% begin annotations %%


### Imported: 2024-12-20 10:07 pm


> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> corpora
>
>> 语料库
>
> [Page 1](zotero://open-pdf/library/items/ZT2MYMU5?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the inherent autoregressive property and decoder-only architecture of LLMs have not been fully considered, resulting in insufficient utilization of LLM abilities
>
>> 现有方法缺点
>
> [Page 1](zotero://open-pdf/library/items/ZT2MYMU5?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we formulate time series as prompts, extending the context for prediction beyond the lookback window, termed in-context forecasting
>
>> 大概就是说提供一些除了时序本身以外的信息
>
> [Page 1](zotero://open-pdf/library/items/ZT2MYMU5?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Prevalent LLM4TS methods non-autoregressively generate predictions with the globally flattened representation of lookback series, while large language models inherently predict the next tokens by autoregressio
>
>> 吹他们自回归的方法更符合llm的特点
>
> [Page 2](zotero://open-pdf/library/items/ZT2MYMU5?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Previous methods adopt language prompts that may lead to the modality disparity, while we find time series can be self-prompted
>
>> 用时序本身作为prompt而非直接用语言
>
> [Page 2](zotero://open-pdf/library/items/ZT2MYMU5?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we define time series token as the consecutive and non-overlapping segment of a single variate
>
>> 时序分patch作为token
>
> [Page 4](zotero://open-pdf/library/items/ZT2MYMU5?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> our forecaster predicts each variate independently
>
>> 每个变量单独预测
>
> [Page 4](zotero://open-pdf/library/items/ZT2MYMU5?page=4) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> In contrast, textual timestamps have been demonstrated as an enhancement in LLM4TS methods, which are always formulated into prefixprompts
>
>> 时间步对于传统模型没用但是对于llm有用
>
> [Page 4](zotero://open-pdf/library/items/ZT2MYMU5?page=4) 



%% end annotations %%

%% Import Date: 2024-12-20T22:07:18.320+08:00 %%

---
Title: "TimeCHEAT: A Channel Harmony Strategy for Irregularly Sampled Multivariate Time Series Analysis"
Tags:
  - AAAI/2025
  - irregular-time-series
  - multivariate-time-series
  - channel-harmony
  - graphs
ZoteroLink: zotero://open-pdf/library/items/GRB86TXT
FirstAuthor: Liu, Jiexi
Author: Cao, Meng; Chen, Songcan;
Year: "2025"
ItemType: journalArticle
Journal: Proceedings of the AAAI Conference on Artificial Intelligence
Volume: "39"
Issue: "18"
Page: 18861-18869
DOI: 10.1609/aaai.v39i18.34076
Citekey: liu_TimeCHEATChannelHarmony_2025
motivation: 缺少一种平衡CI和CD的做法
rating: 1
---
> [!info]
> **TLDR**:: To address the limitations of exclusive channel-independent or dependent strategies for irregularly sampled multivariate time series, TimeCHEAT harmonizes both by applying channel-dependent learning locally on patches and channel-independent learning globally.

> [!cite]
> **Bibliography**:: Liu, J., Cao, M., & Chen, S. (2025). TimeCHEAT: A Channel Harmony Strategy for Irregularly Sampled Multivariate Time Series Analysis. _Proceedings of the AAAI Conference on Artificial Intelligence_, _39_(18), Article 18. [https://doi.org/10.1609/aaai.v39i18.34076](https://doi.org/10.1609/aaai.v39i18.34076)

> [!info]
> **Contribution**:: 面向通道间关系建模的时序表征学习；贡献以模块组合与工程实现为主

![](Pasted%20image%2020250302105221.png)
## Notes
>
>Comment: Accepted by AAAI 2025.

二部图用于时间序列分析的尝试，有一些意思，但是个人认为也有一些疑点

![](Pasted%20image%2020250302105327.png)

模型的目标是学习表征，大概的流程是：

- 分patch
- patch内分别利用GraFITi，得到 reference point 的表征（CD 学习+重采样）
- 在重采样后的表征上进行 CI 学习

我觉得方法存在一些疑点：

- CI 不应该放在 CD 之后（CI 的输入不应该是已经交换过信息的序列）
- CI 是否有必要？因为 GraFITi 里的 channel nodes 其实就是目标的形状。再次在重采样之后的序列之上进行表征学习得到相似形状的表征是否是必要的？
- GraFITi 在面对时间步不对齐的序列的时候，没法学习变量间依赖

后记：按笔记作者的复现结果，实验表现明显低于论文报告值。

## Annotations
%% begin annotations %%


### Imported: 2025-03-02 10:51 am


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> even higher capacity cannot mitigate the potential loss of diversity in learning similar embedding patterns across different channels
>
>> 指的是CD不能完全体现差异性？
>
> [Page 1](zotero://open-pdf/library/items/HZDP7PND?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> utilizes the CD strategy locally and the CI strategy globally
>
>> 看着似乎还挺有道理的
>
> [Page 1](zotero://open-pdf/library/items/HZDP7PND?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> maximizing the use of relevant observations while reducing long-range irrelevant interference
>
>> 你咋知道长时间就没有依赖？
>
> [Page 1](zotero://open-pdf/library/items/HZDP7PND?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The difference between the 3 kinds of channel strategies.
>
>> 也就是说，在patch内考虑CD，在patch间考虑CI（有点奇怪，按理来说CI应该直接作用于原本的序列来保留特征，而不是作用于已经交换过信息的序列）
>
> [Page 1](zotero://open-pdf/library/items/HZDP7PND?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Traditional methods for time embedding learning often assume that larger time intervals weaken dependencies and relationships, leading to strong inductive biases. This can cause key timestamps with independent positions to be overlooked, thus affecting the extraction of important patterns.
>
>> ？你在说什么
>
> [Page 2](zotero://open-pdf/library/items/HZDP7PND?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Learned edges between channel and reference point nodes
>
>> 这是在做重采样？类似mTAN那种？（假设不做重采样的话，variable embedding就只来自variable nodes。重采样后新得到的edges可以作为Transformer CI学习的输入得到更多的embedding）
>
> [Page 4](zotero://open-pdf/library/items/HZDP7PND?page=4) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> without relying on task-specific priors
>
>> GraFITi也没有依赖吧？？？
>
> [Page 7](zotero://open-pdf/library/items/HZDP7PND?page=7) 



%% end annotations %%

%% Import Date: 2025-03-02T10:51:30.199+08:00 %%

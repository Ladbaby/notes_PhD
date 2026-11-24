---
Title: Retrieval-Augmented Diffusion Models for Time Series Forecasting
Tags:
  - NeurIPS/2024
  - diffusion-model
  - time-series-forecasting
  - retrieval-augmented-generation
  - generative-models
  - sequence-prediction
ZoteroLink: zotero://open-pdf/library/items/8VNESLTP
FirstAuthor: Liu, Jingwei
Author: Yang, Ling; Li, Hongyan; Hong, Shenda;
Year: 2024
ItemType: journalArticle
Citekey: liu_RetrievalAugmentedDiffusionModels_2024
motivation: 时序数据集数量较少
Journal: Advances in Neural Information Processing Systems
Volume: 37
Page: 2766-2786
DOI: 10.52202/079017-0091
rating: 2
---
> [!info]
> **TLDR**:: To address the instability and lack of guidance in existing time series diffusion models, this paper proposes a retrieval-augmented framework that guides the denoising process using relevant historical references retrieved from a database.

> [!cite]
> **Bibliography**:: Liu, J., Yang, L., Li, H., & Hong, S. (2024, November 6). _Retrieval-Augmented Diffusion Models for Time Series Forecasting_. The Thirty-eighth Annual Conference on Neural Information Processing Systems. [https://openreview.net/forum?id=dRJJt0Ji48&noteId=8wGyyvVUNr](https://openreview.net/forum?id=dRJJt0Ji48&noteId=8wGyyvVUNr)

> [!info]
> **Contribution**:: Diffusion + RAG

![](Pasted%20image%2020250307155307.png)

## Notes

这句关于 MIMIC-III 数据集不平衡问题的描述可以以后用：

> Additionally, real-world time series datasets exhibit significant imbalance. For example, in the existing electrocardiogram dataset MIMIC-IV, records related to diagnosed pre-excitation syndrome (PS) account for less than 0.025% of the total records

方法是基于 CSDI + RAG 实现的。大概的动机是说扩散的学习需要很多数据，然后现有的数据集的数据量不够大，所以要充分利用（缺乏证明）

- 优点：可以额外知道**相似样本的未来值**（然而代码实现的时候并没有用到未来值）
- 缺点：
    - 动机的观点缺乏的证明
        > Factors limiting time series diffusion models include **insufficient time series datasets** and the **absence of guidance**
    - **需要提前学习 RAG 用的 Encoder**（代码用的 TCN）
    - 提取出来的**样本要足够相似**（样本异质性较强就会受影响）



## Annotations
%% begin annotations %%


### Imported: 2025-03-07 3:50 pm


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Factors limiting time series diffusion models include insufficient time series datasets and the absence of guidance
>
>> 真的假的？如何证明数据集不够？如何证明缺乏guidance？
>
> [Page 1](zotero://open-pdf/library/items/P84X58WC?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Our approach allows leveraging meaningful samples within the database to aid in sampling, thus maximizing the utilization of datasets.
>
>> 为什么非要最大化利用数据集。。。
>
> [Page 1](zotero://open-pdf/library/items/P84X58WC?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> deficiencies
>
>> /dɪˈfɪʃnsi/不足
>
> [Page 1](zotero://open-pdf/library/items/P84X58WC?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Due to the very small proportion of such cases in the training set
>
> [Page 2](zotero://open-pdf/library/items/P84X58WC?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Additionally, real-world time series datasets exhibit significant imbalance. For example, in the existing electrocardiogram dataset MIMIC-IV, records related to diagnosed pre-excitation syndrome (PS) account for less than 0.025% of the total records
>
>> 欸，这个话可以记下来以后用
>
> [Page 2](zotero://open-pdf/library/items/P84X58WC?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Figure 2
>
>> 相比 CSDI 那种做法，RATD 这种做法的好处是可以额外知道相似样本的未来值；不过这同时也意味着必须要能够找到足够相似的样本？而且retrieve的那个编码器必须要提前训练
>
> [Page 4](zotero://open-pdf/library/items/P84X58WC?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (a) T
>
>> a图这不就是CSDI的那个双重注意力的编码器？
>
> [Page 5](zotero://open-pdf/library/items/P84X58WC?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (b) T
>
>> 有点奇怪啊，不应该是Q和K先相乘，再乘V吗？
>
> [Page 5](zotero://open-pdf/library/items/P84X58WC?page=5) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> insufficient time series datasets and the absence of guidance
>
> [Page 1](zotero://open-pdf/library/items/8VNESLTP?page=1)


%% Import Date: 2026-05-12T02:45:44.000+00:00 %%

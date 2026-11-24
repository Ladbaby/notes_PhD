---
Title: "Chain of Preference Optimization: Improving Chain-of-Thought Reasoning in LLMs"
Tags:
  - NeurIPS/2024
  - large-language-model
  - chain-of-thought
  - direct-preference-optimization
  - reasoning
ZoteroLink: zotero://open-pdf/library/items/2GWXJBCX
FirstAuthor: Zhang, Xuan
Author: Du, Chao; Pang, Tianyu; Liu, Qian; Gao, Wei; Lin, Min;
Year: "2024"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "37"
Page: 333-356
DOI: 10.52202/079017-0011
Citekey: zhang_ChainPreferenceOptimization_2024
motivation: CoT的思维路径较少、耗时少，而ToT路径多、耗时多
rating: 3
---

> [!info]
> **TLDR**:: To resolve Chain-of-Thought's tendency to overlook optimal reasoning paths without incurring Tree-of-Thought's high inference costs, this paper introduces Chain of Preference Optimization, which fine-tunes LLMs to align reasoning steps with Tree-of-Thought search trees.

> [!cite]
> **Bibliography**:: Zhang, X., Du, C., Pang, T., Liu, Q., Gao, W., & Lin, M. (2024). Chain of Preference Optimization: Improving Chain-of-Thought Reasoning in LLMs. _Advances in Neural Information Processing Systems_, _37_, 333–356. [https://doi.org/10.52202/079017-0011](https://doi.org/10.52202/079017-0011)

> [!info]
> **Contribution**:: 提高CoT质量的同时不会像ToT一样耗时

## Notes

![](Pasted%20image%2020260325152605.png)

其实有点类似大模型蒸馏成小模型的意思，图画得非常清晰：收集应该走哪个思维路径的preference data，然后通过 DPO 训练 CoT

![](Pasted%20image%2020260325152538.png)

这个是更详细的数据生成、评估、裁剪、收集过程

## Annotations
%% begin annotations %%


### Imported: 2026-03-25 3:22 pm


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> The tree-of-thought (ToT) method employs tree-searching to extensively explore the reasoning space and find better reasoning paths that CoT decoding might overlook. This deliberation, however, comes at the cost of significantly increased inference complexity
>
>> 说ToT虽然思维链的路径多了很多，但是代价是开销大
>
> [Page ](zotero://open-pdf/library/items/2GWXJBCX?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Chain of Preference Optimization (CPO), where LLMs are fine-tuned to align each step of the CoT reasoning paths with those of ToT using the inherent preference information in the tree-search process
>
>> 文章提出的做法是对齐CoT和ToT的最优路径
>
> [Page ](zotero://open-pdf/library/items/2GWXJBCX?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Collecting preference data (of each step) through ToT and then tuning LLM via DPO.
>
>> 图画得还是很清楚的，所谓的preference data其实就是选择哪个思维链的分支
>
> [Page 2](zotero://open-pdf/library/items/2GWXJBCX?page=2) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> The tree-of-thought (ToT) method employs tree-searching to extensively explore the reasoning space and find better reasoning paths that CoT decoding might overlook. This deliberation, however, comes at the cost of significantly increased inference complexity
>
>> 说ToT虽然思维链的路径多了很多，但是代价是开销大
>
> [Page 1](zotero://open-pdf/library/items/2GWXJBCX?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Chain of Preference Optimization (CPO), where LLMs are fine-tuned to align each step of the CoT reasoning paths with those of ToT using the inherent preference information in the tree-search process
>
>> 文章提出的做法是对齐CoT和ToT的最优路径
>
> [Page 1](zotero://open-pdf/library/items/2GWXJBCX?page=1)


%% Import Date: 2026-05-12T02:51:45.000+00:00 %%

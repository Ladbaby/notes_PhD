---
Title: Self-Consistency Improves Chain of Thought Reasoning in Language Models
Tags:
  - ICLR/2023
  - LLM
  - CoT
  - self-consistency
  - decoding-strategy
ZoteroLink: zotero://open-pdf/library/items/YW7NT7BZ
FirstAuthor: Wang, Xuezhi
Author: Wei, Jason; Schuurmans, Dale; Le, Quoc V.; Chi, Ed H.; Narang, Sharan; Chowdhery, Aakanksha; Zhou, Denny;
Year: "2023"
ItemType: conferencePaper
Citekey: wang_SelfConsistencyImprovesChain_2023a
motivation: 正确答案可能有多条不同的思维路径都能得到
Conference: The Eleventh International Conference on Learning Representations
rating: 4
---
> [!info]
> **TLDR**:: To overcome the limitations of naive greedy decoding in chain-of-thought prompting, this paper proposes self-consistency, which samples diverse reasoning paths and selects the most consistent answer to significantly boost performance on complex reasoning tasks.

> [!cite]
> **Bibliography**:: Wang, X., Wei, J., Schuurmans, D., Le, Q. V., Chi, E. H., Narang, S., Chowdhery, A., & Zhou, D. (2023, February 2). _Self-Consistency Improves Chain of Thought Reasoning in Language Models_. The Eleventh International Conference on Learning Representations. [https://openreview.net/forum?id=1PL1NIMMrw](https://openreview.net/forum?id=1PL1NIMMrw)

> [!info]
> **Contribution**:: 提高CoT输出质量的方法

## Notes

![](Pasted%20image%2020260325155937.png)

这篇的动机确实很有意思，可以看下面我蓝色高亮的部分写的注释


## Annotations
%% begin annotations %%


### Imported: 2026-03-25 3:56 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It first samples a diverse set of reasoning paths instead of only taking the greedy one, and then selects the most consistent answer by marginalizing out the sampled reasoning paths.
>
>> 应该是出现次数最高的答案？
>
> [Page ](zotero://open-pdf/library/items/YW7NT7BZ?page=) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Self-consistency leverages the intuition that a complex reasoning problem typically admits multiple different ways of thinking leading to its unique correct answer.
>
>> 有意思，意思是说self-consistency的直觉解释是，复杂度的问题通常是条条大路通罗马的。感觉和时序里的条件概率模型联系更紧密？或者说，能不能每次提供同一条序列不同的patch作为输入，最终再取中值？（跟对比学习/数据增强也异曲同工）
>
> [Page ](zotero://open-pdf/library/items/YW7NT7BZ?page=) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It first samples a diverse set of reasoning paths instead of only taking the greedy one, and then selects the most consistent answer by marginalizing out the sampled reasoning paths.
>
>> 应该是出现次数最高的答案？
>
> [Page 1](zotero://open-pdf/library/items/YW7NT7BZ?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Self-consistency leverages the intuition that a complex reasoning problem typically admits multiple different ways of thinking leading to its unique correct answer.
>
>> 有意思，意思是说self-consistency的直觉解释是，复杂度的问题通常是条条大路通罗马的。感觉和时序里的条件概率模型联系更紧密？或者说，能不能每次提供同一条序列不同的patch作为输入，最终再取中值？（跟对比学习/数据增强也异曲同工）
>
> [Page 1](zotero://open-pdf/library/items/YW7NT7BZ?page=1)


%% Import Date: 2026-05-12T01:39:09.000+00:00 %%

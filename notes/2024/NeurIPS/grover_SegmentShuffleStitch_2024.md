---
Title: "Segment, Shuffle, and Stitch: A Simple Layer for Improving Time-Series Representations"
Tags:
  - NeurIPS/2024
  - time-series-analysis
  - representation-learning
  - time-series-segmentation
  - neural-architecture
ZoteroLink: zotero://open-pdf/library/items/4JFIYS8M
FirstAuthor: Grover, Shivam
Author: Jalali, Amin; Etemad, Ali;
Year: "2024"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "37"
Page: 4878-4905
Citekey: grover_SegmentShuffleStitch_2024
rating: 2
---

> [!info]
> **TLDR**:: To address the limitation of existing time-series models that ignore dependencies between non-adjacent segments, this paper introduces the Segment, Shuffle, and Stitch layer, which learns to permute sequence segments to enhance representation learning.

> [!cite]
> **Bibliography**:: Grover, S., Jalali, A., & Etemad, A. (2024). Segment, Shuffle, and Stitch: A Simple Layer for Improving Time-Series Representations. _Advances in Neural Information Processing Systems_, _37_, 4878–4905.

> [!info]
> **Contribution**:: 即插即用的数据增强模块

## Notes

![](Pasted%20image%2020250610101830.png)

一句话：可学习的时序扰动数据增强

## Annotations
%% begin annotations %%


### Imported: 2025-06-10 10:16 am


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Existing approaches for learning representations of time-series keep the temporal arrangement of the time-steps intact with the presumption that the original order is the most optimal for learning
>
> [Page 1](zotero://open-pdf/library/items/4JFIYS8M?page=1) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> non-adjacent sections of real-world time-series may have strong dependencies
>
> [Page 1](zotero://open-pdf/library/items/4JFIYS8M?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> S3 works by creating nonoverlapping segments from the original sequence and shuffling them in a learned manner that is optimal for the task at hand. It then re-attaches the shuffled segments back together and performs a learned weighted sum with the original input to capture both the newly shuffled sequence along with the original sequence
>
>> 其实就是可学习的打乱数据增强
>
> [Page 1](zotero://open-pdf/library/items/4JFIYS8M?page=1) 



%% end annotations %%

%% Import Date: 2025-06-10T10:17:06.727+08:00 %%

---
Title: "Omni-Scale CNNs: a simple and effective kernel size configuration for time series classification"
Tags:
  - ICLR/2021
  - time-series-classification
  - receptive-field
  - kernel-size
  - CNN
ZoteroLink: zotero://open-pdf/library/items/QZWQ8DWH
FirstAuthor: Tang, Wensi
Author: Long, Guodong; Liu, Lu; Zhou, Tianyi; Blumenstein, Michael; Jiang, Jing;
Year: "2021"
ItemType: conferencePaper
Citekey: tang_OmniScaleCNNssimple_2021
motivation: 现有卷积方法的性能高度依赖于挑选卷积核大小
Conference: International Conference on Learning Representations
rating: 3
---
> [!info]
> **TLDR**:: To address the difficulty of selecting optimal receptive field sizes for 1D-CNNs in time series classification, this paper proposes an Omni-Scale block that uses kernel sizes based on prime numbers relative to series length.

> [!cite]
> **Bibliography**:: Tang, W., Long, G., Liu, L., Zhou, T., Blumenstein, M., & Jiang, J. (2021, October 6). _Omni-Scale CNNs: A simple and effective kernel size configuration for time series classification_. International Conference on Learning Representations. [https://openreview.net/forum?id=PDYs7Z2XFGv](https://openreview.net/forum?id=PDYs7Z2XFGv)

> [!info]
> **Contribution**:: 故事讲得确实很有意思，非常值得借鉴

## Notes

![](Pasted%20image%2020260105214425.png)

核心思想很简单：选择一系列奇数作为核心大小，这样子可以表示出很大范围的其他大小

既然有 OS-CNN，为什么没有 OS-Patch？

## Annotations
%% begin annotations %%


### Imported: 2026-01-05 9:37 pm


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Large efforts have been taken to choose the appropriate size because it has a huge influence on the performance and differs significantly for each dataset.
>
>> 动机
>
> [Page ](zotero://open-pdf/library/items/QZWQ8DWH?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Particularly, it is a set of kernel sizes that can efficiently cover the best RF size across different datasets via consisting of multiple prime numbers according to the length of the time series
>
>> 其实为什么不能整一个OS-Patch呢？
>
> [Page ](zotero://open-pdf/library/items/QZWQ8DWH?page=) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Large efforts have been taken to choose the appropriate size because it has a huge influence on the performance and differs significantly for each dataset.
>
>> 动机
>
> [Page 1](zotero://open-pdf/library/items/QZWQ8DWH?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Particularly, it is a set of kernel sizes that can efficiently cover the best RF size across different datasets via consisting of multiple prime numbers according to the length of the time series
>
>> 其实为什么不能整一个OS-Patch呢？
>
> [Page 1](zotero://open-pdf/library/items/QZWQ8DWH?page=1)


%% Import Date: 2026-05-12T01:00:39.000+00:00 %%

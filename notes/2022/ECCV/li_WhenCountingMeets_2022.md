---
Title: "When Counting Meets HMER: Counting-Aware Network for Handwritten Mathematical Expression Recognition"
Tags:
  - ECCV/2022
  - computer-vision
  - handwritten-mathematical-expression-recognition
  - counting-aware-network
  - encoder-decoder
ZoteroLink: zotero://open-pdf/library/items/PSCW9G82
FirstAuthor: Li, Bohan
Author: Yuan, Ye; Liang, Dingkang; Liu, Xiao; Ji, Zhilong; Bai, Jinfeng; Liu, Wenyu; Bai, Xiang;
Year: "2022"
ItemType: article
DOI: 10.48550/arXiv.2207.11463
Citekey: li_WhenCountingMeets_2022
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address inaccurate attention in handwritten mathematical expression recognition, this paper proposes a Counting-Aware Network that jointly optimizes recognition and weakly-supervised symbol counting to correct prediction errors.

> [!cite]
> **Bibliography**:: Li, B., Yuan, Y., Liang, D., Liu, X., Ji, Z., Bai, J., Liu, W., & Bai, X. (2022). _When Counting Meets HMER: Counting-Aware Network for Handwritten Mathematical Expression Recognition_ (arXiv:2207.11463). arXiv. [https://doi.org/10.48550/arXiv.2207.11463](https://doi.org/10.48550/arXiv.2207.11463)

> [!info]
> **Contribution**:: 

## Notes

![](Pasted%20image%2020240821102323.png)

大概意思就是，在现有的模型的基础上加入了 counting 的任务，辅助神经网络把所有的目标都检测到

![](Pasted%20image%2020240821102430.png)

最终算损失的时候也会加一个 counting 的损失

## Annotations
%% begin annotations %%


### Imported: 2024-08-21 10:21 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> handwritten mathematical expression recognition (HMER)
>
> [Page 1](zotero://open-pdf/library/items/PSCW9G82?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> jointly optimizes two tasks: HMER and symbol counting.
>
> [Page 1](zotero://open-pdf/library/items/PSCW9G82?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we design a weakly-supervised counting module that can predict the number of each symbol class without the symbol-level position annotations, and then plug it into a typical attention-based encoderdecoder model for HMER
>
> [Page 1](zotero://open-pdf/library/items/PSCW9G82?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By visualizing the attention map
>
>> 这个可视化有点意思
>
> [Page 2](zotero://open-pdf/library/items/PSCW9G82?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Single kernel size can not effectively handle the scale variations.
>
> [Page 5](zotero://open-pdf/library/items/PSCW9G82?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Structure of the proposed counting-combined attentional decoder (CCAD)
>
>> 画的有点乱，yt才是最终输出
>
> [Page 6](zotero://open-pdf/library/items/PSCW9G82?page=6) 



%% end annotations %%

%% Import Date: 2024-08-21T10:21:58.030+08:00 %%

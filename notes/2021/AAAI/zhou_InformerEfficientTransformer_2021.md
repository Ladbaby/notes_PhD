---
Title: "Informer: Beyond Efficient Transformer for Long Sequence Time-Series Forecasting"
Tags:
  - AAAI/2021
  - transformer
  - time-series-forecasting
  - self-attention
  - long-context
ZoteroLink: zotero://open-pdf/library/items/ZXUZ3YW5
FirstAuthor: Zhou, Haoyi
Author: Zhang, Shanghang; Peng, Jieqi; Zhang, Shuai; Li, Jianxin; Xiong, Hui; Zhang, Wancai;
Year: "2021"
ItemType: journalArticle
Journal: Proceedings of the AAAI Conference on Artificial Intelligence
Volume: "35"
Issue: "12"
Page: 11106-11115
DOI: 10.1609/aaai.v35i12.17325
Citekey: zhou_InformerEfficientTransformer_2021
motivation: 原始transformer模型的计算不够高效
rating: 2
---
> [!info]
> **TLDR**:: To address the quadratic complexity and memory bottlenecks of Transformers in long-sequence time-series forecasting, this work introduces Informer, which employs ProbSparse self-attention, attention distilling, and a generative decoder for efficient prediction.

> [!cite]
> **Bibliography**:: Zhou, H., Zhang, S., Peng, J., Zhang, S., Li, J., Xiong, H., & Zhang, W. (2021). Informer: Beyond Efficient Transformer for Long Sequence Time-Series Forecasting. _Proceedings of the AAAI Conference on Artificial Intelligence_, _35_(12), Article 12. [https://doi.org/10.1609/aaai.v35i12.17325](https://doi.org/10.1609/aaai.v35i12.17325)

> [!info]
> **Contribution**:: 提高计算效率的尝试

![](Pasted%20image%2020231128204136.png)
## Notes

好像还挺有名

主要三点：

- 把 self-attention 的复杂度降到 $O(N\log(N))$ 
- self-attention distilling，把输入的长度减半
- decoder 可以一步完成推理

其实搞了半天，这模型对于 transformer 比较大的结构改动还是集中在 self-attention 那里，见 Figure 3，在 attention layer 之间插入了最大池化层，实现了下采样，来应对过长的时序
## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> including quadratic time complexity, high memory usage, and inherent limitation of the encoder-decoder architecture
>
> [Page 11106](zotero://open-pdf/library/items/ZXUZ3YW5?page=11106)


%% Import Date: 2026-05-12T00:38:07.000+00:00 %%

---
Title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces"
Tags:
  - S4
  - Mamba
  - state-space-models
  - linear-complexity
  - selective-state-spaces
  - long-sequence-modeling
ZoteroLink: zotero://open-pdf/library/items/RBI7KA3V
FirstAuthor: Gu, Albert
Author: Dao, Tri;
Year: "2024"
ItemType: conferencePaper
Citekey: gu_MambaLinearTimeSequence_2024
motivation: 现有的state space models性能不太行
Conference: First Conference on Language Modeling
rating: 1
---
> [!info]
> **TLDR**:: To address the inability of subquadratic models to perform content-based reasoning, this paper introduces Mamba, a selective state space model that makes parameters input-dependent and uses a hardware-aware parallel algorithm for efficient, high-performance sequence modeling.

> [!cite]
> **Bibliography**:: Gu, A., & Dao, T. (2024, August 26). _Mamba: Linear-Time Sequence Modeling with Selective State Spaces_. First Conference on Language Modeling. [https://openreview.net/forum?id=tEYskw1VY2#discussion](https://openreview.net/forum?id=tEYskw1VY2#discussion)

> [!info]
> **Contribution**:: Mamba out

## Notes

曾经一度有望代替 Transformer 的模型，以我的实验结论来说其实性能还是比不上。
速度的话，不用手搓的 cuda 内核的情况下其实也快不了多少。

## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> We identify that a key weakness of such models is their inability to perform content-based reasoning, and make several improvements
>
> [Page 1](zotero://open-pdf/library/items/RBI7KA3V?page=1)


%% Import Date: 2026-05-12T02:57:38.000+00:00 %%

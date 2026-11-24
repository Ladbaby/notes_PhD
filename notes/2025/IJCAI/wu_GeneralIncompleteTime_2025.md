---
Title: General Incomplete Time Series Analysis via Patch Dropping Without Imputation
Tags:
  - IJCAI/2025
  - time-series-analysis
  - incomplete-time-series
  - patch-dropping
  - missing-data
  - representation-learning
ZoteroLink: zotero://open-pdf/library/items/PA4KYSL2
FirstAuthor: Wu, Yangyang
Author: Yuan, Yi; Zhu, Mengying; Miao, Xiaoye; Xi, Meng;
Year: 2025
ItemType: conferencePaper
Volume: 1
Page: 6597-6605
DOI: 10.24963/ijcai.2025/734
Citekey: wu_GeneralIncompleteTime_2025
motivation: 面向不完整时序的通用框架，动机的针对性有待讨论
Conference: Thirty-Fourth International Joint Conference on Artificial Intelligence
rating: 1
---

> [!info]
> **TLDR**:: Existing impute-then-analyze paradigms for incomplete multivariate time series suffer from error accumulation and bias, so this paper proposes INTER, an end-to-end framework using pretrained language models with missing-rate-aware patch dropping to bypass imputation and enhance generalization.

> [!cite]
> **Bibliography**:: Wu, Y., Yuan, Y., Zhu, M., Miao, X., & Xi, M. (2025). _General Incomplete Time Series Analysis via Patch Dropping Without Imputation_. _1_, 6597–6605. [https://doi.org/10.24963/ijcai.2025/734](https://doi.org/10.24963/ijcai.2025/734)

> [!info]
> **Contribution**:: 面向不完整时序的通用建模框架；方法贡献相对有限

## Notes

老师当主席看到的一篇文章，审稿人一致给很高的分数，但实际上但凡懂一点不规则这边的知识都知道这文章瞎掰。

- **动机太片面**，没考虑不规则时序的方法：
- Missing-Aware Transformer 并**不是本文提出的** (二步图方法就有用到)
- PLM 的使用缺少详细的动机解释 (**为什么 PLM 可以学习数据分布？**)

方法部分可以借鉴的设计：**Missing-state-aware patch dropping**

自掩码机制，只不过**根据每个 patch 的缺失率来决定 mask 哪些 patch**，高缺失率的优先被 mask：

$$
\alpha_i \sim \text{Bernoulli}(1-\delta^P) \\
\delta^P=f(\gamma^P), \quad f(\gamma^P)\propto \gamma^P
$$

其中 $\alpha_i$ 为 $i$-th Patch 的 mask、$\delta^P$ 为舍弃的概率、$\gamma^P$ 为缺失率

> PS: 掩码选择 0 或 1 被套上了伯努利分布的外壳，看起来高级了很多

其它不足：写作上存在一定程度的过度包装

- Introduction 里提到的现有方法的不足，实际上已经被现有的不规则方法解决了
- 损失函数 Masked MSE 被起名叫做 "element-wise loss function"，并号称是 "we propose" / "novel"
- "is the first attempt to develop an end-to-end framework for incomplete multivariate time series analysis"，实际上不规则预训练方法早就有了 (PrimeNet AAAI 2021)
- 掩码的时候号称是 patch-drop，实际上代码实现的时候还是 observation-drop

## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Existing methods for multivariate time series analysis either ignore missing data, sacrificing performance, or follow the impute-then-analyze paradigm, which suffers from redundant training and error accumulation,
>
> [Page 6597](zotero://open-pdf/library/items/PA4KYSL2?page=6597)


%% Import Date: 2026-05-12T03:19:13.000+00:00 %%

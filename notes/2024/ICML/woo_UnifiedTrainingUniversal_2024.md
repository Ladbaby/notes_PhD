---
Title: Unified Training of Universal Time Series Forecasting Transformers
Tags:
  - ICML/2024
  - time-series-forecasting
  - transformer
  - universal-forecasting
  - pre-training
ZoteroLink: zotero://open-pdf/library/items/DUCTRW2X
FirstAuthor: Woo, Gerald
Author: Liu, Chenghao; Kumar, Akshat; Xiong, Caiming; Savarese, Silvio; Sahoo, Doyen;
Year: "2024"
ItemType: conferencePaper
Publisher: PMLR
Page: 53140-53164
Citekey: woo_UnifiedTrainingUniversal_2024
motivation: 解决universal forecaster需要应对多频率、多变量个数、多种分布的挑战
Conference: International Conference on Machine Learning
rating: 2
---
> [!info]
> **TLDR**:: To overcome the limitations of one-model-per-dataset forecasting and enable universal time series prediction, the authors introduce Moirai, a masked encoder-based Transformer trained on a large-scale archive to handle cross-frequency learning and varying multivariate distributions.

> [!cite]
> **Bibliography**:: Woo, G., Liu, C., Kumar, A., Xiong, C., Savarese, S., & Sahoo, D. (2024). Unified Training of Universal Time Series Forecasting Transformers. _Proceedings of the 41st International Conference on Machine Learning_, 53140–53164. [https://proceedings.mlr.press/v235/woo24a.html](https://proceedings.mlr.press/v235/woo24a.html)

> [!info]
> **Contribution**:: 较早出现的预训练模型

## Notes

![](Pasted%20image%2020240719152507.png)

- 多频率 -> 多 patch size：根据不同的输入频率来决定使用不同的输入/输出组合
- 多变量 -> 展平+变量 ID：提出 Any-variate attention，解决以任意变量数目为输入的时序预测问题
	这一点的话其实就是把一条多变量看作是多条单变量，也就是 batch_size 维度里可以包含任意样本的任意变量
	至于怎么区分不同变量的，额外加入了变量编码，然后借助 rotary position encoding 来代替 sin/cos 编码，保证变量交换不变性
- 多数据分布 -> 特殊的损失函数：模型的训练目标是一个混合的变量分布，提高多源数据下训练的灵活性

## Annotations
%% begin annotations %%


### Imported: 2026-01-05 7:33 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> cross-frequency learning, ii) accommodating an arbitrary number of variates for multivariate time series, and iii) addressing the varying distributional properties inherent in large-scale data
>
> [Page ](zotero://open-pdf/library/items/DUCTRW2X?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Firstly, we propose to learn multiple input and output projection layers to handle the differing patterns from time series of varying frequencies.
>
> [Page 2](zotero://open-pdf/library/items/DUCTRW2X?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Secondly, we address the problem of varying dimensionality with our proposed Any-variate Attention, which simultaneously considers both time and variate axes as a single sequence, leveraging Rotary Position Embeddings (RoPE) (Su et al., 2024), and learned binary attention biases (Yang et al., 2022b) to encode time and variate axes respectively
>
> [Page 2](zotero://open-pdf/library/items/DUCTRW2X?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Thirdly, we overcome the issue of requiring flexible predictive distributions with a mixture of parametric distributions
>
> [Page 2](zotero://open-pdf/library/items/DUCTRW2X?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> “flatten” multivariate time series, considering all variates as a single sequence.
>
> [Page 3](zotero://open-pdf/library/items/DUCTRW2X?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> opting for a larger patch size to handle high-frequency data, thereby lower the burden of the quadratic computation cost of attention while maintaining a long context length.
>
> [Page 3](zotero://open-pdf/library/items/DUCTRW2X?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Furthermore, we need to ensure that permutation equivariance w.r.t. variate ordering, and permutation invariance w.r.t. variate indices are respected
>
> [Page 4](zotero://open-pdf/library/items/DUCTRW2X?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> i) a Student’s t-distribution which has shown to be a robust option for general time series, ii) a negative binomial distribution for positive count data, iii) a log-normal distribution to model right-skewed data commonly across economic and and natural phenomena, and iv) a low variance normal distribution for high confidence predictions
>
> [Page 4](zotero://open-pdf/library/items/DUCTRW2X?page=4) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> cross-frequency learning, ii) accommodating an arbitrary number of variates for multivariate time series, and iii) addressing the varying distributional properties inherent in large-scale data
>
> [Page 1](zotero://open-pdf/library/items/DUCTRW2X?page=1)


%% Import Date: 2026-05-12T02:29:36.000+00:00 %%

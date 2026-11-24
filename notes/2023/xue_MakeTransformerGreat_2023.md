---
Title: "Make Transformer Great Again for Time Series Forecasting: Channel Aligned Robust Dual Transformer"
Tags:
  - time-series-forecasting
  - transformer
  - channel-alignment
  - robust-forecasting
  - dual-transformer
ZoteroLink: zotero://open-pdf/library/items/3A4EA6H7
FirstAuthor: Xue, Wang
Author: Zhou, Tian; Wen, Qingsong; Gao, Jinyang; Ding, Bolin; Jin, Rong;
Year: "2023"
ItemType: article
DOI: 10.48550/arXiv.2305.12095
Citekey: xue_MakeTransformerGreat_2023
motivation: 改进transformers用于时序预测，解决过拟合等问题
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address Transformer underperformance in time series forecasting, the authors propose CARD, a dual Transformer structure capturing temporal and variable dependencies alongside a robust loss function that weights predictions by uncertainty.

> [!cite]
> **Bibliography**:: Xue, W., Zhou, T., Wen, Q., Gao, J., Ding, B., & Jin, R. (2023). _Make Transformer Great Again for Time Series Forecasting: Channel Aligned Robust Dual Transformer_ (arXiv:2305.12095). arXiv. [https://doi.org/10.48550/arXiv.2305.12095](https://doi.org/10.48550/arXiv.2305.12095)

> [!info]
> **Contribution**:: 损失函数有意思

## Notes

wen qingsong 他们搞的，反正稿件是没中，比较有意思的是对于损失函数的设计

最近的研究似乎都是说 MLP 相比 transformers 要更高效，这篇文章当然就是希望 transformers 能够重新支棱起来

## Signal Decay-based Loss Function

正常来说，均方差损失函数被用来训练：

$$
\min\mathrm{E}_{A}\left[\frac{1}{L}\sum_{l=1}^{L}||\hat{a}_{t+l}(A)-a_{t+l}(A)||_{2}^{2}\right]
$$

> $A$ 为历史时序

然而实际场景中，离当前预测点越远的历史时序数据，其实对于当前的影响一般是越小的。所以应该给离当前预测点不同时间距离的历史时序数据一个不同的权重来计算损失

$$
\min\mathrm{E}_{A}\left[\frac{1}{L}\sum_{l=1}^{L}l^{-1/2}||\hat{a}_{t+l}(A)-a_{t+l}(A)||_{1}\right]
$$

其中 $l\in[t,t+L]$，$L$ 为预测的时序长度。可以看到历史时序对于越未来的时序的影响会越小

用 MAE 而不是 MSE 是因为它觉得这样子 outlier 的影响可以小一些

## 模型结构

这个模型 Figure 1 的视觉元素偏多，但核心思想其实很简洁：

- 不同颜色的行是不同维度，每个维度都进行 tokenization
- 然后分别以两种不同的方式进行注意力的计算：

    - 沿着 channel 的维度计算
    - 沿着 token 的维度计算

    最后把结果拼在一起
- MLP 作为 decoder 生成预测

> 好简单的想法，真的没有人之前这么干过吗 模型结构

这个模型 Figure 1 的视觉元素偏多，但核心思想其实很简洁：

- 不同颜色的行是不同维度，每个维度都进行 tokenization
- 然后分别以两种不同的方式进行注意力的计算：

    - 沿着 channel 的维度计算
    - 沿着 token 的维度计算

    最后把结果拼在一起
- MLP 作为 decoder 生成预测

> 好简单的想法，真的没有人之前这么干过吗


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 8:53 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> temporal correlations
>
> [Page 1](zotero://open-pdf/library/items/3A4EA6H7?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> dynamical dependence among multiple
>
> [Page 1](zotero://open-pdf/library/items/3A4EA6H7?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> robust loss function
>
> [Page 1](zotero://open-pdf/library/items/3A4EA6H7?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> overfitting
>
> [Page 1](zotero://open-pdf/library/items/3A4EA6H7?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In real practice, the correlation of historical information to far-future observations is usually smaller than that to near-future observations, implying that far-future observations have higher variance
>
> [Page 5](zotero://open-pdf/library/items/3A4EA6H7?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we assume that our time series follows the first-order Markov
>
> [Page 5](zotero://open-pdf/library/items/3A4EA6H7?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> process, i.e., at+1 ∼ N (G(at), σ2I)
>
> [Page 6](zotero://open-pdf/library/items/3A4EA6H7?page=6) 



%% end annotations %%

%% Import Date: 2023-11-28T20:54:03.615+08:00 %%

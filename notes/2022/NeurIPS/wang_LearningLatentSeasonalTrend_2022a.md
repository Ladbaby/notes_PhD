---
Title: Learning Latent Seasonal-Trend Representations for Time Series Forecasting
Tags:
  - NeurIPS/2022
  - time-series-forecasting
  - seasonal-trend-decomposition
  - latent-representation
  - stochastic-processes
ZoteroLink: zotero://open-pdf/library/items/K58CRE24
FirstAuthor: Wang, Zhiyuan
Author: Xu, Xovee; Zhang, Weifeng; Trajcevski, Goce; Zhong, Ting; Zhou, Fan;
Year: "2022"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "35"
Page: 38775-38787
Citekey: wang_LearningLatentSeasonalTrend_2022a
motivation: 更好地提取时序的底层特征
rating: 2
---

> [!info]
> **TLDR**:: To address the challenge of extracting clear seasonal and trend patterns from intricately entangled time series, the paper proposes LaST, a variational inference framework that disentangles these components in latent space using auxiliary objectives.

> [!cite]
> **Bibliography**:: Wang, Z., Xu, X., Zhang, W., Trajcevski, G., Zhong, T., & Zhou, F. (2022). Learning Latent Seasonal-Trend Representations for Time Series Forecasting. _Advances in Neural Information Processing Systems_, _35_, 38775–38787.

> [!info]
> **Contribution**:: 展示如何用 seasonal-trend 配合傅里叶变换做预测

![](Pasted%20image%2020231209163921.png)
## Notes

属于 information theory 那一派的文章（VAE）

虽然文章的核心 focus 在了，如何通过隐空间的 seasonal-trend 表示，直接进行损失学习，但由于定义出来的训练目标感觉过于复杂，很难说有很强的借鉴意义：从上图中可以看到，大概就是增加了两个训练目标：减小 $I(Z^s, Z^t)$ 的信息差，增大 $I(X, Z)$ 的信息差（$I$ 表示 mutual information）；至于 seasonal 那边用 autocorrelation，trend 那边用 temporal correlation coefficient，这就不太懂了

比较有意思的其实是关于图(b) predictor 的设计。
- seasonal
	这部分用了 DFT&iDFT 来先确定季节性对应的频率是多少，然后**通过 iDFT 就可以直接还原为时域的时候预测未来时间段的 seasonal 部分**
- trend
	这部分就没啥了，第一个 FFN（全连接层）将时间维度从 $T$ 改为 $\tau$，第二个 FFN 应该是多变量的维度转换
## Annotations
%% begin annotations %%


### Imported: 2023-12-09 4:36 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> aims to disentangle the seasonal-trend representations in the latent space
>
> [Page 1](zotero://open-pdf/library/items/K58CRE24?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> variational inference
>
> [Page 3](zotero://open-pdf/library/items/K58CRE24?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> seasonal predictor first employs the discrete Fourier transform (DFT) algorithm to detect the seasonal frequencies
>
> [Page 4](zotero://open-pdf/library/items/K58CRE24?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inverse the frequencies back to the temporal domain to extend the representation to the future part
>
> [Page 4](zotero://open-pdf/library/items/K58CRE24?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> trend predictor provides a feed forward network (FFN)
>
> [Page 4](zotero://open-pdf/library/items/K58CRE24?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> obtain the forecasting result Y by their sum
>
> [Page 4](zotero://open-pdf/library/items/K58CRE24?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> LLaST = LELBO + I(X, Zs) + I(X, Zt) − I(Zs, Zt),
>
> [Page 4](zotero://open-pdf/library/items/K58CRE24?page=4) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The predictor makes forecasting and measures the accuracy (e.g,. L1 or L2 losses)
>
> [Page 4](zotero://open-pdf/library/items/K58CRE24?page=4)


%% Import Date: 2026-05-12T01:13:25.000+00:00 %%

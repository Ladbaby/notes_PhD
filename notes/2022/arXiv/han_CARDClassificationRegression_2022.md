---
Title: "CARD: Classification and Regression Diffusion Models"
Tags:
  - arXiv/2022
  - diffusion-models
  - classification
  - regression
  - uncertainty-quantification
ZoteroLink: zotero://open-pdf/library/items/SLPLFS5T
FirstAuthor: Han, Xizewen
Author: Zheng, Huangjie; Zhou, Mingyuan;
Year: 2022
ItemType: webpage
DOI: 10.48550/arXiv.2206.07275
Citekey: han_CARDClassificationRegression_2022
Journal: arXiv.org
rating: 2
---
> [!info]
> **TLDR**:: To address the failure of existing methods to accurately capture complex, multi-modal predictive distributions in supervised learning, CARD combines denoising diffusion with mean estimators to recover full conditional distributions and provide finer-grained instance-level confidence assessments.

> [!cite]
> **Bibliography**:: Han, X., Zheng, H., & Zhou, M. (2022). CARD: Classification and Regression Diffusion Models. _arXiv.org_, . https://doi.org/10.48550/arXiv.2206.07275

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="8"><p>NeurIPS 2022</p>
</div>
<div data-schema-version="8"><p>可用于分类和回归预测的扩散模型</p>
</div>.

## Annotations



> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> state-of-the-art
>
>> 最先进的
>
> [Page 1](zotero://open-pdf/library/items/SLPLFS5T?page=1) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> finer granularity
>
>> 更细的粒度
>
> [Page 1](zotero://open-pdf/library/items/SLPLFS5T?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> our goal is to accurately recover the full distribution of y conditioning on x given a set of N training data points, denoted as D = {(xi, yi)}1,N
>
> [Page 2](zotero://open-pdf/library/items/SLPLFS5T?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> These previous methods mainly focus on unconditional generative modeling
>
> [Page 2](zotero://open-pdf/library/items/SLPLFS5T?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In particular, our goal is to thoroughly investigate whether CARD can help accurately recover p(y | x, D), the predictive distribution of y given x after observing data D = {(xi, yi)}i=1,N
>
> [Page 2](zotero://open-pdf/library/items/SLPLFS5T?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In other words, our focus is on regression analysis of continuous or categorical response variables given their corresponding covariates
>
> [Page 2](zotero://open-pdf/library/items/SLPLFS5T?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> q(yt−1 | yt, y0, x) = q(yt−1 | yt, y0, fφ(x)) = N ( yt−1;  ̃ μ (yt, y0, fφ(x)),  ̃ βtI ) ,
>
> [Page 3](zotero://open-pdf/library/items/SLPLFS5T?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the goal of the reverse diffusion process is to gradually recover the distribution of the noise term
>
> [Page 3](zotero://open-pdf/library/items/SLPLFS5T?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> evaluate the level of similarity between the learned and the true conditional distributions
>
> [Page 5](zotero://open-pdf/library/items/SLPLFS5T?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> 1. Prediction Interval Coverage Probability (PICP); 2. Quantile Interval Coverage Error (QICE)
>
> [Page 5](zotero://open-pdf/library/items/SLPLFS5T?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Intuitively, when the learned distribution represents the true distribution well, this measurement should be close to the difference between the selected low and high percentiles. In this paper, we choose the 2.5th and 97.5th percentile, thus an ideal PICP value for the learned model should be 95%.
>
> [Page 6](zotero://open-pdf/library/items/SLPLFS5T?page=6) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> However, they are two different types of generative models, as generative classifiers model the conditional distribution p(x | y), while CARD models a different conditional distribution, i.e., p(y | x)
>
> [Page 19](zotero://open-pdf/library/items/SLPLFS5T?page=19) 

> [!quote|#ff6666] <mark style="background-color: #ff6666">Highlight</mark>
> NLL
>
>> negative log likelihood
>
> [Page 19](zotero://open-pdf/library/items/SLPLFS5T?page=19) 




%% Import Date: 2026-05-13T19:57:09.000+00:00 %%

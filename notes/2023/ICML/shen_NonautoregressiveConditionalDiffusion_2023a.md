---
Title: Non-autoregressive Conditional Diffusion Models for Time Series Prediction
Tags:
  - ICML/2023
  - time-series-forecasting
  - diffusion-model
  - dataset/NorPool
  - dataset/Caiso
  - dataset/electricity
  - dataset/traffic
  - dataset/weather
ZoteroLink: zotero://open-pdf/library/items/4RQPJSZP
FirstAuthor: Shen, Lifeng
Author: Kwok, James;
Year: 2023
ItemType: conferencePaper
Citekey: shen_NonautoregressiveConditionalDiffusion_2023a
motivation: 较早拿扩散做时序任务的
Publisher: PMLR
Conference: International Conference on Machine Learning
Page: 31016-31029
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of adapting diffusion models for time series prediction, this work introduces TimeDiff, a non-autoregressive model leveraging future mixup and autoregressive initialization to achieve high-quality forecasting.

> [!cite]
> Shen, L., & Kwok, J. T. (2023). Non-autoregressive Conditional Diffusion Models for Time Series Prediction. International Conference on Machine Learning (ICML), 31016–31029.


> [!info]
> **Contribution**:: 扩散用于时序预测

## Notes
>
>Comment: Accepted by ICML 2023 (Poster).

长时序预测任务

核心点：在 denoising 的时候引入两个 conditioning 的机制
- future mixup
- autoregressive initialization

不足之处：
> the model has difficulties in learning multivariate dependencies when the time series has a large number of variables

预计可以通过加入 graph neural network 来解决该限制

## Future Mixup

combines the **past information’s mapping** $\mathcal{F}(x^0_{-L+1:0})$ and the **future ground-truth** $x^0_{1:H}$

$$
\mathbf{z}_{\mathrm{mix}}=\mathrm{\bf m}^{k}\odot\mathcal{F}({\bf x}_{-L+1:0}^{0})+\left(1-\mathrm{\bf~m}^{k}\right)\odot{\bf x}_{1:H}^{0}
$$

## Autoregressive Model

目标：减小边界处的不和谐/一致（对于预测任务来说就是过往数据和未来数据的边界）

这里用的就是个简单的线性自回归模型，来粗略估计 $x^0_{1:H}$

$$\
{\bf z}_{a r}=\sum_{i=-L+1}^{0}{\bf W}_{i}\odot{\bf X}_{i}^{0}+{\bf B}
$$

## 可能的改动

- 多变量（图网络？）
- DDPM 改 DDIM
- 预测改填补
- autoregressive model 改成更适合的？


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:38 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> future mixup allows parts of the ground-truth future predictions for conditioning, while autoregressive initialization helps better initialize the model with basic time series patterns such as short-term trends.
>
> [Page 1](zotero://open-pdf/library/items/YYLWC7KE?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> semantic similarities across modalities (e.g., text and image)
>
> [Page 3](zotero://open-pdf/library/items/YYLWC7KE?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> novel conditioning mechanisms that are tailored for time series data
>
> [Page 3](zotero://open-pdf/library/items/YYLWC7KE?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> past information’s mapping F (x0−L+1:0) and the future ground-truth x0 1:H .
>
> [Page 4](zotero://open-pdf/library/items/YYLWC7KE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Hadamard product.
>
>> 逐元素相乘
>
> [Page 4](zotero://open-pdf/library/items/YYLWC7KE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> convolution network as F, which is commonly used for the modeling of local temporal patterns and long-range dependencies in time series (Wang et al., 2017; Li et al., 2019).
>
> [Page 4](zotero://open-pdf/library/items/YYLWC7KE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> teacher forcing (Williams & Zipser, 1989) and scheduled sampling (Bengio et al., 2015),
>
> [Page 4](zotero://open-pdf/library/items/YYLWC7KE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> non-autoregressive models often produce disharmony at the boundaries between masked and observed regions (Lugmayr et al., 2022)
>
> [Page 4](zotero://open-pdf/library/items/YYLWC7KE?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> linear autoregressive (AR) model Mar to provide an initial guess zar ∈ Rd×H for x0 1:H
>
> [Page 5](zotero://open-pdf/library/items/YYLWC7KE?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> minimizing the ℓ2-distance between zar and the groundtruth x0 1:H
>
> [Page 5](zotero://open-pdf/library/items/YYLWC7KE?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> this simple AR model cannot accurately approximate a complex nonlinear time series in general, it can still capture simple patterns, such as short-term trends (Lai et al., 2018)
>
> [Page 5](zotero://open-pdf/library/items/YYLWC7KE?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it does not require autoregressive decoding
>
> [Page 5](zotero://open-pdf/library/items/YYLWC7KE?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This avoids the error accumulation and slow inference problems
>
> [Page 5](zotero://open-pdf/library/items/YYLWC7KE?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Note that we predict the data xθ(xk 1:H , k) for denoising,
>
>> 见 Dynamic Dual-Output Diffusion Models
>
> [Page 5](zotero://open-pdf/library/items/YYLWC7KE?page=5) 



%% end annotations %%

%% Import Date: 2023-11-28T16:38:32.456+08:00 %%

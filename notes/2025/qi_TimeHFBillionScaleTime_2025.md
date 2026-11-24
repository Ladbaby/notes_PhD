---
Title: "TimeHF: Billion-Scale Time Series Models Guided by Human Feedback"
Tags:
  - arXiv/2025
  - time-series
  - large-time-series-models
  - human-feedback
  - time-series-forecasting
ZoteroLink: zotero://open-pdf/library/items/B65DX846
FirstAuthor: Qi, Yongzhi
Author: Hu, Hao; Lei, Dazhou; Zhang, Jianshen; Shi, Zhengxin; Huang, Yulin; Chen, Zhengyu; Lin, Xiaoming; Shen, Zuo-Jun Max;
Year: "2025"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2501.15942
Citekey: qi_TimeHFBillionScaleTime_2025
rating: 2
---
> [!info]
> **TLDR**:: To address the training complexity and feedback adaptation challenges in large time series models, this paper introduces TimeHF, a 6-billion-parameter pipeline utilizing patch convolutional embeddings and time-series policy optimization for human feedback.

> [!cite]
> **Bibliography**:: Qi, Y., Hu, H., Lei, D., Zhang, J., Shi, Z., Huang, Y., Chen, Z., Lin, X., & Shen, Z. M. (2025). TimeHF: Billion-Scale Time Series Models Guided by Human Feedback. https://doi.org/10.48550/arXiv.2501.15942

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We use patch convolutional embedding to capture long time series information and design a human feedback mechanism called time-series policy optimization
>
> [Page 1](zotero://open-pdf/library/items/B65DX846?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Deployed in JD.com’s supply chain, TimeHF handles automated replenishment for over 20,000 products
>
> [Page 1](zotero://open-pdf/library/items/B65DX846?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> feedback contrast pairs—constructed by interpretable small models created by human experts
>
>> 用小模型来提供feedback
>
> [Page 1](zotero://open-pdf/library/items/B65DX846?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> In a specific domain such as forecasting sales of a long-tail product, prediction models must be adjusted or tuned to mitigate hallucinations
>
>> 长尾数据会突显模型的幻觉
>
> [Page 1](zotero://open-pdf/library/items/B65DX846?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Timeseries policy optimization
>
> [Page 2](zotero://open-pdf/library/items/B65DX846?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It utilizes specialized predictive models (small models) built by human experts as proxies for expert knowledge and cognition to generate prediction pairs reflecting diverse human preferences in complex time series scenarios
>
>> 用一堆小模型的预测来当作人为反馈的代替
>
> [Page 2](zotero://open-pdf/library/items/B65DX846?page=2)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> but they all treat patches as independent segments, limiting the model’s ability to capture inter-patch information
>
>> MOIRAI把patch当作是独立的segment，限制了patch间的关系建模
>
> [Page 2](zotero://open-pdf/library/items/B65DX846?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we add a feedback contrast pair which includes a good prediction and a bad prediction
>
>> 反馈是一个好的预测和一个坏的预测
>
> [Page 5](zotero://open-pdf/library/items/B65DX846?page=5)


%% Import Date: 2026-05-12T03:32:00.000+00:00 %%

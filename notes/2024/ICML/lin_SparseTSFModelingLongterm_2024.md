---
Title: "SparseTSF: Modeling Long-term Time Series Forecasting with *1k* Parameters"
Tags:
  - ICML/2024
  - time-series-forecasting
  - sparse-moE
  - lightweight-models
  - long-term-forecasting
ZoteroLink: zotero://open-pdf/library/items/NENPIGQG
FirstAuthor: Lin, Shengsheng
Author: Lin, Weiwei; Wu, Wentai; Chen, Haojun; Yang, Junjie;
Year: "2024"
ItemType: conferencePaper
Citekey: lin_SparseTSFModelingLongterm_2024
motivation: 无
Conference: Forty-first International Conference on Machine Learning
rating: 3
---
> [!info]
> **TLDR**:: To address the high computational cost of long-term time series forecasting, SparseTSF decouples periodicity and trend via cross-period sparse forecasting to achieve competitive performance with fewer than 1k parameters.

> [!cite]
> **Bibliography**:: Lin, S., Lin, W., Wu, W., Chen, H., & Yang, J. (2024, June 6). _SparseTSF: Modeling Long-term Time Series Forecasting with *1k* Parameters_. Forty-first International Conference on Machine Learning. [https://openreview.net/forum?id=54NSHO0lFe](https://openreview.net/forum?id=54NSHO0lFe)

> [!info]
> **Contribution**:: 特色是模型很小

## Notes

![](Pasted%20image%2020240719164049.png)

模型结构简直可以用。。。朴实无华来形容。最核心的部分竟然只是一个线性层？？？

感觉是一个类似 sliding window 的依次预测的模式。每个窗口内，首先会先聚合周围的观测值，然后再进行下采样。然后将下采样的结果交给线性层，最后上采样回来。

> 不过文章并没有说明是如何进行上采样的？感觉这部分的逻辑应该不是很众所周知吧

> 仔细看了代码，所谓的 aggregate 实际上是一维卷积然后结果再和原时序相加，然后 downsample 只是 reshape，把时序切割成以一个个周期为单位的小时序。upsample 就是重新恢复成完整时序

## Annotations
%% begin annotations %%


### Imported: 2024-07-19 4:39 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It first downsamples the original sequences with constant periodicity into subsequences, then performs predictions on each downsampled subsequence
>
> [Page 1](zotero://open-pdf/library/items/NENPIGQG?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Channel Independent Strategy
>
> [Page 3](zotero://open-pdf/library/items/NENPIGQG?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Intuitively, this forecasting process appears as a sliding forecast with a sparse interval of w, performed by a fully connected layer with parameter sharing within a constant period w.
>
> [Page 3](zotero://open-pdf/library/items/NENPIGQG?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (i) loss of information, as only one data point per period is utilized for prediction, while the rest are ignored; and (ii) amplification of the impact of outliers, as the presence of extreme values in the downsampled subsequences can directly affect the prediction.
>
> [Page 3](zotero://open-pdf/library/items/NENPIGQG?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Each aggregated data point incorporates information from other points within its surrounding period, addressing issue (i)
>
> [Page 3](zotero://open-pdf/library/items/NENPIGQG?page=3) 



%% end annotations %%

%% Import Date: 2024-07-19T16:39:24.507+08:00 %%

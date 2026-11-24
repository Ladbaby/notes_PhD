---
Title: Interpolation-Prediction Networks for Irregularly Sampled Time Series
Tags:
  - ICLR/2019
  - time-series-forecasting
  - irregular-time-series
  - dataset/MIMIC-III
  - dataset/UWaveGesture
ZoteroLink: zotero://open-pdf/library/items/S4MQYA39
FirstAuthor: Shukla, Satya Narayan
Author: Marlin, Benjamin;
Year: "2019"
ItemType: conferencePaper
Citekey: shukla_InterpolationPredictionNetworksIrregularly_2019
motivation: 试图应对不规则的时序
Conference: International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address supervised learning with sparse, irregularly sampled multivariate time series, the authors propose a semi-parametric interpolation network that shares information across dimensions before feeding data into a prediction network.

> [!cite]
> **Bibliography**:: Shukla, S. N., & Marlin, B. (2018, September 27). _Interpolation-Prediction Networks for Irregularly Sampled Time Series_. International Conference on Learning Representations. [https://openreview.net/forum?id=r1efr3C9Ym](https://openreview.net/forum?id=r1efr3C9Ym)

> [!info]
> **Contribution**:: 

![](Pasted%20image%2020231128165923.png)

## Notes

主要是做分类和回归任务

感觉也是 set-based 的处理方法

对于 Figure 1 的模型图来说：

- 在 interpolation network 里，模型用了三个不同的分支来分别进行

    - low pass (or smooth)

        > captures the overall trend of the time series data by removing high-frequency noise or transients.
    - high pass (or non-smooth)

        > captures the high-frequency noise or transients in the time series data
    - intensity function

        > captures information about where observations occur in time

    需要注意的是，这三个操作都发生在 reference time point $r_k$
- prediction network 没有什么要求，啥都行

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:57 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> motivated by the analysis of physiological time series data in electronic health records
>
> [Page 1](zotero://open-pdf/library/items/LD2RNDGQ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> classification and regression
>
> [Page 1](zotero://open-pdf/library/items/LD2RNDGQ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Thus, we represent time series d for data case n as a tuple sdn = (tdn, xdn)
>
>> 您也是set based？
>
> [Page 4](zotero://open-pdf/library/items/LD2RNDGQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> against a set of reference time points r = [r1, ..., rT ]
>
> [Page 4](zotero://open-pdf/library/items/LD2RNDGQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The T reference time points rt are chosen to be evenly spaced within that interval.
>
> [Page 4](zotero://open-pdf/library/items/LD2RNDGQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The prediction network can consist of any standard supervised neural network architecture (fully-connected feedforward, convolutional, recurrent, etc)
>
> [Page 4](zotero://open-pdf/library/items/LD2RNDGQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> provide a collection of interpolants of each of the D dimensions of an input multivariate time series defined at the T reference time points r = [r1, ..., rT ].
>
> [Page 4](zotero://open-pdf/library/items/LD2RNDGQ?page=4) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> transients
>
>> 瞬态
>
> [Page 4](zotero://open-pdf/library/items/LD2RNDGQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> semi-parametric univariate transformations
>
> [Page 4](zotero://open-pdf/library/items/LD2RNDGQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> radial basis function
>
> [Page 4](zotero://open-pdf/library/items/LD2RNDGQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> low-pass (or smooth)
>
> [Page 5](zotero://open-pdf/library/items/LD2RNDGQ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> high-pass (or non-smooth)
>
> [Page 5](zotero://open-pdf/library/items/LD2RNDGQ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> intensity function
>
> [Page 5](zotero://open-pdf/library/items/LD2RNDGQ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> all D dimensions of the input multivariate time series have been re-represented in terms of C outputs defined on the regularly spaced set of reference time points r1, ..., rT (in our experiments, we use C = 3 as described above)
>
> [Page 5](zotero://open-pdf/library/items/LD2RNDGQ?page=5) 



%% end annotations %%

%% Import Date: 2023-11-28T16:58:06.416+08:00 %%

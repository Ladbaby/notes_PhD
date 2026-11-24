---
Title: "A Time Series is Worth 64 Words: Long-term Forecasting with Transformers"
Tags:
  - ICLR/2023
  - highly-cited
  - time-series-forecasting
  - transformer
  - patching
  - channel-independence
ZoteroLink: zotero://open-pdf/library/items/MFZBZUTI
FirstAuthor: Nie, Yuqi
Author: Nguyen, Nam H.; Sinthong, Phanwadee; Kalagnanam, Jayant;
Year: "2023"
ItemType: conferencePaper
Citekey: nie_TimeSeriesWorth_2023
motivation: 无
Conference: The Eleventh International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address the high computational cost and limited look-back window of Transformer-based time series forecasting, this paper introduces PatchTST, which segments series into patches and employs channel independence to significantly reduce attention complexity while improving long-term prediction accuracy.

> [!cite]
> **Bibliography**:: Nie, Y., Nguyen, N. H., Sinthong, P., & Kalagnanam, J. (2022, September 29). _A Time Series is Worth 64 Words: Long-term Forecasting with Transformers_. The Eleventh International Conference on Learning Representations. [https://openreview.net/forum?id=Jbdc0vTOcol](https://openreview.net/forum?id=Jbdc0vTOcol)

> [!info]
> **Contribution**:: patch 的概念引入时序

## Notes

![](Pasted%20image%2020260106102153.png)

时序模型里最高的山。性能比较鲁棒，又是比较开创性的工作。


## Annotations
%% begin annotations %%


### Imported: 2026-01-06 10:19 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> patches
>
> [Page ](zotero://open-pdf/library/items/6S7VM9BZ?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> shares the same embedding and Transformer weights across all the series
>
> [Page ](zotero://open-pdf/library/items/6S7VM9BZ?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> local semantic information is retained in the embedding; computation and memory usage of the attention maps are quadratically reduced given the same look-back window; and the model can attend longer history
>
> [Page ](zotero://open-pdf/library/items/6S7VM9BZ?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> masked autoencoder
>
> [Page 5](zotero://open-pdf/library/items/6S7VM9BZ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The masked values at the current time step can be easily inferred by interpolating with the immediate proceeding or succeeding time values without high level understanding of the entire sequence, which deviates from our goal of learning important abstract representation of the whole signal.
>
> [Page 5](zotero://open-pdf/library/items/6S7VM9BZ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the design of the output layer for forecasting task can be troublesom
>
> [Page 5](zotero://open-pdf/library/items/6S7VM9BZ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This may cause overfitting
>
> [Page 5](zotero://open-pdf/library/items/6S7VM9BZ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> patches can be overlapped, we divide each input sequence into regular non-overlapping patches
>
> [Page 5](zotero://open-pdf/library/items/6S7VM9BZ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> shared weight mechanism
>
> [Page 5](zotero://open-pdf/library/items/6S7VM9BZ?page=5) 



%% end annotations %%

%% Import Date: 2026-01-06T10:19:30.952+08:00 %%

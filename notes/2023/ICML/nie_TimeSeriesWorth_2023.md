---
Title: "A Time Series is Worth 64 Words: Long-term Forecasting with Transformers"
Tags:
  - ICLR/2023
  - transformer
  - time-series-forecasting
  - long-term-forecasting
  - patching
  - channel-independence
ZoteroLink: zotero://open-pdf/library/items/MFZBZUTI
FirstAuthor: Nie, Yuqi
Author: Nguyen, Nam H.; Sinthong, Phanwadee; Kalagnanam, Jayant;
Year: "2023"
ItemType: conferencePaper
Citekey: nie_TimeSeriesWorth_2023
motivation: patch引入时序以解决多个痛点
Conference: The Eleventh International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address computational bottlenecks in multivariate time series forecasting, the paper introduces PatchTST, which segments series into patches and employs channel-independence to reduce attention complexity while retaining local semantic information.

> [!cite]
> **Bibliography**:: Nie, Y., Nguyen, N. H., Sinthong, P., & Kalagnanam, J. (2022, September 29). _A Time Series is Worth 64 Words: Long-term Forecasting with Transformers_. The Eleventh International Conference on Learning Representations. [https://openreview.net/forum?id=Jbdc0vTOcol](https://openreview.net/forum?id=Jbdc0vTOcol)

> [!info]
> **Contribution**:: patch 引入时序

![](Pasted%20image%2020231128210155.png)
## Notes

感觉文章的创新点也不是很奇特，主要就是把输入的时序分成等分的patch，它认为有这些优点：

- local semantic information is retained in the embedding
- computation and memory usage of the attention maps are quadratically reduced given the same look-back window
- the model can attend longer history.

然后另一个做法是让各个维度的时序分别进行预测，但是这真的很稀奇吗？

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 9:00 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> patches
>
> [Page 1](zotero://open-pdf/library/items/6S7VM9BZ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> shares the same embedding and Transformer weights across all the series
>
> [Page 1](zotero://open-pdf/library/items/6S7VM9BZ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> local semantic information is retained in the embedding; computation and memory usage of the attention maps are quadratically reduced given the same look-back window; and the model can attend longer history
>
> [Page 1](zotero://open-pdf/library/items/6S7VM9BZ?page=1) 

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

%% Import Date: 2023-11-28T21:00:26.815+08:00 %%

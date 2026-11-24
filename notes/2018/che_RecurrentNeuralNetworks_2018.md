---
Title: Recurrent Neural Networks for Multivariate Time Series with Missing Values
Tags:
  - scientific-reports/2018
  - recurrent-neural-network
  - missing-data
  - multivariate-time-series
  - imputation
ZoteroLink: zotero://open-pdf/library/items/WD3DJC59
FirstAuthor: Che, Zhengping
Author: Purushotham, Sanjay; Cho, Kyunghyun; Sontag, David; Liu, Yan;
Year: "2018"
ItemType: journalArticle
Journal: Scientific Reports
Volume: "8"
Issue: "1"
Page: "6085"
DOI: 10.1038/s41598-018-24271-9
Citekey: che_RecurrentNeuralNetworks_2018
motivation: 现有做法处理缺失值的时候，要么忽视要么填补
Publisher: Nature Publishing Group
rating: 3
---

> [!info]
> **TLDR**:: To address informative missingness in multivariate time series, the authors develop GRU-D, a recurrent model that incorporates masking and time interval representations to capture temporal dependencies and leverage missing patterns for improved prediction.

> [!cite]
> **Bibliography**:: Che, Z., Purushotham, S., Cho, K., Sontag, D., & Liu, Y. (2018). Recurrent Neural Networks for Multivariate Time Series with Missing Values. _Scientific Reports_, _8_(1), Article 1. [https://doi.org/10.1038/s41598-018-24271-9](https://doi.org/10.1038/s41598-018-24271-9)

> [!info]
> **Contribution**:: 不规则领域接近奠基性质的工作

## Notes
>
>_关于informative_ missingness可以借鉴.



## Annotations
%% begin annotations %%


### Imported: 2026-01-04 9:56 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> informative missingness1, i.e., the missing values and patterns provide rich information about target labels in supervised learning tasks
>
> [Page ](zotero://open-pdf/library/items/WD3DJC59?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We observe that the value of missing rate is correlated with the labels, and the missing rate of variables with low missing rate are usually highly (either positive or negative) correlated with the labels
>
> [Page ](zotero://open-pdf/library/items/WD3DJC59?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A simple solution is to omit the missing data and to perform analysis only on the observed data
>
> [Page ](zotero://open-pdf/library/items/WD3DJC59?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Another solution is to fill in the missing values with substituted values
>
> [Page ](zotero://open-pdf/library/items/WD3DJC59?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> RNNs enjoy several nice properties such as strong prediction performance as well as the ability to capture long-term temporal dependencies and variable-length observations
>
> [Page 2](zotero://open-pdf/library/items/WD3DJC59?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Exploiting the power of customized RNN models along with the informativeness of missing patterns is a new promising venue to effectively model multivariate time series and is the main motivation behind our work.
>
> [Page 2](zotero://open-pdf/library/items/WD3DJC59?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> exploit two representations of informative missingness patterns, i.e., masking and time interval.
>
> [Page 2](zotero://open-pdf/library/items/WD3DJC59?page=2) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> First, the value of the missing variable tend to be close to some default value if its last observation happens a long time ago
>
>> 用decay的原因
>
> [Page 4](zotero://open-pdf/library/items/WD3DJC59?page=4) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Second, the influence of the input variables will fade away over time if the variable has been missing for a while.
>
> [Page 4](zotero://open-pdf/library/items/WD3DJC59?page=4) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> informative missingness1, i.e., the missing values and patterns provide rich information about target labels in supervised learning tasks
>
> [Page 1](zotero://open-pdf/library/items/WD3DJC59?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We observe that the value of missing rate is correlated with the labels, and the missing rate of variables with low missing rate are usually highly (either positive or negative) correlated with the labels
>
> [Page 1](zotero://open-pdf/library/items/WD3DJC59?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A simple solution is to omit the missing data and to perform analysis only on the observed data
>
> [Page 1](zotero://open-pdf/library/items/WD3DJC59?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Another solution is to fill in the missing values with substituted values
>
> [Page 1](zotero://open-pdf/library/items/WD3DJC59?page=1)


%% Import Date: 2026-05-12T00:15:36.000+00:00 %%

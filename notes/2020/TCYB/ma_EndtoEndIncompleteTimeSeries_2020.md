---
Title: End-to-End Incomplete Time-Series Modeling From Linear Memory of Latent Variables
Tags:
  - TCYB/2020
  - incomplete-time-series
  - time-series-imputation
  - LIME-RNN
  - recurrent-neural-network
ZoteroLink: zotero://open-pdf/library/items/JVRTNWKJ
FirstAuthor: Ma, Qianli
Author: Li, Sen; Shen, Lifeng; Wang, Jiabing; Wei, Jia; Yu, Zhiwen; Cottrell, Garrison W.;
Year: "2020"
ItemType: journalArticle
Journal: IEEE Transactions on Cybernetics
Volume: "50"
Issue: "12"
Page: 4908-4920
DOI: 10.1109/TCYB.2019.2906426
Citekey: ma_EndtoEndIncompleteTimeSeries_2020
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of imputing nonlinear dependencies in incomplete time series, the authors propose LIME-RNN, which uses a residual sum vector to integrate previous hidden states and enable simultaneous imputation and prediction.

> [!cite]
> **Bibliography**:: Ma, Q., Li, S., Shen, L., Wang, J., Wei, J., Yu, Z., & Cottrell, G. W. (2020). End-to-End Incomplete Time-Series Modeling From Linear Memory of Latent Variables. _IEEE Transactions on Cybernetics_, _50_(12), 4908-4920. https://doi.org/10.1109/TCYB.2019.2906426

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a linear memory vector recurrent neural network (LIME-RNN)
>
> [Page 4908](zotero://open-pdf/library/items/JVRTNWKJ?page=4908)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> recurrent neural network (RNN) with a learned linear combination of previous history states
>
> [Page 4908](zotero://open-pdf/library/items/JVRTNWKJ?page=4908)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> LIME-RNN allows imputation and prediction
>
> [Page 4908](zotero://open-pdf/library/items/JVRTNWKJ?page=4908)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> simultaneously.
>
> [Page 4908](zotero://open-pdf/library/items/JVRTNWKJ?page=4908)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> are used to copy information from previous hidden unit representations forward, so that the internal module only has to learn a residual between its input and output
>
> [Page 4909](zotero://open-pdf/library/items/JVRTNWKJ?page=4909)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> residual sum vector (RSV)
>
> [Page 4909](zotero://open-pdf/library/items/JVRTNWKJ?page=4909)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The output of RSV at time step t is an RSV denoted by rt ∈ Rm
>
> [Page 4911](zotero://open-pdf/library/items/JVRTNWKJ?page=4911)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> rt = { f (ht) if t = 1 f (ht + g(Wrrt−1)) if t = 2, 3 ...,T
>
> [Page 4911](zotero://open-pdf/library/items/JVRTNWKJ?page=4911)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the input ut to LIME-RNN is obtained by integrating the ground truth xt and the imputed value zt,as indicated by mt
>
> [Page 4911](zotero://open-pdf/library/items/JVRTNWKJ?page=4911)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Lt_approx(zt, xt) = ‖(zt − xt) ◦¬mt‖2 2.
>
> [Page 4912](zotero://open-pdf/library/items/JVRTNWKJ?page=4912)


%% Import Date: 2026-05-12T00:28:25.000+00:00 %%

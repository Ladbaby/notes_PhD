---
Title: Meta-learning framework with applications to zero-shot time-series forecasting
Tags:
  - arXiv/2020
  - meta-learning
  - time-series-forecasting
  - zero-shot
  - residual-learning
ZoteroLink: zotero://open-pdf/library/items/VDCK63GQ
FirstAuthor: Oreshkin, Boris N.
Author: Carpov, Dmitri; Chapados, Nicolas; Bengio, Yoshua;
Year: "2020"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2002.02887
Citekey: oreshkin_Metalearningframeworkapplications_2020
rating: 2
---
> [!info]
> **TLDR**:: To achieve robust zero-shot univariate time series forecasting without retraining, this work demonstrates that residual connections serve as a meta-learning adaptation mechanism that generates task-specific parameters on-the-fly.

> [!cite]
> **Bibliography**:: Oreshkin, B. N., Carpov, D., Chapados, N., & Bengio, Y. (2020). Meta-learning framework with applications to zero-shot time-series forecasting. https://doi.org/10.48550/arXiv.2002.02887

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> discover generic ways
>
> [Page 1](zotero://open-pdf/library/items/VDCK63GQ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> residual connections act as a meta-learning adaptation mechanism, generating a subset of task-specific parameters based on a given TS input
>
> [Page 1](zotero://open-pdf/library/items/VDCK63GQ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> train a neural network on a source TS dataset and deploy it on a different target TS dataset without retraining,
>
> [Page 1](zotero://open-pdf/library/items/VDCK63GQ?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the inner loop and the outer loop.
>
> [Page 2](zotero://open-pdf/library/items/VDCK63GQ?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> distribution p(T) over tasks, a predictor Pθ,w and a metalearner with meta-parameters φ
>
> [Page 3](zotero://open-pdf/library/items/VDCK63GQ?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> appropriately choosing the predictor’s task adaptive parameters θ after observing Dtr
>
> [Page 3](zotero://open-pdf/library/items/VDCK63GQ?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For each training task Ttrain i , the metalearner is requested to produce the solution to the task in the form of Pθ,w : Xval Ti 7→ ̂ Yval Ti conditioned on Dtr Ti
>
> [Page 3](zotero://open-pdf/library/items/VDCK63GQ?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The meta-learner’s meta-parameters φ include the metaparameters of the meta-initialization function, t0, the metaparameters of the predictor shared across tasks, w, and the meta-parameters of the update function, u.
>
> [Page 3](zotero://open-pdf/library/items/VDCK63GQ?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It defines an iterated update to predictor parameters θ at iteration ` based on their previous value and the task training set Dtr Ti
>
> [Page 3](zotero://open-pdf/library/items/VDCK63GQ?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the main advantage of meta-learning based forecasting approaches is that they enable learning a data-driven parameter estimator that can be optimized for a particular set of forecasting tasks and forecasting models.
>
> [Page 3](zotero://open-pdf/library/items/VDCK63GQ?page=3)


%% Import Date: 2026-05-12T00:35:28.000+00:00 %%

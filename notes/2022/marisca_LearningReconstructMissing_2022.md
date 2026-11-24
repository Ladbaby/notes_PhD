---
Title: Learning to Reconstruct Missing Data from Spatiotemporal Graphs with Sparse Observations
Tags:
  - LOG/2022
  - spatio-temporal-graph
  - missing-data
  - multivariate-time-series
  - graph-imputation
  - autoregressive-models
ZoteroLink: zotero://open-pdf/library/items/F5MMP9R3
FirstAuthor: Marisca, Ivan
Author: Cini, Andrea; Alippi, Cesare;
Year: "2022"
ItemType: conferencePaper
Conference: The First Learning on Graphs Conference
Citekey: marisca_LearningReconstructMissing_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the brittleness of autoregressive models in reconstructing highly sparse multivariate time series, the authors propose an attention-based architecture that learns spatiotemporal representations from discrete observations without propagating prediction errors.

> [!cite]
> **Bibliography**:: Marisca, I., Cini, A., & Alippi, C. (2022). Learning to Reconstruct Missing Data from Spatiotemporal Graphs with Sparse Observations. In _The First Learning on Graphs Conference_.

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="8"><p>用图网络的工作</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> highly sparse
>
> [Page 1](zotero://open-pdf/library/items/F5MMP9R3?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> autoregressive models can be brittle and exhibit unstable learning dynamics
>
>> 可以借鉴的缺点
>
> [Page 1](zotero://open-pdf/library/items/F5MMP9R3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> exploiting a spatiotemporal propagation architecture aligned with the imputation task
>
> [Page 1](zotero://open-pdf/library/items/F5MMP9R3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> without propagating prediction errors or requiring a bidirectional model to encode forward and backward time dependencies
>
> [Page 1](zotero://open-pdf/library/items/F5MMP9R3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> More advanced methods deal with missing data by autoregressively replacing missing observations with predicted ones, eventually using bidirectional architectures [4, 5] to exploit both forward and backward temporal dependencies
>
> [Page 1](zotero://open-pdf/library/items/F5MMP9R3?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> relying only on observed values
>
> [Page 2](zotero://open-pdf/library/items/F5MMP9R3?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> achieves the twofold objective of avoiding propagating biased representation – typical in the autoregressive framework – and reconstructing observations at arbitrary nodes in the sensor network
>
> [Page 2](zotero://open-pdf/library/items/F5MMP9R3?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sparse spatiotemporal attention mechanism
>
> [Page 2](zotero://open-pdf/library/items/F5MMP9R3?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> how it overcomes the limits of existing approaches, particularly in settings with highly sparse data.
>
> [Page 2](zotero://open-pdf/library/items/F5MMP9R3?page=2)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Besides the computational overhead of having three separate components and the compounding error in the autoregressive models [11, 12], they can fall short in capturing global context, as the processing of the structural information is decomposed.
>
> [Page 3](zotero://open-pdf/library/items/F5MMP9R3?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inter-node temporal cross-attention, computing a message to hiτ using encodings in hj t:t+T associated with a valid observation for every neighbor j ∈ N (i) (Eq. 3).
>
> [Page 3](zotero://open-pdf/library/items/F5MMP9R3?page=3)


%% Import Date: 2026-05-12T01:22:42.000+00:00 %%

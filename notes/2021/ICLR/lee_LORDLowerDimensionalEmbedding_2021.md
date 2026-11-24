---
Title: "LORD: Lower-Dimensional Embedding of Log-Signature in Neural Rough Differential Equations"
Tags:
  - ICLR/2021
  - log-signature
  - neural-rough-differential-equations
  - long-time-series
  - time-series-processing
ZoteroLink: zotero://open-pdf/library/items/4MLNGQHI
FirstAuthor: Lee, Jaehoon
Author: Jeon, Jinsung; Jhin, Sheo; Hyeong, Jihyeon; Kim, Jayoung; Jo, Minju; Seungji, Kook; Park, Noseong;
Year: "2021"
ItemType: conferencePaper
Conference: International Conference on Learning Representations
Citekey: lee_LORDLowerDimensionalEmbedding_2021
rating: 2
---
> [!info]
> **TLDR**:: To address the spatial overhead of log-signature transforms in processing long time-series, the paper introduces LORD, an NRDE-based autoencoder that embeds higher-depth signature knowledge into lower-depth representations to stabilize training and boost accuracy.

> [!cite]
> **Bibliography**:: Lee, J., Jeon, J., Jhin, S., Hyeong, J., Kim, J., Jo, M., Seungji, K., & Park, N. (2021). LORD: Lower-Dimensional Embedding of Log-Signature in Neural Rough Differential Equations. In _International Conference on Learning Representations_.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> very long time-series data
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> neural rough differential equations (NRDEs
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> known to be more efficient than the Fourier transform for irregular long time-series
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> rough path theory
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> log-signature
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> log-signature is a unique feature of the path
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In other words, the path has the same value as the observation (xi, ti), when ti is one of the observation timepoints and otherwise, interpolated values.
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The log-signature calculation has one important hyperparameter D called depth — the higher the depth is, the more accurately represented each sub-path is (cf. Eq. 4)
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Since the dimensionality of the input data is, given a dataset, fixed, we need to decrease D to reduce overheads
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> embed the higher-depth signatures onto a lower-dimensional space to i) decrease the complexity of the main NRDE (the solid blue box in Fig. 1), and ii) increase the easiness of training (cf. Fig. 2) and as a result, its model accuracy as well.
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> autoencoder architecture
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the higher-depth log-signature is indirectly embedded into the vector.
>
> [Page 3](zotero://open-pdf/library/items/4MLNGQHI?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the decoder reconstructs the higher-depth log-signature
>
> [Page 3](zotero://open-pdf/library/items/4MLNGQHI?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it is an encoding of the lower-depth log-signature and ii) the decoder should recover the higher-depth log-signature from it
>
> [Page 3](zotero://open-pdf/library/items/4MLNGQHI?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> NCDEs has an inherent disadvantage that they are weak at processing very long timeseries samples, because NCDEs directly process the very long time-series samples
>
> [Page 3](zotero://open-pdf/library/items/4MLNGQHI?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By creating a log-signature for every P -length sub-path, the entire sequence length can be reduced
>
> [Page 4](zotero://open-pdf/library/items/4MLNGQHI?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> larger memory footprints
>
> [Page 8](zotero://open-pdf/library/items/4MLNGQHI?page=8)


%% Import Date: 2026-05-12T00:39:44.000+00:00 %%

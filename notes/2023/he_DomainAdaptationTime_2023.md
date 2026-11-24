---
Title: Domain Adaptation for Time Series Under Feature and Label Shifts
Tags:
  - arXiv/2023
  - domain-adaptation
  - time-series
  - feature-shift
  - label-shift
ZoteroLink: zotero://open-pdf/library/items/RCY95TVB
FirstAuthor: He, Huan
Author: Queen, Owen; Koker, Teddy; Cuevas, Consuelo; Tsiligkaridis, Theodoros; Zitnik, Marinka;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2302.03133
Citekey: he_DomainAdaptationTime_2023
rating: 2
---
> [!info]
> **TLDR**:: To address feature and label shifts in unsupervised domain adaptation for complex time series, Raincoat aligns temporal and frequency representations while correcting misalignments to detect private labels and identify target domain label shifts.

> [!cite]
> **Bibliography**:: He, H., Queen, O., Koker, T., Cuevas, C., Tsiligkaridis, T., & Zitnik, M. (2023). Domain Adaptation for Time Series Under Feature and Label Shifts. https://doi.org/10.48550/arXiv.2302.03133

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Accepted by ICML 2023; 29 pages (14 pages main paper + 15 pages supplementary materials). Code: see https://github.com/mims-harvard/Raincoat.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the dynamic temporal structure variations across domains. This leads to feature shifts in the time and frequency representations
>
> [Page 1](zotero://open-pdf/library/items/RCY95TVB?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> label distributions of tasks in the source and target domains can differ significantly, posing difficulties in addressing label shifts and recognizing labels unique to the target domain
>
> [Page 1](zotero://open-pdf/library/items/RCY95TVB?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> addresses feature and label shifts by considering both temporal and frequency features, aligning them across domains, and correcting for misalignments to facilitate the detection of private labels
>
> [Page 1](zotero://open-pdf/library/items/RCY95TVB?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> RAINCOAT (fRequencyaugmented AlIgN-then-Correct for dOmain Adaptation for Time series)
>
>> 起名鬼才
>
> [Page 2](zotero://open-pdf/library/items/RCY95TVB?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> few DA methods are specifically designed for time series.
>
> [Page 2](zotero://open-pdf/library/items/RCY95TVB?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Prevailing DA methods assume all labels in the target domain are also available in the source domain. This assumption, known as closed-set DA,
>
> [Page 3](zotero://open-pdf/library/items/RCY95TVB?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> RAINCOAT specifies a strategy to train a classifier f on Ds such that f generalizes to Dt, i.e., it minimizes classification risk on Dt:
>
> [Page 4](zotero://open-pdf/library/items/RCY95TVB?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it minimizes classification risk of a loss function LC on samples belonging to Cs,t in Dt: Exi,yi∼Dt[Cs,t] [LC (f (xi), yi)], while identifying samples in private target classes, xi ∼ Dt[  ̄ Ct], as unknown samples
>
> [Page 4](zotero://open-pdf/library/items/RCY95TVB?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> transformed to the frequency space by applying the 1-dim DFT of length T to each channel and then transforming it back using the 1-dim inverse DFT
>
> [Page 4](zotero://open-pdf/library/items/RCY95TVB?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a timefrequency encoder GTF, a classifier H, and an auxiliary decoder UTF.
>
> [Page 4](zotero://open-pdf/library/items/RCY95TVB?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Fourier transform,
>
> [Page 5](zotero://open-pdf/library/items/RCY95TVB?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> labels
>
> [Page 5](zotero://open-pdf/library/items/RCY95TVB?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> frequency features
>
> [Page 5](zotero://open-pdf/library/items/RCY95TVB?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> uncover potential invariant features across domains and improve transferability.
>
> [Page 5](zotero://open-pdf/library/items/RCY95TVB?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Fourier convolution
>
> [Page 5](zotero://open-pdf/library/items/RCY95TVB?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To prevent aligning on noisy frequency features, RAINCOAT applies a smoothing function (cosine function) before applying DFT.
>
> [Page 5](zotero://open-pdf/library/items/RCY95TVB?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Consider amplitude ai and phase pi information
>
> [Page 5](zotero://open-pdf/library/items/RCY95TVB?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the target features of common samples xt ∼ Dt[Cs,t] should change less in the latent space than those of target unknown samples xt ∼ Dt[  ̄ Ct]
>
> [Page 6](zotero://open-pdf/library/items/RCY95TVB?page=6)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> bimodal
>
>> 双峰
>
> [Page 6](zotero://open-pdf/library/items/RCY95TVB?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Cosine similarity is a reasonable choice because the cross entropy (CE) loss encourages angular separation.
>
> [Page 6](zotero://open-pdf/library/items/RCY95TVB?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> bimodal test
>
>> 简单假设是双峰真的合理吗
>
> [Page 6](zotero://open-pdf/library/items/RCY95TVB?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Sinkhorn divergence.
>
> [Page 6](zotero://open-pdf/library/items/RCY95TVB?page=6)


%% Import Date: 2026-05-12T01:59:45.000+00:00 %%

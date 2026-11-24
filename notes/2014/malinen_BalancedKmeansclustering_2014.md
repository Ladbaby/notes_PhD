---
Title: Balanced K-means for clustering
Tags:
  - SSPR/2014
  - k-means
  - balanced-clustering
  - hungarian-algorithm
  - clustering
ZoteroLink: zotero://open-pdf/library/items/P6WPLLGM
FirstAuthor: Malinen, Mikko I.
Author: Fränti, Pasi;
Editor: Brown, Gavin; Loog, Marco; Escolano, Francisco; Pelillo, Marcello;
Year: 2014
ItemType: conferencePaper
Conference: Structural, syntactic, and statistical pattern recognition
Publisher: Springer Berlin Heidelberg
Location: Berlin, Heidelberg
Page: 32–41
ISBN: 978-3-662-44415-3
Citekey: malinen_BalancedKmeansclustering_2014
rating: 2
---
> [!info]
> **TLDR**:: To enable balanced clustering of larger datasets by overcoming the high computational cost of previous constrained k-means methods, this work employs the Hungarian algorithm for assignment, reducing time complexity from O(k^3.5 n^3.5) to O(n^3).

> [!cite]
> **Bibliography**:: Malinen, M. I., & Fränti, P. (2014). Balanced K-means for clustering. _Structural, syntactic, and statistical pattern recognition_, , 32–41.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Instead of selecting the nearest centroids we have n pre-allocated slots (n/k slots per cluster), and datapoints can be assigned only to these slots, see Figure 1. This will force all clusters to be of same size assuming that  n/k  = 	n/k<br> = n/k. Otherwise there will be (n mod k) clusters of size  n/k ,and k − (n mod k) clusters of size 	n/k<br>.
>
> [Page 35](zotero://open-pdf/library/items/P6WPLLGM?page=35)


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Instead of selecting the nearest centroids we have n pre-allocated slots (n/k slots per cluster), and datapoints can be assigned only to these slots, see Figure 1. This will force all clusters to be of same size assuming that  n/k  = 	n/k<br> = n/k. Otherwise there will be (n mod k) clusters of size  n/k ,and k − (n mod k) clusters of size 	n/k<br>.
>
> [Page 35](zotero://open-pdf/library/items/P6WPLLGM?page=35)


%% Import Date: 2026-05-15T12:39:17.000+00:00 %%

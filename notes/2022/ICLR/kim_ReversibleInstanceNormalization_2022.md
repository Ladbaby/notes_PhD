---
Title: Reversible Instance Normalization for Accurate Time-Series Forecasting against Distribution Shift
Tags:
  - time-series-forecasting
  - ICLR/2022
  - normalization
  - distribution-shift
  - instance-normalization
ZoteroLink: zotero://open-pdf/library/items/3QJN59AY
FirstAuthor: Kim, Taesung
Author: Kim, Jinhee; Tae, Yunwon; Park, Cheonbok; Choi, Jang-Ho; Choo, Jaegul;
Year: "2022"
ItemType: conferencePaper
Citekey: kim_ReversibleInstanceNormalization_2022
motivation: 解决 distribution shift
Conference: International Conference on Learning Representations
rating: 3
---
> [!info]
> **TLDR**:: To address distribution shifts in time-series forecasting caused by changing statistical properties, the paper proposes Reversible Instance Normalization, a symmetric method using learnable affine transformations to remove and restore instance-specific statistics.

> [!cite]
> **Bibliography**:: Kim, T., Kim, J., Tae, Y., Park, C., Choi, J.-H., & Choo, J. (2021, October 6). _Reversible Instance Normalization for Accurate Time-Series Forecasting against Distribution Shift_. International Conference on Learning Representations. [https://openreview.net/forum?id=cGDAkQo1C0p](https://openreview.net/forum?id=cGDAkQo1C0p)

> [!info]
> **Contribution**:: 用一种可学习的且可逆的正则化的手段，解决 distribution shift 的问题

## Notes

![](Pasted%20image%2020240621110545.png)

很聪明。感觉本质上是一种可学习版本的 "instance normalization"，见公式 1 和 2。先把复杂的分布统一成一个样子，在简单的分布上学习，然后再逆转回去。

## Annotations
%% begin annotations %%


### Imported: 2024-06-21 11:00 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> reversible instance normalization (RevIN)
>
> [Page 1](zotero://open-pdf/library/items/3QJN59AY?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> remove (a-3) nonstationary information
>
> [Page 4](zotero://open-pdf/library/items/3QJN59AY?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The normalization layer transforms the (b-1) original data distribution into a (b-2) mean-centered distribution
>
> [Page 4](zotero://open-pdf/library/items/3QJN59AY?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where γ, β ∈ RK are learnable affine parameter vectors
>
> [Page 4](zotero://open-pdf/library/items/3QJN59AY?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the proposed method is a flexible, end-to-end trainable layer that can be applied to any arbitrarily chosen layers, even to several layers.
>
> [Page 5](zotero://open-pdf/library/items/3QJN59AY?page=5) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the non-stationary information is reduced
>
> [Page 4](zotero://open-pdf/library/items/3QJN59AY?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Figure 3: E
>
>> 有道理，应该画 density 会比较好
>
> [Page 5](zotero://open-pdf/library/items/3QJN59AY?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> in the original input (Fig. 3(a)), the training and test data distributions hardly overlap
>
> [Page 5](zotero://open-pdf/library/items/3QJN59AY?page=5)


%% Import Date: 2026-05-12T00:57:42.000+00:00 %%

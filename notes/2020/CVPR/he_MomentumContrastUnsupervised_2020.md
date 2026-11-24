---
Title: Momentum Contrast for Unsupervised Visual Representation Learning
Tags:
  - CVPR/2020
  - momentum-contrast
  - self-supervised-learning
  - contrastive-learning
  - visual-representation-learning
ZoteroLink: zotero://open-pdf/library/items/A28YUULE
FirstAuthor: He, Kaiming
Author: Fan, Haoqi; Wu, Yuxin; Xie, Saining; Girshick, Ross;
Year: "2020"
ItemType: conferencePaper
Conference: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition
Page: 9729-9738
Citekey: he_MomentumContrastUnsupervised_2020
rating: 2
---
> [!info]
> **TLDR**:: To enable efficient unsupervised visual representation learning with large batch sizes, MoCo builds a dynamic dictionary using a queue and a moving-averaged encoder for consistent contrastive learning.

> [!cite]
> **Bibliography**:: He, K., Fan, H., Wu, Y., Xie, S., & Girshick, R. (2020). Momentum Contrast for Unsupervised Visual Representation Learning. In _Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition_., 9729-9738

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Intuitively, this loss is the log loss of a (K+1)-way softmax-based classifier that tries to classify q as k
>
> [Page 9730](zotero://open-pdf/library/items/A28YUULE?page=9730)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Here m ∈ [0, 1) is a momentum coefficient
>
> [Page 9731](zotero://open-pdf/library/items/A28YUULE?page=9731)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a relatively large momentum (e.g., m = 0.999, our default) works much better than a smaller value (e.g., m = 0.9), suggesting that a slowly evolving key encoder is a core to making use of a queue
>
> [Page 9731](zotero://open-pdf/library/items/A28YUULE?page=9731)


%% Import Date: 2026-05-12T00:25:51.000+00:00 %%

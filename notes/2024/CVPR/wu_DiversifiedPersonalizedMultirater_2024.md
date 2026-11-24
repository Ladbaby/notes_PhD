---
Title: Diversified and Personalized Multi-rater Medical Image Segmentation
Tags:
  - CVPR/2024
  - medical-image-segmentation
  - multi-rater-segmentation
  - diversified-segmentation
  - personalized-segmentation
ZoteroLink: zotero://open-pdf/library/items/FK6TK263
FirstAuthor: Wu, Yicheng
Author: Luo, Xiangde; Xu, Zhe; Guo, Xiaoqing; Ju, Lie; Ge, Zongyuan; Liao, Wenjun; Cai, Jianfei;
Year: "2024"
ItemType: conferencePaper
Page: 11470-11479
Citekey: wu_DiversifiedPersonalizedMultirater_2024
Conference: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition
rating: 2
---

> [!info]
> **TLDR**:: To address annotation ambiguity in medical image segmentation, the paper proposes a two-stage D-Persona framework that jointly learns diversified and personalized segmentation results from multiple expert raters.

> [!cite]
> **Bibliography**:: Wu, Y., Luo, X., Xu, Z., Guo, X., Ju, L., Ge, Z., Liao, W., & Cai, J. (2024). _Diversified and Personalized Multi-rater Medical Image Segmentation_. 11470–11479. [https://openaccess.thecvf.com/content/CVPR2024/html/Wu_Diversified_and_Personalized_Multi-rater_Medical_Image_Segmentation_CVPR_2024_paper.html](https://openaccess.thecvf.com/content/CVPR2024/html/Wu_Diversified_and_Personalized_Multi-rater_Medical_Image_Segmentation_CVPR_2024_paper.html)

> [!info]
> **Contribution**:: 既考虑了病人的共性又考虑了特性

## Notes

![](Pasted%20image%2020240918104441.png)

感觉和先训练一个 base 的模型，再接着微调差不多

![](Pasted%20image%2020240918104524.png)

从这里也能看出，真的就是靠 U-Net 先训练了一个隐空间，表示 prior，然后再训练一些 attention 的分割头来进行微调

## Annotations
%% begin annotations %%


### Imported: 2024-09-18 10:42 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> gather multiple annotations from different experts, leading to the setting of multi-rater medical image segmentation
>
> [Page 1](zotero://open-pdf/library/items/FK6TK263?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> providing both diversified and specifically personalized segmentation simultaneously
>
> [Page 2](zotero://open-pdf/library/items/FK6TK263?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> bound-constrained training loss, which predicts the intersections and unions of annotations and introduces flexibility in uncertain areas.
>
> [Page 2](zotero://open-pdf/library/items/FK6TK263?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Stage II performs the personalized segmentation by individual projection heads to mimic the corresponding expert raters
>
>> 其实比较类似语言模型的微调的操作
>
> [Page 4](zotero://open-pdf/library/items/FK6TK263?page=4) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> gather multiple annotations from different experts, leading to the setting of multi-rater medical image segmentation
>
> [Page 11470](zotero://open-pdf/library/items/FK6TK263?page=11470)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> providing both diversified and specifically personalized segmentation simultaneously
>
> [Page 11471](zotero://open-pdf/library/items/FK6TK263?page=11471)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> bound-constrained training loss, which predicts the intersections and unions of annotations and introduces flexibility in uncertain areas.
>
> [Page 11471](zotero://open-pdf/library/items/FK6TK263?page=11471)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Stage II performs the personalized segmentation by individual projection heads to mimic the corresponding expert raters
>
>> 其实比较类似语言模型的微调的操作
>
> [Page 11473](zotero://open-pdf/library/items/FK6TK263?page=11473)


%% Import Date: 2026-05-12T02:19:51.000+00:00 %%

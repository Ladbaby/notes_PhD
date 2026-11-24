---
Title: "Efficient Deformable ConvNets: Rethinking Dynamic and Sparse Operator for Vision Applications"
Tags:
  - CVPR/2024
  - Deformable-Convolution
  - Dynamic-Operators
  - Spatial-Aggregation
  - Memory-Optimization
ZoteroLink: zotero://open-pdf/library/items/LHKMMRSZ
FirstAuthor: Xiong, Yuwen
Author: Li, Zhiqi; Chen, Yuntao; Wang, Feng; Zhu, Xizhou; Luo, Jiapeng; Wang, Wenhai; Lu, Tong; Li, Hongsheng; Qiao, Yu; Lu, Lewei; Zhou, Jie; Dai, Jifeng;
Year: "2024"
ItemType: conferencePaper
Conference: 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)
Publisher: IEEE
Location: Seattle, WA, USA
Page: 5652-5661
DOI: 10.1109/CVPR52733.2024.00540
ISBN: 979-8-3503-5300-6
Citekey: xiong_EfficientDeformableConvNets_2024
rating: 2
---
> [!info]
> **TLDR**:: To overcome DCNv3’s limitations in speed and expressiveness, this work introduces DCNv4, which removes softmax normalization and optimizes memory access to achieve faster convergence and significantly higher processing speeds across diverse vision tasks.

> [!cite]
> **Bibliography**:: Xiong, Y., Li, Z., Chen, Y., Wang, F., Zhu, X., Luo, J., Wang, W., Lu, T., Li, H., Qiao, Y., Lu, L., Zhou, J., & Dai, J. (2024). Efficient Deformable ConvNets: Rethinking Dynamic and Sparse Operator for Vision Applications. In _2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)_., 5652-5661 https://doi.org/10.1109/CVPR52733.2024.00540

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it processes each output location in a sliding window manner with a small window size (e.g. 3 × 3 = 9 points) which acts as a local, sparse operator like convolution, while dynamically samples point with an adaptive range and aggregates the spatial features with input-dependent attention weights
>
> [Page 5652](zotero://open-pdf/library/items/LHKMMRSZ?page=5652)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> The compute cost is less than 1%, while memory access costs 99%.
>
> [Page 5653](zotero://open-pdf/library/items/LHKMMRSZ?page=5653)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> we find that softmax in spatial aggregation, a standard operation in dense attention, is unnecessary in DCNv3
>
> [Page 5653](zotero://open-pdf/library/items/LHKMMRSZ?page=5653)


%% Import Date: 2026-05-12T02:20:09.000+00:00 %%

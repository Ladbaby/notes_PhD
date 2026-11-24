---
Title: Leveraging per Image-Token Consistency for Vision-Language Pre-training
Tags:
  - cvpr/2023
  - vision-language-model-pretraining
  - per-image-token-consistency
  - contrastive-learning
  - multimodal-representation-learning
ZoteroLink: zotero://open-pdf/library/items/K7TKD45K
FirstAuthor: Gou, Yunhao
Author: Ko, Tom; Yang, Hansi; Kwok, James; Zhang, Yu; Wang, Mingxuan;
Year: "2023"
ItemType: conferencePaper
Conference: 2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)
Publisher: IEEE
Location: Vancouver, BC, Canada
Page: 19155-19164
DOI: 10.1109/CVPR52729.2023.01836
ISBN: 979-8-3503-0129-8
Citekey: gou_LeveragingImageTokenConsistency_2023
rating: 3
---
> [!info]
> **TLDR**:: To address modality bias and under-utilization of unmasked tokens in cross-modal masked language modeling, the paper proposes EPIC, which enforces vision-language consistency by replacing salient image-related tokens with inconsistent alternatives sampled from a language model.

> [!cite]
> **Bibliography**:: Gou, Y., Ko, T., Yang, H., Kwok, J., Zhang, Y., & Wang, M. (2023). Leveraging per Image-Token Consistency for Vision-Language Pre-training. In _2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)_., 19155-19164 https://doi.org/10.1109/CVPR52729.2023.01836

> [!info]
> **Contribution**:: 

## Notes
有关 VLM 的不同模态之间对齐的工作。主要的思想类似于添加噪声（mask 掉重要的 token），输入 MLM，得到预测的被 mask 掉的 token，最后再让 VLM 去评判结果是否正确。

感觉关键在于 VLM 得拥有判别对错的能力，不然的话那就学到错误的信息了

## Annotations


%% begin annotations %%
%% end annotations %%

%% Import Date: 2026-05-11T02:36:08.000+00:00 %%

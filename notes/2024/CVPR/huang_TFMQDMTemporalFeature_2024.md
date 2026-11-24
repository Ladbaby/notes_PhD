---
Title: "TFMQ-DM: Temporal Feature Maintenance Quantization for Diffusion Models"
Tags:
  - diffusion-model
  - quantization
  - acceleration
  - temporal-features
  - post-training
  - inference-efficiency
ZoteroLink: zotero://open-pdf/library/items/2PHCBXW5
FirstAuthor: Huang, Yushi
Author: Gong, Ruihao; Liu, Jing; Chen, Tianlong; Liu, Xianglong;
Year: "2024"
ItemType: article
Page: 7362-7371
Citekey: huang_TFMQDMTemporalFeature_2024
Publisher: arXiv
DOI: 10.48550/arXiv.2311.16503
rating: 2
---
> [!info]
> **TLDR**:: To address the severe temporal feature disturbance and low compression efficiency in post-training quantization for diffusion models, the authors propose a Temporal Feature Maintenance Quantization framework that isolates time-step dependencies to preserve generation quality.

> [!cite]
> **Bibliography**:: Huang, Y., Gong, R., Liu, J., Chen, T., & Liu, X. (2024). _TFMQ-DM: Temporal Feature Maintenance Quantization for Diffusion Models_. 7362–7371. [https://openaccess.thecvf.com/content/CVPR2024/html/Huang_TFMQ-DM_Temporal_Feature_Maintenance_Quantization_for_Diffusion_Models_CVPR_2024_paper.html](https://openaccess.thecvf.com/content/CVPR2024/html/Huang_TFMQ-DM_Temporal_Feature_Maintenance_Quantization_for_Diffusion_Models_CVPR_2024_paper.html)

> [!info]
> **Contribution**:: 提高扩散模型量化后的生成质量

## Notes

本文的出发点还是很有意思的，因为发现现有的量化方法并不能够保证表示扩散步骤的 time embedding 的结果还和原本的时间步一一对应：

![](Pasted%20image%2020240625111109.png)

模型图画的有点乱，但大体上意思是把所有和数据无关的部分打包在一起，称为 temporal information block：

![](Pasted%20image%2020240625111158.png)

然后将损失定义成 temporal information block 的损失

## Annotations
%% begin annotations %%


%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Post-training Quantization (PTQ)
>
> [Page 1](zotero://open-pdf/library/items/2PHCBXW5?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Usually, t from the finite set {1, . . . , T } is encoded to a temporal feature by a few modules totally irrespective of the sampling data
>
> [Page 1](zotero://open-pdf/library/items/2PHCBXW5?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Temporal Feature Maintenance Quantization (TFMQ) framework
>
> [Page 1](zotero://open-pdf/library/items/2PHCBXW5?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> do not separately optimize this block during the quantization process
>
> [Page 2](zotero://open-pdf/library/items/2PHCBXW5?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> temporal feature disturbance
>
> [Page 2](zotero://open-pdf/library/items/2PHCBXW5?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> temporal information aware reconstruction (TIAR) for weight quantization
>
> [Page 2](zotero://open-pdf/library/items/2PHCBXW5?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> finite set calibration (FSC) for activation quantization
>
> [Page 2](zotero://open-pdf/library/items/2PHCBXW5?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the quantized model’s \ embt,i is no longer accurately associated with t
>
> [Page 4](zotero://open-pdf/library/items/2PHCBXW5?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the set of all possible activation values for embedding layers and time embed is finite and strictly dependent on timesteps.
>
> [Page 5](zotero://open-pdf/library/items/2PHCBXW5?page=5)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> consolidate
>
>> 合并
>
> [Page 5](zotero://open-pdf/library/items/2PHCBXW5?page=5)


%% Import Date: 2026-05-12T02:18:26.000+00:00 %%

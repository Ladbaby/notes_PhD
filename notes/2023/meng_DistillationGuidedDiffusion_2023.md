---
Title: On Distillation of Guided Diffusion Models
Tags:
  - diffusion-model
  - distillation
  - classifier-guidance
  - dataset/Imagenet
  - dataset/CIFAR10
ZoteroLink: zotero://open-pdf/library/items/YK455ADF
FirstAuthor: Meng, Chenlin
Authors: Rombach, Robin; Gao, Ruiqi; Kingma, Diederik P.; Ermon, Stefano; Ho, Jonathan; Salimans, Tim;
Year: "2023"
ItemType: article
DOI: 10.48550/arXiv.2210.03142
Citekey: meng_DistillationGuidedDiffusion_2023
motivation: 用蒸馏加速classifier-free guidance生成
Author: Rombach, Robin; Gao, Ruiqi; Kingma, Diederik P.; Ermon, Stefano; Ho, Jonathan; Salimans, Tim;
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the high computational cost of classifier-free guided diffusion models at inference, this paper distills pre-trained models into faster variants that generate comparable image quality using significantly fewer sampling steps.

> [!cite]
> **Bibliography**:: Meng, C., Rombach, R., Gao, R., Kingma, D. P., Ermon, S., Ho, J., & Salimans, T. (2023). _On Distillation of Guided Diffusion Models_ (arXiv:2210.03142). arXiv. [https://doi.org/10.48550/arXiv.2210.03142](https://doi.org/10.48550/arXiv.2210.03142)

> [!info]
> **Contribution**:: Stable Diffusion V2 对应的文章

## Notes
>
>Comment: CVPR 2023, Award candidate.

每轮学习都将 sample steps 缩减一半，然后学习出来的 student 来当下一轮的 teacher

## N-step deterministic and stochastic sampling

虽然这不是这篇文章最重点的东西，但有点意思

一般来说我们都会只用 deterministic sampling，但为什么要 stochastic sampling 呢？

> The *deterministic sampling* is used to generate high-quality samples, while the *stochastic sampling* is used to ==explore the space of possible samples==. The combination of both sampling methods allows for better control over the generated samples and improves the overall quality of the generated images.

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 9:50 am


> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> To incorporate the guidance weight w, we introduce a w-conditioned model, where w is fed as an input to the student model.
>
> [Page 3](zotero://open-pdf/library/items/YK455ADF?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> we train the student model to match the output of two-step DDIM sampling of the teacher (i.e., from t/N to t − 0.5/N and from t − 0.5/N to t − 1/N ) in one step,
>
> [Page 4](zotero://open-pdf/library/items/YK455ADF?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> We apply one deterministic sampling step with two-times the original step-length (i.e.,
>
> [Page 4](zotero://open-pdf/library/items/YK455ADF?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> the same as a N/2-step deterministic sampler) and then perform one stochastic step backward
>
> [Page 4](zotero://open-pdf/library/items/YK455ADF?page=4) 



%% end annotations %%

%% Import Date: 2023-11-28T09:50:53.794+08:00 %%

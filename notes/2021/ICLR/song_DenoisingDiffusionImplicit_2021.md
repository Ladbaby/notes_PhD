---
Title: Denoising Diffusion Implicit Models
Tags:
  - ICLR/2021
  - highly-cited
  - sampling-acceleration
  - diffusion-model
  - generative-models
ZoteroLink: zotero://open-pdf/library/items/PI6CXVQB
FirstAuthor: Song, Jiaming
Author: Meng, Chenlin; Ermon, Stefano;
Year: 2021
Citekey: song_DenoisingDiffusionImplicit_2021
motivation: 提出能加速生成的DDIM
ItemType: conferencePaper
Conference: International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address the slow sampling speed of denoising diffusion probabilistic models, this paper introduces denoising diffusion implicit models that utilize non-Markovian processes to achieve significantly faster generation while maintaining the same training objective.

> [!Cite]
> Song, J., Meng, C., & Ermon, S. (2021). Denoising Diffusion Implicit Models. International Conference on Learning Representations


>[!Synth]
>**Contribution**:: DDIM原文
>
>**Related**:: 
>

![](Pasted%20image%2020231127205903.png)
## Notes
>
>Comment: ICLR 2021; updated connections with ODEs at page 6, fixed some typos in the proof.

DDIM 也是个经常被 cue 的模型，主要贡献在于加速了 DDPM 的整个过程

  

diffusion 过程为 non-Markovian，可以对应 deterministic 的反向过程，从而加速

  

!!! note

    虽然看起来整个过程还是一步一步的，但是因为当前状态==不止依赖于前一个状态==，所以整个过程就不是 deterministic 的。更高的自由度，更快采样？

  

和 DDPM 的区别可以参考[这里](https://betterprogramming.pub/diffusion-models-ddpms-ddims-and-classifier-free-guidance-e07b297b2869#092e)


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 3:59 pm


> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> We generalize DDPMs via a class of non-Markovian diffusion processes that lead to the same training objective. These non-Markovian processes can correspond to generative processes that are deterministic, giving rise to implicit models that produce high quality samples much faster
>
> [Page 1](zotero://open-pdf/library/items/4C56RVSL?page=1) 



%% end annotations %%

%% Import Date: 2023-11-28T15:59:34.782+08:00 %%

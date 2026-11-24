---
Title: "LCM-LoRA: A Universal Stable-Diffusion Acceleration Module"
Tags:
  - arXiv/2023
  - latent-consistency-models
  - LoRA
  - Stable-Diffusion
  - text-to-image
ZoteroLink: zotero://open-pdf/library/items/LHZGM62J
FirstAuthor: Luo, Simian
Author: Tan, Yiqin; Patil, Suraj; Gu, Daniel; Platen, Patrick; Passos, Apolinário; Huang, Longbo; Li, Jian; Zhao, Hang;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2311.05556
Citekey: luo_LCMLoRAUniversalStableDiffusion_2023
rating: 2
---
> [!info]
> **TLDR**:: To enable efficient text-to-image generation with reduced memory usage, this work introduces LCM-LoRA, a universal plug-in acceleration module derived via LoRA distillation that integrates directly into various Stable Diffusion models without additional training.

> [!cite]
> **Bibliography**:: Luo, S., Tan, Y., Patil, S., Gu, D., Platen, P., Passos, A., Huang, L., Li, J., & Zhao, H. (2023). LCM-LoRA: A Universal Stable-Diffusion Acceleration Module. https://doi.org/10.48550/arXiv.2311.05556

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Technical Report
<div data-schema-version="8"><p><a href="https://huggingface.co/blog/lcm_lora" rel="noopener noreferrer nofollow">SDXL in 4 steps with Latent Consistency LoRAs (huggingface.co)</a></p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> LoRA distillation
>
> [Page 1](zotero://open-pdf/library/items/LHZGM62J?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we identify the LoRA parameters obtained through LCM distillation as a universal Stable-Diffusion acceleration module, named LCM-LoRA
>
> [Page 1](zotero://open-pdf/library/items/LHZGM62J?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> LCM-LoRA can be viewed as a plug-in neural PF-ODE solver that possesses strong generalization abilities
>
> [Page 1](zotero://open-pdf/library/items/LHZGM62J?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> one-stage guided distillation method
>
> [Page 3](zotero://open-pdf/library/items/LHZGM62J?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> leveraging a pre-trained auto-encoder’s latent space to distill a guided diffusion model into an LCM
>
> [Page 3](zotero://open-pdf/library/items/LHZGM62J?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> fine-tuning process
>
> [Page 3](zotero://open-pdf/library/items/LHZGM62J?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> W0 is kept constant, and gradient updates are applied only to A and B.
>
> [Page 3](zotero://open-pdf/library/items/LHZGM62J?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By decomposing the full parameter matrix into the product of two low-rank matrices, LoRA significantly reduces the number of trainable parameters, thereby lowering memory usage.
>
> [Page 3](zotero://open-pdf/library/items/LHZGM62J?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> is the linear combination of acceleration vector τLCM and style vector τ ′
>
> [Page 5](zotero://open-pdf/library/items/LHZGM62J?page=5)


%% Import Date: 2026-05-12T02:05:03.000+00:00 %%

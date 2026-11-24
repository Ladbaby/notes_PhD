---
Title: "Latent Consistency Models: Synthesizing High-Resolution Images with Few-Step Inference"
Tags:
  - diffusion-model
  - image-generation
  - latent-consistency-models
  - fast-inference
  - probability-flow-ode
ZoteroLink: zotero://open-pdf/library/items/EAZCG5V9
FirstAuthor: Luo, Simian
Author: Tan, Yiqin; Huang, Longbo; Li, Jian; Zhao, Hang;
Year: "2023"
ItemType: article
DOI: 10.48550/arXiv.2310.04378
Citekey: luo_LatentConsistencyModels_2023
motivation: 加速生成
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the slow inference of latent diffusion models, this paper proposes Latent Consistency Models that directly predict probability flow ODE solutions for rapid, high-fidelity generation.

> [!cite]
> **Bibliography**:: Luo, S., Tan, Y., Huang, L., Li, J., & Zhao, H. (2023). _Latent Consistency Models: Synthesizing High-Resolution Images with Few-Step Inference_ (arXiv:2310.04378). arXiv. [https://doi.org/10.48550/arXiv.2310.04378](https://doi.org/10.48550/arXiv.2310.04378)

> [!info]
> **Contribution**:: CM引入到隐空间

## Notes

huggingface干的事情，让stable diffusion更快

## Annotations
%% begin annotations %%


### Imported: 2023-11-27 4:19 pm



<mark style="background-color: #ffd400">Quote</mark>
> Viewing the guided reverse diffusion process as solving an augmented probability flow ODE (PF-ODE),

<mark style="background-color: #ffd400">Quote</mark>
> Latent Consistency Fine-tuning (LCF)

<mark style="background-color: #ffd400">Quote</mark>
> employ consistency models in the image latent space

<mark style="background-color: #ffd400">Quote</mark>
> learn the function that maps any points on a trajectory of the PF-ODE to that trajectory’s origin

<mark style="background-color: #ffd400">Quote</mark>
> f : (xt, t) 7−→ xε,

<mark style="background-color: #ffd400">Quote</mark>
> f (xt, t) = f (xt′ , t′), ∀t, t′ ∈ [ε, T ].

<mark style="background-color: #ffd400">Quote</mark>
> fθ(x, t) = cskip(t)x + cout(t)Fθ(x, t),

<mark style="background-color: #ffd400">Quote</mark>
> Fθ(x, t) is a deep neural network

<mark style="background-color: #ffd400">Quote</mark>
> Consistency Distillation

<mark style="background-color: #ffd400">Quote</mark>
> L(θ, θ−; Φ) = Ex,t h d   fθ(xtn+1 , tn+1), fθ− ( ˆ xφ tn , tn)  i ,

<mark style="background-color: #ffd400">Quote</mark>
> ˆ xφ tn is a one-step estimation of xtn from xtn+1 as


%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Viewing the guided reverse diffusion process as solving an augmented probability flow ODE (PF-ODE),
>
> [Page 1](zotero://open-pdf/library/items/EAZCG5V9?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Latent Consistency Fine-tuning (LCF)
>
> [Page 1](zotero://open-pdf/library/items/EAZCG5V9?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> employ consistency models in the image latent space
>
> [Page 2](zotero://open-pdf/library/items/EAZCG5V9?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> learn the function that maps any points on a trajectory of the PF-ODE to that trajectory’s origin
>
> [Page 4](zotero://open-pdf/library/items/EAZCG5V9?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> f (xt, t) = f (xt′ , t′), ∀t, t′ ∈ [ε, T ].
>
> [Page 4](zotero://open-pdf/library/items/EAZCG5V9?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> fθ(x, t) = cskip(t)x + cout(t)Fθ(x, t),
>
> [Page 4](zotero://open-pdf/library/items/EAZCG5V9?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Fθ(x, t) is a deep neural network
>
> [Page 4](zotero://open-pdf/library/items/EAZCG5V9?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Consistency Distillation
>
> [Page 4](zotero://open-pdf/library/items/EAZCG5V9?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ˆ xφ tn is a one-step estimation of xtn from xtn+1 as
>
> [Page 4](zotero://open-pdf/library/items/EAZCG5V9?page=4)


%% Import Date: 2026-05-12T02:05:18.000+00:00 %%

---
Title: Generative Modeling of Regular and Irregular Time Series Data via Koopman VAEs
Tags:
  - ICLR/2024
  - Koopman-VAE
  - time-series-generation
  - variational-autoencoder
  - irregular-time-series
ZoteroLink: zotero://open-pdf/library/items/VCTBE7HF
Year: 2024
ItemType: conferencePaper
Conference: The Twelfth International Conference on Learning Representations
Citekey: naiman_GenerativeModelingRegular_2024
rating: 2
FirstAuthor: Naiman, Ilan
Author: Erichson, N. Benjamin; Ren, Pu; Mahoney, Michael W.; Azencot, Omri;
---
> [!info]
> **TLDR**:: To address GAN instability and underutilized VAE potential in time series generation, the authors introduce Koopman VAE, which models latent prior dynamics via linear maps to incorporate domain knowledge and enhance system stability analysis.

> [!cite]
> **Bibliography**:: Naiman, I., Erichson, N. B., Ren, P., Mahoney, M. W., & Azencot, O. (2024). Generative Modeling of Regular and Irregular Time Series Data via Koopman VAEs. _The Twelfth International Conference on Learning Representations_, .

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Koopman theory
>
> [Page 1](zotero://open-pdf/library/items/JF3RMGVU?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> incorporating domain knowledge can be achieved by leveraging spectral tools that prescribe constraints on the eigenvalues of the linear map
>
> [Page 1](zotero://open-pdf/library/items/JF3RMGVU?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> studying the qualitative behavior and stability of the system can be performed using tools from dynamical systems theory.
>
> [Page 1](zotero://open-pdf/library/items/JF3RMGVU?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> KVAE uses a model prior that assumes that the sequential latent information is governed by a linear dynamical system
>
> [Page 2](zotero://open-pdf/library/items/JF3RMGVU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Namely, the conditional prior distribution of the next latent variable, given the current variable, can be represented using a linear map
>
> [Page 2](zotero://open-pdf/library/items/JF3RMGVU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we train an approximate posterior distribution that learns a nonlinear coordinate transformation of the inputs to a linear latent representation.
>
> [Page 2](zotero://open-pdf/library/items/JF3RMGVU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Kφf (xt) = f ◦ φ(xt) ,
>
> [Page 3](zotero://open-pdf/library/items/JF3RMGVU?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where f ◦ φ denotes composition of transformations. It can be shown that Kφ is linear, while φ may be nonlinear
>
> [Page 3](zotero://open-pdf/library/items/JF3RMGVU?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> batch normalization (BN)
>
> [Page 4](zotero://open-pdf/library/items/JF3RMGVU?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Then, we solve the linear system for the best A such that A  ̄ Z0 =  ̄ Z, similar to dynamic mode decomposition (DMD)
>
> [Page 5](zotero://open-pdf/library/items/JF3RMGVU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we introduce an additional predictive loss term that promotes linearity in the prior latent variables by matching between  ̄ z1:T and z1:T , namely
>
> [Page 5](zotero://open-pdf/library/items/JF3RMGVU?page=5)


%% Import Date: 2026-05-12T01:32:34.000+00:00 %%

---
Title: Autoregressive Diffusion Models
Tags:
  - arXiv/2022
  - autoregressive-diffusion
  - diffusion-model
  - autoregressive-models
  - discrete-diffusion
ZoteroLink: zotero://open-pdf/library/items/D2HMK7DK
FirstAuthor: Hoogeboom, Emiel
Author: Gritsenko, Alexey A.; Bastings, Jasmijn; Poole, Ben; Berg, Rianne; Salimans, Tim;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2110.02037
Citekey: hoogeboom_AutoregressiveDiffusionModels_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the limitations of standard autoregressive models and discrete diffusion, this paper introduces Autoregressive Diffusion Models that enable efficient training without causal masking, support parallel generation, and achieve superior lossless compression performance.

> [!cite]
> **Bibliography**:: Hoogeboom, E., Gritsenko, A. A., Bastings, J., Poole, B., Berg, R., & Salimans, T. (2022). Autoregressive Diffusion Models. https://doi.org/10.48550/arXiv.2110.02037

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Published as a conference paper at International Conference on Learning Representations (ICLR) 2022
<div data-schema-version="8"><p>ICLR 2022</p>
</div>
<div data-schema-version="8"><p>简介参考 <a href="https://medium.com/syncedreview/google-proposes-ardms-efficient-autoregressive-models-that-learn-to-generate-in-any-order-8acbf819b817" rel="noopener noreferrer nofollow">Google Proposes ARDMs: Efficient Autoregressive Models That Learn to Generate in any Order | by Synced | SyncedReview | Medium</a></p>
<p></p>
<p>感觉最大的作用是，可以 parallel inference</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> learns to generate in any order.
>
> [Page 2](zotero://open-pdf/library/items/D2HMK7DK?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> include the ability to upscale variables.
>
> [Page 2](zotero://open-pdf/library/items/D2HMK7DK?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> absorbing diffusion
>
> [Page 2](zotero://open-pdf/library/items/D2HMK7DK?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ARDMs generate variables in an arbitrary order, one by one. Further, ARDMs are able to upscale variables
>
> [Page 2](zotero://open-pdf/library/items/D2HMK7DK?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ARDMs are trained on a single step in the objective,
>
> [Page 3](zotero://open-pdf/library/items/D2HMK7DK?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> both sampling and inference of ARDMs can be parallelized using dynamic programming with minimal degradation in log-likelihood.
>
> [Page 3](zotero://open-pdf/library/items/D2HMK7DK?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the distribution over multiple variables is predicted at the same time.
>
> [Page 4](zotero://open-pdf/library/items/D2HMK7DK?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This knowledge is sufficient to construct a dynamic programming algorithm as described by Watson et al. (2021) to compute how many parallel steps to take at which moment, given a budget
>
> [Page 4](zotero://open-pdf/library/items/D2HMK7DK?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Using this transition cost matrix, the dynamic programming algorithm can be utilized to find which steps should be parallelized
>
> [Page 4](zotero://open-pdf/library/items/D2HMK7DK?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Instead, we can structure the process into stages, where for each stage a refinement of the variable is generated. We refer to this process as upscaling.
>
> [Page 5](zotero://open-pdf/library/items/D2HMK7DK?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Although sampling from a model may take up to D · S steps, the training complexity has not changed by modelling multiple stages
>
> [Page 5](zotero://open-pdf/library/items/D2HMK7DK?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> direct parametrization
>
> [Page 6](zotero://open-pdf/library/items/D2HMK7DK?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> data parametrization
>
> [Page 6](zotero://open-pdf/library/items/D2HMK7DK?page=6)


%% Import Date: 2026-05-12T01:18:37.000+00:00 %%

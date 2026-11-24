---
Title: Modeling Temporal Data as Continuous Functions with Stochastic Process Diffusion
Tags:
  - arXiv/2023
  - diffusion-model
  - time-series
  - stochastic-processes
  - irregular-time-series
ZoteroLink: zotero://open-pdf/library/items/DHCWHD73
FirstAuthor: Biloš, Marin
Author: Rasul, Kashif; Schneider, Anderson; Nevmyvaka, Yuriy; Günnemann, Stephan;
Year: "2023"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2211.02590
Citekey: bilos_ModelingTemporalData_2023
rating: 2
---
> [!info]
> **TLDR**:: To address the challenge of modeling stochastic processes in temporal data, particularly with irregularly-sampled observations, this paper defines denoising diffusion models in function space to enable continuous generative modeling and probabilistic forecasting.

> [!cite]
> **Bibliography**:: Biloš, M., Rasul, K., Schneider, A., Nevmyvaka, Y., & Günnemann, S. (2023). Modeling Temporal Data as Continuous Functions with Stochastic Process Diffusion. https://doi.org/10.48550/arXiv.2211.02590

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: International Conference on Machine Learning (ICML), 2023.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> discretized measurements of the underlying function
>
> [Page 1](zotero://open-pdf/library/items/DHCWHD73?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> in the function space
>
> [Page 1](zotero://open-pdf/library/items/DHCWHD73?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> naturally handle irregularly-sampled observations
>
> [Page 1](zotero://open-pdf/library/items/DHCWHD73?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> That is, instead of adding noise to each data point independently, we add the noise to the whole function while preserving its continuity.
>
> [Page 1](zotero://open-pdf/library/items/DHCWHD73?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> whole time series at once.
>
> [Page 2](zotero://open-pdf/library/items/DHCWHD73?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This area of research is orthogonal to our proposed method as we can easily implement any of the techniques that improve general diffusion, to make our method perform faster or have better sampling quality
>
>> 好家伙，你这直接和现有的研究都做切割是吧
>
> [Page 3](zotero://open-pdf/library/items/DHCWHD73?page=3)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> encompass
>
>> 包含
>
> [Page 3](zotero://open-pdf/library/items/DHCWHD73?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we add a noise function (stochastic process)  (·) to the underlying data function x(·).
>
> [Page 3](zotero://open-pdf/library/items/DHCWHD73?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> closed-form formulations of various terms, especially the loss. This is due to the nice properties that Gaussian random variables have
>
>> 证实了不能随便替换高斯噪声的原因
>
> [Page 3](zotero://open-pdf/library/items/DHCWHD73?page=3)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> degenerate
>
>> 退化
>
> [Page 3](zotero://open-pdf/library/items/DHCWHD73?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> stationary stochastic processes
>
> [Page 3](zotero://open-pdf/library/items/DHCWHD73?page=3)

> [!quote|#5fb236] <mark style="background-color: #5fb236">Highlight</mark>
> each element of the covariance matrix is specified with a kernel Σij = k(ti, tj)
>
>> ？没懂这里的 covariance matrix 和 kernel 和扩散模型之间到底是什么关系
>
> [Page 3](zotero://open-pdf/library/items/DHCWHD73?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To define a stationary process, we have to use a stationary kernel;
>
> [Page 3](zotero://open-pdf/library/items/DHCWHD73?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> correlated noise
>
> [Page 4](zotero://open-pdf/library/items/DHCWHD73?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In particular, given the times of the observations, we can compute the covariance Σ and sample noise  (·)
>
> [Page 4](zotero://open-pdf/library/items/DHCWHD73?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> from a GP or OU process
>
> [Page 4](zotero://open-pdf/library/items/DHCWHD73?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we can simplify the loss to only compute the squared difference between the predicted and true noise, similar to Equation 4
>
> [Page 4](zotero://open-pdf/library/items/DHCWHD73?page=4)


%% Import Date: 2026-05-11T19:39:54.000+00:00 %%

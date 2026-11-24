---
Title: "GenPhys: From Physical Processes to Generative Models"
Tags:
  - diffusion-model
  - poisson-flow
  - partial-differential-equations
  - generative-models
  - physics-informed-generative-models
ZoteroLink: zotero://open-pdf/library/items/TY54WVNQ
FirstAuthor: Liu, Ziming
Author: Luo, Di; Xu, Yilun; Jaakkola, Tommi; Tegmark, Max;
Year: "2023"
ItemType: article
DOI: 10.48550/arXiv.2304.02637
Citekey: liu_GenPhysPhysicalProcesses_2023
motivation: 探索物理过程是否能推导出生成模型
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To expand the design space of generative models beyond diffusion and Poisson flow methods, this work introduces GenPhys, a framework that translates partial differential equations describing physical processes into new generative model families.

> [!cite]
> **Bibliography**:: Liu, Z., Luo, D., Xu, Y., Jaakkola, T., & Tegmark, M. (2023). _GenPhys: From Physical Processes to Generative Models_ (arXiv:2304.02637). arXiv. [https://doi.org/10.48550/arXiv.2304.02637](https://doi.org/10.48550/arXiv.2304.02637)

> [!info]
> **Contribution**:: 试图从物理过程推导出模型

![](Pasted%20image%2020231205165421.png)

## Notes

和上一篇[xu_PoissonFlowGenerative_2022](xu_PoissonFlowGenerative_2022.md)同一个作者，试图用一个统一的模型，来同时解释扩散模型和泊松流模型，还挺有意思

文章大概的观点是，具备一定条件的物理过程，其实是可以对应到一个生成模型的

---

想要实现这个转换的过程，需要几个步骤：

Physical process -> Physical PDE -> Density flow -> Generative model

> PDE: Partial Differential Equation

而想要实现上述的过程，则 PDE $p$ 需要满足：

- $p$ is equivalent to a density flow
- The solution of $p$ becomes “smoother” over time (such that the initial details are “hidden” or “blurred”)

    感觉就像扩散到最后变成了噪声一样

然后文章就证明了一下，扩散和泊松流的 PDE 都可以转换成 density flow

---

至于啥是 density flow：

> The density flow represents the distribution of density over time and space in the generative model. It is a mathematical representation of how the density of the generated samples evolves and spreads




## Annotations
%% begin annotations %%


### Imported: 2023-12-05 4:51 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Since continuous physical processes are described by PDEs
>
> [Page 2](zotero://open-pdf/library/items/TY54WVNQ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> convert physical PDEs to generative models
>
> [Page 2](zotero://open-pdf/library/items/TY54WVNQ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (C1) p is equivalent to a density flow; (C2) The solution of p becomes “smoother” over time.
>
> [Page 2](zotero://open-pdf/library/items/TY54WVNQ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> “smoothing” means high-frequency modes decay faster than low-frequency modes
>
> [Page 2](zotero://open-pdf/library/items/TY54WVNQ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (1) p is s-generative. Examples: p = diffusion, Poisson, Yukawa (screened Poisson), biharmonic, fractal diffusion, higher-order diffusion. (2) p is conditionally s-generative. Examples: p = dissipative wave, Helmholtz. (3) p is not s-generative. Examples: p = ideal wave, Schr ̈ odinger, Dirac.
>
> [Page 2](zotero://open-pdf/library/items/TY54WVNQ?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> probability flow equation
>
> [Page 3](zotero://open-pdf/library/items/TY54WVNQ?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In this case, p(x, t) is a density distribution instead of probability distribution, so we call Eq. (3) the density flow equation.
>
> [Page 3](zotero://open-pdf/library/items/TY54WVNQ?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Bayesian inference
>
> [Page 3](zotero://open-pdf/library/items/TY54WVNQ?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For linear PDEs, the solution φ(x, t) can be expressed as a convolution of the Green’s function G(x, t; x′, t′) with the source term f (x, t)
>
> [Page 4](zotero://open-pdf/library/items/TY54WVNQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Intuitively, this requires that p(x, t) becomes “smoother” as t increases such that the initial details are “hidden” or “blurred”
>
> [Page 4](zotero://open-pdf/library/items/TY54WVNQ?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A PDE is smooth = A dispersion criterion
>
> [Page 8](zotero://open-pdf/library/items/TY54WVNQ?page=8) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> (1) s-generative equations have pure imaginary ω for all k, (2) conditionally s-generative equations have pure imaginary ω for some k range, and (3) not s-generative equations have k range with pure imaginary ω.
>
> [Page 8](zotero://open-pdf/library/items/TY54WVNQ?page=8) 



%% end annotations %%

%% Import Date: 2023-12-05T16:51:55.296+08:00 %%

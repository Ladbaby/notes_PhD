---
Title: "LORD: Lower-Dimensional Embedding of Log-Signature in Neural Rough Differential Equations"
Tags:
  - ICLR/2022
  - XDE
  - neural-rough-differential-equations
  - log-signature
  - time-series
ZoteroLink: zotero://open-pdf/library/items/4MLNGQHI
FirstAuthor: Lee, Jaehoon
Author: Jeon, Jinsung; Jhin, Sheo; Hyeong, Jihyeon; Kim, Jayoung; Jo, Minju; Seungji, Kook; Park, Noseong;
Year: "2021"
ItemType: conferencePaper
Citekey: lee_LORDLowerDimensionalEmbedding_2021
motivation: 改进RDE，减小spatial overheads
Conference: International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To address the spatial overhead of log-signature transforms in processing long time-series, this paper proposes LORD, an NRDE-based autoencoder that embeds higher-depth signature knowledge into lower-depth representations to stabilize training and boost accuracy.

> [!cite]
> **Bibliography**:: Lee, J., Jeon, J., Jhin, S. yon, Hyeong, J., Kim, J., Jo, M., Seungji, K., & Park, N. (2021, October 6). _LORD: Lower-Dimensional Embedding of Log-Signature in Neural Rough Differential Equations_. International Conference on Learning Representations. [https://openreview.net/forum?id=fCG75wd39ze](https://openreview.net/forum?id=fCG75wd39ze)

> [!info]
> **Contribution**:: 改进 RDE

![](Pasted%20image%2020231128211710.png)
## Notes

CDE 是 ODE 的泛化，rough differential equations (RDE) 是 CDE 的泛化。但是 RDE 有个比较要紧的问题，就是在 dimension 比较高的时候有很大的 overhead。这就是本文主要关注的问题

RDE 自身的特性就是可以将长时序变成相对短的时序，所以并非本文的贡献

文章自始至终都在围绕着一句话在展开：

> implant the higher-depth log-signature knowledge into the lower-depth log-signature

这话其实还是很抽象的

大概是通过一个两个阶段的训练达到的：

- encoder 训练阶段

    文章认为 encoder 可以将 lower-depth 的 log-signature 进行编码后，再由 decoder 还原成 higher-depth 的 log-signature

    而这一种重构的过程可以被视作 higher-depth log-signature 间接被 embed 进了 encoder 的输出（vector）里

- 主 RDE 训练阶段

    上一阶段后 encoder 已经训练好而且被冻结了，所以这时候 decoder 直接就被扔掉了

实验结果来看和 CDE 比也只是各有优劣，所以不是那么有说服力

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 9:15 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> very long time-series data
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> neural rough differential equations (NRDEs
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> known to be more efficient than the Fourier transform for irregular long time-series
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> rough path theory
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> log-signature
>
> [Page 1](zotero://open-pdf/library/items/4MLNGQHI?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> log-signature is a unique feature of the path
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In other words, the path has the same value as the observation (xi, ti), when ti is one of the observation timepoints and otherwise, interpolated values.
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The log-signature calculation has one important hyperparameter D called depth — the higher the depth is, the more accurately represented each sub-path is (cf. Eq. 4)
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Since the dimensionality of the input data is, given a dataset, fixed, we need to decrease D to reduce overheads
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> embed the higher-depth signatures onto a lower-dimensional space to i) decrease the complexity of the main NRDE (the solid blue box in Fig. 1), and ii) increase the easiness of training (cf. Fig. 2) and as a result, its model accuracy as well.
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> autoencoder architecture
>
> [Page 2](zotero://open-pdf/library/items/4MLNGQHI?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the higher-depth log-signature is indirectly embedded into the vector.
>
> [Page 3](zotero://open-pdf/library/items/4MLNGQHI?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the decoder reconstructs the higher-depth log-signature
>
> [Page 3](zotero://open-pdf/library/items/4MLNGQHI?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it is an encoding of the lower-depth log-signature and ii) the decoder should recover the higher-depth log-signature from it
>
> [Page 3](zotero://open-pdf/library/items/4MLNGQHI?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> NCDEs has an inherent disadvantage that they are weak at processing very long timeseries samples, because NCDEs directly process the very long time-series samples
>
> [Page 3](zotero://open-pdf/library/items/4MLNGQHI?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> By creating a log-signature for every P -length sub-path, the entire sequence length can be reduced
>
> [Page 4](zotero://open-pdf/library/items/4MLNGQHI?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> larger memory footprints
>
> [Page 8](zotero://open-pdf/library/items/4MLNGQHI?page=8) 



%% end annotations %%

%% Import Date: 2023-11-28T21:15:14.387+08:00 %%

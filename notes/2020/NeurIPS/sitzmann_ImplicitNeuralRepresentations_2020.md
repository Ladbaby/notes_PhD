---
Title: Implicit Neural Representations with Periodic Activation Functions
Tags:
  - NeurIPS/2020
  - implicit-neural-representations
  - periodic-activation-functions
  - position-encoding
  - signal-reconstruction
ZoteroLink: zotero://open-pdf/library/items/AML7N9YP
FirstAuthor: Sitzmann, Vincent
Author: Martel, Julien; Bergman, Alexander; Lindell, David; Wetzstein, Gordon;
Year: "2020"
ItemType: conferencePaper
Volume: "33"
Publisher: Curran Associates, Inc.
Page: 7462–7473
Citekey: sitzmann_ImplicitNeuralRepresentations_2020
motivation: 使得implicit signal representation能够更精确地建模
Conference: Advances in Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To address the inability of current implicit neural representations to model fine details and spatial-temporal derivatives, this paper introduces SIRENs using periodic activation functions to accurately represent complex signals and solve challenging boundary value problems.

> [!cite]
> **Bibliography**:: Sitzmann, V., Martel, J., Bergman, A., Lindell, D., & Wetzstein, G. (2020). Implicit Neural Representations with Periodic Activation Functions. _Advances in Neural Information Processing Systems_, _33_, 7462–7473. 

> [!info]
> **Contribution**:: INR

## Notes
>
>Comment: Project website: https://vsitzmann.github.io/siren/ Project video: https://youtu.be/Q2fLWGBeaiI.

这篇是[woo_LearningDeepTimeindex_2023 1](woo_LearningDeepTimeindex_2023%201.md)那篇的基础，就是负责模型当中的 MLP 那一块的

要说这 MLP 有什么特别，主要在于使用了 "periodic activation function"，一种奇特的激活函数，适用于拥有**周期性**特性的输入
## Annotations
%% begin annotations %%


### Imported: 2023-12-07 9:22 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> periodic activation functions
>
> [Page 1](zotero://open-pdf/library/items/8DPYSZZR?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> implicit neural representations
>
> [Page 1](zotero://open-pdf/library/items/8DPYSZZR?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SIREN
>
> [Page 1](zotero://open-pdf/library/items/8DPYSZZR?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> better than ReLU-MLPs, or positional encoding strategies
>
> [Page 2](zotero://open-pdf/library/items/8DPYSZZR?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Neural ODEs [43] are related to this topic, but are very different in nature
>
> [Page 3](zotero://open-pdf/library/items/8DPYSZZR?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> xi 7→ φi (xi) = sin (Wixi + bi) .
>
> [Page 4](zotero://open-pdf/library/items/8DPYSZZR?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> φi : RMi 7→ RNi is the ith layer of the network
>
> [Page 4](zotero://open-pdf/library/items/8DPYSZZR?page=4) 

> [!quote|#aaaaaa] <mark style="background-color: #aaaaaa">Highlight</mark>
> affine transform
>
>> 纺射变换
>
> [Page 4](zotero://open-pdf/library/items/8DPYSZZR?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> when a SIREN is supervised using a constraint Cm involving the derivatives of φ, the function φ remains well behaved
>
> [Page 4](zotero://open-pdf/library/items/8DPYSZZR?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SIREN allows for the composite (right) to be reconstructed using supervision on the gradients (bottom right)
>
> [Page 5](zotero://open-pdf/library/items/8DPYSZZR?page=5) 



%% end annotations %%

%% Import Date: 2023-12-07T09:23:04.554+08:00 %%

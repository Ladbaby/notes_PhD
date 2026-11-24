---
Title: Block-Oriented Time-Delay Neural Network Behavioral Model for Digital Predistortion of RF Power Amplifiers
Tags:
  - - TMTT/2022
  - digital-predistortion
  - RF-power-amplifier
  - time-delay-neural-network
  - dynamic-nonlinear-modeling
ZoteroLink: zotero://open-pdf/library/items/724ASHGG
FirstAuthor: Jiang, Chengye
Author: Li, Hongmin; Qiao, Wen; Yang, Guichen; Liu, Qiao; Wang, Guangjian; Liu, Falin;
Year: "2022"
ItemType: journalArticle
Journal: IEEE Transactions on Microwave Theory and Techniques
Volume: "70"
Issue: "3"
Page: 1461-1473
DOI: 10.1109/TMTT.2021.3124211
Citekey: jiang_BlockOrientedTimeDelayNeural_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the high complexity and undersampling challenges in RF power amplifier digital predistortion, this paper proposes a block-oriented time-delay neural network with vector decomposition and an improved low feedback sampling rate method.

> [!cite]
> **Bibliography**:: Jiang, C., Li, H., Qiao, W., Yang, G., Liu, Q., Wang, G., & Liu, F. (2022). Block-Oriented Time-Delay Neural Network Behavioral Model for Digital Predistortion of RF Power Amplifiers. _IEEE Transactions on Microwave Theory and Techniques_, _70_(3), 1461-1473. https://doi.org/10.1109/TMTT.2021.3124211

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> dynamic linear network
>
> [Page 1](zotero://open-pdf/library/items/DV56DK8Q?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> static nonlinear network
>
> [Page 1](zotero://open-pdf/library/items/DV56DK8Q?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> dynamic linear network simulates multiple linear filters
>
> [Page 1](zotero://open-pdf/library/items/DV56DK8Q?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> static nonlinear network is constructed based on vector decomposition and phase recovery mechanism
>
> [Page 1](zotero://open-pdf/library/items/DV56DK8Q?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> However, the required coefficients for strong memory effect and complex nonlinearity will be substantially increased and challenging to implement.
>
>> 还真的和记忆相关？
>
> [Page 1](zotero://open-pdf/library/items/DV56DK8Q?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> “L” represents the linear filter and “N” represents the nonlinear function.
>
> [Page 2](zotero://open-pdf/library/items/DV56DK8Q?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The dynamic linear network uses a fully connected layer with linear activation functions to simulate multiple sets of linear filters. The vector decomposition module (VDM) then extracts both the amplitude and phase of the filter output. For the static nonlinear network, the amplitude of the filter output is fed into the sub-network to obtain the nonlinear basis function; and next, the phase information is recovered with linear weighting operations; finally, a fully connected layer is used to output the IQ components.
>
>> 关于模型的整体运算过程的介绍。IQ之中，I (In-phase)是实部，Q (Quadrature)是虚部
>
> [Page 3](zotero://open-pdf/library/items/DV56DK8Q?page=3)


%% Import Date: 2026-05-12T01:05:21.000+00:00 %%

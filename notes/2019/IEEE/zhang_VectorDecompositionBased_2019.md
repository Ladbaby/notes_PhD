---
Title: Vector Decomposition Based Time-Delay Neural Network Behavioral Model for Digital Predistortion of RF Power Amplifiers
Tags:
  - IEEE-Access/2019
  - vector-decomposition
  - time-delay-neural-network
  - digital-predistortion
  - rf-power-amplifiers
ZoteroLink: zotero://open-pdf/library/items/GJFFAGVK
FirstAuthor: Zhang, Yikang
Author: Li, Yue; Liu, Falin; Zhu, Anding;
Year: 2019
ItemType: journalArticle
Journal: IEEE Access
Volume: 7
Page: 91559-91568
DOI: 10.1109/ACCESS.2019.2927875
Citekey: zhang_VectorDecompositionBased_2019
rating: 2
---
> [!info]
> **TLDR**:: To address physical inconsistencies in existing neural network DPD models that violate first-zone constraints by splitting I/Q components, this paper proposes VDTDNN and AVDTDNN architectures that perform nonlinear operations solely on signal magnitude while recovering phase linearly for lower complexity and improved performance.

> [!cite]
> **Bibliography**:: Zhang, Y., Li, Y., Liu, F., & Zhu, A. (2019). Vector Decomposition Based Time-Delay Neural Network Behavioral Model for Digital Predistortion of RF Power Amplifiers. _IEEE Access_, _7_, 91559-91568. https://doi.org/10.1109/ACCESS.2019.2927875

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations



> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the nonlinear operations are conducted only on the magnitude of the input signals, while the phase information is recovered with the linear weighting
>
> [Page 91559](zotero://open-pdf/library/items/TCQF4DEI?page=91559) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> almost all of the existing neural network DPD models split the input and output signals into I and Q parts to model the nonlinear behavioral characteristics of RF PAs, which can violate the ‘‘first-zone constraint’’ [23], [24] and thus leads to limited performance
>
> [Page 91560](zotero://open-pdf/library/items/TCQF4DEI?page=91560) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where only the envelops of the input signal are conducted nonlinear operations while the phase information is recovered with linear weighting operations
>
> [Page 91560](zotero://open-pdf/library/items/TCQF4DEI?page=91560) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> it means that the nonlinear operations are operated on envelope signals (including both I and Q components). Accordingly, the designed RF PA model should conduct nonlinear operations on envelope signals rather than dividing signals into real and imaginary parts independently to conduct nonlinear operations
>
>> 大概就是看成实部和虚部两部分不太符合物理规律的意思
>
> [Page 91560](zotero://open-pdf/library/items/TCQF4DEI?page=91560) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the designed models should meet the ‘‘first-zone constraint’’, where odd-parity and unitary phase constraints must be satisfied [23], [24]. (ii) the models can handle complex-valued signals avoiding complex gradient operations
>
>> 两个额外的约束
>
> [Page 91560](zotero://open-pdf/library/items/TCQF4DEI?page=91560) 




%% Import Date: 2026-05-15T12:24:01.000+00:00 %%

---
Title: One-Line-of-Code Data Mollification Improves Optimization of Likelihood-based Generative Models
Tags:
  - NeurIPS/2023
  - generative-models
  - likelihood-based
  - data-mollification
  - score-based-diffusion
ZoteroLink: zotero://open-pdf/library/items/5XKAZB7H
FirstAuthor: Tran, Ba-Hien
Author: Franzese, Giulio; Michiardi, Pietro; Filippone, Maurizio;
Year: 2023
ItemType: conferencePaper
Citekey: tran_OneLineofCodeDataMollification_2023
motivation: 借扩散的思路解决VAE生成质量不够高的问题
Conference: Thirty-seventh Conference on Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To address the lower sample quality of likelihood-based generative models compared to diffusion models, the authors implement data mollification via Gaussian noise to improve density estimation and boost generation quality without computational overhead.

> [!cite]
> **Bibliography**:: Tran, B., Franzese, G., Michiardi, P., & Filippone, M. (2023). One-Line-of-Code Data Mollification Improves Optimization of Likelihood-based Generative Models. _Thirty-seventh Conference on Neural Information Processing Systems_, .

> [!info]
> **Contribution**:: 根据训练时间步，添加噪声

![](Pasted%20image%2020231207094336.png)
## Notes

这文章也怪搞笑，说 likelihood-based 的模型 (比如 VAE) 的生成质量不如现在的 score-based 模型。分析原因之一，竟然是因为没有进行数据软化 (data mollification)

于是乎，他们就让 VAE 的训练过程中掺杂一些噪声

训练一开始的时候，训练数据就是纯高斯噪声；到了训练的最后，训练数据恢复正常

虽然听起来和扩散神似，但是仔细想想又不太一样

## 实验

实验部分的对比都是在比较老的模型进行的实验，虽然这种方法确实是改改就行，但是在新的模型上是否也是可行的，这点有待验证

## Annotations
%% begin annotations %%


### Imported: 2023-12-07 9:31 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> perform accurate density estimation in low-density regions and to address manifold overfitting by means of data mollification
>
> [Page 1](zotero://open-pdf/library/items/Y9FEUJYQ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> data mollification mechanism in score-based DMs is responsible for superior density estimation in low-density regions
>
> [Page 3](zotero://open-pdf/library/items/Y9FEUJYQ?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> mollification procedure is similar to the reverse process of diffusion models, where a prior noise distribution is smoothly transformed into the data distribution
>
> [Page 5](zotero://open-pdf/library/items/Y9FEUJYQ?page=5) 

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> mollification
>
>> 软化
>
> [Page 5](zotero://open-pdf/library/items/Y9FEUJYQ?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This function is then scaled and shifted to ensure that γ(0) = 1 and γ(1) = 0
>
> [Page 5](zotero://open-pdf/library/items/Y9FEUJYQ?page=5) 



%% end annotations %%

%% Import Date: 2023-12-07T09:31:20.341+08:00 %%

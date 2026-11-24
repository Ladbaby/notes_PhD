---
Title: "Balancing Act: Distribution-Guided Debiasing in Diffusion Models"
Tags:
  - CVPR/2024
  - diffusion-model
  - debiasing
  - fairness
  - distribution-guided
ZoteroLink: zotero://open-pdf/library/items/G4R772GC
FirstAuthor: Parihar, Rishubh
Author: Bhat, Abhijnya; Basu, Abhipsa; Mallick, Saswat; Kundu, Jogendra Nath; Babu, R. Venkatesh;
Year: 2024
ItemType: conferencePaper
Citekey: parihar_BalancingActDistributionGuided_2024
motivation: 训练数据中的偏见导致扩散模型生成的结果存在偏见
Conference: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition
Page: 6668-6678
rating: 3
---
> [!info]
> **TLDR**:: To mitigate demographic bias in diffusion models without retraining, this work employs Distribution Guidance with an Attribute Distribution Predictor to enforce fair attribute distributions during generation.

> [!cite]
> **Bibliography**:: Parihar, R., Bhat, A., Mallick, S., Basu, A., Kundu, J. N., & Babu, R. V. (2024). _Balancing Act: Distribution-Guided Debiasing in Diffusion Models_ (arXiv:2402.18206). arXiv. [https://doi.org/10.48550/arXiv.2402.18206](https://doi.org/10.48550/arXiv.2402.18206)

> [!info]
> **Contribution**:: 提出 distribution guidance 解决偏见问题

![](Pasted%20image%2020240324151655.png)

## Notes
>
>Comment: CVPR 2024. Project Page : https://ab-34.github.io/balancing_act/.

应该是需要数据集本来就存在类别标签，没法直接套用在时序上有点可惜。不过看他声称的效果，==distribution guidance的效果比传统的 classifier guidance 效果更好==，还是值得研究的

训练集当中可能男女比例就不太一样，这会导致扩散生成的结果里男女比例也不一样

具体做法就是，将 U-Net 的隐空间作为输入，额外训练一个小的 MLP，来把隐变量映射到变量的分布上，==使得该分布尽可能接近预先设定好的参考分布==（伯努利分布，比如男女比例是1:1）。这个损失就是 MLP 的训练损失

![](Pasted%20image%2020240324152757.png)

---

关于 distribution guidance 的其它好处：

- 传统的 classifier guidance 比较像是“强扭的瓜”，生成到一半了才有比较好的 guidance 效果，此时引导确实有点晚了。==会生成次优样本==；相较之下，distribution guidance 从一开始就把分布给扭转成了想要的样子，不需要边去噪边引导

- 在 U-Net 的隐空间上额外训练一个 MLP 效率非常高


## Annotations
%% begin annotations %%


### Imported: 2024-03-24 3:12 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> debiasing DMs without relying on additional data or model retraining
>
> [Page 1](zotero://open-pdf/library/items/CNM2TTSX?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the latent features of denoising UNet hold rich demographic semantics
>
> [Page 1](zotero://open-pdf/library/items/CNM2TTSX?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We train Attribute Distribution Predictor (ADP) - a small mlp that maps the latent features to the distribution of attributes
>
> [Page 1](zotero://open-pdf/library/items/CNM2TTSX?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we provide a reference attribute distribution (pa ref ) for sensitive attribute a and query the DM to sample images following pa ref
>
> [Page 2](zotero://open-pdf/library/items/CNM2TTSX?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we propose to jointly denoise a whole batch of samples and guide the process with pa ref (which we call distribution guidance). Specifically, we push the generated batch attribute distribution pa θ and pa ref close to each other during the reverse process.
>
> [Page 2](zotero://open-pdf/library/items/CNM2TTSX?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> provides more flexibility
>
> [Page 2](zotero://open-pdf/library/items/CNM2TTSX?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> it does not enforce a preset of attributes on a sample basis
>
> [Page 2](zotero://open-pdf/library/items/CNM2TTSX?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we train an Attribute Distribution Predictor (ADP) that predicts attribute distribution directly from the h-space features
>
> [Page 2](zotero://open-pdf/library/items/CNM2TTSX?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a) implemented as a linear layer, b) requires minimal training data, and c) fast training and inference.
>
> [Page 2](zotero://open-pdf/library/items/CNM2TTSX?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> jointly guide the denoising of a batch of samples such that pa ref ≈ pa θ
>
> [Page 3](zotero://open-pdf/library/items/CNM2TTSX?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> maps the intermediate batch features of a diffusion network to an estimate of attribute distribution ˆ pa θ
>
> [Page 3](zotero://open-pdf/library/items/CNM2TTSX?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We parameterize pa ref as a Bernoulli distribution with parameter r denoting fraction of males samples
>
> [Page 3](zotero://open-pdf/library/items/CNM2TTSX?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> To generate samples following pa ref , we can randomly select Nr samples from the batch size of N and guide them towards male class using predictions from fφ. Similarly, for the remaining N(1 − r) samples, we guide them towards female class. In practice, such a sample guidance follows pa ref up to some extent, but results in inferior sample quality
>
> [Page 3](zotero://open-pdf/library/items/CNM2TTSX?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Attempting to steer the generation of individual samples towards a pre-defined attribute class is overly restrictive and leads to inferior generation quality
>
> [Page 3](zotero://open-pdf/library/items/CNM2TTSX?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To realize distribution guidance, we define a differentiable distribution prediction function gψ that maps the batch samples to an estimate of generated attribute distribution ˆ pa θ
>
> [Page 3](zotero://open-pdf/library/items/CNM2TTSX?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where h[1:N] t is the bottleneck U-Net feature representation
>
> [Page 3](zotero://open-pdf/library/items/CNM2TTSX?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Distribution guidance provides flexibility to batch samples to easily modify the attributes to match the defined attribute distribution
>
> [Page 4](zotero://open-pdf/library/items/CNM2TTSX?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Next, we pass the batch h[1:N] t to the attribute classifier and obtain a batch of softmax predictions. The softmax predictions are aggregated per class to obtain the attribute distribution estimate ˆ pa θ . Finally, we update the intermediate hvectors with the gradients of the distribution matching loss L, where γ is the guidance strength parameter
>
> [Page 4](zotero://open-pdf/library/items/CNM2TTSX?page=4) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> H-space guidance is extremely effective and efficient as compared to image space guidance
>
> [Page 5](zotero://open-pdf/library/items/CNM2TTSX?page=5) 



%% end annotations %%

%% Import Date: 2024-03-24T15:13:05.789+08:00 %%

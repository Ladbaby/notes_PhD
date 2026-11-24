---
Title: Classifier-Free Diffusion Guidance
Tags:
  - diffusion-model
  - classifier-guidance
  - image-generation
  - score-based-generative-models
  - NeurIPS_Workshop/2021
ZoteroLink: zotero://open-pdf/library/items/JUUM5V2U
FirstAuthor: Ho, Jonathan
Author: Salimans, Tim;
Year: "2021"
ItemType: conferencePaper
Citekey: ho_ClassifierFreeDiffusionGuidance_2021
motivation: 基于classifier guidance进行改变，使得不需要训练分类器
Conference: NeurIPS 2021 Workshop on Deep Generative Models and Downstream Applications
rating: 2
---
> [!info]
> **TLDR**:: To eliminate the need for a separate image classifier in conditional diffusion models, the authors jointly train conditional and unconditional diffusion models and combine their scores to achieve similar sample quality and diversity trade-offs.

> [!cite]
> **Bibliography**:: Ho, J., & Salimans, T. (2021, December 8). _Classifier-Free Diffusion Guidance_. NeurIPS 2021 Workshop on Deep Generative Models and Downstream Applications. [https://openreview.net/forum?id=qw8AKxfYbI](https://openreview.net/forum?id=qw8AKxfYbI)

> [!info]
> **Contribution**:: classifier-free guidance

## Notes

> workshop 的版本是缩减过的，详细版在 arXiv 上

可以在样本质量、多样性之间进行 tradeoff，而且实际实现的时候极其简单

主要是基于 classifier guidance 做出的改进

### classifier guidance

想法也挺简单：除去正常的扩散模型之外，额外使用另一个 gradient-based 的 image classifier，指引扩散模型的生成。用于提高生成的图片的质量

具体来说，就是把 classifier 的 log likelihood 的梯度给塞进 score 的计算之中：

原本的 score 为：

$$
\epsilon_{\theta}(\mathbf{z}_{\lambda},\mathrm{\bf c})\approx-\sigma_{\lambda}\nabla_{z_{\lambda}}\log p(\mathbf{z}_{\lambda}|\mathbf{c})
$$

现在的 score 为：

$$
\tilde{\epsilon}_{\theta}(\mathbf{z}_{\lambda},\mathrm{\bf c})\approx-\sigma_{\lambda}\nabla_{z_{\lambda}}\log p(\mathbf{z}_{\lambda}|\mathbf{c})-w\sigma_{\lambda}\nabla_{\mathbf{z}_\lambda}\log p_{\theta}(\mathbf{c}|\mathbf{z}_\lambda)
$$

新加的一项包含了 classifier 对于当前样本属于某个类的概率的判断的导数，$w$ 就是控制 guidance 强度的系数

本文觉得实际上 classifier guidance 成功有可能的原因是，扩散模型在和分类器作对抗，所以能得到比较好的 FID 或者 IS 分数

### classifier-free guidance

本文试图移除这个额外的 image classifier，因为需要额外训练一个分类器，有点麻烦

于是乎，文章就改成了 conditional diffusion model 和 unconditional diffusion model 一起学习（本文中没有分别训练两个模型，而是 joint training），而在采样的时候，将估计的 score 表示为两个模型的 score 的线性组合：

$$
\tilde{\epsilon}_{\theta}({\bf z}_{\lambda},{\bf c})=(1\ +w)\epsilon_{\theta}({\bf z}_{\lambda},{\bf c})-w\epsilon_{\theta}({\bf z}_{\lambda})
$$

在实际实现的时候，代码需要改的地方是非常少的：

- 训练：随机 drop out 类标签
- 采样：将 conditional 的 score 和 unconditional 的 score 进行线性组合

### 关于为什么要随机去掉标签

原文有这么一段话：

> We jointly train the unconditional and conditional models simply by randomly setting c to the unconditional class identifier ∅ with some
> probability $p_{uncond}$, set as a hyperparameter

关于为什么要随机把类别标签设置成 $\emptyset$ ，它的解释是，这是一种 **joint training**。是可以同时训练两个模型，但那样明显麻烦

---

new bing 是这么说的，不过我觉得好像不是很靠谱:

[The paper "Classifier-free diffusion guidance"](https://arxiv.org/abs/2207.12598)[1](https://arxiv.org/abs/2207.12598) explains that the model needs to randomly drop out the class conditioning to **prevent the conditional diffusion model from overfitting** to the class labels. The paper states:

> _We randomly drop out the class conditioning with probability 0.5 at each timestep, which we find to be crucial for preventing the conditional diffusion model from overfitting to the class labels and producing low-diversity samples

[The paper also provides some empirical evidence that dropping out the class conditioning improves the sample diversity and quality, as measured by the FID and IS scores](https://arxiv.org/abs/2207.12598)[1](https://arxiv.org/abs/2207.12598). **Dropping out the class conditioning can be seen as a form of data augmentation or regularization that encourages the model to learn from both the conditional and unconditional distributions**

## Annotations
%% begin annotations %%


### Imported: 2023-12-20 9:41 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> mode coverage and sample fidelity in conditional diffusion models post training
>
> [Page 1](zotero://open-pdf/library/items/JUUM5V2U?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we jointly train a conditional and an unconditional diffusion model, and find that it is possible to combine the resulting conditional and unconditional scores to attain a trade-off between sample quality and diversity similar to that obtained using classifier guidance
>
> [Page 1](zotero://open-pdf/library/items/JUUM5V2U?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> classifier-guided diffusion sampling can be interpreted as attempting to confuse an image classifier with a gradient-based adversarial attack
>
> [Page 1](zotero://open-pdf/library/items/JUUM5V2U?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This raises the question of whether classifier guidance is successful at boosting classifier-based metrics such as FID and Inception score (IS) simply because it is adversarial against such classifiers.
>
> [Page 1](zotero://open-pdf/library/items/JUUM5V2U?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Rather than sampling in the direction of the gradient of an image classifier, our method instead mixes the score estimates of a conditional diffusion model and a jointly trained unconditional diffusion model
>
> [Page 1](zotero://open-pdf/library/items/JUUM5V2U?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> obtain a truncation-like effect in diffusion models
>
>> 大概意思是，classifier guidance是一种牺牲了多样性来换取质量的方法，类似"low-temperature sampling"
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where w is a parameter that controls the strength of the classifier guidance
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> up-weighting the probability of data for which the classifier pθ(c|zλ) assigns high likelihood to the correct label
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> setting w > 0 they can improve the Inception score of their diffusion model, at the expense of decreased diversity in their samples.
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> they obtain their best results when applying classifier guidance to an already class-conditional model as described above, and they find that applying guidance to an unconditional model performs less well: the effects of class-conditioning and guidance thus seem complimentary
>
>> 在conditional的模型上使用guidance效果比unconditional更好
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> This model has to be trained on noisy data zλ, so it is not possible to plug in a standard pre-trained classifier.
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We jointly train the unconditional and conditional models simply by randomly setting c to the unconditional class identifier
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3) 

> [!quote|#ffd400] Image
> ![[attachments/ho_ClassifierFreeDiffusionGuidance_2021/image-3-x209-y173.png]]
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The most practical advantage of our classifier-free guidance method is its extreme simplicity: it is only a one-line change of code during training—to randomly drop out the class conditioning—and during sampling—to mix the conditional and unconditional score estimates.
>
>> Dropping out the class conditioning can be seen as a form of data augmentation or regularization that encourages the model to learn from both the conditional and unconditional distributions
>
> [Page 6](zotero://open-pdf/library/items/JUUM5V2U?page=6) 



%% end annotations %%

> [!quote|#ffd400] Image
>
> [Page 3](zotero://open-pdf/library/items/JUUM5V2U?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Note the resemblance to Eq. (6), but also note that  ∗(zλ, c) differs fundamentally from  θ(zλ, c). The former is constructed from the scaled classifier gradient  ∗(zλ, c) −  ∗(zλ); the latter is constructed from the estimate  θ(zλ, c) −  θ(zλ)
>
> [Page 4](zotero://open-pdf/library/items/JUUM5V2U?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> increasing guidance has the effect of decreasing sample variety and increasing individual sample fidelity
>
> [Page 4](zotero://open-pdf/library/items/JUUM5V2U?page=4)


%% Import Date: 2026-05-12T00:49:47.000+00:00 %%

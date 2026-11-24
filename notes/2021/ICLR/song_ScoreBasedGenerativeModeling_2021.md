---
Title: Score-Based Generative Modeling through Stochastic Differential Equations
Tags:
  - highly-cited
  - diffusion-model
  - stochastic-differential-equations
  - score-based-generative-models
  - ICLR/2021
ZoteroLink: zotero://open-pdf/library/items/6QCBVT9E
FirstAuthor: Song, Yang
Author: Sohl-Dickstein, Jascha; Kingma, Diederik P.; Kumar, Abhishek; Ermon, Stefano; Poole, Ben;
Year: "2021"
ItemType: conferencePaper
Citekey: song_ScoreBasedGenerativeModeling_2021
motivation: 提出使用XDE建模扩散
Conference: International Conference on Learning Representations
rating: 2
---
> [!info]
> **TLDR**:: To unify score-based and diffusion probabilistic modeling, this paper formulates generative processes as reverse-time stochastic differential equations, introducing a predictor-corrector framework and an equivalent neural ODE for improved sampling and likelihood computation.

> [!Cite]
> Song, Y., Sohl-Dickstein, J., Kingma, D. P., Kumar, A., Ermon, S., & Poole, B. (2021). Score-Based Generative Modeling through Stochastic Differential Equations. In International Conference on Learning Representations (ICLR).


>[!Synth]
>**Contribution**:: Yang Song大佬提出DDPM++(probability flow ODE)的文章

![](Pasted%20image%2020231127202049.png)
## Notes

### 作者的演讲

[作者的演讲](https://www.youtube.com/watch?v=wMmqCMwuM2Q)，非常值得看

作者试图从 score function 和 diffusion 之间的联系来讲述

![](Pasted%20image%2020231127202303.png)

这里的意思是，神经网络想要预测概率的话，首先得保证输出得是正的，所以取了一个 $e$，然后需要正则化，所以需要除以一个积分 $Z_\theta=\int e^{f_\theta(x)}dx$，然后这一项其实对于高斯分布来说又可以化的特别简单

这个正则化的项一般来说是接近 NP hard 的问题，在不是高斯分布的情况下非常难算。于是就有了大概三种流派来算：

![](Pasted%20image%2020231127202330.png)

- 近似型：
    - energy-based models
    缺点当然就是估算不准
- 自我约束型：
    - autoregressive models
    - normalizing flow models
    - variational auto-encoders
    降低了模型结构上能够改动的灵活性
- 模拟生成过程型：
    不模拟概率，爷直接模拟生成
    - GAN
    缺点是没法衡量概率

![](Pasted%20image%2020231127202408.png)
  
所以我们希望新模型全都要：
- 灵活性
- 可衡量概率
- 生成效果更好

---

![](Pasted%20image%2020231127202429.png)

然后是关于为什么使用 score function 的解释：score function 是图中的向量场，而概率密度函数则是那些带颜色的区域。可以说概率密度函数求导可以得到 score function，反之也可以求。

但是从计算难度上来说，score function 比概率密度函数中涉及的正则化项要好求很多，所以我们用 score function

---

为了能够从输入的数据点推导出 score function，我们需要让模型的输出尽可能地去接近 ground truth score function，这就需要比较两个向量场的区别。

向量场的区别可以直接取欧氏距离的平方。然而，我们其实并不知道 ground truth 是多少（不像我们直接知道输入数据的值），这种时候就需要 score matching。分部积分化简了式子之后，我们就可以用实际数据的相关值来代替式子中的 ground truth 部分

[Jacobian matrix](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
: is the matrix of all its ==first-order partial derivatives==

---

实际上在上述最基础的 score matching 的过程中，因为数据的维度越多，反向传播的次数就会越多，所以这个速度就会很受影响

其中一种做法是 sliced score matching

!!! question
    好像没有在哪个文章里看过

另一种做法是 denoising score matching。具体的细节见[song_GenerativeModelingEstimating_2019](song_GenerativeModelingEstimating_2019.md)

$\sigma$需要取比较小的值，但是会带来比较大的 variance，所以需要 trade off

sliced score matching 的拟合 score function 的能力比 denoising score matching 要好，但是速度慢一点

---

下面介绍的是 sampling 的过程

虽然我们已经得到了 score function，但是有个小问题：假如我们沿着这个场一直走，所有的点都会汇聚于个别几处峰值，这样不是一个正常的图像

所以需要借助朗之万动力学，在 sampling 的过程中加入一点扰动

在实际使用的时候，好像 score matching + 朗之万的组合并不能生成很好的图片。找到的挑战如下：

- 在数据密度比较低的区域，其实很难进行建模

    这个解决方法很搞笑，居然是添加适量的高斯噪声，来让密度提升，这样反而可以让 score matching 更加准确

    但是这样一来近似的分布也是被噪声影响的了，所以提出使用多种不同等级的噪声。为了同时使用多种不同等级的噪声影响下的 score function，我们直接将噪声等级 $\sigma$ 作为输入的参数，这样就不用训练多个网络了，于是你就能看到目标函数多了一项 $\lambda(\sigma_i)$ 作为 positive weighing function 使得各个等级的 noise 对应的 score matching 的量级差不多大

    > 可以训练多个，是可以提高质量的

---

然后是关于如何计算概率的部分

反向计算的过程使用了 SDE，然后用 probability flow ODE 来进行概率的计算

probability flow ODE 有些比较特别的好处：可以在隐空间进行操作，来进行例如替换之类的操作

probability flow ODE 相比于 normalizing flow/VAE 之流还有个神奇的好处：输入输入和隐空间的数据点永远是对应的，不会因为使用了另一个修改过的模型（或者 optimizer）而得到一个不同的隐空间点。只要模型/optimizer 的性能足够好，这就可以进行一定程度的追踪

因为 probability flow ODE 不依赖于可训练的参数

$$

d\mathbf{x}=-\frac{1}{2}\sigma(t)^2\nabla_\mathbf{x}\log p_t(\mathbf{x})dt

$$

  
---

QA环节：

- 你觉得为什么扩散要比 GAN 之流要好？

    因为模型结构可以更加灵活：规避了 normalizing term 之后，模型可以选择的组件就有很多，就可以选到一些非常合适的组件

- 你觉得和 masked autoencoder 比怎么样

    都是合理的过程，只有实验才能知道谁更好

- 用于 transfer learning 可以吗

    可以，和其它生成模型没什么区别

- 会过拟合或者 model collapse 吗

    都会

    - 过拟合：用 drop out/weight decay；或者数据集存在相似数据，则需要去重

### 关于 probability flow ODE

首先需要知道前向扩散过程的 SDE 的表达式：

$$
\mathrm{d}\mathbf{x}=\mathbf{f}(\mathbf{x},t)\mathrm{d}t+g(t)\mathrm{d}\mathbf{w}
$$
- $\mathbf{x}$: 样本
- $t$: 时间
- $\mathbf{f}(\cdot, t)$: 对于 $\mathbf{x}$ 而言的 drift coefficient
- $g(t)$: diffusion coefficient
- $\mathbf{w}$: Wiener process，模拟随机运动 

其实我们可以把前向过程想象成墨水滴进水里面的过程。这其中，$\mathbf{f}(\cdot, t)$ 这项控制的就是整体上扩散的方向，而 $\mathbf{w}$ 这边这项描述的则是每个分子的随机运动

至于反向过程，有文章已经发现了，也是一种扩散过程，对应的 reverse SDE 来描述就是：

$$
\mathrm{d}{\bf x}=\left[{\mathbf{f}}({\bf x},t)-\frac{1}{2}g(t)^{2}\nabla_{\bf{x}}\log p_t({\bf{x}})\right]\mathrm{d}t + g(t) \mathrm{d}\bar{\mathbf{w}}
$$
- $\nabla_{\bf{x}}\log p_t({\bf{x}})$: score function，样本 $x$ 概率分布的导数相关

只要知道了 score function 的值，我们就可以通过模拟这个过程来采样了（numerical solver）

上面的 numerical solver 是其中一种解决反向过程的方法，另一种解法则是将随机运动的项去掉，得到一个 marginal probability 相同的 ODE：

$$
\mathrm{d}{\bf x}=\left[{\mathbf{f}}({\bf x},t)-\frac{1}{2}g(t)^{2}\nabla_{\bf{x}}\log p_t({\bf{x}})\right]\mathrm{d}t
$$

所以总体看下来，这个 ODE 在描述的是：**样本 $\mathbf{x}$ 随着时间 $t$ 的变化情况**。具体来说，$\mathbf{x}$ 的变化 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t}$ 是由一项 drift coefficient，和一个噪声项所共同控制的

至于 ODE 本来的定义是 "a mathematical equation with functions of one independent variable and its derivatives"，放在这个语境下来说，**$t$ 就是这个 independent variable，而样本 $\mathbf{x}$ 随着时间 $t$ 的变化关系，正是我们追求的这个 ODE 的解**

## Annotations
%% begin annotations %%


### Imported: 2023-11-28 4:03 pm


> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> score
>
> [Page 1](zotero://open-pdf/library/items/IUG9N9YJ?page=1) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> accurately estimate these scores
>
> [Page 1](zotero://open-pdf/library/items/IUG9N9YJ?page=1) 

> [!quote|#ff6666] <mark style="background-color: ">Highlight</mark>
> ODE
>
>> ordinary differential equation
>
> [Page 1](zotero://open-pdf/library/items/IUG9N9YJ?page=1) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> DDPM training objective implicitly computes scores at each noise scale
>
> [Page 1](zotero://open-pdf/library/items/IUG9N9YJ?page=1) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> instead of perturbing data with a finite number of noise distributions, we consider a continuum of distributions that evolve over time according to a diffusion process
>
> [Page 2](zotero://open-pdf/library/items/IUG9N9YJ?page=2) 

> [!quote|#ff6666] <mark style="background-color: ">Highlight</mark>
> numerical SDE solvers
>
>> simulate the behavior of a stochastic process over time using a computer
>
> [Page 2](zotero://open-pdf/library/items/IUG9N9YJ?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Flexible sampling and likelihood computation
>
> [Page 2](zotero://open-pdf/library/items/IUG9N9YJ?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> deterministic samplers based on the probability flow ordinary differential equation (ODE).
>
> [Page 2](zotero://open-pdf/library/items/IUG9N9YJ?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> The latter allows for fast adaptive sampling via black-box ODE solvers, flexible data manipulation via latent codes, a uniquely identifiable encoding, and notably, exact likelihood computation
>
> [Page 2](zotero://open-pdf/library/items/IUG9N9YJ?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Controllable generation:
>
> [Page 2](zotero://open-pdf/library/items/IUG9N9YJ?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Unified framework
>
> [Page 2](zotero://open-pdf/library/items/IUG9N9YJ?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> perturbed data distributions evolve according to an SDE as the noise intensifies
>
> [Page 3](zotero://open-pdf/library/items/IUG9N9YJ?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> the reverse of a diffusion process is also a diffusion process
>
>> ？还有这种操作？
>
> [Page 4](zotero://open-pdf/library/items/IUG9N9YJ?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Once the score of each marginal distribution, ∇x log ptpxq, is known for all t, we can derive the reverse diffusion process from Eq. (6) and simulate it to sample from p0
>
>> 原来知道了score就可以反向是这个意思
>
> [Page 4](zotero://open-pdf/library/items/IUG9N9YJ?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> The score of a distribution can be estimated by training a score-based model on samples with score matching
>
> [Page 4](zotero://open-pdf/library/items/IUG9N9YJ?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> With sufficient data and model capacity, score matching ensures that the optimal solution to Eq. (7), denoted by sθ ̊ px, tq, equals ∇x log ptpxq for almost all x and t.
>
> [Page 4](zotero://open-pdf/library/items/IUG9N9YJ?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> After training a time-dependent score-based model sθ, we can use it to construct the reverse-time SDE and then simulate it with numerical approaches to generate samples from p0
>
> [Page 5](zotero://open-pdf/library/items/IUG9N9YJ?page=5) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> at each time step, the numerical SDE solver first gives an estimate of the sample at the next time step, playing the role of a “predictor”. Then, the score-based MCMC approach corrects the marginal distribution of the estimated sample, playing the role of a “corrector”.
>
> [Page 6](zotero://open-pdf/library/items/IUG9N9YJ?page=6) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> PROBABILITY FLOW AND CONNECTION TO NEURAL ODES
>
> [Page 7](zotero://open-pdf/library/items/IUG9N9YJ?page=7) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> the encoding for an input is uniquely determined by the data distribution
>
> [Page 7](zotero://open-pdf/library/items/IUG9N9YJ?page=7) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> Probability flow ODE enables fast sampling
>
> [Page 8](zotero://open-pdf/library/items/IUG9N9YJ?page=8) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> black-box ODE solver
>
> [Page 8](zotero://open-pdf/library/items/IUG9N9YJ?page=8) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> CONTROLLABLE GENERATION
>
> [Page 8](zotero://open-pdf/library/items/IUG9N9YJ?page=8) 



%% end annotations %%

%% Import Date: 2023-11-28T16:03:19.478+08:00 %%

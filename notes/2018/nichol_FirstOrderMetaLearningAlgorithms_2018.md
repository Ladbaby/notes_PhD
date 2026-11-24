---
Title: On First-Order Meta-Learning Algorithms
Tags:
  - meta-learning
  - first-order-methods
  - parameter-initialization
  - few-shot-learning
  - optimization-algorithms
ZoteroLink: zotero://open-pdf/library/items/S5XQ2NNC
FirstAuthor: Nichol, Alex
Author: Achiam, Joshua; Schulman, John;
Year: "2018"
ItemType: article
DOI: 10.48550/arXiv.1803.02999
Citekey: nichol_FirstOrderMetaLearningAlgorithms_2018
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To understand why first-order meta-learning algorithms like Reptile effectively learn quick-adapting initializations, the authors provide a theoretical analysis showing these methods generalize well by moving initial weights toward task-trained parameters.

> [!cite]
> **Bibliography**:: Nichol, A., Achiam, J., & Schulman, J. (2018). _On First-Order Meta-Learning Algorithms_ (arXiv:1803.02999). arXiv. [https://doi.org/10.48550/arXiv.1803.02999](https://doi.org/10.48550/arXiv.1803.02999)

> [!info]
> **Contribution**:: 

## Notes

openai 的研究成果，参考[官网](https://openai.com/index/reptile/)的介绍

本文提出的元学习算法叫做 Reptile，一种和一阶的 MAML 非常相关的算法

任务：在文章的第二章有介绍，大概就是找到一组神经网络的初始参数 $\phi$，使得对于一个随机采样的任务 $\tau$ 和其上对应的损失 $L_{\tau}$，learner 可以在 $k$ 次更新之后就在该任务 $\tau$ 上拥有一个较小的 loss

> 其实对这个初始化参数 $\phi$ 的约束就是暗示着只需 $k$ 步，模型就可以迁移到这个新的任务 $\tau$ 上，体现出这组参数非常优秀的泛化性能

提出的元学习算法：

![](Pasted%20image%2020240907161758.png)

原始的 MAML 最大的问题就是在学习过程中， $k$ 步的随机梯度下降算出来的梯度（eq.4）计算量比较大。假如把前一项 $U'_{\tau,A}(\phi)$ 当作常数，我们就会得到 MAML 一阶的版本，降低计算复杂度


给的参考代码写的还算挺直观的

```python
import numpy as np
import torch
from torch import nn, autograd as ag
import matplotlib.pyplot as plt
from copy import deepcopy

seed = 0
plot = True
innerstepsize = 0.02 # stepsize in inner SGD
innerepochs = 1 # number of epochs of each inner SGD
outerstepsize0 = 0.1 # stepsize of outer optimization, i.e., meta-optimization
niterations = 30000 # number of outer updates; each iteration we sample one task and update on it

rng = np.random.RandomState(seed)
torch.manual_seed(seed)

# Define task distribution
x_all = np.linspace(-5, 5, 50)[:,None] # All of the x points
ntrain = 10 # Size of training minibatches
def gen_task():
    "Generate classification problem"
    phase = rng.uniform(low=0, high=2*np.pi)
    ampl = rng.uniform(0.1, 5)
    f_randomsine = lambda x : np.sin(x + phase) * ampl
    return f_randomsine

# Define model. Reptile paper uses ReLU, but Tanh gives slightly better results
model = nn.Sequential(
    nn.Linear(1, 64),
    nn.Tanh(),
    nn.Linear(64, 64),
    nn.Tanh(),
    nn.Linear(64, 1),
)

def totorch(x):
    return ag.Variable(torch.Tensor(x))

def train_on_batch(x, y):
    x = totorch(x)
    y = totorch(y)
    model.zero_grad()
    ypred = model(x)
    loss = (ypred - y).pow(2).mean()
    loss.backward()
    for param in model.parameters():
        param.data -= innerstepsize * param.grad.data

def predict(x):
    x = totorch(x)
    return model(x).data.numpy()

# Choose a fixed task and minibatch for visualization
f_plot = gen_task()
xtrain_plot = x_all[rng.choice(len(x_all), size=ntrain)]

# Reptile training loop
for iteration in range(niterations):
    weights_before = deepcopy(model.state_dict())
    # Generate task
    f = gen_task()
    y_all = f(x_all)
    # Do SGD on this task
    inds = rng.permutation(len(x_all))
    for _ in range(innerepochs):
        for start in range(0, len(x_all), ntrain):
            mbinds = inds[start:start+ntrain]
            train_on_batch(x_all[mbinds], y_all[mbinds])
    # Interpolate between current weights and trained weights from this task
    # I.e. (weights_before - weights_after) is the meta-gradient
    weights_after = model.state_dict()
    outerstepsize = outerstepsize0 * (1 - iteration / niterations) # linear schedule
    model.load_state_dict({name : 
        weights_before[name] + (weights_after[name] - weights_before[name]) * outerstepsize 
        for name in weights_before})

    # Periodically plot the results on a particular task and minibatch
    if plot and iteration==0 or (iteration+1) % 1000 == 0:
        plt.cla()
        f = f_plot
        weights_before = deepcopy(model.state_dict()) # save snapshot before evaluation
        plt.plot(x_all, predict(x_all), label="pred after 0", color=(0,0,1))
        for inneriter in range(32):
            train_on_batch(xtrain_plot, f(xtrain_plot))
            if (inneriter+1) % 8 == 0:
                frac = (inneriter+1) / 32
                plt.plot(x_all, predict(x_all), label="pred after %i"%(inneriter+1), color=(frac, 0, 1-frac))
        plt.plot(x_all, f(x_all), label="true", color=(0,1,0))
        lossval = np.square(predict(x_all) - f(x_all)).mean()
        plt.plot(xtrain_plot, f(xtrain_plot), "x", label="train", color="k")
        plt.ylim(-4,4)
        plt.legend(loc="lower right")
        plt.pause(0.01)
        model.load_state_dict(weights_before) # restore from snapshot
        print(f"-----------------------------")
        print(f"iteration               {iteration+1}")
        print(f"loss on plotted curve   {lossval:.3f}") # would be better to average loss over a set of examples, but this is optimized for brevity
```

## Annotations
%% begin annotations %%


### Imported: 2024-09-07 4:06 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> first-order MAML
>
> [Page 2](zotero://open-pdf/library/items/S5XQ2NNC?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> joint training
>
> [Page 2](zotero://open-pdf/library/items/S5XQ2NNC?page=2) 



%% end annotations %%

%% Import Date: 2024-09-07T16:06:53.831+08:00 %%

---
Title: Cooperative Graph Neural Networks
Tags:
  - ICML/2024
  - graphs
  - cooperative-learning
  - message-passing
  - game-theory
ZoteroLink: zotero://open-pdf/library/items/G8JBQBGQ
FirstAuthor: Finkelshtein, Ben
Author: Huang, Xingyue; Bronstein, Michael M.; Ceylan, Ismail Ilkan;
Year: "2024"
ItemType: conferencePaper
Publisher: PMLR
Page: 13633-13659
Citekey: finkelshtein_CooperativeGraphNeural_2024
Conference: International Conference on Machine Learning
rating: 3
---
> [!info]
> **TLDR**:: To address the rigidity of standard message-passing in graph neural networks, the authors introduce a dynamic framework where nodes autonomously choose communication strategies like listening or broadcasting to adaptively explore graph topology.

> [!cite]
> **Bibliography**:: Finkelshtein, B., Huang, X., Bronstein, M. M., & Ceylan, I. I. (2024). Cooperative Graph Neural Networks. _Proceedings of the 41st International Conference on Machine Learning_, 13633–13659. [https://proceedings.mlr.press/v235/finkelshtein24a.html](https://proceedings.mlr.press/v235/finkelshtein24a.html)

> [!info]
> **Contribution**:: 给图网络设计了一种选择性的信息传递机制

## Notes

![](640.webp)

图神经网络的每一个节点可以选择一种状态，进行信息传递。

和我构思的借鉴计算机网络的结构神似，可以借鉴

参考这个[微信推文](https://mp.weixin.qq.com/s/rOVvskqm2jcigiEvJS6HPQ)


## Annotations
%% begin annotations %%


### Imported: 2024-09-29 4:12 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where every node is viewed as a player that can choose to either ‘listen’, ‘broadcast’, ‘listen and broadcast’, or to ‘isolate’
>
> [Page 1](zotero://open-pdf/library/items/G8JBQBGQ?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In the first stage, each node chooses an action from the set of actions given their current state and the states of their neighboring nodes. In the second stage, every node state gets updated based on their current state and the states of a subset of the neighboring nodes
>
> [Page 3](zotero://open-pdf/library/items/G8JBQBGQ?page=3) 



%% end annotations %%

%% Import Date: 2024-09-29T16:12:38.840+08:00 %%

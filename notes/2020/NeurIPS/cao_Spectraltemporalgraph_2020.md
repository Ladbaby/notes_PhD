---
Title: Spectral temporal graph neural network for multivariate time-series forecasting
Tags:
  - NeurIPS/2020
  - graphs
  - time-series-forecasting
  - multivariate-time-series
  - spectral-graph-networks
ZoteroLink: zotero://open-pdf/library/items/4V2HLW8G
FirstAuthor: Cao, Defu
Author: Wang, Yujing; Duan, Juanyong; Zhang, Ce; Zhu, Xia; Huang, Conguri; Tong, Yunhai; Xu, Bixiong; Bai, Jing; Tong, Jie; Zhang, Qi;
Year: "2020"
ItemType: conferencePaper
Publisher: Curran Associates Inc.
Location: Red Hook, NY, USA
Page: 17766–17778
ISBN: 978-1-7138-2954-6
Citekey: cao_Spectraltemporalgraph_2020
motivation: 在频域同时捕捉变量内和变量间的关系，改进生成结果
Conference: Proceedings of the 34th International Conference on Neural Information Processing Systems
rating: 2
---
> [!info]
> **TLDR**:: To address the limitation of relying on pre-defined priors for inter-series correlations in multivariate time-series forecasting, this paper proposes StemGNN, which jointly captures temporal and inter-series dependencies in the spectral domain using Graph and Discrete Fourier Transforms.

> [!cite]
> **Bibliography**:: Cao, D., Wang, Y., Duan, J., Zhang, C., Zhu, X., Huang, C., Tong, Y., Xu, B., Bai, J., Tong, J., & Zhang, Q. (2020). Spectral temporal graph neural network for multivariate time-series forecasting. _Proceedings of the 34th International Conference on Neural Information Processing Systems_, 17766–17778.

> [!info]
> **Contribution**:: 

## Notes

由于本文主要在 *spectral domain* 上进行操作，之前没听过，这次就了解下

这牵扯到一个相关的转换：

> [!note] [Graph Fourier Transform](https://en.wikipedia.org/wiki/Graph_Fourier_transform)
> 输入图，输出 Laplacian matrix 的 eigenvalues (表示频率) 和 eigenvectors (表示和这个频率相关的 pattern，图信号？)

同理，这些输出也是可以直接进行操作的

![](Pasted%20image%2020231204111145.png)

这篇文章的话，提出用GFT对于时序间的关系进行建模，用Discrete Fourier Transform对于时间维度进行建模

问题就在于，GFT的输出已经是频率信息了，在这个后面进行DFT到底是想干什么？？？

和弈城讨论的结果：GFT没搞懂，很少见，图一乐

## Annotations
%% begin annotations %%


### Imported: 2023-12-04 10:49 am


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> inter-series correlations and temporal dependencies jointly in the spectral domain.
>
> [Page 1](zotero://open-pdf/library/items/4V2HLW8G?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> It combines Graph Fourier Transform (GFT) which models inter-series correlations and Discrete Fourier Transform (DFT) which models temporal dependencies in an end-to-end framework
>
> [Page 1](zotero://open-pdf/library/items/4V2HLW8G?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> ignore the inter-series correlations or require a dependency graph as priors
>
> [Page 3](zotero://open-pdf/library/items/4V2HLW8G?page=3) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Graph Fourier Transform (GFT) operator transforms the graph G into a spectral matrix representation
>
> [Page 4](zotero://open-pdf/library/items/4V2HLW8G?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Discrete Fourier Transform (DFT) operator transforms each univariate time-series component into the frequency domain
>
> [Page 4](zotero://open-pdf/library/items/4V2HLW8G?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Graph Fourier Transform (GFT) to capture interseries relationships
>
>> 用图傅里叶变换建模不同时序之间的关系（似乎不同于变量间）
>
> [Page 5](zotero://open-pdf/library/items/4V2HLW8G?page=5) 



%% end annotations %%

%% Import Date: 2023-12-04T10:49:16.369+08:00 %%

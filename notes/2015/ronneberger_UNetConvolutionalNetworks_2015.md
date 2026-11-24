---
Title: "U-Net: Convolutional Networks for Biomedical Image Segmentation"
Tags:
  - biomedical-image-segmentation
  - u-net
  - convolutional-neural-network
  - data-augmentation
  - encoder-decoder
ZoteroLink: zotero://open-pdf/library/items/38H2B75B
FirstAuthor: Ronneberger, Olaf
Author: Fischer, Philipp; Brox, Thomas;
Year: "2015"
ItemType: article
DOI: 10.48550/arXiv.1505.04597
Citekey: ronneberger_UNetConvolutionalNetworks_2015
motivation: 提出U-Net，大幅提高样本的利用效率
Publisher: arXiv
rating: 2
---
> [!info]
> **TLDR**:: To address the high demand for annotated training samples in deep network segmentation, this paper introduces a contracting-expanding architecture that leverages strong data augmentation to achieve precise, fast results from very few images.

> [!Cite]
> Ronneberger, O., Fischer, P., & Brox, T. (2015). _U-Net: Convolutional Networks for Biomedical Image Segmentation_ (arXiv:1505.04597). arXiv. [https://doi.org/10.48550/arXiv.1505.04597](https://doi.org/10.48550/arXiv.1505.04597)

>[!Synth]
>**Contribution**:: U-Net
>
>**Related**:: 
>

![](Pasted%20image%2020231127211158.png)
# Notes
>
>Comment: conditionally accepted at MICCAI 2015.

一个经常被引用的网络结构，原本是用来做生物医学图像分割的

  

最大的贡献：可以在非常少的样本基数上实现训练

  

- contracting path

  

    从输入到中间

- expansive path

  

    从中间到输出

  

contracting path 每一步产生的 feature map 都会喂给 expansive path 里的对应步骤，因为：

> This allows the network to combine high-level context information (从 contracting path 的 feature map 里获得) with low-level localization information (从 expansive path 上采样的 feature map 得到) to produce accurate segmentations (precise localization)


## Annotations
%% begin annotations %%


### Imported: 2023-11-28 3:49 pm


> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> We modify and extend this architecture such that it works with very few training images
>
> [Page 2](zotero://open-pdf/library/items/38H2B75B?page=2) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> This strategy allows the seamless segmentation of arbitrarily large images by an overlap-tile strategy
>
> [Page 3](zotero://open-pdf/library/items/38H2B75B?page=3) 

> [!quote|#a28ae5] <mark style="background-color: ">Highlight</mark>
> deformation
>
>> 变形
>
> [Page 3](zotero://open-pdf/library/items/38H2B75B?page=3) 

> [!quote|#a28ae5] <mark style="background-color: ">Highlight</mark>
> tissue
>
>> 组织（生物意义上）
>
> [Page 3](zotero://open-pdf/library/items/38H2B75B?page=3) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> At each downsampling step we double the number of feature channels
>
> [Page 4](zotero://open-pdf/library/items/38H2B75B?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> a concatenation with the correspondingly cropped feature map from the contracting path
>
> [Page 4](zotero://open-pdf/library/items/38H2B75B?page=4) 

> [!quote|#ffd400] <mark style="background-color: ">Highlight</mark>
> cropping
>
>> 左边的path提供的feature map是裁剪过的
>
> [Page 4](zotero://open-pdf/library/items/38H2B75B?page=4) 



%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> There is large consent that successful training of deep networks requires many thousand annotated training samples. In this paper, we present a network and training strategy that relies on the strong use of data augmentation to use the available annotated samples more efficiently.
>
> [Page 1](zotero://open-pdf/library/items/38H2B75B?page=1)


%% Import Date: 2026-05-12T00:06:47.000+00:00 %%

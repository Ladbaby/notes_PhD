---
Title: "CLIP as RNN: Segment Countless Visual Concepts without Training Endeavor"
Tags:
  - CVPR/2024
  - semantic-segmentation
  - open-vocabulary-segmentation
  - vision-language-model
  - clip
ZoteroLink: zotero://open-pdf/library/items/2Q6TKDL7
FirstAuthor: Sun, Shuyang
Author: Li, Runjia; Torr, Philip; Gu, Xiuye; Li, Siyang;
Year: 2024
ItemType: conferencePaper
Citekey: sun_CLIPRNNSegment_2024
Conference: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition
Page: 13171-13182
rating: 4
---
> [!info]
> **TLDR**:: To address the vocabulary loss and suboptimal masks caused by fine-tuning VLMs for open-vocabulary segmentation, this paper introduces a training-free recurrent framework that progressively filters irrelevant texts to enhance mask quality while preserving the model's broad vocabulary.

> [!cite]
> **Bibliography**:: Sun, S., Li, R., Torr, P., Gu, X., & Li, S. (2024). _CLIP as RNN: Segment Countless Visual Concepts without Training Endeavor_ (arXiv:2312.07661). arXiv. [https://doi.org/10.48550/arXiv.2312.07661](https://doi.org/10.48550/arXiv.2312.07661)

> [!info]
> **Contribution**:: 无需额外训练，利用CLIP进行分割

## Notes
>
>Comment: To appear in CVPR 2024. Project page: https://torrvision.com/clip_as_rnn/.

这个想法其实很有意思的，anything can be RNN


## Annotations
%% begin annotations %%


### Imported: 2024-06-25 4:01 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> mask labels
>
> [Page 1](zotero://open-pdf/library/items/6C2VVP7W?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> image-text datasets
>
> [Page 1](zotero://open-pdf/library/items/6C2VVP7W?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the vocabulary capacity of pre-trained VLMs is severely reduced after fine-tuning. However, without finetuning, VLMs trained under weak image-text supervision tend to make suboptimal mask predictions
>
> [Page 1](zotero://open-pdf/library/items/6C2VVP7W?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> progressively filters out irrelevant texts and enhances mask quality without training efforts
>
> [Page 1](zotero://open-pdf/library/items/6C2VVP7W?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The recurrent unit is a two-stage segmenter built upon a frozen VLM
>
> [Page 1](zotero://open-pdf/library/items/6C2VVP7W?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In the t-th time step, the frozen segmenter evaluates the degree of alignment between each mask and text query from the previous time step, ht−1, and then low-confidence queries are eliminated by the function σ
>
> [Page 3](zotero://open-pdf/library/items/6C2VVP7W?page=3) 



%% end annotations %%

%% Import Date: 2024-06-25T16:01:22.409+08:00 %%

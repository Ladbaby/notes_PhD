---
Title: Segment Anything | Meta AI Research
Tags:
  - computer-vision
  - image-segmentation
  - foundation-model
  - segment-anything
  - mask-decoder
ZoteroLink: zotero://open-pdf/library/items/M7NYZAPU
ItemType: webpage
Citekey: _SegmentAnythingMeta_
rating: 5
---
> [!info]
> **TLDR**:: To address the lack of generalizable segmentation foundation models, the authors introduce the promptable Segment Anything Model (SAM) and the SA-1B dataset, enabling robust zero-shot transfer to diverse downstream tasks.

> [!cite]
> **Bibliography**::  (). Segment Anything | Meta AI Research.

> [!info]
> **Contribution**:: 

## Notes
>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a promptable segmentation task
>
> [Page 1](zotero://open-pdf/library/items/M7NYZAPU?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> segmentation model (SAM)
>
> [Page 1](zotero://open-pdf/library/items/M7NYZAPU?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> That is, we seek to develop a promptable model and pre-train it on a broad dataset using a task that enables powerful generalization
>
> [Page 1](zotero://open-pdf/library/items/M7NYZAPU?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> 1. What task will enable zero-shot generalization? 2. What is the corresponding model architecture? 3. What data can power this task and model?
>
> [Page 1](zotero://open-pdf/library/items/M7NYZAPU?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> promptable segmentation task
>
> [Page 2](zotero://open-pdf/library/items/M7NYZAPU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> The requirement of a valid output mask means that even when a prompt is ambiguous and could refer to multiple objects (for example, a point on a shirt may indicate either the shirt or the person wearing it), the output should be a reasonable mask for at least one of those objects
>
> [Page 2](zotero://open-pdf/library/items/M7NYZAPU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a powerful image encoder computes an image embedding, a prompt encoder embeds prompts, and then the two information sources are combined in a lightweight mask decoder that predicts segmentation masks
>
> [Page 2](zotero://open-pdf/library/items/M7NYZAPU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Our solution is to build a “data engine”, i.e., we co-develop our model with model-in-the-loop dataset annotatio
>
> [Page 2](zotero://open-pdf/library/items/M7NYZAPU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> assisted-manual, semi-automatic, and fully automatic.
>
> [Page 2](zotero://open-pdf/library/items/M7NYZAPU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SA-1B
>
> [Page 2](zotero://open-pdf/library/items/M7NYZAPU?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> For example, if one has a bounding box detector for cats, cat instance segmentation can be solved by providing the detector’s box output as a prompt to our model.
>
>> 把大致的框选出来然后交给这模型就行了？？？
>
> [Page 4](zotero://open-pdf/library/items/M7NYZAPU?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we use an MAE [47] pre-trained Vision Transformer (ViT) [33] minimally adapted to process high resolution inputs [62].
>
> [Page 5](zotero://open-pdf/library/items/M7NYZAPU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Dense prompts (i.e., masks) are embedded using convolutions and summed element-wise with the image embedding.
>
>> 解释了 figure 4 中为什么会有个 mask 作为 input
>
> [Page 5](zotero://open-pdf/library/items/M7NYZAPU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Transformer decoder block [103] followed by a dynamic mask prediction head.
>
> [Page 5](zotero://open-pdf/library/items/M7NYZAPU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We found 3 mask outputs is sufficient to address most common cases
>
> [Page 5](zotero://open-pdf/library/items/M7NYZAPU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> During training, we backprop only the minimum
>
> [Page 5](zotero://open-pdf/library/items/M7NYZAPU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> loss [15, 45, 64] over masks
>
> [Page 5](zotero://open-pdf/library/items/M7NYZAPU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> To rank masks, the model predicts a confidence score (i.e., estimated IoU) for each mask.
>
> [Page 5](zotero://open-pdf/library/items/M7NYZAPU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> a team of professional annotators labeled masks by clicking foreground / background object points using a browser-based interactive segmentation tool powered by SAM
>
> [Page 5](zotero://open-pdf/library/items/M7NYZAPU?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> In this stage, we aimed to increase the diversity of masks in order to improve our model’s ability to segment anything
>
> [Page 6](zotero://open-pdf/library/items/M7NYZAPU?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> fully automatic
>
> [Page 6](zotero://open-pdf/library/items/M7NYZAPU?page=6)


%% Import Date: 2026-05-12T03:50:40.000+00:00 %%

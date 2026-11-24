---
Title: "ElasTST: Towards Robust Varied-Horizon Forecasting with Elastic Time-Series Transformer"
Tags:
  - NeurIPS/2024
  - time-series-forecasting
  - transformer
  - multi-horizon-forecasting
  - robust-forecasting
ZoteroLink: zotero://open-pdf/library/items/WU4DUJKY
FirstAuthor: Zhang, Jiawen
Author: Zheng, Shun; Wen, Xumeng; Zhou, Xiaofang; Bian, Jiang; Li, Jia;
Year: "2024"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "37"
Page: 119174-119197
Citekey: zhang_ElasTSTRobustVariedHorizon_2024a
motivation: 预测窗口变长的情况较少研究
rating: 3
---
> [!info]
> **TLDR**:: To address the inability of existing models to robustly forecast across varied horizons without per-horizon training, this paper introduces ElasTST, a non-autoregressive transformer using placeholders, structured masks, and horizon reweighting.

> [!cite]
> **Bibliography**:: Zhang, J., Zheng, S., Wen, X., Zhou, X., Bian, J., & Li, J. (2024). ElasTST: Towards Robust Varied-Horizon Forecasting with Elastic Time-Series Transformer. _Advances in Neural Information Processing Systems_, _37_, 119174–119197.

> [!info]
> **Contribution**:: 变长预测窗口

## Notes

![](Pasted%20image%2020260104192219.png)

我感觉就是 multi-patch 的那种思路，像是 MOIRAI 那种

动机是保持模型在不同的预测长度的情况下保持比较合理的性能。

模型的性能表现一般，不过有几处设计值得借鉴：

- 动机比较新颖
- 旋转位置编码可以应对可变长度的预测（类似 NLP 里 LLM 的输出长度不固定）
- 对于 loss 的解释比较有意思。Eq. 5 那里说的是，希望模型在训练的阶段可以在多个不同的预测窗口长度下进行预测，而且需要对多个不同的预测窗口的 loss 进行整合。不过实际上代码实现上，只是给 [BATCH_SIZE, PRED_LEN, ENC_IN] 的 loss 乘了个类似形状的 weight，没有实际用途。

## Annotations
%% begin annotations %%


### Imported: 2026-01-04 7:18 pm


> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> warranting
>
>> to make sth necessary or appropriate 使恰当
>
> [Page ](zotero://open-pdf/library/items/WU4DUJKY?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A tunable version of rotary position embedding is also integrated into ElasTST to capture time-series-specific periods and enhance adaptability to different horizons
>
> [Page ](zotero://open-pdf/library/items/WU4DUJKY?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> horizon reweighting strategy that approximates the effect of random sampling across multiple horizons with a single fixed horizon setting
>
> [Page ](zotero://open-pdf/library/items/WU4DUJKY?page=) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> structured attention masks
>
>> 没看懂
>
> [Page 4](zotero://open-pdf/library/items/WU4DUJKY?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Tunable Rotary Position Embedding
>
>> 旋转编码这个设计对于可变长度来说还挺有用的
>
> [Page 5](zotero://open-pdf/library/items/WU4DUJKY?page=5) 

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> To overcome the limitations of absolute position embedding in extrapolation scenarios, RoPE has been widely adopted in the NLP domain for handling variable-length sequences
>
> [Page 5](zotero://open-pdf/library/items/WU4DUJKY?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Theoretically, the expectation of this random sampling process can be represented as a weighted loss over a fixed horizon Tmax. To be specific, the expected value of ω(τ ) is calculated as: E[ω(τ )] = 1 Tmax ∑Tmax T =1 1 T
>
>> 哦所以它拿这玩意的积分，也就是ln作为权重？
>
> [Page 6](zotero://open-pdf/library/items/WU4DUJKY?page=6) 



%% end annotations %%

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> warranting
>
>> to make sth necessary or appropriate 使恰当
>
> [Page 1](zotero://open-pdf/library/items/WU4DUJKY?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> A tunable version of rotary position embedding is also integrated into ElasTST to capture time-series-specific periods and enhance adaptability to different horizons
>
> [Page 1](zotero://open-pdf/library/items/WU4DUJKY?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> horizon reweighting strategy that approximates the effect of random sampling across multiple horizons with a single fixed horizon setting
>
> [Page 1](zotero://open-pdf/library/items/WU4DUJKY?page=1)


%% Import Date: 2026-05-12T02:52:35.000+00:00 %%

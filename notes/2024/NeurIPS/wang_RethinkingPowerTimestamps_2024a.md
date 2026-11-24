---
Title: "Rethinking the Power of Timestamps for Robust Time Series Forecasting: A Global-Local Fusion Perspective"
Tags:
  - NeurIPS/2024
  - time-series-forecasting
  - timestamp
  - global-local-fusion
  - robust-forecasting
ZoteroLink: zotero://open-pdf/library/items/XD4VKTBE
FirstAuthor: Wang, Chengsen
Author: Qi, Qi; Wang, Jingyu; Sun, Haifeng; Zhuang, Zirui; Wu, Jinming; Liao, Jianxin;
Year: 2024
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: 37
Page: 22206-22232
Citekey: wang_RethinkingPowerTimestamps_2024a
motivation: 现有方法对于时间戳的利用不够充分
rating: 2
---
> [!info]
> **TLDR**:: To address the underutilization of timestamps that limits robustness against real-world data pollution, the paper proposes GLAFF, a plugin framework that individually models timestamps for global guidance and adaptively fuses them with local observations.

> [!cite]
> **Bibliography**:: Wang, C., Qi, Q., Wang, J., Sun, H., Zhuang, Z., Wu, J., & Liao, J. (2024). Rethinking the Power of Timestamps for Robust Time Series Forecasting: A Global-Local Fusion Perspective. _Advances in Neural Information Processing Systems_, _37_, 22206–22232.

> [!info]
> **Contribution**:: 即插即用，反正往啥模型上都可以试试

## Notes
![](Pasted%20image%2020260105191637.png)

大概就是自带了一个学习时间戳的模块，然后和 backbone 的输出[[]]融合一下

动态决定应该使用全局的信息，还是局部的信息

- 时序模式较**稳定**：注重**全局**信息
- 时序模式**不稳定**：注重**局部**信息

## Annotations
%% begin annotations %%


### Imported: 2026-01-05 7:12 pm


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Additionally, GLAFF serves as a model-agnostic and plug-and-play framework that can seamlessly collaborate with any time series forecasting backbone
>
>> 这句话可以借鉴，就是强调 plug-and-play 的描述<br />
"此外，GLAFF 作为一个模型无关且即插即用的框架，可以无缝与任何时间序列预测核心模块协同工作。"
>
> [Page 2](zotero://open-pdf/library/items/XD4VKTBE?page=2) 



%% end annotations %%

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> However, existing works primarily focus on local observations, with timestamps being treated merely as an optional supplement that remains underutilized.
>
> [Page 1](zotero://open-pdf/library/items/XD4VKTBE?page=1)

> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Additionally, GLAFF serves as a model-agnostic and plug-and-play framework that can seamlessly collaborate with any time series forecasting backbone
>
>> 这句话可以借鉴，就是强调 plug-and-play 的描述<br>"此外，GLAFF 作为一个模型无关且即插即用的框架，可以无缝与任何时间序列预测核心模块协同工作。"
>
> [Page 2](zotero://open-pdf/library/items/XD4VKTBE?page=2)


> [!quote|#2ea8e5] <mark style="background-color: #2ea8e5">Highlight</mark>
> Additionally, GLAFF serves as a model-agnostic and plug-and-play framework that can seamlessly collaborate with any time series forecasting backbone
>
>> 这句话可以借鉴，就是强调 plug-and-play 的描述<br>"此外，GLAFF 作为一个模型无关且即插即用的框架，可以无缝与任何时间序列预测核心模块协同工作。"
>
> [Page 2](zotero://open-pdf/library/items/XD4VKTBE?page=2)


%% Import Date: 2026-05-15T14:58:25.000+00:00 %%

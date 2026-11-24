---
Title: Tackling Time-Series Forecasting Generalization via Mitigating Concept Drift
Tags:
  - ICLR/2026
  - time-series-forecasting
  - concept-drift
  - distribution-shift
  - temporal-shift
ZoteroLink: zotero://open-pdf/library/items/EG2AMEFI
FirstAuthor: Zhao, Zhiyuan
Author: Liu, Haoxin; Prakash, B. Aditya;
Year: "2026"
ItemType: conferencePaper
Conference: The Fourteenth International Conference on Learning Representations
Citekey: zhao_TacklingTimeSeriesForecasting_2026
rating: 3
---
> [!info]
> **TLDR**:: To address overlooked concept drift and temporal shifts in time-series forecasting, this paper introduces ShifTS, a method-agnostic framework that mitigates temporal shifts first and then employs a soft attention mechanism to identify invariant patterns.

> [!cite]
> **Bibliography**:: Zhao, Z., Liu, H., & Prakash, B. A. (2026). Tackling Time-Series Forecasting Generalization via Mitigating Concept Drift. In _The Fourteenth International Conference on Learning Representations_.

> [!info]
> **Contribution**:: 

## Notes

- marginal probability distribution 发生变化: 本文中的 temporal drift，大概意思就是变量间关系没有改变，只是单个变量内的时间特征有所变化（比如上升变成了下降）
- conditional distribution 发生变化: 本文中的 concept drift，大概意思是变量间关系发生了改变

所以本文的动机还算是成立的，它说现有工作很少关注 concept drift，确实很少有工作会假设变量间关系发生了变化。

### Marginal Probability Distribution: The Behavior of a Single Variable
The marginal probability distribution describes how a single variable behaves on its own, ignoring any other variables.

> Temporal shift ... refers to phenomenon that the marginal probability distributions change over time, while the conditional distributions are the same.

(Zhao et al., 2026)

**Intuitive Example:** Imagine you are forecasting the price of a stock ($Y$). The "marginal distribution" of the stock price describes the stock's general behavior—its average price, volatility, and typical range—regardless of what else is happening in the market. If only the marginal distribution changes (Temporal Shift), it means the stock’s overall "personality" or trend has changed (e.g., it became more volatile or shifted to a higher price range), but the underlying rules connecting the stock to other factors remain consistent.

### Conditional Probability Distribution: The Relationship Between Variables
The conditional probability distribution describes how one variable behaves given that you already know the value of another variable. It captures the relationship or correlation between inputs (like exogenous features) and the target.

> Concept drift ... is the phenomenon where the conditional distributions change over time, while the marginal probability distributions are the same.

(Zhao et al., 2026)

**Intuitive Example:** Continuing with the stock example, let $X$ be the interest rate (an exogenous feature). The "conditional distribution" represents how the stock price ($Y$) reacts to changes in the interest rate ($X$). If the conditional distribution changes (Concept Drift), it means the **relationship** between interest rates and stock prices has broken or shifted. For instance, historically, higher interest rates might have led to lower stock prices, but due to concept drift, this correlation might reverse or weaken.

### Key Difference
The paper distinguishes these two types of distribution shifts as follows:

> The distribution shifts in time series can be categorized into two types ... First, the data distributions of the time series data themselves can change over time ... referred to as non-stationarity or temporal drift issues ... Second, time-series forecasting is compounded by unforeseen exogenous factors, which shifts the distribution of target time series. These types of phenomena, categorized as concept drift problems ...

(Zhao et al., 2026)

*   **Temporal Shift (Virtual Shift):** The input variables change their own statistical properties (e.g., mean, variance), but the rule linking them to the output remains the same.
*   **Concept Drift (Real Concept Drift):** The rule linking the inputs to the output changes over time, even if the inputs themselves look statistically similar. This is often harder to predict because the fundamental cause-and-effect relationship has shifted.

> Thus, modeling P (YH |XL, XH ) leads to a more stable conditional distribution compared to P (YH |XL), as [XL, XH ] captures additional causal relationships across future time steps.

(Zhao et al., 2026)

## Annotations


%% begin annotations %%
%% end annotations %%

%% Import Date: 2026-05-10T00:42:25.000+00:00 %%

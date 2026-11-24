---
Title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model"
Tags:
  - NeurIPS/2023
  - direct-preference-optimization
  - reward-modeling
  - large-language-model
  - preference-optimization
ZoteroLink: zotero://open-pdf/library/items/DYYXHGK7
FirstAuthor: Rafailov, Rafael
Author: Sharma, Archit; Mitchell, Eric; Manning, Christopher D.; Ermon, Stefano; Finn, Chelsea;
Year: "2023"
ItemType: journalArticle
Journal: Advances in Neural Information Processing Systems
Volume: "36"
Page: 53728-53741
Citekey: rafailov_DirectPreferenceOptimization_2023
rating: 3
---
> [!info]
> **TLDR**:: To address the complexity and instability of RLHF for aligning language models with human preferences, this paper introduces Direct Preference Optimization, which exactly solves the constrained reward maximization problem via a single-stage classification objective.

> [!cite]
> **Bibliography**:: Rafailov, R., Sharma, A., Mitchell, E., Manning, C. D., Ermon, S., & Finn, C. (2023). Direct Preference Optimization: Your Language Model is Secretly a Reward Model. _Advances in Neural Information Processing Systems_, _36_, 53728-53741.

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="9"><p>DPO</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> stable, performant, and computationally lightweight, eliminating the need for fitting a reward model, sampling from the LM during fine-tuning, or performing significant hyperparameter tuning
>
>> DPO的优点
>
> [Page 1](zotero://open-pdf/library/items/DYYXHGK7?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Existing methods for fine-tuning language models with human feedback first fit a reward model to a dataset of prompts and human preferences over pairs of responses, and then use RL to find a policy that maximizes the learned reward
>
> [Page 2](zotero://open-pdf/library/items/DYYXHGK7?page=2)


%% Import Date: 2026-05-12T01:51:00.000+00:00 %%

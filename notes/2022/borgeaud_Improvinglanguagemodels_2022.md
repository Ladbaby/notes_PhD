---
Title: Improving language models by retrieving from trillions of tokens
Tags:
  - arXiv/2022
  - retrieval-enhanced-generative-models
  - RETRO
  - language-models
  - retrieval-augmented-generation
  - parameter-efficient
ZoteroLink: zotero://open-pdf/library/items/KFHZXGRG
FirstAuthor: Borgeaud, Sebastian
Author: Mensch, Arthur; Hoffmann, Jordan; Cai, Trevor; Rutherford, Eliza; Millican, Katie; Driessche, George; Lespiau, Jean-Baptiste; Damoc, Bogdan; Clark, Aidan; Casas, Diego de Las; Guy, Aurelia; Menick, Jacob; Ring, Roman; Hennigan, Tom; Huang, Saffron; Maggiore, Loren; Jones, Chris; Cassirer, Albin; Brock, Andy; Paganini, Michela; Irving, Geoffrey; Vinyals, Oriol; Osindero, Simon; Simonyan, Karen; Rae, Jack W.; Elsen, Erich; Sifre, Laurent;
Year: "2022"
ItemType: article
Publisher: arXiv
DOI: 10.48550/arXiv.2112.04426
Citekey: borgeaud_Improvinglanguagemodels_2022
rating: 2
---
> [!info]
> **TLDR**:: To address the inefficiency of large language models in leveraging external knowledge, RETRO conditions auto-regressive generation on retrieved document chunks via a chunked cross-attention mechanism, achieving comparable performance with significantly fewer parameters.

> [!cite]
> **Bibliography**:: Borgeaud, S., Mensch, A., Hoffmann, J., Cai, T., Rutherford, E., Millican, K., Driessche, G., Lespiau, J., Damoc, B., Clark, A., Casas, D. d. L., Guy, A., Menick, J., Ring, R., Hennigan, T., Huang, S., Maggiore, L., Jones, C., Cassirer, A., … Sifre, L. (2022). Improving language models by retrieving from trillions of tokens. https://doi.org/10.48550/arXiv.2112.04426

> [!info]
> **Contribution**:: 

## Notes
>
>Comment: Fix incorrect reported numbers in Table 14.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> based on local similarity with preceding tokens.
>
> [Page 1](zotero://open-pdf/library/items/KFHZXGRG?page=1)

> [!quote|#a28ae5] <mark style="background-color: #a28ae5">Highlight</mark>
> granularity
>
>> 粒度
>
> [Page 3](zotero://open-pdf/library/items/KFHZXGRG?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Token likelihoods are provided by a model, parameterized by 𝜃, that takes as input both previous tokens and their retrieved neighbours.
>
> [Page 4](zotero://open-pdf/library/items/KFHZXGRG?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> 𝐿 ¹𝑋 j𝜃 Dº , 𝑙 ∑︁ 𝑢=1 𝑚 ∑︁ 𝑖=1  𝜃 𝑥¹𝑢 1º 𝑚 ̧𝑖 j ¹𝑥 𝑗º 𝑗¹𝑢 1º 𝑚 ̧𝑖 ¹ R e t D ¹𝐶𝑢0ºº𝑢0𝑢    (1)
>
> [Page 4](zotero://open-pdf/library/items/KFHZXGRG?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> 𝐿2 distance on BERT embeddings 𝑑¹𝐶 𝑁º = jjBe rt ¹𝐶º Be rt ¹𝑁ºjj22
>
> [Page 4](zotero://open-pdf/library/items/KFHZXGRG?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SCaNN library
>
> [Page 4](zotero://open-pdf/library/items/KFHZXGRG?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Performing retrieval on-the-fly is too slow to keep up with the training calculations—we leverage the frozen aspect of the embedding operator Bert to precompute all approximate nearest neighbours and save the results as part of the data
>
> [Page 4](zotero://open-pdf/library/items/KFHZXGRG?page=4)


%% Import Date: 2026-05-12T01:16:35.000+00:00 %%

---
Title: "Neural Markov Controlled SDE: Stochastic Optimization for Continuous-Time Data"
Tags:
  - ICLR/2022
  - stochastic-differential-equations
  - stochastic-optimal-control
  - continuous-time-models
  - probabilistic-models
ZoteroLink: zotero://open-pdf/library/items/2IPAPF6N
FirstAuthor: Park, Sung Woo
Author: Lee, Kyungjae; Kwon, Junseok;
Year: "2022"
ItemType: conferencePaper
Conference: International Conference on Learning Representations
Citekey: park_NeuralMarkovControlled_2022
rating: 2
---
> [!info]
> **TLDR**:: To overcome the structural limitations of conventional dynamical models for stochastic dynamics, this work introduces the neural Markov controlled SDE, leveraging Markov dynamic programming and multi-conditional forward-backward losses for efficient, theoretically optimal training and inference.

> [!cite]
> **Bibliography**:: Park, S. W., Lee, K., & Kwon, J. (2022). Neural Markov Controlled SDE: Stochastic Optimization for Continuous-Time Data. In _International Conference on Learning Representations_.

> [!info]
> **Contribution**:: 

## Notes
>
><div data-schema-version="8"><p>ICLR 2022</p>
</div>.

## Annotations


%% begin annotations %%
%% end annotations %%

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Markov dynamic programming to efficiently train the proposed CSDE and (2) multi-conditional forward-backward losses to provide information for accurate inference and to assure theoretical optimality.
>
> [Page 1](zotero://open-pdf/library/items/2IPAPF6N?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> stochastic optimal control theory
>
> [Page 1](zotero://open-pdf/library/items/2IPAPF6N?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> proposed CSDE incorporates Markov dynamic programming, enables our model to directly infer the complex trajectory on data space rather than the latent space without any extra network (e.g., encoders/decoders)
>
> [Page 1](zotero://open-pdf/library/items/2IPAPF6N?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We introduce a novel Markov forward conditional (MFcond) loss to utilize multi-conditioned dynamics instead of the conventional dynamics determined by partial initial conditions
>
> [Page 1](zotero://open-pdf/library/items/2IPAPF6N?page=1)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> where b and σ : [0, T ] × Rd × A → Rd are the drift and diffusion functions,
>
> [Page 2](zotero://open-pdf/library/items/2IPAPF6N?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We call this function temporal privacy (TP) because it represents each agent’s attention on different sub-intervals
>
> [Page 2](zotero://open-pdf/library/items/2IPAPF6N?page=2)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> While each agent αi is activated at its own private sub-interval, this leads our method to adopt dynamic programming (DP) to train Neural CSDEs in the form of (1)
>
> [Page 3](zotero://open-pdf/library/items/2IPAPF6N?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we aim to solve the stochastic optimal control problem by training control agents α = [α1, · · · , αM ] and minimizing the cost functional J(t, Xα t ) : [0, T ] × Rd → R+:
>
> [Page 3](zotero://open-pdf/library/items/2IPAPF6N?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Note that the expectation conditioned on Ft in (3) can be substituted to the expectation conditioned on Xα t in light of the Markov property presented in Section A.2, and the cost functional at time t only depends on the current state of the process Xα t.
>
> [Page 3](zotero://open-pdf/library/items/2IPAPF6N?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> one can show that a minimization problem can be recursively decomposed into sub-problems owing to the property of TP in our proposed CSDE
>
> [Page 3](zotero://open-pdf/library/items/2IPAPF6N?page=3)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we combine the Markov-DP with M gradient descent schemes in (5) and CSDE with TP in (1) and introduce a novel Markov-DP-TP framework
>
> [Page 4](zotero://open-pdf/library/items/2IPAPF6N?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> MFcond loss that can fully exploit the information of the given observed data y(·), while keeping the Markov structure of Xα t:
>
> [Page 4](zotero://open-pdf/library/items/2IPAPF6N?page=4)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> each control agent makes decisions on its specialized temporal state and collaborates to generate a stochastic conditional estimation ˆ Xα tk and approximate ˆ ytk
>
> [Page 5](zotero://open-pdf/library/items/2IPAPF6N?page=5)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> additional stochastic dynamics relating optimality of proposed CSDE-TP
>
> [Page 6](zotero://open-pdf/library/items/2IPAPF6N?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we approximate the auxiliary process Zt with Zα t parameterized by neural control agents α(·, ·, θ), which is defined as the modified version of Zt
>
> [Page 6](zotero://open-pdf/library/items/2IPAPF6N?page=6)

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> MBcond loss
>
> [Page 6](zotero://open-pdf/library/items/2IPAPF6N?page=6)


%% Import Date: 2026-05-12T01:00:11.000+00:00 %%

---
Title: Score-based Generative Modeling in Latent Space
Tags:
  - NeurIPS/2021
  - score-based-generative-models
  - latent-space
  - variational-autoencoder
  - diffusion-model
ZoteroLink: zotero://open-pdf/library/items/M4WGG6JB
FirstAuthor: Vahdat, Arash
Author: Kreis, Karsten; Kautz, Jan;
Year: 2021
ItemType: conferencePaper
Citekey: vahdat_ScorebasedGenerativeModeling_2021
motivation: 隐空间的扩散模型，有利于加速等
Publisher: Curran Associates, Inc.
Conference: Advances in Neural Information Processing Systems
Volume: 34
Page: 11287–11302
rating: 2
---
> [!info]
> **TLDR**:: To address the high computational cost of score-based generative models in data space, this paper introduces Latent Score-based Generative Models that train in a variational autoencoder latent space to enable faster sampling and support for non-continuous data.

> [!cite]
> **Bibliography**:: Vahdat, A., Kreis, K., & Kautz, J. (2021). Score-based Generative Modeling in Latent Space. _Advances in Neural Information Processing Systems_, _34_, 11287–11302.

> [!info]
> **Contribution**:: Latent Diffusion Model

![](Pasted%20image%2020231205170149.png)
## Notes
>
>Comment: NeurIPS 2021.

想法其实非常简单，就是先用 VAE 把 image 给 encode 了之后再拿去扩散，能大幅度提高速度

基于 Song Yang 那篇 ICLR 2021 的文章的模型，所以性能比那篇能更好点

## idea

attention->latent->diffusion

> 1 / 1
> 
> Can VAE take irregularly sampled time series as input, without interpolate the series to fill the missing values in advanced?

1 / 1

Variational Autoencoders (VAEs) are typically designed to work with fixed-size input data, and handling irregularly sampled time series without any preprocessing can be challenging. In their traditional form, VAEs expect input data to be represented as fixed-length vectors, and irregularly sampled time series can't be directly fed into them.

However, it is possible to adapt VAEs to work with irregularly sampled time series data. Here are a few approaches to consider:

1.  Time Series Interpolation: One common approach is to interpolate the time series to regularize the data and fill in the missing values. This allows you to use a standard VAE on regularly sampled data, but you'll need to be careful about choosing an appropriate interpolation method.
    
2.  Event-Based VAEs: If you want to work directly with irregularly sampled time series data, you can consider using an event-based VAE. In this approach, you treat each data point in your time series as an event with a timestamp and value. The VAE can then model the time series as a sequence of events, accommodating the irregular sampling. However, you'll need to develop specialized techniques to handle the variable time intervals between events.
    
3.  Temporal Attention Mechanisms: Another approach is to use temporal attention mechanisms in your VAE. These mechanisms can learn to weigh the importance of different time points based on the irregular sampling pattern. This allows the VAE to focus on relevant data points and downweight or ignore missing values.
    
4.  LSTM-VAE or RNN-VAE: You can use a VAE in combination with a recurrent neural network (RNN) or long short-term memory (LSTM) network to handle irregularly sampled time series. These networks are capable of processing sequences with varying time intervals, making them suitable for such data.
    
5.  Imputation Models: You can employ imputation models to predict missing values in irregularly sampled time series and then use the completed data as input to a standard VAE.
    

The choice of approach depends on the specific problem you're trying to solve and the nature of your data. Each of these approaches has its advantages and disadvantages, and you may need to experiment to determine which one works best for your particular use case.

> 1 / 1
> 
> I'm considering the task of irregular time series forecasting. My hypothesis is that, if I train a generative model, such that it firstly finish the imputation task, then it takes original as well as the imputed value as input to forecast, this model may be mislead by the possibly wrong imputation made by itself when forecasting. Does the hypothesis sound reasonable? If so, could using temporal attention instead of imputation before forecasting get better performance?

1 / 1

Your hypothesis is reasonable, and you've correctly identified a potential issue with using a generative model for irregular time series forecasting, which involves imputation followed by forecasting. Here are some considerations:

1.  **Potential for Imputation Errors**: If the imputation step of your generative model makes incorrect imputations, those errors can indeed propagate and negatively affect the forecasting step. The model may generate forecasts based on incorrect imputed values, which could lead to less accurate predictions.
    
2.  **Temporal Attention**: Using temporal attention mechanisms can be a viable alternative to traditional imputation. Temporal attention allows the model to focus on the relevant data points without explicitly filling in missing values. This approach can mitigate the risk of propagating imputation errors because the model doesn't make imputations in the first place.
    
3.  **End-to-End Models**: Another approach is to use end-to-end models that combine imputation and forecasting as a single task. These models are designed to simultaneously learn imputation and forecasting without a clear separation between the two steps. This can be a more effective approach when you have irregularly sampled time series data.
    
4.  **Hybrid Models**: A hybrid approach can also be beneficial. You can use temporal attention or recurrent neural networks to handle the irregular time series data and perform imputation and forecasting jointly. This way, the model can learn to impute values when necessary while focusing on forecasting the target variable.
    

In summary, your hypothesis is valid, and it's essential to consider the potential pitfalls of imputation in irregular time series forecasting. Using temporal attention or end-to-end models can help address this issue and potentially lead to better performance by allowing the model to focus on relevant information without making explicit imputations that might be prone to errors. The choice of approach should depend on the specific characteristics of your data and the performance you observe through experimentation.


## Annotations
%% begin annotations %%


### Imported: 2023-12-05 4:59 pm


> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Moving from data to latent space allows us to train more expressive generative models, apply SGMs to non-continuous data, and learn smoother SGMs in a smaller space, resulting in fewer network evaluations and faster sampling
>
> [Page 1](zotero://open-pdf/library/items/FME3JDXT?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> sampling from SGMs is computationally expensive
>
> [Page 1](zotero://open-pdf/library/items/FME3JDXT?page=1) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> SDE-based generative models are currently defined for continuous data and cannot be applied effortlessly to binary, categorical, or graph-structured data
>
> [Page 2](zotero://open-pdf/library/items/FME3JDXT?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> pretraining the VAE with a Normal prior first
>
> [Page 2](zotero://open-pdf/library/items/FME3JDXT?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> Consequently, the SGM only needs to model the remaining mismatch, resulting in a less complex model from which sampling becomes easier.
>
> [Page 2](zotero://open-pdf/library/items/FME3JDXT?page=2) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We can pretrain LSGM’s autoencoder networks assuming α=0, which corresponds to training the VAE with a standard Normal prior.
>
> [Page 4](zotero://open-pdf/library/items/FME3JDXT?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> we expect that the reverse SDE can be solved faster
>
> [Page 4](zotero://open-pdf/library/items/FME3JDXT?page=4) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> “variance preserving” SDEs
>
> [Page 5](zotero://open-pdf/library/items/FME3JDXT?page=5) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> We implement LSGM using the NVAE [20] architecture as VAE backbone and NCSN++ [2] as SGM backbone
>
> [Page 7](zotero://open-pdf/library/items/FME3JDXT?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> only feed the smallest resolution
>
> [Page 7](zotero://open-pdf/library/items/FME3JDXT?page=7) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> residual neural networks
>
> [Page 32](zotero://open-pdf/library/items/FME3JDXT?page=32) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> the number of latent variable groups
>
> [Page 32](zotero://open-pdf/library/items/FME3JDXT?page=32) 

> [!quote|#ffd400] <mark style="background-color: #ffd400">Highlight</mark>
> spatial resolution
>
> [Page 32](zotero://open-pdf/library/items/FME3JDXT?page=32) 



%% end annotations %%

%% Import Date: 2023-12-05T16:59:16.687+08:00 %%

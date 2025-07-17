---
{"dg-publish":true,"permalink":"/02-resources/notes/dezimal-binaer/","tags":["mathe/binärzahlen"],"noteIcon":"","updated":"2025-07-12T13:31:41.000+02:00"}
---

## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/dezimal-zu-binaer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Es gibt mehrere Möglichkeiten, aber oft wird das hier verwendet:

96 zu Binär

| Zahl  | :2  | Ergebnis | Rest |
| :---: | :-: | :------: | :--: |
|  96   | :2  |    48    |  0   |
|  48   | :2  |    24    |  0   |
|  24   | :2  |    12    |  0   |
|  12   | :2  |    6     |  0   |
|   6   | :2  |    3     |  0   |
|   3   | :2  |    1     |  1   |
|   1   | :2  |    1     |  1   |
| **0** |     |          |      |

Jetzt müssen wir den Rest **rückwärts** zählen.
D.h: **96** in Dezimal ist **1100000**

</div></div>



## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/binaer-zu-dezimal/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




**11001101**

Die Zahl **11001101** in Tabelle einsetzen 

| 2¹⁰ | 2⁹  | 2⁸  | 2⁷  | 2⁶  | 2⁵  | 2⁴  | 2³  | 2²  | 2¹  | 2⁰  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | --- | --- | --- | --- |
|     |     |     |  1  |  1  |  0  |  0  | 1   | 1   | 0   | 1   |

überall wo ein **1** steht summieren. D.h 
2⁰+2²+2³+2⁶+2⁷
1 + 4 + 8 + 64 + 128 = 205

 **11001101** = **205**

</div></div>
 

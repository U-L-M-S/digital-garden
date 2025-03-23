---
{"dg-publish":true,"permalink":"/02-resources/notes/binaerzahl/","tags":["mathe/binärzahlen"],"noteIcon":"","updated":"2025-03-23T01:59:20.738+01:00"}
---

>Es ist ein Zahlsystem, bei den man nur **Zwei** Zahlen benutzt (1 und 0). 

|     | -   |       |     |
| :-: | --- | :---: | :-: |
|  1  | -   | True  | ON  |
|  0  | -   | False | OFF |

___

| 2¹⁰  | 2⁹  | 2⁸  | 2⁷  | 2⁶  | 2⁵  | 2⁴  | 2³  | 2²  | 2¹  | 2⁰  |
|:----:|:---:|:---:|:---:|:---:|:---:|:---:| --- | --- | --- | --- |
| 1024 | 512 | 256 | 128 |  64  |  32  |  16  |   8  |  4   |   2  | 1   |

## System zur Angabe von Speichergröße
Wir wissen dass 8 [[02 - RESOURCES/Notes/Bit\|Bit]]s genau 1 [[02 - RESOURCES/Notes/Byte\|Byte]] entspricht.
>Es gibt aber anderer Zahlenbereichen, dieser lassen sich in zwei Gruppen unterscheide
### [[dezimale\|dezimale]]
[[Kylobyte\|Kylobyte]]
[[Megabyte\|Megabyte]]
[[Gigabyte\|Gigabyte]]
[[Terabyte\|Terabyte]]

[[Kibibyte\|Kibibyte]]
[[Mebibyte\|Mebibyte]]
[[Gibibyte\|Gibibyte]]
[[Tebibyte\|Tebibyte]]

## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/dezimal-binaer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/dezimal-binaer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/binaer-dezimal/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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
 


</div></div>
 

## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/hexadezimal-binaer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Im Hexadezimalsystem verwendet man 16 Ziffern:
>>**0–9** und **A–F** (A=10, B=11, C=12, D=13, E=14, F=15).

Jede Hexadezimalzahl kann direkt in [[02 - RESOURCES/Notes/Binärzahl\|Binär]] umgewandelt werden, da jede Hex-Ziffer genau 4 Bits entspricht:

|Hex|[[02 - RESOURCES/Notes/Binärzahl\|Binär]]|
|:-:|:-:|
|0|0000|
|1|0001|
|2|0010|
|3|0011|
|4|0100|
|5|0101|
|6|0110|
|7|0111|
|8|1000|
|9|1001|
|A|1010|
|B|1011|
|C|1100|
|D|1101|
|E|1110|
|F|1111|

## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/hexadezimal-binaer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Hex-Zahl: **2F**

Direkt umwandeln:

- 2 → **0010**
- F → **1111**

Also ist **2F** in Binär **00101111**.

</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/binaer-hexadezimal/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Binärzahl: **1101|0110**

4er-Blöcke bilden (von rechts nach links): **1101 0110**

Umwandeln:

- 1101 → **D**
- 0110 → **6**

Also ist **11010110** in Hexadezimal **D6**.

</div></div>
 


</div></div>

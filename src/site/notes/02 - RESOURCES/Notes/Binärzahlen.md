---
{"dg-publish":true,"permalink":"/02-resources/notes/binaerzahlen/","tags":["mathe/binärzahlen"],"noteIcon":""}
---

## Binärzahlen 
Es ist ein Zahlsystem, bei den man nur **Zwei** Zahlen benutzt (1 und 0). 

|     | -   |       |     |        
|:---:| --- |:-----:|:---:|
|  1  | -   | True  | ON  |
|  0  | -   | False | OFF |

___

| 2¹⁰  | 2⁹  | 2⁸  | 2⁷  | 2⁶  | 2⁵  | 2⁴  | 2³  | 2²  | 2¹  | 2⁰  |
|:----:|:---:|:---:|:---:|:---:|:---:|:---:| --- | --- | --- | --- |
| 1024 | 512 | 256 | 128 |  64  |  32  |  16  |   8  |  4   |   2  | 1   |


## Dezimal ↔ Binär 

### Dezimal -> Binär

Es gibt mehrere Möglichkeiten, aber die meisten benutzen die hier:

| Number | 2   | Result | Reminder |
| :------: | :---: | :------: | :----: |
| 96     | 2   | 48     | 0    |
| 48     | 2   | 24     | 0    |
| 24     | 2   | 12     | 0    |
| 12     | 2   | 6      | 0    |
| 6      | 2   | 3      | 0    |
| 3      | 2   | 1      | 1    |
| 1      | 2   | 1      | 1    |
| **0**       |     |        |      |

Jetzt müssen wir den Rest **rückwärts** zählen.
D.h: **96** in Dezimal ist **1100000**

### Binär -> Dezimal 
**11001101**
Die Zahl **11001101** in Tabelle einsetzen 

| 2¹⁰ | 2⁹  | 2⁸  | 2⁷  | 2⁶  | 2⁵  | 2⁴  | 2³  | 2²  | 2¹  | 2⁰  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:| --- | --- | --- | --- |
|     |     |     |  1   |  1   |   0  |   0  |   1  | 1   |  0   |   1  |

überall wo ein **1** steht summieren. D.h 
2⁰+2²+2³+2⁶+2⁷
1 + 4 + 8 + 64 + 128 = 205

 **11001101** = **205**

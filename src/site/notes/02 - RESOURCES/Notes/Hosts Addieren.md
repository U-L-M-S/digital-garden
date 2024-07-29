---
{"dg-publish":true,"permalink":"/02-resources/notes/hosts-addieren/","tags":["netzwerk/hostaddieren"],"noteIcon":"","updated":"2024-07-26T13:34:22.000+02:00"}
---

## Hosts Addieren 

Um Hosts zu addieren brauchst du die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] in [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]].

**255.255.255.0** -> 11111111.11111111.11111111.00000000 

Um mehrere [[00 - PROJECTS/Netzwerk\|Netzwerk]]en hinzufügen muss du ein Teil von den Host Bits ([[02 - RESOURCES/Notes/Netzanteil und Hostanteil#^099b19\|Netzanteil und Hostanteil#^099b19]]) nehmen.
Nehmen wir an du willst 4 Networks dazu machen.
Man muss erstmal die Standard Tabelle für Bits verdoppeln.

|          | -   | 2⁷  | 2⁶  | 2⁵  | 2⁴  | 2³  | 2²  | 2¹  | 2⁰  |
|:--------:| --- |:---:|:---:|:---:|:---:| :---: | :---: | :---: | :---: |
| Standard | -   | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
|    Networks    | -   | 256 | 128 | 64  | 32  | 16  | 8   | **4**   | 2   |


und jetzt schauen wie viel Bits man braucht um die zu erreichen

|     |     |     |     |     |     |  1   |  1   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 256 | 128 | 64  | 32  | 16  | 8   | **4**   | 2   | 

Also 2 Bits.
und jetzt muss man die Anzahl von Bits in die Host umflippen.

11111111.11111111.11111111.**00000000** ->  11111111.11111111.11111111.**11**000000 

und jetzt haben wir eine neue [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]].
Die lautet: **255.255.255.192**
und insgesamt haben wir /26 [[00 - PROJECTS/Netzwerk\|Netzwerk]]en.  
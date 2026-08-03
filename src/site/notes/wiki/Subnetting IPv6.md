---
{"dg-publish":true,"permalink":"/wiki/subnetting-i-pv6/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Subnetting IPv6","subnetting IPv6"],"created":"2024-07-30 11:31","links":null,"path":"Notes","tags":["informatik/netzwerk"]}}
---

>[[wiki/Subnetting IPv6\|Subnetting IPv6]] funktioniert genauso wie [[wiki/Subnetting IPv4\|Subnetting IPv4]]. Es hat aber ein paar Merkmale, auf die wir besonders achten müssen.
>>- [[02 - RESOURCES/Notes/IPv6\|IPv6]] hat keine [[wiki/Netz-ID\|Netz-ID]] oder [[wiki/Broadcast-ID\|Broadcast-ID]]
>>- Es hat keine [[Netzwerkmaske\|Netzwerkmaske]], sondern ein [[wiki/IPv6 Präfix\|IPv6 Präfix]], dieser ist /64.
>>- Bei [[wiki/Subnetting IPv4\|Subnetting IPv4]] wird ein Teil vom [[wiki/Hostanteil\|Hostanteil]] für das [[wiki/Subnetting\|Subnetting]] genommen, während bei [[wiki/IPv6\|IPv6]] das alles im [[wiki/Netzwerkpräfix\|Netzwerkpräfix]] passiert. 
>>- [[wiki/Subnetting\|Subnetting]] und [[wiki/Bit\|Bit]]s-Umsetzung passieren im [[wiki/IPv6 Präfix\|IPv6 Präfix]]-Bereich.
>>- [[wiki/IPv6\|IPv6]] ist nicht 32 [[wiki/Bit\|Bit]]s lang, sondern 128. 
>>  Daher ist es nur eine Folge von [[wiki/Bit\|Bit]]s, die in [[wiki/Hexadezimal\|Hexadezimal]] dargestellt sind.
>$$2^{128}$$



>[!example] Beispiel 1  
>FD00::/50 in 4 Subnetze  
>Lass uns erstmal prüfen mit welchen [[wiki/Bit\|Bit]]s wir arbeiten müssen.
>Jeder Block entspricht 16 [[wiki/Bit\|Bit]]s.
>$$50-48(\text{3 Blöcke})=2$$
>3 Blöcke + 2 [[wiki/Bit\|Bit]]s. Das heißt:
>
>
>|  <mark style="background: #BBFABBA6;">FD00</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #CACFD9A6;">0</mark>000 |
>| --- | --- | --- | --- |
>| 16     |  16   |  16    |  2   |
>
>Aktuell sieht das 4. Block so aus:
>><mark style="background: #CACFD9A6;">Das erste Ziffer ist nicht vollständig!</mark>
>
>|   0        0        0        0  |
>| :---: |
>|  <mark style="background: #BBFABBA6;">00</mark>00 0000 0000 0000   |
>
>
>Und jetzt müssen wir das [[wiki/IPv6 Präfix\|IPv6 Präfix]] erweitern mit 2 [[wiki/Bit\|Bit]]s (4 Subnetze ).
>>**Ja. Ganz genau! So wie bei [[wiki/Subnetting IPv4\|Subnetting IPv4]] ([[wiki/Bit\|Bit]]serweiterung), werden wir diese 2 [[wiki/Bit\|Bit]]s hier verwenden für die [[wiki/Subnetz\|Subnetz]]verteilung.** 
>
>$$2^{2}=4$$
>
>Das heißt:
>
>|  <mark style="background: #BBFABBA6;">FD00</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">0</mark>000 |
>| --- | --- | --- | --- |
>| 16     |  16   |  16    |  2+2   |
>
>>Wir wissen, dass jeder Block 16 [[wiki/Bit\|Bit]]s entspricht und somit entspricht jeder Ziffer 4 [[wiki/Bit\|Bit]]s
>
>Das alles bedeutet, dass das [[wiki/IPv6 Präfix\|IPv6 Präfix]] auf **FD00::/52** erweitert wurde, was unser erstes [[wiki/Subnetz\|Subnetz]] ergibt. 
>Genauer gesagt: FD00:0000:0000:0000:0000:0000:0000:0000/52.  
>Aber lass uns die Kurzform verwenden. 
>
>>#### Achtung
>>Vergiss bitte nicht, dass [[wiki/IPv6\|IPv6]] als [[wiki/Hexadezimal\|Hexadezimal]] dargestellt wird. D.h. das erste Ziffer in das 4. Block sich so verhält:
>>
>>I. [[wiki/Subnetz\|Subnetz]]
>>
>>|  0        0        0        0 |
>>| :---: |
>>| 0000  0000  0000  0000    |
>>
>>II. [[wiki/Subnetz\|Subnetz]]
>>
>>|  1        0        0        0 |
>>| :---: |
>>| 0001  0000  0000  0000    |
>>
>>III. [[wiki/Subnetz\|Subnetz]]
>>
>>|  2        0        0        0 |
>>| :---: |
>>| 0010  0000  0000  0000    |
>>
>>IV. [[wiki/Subnetz\|Subnetz]]
>>
>>|  3        0        0        0 |
>>| :---: |
>>| 0011  0000  0000  0000    |
>
> 
>
>I. [[wiki/Subnetz\|Subnetz]]: FD00::/52  
>II. [[wiki/Subnetz\|Subnetz]]: FD00:0:0:<mark style="background: #BBFABBA6;">1</mark>000::/52  
>III. [[wiki/Subnetz\|Subnetz]]: FD00:0:0:<mark style="background: #BBFABBA6;">2</mark>000::/52  
>IV. [[wiki/Subnetz\|Subnetz]]: FD00:0:0:<mark style="background: #BBFABBA6;">3</mark>000::/52


>[!tip] Yep. Super einfach, wenn man [[wiki/Subnetting IPv4\|Subnetting IPv4]] schon kann😉


>[!example] Beispiel 2
>FE80:0:3a:: /56 in 8 [[wiki/Subnetz\|Subnetz]]e
>Gleiche Schema wie vorher, lass uns  nachschauen mit welche [[wiki/Bit\|Bit]]/Block wir zutun haben.
>$$56-48(\text{3 Blöcke})=8$$
>3 Blocks und 8 Bits
>
>|  <mark style="background: #BBFABBA6;">FD00</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">003a</mark> | <mark style="background: #BBFABBA6;">00</mark>00 |
>| --- | --- | --- | --- |
>| 16     |  16   |  16    |  4+4   |
>
>und jetzt das [[wiki/IPv6 Präfix\|IPv6 Präfix]] um 3 [[wiki/Bit\|Bit]]s erweitern (8 [[wiki/Subnetz\|Subnetz]]e).
>$$2^{3}=8$$
>
>FE80:0:3A:: /59
>
>
>| <mark style="background: #BBFABBA6;">FE80</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">003a</mark> |   <mark style="background: #BBFABBA6;">0        0 </mark>       0        <mark style="background: #D2B3FFA6;">0</mark>  |
>| ---- | ---- | ---- | ----- |
>| 16   | 16   | 16   |  4         4         3 |
>| 16   | 32   | 48   | 52      56       59 |
>
>3. Ziffer von 4.Block:
>>Nochmal: Ich darf nur die zusätzlichen Bits verwenden; den Index 0 darf ich nicht anfassen.
>
>
>| 1110 |     |     |
>| ---- | --- | --- |
>| 0000 | >   | <mark style="background: #FFB86CA6;">0</mark>  |
>| 0010 | >   | <mark style="background: #FFB86CA6;">2</mark>  |
>| 0100 | >   | <mark style="background: #FFB86CA6;">4</mark>  |
>| 0110 | >   | <mark style="background: #FFB86CA6;">6</mark>   |
>| 1000 | >   | <mark style="background: #FFB86CA6;">8</mark>   |
>| 1010 | >   | <mark style="background: #FFB86CA6;">A</mark>   |
>| 1100 | >   | <mark style="background: #FFB86CA6;">C</mark>  |
>| 1110 | >   | <mark style="background: #FFB86CA6;">E</mark>   |
>
>I. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A::/59
>II. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">2</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>III. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">4</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>IV. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">6</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>V. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">8</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>VI. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">A</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>VII. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">C</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>VIII. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">E</mark><mark style="background: #D2B3FFA6;">0</mark>::/59

>[!example] Beispiel 3
>[[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]]: FE80:0:3A:: /59 
>In 8 Subnetze einteilen
>
>$$59=16-16-16=11$$
>3 Blöcke und 11 Bits
>
>>|  <mark style="background: #BBFABBA6;">FE80</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">003A</mark> | <mark style="background: #BBFABBA6;">00</mark>00 |
>| --- | --- | --- | --- |
>| 16     |  16   |  16    |  4+4+3   |
>
>4. Block  4 Ziffer:
>   
>| <mark style="background: #BBFABBA6;">FE80</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">003a</mark> |   <mark style="background: #BBFABBA6;">0        0 </mark>       0        <mark style="background: #D2B3FFA6;">0</mark>  |
>| ---- | ---- | ---- | ----- |
>| 16   | 16   | 16   |  4         4         3 |
>| 16   | 32   | 48   | 52      56       59 |
>
>8 [[wiki/Subnetz\|Subnetz]]
>$$2^{3}=8$$
>
>$$59+3=62$$
>
>| <mark style="background: #BBFABBA6;">FE80</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">003a</mark> |   <mark style="background: #BBFABBA6;">0        0 </mark>       <mark style="background: #D2B3FFA6;">0        0</mark>  |
>| ---- | ---- | ---- | ----- |
>| 16   | 16   | 16   |  4         4         3+1     2 |
>| 16   | 32   | 48   | 52      56       60       62 |
>
>
>><mark style="background: #D2B3FFA6;">0        0</mark>
>
>|xxx<mark style="background: #D2B3FFA6;">0</mark> | <mark style="background: #D2B3FFA6;">00</mark>xx |     |  [[wiki/Hexadezimal\|Hexadezimal]]   |
>| --- | --- | :---: | :---: |
>| 0000   |   0000  |    >    |   0   |
>| 0000    |    0100 |   >    |   4   |
>| 0000    |    1000 |   >    |   8   |
>| 0000    |   1100 |    >   |   C   |
>| 0001    |    0000 |    >   |   10   |
>| 0001    |    0100 |   >    |   14   |
>| 0001    |    1000 |   >    |   18   |
>| 0001    |    1100 |   >    |   1C   |
>
>I. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A::/62
>II. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:4::/62
>III. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:8::/62
>IV. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:C::/62
>V. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:10::/62
>VI. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:14::/62
>VII. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:18::/62
>VIII. [[wiki/Subnetz\|Subnetz]]: FE80:0:3A:1C::/62
>


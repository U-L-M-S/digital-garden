---
{"dg-publish":true,"permalink":"/02-resources/notes/subnetting-i-pv6/","tags":["informatik/netzwerk/subnetting","informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-09-10T16:35:37.431+02:00"}
---

>[[02 - RESOURCES/Notes/Subnetting IPv6\|Subnetting IPv6]]  funktioniert genaue wie bei [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]]. Es hat aber ein paar Merkmalen was wir besonders achten müssen.
>>- [[02 - RESOURCES/Notes/IPv6\|IPv6]] hat kein [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] oder [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]]
>>- Es hat kein [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]], sonder ein [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]], dieser ist /64.
>>- Bei [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]] wird ein Teil von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] genommen für die [[02 - RESOURCES/Notes/Subnetting\|Subnetting]], während bei [[02 - RESOURCES/Notes/IPv6\|IPv6]] passiert das alles in die in [[02 - RESOURCES/Notes/Netzwerkpräfix\|Netzwerkpräfix]]. 
>>- [[02 - RESOURCES/Notes/Subnetting\|Subnetting]] und [[02 - RESOURCES/Notes/Bit\|Bit]]s-Umsetzung passiert in die [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] Bereich.
>>- [[02 - RESOURCES/Notes/IPv6\|IPv6]] ist nicht 32 [[02 - RESOURCES/Notes/Bit\|Bit]]slang, sonder 128. 
>>  Daher es ist nur [[02 - RESOURCES/Notes/Bit\|Bit]]s-Zahlen, die in [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt sind.
>$$2^{128}$$



>[!example] Beispiel 1  
>FD00::/50 in 4 Subnetze  
>Lass uns erstmal prüfen mit welchen [[02 - RESOURCES/Notes/Bit\|Bit]]s wir arbeiten müssen.
>Jeder Block entspricht 16 [[02 - RESOURCES/Notes/Bit\|Bit]]s.
>$$50-48(\text{3 Blöcke})=2$$
>3 Blöcke + 2 [[02 - RESOURCES/Notes/Bit\|Bit]]s. Das heißt:
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
>Und jetzt müssen wir das [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] erweitern mit 2 [[02 - RESOURCES/Notes/Bit\|Bit]]s (4 Subnetze ).
>>**Ja. Ganz genau! So wie bei [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]] ([[02 - RESOURCES/Notes/Bit\|Bit]]serweiterung), werden wir diese 2 [[02 - RESOURCES/Notes/Bit\|Bit]]s hier verwenden für die [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]verteilung.** 
>
>$$2^{2}=4$$
>
>Das heißt:
>
>|  <mark style="background: #BBFABBA6;">FD00</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">0</mark>000 |
>| --- | --- | --- | --- |
>| 16     |  16   |  16    |  2+2   |
>
>>Wir wissen, dass jeder Block 16 [[02 - RESOURCES/Notes/Bit\|Bit]]s entspricht und somit entspricht jeder Ziffer 4 [[02 - RESOURCES/Notes/Bit\|Bit]]s
>
>Das alles bedeutet, dass das [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] auf **FD00::/52** erweitert wurde, was unser erstes [[02 - RESOURCES/Notes/Subnetz\|Subnetz]] ergibt. 
>Genauer gesagt: FD00:0000:0000:0000:0000:0000:0000:0000/52.  
>Aber lass uns die Kurzform verwenden. 
>
>>#### Achtung
>>Vergiss bitte nicht, dass [[02 - RESOURCES/Notes/IPv6\|IPv6]] als [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt wird. D.h. das erste Ziffer in das 4. Block sich so verhält:
>>
>>I. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]
>>
>>|  0        0        0        0 |
>>| :---: |
>>| 0000  0000  0000  0000    |
>>
>>II. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]
>>
>>|  1        0        0        0 |
>>| :---: |
>>| 0001  0000  0000  0000    |
>>
>>III. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]
>>
>>|  2        0        0        0 |
>>| :---: |
>>| 0010  0000  0000  0000    |
>>
>>IV. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]
>>
>>|  3        0        0        0 |
>>| :---: |
>>| 0011  0000  0000  0000    |
>
> 
>
>I. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FD00::/52  
>II. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FD00:0:0:<mark style="background: #BBFABBA6;">1</mark>000::/52  
>III. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FD00:0:0:<mark style="background: #BBFABBA6;">2</mark>000::/52  
>IV. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FD00:0:0:<mark style="background: #BBFABBA6;">3</mark>000::/52


>[!tip] Yep. Super einfach, wenn man [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]] schon kann😉


>[!example] Beispiel 2
>FE80:0:3a:: /56 in 8 [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e
>Gleiche Schema wie vorher, lass uns  nachschauen mit welche [[02 - RESOURCES/Notes/Bit\|Bit]]/Block wir zutun haben.
>$$56-48(\text{3 Blöcke})=8$$
>3 Blocks und 8 Bits
>
>|  <mark style="background: #BBFABBA6;">FD00</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">003a</mark> | <mark style="background: #BBFABBA6;">00</mark>00 |
>| --- | --- | --- | --- |
>| 16     |  16   |  16    |  4+4   |
>
>und jetzt das [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] um 3 [[02 - RESOURCES/Notes/Bit\|Bit]]s erweitern (8 [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e).
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
>I. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A::/59
>II. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">2</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>III. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">4</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>IV. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">6</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>V. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">8</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>VI. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">A</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>VII. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">C</mark><mark style="background: #D2B3FFA6;">0</mark>::/59
>VIII. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:<mark style="background: #FFB86CA6;">E</mark><mark style="background: #D2B3FFA6;">0</mark>::/59

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
>8 [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]
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
>|xxx<mark style="background: #D2B3FFA6;">0</mark> | <mark style="background: #D2B3FFA6;">00</mark>xx |     |  [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]]   |
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
>I. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A::/62
>II. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:4::/62
>III. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:8::/62
>IV. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:C::/62
>V. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:10::/62
>VI. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:14::/62
>VII. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:18::/62
>VIII. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: FE80:0:3A:1C::/62
>


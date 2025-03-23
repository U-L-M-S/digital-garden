---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv6/","tags":["netzwerk/ip/ipv6","GFN/prüfungsrelevant/AP1"],"noteIcon":"","updated":"2025-03-23T21:32:24.162+01:00"}
---

>128-[[02 - RESOURCES/Notes/Bit\|bit]]-[[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en, die in [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt werden und 
>mit "**:**" getrennt sind( 8 Gruppen) und es wird als [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt.
>
>Jeder **Block** ist 16 [[02 - RESOURCES/Notes/Bit\|Bit]]-Lang und bei [[02 - RESOURCES/Notes/IPv6\|IPv6]] gibt's kein [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] oder [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] sowie bei [[02 - RESOURCES/Notes/IPv4\|IPv4]], sonder ein [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] (**/64**) und dieser hat das selbe Aufgabe wie der [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] bei [[02 - RESOURCES/Notes/IPv4\|IPv4]].
>
>$$2^{128}$$
>>Es ist der Nachfolger von [[02 - RESOURCES/Notes/IPv4\|IPv4]].


```
2001:0db8:85a3:0000:0000:8a2e:0000:7334
```

|          2001          |          0db8          |          85a3          |          0000          |          0000          |          8a2e          |          0370          |          7334          |
| :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
| 0010\|0000\|0000\|0001 | 0000\|1101\|1110\|1000 | 1000\|0101\|1010\|0011 | 0000\|0000\|0000\|0000 | 0000\|0000\|0000\|0000 | 1000\|1010\|0010\|1110 | 0000\|0011\|0111\|0000 | 0111\|0011\|0011\|0100 |

>Ich habe jeder 4. Bit getrennt (|) damit man es besser erkennen kann.
>Es ist einfacherer [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] zu [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]] umzuwandeln als zu [[02 - RESOURCES/Notes/Dezimal\|Dezimal]].

>[!important]  
Da [[02 - RESOURCES/Notes/IPv6\|IPv6]] lang ist, wurden bestimmte Regeln eingesetzt, um ihn lesbar zu machen. Bei diesen Regeln wird nur die [[02 - RESOURCES/Notes/IPv6-Verkürzung\|IPv6-Verkürzung]] verwendet.

>[!note] 
>Es immer wichtig auf die ersten [[02 - RESOURCES/Notes/Bit\|Bit]]s von [[02 - RESOURCES/Notes/IPv6\|IPv6]] zu achten. Da man es erkennen kann welche Art von Adresse es sich handelt.

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-adressen/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> [[02 - RESOURCES/Notes/IPv6\|IPv6]] verwendet keine Klassen wie bei [[02 - RESOURCES/Notes/IPv4\|IPv4]] ([[02 - RESOURCES/Notes/IPv4-Klassennetze\|IPv4-Klassennetze]]).
> Sonder, es verwendet 3 Arten von Adressen und jeder Adresse ist für irgendwas bestimmt.


>[!note]Adressenarten  
Man kann erkennen, um welche Art von Adresse es sich handelt, 
indem man die ersten Bits der Adresse betrachtet.


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-public/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Für die Kommunikation zwischen [[02 - RESOURCES/Notes/Router\|Router]] und [[02 - RESOURCES/Notes/Internet\|Internet]]. Beginnt mit **2000::/3**.
>> Kann [[02 - RESOURCES/Notes/Unicast\|Unicast]] oder [[02 - RESOURCES/Notes/Anycast\|Anycast]] sein. **Beispiel**: `2001:db8::1` könnte eine öffentliche Adresse eines Webservers sein, die für den Zugriff über das Internet verwendet wird.


</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-private/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





> Für die Kommunikation innerhalb eines Netzwerks. 
> Hinter dem [[02 - RESOURCES/Notes/Router\|Router]].

## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-link-local-adresse/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> Beginnt mit **FE80::/10**. Ist [[02 - RESOURCES/Notes/Unicast\|Unicast]] und nur im lokalen Netzwerk verwendbar. **Beispiel**: `fe80::1` könnte eine Adresse eines Geräts innerhalb eines lokalen Netzwerks sein, wie ein Drucker oder ein Computer, der nur für lokale Kommunikation genutzt wird.

</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-unique-local-adresse/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> Beginnt mit **FC00::/7**. Ist [[02 - RESOURCES/Notes/Unicast\|Unicast]] und für lokale Netzwerke bestimmt, ähnlich wie private IPv4-Adressen. **Beispiel**: `fc00::1234:5678:9abc:def0` könnte eine Adresse eines internen Servers in einem Unternehmensnetzwerk sein, der nicht von außen erreichbar ist.

</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/i-pv6-multicast/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> Für die Kommunikation mit mehreren Empfängern gleichzeitig. Beginnt mit **FF00::/8**. Kann in verschiedenen Bereichen wie Link-Local, Site-Local oder Global verwendet werden. **Beispiel**: `ff02::1` ist eine Link-Local Multicast-Adresse, die alle Geräte im lokalen Netzwerksegment anspricht, z.B. für Netzwerk-Discovery-Protokolle oder automatische Geräteerkennung.


</div></div>


</div></div>



</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/subnetting-i-pv6/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>[[02 - RESOURCES/Notes/Subnetting IPv6\|Subnetting IPv6]]  funktioniert genaue wie bei [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]]. Es hat aber ein paar Merkmalen was wir besonders achten müssen.
>>- [[02 - RESOURCES/Notes/IPv6\|IPv6]] hat kein [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] oder [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]]
>>- Es hat kein [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]], sonder ein [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]], dieser ist /64.
>>- Bei [[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]] wird ein Teil von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] genommen für die [[02 - RESOURCES/Notes/Subnetting\|Subnetting]], während bei [[02 - RESOURCES/Notes/IPv6\|IPv6]] passiert das alles in die in [[02 - RESOURCES/Notes/Netzwerkpräfix\|Netzwerkpräfix]]. 
>>- [[02 - RESOURCES/Notes/Subnetting\|Subnetting]] und [[02 - RESOURCES/Notes/Bit\|Bit]]s-Umsetzung passiert in die [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] Bereich.
>>- [[02 - RESOURCES/Notes/IPv6\|IPv6]] ist nicht 32 [[02 - RESOURCES/Notes/Bit\|Bit]]slang, sonder 128. 
>>  Daher es ist nur [[02 - RESOURCES/Notes/Bit\|Bit]]s-Zahlen, die in [[02 - RESOURCES/Notes/Hexadezimal\|Hexadezimal]] dargestellt sind.
>$2^{128}$



>[!example] Beispiel 1  
>FD00::/50 in 4 Subnetze  
>Lass uns erstmal prüfen mit welchen [[02 - RESOURCES/Notes/Bit\|Bit]]s wir arbeiten müssen.
>Jeder Block entspricht 16 [[02 - RESOURCES/Notes/Bit\|Bit]]s.
>$50-16-16-16=2$
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
>$2^{2}=4$
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
>$56-16-16-16=8$
>3 Blocks und 8 Bits
>
>|  <mark style="background: #BBFABBA6;">FD00</mark> | <mark style="background: #BBFABBA6;">0000</mark> | <mark style="background: #BBFABBA6;">003a</mark> | <mark style="background: #BBFABBA6;">00</mark>00 |
>| --- | --- | --- | --- |
>| 16     |  16   |  16    |  4+4   |
>
>und jetzt das [[02 - RESOURCES/Notes/IPv6 Präfix\|IPv6 Präfix]] um 3 [[02 - RESOURCES/Notes/Bit\|Bit]]s erweitern (8 [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e).
>$2^{3}=8$
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
>$59=16-16-16=11$
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
>$2^{3}=8$
>
>$59+3=62$
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



</div></div>

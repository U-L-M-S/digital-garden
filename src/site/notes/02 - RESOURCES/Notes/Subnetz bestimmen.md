---
{"dg-publish":true,"permalink":"/02-resources/notes/subnetz-bestimmen/","tags":["netzwerk/subnetting","netzwerk/ip/ipv4"],"noteIcon":"","updated":"2025-07-12T13:31:41.317+02:00"}
---

> Nehmen wir an, du hast eine [[02 - RESOURCES/Notes/IPv4\|IPv4]] und [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] erhalten und musst nun das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] in 12 gleich große [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e unterteilen. Gefragt sind die 7. [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]].  
> Natürlich kannst du eine Tabelle erstellen und alle Werte bis zur 7. [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] eintragen.

> [!example]  Beispiel 1 - Einfach
> Gegeben: 192.152.0.0/24. 
> Teile dieses [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] in 12 gleich große [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e auf. Gib die [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] des 7. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]es an.
> 
> Erstens müssen wir den [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] um 4 Bits erweitern.  
> $$2^{4}=16$$  
> 192.152.0.0/28
>
>|   Dezimal   | >   | 1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 3. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e |
>| :---------: | --- | :------------: | :------------: | :------------: | -------------- |
>| 192.152.0.0 | >   |    11000000    |    10011000    |    00000001    | 00000100       |
>| 255.255.192.0 | >   |    11111111    |    11111111    |    11111111    | 1111<mark style="background: #BBFABBA6;">0000</mark>      |
>
> Jetzt müssen wir mit [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en arbeiten.  
> ID1-><mark style="background: #BBFABBA6;">0000</mark>  
> ID2->0001  
> ID3->0010  
> ID4->0011  
> ID5->0100  
> ID6->0101  
> ID7-><mark style="background: #D2B3FFA6;">0110</mark>
> 
> Und jetzt müssen wir die 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]-Stellen mit Nullen ergänzen.  
> <mark style="background: #D2B3FFA6;">0110</mark>0000 --[[02 - RESOURCES/Notes/Dezimal\|Dezimal]]--> 96
> 
> Okay, jetzt wissen wir, dass die 7. [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] 192.152.0.<mark style="background: #D2B3FFA6;">96</mark> ist.
> 
> Es fehlt nur noch die [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]].  
> Diese können wir einfach mit zwei Methoden herausfinden:
> 
> Methode I: Diese erhalten wir, indem wir 28 - 32 = 4 berechnen.  
> $$2^{4}=16$$  
> 96 + 16 Adressen = 111
> 
> Methode II: Oder <mark style="background: #D2B3FFA6;">0110</mark>0000 --[[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] auf 1 setzen --> <mark style="background: #D2B3FFA6;">0110</mark>1111 --[[02 - RESOURCES/Notes/Dezimal\|Dezimal]]--> 111
> 
> [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] 7: 192.152.0.96  
> [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 7: 192.152.0.111


>[!example] Beispiel 2 - Extrem
>Gegeben: 14.0.0.0/8 
>Teile dieses [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] in 268 gleich große [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e auf. Gib die [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] des 158. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]es an.
>
>>Wir könnten das tabellarisch lösen, es würde jedoch viel zu viel Zeit in Anspruch nehmen.
>>Dafür gibt es einen Algorithmus.
>>Es sieht so aus:
>
>Lass uns das [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]  in Binär umwandeln und $2^{\text{nötigeBits}}$ erweitern:
>255.0.0.0 > 11111111.00000000.00000000.00000000
>>$$2^{9}=512$$
>[[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] 9 [[02 - RESOURCES/Notes/Bit\|Bit]]s erweitern.
>11111111.00000000.00000000.00000000 > 11111111.11111111.10000000.00000000
>
>Jetzt müssen wir die gewünschte [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] in Binär umstellen.
>>158 > 10011110
>
>und diese in die  [[02 - RESOURCES/Notes/IPv4\|IPv4]] ( als Binär) einsetzen,  wo die erweiterte<mark style="background: #FFF3A3A6;"> [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] </mark>relevant ist (von hinten nach vorne).
>>14.0.0.0 > 00001110.00000000.00000000.00000000
>
>
>|  00001110   | <mark style="background: #FFF3A3A6;">00000000</mark>    |  <mark style="background: #FFF3A3A6;">0</mark>0000000   |  00000000   |
>| --- | ---: | --- | --- |
>|     |  1001111   |  0   |     |
>
>00001110.X1001111.00000000.00000000
>
>>Es ist dir sicherlich aufgefallen, dass 158 (10011110) nicht alle Bits abdecken kann.
>>Daher habe ich ein X eingesetzt, wo es nicht passen kann. 
>>Dieses X muss man mit Nullen (0) auffüllen, und schon hat man die [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]].
>
>00001110.01001111.00000000.00000000
>14.79.0.0
>
>Und schon können wir erkennen, dass 14.79.0.0 die [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] ist.
>Um die Broadcast-Adresse zu ermitteln, müssen wir alle Nullen durch Einsen ersetzen.
>>#### Achtung
>> <mark style="background: #FFF3A3A6;">[[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]</mark> bitte nicht vergessen!!
>
><mark style="background: #FFF3A3A6;">00001110.01001111.0</mark>1111111.11111111
>14.79.127.255
>
>[[02 - RESOURCES/Notes/Subnetz\|Subnetz]]: 158
>[[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]]: 14.79.0.0
>[[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]]: 14.79.127.255

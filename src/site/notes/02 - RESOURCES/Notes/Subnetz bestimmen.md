---
{"dg-publish":true,"permalink":"/02-resources/notes/subnetz-bestimmen/","tags":["netzwerk/subnetting","netzwerk/ip/ipv4"],"noteIcon":""}
---

> Nehmen wir an, du hast eine [[02 - RESOURCES/Notes/IP\|IP]] und [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] erhalten und musst nun das [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] in 12 gleich große [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e unterteilen. Gefragt sind die 7. [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]].  
> Natürlich kannst du eine Tabelle erstellen und alle Werte bis zur 7. [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] eintragen.

> [!example]  Beispiel 1 - Einfach
> Gegeben: 192.152.0.0/24. 
> Teile dieses [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] in 12 gleich große [[Subnetze\|Subnetze]] auf. Gib die [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] des 7. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]es an.
> 
> Erstens müssen wir den [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] um 4 Bits erweitern.  
> 24=162^{4}=1624=16  
> 192.152.0.0/28
> 
> Jetzt müssen wir mit [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en arbeiten.  
> ID1->0000  
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
>Teile dieses [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] in 268 gleich große [[Subnetze\|Subnetze]] auf. Gib die [[02 - RESOURCES/Notes/Netz-ID\|Netz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] des 158. [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]es an.
>
>>Wir könnte das Tabellarisch lösen, es wurde aber viel zu viel Zeit benötigen.
>>Dafür gibt es ein Algorithmus.
>>Es sieht so aus:
>
>Lass uns das [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]  in Binär umwandeln und diese erweitern:
>255.0.0.0 > 11111111.00000000.00000000.00000000
>>$$2^{9}=512$$
>[[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] 9 [[02 - RESOURCES/Notes/Bit\|Bit]]s erweitern.
>11111111.00000000.00000000.00000000 > 11111111.11111111.10000000.00000000
>

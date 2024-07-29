---
{"dg-publish":true,"permalink":"/02-resources/notes/subnetz-bestimmen/","tags":["netzwerk/subnetting","netzwerk/ip/ipv4"],"noteIcon":"","updated":"2024-07-29T22:10:01.529+02:00"}
---

> Nehmen wir an, du hast eine [[02 - RESOURCES/Notes/IP\|IP]] und [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] erhalten und musst nun das [[00 - PROJECTS/Netzwerk\|Netzwerk]] in 12 gleich große [[Subnetze\|Subnetze]] unterteilen. Gefragt sind die 7. [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]].  
> Natürlich kannst du eine Tabelle erstellen und alle Werte bis zur 7. [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] eintragen.

> [!Beispiel]  
> Gegeben: 192.152.0.0/24. Teile dieses [[00 - PROJECTS/Netzwerk\|Netzwerk]] in 12 gleich große [[Subnetze\|Subnetze]] auf. Gib die [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] des 7. [[Subnetzes\|Subnetzes]] an.
> 
> Erstens müssen wir den [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] um 4 Bits erweitern.  
> 24=162^{4}=1624=16  
> 192.152.0.0/28
> 
> Jetzt müssen wir mit [[02 - RESOURCES/Notes/Binärzahlen\|Binärzahlen]] arbeiten.  
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
> Okay, jetzt wissen wir, dass die 7. [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] 192.152.0.<mark style="background: #D2B3FFA6;">96</mark> ist.
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
> [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] 7: 192.152.0.96  
> [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 7: 192.152.0.111
---
{"dg-publish":true,"permalink":"/02-resources/notes/netzwerk-unterteilen/","tags":["netzwerk/subnetting","netzwerk/ip/ipv4"],"noteIcon":""}
---

>Bei [[02 - RESOURCES/Notes/Subnetting\|Subnetting]], man kann die [[00 - PROJECTS/Netzwerk\|Netzwerk]]en nach Belieben umstellen.
>Oft wird jedoch verlangt, diese in kleinere, gleich große Subnetze zu unterteilen.


>[!example] Bsp [[02 - RESOURCES/Notes/Netzwerk unterteilen\|Netzwerk unterteilen]] in 4 Subnetze
>Gegeben ist: 192.168.0.101/24
>-> Teil dieses Netzwerk in 4 gleiche [[02 - RESOURCES/Notes/Subnetz\|Subnetz]]e auf.
>
>Erstens, lassen Sie uns die [[02 - RESOURCES/Notes/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]].
>24 = 8+8+8. D.h die ersten 3 [[02 - RESOURCES/Notes/Oktett\|Oktett]]e bleiben gleich und alles danach wird auf 0 gesetzt.
>-> **192.168.0.0**
>Jetzt müssen wir wissen wie viele [[02 - RESOURCES/Notes/Bit\|Bit]]s von [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] wir erweitern müssen.
>Da wir 4 Subnetzen benötigen ([[02 - RESOURCES/Notes/Netzanteil erweitern\|Netzanteil erweitern]]) können wir einfach in Kopf rechen ($2^{2}=4$). Also 2 [[02 - RESOURCES/Notes/Bit\|Bit]]s
>-> **/24 + /2 = /26**
>Sobald wir wissen, dass wir nur 6 [[02 - RESOURCES/Notes/Bit\|Bit]]s (32 - 26) zu verfügen haben. 
>Können wir sagen, dass wir $2^{6}=64$ [[02 - RESOURCES/Notes/IP\|IP]]s für jede Subnetze haben und somit die erste [[02 - RESOURCES/Notes/Subnetz-ID\|Subnetz-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] sagen.
>I - **192.168.0.0 bis 192.168.0.63** | 64 [[02 - RESOURCES/Notes/IP\|IP]]s
>(Für die nächste Subnetz, muss man nur die [[02 - RESOURCES/Notes/IP\|IP]]s (64) zusammen zählen.) 
>II - **192.168.0.64 bis 192.168.0.127** | 64 [[02 - RESOURCES/Notes/IP\|IP]]s
>III - **192.168.0.128 bis 192.168.0.191** | 64 [[02 - RESOURCES/Notes/IP\|IP]]s
>IV - **192.168.0.192 bis 192.168.0.255** | 64 [[02 - RESOURCES/Notes/IP\|IP]]s 
>
>___
>
>Wenn das zu unübersichtlich ist, man kann es auch Tabellarisch darstellen:
>
>
>|                                         |          |          |          |          |     |     |
>| --------------------------------------- | -------- | -------- | -------- | -------- | --- | --- |
>| [[02 - RESOURCES/Notes/IP\|IP]]: 192.168.0.0                     | 11000000 | 10101000 | 00000000 | 00000000 |     |     |
>| [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]: 255.255.255.192(/26) | 11111111 | 11111111 | 11111111 | 11000000 |     |     |
>| [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] 1                       | 11000000 | 10101000 | 00000000 | 00000000 | >   | 0   |
>| [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 1                      | 11000000 | 10101000 | 00000000 | 00111111 | >   | 63  |
>| [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] 2                       | 11000000 | 10101000 | 00000000 | 01000000 | >   | 64  |
>| [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 2                      | 11000000 | 10101000 | 00000000 | 01111111 | >   | 127 |
>| [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] 3                       | 11000000 | 10101000 | 00000000 | 10000000 | >   | 128 |
>| [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 3                      | 11000000 | 10101000 | 00000000 | 10111111 | >   | 191 |
>| [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] 4                       | 11000000 | 10101000 | 00000000 | 11000000 | >   | 192 |
>| [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 4                      | 11000000 | 10101000 | 00000000 | 11111111 | >   | 255 |
>
>Achte auf die ersten 2 [[02 - RESOURCES/Notes/Bit\|Bit]]s des 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]s!



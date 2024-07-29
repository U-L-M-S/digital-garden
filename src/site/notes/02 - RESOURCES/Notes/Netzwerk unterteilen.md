---
{"dg-publish":true,"permalink":"/02-resources/notes/netzwerk-unterteilen/","tags":["netzwerk/subnetting","netzwerk/ip/ipv4"],"noteIcon":"","updated":"2024-07-29T17:56:29.551+02:00"}
---

>Bei [[02 - RESOURCES/Notes/Subnetting\|Subnetting]], man kann die [[00 - PROJECTS/Netzwerk\|Netzwerk]]en umstellen wie man möchten.
>Aber oft wird man gefragt diese, in kleinere gleiche Subnetze zu unterteilen.

>[!example] Bsp [[02 - RESOURCES/Notes/Netzwerk unterteilen\|Netzwerk unterteilen]] in 4 Subnetze
>Gegeben ist: 192.168.0.101/24
>-> Teil diese Netzwerk in 4 gleichen Subnetzen auf.
>
>Erstens lass uns den [[02 - RESOURCES/Notes/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]].
>24 = 8+8+8. D.h die ersten 3 [[02 - RESOURCES/Notes/Oktett\|Oktett]]e bleiben gleich und alles danach wird auf 0 gesetzt.
>-> **192.168.0.0**
>Jetzt müssen wir wissen wie viele [[02 - RESOURCES/Notes/Bit\|Bit]]s von [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] wir erweitern müssen.
>Da wir 4 Subnetzen brauchen ([[02 - RESOURCES/Notes/Netzanteil erweitern\|Netzanteil erweitern]]) können wir einfach in Kopf rechen ($2^{2}=4$). Also 2 [[02 - RESOURCES/Notes/Bit\|Bit]]s
>-> **/24 + /2 = /26**
>Sobald wir wissen, dass wir nur 6 [[02 - RESOURCES/Notes/Bit\|Bit]]s (32 - 26) zu verfügen haben. 
>Können wir sagen, dass wir $2^{6}=64$ [[02 - RESOURCES/Notes/IP\|IP]]s für Subnetze haben und somit die erste Subnetz-ID und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] sagen.
>I - **192.168.0.0 bis 192.168.0.63** | 64 [[02 - RESOURCES/Notes/IP\|IP]]s
>(Für die nächste Subnetz, muss man nur die [[02 - RESOURCES/Notes/IP\|IP]]s (64) zusammen zählen.) 
>II - **192.168.0.64 bis 192.168.0.127** | 64 [[02 - RESOURCES/Notes/IP\|IP]]s
>III - **192.168.0.128 bis 192.168.0.191** | 64 [[02 - RESOURCES/Notes/IP\|IP]]s
>IV - **192.168.0.192 bis 192.168.0.255** | 64 [[02 - RESOURCES/Notes/IP\|IP]]s 
>
>___
>
>Wenn das zu übersichtig ist, man kann es auch Tabellarisch darstellen.
>
>


|                                          |          |          |          |          |
| ---------------------------------------- | -------- | -------- | -------- | -------- |
| [[02 - RESOURCES/Notes/IP\|IP]]: 192.168.0.0                      | 11000000 | 10101000 | 00000000 | 00000000 |
| [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]: 255.255.255.192 (/26) | 11111111 | 11111111 | 11111111 | 11000000 |
| [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] 1                        | 11000000 | 10101000 | 00000000 | 00000000 |
| [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 1                       | 11000000 | 10101000 | 00000000 | 00111111 |
| [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] 2                        | 11000000 | 10101000 | 00000000 |          |
| [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]] 2                       |          |          |          |          |




---
{"dg-publish":true,"permalink":"/wiki/netzwerk-unterteilen/","tags":["informatik/netzwerk/subnetting","informatik/netzwerk/ip/ipv4"],"noteIcon":"","updated":"2026-05-12T16:14:30.021+02:00","dg-note-properties":{"aliases":["Netzwerk unterteilen","netzwerk unterteilen","netz unterteilen","Netz unterteilen","Subnetz unterteilen"],"created":"2024-07-29 14:23","links":null,"path":"Notes","tags":["informatik/netzwerk/subnetting","informatik/netzwerk/ip/ipv4"]}}
---

>Bei [[wiki/Subnetting\|Subnetting]] kann man die [[wiki/Netzwerk\|Netzwerk]]en umstellen, wie man möchte.
>Aber oft wird man gefragt, diese in kleinere <mark style="background: #D2B3FFA6;">gleiche</mark> Subnetze zu unterteilen.

>[!example] Bsp [[wiki/Netzwerk unterteilen\|Netzwerk unterteilen]] in 4 Subnetze
>Gegeben ist: 192.168.0.101/24
>-> Teile dieses Netzwerk in 4 gleiche Subnetze auf.
>
>Erstens lass uns den [[wiki/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]].
>24 = 8+8+8. D.h die ersten 3 [[wiki/Oktett\|Oktett]]e bleiben gleich und alles danach wird auf 0 gesetzt.
>-> **192.168.0.0**
>Jetzt müssen wir wissen wie viele [[wiki/Bit\|Bit]]s von [[wiki/Netzanteil\|Netzanteil]] wir erweitern müssen.
>Da wir 4 Subnetze brauchen ([[wiki/Netzanteil erweitern\|Netzanteil erweitern]]), können wir einfach im Kopf rechnen ($2^{2}=4$). Also 2 [[wiki/Bit\|Bit]]s
>-> **/24 + /2 = /26**
>Sobald wir wissen, dass wir nur 6 [[wiki/Bit\|Bit]]s (32 - 26) zur Verfügung haben. 
>Können wir sagen, dass wir $2^{6}=64$ [[wiki/IPv4\|IPv4]]s für Subnetze haben und somit die erste Subnetz-ID und [[wiki/Broadcast-ID\|Broadcast-ID]] sagen.
>I - **192.168.0.0 bis 192.168.0.63** | 64 [[wiki/IPv4\|IPv4]]s
>(Für das nächste Subnetz muss man nur die [[wiki/IPv4\|IPv4]]s (64) zusammenzählen.) 
>II - **192.168.0.64 bis 192.168.0.127** | 64 [[wiki/IPv4\|IPv4]]s
>III - **192.168.0.128 bis 192.168.0.191** | 64 [[wiki/IPv4\|IPv4]]s
>IV - **192.168.0.192 bis 192.168.0.255** | 64 [[wiki/IPv4\|IPv4]]s 
>
>___
>
>Wenn das zu unübersichtlich ist, kann man es auch tabellarisch darstellen.
>
>


|                                          |          |          |          |          |     |     |
| ---------------------------------------- | -------- | -------- | -------- | -------- | --- | --- |
| [[wiki/IPv4\|IPv4]]: 192.168.0.0                    | 11000000 | 10101000 | 00000000 | 00000000 |     |     |
| [[Netzwerkmaske\|Netzwerkmaske]]: 255.255.255.192 (/26) | 11111111 | 11111111 | 11111111 | 11000000 |     |     |
| [[wiki/Netz-ID\|Netz-ID]] 1                            | 11000000 | 10101000 | 00000000 | 00000000 | >   | 0   |
| [[wiki/Broadcast-ID\|Broadcast-ID]] 1                       | 11000000 | 10101000 | 00000000 | 00111111 | >   | 63  |
| [[wiki/Netz-ID\|Netz-ID]] 2                            | 11000000 | 10101000 | 00000000 | 01000000 | >   | 64  |
| [[wiki/Broadcast-ID\|Broadcast-ID]] 2                       | 11000000 | 10101000 | 00000000 | 01111111 | >   | 127 |
| [[wiki/Netz-ID\|Netz-ID]] 3                            | 11000000 | 10101000 | 00000000 | 10000000 | >   | 128 |
| [[wiki/Broadcast-ID\|Broadcast-ID]] 3                       | 11000000 | 10101000 | 00000000 | 10111111 | >   | 191 |
| [[wiki/Netz-ID\|Netz-ID]] 4                            | 11000000 | 10101000 | 00000000 | 11000000 | >   | 192 |
| [[wiki/Broadcast-ID\|Broadcast-ID]] 4                       | 11000000 | 10101000 | 00000000 | 11111111 | >   | 255 |

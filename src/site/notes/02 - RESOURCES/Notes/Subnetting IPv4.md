---
{"dg-publish":true,"permalink":"/02-resources/notes/subnetting-i-pv4/","tags":["netzwerk/ip/ipv4"],"noteIcon":""}
---

>Zuerst lass uns einen Blick auf das werfen, was wir über [[02 - RESOURCES/Notes/IP\|IP]] und [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]n wissen. 
>>Sie bestehen aus [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en, die durch Punkte getrennt sind '.' und sie werden uns als Dezimal dargestellt.

|   Dezimal   | >   | 1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 3. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e |
| :---------: | --- | :------------: | :------------: | :------------: | -------------- |
| 192.168.1.4 | >   |    11000000    |    10101000    |    00000001    | 00000100       |
| 255.255.0.0 | >   |    11111111    |    11111111    |    00000000    | 00000000       |

Schon mit diese Info können wir die [[02 - RESOURCES/Notes/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]] und so auch die [[02 - RESOURCES/Notes/Broadcast-ID herausfinden\|Broadcast-ID herausfinden]].
Eine 3. und wichtige Information ist die Anzahl der verfügbaren [[02 - RESOURCES/Notes/IP\|IP]]-Adressen im Netz.

>Um das zu berechen müssen wir nur auf die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] arten.
>>Bei [[02 - RESOURCES/Notes/IPv4\|IPv4]] sind die maximal Anzahl von [[02 - RESOURCES/Notes/Bit\|Bit]]s:  32 [[02 - RESOURCES/Notes/Bit\|Bit]]s.
>>Logisch gesehen, wenn  wir ein [[02 - RESOURCES/Notes/IP\|IP]] wie diese haben: **192.168.1.0/24** können wir einfach berechen:
>>$$2^{32-24}$$
>>#### Achtung
>>Bei diesem Beispiel  haben wir die gesamte Anzahl von [[02 - RESOURCES/Notes/IP\|IP]]-Adressen, aber 2 [[02 - RESOURCES/Notes/IP\|IP]]-Adressen können wir **nicht benutzen** ([[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]]). 
>>Daher, wenn gefragt ist wie viele [[02 - RESOURCES/Notes/IP\|IP]]-Adressen wir in bestimmte [[00 - PROJECTS/Netzwerk\|Netzwerk]] zu Verfügung haben, müssen wir.
>>$$2^{32-24}-2$$
[[Berechnung der Anzahl der IP-Adressen in einem Netzwerk\|Berechnung der Anzahl der IP-Adressen in einem Netzwerk]]


>[!important] Großes [[00 - PROJECTS/Netzwerk\|Netzwerk]] in kleinere [[00 - PROJECTS/Netzwerk\|Netzwerk]] unterteilen 
Als nächsten Schritt beim [[02 - RESOURCES/Notes/Subnetting\|Subnetting]] müssen wir lernen, die [[02 - RESOURCES/Notes/Bit\|Bit]]s zu verschieben, um kleine [[00 - PROJECTS/Netzwerk\|Netzwerk]] zu erstellen.

[[02 - RESOURCES/Notes/IPv4 aufteilen in Subnetze\|IPv4 aufteilen in Subnetze]]
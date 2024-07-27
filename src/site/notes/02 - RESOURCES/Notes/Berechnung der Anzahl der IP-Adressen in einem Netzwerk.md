---
{"dg-publish":true,"permalink":"/02-resources/notes/berechnung-der-anzahl-der-ip-adressen-in-einem-netzwerk/","tags":["netzwerk/ip/ipv4","netzwerk/ip/ipv6"],"noteIcon":"","updated":"2024-07-28T00:14:10.819+02:00"}
---

## [[02 - RESOURCES/Notes/IPv4\|IPv4]]
>Um das zu berechen müssen wir nur auf die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] arten.
>>Bei [[02 - RESOURCES/Notes/IPv4\|IPv4]] sind die maximal Anzahl von [[02 - RESOURCES/Notes/Bit\|Bit]]s:  32 [[02 - RESOURCES/Notes/Bit\|Bit]]s.
>>Logisch gesehen, wenn  wir ein [[02 - RESOURCES/Notes/IP\|IP]] wie diese haben: **192.168.1.0/24** können wir einfach berechen:
>>$$2^{32-24}$$
>>#### Achtung
>>Bei diesem Beispiel  haben wir die gesamte Anzahl von [[02 - RESOURCES/Notes/IP\|IP]]-Adressen, aber 2 [[02 - RESOURCES/Notes/IP\|IP]]-Adressen können wir **nicht benutzen** ([[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] und [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]]). 
>>Daher, wenn gefragt ist wie viele [[02 - RESOURCES/Notes/IP\|IP]]-Adressen wir in bestimmte [[00 - PROJECTS/Netzwerk\|Netzwerk]] zu Verfügung haben, müssen wir.
>>$$2^{32-24}-2$$
## [[02 - RESOURCES/Notes/IPv6\|IPv6]]
Es funktioniert genau wie bei [[02 - RESOURCES/Notes/IPv4\|IPv4]]. [[02 - RESOURCES/Notes/IPv6\|IPv6]] hat aber eine [[02 - RESOURCES/Notes/Bit\|Bit]]sanzahl von 128 [[02 - RESOURCES/Notes/Bit\|Bit]]s und keine [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] oder [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]]
Daher:
$$2^{128-mask_{bits}}$$


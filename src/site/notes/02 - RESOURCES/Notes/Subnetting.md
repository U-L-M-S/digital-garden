---
{"dg-publish":true,"permalink":"/02-resources/notes/subnetting/","tags":["netzwerk/ip","netzwerk/ip/ipv4","netzwerk/ip/ipv6","prüfungsrelevant"],"noteIcon":""}
---

>Beim [[02 - RESOURCES/Notes/Subnetting\|Subnetting]] wird ein großes Netz in kleinere Netze unterteilt. 
>Dies kann sowohl mit [[02 - RESOURCES/Notes/IPv4\|IPv4]] als auch mit [[02 - RESOURCES/Notes/IPv6\|IPv6]] durchgeführt werden.


>[!important] Diese wird gemacht unter folgende Ziele:
>- Verteilung der [[02 - RESOURCES/Notes/Netzlast\|Netzlast]]
>- Örtliche oder organisatorische Aufteilung der [[00 - PROJECTS/Netzwerk\|Netzwerk]]
>- Trennen von Netzwerken aus Sicherheitsgründen
>- Einschränkung der Anzahl der [[IP-Adresse\|IP-Adresse]]n in einem [[00 - PROJECTS/Netzwerk\|Netzwerk]]

>[!multi-column]
> 
>>[!check] Vorteile
>>- [[00 - PROJECTS/Netzwerk\|Netzwerk]]verwaltung
>>- Erhöhte Sicherheit
>>- Reduzierung des [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]-Verkehrs
>>- Skalierbarkeit
> 
>>[!fail] Nachteile
>>- Komplexität
>>- Verlust von [[IP-Adresse\|IP-Adresse]]en
>>- Zusätzliche Verwaltungskosten
>>- Eingeschränkte Flexibilität

[[02 - RESOURCES/Notes/Subnetting IPv4\|Subnetting IPv4]]
(TEMP)
## [[02 - RESOURCES/Notes/IPv6\|IPv6]]
Es funktioniert genau wie bei [[02 - RESOURCES/Notes/IPv4\|IPv4]]. [[02 - RESOURCES/Notes/IPv6\|IPv6]] hat aber eine [[02 - RESOURCES/Notes/Bit\|Bit]]sanzahl von 128 [[02 - RESOURCES/Notes/Bit\|Bit]]s und keine [[02 - RESOURCES/Notes/Netzwerk-ID\|Netzwerk-ID]] oder [[02 - RESOURCES/Notes/Broadcast-ID\|Broadcast-ID]]
Daher:
$$2^{128-mask_{bits}}$$
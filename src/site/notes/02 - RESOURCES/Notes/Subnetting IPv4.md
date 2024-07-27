---
{"dg-publish":true,"permalink":"/02-resources/notes/subnetting-i-pv4/","tags":["netzwerk/ip/ipv4"],"noteIcon":"","updated":"2024-07-27T23:48:14.737+02:00"}
---

>Zuerst lass uns einen Blick auf das werfen, was wir über [[02 - RESOURCES/Notes/IP\|IP]] und [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]n wissen. 
>>Sie bestehen aus [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en, die durch Punkte getrennt sind '.' und sie werden uns als Dezimal dargestellt.

|   Dezimal   | >   | 1. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 2. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 3. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e | 4. [[02 - RESOURCES/Notes/Oktett\|Oktett]]e |
| :---------: | --- | :------------: | :------------: | :------------: | -------------- |
| 192.168.1.4 | >   |    11000000    |    10101000    |    00000001    | 00000100       |
| 255.255.0.0 | >   |    11111111    |    11111111    |    00000000    | 00000000       |

Schon mit diese Info können wir die [[02 - RESOURCES/Notes/Netzwerk-ID herausfinden\|Netzwerk-ID herausfinden]] und so auch die [[02 - RESOURCES/Notes/Broadcast-ID herausfinden\|Broadcast-ID herausfinden]].
Eine 3. und wichtige Information ist die Anzahl der verfügbaren [[02 - RESOURCES/Notes/IP\|IP]]-Adressen im Netz.
[[02 - RESOURCES/Notes/Berechnung der Anzahl der IP-Adressen in einem Netzwerk\|Berechnung der Anzahl der IP-Adressen in einem Netzwerk]]


>[!important] Großes [[00 - PROJECTS/Netzwerk\|Netzwerk]] in kleinere [[00 - PROJECTS/Netzwerk\|Netzwerk]] unterteilen 
Als nächsten Schritt beim [[02 - RESOURCES/Notes/Subnetting\|Subnetting]] müssen wir lernen, die [[02 - RESOURCES/Notes/Bit\|Bit]]s zu verschieben, um kleine [[00 - PROJECTS/Netzwerk\|Netzwerk]] zu erstellen.

[[02 - RESOURCES/Notes/IPv4 aufteilen in Subnetze\|IPv4 aufteilen in Subnetze]]
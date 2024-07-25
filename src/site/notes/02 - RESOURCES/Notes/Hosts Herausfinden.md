---
{"dg-publish":true,"permalink":"/02-resources/notes/hosts-herausfinden/","tags":["netzwerk/host"],"noteIcon":""}
---

## Hosts Herausfinden 
Nehmen wir an du hast diese Informationen:
- [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]:192.168.32.5/24
- [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]]:255.255.255.0

um die Anzahl von mögliche [Hosts]([[02 - RESOURCES/Notes/Network Portion und Host#^099b19\|Network Portion und Host#^099b19]]) zu berechnen muss du nur den [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] in [[02 - RESOURCES/Notes/Binärzahlen\|Binärzahlen]] darstellen und dann die Formel verwenden: $2^{{n}}-2$ wobei **n** die Anzahl von Nullen ist.

255.255.255.0 -> 11111111.11111111.11111111.00000000 -> (8 Nullen)

$$2^{{8}}-2=254$$ 
>[!info] Reminder
> Wir müssen 2 subtrahieren da wir 2 [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] für Network Address und Broadcast Address brauchen.



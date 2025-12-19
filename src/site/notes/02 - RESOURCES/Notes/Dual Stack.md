---
{"dg-publish":true,"permalink":"/02-resources/notes/dual-stack/","tags":["informatik/netzwerk/ip/ipv4","informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-10-29T12:59:05.573+01:00"}
---

>Methode, die verwendet wird in eine [[02 - RESOURCES/Notes/Netzwerk\|Netz]] damit Geräte [[02 - RESOURCES/Notes/IPv4\|IPv4]] und [[02 - RESOURCES/Notes/IPv6\|IPv6]] gleichzeitig verwenden kann.
>>Es ist kein [[02 - RESOURCES/Notes/Netzwerkprotokolle\|Netzwerkprotokolle]], sonder eine Einstellung. Moderne Geräte können das heutzutage.

>[!summary] IPv4
>[[02 - RESOURCES/Notes/arp\|arp]] wird ersetzt durch Neighbor MAC Discovery.

>[!summary] IPv6
>Damit [[02 - RESOURCES/Notes/Dual Stack\|Dual Stack]] funktionieren kann, muss [[02 - RESOURCES/Notes/IPv6\|IPv6]]  konfiguriert werden mit:
>- [[02 - RESOURCES/Notes/NDP\|NDP]] um andere Geräte (Nachbar) zu erkennen.
>- [[02 - RESOURCES/Notes/SLAAC\|SLAAC]] um die IPv6 zu konfigurieren ohne DHCP.
>- [[02 - RESOURCES/Notes/DAD\|DAD]] um doppelten IPs zu verneigen.


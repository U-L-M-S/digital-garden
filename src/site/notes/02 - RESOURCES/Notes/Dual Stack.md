---
{"dg-publish":true,"permalink":"/02-resources/notes/dual-stack/","tags":["netzwerk","netzwerk/ip/ipv4","netzwerk/ip/ipv6"],"noteIcon":"","updated":"2024-08-02T17:33:55.955+02:00"}
---

>Methode, die verwendet wird in eine [[02 - RESOURCES/Notes/Netzwerk\|Netz]] damit Geräte [[02 - RESOURCES/Notes/IPv4\|IPv4]] und [[02 - RESOURCES/Notes/IPv6\|IPv6]] gleichzeitig verwenden kann.
>>Es ist kein [[02 - RESOURCES/Notes/Protokoll\|Protokoll]], sonder eine Einstellung. Moderne Geräte können das heutzutage.

>[!summary] IPv4
>[[02 - RESOURCES/Notes/ARP\|ARP]] wird ersetzt durch Neighbor MAC Discovery.

>[!summary] IPv6
>Damit [[02 - RESOURCES/Notes/Dual Stack\|Dual Stack]] funktionieren kann, muss [[02 - RESOURCES/Notes/IPv6\|IPv6]]  konfiguriert werden mit:
>- [[02 - RESOURCES/Notes/NDP\|NDP]] um andere Geräte (Nachbar) zu erkennen.
>- [[02 - RESOURCES/Notes/SLAAC\|SLAAC]] um die IPv6 zu konfigurieren ohne DHCP.
>- [[02 - RESOURCES/Notes/DAD\|DAD]] um doppelten IPs zu verneigen.


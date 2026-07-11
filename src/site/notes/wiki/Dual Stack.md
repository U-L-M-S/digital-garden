---
{"dg-publish":true,"permalink":"/wiki/dual-stack/","tags":["informatik/netzwerk/ip/ipv4","informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-10-29T12:59:05.000+01:00","dg-note-properties":{"aliases":null,"created":"2024-08-02 16:38","links":null,"path":"Notes","tags":["informatik/netzwerk/ip/ipv4","informatik/netzwerk/ip/ipv6"]}}
---

>Methode, die verwendet wird in eine [[wiki/Netzwerk\|Netz]] damit Geräte [[wiki/IPv4\|IPv4]] und [[wiki/IPv6\|IPv6]] gleichzeitig verwenden kann.
>>Es ist kein [[wiki/Netzwerkprotokolle\|Netzwerkprotokolle]], sonder eine Einstellung. Moderne Geräte können das heutzutage.

>[!summary] IPv4
>[[wiki/arp\|arp]] wird ersetzt durch Neighbor MAC Discovery.

>[!summary] IPv6
>Damit [[wiki/Dual Stack\|Dual Stack]] funktionieren kann, muss [[wiki/IPv6\|IPv6]]  konfiguriert werden mit:
>- [[wiki/NDP\|NDP]] um andere Geräte (Nachbar) zu erkennen.
>- [[wiki/SLAAC\|SLAAC]] um die IPv6 zu konfigurieren ohne DHCP.
>- [[wiki/DAD\|DAD]] um doppelten IPs zu verneigen.


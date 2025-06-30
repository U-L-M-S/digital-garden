---
{"dg-publish":true,"permalink":"/02-resources/notes/slaac/","tags":["netzwerk/protocol","netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-03-23T22:25:09.000+01:00"}
---

> **SLAAC** = **Stateless Address Autoconfiguration**
> 
> > Ein IPv6-Verfahren, bei dem sich Geräte **selbstständig** eine Adresse konfigurieren – ohne DHCPv6-Server.


> [!note] Ablauf:
> 
> - Das Gerät nutzt seine **Link-Local**-Adresse (fe80::/10) und sendet eine **Router Solicitation (RS)**.
> - Der [[02 - RESOURCES/Notes/Router\|Router]] antwortet mit **Router Advertisement (RA)** und teilt das **Prefix** mit.
> - Das Gerät kombiniert das **Prefix** mit seiner eigenen Kennung (z.B. [[02 - RESOURCES/Notes/MAC Adresse\|MAC]]) und generiert so eine vollständige IPv6-Adresse.

> [!tip]  
> SLAAC = schnelle, automatische Adressvergabe, wenn **kein DHCPv6** im [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] vorhanden ist.

> [!example]  
> Laptop bekommt vom [[02 - RESOURCES/Notes/Router\|Router]] das Prefix **2001:db8:1::/64** und generiert daraus z.B. **2001:db8:1::a0cd:1234**.
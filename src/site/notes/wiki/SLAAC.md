---
{"dg-publish":true,"permalink":"/wiki/slaac/","tags":["informatik/netzwerk/protokoll","informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-10-29T12:59:10.000+01:00","dg-note-properties":{"aliases":["Stateless Address Autoconfiguration"],"created":"2024-08-02 17:29","links":null,"tags":["informatik/netzwerk/protokoll","informatik/netzwerk/ip/ipv6"]}}
---

> **SLAAC** = **Stateless Address Autoconfiguration**
> 
> > Ein IPv6-Verfahren, bei dem sich Geräte **selbstständig** eine Adresse konfigurieren – ohne DHCPv6-Server.


> [!note] Ablauf:
> 
> - Das Gerät nutzt seine **Link-Local**-Adresse (fe80::/10) und sendet eine **Router Solicitation (RS)**.
> - Der [[wiki/Router\|Router]] antwortet mit **Router Advertisement (RA)** und teilt das **Prefix** mit.
> - Das Gerät kombiniert das **Prefix** mit seiner eigenen Kennung (z.B. [[wiki/MAC Adresse\|MAC]]) und generiert so eine vollständige IPv6-Adresse.

> [!tip]  
> SLAAC = schnelle, automatische Adressvergabe, wenn **kein DHCPv6** im [[wiki/Netzwerk\|Netzwerk]] vorhanden ist.

> [!example]  
> Laptop bekommt vom [[wiki/Router\|Router]] das Prefix **2001:db8:1::/64** und generiert daraus z.B. **2001:db8:1::a0cd:1234**.
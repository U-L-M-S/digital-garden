---
{"dg-publish":true,"permalink":"/02-resources/notes/dhcpreply/","tags":["informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-09-15T16:36:36.840+02:00"}
---

>Finale Antwort des [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Servers - "Hier ist deine [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[Adresse\|Adresse]] und Konfiguration!"
>>Server bestätigt die Vergabe und übermittelt alle Netzwerk-Einstellungen an den Client.

>[!info] Info
>Entspricht [[02 - RESOURCES/Notes/DHCPACK\|DHCPACK]] bei [[DHCP\|DHCP]]v4 - Server bestätigt endgültig die Konfiguration.

## Inhalt der [[02 - RESOURCES/Notes/DHCPREPLY\|DHCPREPLY]]-Nachricht:

| Element | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Message Type** | Nachrichtentyp | 7 (REPLY) |
| **Transaction ID** | Gleiche ID wie [[02 - RESOURCES/Notes/DHCPREQUEST\|DHCPREQUEST]] | 0x123456 |
| **Server [[DUID\|DUID]]** | Server-Identifikation | DUID-EN |
| **IA Address** | Zugewiesene [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[Adresse\|Adresse]] | 2001:db8::150/64 |
| **Lease Times** | T1/T2 Timer | T1: 12h, T2: 18h |
| **[[02 - RESOURCES/Notes/DNS\|DNS]] Server** | [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[02 - RESOURCES/Notes/DNS\|DNS]]-Server | 2001:4860:4860::8888 |
| **[[02 - RESOURCES/Notes/Domain\|Domain]] Name** | Such-[[02 - RESOURCES/Notes/Domain\|Domain]] | beispiel.com |

>[!important] Wichtig
>**T1-Timer**: Wann Client Verlängerung anfragen soll (50% der Lease-Zeit)
>**T2-Timer**: Wann Client anderen Server suchen soll (80% der Lease-Zeit)

## Unterschied zu [[02 - RESOURCES/Notes/DHCPACK\|DHCPACK]]:

| [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]            | [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]                 |
| --------------------- | -------------------------- |
| [[02 - RESOURCES/Notes/DHCPACK\|DHCPACK]]           | [[02 - RESOURCES/Notes/DHCPREPLY\|DHCPREPLY]]              |
| Eine Lease-Zeit       | T1/T2 Timer-System         |
| Einfache Verlängerung | Flexible Renewal-Strategie |
| [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] möglich | Nur [[02 - RESOURCES/Notes/Unicast\|Unicast]]            |

>[!example] Beispiel
>Server bestätigt mit [[02 - RESOURCES/Notes/DHCPREPLY\|DHCPREPLY]]:
>- Zugewiesene [[Adresse\|Adresse]]: 2001:db8::150/64
>- Lease: 24 Stunden
>- T1: 12 Stunden (Renewal)
>- T2: 18 Stunden (Rebind)
>- [[02 - RESOURCES/Notes/DNS\|DNS]]: 2001:4860:4860::8888

>[!success] Erfolgreich
>Client hat jetzt vollständige [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Konfiguration und kann kommunizieren!

## Stateless [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]:
Bei **INFORMATION-REQUEST** enthält [[02 - RESOURCES/Notes/DHCPREPLY\|DHCPREPLY]] nur:
- [[02 - RESOURCES/Notes/DNS\|DNS]]-Server
- [[02 - RESOURCES/Notes/Domain\|Domain]]-Name
- Weitere Optionen
- **KEINE Adresse** (Client hat schon eine durch [[02 - RESOURCES/Notes/SLAAC\|SLAAC]])

>[!tip] Tipp
>Client startet automatisch **Renewal** bei T1-Timer - muss nicht warten bis Lease abläuft!

---

**Vorheriger Schritt**: [[02 - RESOURCES/Notes/DHCPREQUEST\|DHCPREQUEST]]
**Prozess**: [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Konfiguration abgeschlossen
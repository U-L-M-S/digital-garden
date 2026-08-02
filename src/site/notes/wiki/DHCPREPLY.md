---
{"dg-publish":true,"permalink":"/wiki/dhcpreply/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.926+02:00","dg-note-properties":{"tags":["informatik/netzwerk"],"aliases":null,"links":null,"created_date":"2025-09-15"}}
---

>Finale Antwort des [[wiki/DHCPv6\|DHCPv6]]-Servers - "Hier ist deine [[wiki/IPv6\|IPv6]]-[[Adresse\|Adresse]] und Konfiguration!"
>>Server bestätigt die Vergabe und übermittelt alle Netzwerk-Einstellungen an den Client.

>[!info] Info
>Entspricht [[wiki/DHCPACK\|DHCPACK]] bei [[DHCP\|DHCP]]v4 - Server bestätigt endgültig die Konfiguration.

## Inhalt der [[wiki/DHCPREPLY\|DHCPREPLY]]-Nachricht:

| Element | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Message Type** | Nachrichtentyp | 7 (REPLY) |
| **Transaction ID** | Gleiche ID wie [[wiki/DHCPREQUEST\|DHCPREQUEST]] | 0x123456 |
| **Server [[DUID\|DUID]]** | Server-Identifikation | DUID-EN |
| **IA Address** | Zugewiesene [[wiki/IPv6\|IPv6]]-[[Adresse\|Adresse]] | 2001:db8::150/64 |
| **Lease Times** | T1/T2 Timer | T1: 12h, T2: 18h |
| **[[wiki/DNS\|DNS]] Server** | [[wiki/IPv6\|IPv6]]-[[wiki/DNS\|DNS]]-Server | 2001:4860:4860::8888 |
| **[[wiki/Domain\|Domain]] Name** | Such-[[wiki/Domain\|Domain]] | beispiel.com |

>[!important] Wichtig
>**T1-Timer**: Wann Client Verlängerung anfragen soll (50% der Lease-Zeit)
>**T2-Timer**: Wann Client anderen Server suchen soll (80% der Lease-Zeit)

## Unterschied zu [[wiki/DHCPACK\|DHCPACK]]:

| [[wiki/DHCPv4\|DHCPv4]]            | [[wiki/DHCPv6\|DHCPv6]]                 |
| --------------------- | -------------------------- |
| [[wiki/DHCPACK\|DHCPACK]]           | [[wiki/DHCPREPLY\|DHCPREPLY]]              |
| Eine Lease-Zeit       | T1/T2 Timer-System         |
| Einfache Verlängerung | Flexible Renewal-Strategie |
| [[wiki/Broadcast\|Broadcast]] möglich | Nur [[wiki/Unicast\|Unicast]]            |

>[!example] Beispiel
>Server bestätigt mit [[wiki/DHCPREPLY\|DHCPREPLY]]:
>- Zugewiesene [[Adresse\|Adresse]]: 2001:db8::150/64
>- Lease: 24 Stunden
>- T1: 12 Stunden (Renewal)
>- T2: 18 Stunden (Rebind)
>- [[wiki/DNS\|DNS]]: 2001:4860:4860::8888

>[!success] Erfolgreich
>Client hat jetzt vollständige [[wiki/IPv6\|IPv6]]-Konfiguration und kann kommunizieren!

## Stateless [[wiki/DHCPv6\|DHCPv6]]:
Bei **INFORMATION-REQUEST** enthält [[wiki/DHCPREPLY\|DHCPREPLY]] nur:
- [[wiki/DNS\|DNS]]-Server
- [[wiki/Domain\|Domain]]-Name
- Weitere Optionen
- **KEINE Adresse** (Client hat schon eine durch [[wiki/SLAAC\|SLAAC]])

>[!tip] Tipp
>Client startet automatisch **Renewal** bei T1-Timer - muss nicht warten bis Lease abläuft!

---

**Vorheriger Schritt**: [[wiki/DHCPREQUEST\|DHCPREQUEST]]
**Prozess**: [[wiki/DHCPv6\|DHCPv6]]-Konfiguration abgeschlossen
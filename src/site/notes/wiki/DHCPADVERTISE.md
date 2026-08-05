---
{"dg-publish":true,"permalink":"/wiki/dhcpadvertise/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/netzwerk"],"aliases":["dHCPADVERTISE"],"links":null,"created_date":"2025-09-15"}}
---

>Antwort des [[wiki/DHCPv6\|DHCPv6]]-Servers auf [[wiki/DHCPSOLICIT\|DHCPSOLICIT]] - "Ich bin da und kann dir helfen!"
>>Server zeigt seine Verfügbarkeit und bietet [[wiki/IPv6\|IPv6]]-Adressen oder Konfiguration an.

>[!info] Info
>Entspricht [[wiki/DHCPOFFER\|DHCPOFFER]] bei [[wiki/DHCPv4\|DHCPv4]] - Server macht ein Angebot.

## Inhalt der [[wiki/DHCPADVERTISE\|DHCPADVERTISE]]-Nachricht:

| Element             | Beschreibung                   | Beispiel               |
| ------------------- | ------------------------------ | ---------------------- |
| **Message Type**    | Nachrichtentyp                 | 2 (ADVERTISE)          |
| **Transaction ID**  | Gleiche ID wie [[wiki/DHCPSOLICIT\|DHCPSOLICIT]] | 0x123456               |
| **Server [[DUID\|DUID]]** | Server-Identifikation          | DUID-EN                |
| **IA Options**      | Verfügbare Adressen            | 2001:db8::100-200      |
| **[[wiki/DNS\|DNS]] Server**  | [[wiki/IPv6\|IPv6]]-[[wiki/DNS\|DNS]]-Server        | 2001:4860:4860::8888   |
| **Preference**      | Server-Priorität               | 0-255 (höher = besser) |

>[!important] Wichtig
>Client kann **mehrere ADVERTISE** von verschiedenen Servern bekommen!

## Unterschied zu [[wiki/DHCPOFFER\|DHCPOFFER]]:

| [[DHCP\|DHCP]]v4           | [[wiki/DHCPv6\|DHCPv6]]                        |
| -------------------- | --------------------------------- |
| [[wiki/DHCPOFFER\|DHCPOFFER]]        | [[wiki/DHCPADVERTISE\|DHCPADVERTISE]]                 |
| Eine [[wiki/IP\|IP]]-Adresse  | Mehrere [[wiki/IPv6\|IPv6]]-Adressen möglich |
| [[wiki/Broadcast\|Broadcast]] zurück | [[wiki/Unicast\|Unicast]] direkt an Client      |
| Feste Lease-Zeit     | Flexible T1/T2 Timer              |

>[!example] Beispiel
>Server antwortet mit [[wiki/DHCPADVERTISE\|DHCPADVERTISE]]:
>- Server DUID: 00:02:00:00:ab:cd
>- Verfügbare Adresse: 2001:db8::100/64
>- [[wiki/DNS\|DNS]]: 2001:4860:4860::8888
>- Preference: 200

>[!tip] Tipp
>Bei mehreren Servern wählt Client den mit höchster **Preference** - oder schnellste Antwort!

## Server-Auswahl:
Client entscheidet basierend auf:
- **Preference-Wert** (0-255)
- **Antwortgeschwindigkeit**
- **Verfügbare Optionen**

---

**Vorheriger Schritt**: [[wiki/DHCPSOLICIT\|DHCPSOLICIT]]
**Nächster Schritt**: [[wiki/DHCPREQUEST\|DHCPREQUEST]]
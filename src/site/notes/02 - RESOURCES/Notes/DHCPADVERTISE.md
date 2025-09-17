---
{"dg-publish":true,"permalink":"/02-resources/notes/dhcpadvertise/","tags":["informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-09-16T23:41:26.734+02:00"}
---

>Antwort des [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Servers auf [[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]] - "Ich bin da und kann dir helfen!"
>>Server zeigt seine Verfügbarkeit und bietet [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Adressen oder Konfiguration an.

>[!info] Info
>Entspricht [[02 - RESOURCES/Notes/DHCPOFFER\|DHCPOFFER]] bei [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]] - Server macht ein Angebot.

## Inhalt der [[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]-Nachricht:

| Element             | Beschreibung                   | Beispiel               |
| ------------------- | ------------------------------ | ---------------------- |
| **Message Type**    | Nachrichtentyp                 | 2 (ADVERTISE)          |
| **Transaction ID**  | Gleiche ID wie [[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]] | 0x123456               |
| **Server [[DUID\|DUID]]** | Server-Identifikation          | DUID-EN                |
| **IA Options**      | Verfügbare Adressen            | 2001:db8::100-200      |
| **[[02 - RESOURCES/Notes/DNS\|DNS]] Server**  | [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[02 - RESOURCES/Notes/DNS\|DNS]]-Server        | 2001:4860:4860::8888   |
| **Preference**      | Server-Priorität               | 0-255 (höher = besser) |

>[!important] Wichtig
>Client kann **mehrere ADVERTISE** von verschiedenen Servern bekommen!

## Unterschied zu [[02 - RESOURCES/Notes/DHCPOFFER\|DHCPOFFER]]:

| [[DHCP\|DHCP]]v4           | [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]                        |
| -------------------- | --------------------------------- |
| [[02 - RESOURCES/Notes/DHCPOFFER\|DHCPOFFER]]        | [[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]                 |
| Eine [[02 - RESOURCES/Notes/IP\|IP]]-Adresse  | Mehrere [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Adressen möglich |
| [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] zurück | [[02 - RESOURCES/Notes/Unicast\|Unicast]] direkt an Client      |
| Feste Lease-Zeit     | Flexible T1/T2 Timer              |

>[!example] Beispiel
>Server antwortet mit [[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]:
>- Server DUID: 00:02:00:00:ab:cd
>- Verfügbare Adresse: 2001:db8::100/64
>- [[02 - RESOURCES/Notes/DNS\|DNS]]: 2001:4860:4860::8888
>- Preference: 200

>[!tip] Tipp
>Bei mehreren Servern wählt Client den mit höchster **Preference** - oder schnellste Antwort!

## Server-Auswahl:
Client entscheidet basierend auf:
- **Preference-Wert** (0-255)
- **Antwortgeschwindigkeit**
- **Verfügbare Optionen**

---

**Vorheriger Schritt**: [[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]]
**Nächster Schritt**: [[02 - RESOURCES/Notes/DHCPREQUEST\|DHCPREQUEST]]
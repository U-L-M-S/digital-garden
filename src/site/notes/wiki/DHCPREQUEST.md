---
{"dg-publish":true,"permalink":"/wiki/dhcprequest/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.744+02:00","dg-note-properties":{"aliases":null,"created":"2024-08-02 01:51","links":null,"tags":["informatik/netzwerk"]}}
---

>Die Nachricht, die vom Client gesendet wird, um das Angebot eines [[wiki/DHCP-Server\|DHCP-Server]]s anzunehmen und die gewünschten Konfigurationsparameter zu bestätigen.
>>Client wählt einen Server aus und sagt "Ich nehme dein Angebot!"

## [[wiki/DHCPv4\|DHCPv4]] REQUEST:

| Element                         | Beschreibung                | Beispiel          |
| ------------------------------- | --------------------------- | ----------------- |
| **Angeforderte [[wiki/IP\|IP]]-Adresse** | Aus [[wiki/DHCPOFFER\|DHCPOFFER]]           | 192.168.1.100     |
| **Server-ID**                   | Welchen Server Client wählt | 192.168.1.1       |
| **[[wiki/MAC Adresse\|MAC Adresse]]**             | Client-Identifikation       | aa:bb:cc:dd:ee:ff |
| **Optional: Hostname**          | Name des Clients            | "laptop-max"      |

## [[wiki/DHCPv6\|DHCPv6]] REQUEST:

| Element                           | Beschreibung                | Beispiel      |
| --------------------------------- | --------------------------- | ------------- |
| **Angeforderte [[wiki/IPv6\|IPv6]]-Adresse** | Aus [[wiki/DHCPADVERTISE\|DHCPADVERTISE]]       | 2001:db8::150 |
| **Server [[DUID\|DUID]]**               | Welchen Server Client wählt | DUID-EN       |
| **Client [[DUID\|DUID]]**               | Client-Identifikation       | DUID-LLT      |
| **IA (Identity Association)**     | Adressen-Verwaltung         | IA_NA         |
| **Optional: Hostname**            | Name des Clients            | "laptop-max"  |

>[!important] Wichtig
>Bei **mehreren Angeboten** wählt Client das beste aus - meist höchste Preference oder schnellste Antwort.

## Unterschiede:

| [[wiki/DHCPv4\|DHCPv4]]            | [[wiki/DHCPv6\|DHCPv6]]                    |
| --------------------- | ----------------------------- |
| [[wiki/MAC Adresse\|MAC Adresse]]       | [[DUID\|DUID]]                      |
| Server-ID             | Server [[DUID\|DUID]]               |
| Eine [[wiki/IP\|IP]]           | Mehrere [[wiki/IPv6\|IPv6]]-[[Adresse\|Adresse]]n |
| [[wiki/Broadcast\|Broadcast]] möglich | Nur [[wiki/Unicast\|Unicast]]               |

>[!info] Info
>Bei [[wiki/DHCPv6\|DHCPv6]] Stateless gibt es **INFORMATION-REQUEST** statt REQUEST - da wird keine Adresse angefordert!

>[!tip] Tipp
>REQUEST kann auch für Lease-Verlängerung verwendet werden - nicht nur bei Erstanfrage.

---

**Antwort**: [[wiki/DHCPACK\|DHCPACK]] (IPv4) oder [[wiki/DHCPREPLY\|DHCPREPLY]] (IPv6)

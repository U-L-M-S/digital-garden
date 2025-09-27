---
{"dg-publish":true,"permalink":"/02-resources/notes/dhcprequest/","tags":["#informatik/netzwerk/ip/ipv4","#informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-09-15T16:40:26.000+02:00"}
---

>Die Nachricht, die vom Client gesendet wird, um das Angebot eines [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]s anzunehmen und die gewünschten Konfigurationsparameter zu bestätigen.
>>Client wählt einen Server aus und sagt "Ich nehme dein Angebot!"

## [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]] REQUEST:

| Element                         | Beschreibung                | Beispiel          |
| ------------------------------- | --------------------------- | ----------------- |
| **Angeforderte [[02 - RESOURCES/Notes/IP\|IP]]-Adresse** | Aus [[02 - RESOURCES/Notes/DHCPOFFER\|DHCPOFFER]]           | 192.168.1.100     |
| **Server-ID**                   | Welchen Server Client wählt | 192.168.1.1       |
| **[[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]**             | Client-Identifikation       | aa:bb:cc:dd:ee:ff |
| **Optional: Hostname**          | Name des Clients            | "laptop-max"      |

## [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] REQUEST:

| Element                           | Beschreibung                | Beispiel      |
| --------------------------------- | --------------------------- | ------------- |
| **Angeforderte [[02 - RESOURCES/Notes/IPv6\|IPv6]]-Adresse** | Aus [[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]]       | 2001:db8::150 |
| **Server [[DUID\|DUID]]**               | Welchen Server Client wählt | DUID-EN       |
| **Client [[DUID\|DUID]]**               | Client-Identifikation       | DUID-LLT      |
| **IA (Identity Association)**     | Adressen-Verwaltung         | IA_NA         |
| **Optional: Hostname**            | Name des Clients            | "laptop-max"  |

>[!important] Wichtig
>Bei **mehreren Angeboten** wählt Client das beste aus - meist höchste Preference oder schnellste Antwort.

## Unterschiede:

| [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]            | [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]                    |
| --------------------- | ----------------------------- |
| [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]       | [[DUID\|DUID]]                      |
| Server-ID             | Server [[DUID\|DUID]]               |
| Eine [[02 - RESOURCES/Notes/IP\|IP]]           | Mehrere [[02 - RESOURCES/Notes/IPv6\|IPv6]]-[[Adresse\|Adresse]]n |
| [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] möglich | Nur [[02 - RESOURCES/Notes/Unicast\|Unicast]]               |

>[!info] Info
>Bei [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]] Stateless gibt es **INFORMATION-REQUEST** statt REQUEST - da wird keine Adresse angefordert!

>[!tip] Tipp
>REQUEST kann auch für Lease-Verlängerung verwendet werden - nicht nur bei Erstanfrage.

---

**Antwort**: [[02 - RESOURCES/Notes/DHCPACK\|DHCPACK]] (IPv4) oder [[02 - RESOURCES/Notes/DHCPREPLY\|DHCPREPLY]] (IPv6)

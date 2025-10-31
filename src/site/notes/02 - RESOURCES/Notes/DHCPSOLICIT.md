---
{"dg-publish":true,"permalink":"/02-resources/notes/dhcpsolicit/","tags":["informatik/netzwerk/ip/ipv6"],"noteIcon":"","updated":"2025-10-29T12:59:05.204+01:00"}
---

>Die erste Nachricht im [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Prozess - Client sucht nach verfügbaren [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Servern.
>>Wie "Hallo, ist da jemand?" ins [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] rufen - aber nur die [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]-Server antworten.

>[!info] Info
>Entspricht [[02 - RESOURCES/Notes/DHCPDISCOVER\|DHCPDISCOVER]] bei [[DHCP\|DHCP]]v4, aber mit [[02 - RESOURCES/Notes/Multicast\|Multicast]] statt [[02 - RESOURCES/Notes/Broadcast\|Broadcast]].

## Inhalt der [[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]]-Nachricht:

| Element | Beschreibung | Beispiel |
|---------|--------------|----------|
| **[[DUID\|DUID]]** | Client-Identifikation | DUID-LLT mit [[MAC\|MAC]] + Zeit |
| **Message Type** | Nachrichtentyp | 1 (SOLICIT) |
| **Transaction ID** | Eindeutige ID für Anfrage | 0x123456 |
| **Optional: Hostname** | Name des Clients | "laptop-max" |
| **Optional: IA** | Identity Association | IA_NA für normale [[Adresse\|Adresse]] |

>[!important] Wichtig
>**[[02 - RESOURCES/Notes/Multicast\|Multicast]]-[[Adresse\|Adresse]]**: ff02::1:2 (All_DHCP_Relay_Agents_and_Servers)

## Unterschied zu [[02 - RESOURCES/Notes/DHCPDISCOVER\|DHCPDISCOVER]]:

| [[02 - RESOURCES/Notes/DHCPv4\|DHCPv4]]       | [[02 - RESOURCES/Notes/DHCPv6\|DHCPv6]]       |
| ---------------- | ---------------- |
| [[02 - RESOURCES/Notes/DHCPDISCOVER\|DHCPDISCOVER]] | [[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]]  |
| [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]  | [[DUID\|DUID]]         |
| [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]    | [[02 - RESOURCES/Notes/Multicast\|Multicast]]    |
| [[02 - RESOURCES/Notes/PORT\|Port]] 67/68   | [[02 - RESOURCES/Notes/PORT\|Port]] 546/547 |

>[!example] Beispiel
>Client sendet [[02 - RESOURCES/Notes/DHCPSOLICIT\|DHCPSOLICIT]] mit:
>- DUID: 00:01:00:01:2a:3b:4c:5d:aa:bb:cc:dd:ee:ff
>- Transaction ID: 0xABCDEF
>- Ziel: ff02::1:2

>[!tip] Tipp
>[[DUID\|DUID]] bleibt gleich auch wenn Client [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] wechselt - besser als [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]!

---

**Nächster Schritt**: [[02 - RESOURCES/Notes/DHCPADVERTISE\|DHCPADVERTISE]] als Antwort vom Server

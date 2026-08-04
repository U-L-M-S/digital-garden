---
{"dg-publish":true,"permalink":"/wiki/dhcpsolicit/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/netzwerk"],"aliases":null,"links":null,"created_date":"2025-09-15"}}
---

>Die erste Nachricht im [[wiki/DHCPv6\|DHCPv6]]-Prozess - Client sucht nach verfügbaren [[wiki/DHCPv6\|DHCPv6]]-Servern.
>>Wie "Hallo, ist da jemand?" ins [[wiki/Netzwerk\|Netzwerk]] rufen - aber nur die [[wiki/DHCPv6\|DHCPv6]]-Server antworten.

>[!info] Info
>Entspricht [[wiki/DHCPDISCOVER\|DHCPDISCOVER]] bei [[DHCP\|DHCP]]v4, aber mit [[wiki/Multicast\|Multicast]] statt [[wiki/Broadcast\|Broadcast]].

## Inhalt der [[wiki/DHCPSOLICIT\|DHCPSOLICIT]]-Nachricht:

| Element | Beschreibung | Beispiel |
|---------|--------------|----------|
| **[[DUID\|DUID]]** | Client-Identifikation | DUID-LLT mit [[MAC\|MAC]] + Zeit |
| **Message Type** | Nachrichtentyp | 1 (SOLICIT) |
| **Transaction ID** | Eindeutige ID für Anfrage | 0x123456 |
| **Optional: Hostname** | Name des Clients | "laptop-max" |
| **Optional: IA** | Identity Association | IA_NA für normale [[Adresse\|Adresse]] |

>[!important] Wichtig
>**[[wiki/Multicast\|Multicast]]-[[Adresse\|Adresse]]**: ff02::1:2 (All_DHCP_Relay_Agents_and_Servers)

## Unterschied zu [[wiki/DHCPDISCOVER\|DHCPDISCOVER]]:

| [[wiki/DHCPv4\|DHCPv4]]       | [[wiki/DHCPv6\|DHCPv6]]       |
| ---------------- | ---------------- |
| [[wiki/DHCPDISCOVER\|DHCPDISCOVER]] | [[wiki/DHCPSOLICIT\|DHCPSOLICIT]]  |
| [[wiki/MAC Adresse\|MAC Adresse]]  | [[DUID\|DUID]]         |
| [[wiki/Broadcast\|Broadcast]]    | [[wiki/Multicast\|Multicast]]    |
| [[wiki/PORT\|Port]] 67/68   | [[wiki/PORT\|Port]] 546/547 |

>[!example] Beispiel
>Client sendet [[wiki/DHCPSOLICIT\|DHCPSOLICIT]] mit:
>- DUID: 00:01:00:01:2a:3b:4c:5d:aa:bb:cc:dd:ee:ff
>- Transaction ID: 0xABCDEF
>- Ziel: ff02::1:2

>[!tip] Tipp
>[[DUID\|DUID]] bleibt gleich auch wenn Client [[wiki/Netzwerk\|Netzwerk]] wechselt - besser als [[wiki/MAC Adresse\|MAC Adresse]]!

---

**Nächster Schritt**: [[wiki/DHCPADVERTISE\|DHCPADVERTISE]] als Antwort vom Server

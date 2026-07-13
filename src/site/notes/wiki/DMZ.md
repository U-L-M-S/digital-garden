---
{"dg-publish":true,"permalink":"/wiki/dmz/","tags":["informatik/netzwerk/firewall","informatik/sicherheit/it-sicherheit"],"noteIcon":"","updated":"2026-07-11T00:30:11.000+02:00","dg-note-properties":{"aliases":["DMZ","Demilitarisierte Zone"],"created":"2024-08-03 23:55","links":null,"path":"Notes","tags":["informatik/netzwerk/firewall","informatik/sicherheit/it-sicherheit"]}}
---

![DMZ-20240804000213781.png](/img/user/assets/IMG/DMZ-20240804000213781.png)
>Demilitarisierte Zone
>>Ein Sicherheitsbereich in einem [[wiki/Netzwerk\|Netzwerk]], der es ermöglicht, dass bestimmte Dienste von außen erreichbar sind, ohne das interne [[wiki/Netzwerk\|Netzwerk]] zu gefährden.
>>>Es liegt zwischen dem internen [[wiki/Netzwerk\|Netzwerk]] ([[wiki/LAN\|LAN]]) un dem [[wiki/Internet\|Internet]].
>>>Es ist ein separates [[wiki/Subnetz\|Subnetz]], das durch zwei Firewalls geschützt ist.
>>>- **Firewall-[[wiki/Router\|Router]] A**: Erlaubt Verbindungen aus dem [[wiki/Internet\|Internet]] zum Server in der DMZ, blockiert aber andere nicht angeforderte Verbindungen.
>>>-  **Firewall-[[wiki/Router\|Router]] B**: Erlaubt nur Verbindungen, die aus der DMZ zum [[wiki/LAN\|LAN]] angefordert wurden, und blockiert unautorisierte Zugriffe.

>[!important] 
>Falls ein Angreifer in die DMZ gelangt, wird er durch die zweite Firewall daran gehindert, ins interne [[wiki/LAN\|LAN]] einzudringen.

Die zwei klassischen Aufbauten:
- **Screened Host Firewall:** [[wiki/Firewall\|Firewall]] auf einem gehärteten Host, vom [[wiki/Router\|Router]] abgeschirmt → 2 Schichten, aber ==keine echte DMZ==.
- **Screened Subnet Firewall:** Firewall **beidseitig** von Routern abgeschirmt → höchste Sicherheit, ==bildet die DMZ== (genau das Bild oben).

**Security-Level-Regel** (jede Zone bekommt eine Stufe, z.B. 1–100):

| Von → Nach | Entscheidung |
| :--- | :--- |
| Hoch → Niedrig | **PERMIT** (innen darf raus) |
| Niedrig → Hoch | **DENY** (außen darf nicht rein) |
| gleiches Level | **DENY** |
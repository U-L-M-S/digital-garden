---
{"dg-publish":true,"permalink":"/wiki/port-security/","tags":["netzwerk/sicherheit","switching/schutz"],"noteIcon":"","updated":"2025-10-29T12:59:09.000+01:00","dg-note-properties":{"tags":["netzwerk/sicherheit","switching/schutz"],"aliases":["Switch Port Security","MAC Address Security","Port-basierte Sicherheit"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Port Security\|Port Security]] beschränkt den Netzwerkzugang basierend auf [[wiki/MAC Adresse\|MAC Adresse]]n an [[wiki/Switch\|Switch]]-Ports.

>>Es verhindert unerlaubte Geräte-Verbindungen und MAC-Flooding-Angriffe.

>[!important] 
>**Port Security Funktionen:**
>- MAC-Adress-Limitierung pro Port
>- Statische MAC-Zuweisungen
>- Dynamic Learning mit Limits
>- Violation Actions (Shutdown, Restrict, Protect)

>[!example] 
>**Cisco Switch Konfiguration:**
>```cisco
>interface FastEthernet0/1
> switchport mode access
> switchport port-security
> switchport port-security maximum 2
> switchport port-security mac-address sticky
> switchport port-security violation shutdown
>```

>[!warning] 
>**Security Violations:**
>- Mehr MACs als erlaubt
>- Unerlaubte MAC-Adresse
>- Security-aktivierter Port im Trunk-Modus
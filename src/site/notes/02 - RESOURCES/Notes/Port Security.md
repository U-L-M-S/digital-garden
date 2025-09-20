---
{"dg-publish":true,"permalink":"/02-resources/notes/port-security/","tags":["netzwerk/sicherheit","switching/schutz"],"noteIcon":"","updated":"2025-09-16T23:41:26.790+02:00"}
---


>[[02 - RESOURCES/Notes/Port Security\|Port Security]] beschränkt den Netzwerkzugang basierend auf [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]n an [[02 - RESOURCES/Notes/Switch\|Switch]]-Ports.

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
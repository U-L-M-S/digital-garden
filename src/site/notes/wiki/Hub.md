---
{"dg-publish":true,"permalink":"/wiki/hub/","tags":["ausbildung/gfn/ap1/vorbereitung","informatik/hardware","informatik/netzwerk"],"noteIcon":"","updated":"2025-10-29T12:59:06.000+01:00","dg-note-properties":{"aliases":null,"created_date":"2025-03-16","links":null,"tags":["ausbildung/gfn/ap1/vorbereitung","informatik/hardware","informatik/netzwerk"]}}
---

>Ein **Hub** ist ein einfaches [[wiki/Netzwerk\|Netzwerk]]gerät, das alle empfangenen [[wiki/Datenpakete\|Datenpakete]] **an alle Ports gleichzeitig** weiterleitet, unabhängig davon, wer der Empfänger ist.
> >Es arbeitet ebenfalls auf der [[wiki/Layer 1\|Layer 1]] (Bitübertragungsschicht) des OSI-Modells und kennt keine [[wiki/MAC Adresse\|MAC Adresse]]n.

![image-7.png](/img/user/assets/IMG/image-7.png)
---

# Unterschied Hub vs. [[Switch\|Switch]]

|Gerät|Funktion|
|---|---|
|**Hub**|Leitet alle Pakete an **alle Ports** weiter (keine Intelligenz, nur Verteiler)|
|**[[Switch\|Switch]]**|Leitet Pakete nur an den **richtigen Port** anhand der [[wiki/MAC Adresse\|MAC Adresse]] (lernt aktiv mit)|

> [!note]  
> Der Hub ist "dumm" und erzeugt viele [[wiki/Broadcast\|Broadcast]]s, während der [[Switch\|Switch]] gezielt [[wiki/MAC Adresse\|MAC Adresse]]n ansteuert und somit effizienter ist.
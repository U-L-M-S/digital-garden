---
{"dg-publish":true,"permalink":"/02-resources/notes/hub/","tags":["ausbildung/gfn/ap1/vorbereitung","informatik/hardware","informatik/netzwerk"],"noteIcon":"","updated":"2025-09-27T01:32:43.000+02:00"}
---

>Ein **Hub** ist ein einfaches [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]gerät, das alle empfangenen [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] **an alle Ports gleichzeitig** weiterleitet, unabhängig davon, wer der Empfänger ist.
> >Es arbeitet ebenfalls auf der [[02 - RESOURCES/Notes/Layer 1\|Layer 1]] (Bitübertragungsschicht) des OSI-Modells und kennt keine [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]n.

![image-7.png](/img/user/02%20-%20RESOURCES/Files/image-7.png)
---

# Unterschied Hub vs. [[02 - RESOURCES/Notes/Switch\|Switch]]

|Gerät|Funktion|
|---|---|
|**Hub**|Leitet alle Pakete an **alle Ports** weiter (keine Intelligenz, nur Verteiler)|
|**[[02 - RESOURCES/Notes/Switch\|Switch]]**|Leitet Pakete nur an den **richtigen Port** anhand der [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] (lernt aktiv mit)|

> [!note]  
> Der Hub ist "dumm" und erzeugt viele [[02 - RESOURCES/Notes/Broadcast\|Broadcast]]s, während der [[02 - RESOURCES/Notes/Switch\|Switch]] gezielt [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]n ansteuert und somit effizienter ist.
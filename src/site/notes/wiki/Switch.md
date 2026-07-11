---
{"dg-publish":true,"permalink":"/wiki/switch/","tags":["GFN/LF03","GFN/LF09","ausbildung/gfn/ap1","informatik/hardware","informatik/netzwerk"],"noteIcon":"","updated":"2026-07-11T00:23:07.369+02:00","dg-note-properties":{"aliases":null,"created":"2024-07-15 15:43","links":null,"tags":["GFN/LF03","GFN/LF09","ausbildung/gfn/ap1","informatik/hardware","informatik/netzwerk"]}}
---

>[[wiki/Netzwerk\|Netzwerk]]gerät, das Datenpakete basierend auf [[wiki/MAC Adresse\|MAC Adresse]] an die richtigen Ports weiterleitet. Wenn der Empfänger nicht in der Liste eingetragen ist, wird das Datenpaket an alle weitergeleitet ([[wiki/Broadcast\|Broadcast]]). Hier sind mit 'Ports' die Switch-Anschlüsse gemeint.
>>Es arbeitet im [[wiki/Layer 2\|Layer 2]] und sorgt für die effiziente Kommunikation innerhalb eines lokalen [[wiki/Netzwerk\|Netzwerk]]s.

![Switch-20240715155812018.png\|147](/img/user/assets/IMG/Switch-20240715155812018.png) ![Switch-20240715160016523.png\|150](/img/user/assets/IMG/Switch-20240715160016523.png)



# Wie funktioniert es

Switches arbeiten mit Listen, in denen die IP-Adressen der Sender aller durchgehenden Pakete gespeichert werden. Diese Liste wird ständig aktualisiert.

Jedes Mal, wenn ein Rechner nicht mehr in der Liste ist, kann es daran liegen, dass er noch nie in der Liste war oder weil das [[wiki/TTL\|TTL]] auf 0 gesetzt wurde. Dann macht die Liste einen [[wiki/Broadcast\|Broadcast]] und verschickt das [[wiki/Datenpakete\|Datenpakete]] an **alle** Rechner.

>[!important] 
>Der [[wiki/Broadcast\|Broadcast]] leitet das [[wiki/Datenpakete\|Datenpakete]] an alle Geräte, die mit dem Switch verbunden sind. 
>Es wird jedoch vom Router gestoppt, d.h. es geht nicht durch den Router hindurch.

Die Rechner, die nicht in der Liste eingetragen sind, werden nur eingetragen, wenn diese ein [[Netzwerkpaket\|Netzwerkpaket]] verschicken.
![Switch-20240715161703377.png](/img/user/assets/IMG/Switch-20240715161703377.png)
So sieht die Liste aus. Die [[wiki/MAC Adresse\|MAC Adresse]] von jedem Rechner, der etwas sendet, wird in der Liste eingetragen.

# Filterdatenbasis (Learning & Flooding)

Die Liste heißt offiziell **Filterdatenbasis**. Pro ankommendem Frame passiert das:

```
Frame kommt rein
 ├─ Learning:   Quell-MAC + Eingangsport ──► in die Tabelle eintragen
 └─ Ziel-MAC nachschlagen:
      bekannt   ──► nur an diesen einen Port  (Forwarding)
      unbekannt ──► an alle Ports außer Eingang  (Flooding)
```

Der Switch lernt also ==immer aus der Quell-MAC== — gezielt weiterleiten kann er erst, wenn das Ziel schon mal selbst gesendet hat.
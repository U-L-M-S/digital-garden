---
{"dg-publish":true,"permalink":"/02-resources/notes/switch/","tags":["GFN/LF03","GFN/LF09","ausbildung/gfn/ap1","informatik/hardware","informatik/netzwerk"],"noteIcon":"","updated":"2026-05-12T15:58:06.819+02:00","dg-note-properties":{"aliases":null,"created":"2024-07-15 15:43","links":null,"tags":["GFN/LF03","GFN/LF09","ausbildung/gfn/ap1","informatik/hardware","informatik/netzwerk"]}}
---

>[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]gerät, das Datenpakete basierend auf [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] an die richtigen Ports weiterleitet. Wenn der Empfänger nicht in der Liste eingetragen ist, wird das Datenpaket an alle weitergeleitet ([[02 - RESOURCES/Notes/Broadcast\|Broadcast]]). Hier sind mit 'Ports' die Switch-Anschlüsse gemeint.
>>Es arbeitet im [[02 - RESOURCES/Notes/Layer 2\|Layer 2]] und sorgt für die effiziente Kommunikation innerhalb eines lokalen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]s.

![Switch-20240715155812018.png\|147](/img/user/02%20-%20RESOURCES/Files/IMG/Switch-20240715155812018.png) ![Switch-20240715160016523.png\|150](/img/user/02%20-%20RESOURCES/Files/IMG/Switch-20240715160016523.png)



# Wie funktioniert es

Switches arbeiten mit Listen, in denen die IP-Adressen der Sender aller durchgehenden Pakete gespeichert werden. Diese Liste wird ständig aktualisiert.

Jedes Mal, wenn ein Rechner nicht mehr in der Liste ist, kann es daran liegen, dass er noch nie in der Liste war oder weil das [[02 - RESOURCES/Notes/TTL\|TTL]] auf 0 gesetzt wurde. Dann macht die Liste einen [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] und verschickt das [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] an **alle** Rechner.

>[!important] 
>Der [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] leitet das [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] an alle Geräte, die mit dem Switch verbunden sind. 
>Es wird jedoch vom Router gestoppt, d.h. es geht nicht durch den Router hindurch.

Die Rechner, die nicht in der Liste eingetragen sind, werden nur eingetragen, wenn diese ein [[Netzwerkpaket\|Netzwerkpaket]] verschicken.
![Switch-20240715161703377.png](/img/user/02%20-%20RESOURCES/Files/IMG/Switch-20240715161703377.png)
So sieht die Liste aus. Die [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] von jedem Rechner, der etwas sendet, wird in der Liste eingetragen.
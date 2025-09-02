---
{"dg-publish":true,"permalink":"/02-resources/notes/switch/","tags":["netzwerk","hardware","GFN/LF09","GFN/LF03","GFN/prüfungsrelevant/AP1"],"noteIcon":"","updated":"2025-08-26T16:35:07.000+02:00"}
---

>[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]gäret, das Datenpakete basierend auf [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] and die richtigen Ports weiterleitet, wenn der Empfänger nicht in die Liste eingetragen ist wird das Datenpakete an allen weitergeleitet ([[02 - RESOURCES/Notes/Broadcast\|Broadcast]]). Hier sind die 'Ports', die Switch-Anschlüsse gemeint.
>>Es arbeitet in die [[02 - RESOURCES/Notes/Layer 2\|Layer 2]] und sorgt noch dafür die effiziente Kommunikation innerhalb eines lokalen [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]s.

![Switch-20240715155812018.png|147](/img/user/02%20-%20RESOURCES/Files/IMG/Switch-20240715155812018.png) ![Switch-20240715160016523.png|150](/img/user/02%20-%20RESOURCES/Files/IMG/Switch-20240715160016523.png)



# Wie funktioniert es

Switches arbeiten mit Listen, in denen die IP-Adressen der Sender aller durchgehenden Pakete gespeichert werden. Diese Liste wird ständig aktualisiert.

Jedes Mal, wenn ein Rechner nicht mehr in der Liste ist, kann es daran liegen, dass er noch nie in der Liste war oder weil das [[02 - RESOURCES/Notes/TTL\|TTL]] auf 0 gesetzt wurde. Dann macht die Liste einen [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] und verschickt das [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] an **alle** Rechner.

>[!important] 
>Der [[02 - RESOURCES/Notes/Broadcast\|Broadcast]] leitet das [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] an alle Gärete, die mit dem Switch verbunden ist. 
>Es wird jedoch vom  Router gestoppt, d.h, es geht nicht durch den Router hindurch.

Die Rechner, die nicht in die Liste eingetragen sind, werden nur eingetragen, wenn diese ein [[Netzwerkpaket\|Netzwerkpaket]] verschickt.
![Switch-20240715161703377.png](/img/user/02%20-%20RESOURCES/Files/IMG/Switch-20240715161703377.png)
So sieht die Liste aus. Das [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]]n von jeder Rechner, der was sendet, wird diese in den Liste eingetragen.
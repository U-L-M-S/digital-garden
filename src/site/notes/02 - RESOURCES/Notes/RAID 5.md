---
{"dg-publish":true,"permalink":"/02-resources/notes/raid-5/","tags":["raid/parität","kompromiss/sicherheit-performance","informatik/hardware"],"noteIcon":"","updated":"2025-09-27T02:13:50.000+02:00"}
---


>RAID 5 kombiniert Striping mit verteilter Parität auf mindestens drei Festplatten.

>>Die Daten werden wie bei [[02 - RESOURCES/Notes/RAID 0\|RAID 0]] verteilt, zusätzlich werden Paritätsinformationen berechnet und auf alle Platten verteilt. Dadurch ist der Ausfall einer Platte kompensierbar.

>[!success] Vorteile
>- **Gute Performance**: Kombiniert Vorteile von [[02 - RESOURCES/Notes/RAID 0\|RAID 0]] und [[02 - RESOURCES/Notes/RAID 1\|RAID 1]]
>- **Ausfallsicherheit**: Eine Festplatte kann ausfallen ohne Datenverlust
>- **Effiziente Kapazitätsnutzung**: Nutzbare Kapazität = (n-1) × Plattengröße
>- **Leseleistung**: Parallelisiert über alle Platten
>- **Weit verbreitet**: Meistverwendete RAID-Lösung in der Praxis

>[!warning] Nachteile
>- **Schreibperformance**: Paritätsberechnungen verlangsamen Schreibvorgänge
>- **Mindestens 3 Platten**: Mehr Hardware-Aufwand als RAID 0/1
>- **Wiederherstellungszeit**: Rebuild nach Plattenausfall kann lange dauern
>- **Kritische Phase**: Während Rebuild ist System anfällig für weiteren Ausfall

>[!example] Beispiel
>Drei Festplatten (500GB + 500GB + 500GB) = 1TB nutzbare Kapazität
>Jede Festplatte enthält Daten und Paritätsinformationen verteilt

![Pasted image 20230924214130.png](/img/user/02%20-%20RESOURCES/Files/IMG/Pasted%20image%2020230924214130.png)

>[!note] Verwendung
>RAID 5 ist der beste Kompromiss zwischen Performance, Sicherheit und Kapazität. Ideal für File-Server, Datenbanken und Anwendungen mit gemischten Lese-/Schreibzugriffen.
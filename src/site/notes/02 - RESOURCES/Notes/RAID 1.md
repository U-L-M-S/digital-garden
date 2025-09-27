---
{"dg-publish":true,"permalink":"/02-resources/notes/raid-1/","tags":["#raid/mirroring","#sicherheit/spiegelung","#informatik/hardware"],"noteIcon":"","updated":"2025-09-27T02:13:10.576+02:00"}
---


>RAID 1 verwendet Mirroring zur vollständigen Spiegelung von Daten auf zwei oder mehr Festplatten.

>>Alle Daten werden identisch auf mehrere Festplatten geschrieben. Jede Festplatte ist eine exakte Kopie der anderen (Spiegelung).

>[!success] Vorteile
>- **Maximale Datensicherheit**: Vollständige Redundanz aller Daten
>- **Ausfallsicherheit**: Eine Festplatte kann komplett ausfallen ohne Datenverlust
>- **Einfache Wiederherstellung**: Defekte Platte einfach austauschen
>- **Leseperformance**: Kann bei manchen Implementierungen verbessert werden

>[!warning] Nachteile
>- **50% Kapazitätsverlust**: Nur die Hälfte der Gesamtkapazität nutzbar
>- **Hohe Kosten**: Doppelte Anzahl Festplatten für gleiche Kapazität
>- **Schreibperformance**: Jeder Schreibvorgang muss auf alle Platten erfolgen

>[!example] Beispiel
>Zwei Festplatten (500GB + 500GB) = 500GB nutzbare Kapazität
>Alles was auf eine Festplatte geschrieben wird, wird automatisch auf die andere geklont

![Pasted image 20230924213530.png](/img/user/02%20-%20RESOURCES/Files/IMG/Pasted%20image%2020230924213530.png)

>[!note] Verwendung
>RAID 1 eignet sich für kritische Daten wo Ausfallsicherheit wichtiger ist als Speicherkapazität, z.B. Server oder wichtige Dokumente.
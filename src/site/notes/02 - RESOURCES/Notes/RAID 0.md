---
{"dg-publish":true,"permalink":"/02-resources/notes/raid-0/","tags":["raid/striping","performance/keine-redundanz","informatik/hardware"],"noteIcon":"","updated":"2025-10-29T12:59:09.640+01:00"}
---


>RAID 0 verwendet Striping zur Verteilung von Daten auf mehrere Festplatten ohne Redundanz.

>>Zwei oder mehr Festplatten werden zu einem logischen Laufwerk verbunden. Die Daten werden in Blöcken abwechselnd auf alle Platten geschrieben (Striping).

>[!success] Vorteile
>- **Maximale Geschwindigkeit**: Lese- und Schreibvorgänge werden parallel auf alle Platten verteilt
>- **100% Kapazitätsnutzung**: Gesamtkapazität = Summe aller Festplatten
>- **Einfache Implementierung**: Keine komplexen Berechnungen nötig

>[!danger] Nachteile
>- **Keine Redundanz**: Bei Ausfall einer Platte sind alle Daten verloren
>- **Erhöhtes Ausfallrisiko**: Wahrscheinlichkeit eines Totalausfalls steigt mit jeder zusätzlichen Platte
>- **Nicht für kritische Daten geeignet**

>[!example] Beispiel
>Zwei Festplatten (500GB + 500GB) = 1TB Gesamtkapazität
>Doppelte Geschwindigkeit bei Lese-/Schreibvorgängen

![Pasted image 20230924212842.png](/img/user/02%20-%20RESOURCES/Files/IMG/Pasted%20image%2020230924212842.png)

>[!note] Verwendung
>RAID 0 eignet sich für Anwendungen wo Geschwindigkeit wichtiger ist als Datensicherheit, z.B. Video-Editing oder Gaming.
---
{"dg-publish":true,"permalink":"/02-resources/notes/differentielle-sicherung/","tags":["informatik/backup/typ","sicherheit/it-sicherheit","änderungen/vollsicherung"],"noteIcon":"","updated":"2025-09-27T02:15:09.489+02:00"}
---


>Differentielle Sicherung sichert nur die Änderungen seit der letzten [[02 - RESOURCES/Notes/Vollsicherung\|Vollsicherung]], nicht seit dem letzten Backup.

>>Jedes differentielle Backup enthält alle Dateien, die seit der letzten Vollsicherung verändert wurden. Im Gegensatz zur [[02 - RESOURCES/Notes/Inkrementelle Sicherung\|Inkrementelle Sicherung]] werden die Änderungen kumulativ gesichert.

>[!success] Vorteile
>- **Einfache Wiederherstellung**: Nur [[02 - RESOURCES/Notes/Vollsicherung\|Vollsicherung]] + letztes Differential nötig
>- **Speichereffizienter**: Weniger Speicher als [[02 - RESOURCES/Notes/Vollsicherung\|Vollsicherung]]
>- **Schneller als Vollbackup**: Nur geänderte Dateien werden gesichert
>- **Geringere Fehleranfälligkeit**: Weniger Abhängigkeiten als bei Inkrementen

>[!warning] Nachteile
>- **Wachsende Backup-Größe**: Mit der Zeit immer größer werdend
>- **Längere Backup-Zeit**: Als [[02 - RESOURCES/Notes/Inkrementelle Sicherung\|Inkrementelle Sicherung]]
>- **Mehr Speicher**: Als inkrementelle Strategie
>- **Redundante Daten**: Unveränderte Dateien in mehreren Differentials

>[!example] Backup-Zyklus
>- Sonntag: Vollsicherung (100GB)
>- Montag: Differential (5GB) - Änderungen seit Sonntag
>- Dienstag: Differential (8GB) - Alle Änderungen seit Sonntag
>- Mittwoch: Differential (15GB) - Alle Änderungen seit Sonntag
>- **Restore Mittwoch**: Vollsicherung + Differential Mittwoch

>[!note] Verwendung
>Differentielle Sicherung ist der optimale Kompromiss zwischen [[02 - RESOURCES/Notes/Vollsicherung\|Vollsicherung]] und [[02 - RESOURCES/Notes/Inkrementelle Sicherung\|Inkrementelle Sicherung]]. Ideal für wöchentliche Vollsicherung mit täglichen Differentials.
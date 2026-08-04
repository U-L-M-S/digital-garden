---
{"dg-publish":true,"permalink":"/wiki/differentielle-sicherung/","tags":["informatik/allgemein","informatik/sicherheit","meta/allgemein"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"created":"2025-08-27","aliases":["Differenzielles Backup"],"links":"[[Backup-Strategien]]","path":"Notes","tags":["informatik/allgemein","informatik/sicherheit","meta/allgemein"]}}
---


>Differentielle Sicherung sichert nur die Änderungen seit der letzten [[wiki/Vollsicherung\|Vollsicherung]], nicht seit dem letzten Backup.

>>Jedes differentielle Backup enthält alle Dateien, die seit der letzten Vollsicherung verändert wurden. Im Gegensatz zur [[wiki/Inkrementelle Sicherung\|Inkrementelle Sicherung]] werden die Änderungen kumulativ gesichert.

>[!success] Vorteile
>- **Einfache Wiederherstellung**: Nur [[wiki/Vollsicherung\|Vollsicherung]] + letztes Differential nötig
>- **Speichereffizienter**: Weniger Speicher als [[wiki/Vollsicherung\|Vollsicherung]]
>- **Schneller als Vollbackup**: Nur geänderte Dateien werden gesichert
>- **Geringere Fehleranfälligkeit**: Weniger Abhängigkeiten als bei Inkrementen

>[!warning] Nachteile
>- **Wachsende Backup-Größe**: Mit der Zeit immer größer werdend
>- **Längere Backup-Zeit**: Als [[wiki/Inkrementelle Sicherung\|Inkrementelle Sicherung]]
>- **Mehr Speicher**: Als inkrementelle Strategie
>- **Redundante Daten**: Unveränderte Dateien in mehreren Differentials

>[!example] Backup-Zyklus
>- Sonntag: Vollsicherung (100GB)
>- Montag: Differential (5GB) - Änderungen seit Sonntag
>- Dienstag: Differential (8GB) - Alle Änderungen seit Sonntag
>- Mittwoch: Differential (15GB) - Alle Änderungen seit Sonntag
>- **Restore Mittwoch**: Vollsicherung + Differential Mittwoch

>[!note] Verwendung
>Differentielle Sicherung ist der optimale Kompromiss zwischen [[wiki/Vollsicherung\|Vollsicherung]] und [[wiki/Inkrementelle Sicherung\|Inkrementelle Sicherung]]. Ideal für wöchentliche Vollsicherung mit täglichen Differentials.
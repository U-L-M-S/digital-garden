---
{"dg-publish":true,"permalink":"/02-resources/notes/inkrementelle-sicherung/","tags":["informatik/backup/typ","sicherheit/it-sicherheit","änderungen/letztes-backup"],"noteIcon":"","updated":"2025-09-27T02:14:44.000+02:00"}
---


>Inkrementelle Sicherung sichert nur die Änderungen seit der letzten Sicherung, egal ob [[02 - RESOURCES/Notes/Vollsicherung\|Vollsicherung]] oder Inkrement.

>>Jedes inkrementelle Backup enthält nur die Dateien, die seit dem vorherigen Backup (Voll- oder Inkrement) verändert wurden. Dadurch entstehen Backup-Ketten.

>[!success] Vorteile
>- **Sehr platzsparend**: Minimal benötigter Speicherplatz
>- **Schnellste Sicherung**: Nur geänderte Dateien werden gesichert
>- **Netzwerkschonend**: Geringe Datenübertragung bei Remote-Backups
>- **Häufige Backups möglich**: Durch kurze Laufzeit

>[!warning] Nachteile
>- **Komplexe Wiederherstellung**: Benötigt [[02 - RESOURCES/Notes/Vollsicherung\|Vollsicherung]] + alle Inkremente in richtiger Reihenfolge
>- **Höhere Fehleranfälligkeit**: Ein defektes Inkrement kann ganze Kette unbrauchbar machen
>- **Aufwendige Verwaltung**: Übersicht über Backup-Ketten erforderlich
>- **Längere Restore-Zeit**: Viele Backups müssen eingespielt werden

>[!example] Backup-Kette
>- Sonntag: Vollsicherung (100GB)
>- Montag: Inkrement (5GB) - Änderungen seit Sonntag
>- Dienstag: Inkrement (3GB) - Änderungen seit Montag
>- Mittwoch: Inkrement (7GB) - Änderungen seit Dienstag
>- **Restore Mittwoch**: Vollsicherung + alle 3 Inkremente nötig

>[!note] Verwendung
>Inkrementelle Sicherung ideal für tägliche Backups mit minimaler Speicher- und Zeitbelastung. Kombiniert mit wöchentlicher [[02 - RESOURCES/Notes/Vollsicherung\|Vollsicherung]] für optimale Balance.
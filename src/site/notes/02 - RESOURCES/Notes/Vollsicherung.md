---
{"dg-publish":true,"permalink":"/02-resources/notes/vollsicherung/","tags":["informatik/backup/typ","sicherheit/it-sicherheit"],"noteIcon":"","updated":"2025-09-27T02:14:13.479+02:00"}
---


>Vollsicherung erstellt eine komplette Kopie aller Daten unabhängig davon, ob sie sich verändert haben.

>>Bei einer Vollsicherung werden alle Dateien und Ordner gesichert, auch wenn sie seit der letzten Sicherung unverändert geblieben sind. Sie bildet die Basis für alle anderen [[02 - RESOURCES/Notes/Backup-Strategien\|Backup-Strategien]].

>[!success] Vorteile
>- **Einfachheit**: Unkomplizierte Durchführung und Verwaltung
>- **Vollständigkeit**: Alle Daten sind in einem Backup-Set enthalten
>- **Schnelle Wiederherstellung**: Nur ein Backup-Lauf nötig für komplette Wiederherstellung
>- **Unabhängigkeit**: Benötigt keine anderen Backups

>[!warning] Nachteile
>- **Hoher Speicherbedarf**: Braucht viel Speicherplatz für jedes Backup
>- **Lange Backup-Zeit**: Dauert bei großen Datenmengen sehr lange
>- **Netzwerklast**: Belastet Netzwerk bei Remote-Backups stark
>- **Ressourcenintensiv**: Hohe CPU- und I/O-Belastung

>[!example] Beispiel
>Server mit 1TB Daten → Jede Vollsicherung benötigt 1TB Speicherplatz
>Wöchentliche Vollsicherung für 4 Wochen = 4TB Speicherbedarf

>[!note] Verwendung
>Vollsicherung eignet sich als Basis-Backup oder für kleine Datenmengen. In der Praxis oft kombiniert mit [[02 - RESOURCES/Notes/Inkrementelle Sicherung\|Inkrementelle Sicherung]] oder [[02 - RESOURCES/Notes/Differentielle Sicherung\|Differentielle Sicherung]] um Speicher und Zeit zu sparen.
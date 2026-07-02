---
{"dg-publish":true,"permalink":"/02-resources/notes/redundanzen/","tags":["datenbank/design","qualitätssicherung/daten","AP2025/verstaerkt"],"noteIcon":"","updated":"2026-07-02T01:13:38.518+02:00","dg-note-properties":{"tags":["datenbank/design","qualitätssicherung/daten","AP2025/verstaerkt"],"aliases":["Datenredundanz","Mehrfachspeicherung"],"links":null,"created_date":"2025-09-16"}}
---


>[[02 - RESOURCES/Notes/Redundanzen\|Redundanzen]] sind mehrfache, unnötige Speicherung derselben Information in einer Datenbank.

>>Sie entstehen durch schlechte Datenbankstruktur und führen zu [[02 - RESOURCES/Notes/Anomalien\|Anomalien]] und Inkonsistenzen.

>[!important] 
>**Redundanz-Probleme:**
>- Speicherplatz-Verschwendung
>- Update-[[02 - RESOURCES/Notes/Anomalien\|Anomalien]]
>- Dateninkonsistenzen
>- Wartungsaufwand

>[!example] 
>**Redundanz-Beispiel:**
>```
>Kunde: Max Müller, Berlin, max@mail.de
>Kunde: Max Müller, Berlin, max@mail.de
>```
>Gleiche Kundendaten in mehreren Tabellen

>[!success] 
>Normalisierung reduziert Redundanzen auf notwendiges Minimum.
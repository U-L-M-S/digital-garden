---
{"dg-publish":true,"permalink":"/wiki/redundanzen/","tags":["datenbank/design","qualitätssicherung/daten","AP2025/verstaerkt"],"noteIcon":"","updated":"2026-07-02T01:13:38.000+02:00","dg-note-properties":{"tags":["datenbank/design","qualitätssicherung/daten","AP2025/verstaerkt"],"aliases":["Datenredundanz","Mehrfachspeicherung"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Redundanzen\|Redundanzen]] sind mehrfache, unnötige Speicherung derselben Information in einer Datenbank.

>>Sie entstehen durch schlechte Datenbankstruktur und führen zu [[wiki/Anomalien\|Anomalien]] und Inkonsistenzen.

>[!important] 
>**Redundanz-Probleme:**
>- Speicherplatz-Verschwendung
>- Update-[[wiki/Anomalien\|Anomalien]]
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
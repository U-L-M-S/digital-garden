---
{"dg-publish":true,"permalink":"/wiki/redundanzen/","tags":["informatik/software","informatik/daten","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.659+02:00","dg-note-properties":{"tags":["informatik/software","informatik/daten","ausbildung/pruefung"],"aliases":["Datenredundanz","Mehrfachspeicherung"],"links":null,"created_date":"2025-09-16"}}
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
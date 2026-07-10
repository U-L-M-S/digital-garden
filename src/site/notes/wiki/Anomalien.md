---
{"dg-publish":true,"permalink":"/wiki/anomalien/","tags":["datenbank/design","qualitätssicherung/daten"],"noteIcon":"","updated":"2026-07-02T01:13:38.000+02:00","dg-note-properties":{"tags":["datenbank/design","qualitätssicherung/daten"],"aliases":["Datenbank-Anomalien","Update-Anomalien","Einfüge-Anomalien"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Anomalien\|Anomalien]] sind unerwünschte Seiteneffekte bei Datenbankoperationen durch schlechtes Design.

>>Sie entstehen durch Verletzung der Normalisierungsregeln und führen zu Dateninkonsistenzen.

>[!important] 
>**Anomalie-Arten:**
>- **Update-Anomalie**: Änderung an mehreren Stellen nötig
>- **Einfüge-Anomalie**: Daten ohne Kontext nicht speicherbar
>- **Lösch-Anomalie**: Datenverlust bei Löschung

>[!example] 
>**Update-Anomalie Beispiel:**
>Mitarbeiter-Abteilung in jeder Zeile → Abteilungsname ändern erfordert Update aller Zeilen

>[!success] 
>Normalisierung ([[wiki/1. Normalform\|1. Normalform]], [[wiki/2. Normalform\|2. Normalform]], [[wiki/3. Normalform\|3. Normalform]]) verhindert Anomalien.
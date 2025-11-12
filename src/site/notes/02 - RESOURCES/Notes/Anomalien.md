---
{"dg-publish":true,"permalink":"/02-resources/notes/anomalien/","tags":["datenbank/design","qualitaetssicherung/daten"],"noteIcon":"","updated":"2025-10-29T12:59:02.000+01:00"}
---


>[[02 - RESOURCES/Notes/Anomalien\|Anomalien]] sind unerwünschte Seiteneffekte bei Datenbankoperationen durch schlechtes Design.

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
>Normalisierung ([[02 - RESOURCES/Notes/1. Normalform\|1. Normalform]], [[02 - RESOURCES/Notes/2. Normalform\|2. Normalform]], [[02 - RESOURCES/Notes/3. Normalform\|3. Normalform]]) verhindert Anomalien.
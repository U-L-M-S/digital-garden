---
{"dg-publish":true,"permalink":"/02-resources/notes/mutationsanomalie/","tags":["datenbank"],"noteIcon":"","updated":"2025-07-12T13:31:41.000+02:00"}
---

> Diese Art von [[02 - RESOURCES/Notes/Anomalie\|Anomalie]] trifft auf wenn [[02 - RESOURCES/Notes/Redundanz\|Redundanz]]daten erscheinen.

### Tabelle: Kunden

| ==KnID== | ==Name==         | ==Adresse==       | ==Telefon==     | BstlID | BstlDatum  | BstlMenge |
| ---- | ------------ | ------------- | ----------- | ------ | ---------- | --------- |
| ==1==    | ==Max Müller==   | ==Hauptstraße 1== | ==01234/56789== | 1001   | 2024-01-15 | 2         |
| ==1==    | ==Max Müller==   | ==Hauptstraße 1== | ==01234/56789== | 1002   | 2024-02-20 | 1         |
| ==2==    | ==Anna Schmidt== | ==Nebenstraße 3== | ==09876/54321== | 1003   | 2024-03-10 | 5         |
| ==2==    | ==Anna Schmidt== | ==Nebenstraße 3== | ==09876/54321== | 1004   | 2024-03-12 | 3         |

Hier wird die Kundeinfo **IMMER** abgerufen bei jeder neue Bestellung(KnID, Name, Adresse, Telefon).
Man kann diese in 2 Tabellen teilen.
### Tabelle: Kunden

| ==KnID== | ==Name==         | ==Adresse==       | ==Telefon==     |
| ---- | ------------ | ------------- | ----------- |
| ==1==    | ==Max Müller==   | ==Hauptstraße 1== | ==01234/56789== |
| ==2==    | ==Anna Schmidt== | ==Nebenstraße 3== | ==09876/54321== |
### Tabelle: Bestellungen

| BstlID | ==KnID== | BstlDatum  | BstlMenge |
| ------ | ---- | ---------- | --------- |
| 1001   | ==1==    | 2024-01-15 | 2         |
| 1002   | ==1==    | 2024-02-20 | 1         |
| 1003   | ==2==    | 2024-03-10 | 5         |
| 1004   | ==2==    | 2024-03-12 | 3         |

>[!summary] 
>Somit kann man bei jeder Bestellung sich unter <mark style="background: #FFF3A3A6;">KnID</mark> sich orientieren wer der Kunde ist.
>Sowas nennt man [[02 - RESOURCES/Notes/2. Normalform\|2. Normalform]] 
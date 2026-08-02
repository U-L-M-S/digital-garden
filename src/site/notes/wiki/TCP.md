---
{"dg-publish":true,"permalink":"/wiki/tcp/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.636+02:00","dg-note-properties":{"aliases":["Transmission Control Protocol"],"created":"2024-07-02 15:10","links":null,"tags":["informatik/netzwerk"]}}
---

>Transmission Control Protocol 
>>Ein Standardprotokoll, das für die Übertragung von [[wiki/Datenpakete\|Datenpakete]]n verwendet wird.

Es stellt sicher, dass die [[wiki/Datenpakete\|Datenpakete]] vollständig und fehlerfrei ihr Ziel erreichen.
Es wird oft verwendet für Protokolle wie:
- [[wiki/HTTP\|HTTP]] / [[wiki/HTTPS\|HTTPS]] (Web-Browsing)
- [[wiki/SMTP\|SMTP]](E-Mail)
- [[wiki/FTP\|FTP]] (Datenübertragung)

Es ist leider etwas langsamer als [[wiki/UDP\|UDP]].

| | TCP | [[wiki/UDP\|UDP]] |
| :--- | :--- | :--- |
| Verbindung | verbindungsorientiert | verbindungslos |
| reihenfolgetreu | ✅ ja ([[wiki/Sequenznummer\|Sequenznummer]]n) | ❌ nein |
| Staukontrolle | ✅ ja ([[wiki/TCP-Staukontrolle\|TCP-Staukontrolle]]) | ❌ nein |
| Fehler | erkennt **& behebt** | erkennt nur Bitfehler (Prüfsumme), behebt nicht |

Verbindungsauf- und -abbau im Detail: [[wiki/TCP-Zustandsautomat\|TCP-Zustandsautomat]].

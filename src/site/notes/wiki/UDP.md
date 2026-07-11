---
{"dg-publish":true,"permalink":"/wiki/udp/","tags":["informatik/netzwerk/protokoll"],"noteIcon":"","updated":"2026-07-11T00:23:21.951+02:00","dg-note-properties":{"aliases":["User Datagram Protocol"],"created":"2024-07-22 11:21","links":null,"tags":["informatik/netzwerk/protokoll"]}}
---

> User Datagram Protocol
> > Standardprotokoll, das für die Übertragung von [[wiki/Datenpakete\|Datenpakete]]n verwendet wird.

Es bietet eine schnelle, aber ungesicherte Übertragung, da es keine Garantie für die vollständige oder fehlerfreie Ankunft der [[wiki/Datenpakete\|Datenpakete]] gibt. 
Es wird häufig für Anwendungen genutzt, die Echtzeitdaten übertragen, wie z. B. **Video- und Audiostreaming.**

Per Prüfsumme erkennt UDP nur ==Bitfehler== — Verluste merkt es nicht (keine [[wiki/Sequenznummer\|Sequenznummer]]n, keine Quittungen). Direkter Vergleich: siehe [[wiki/TCP\|TCP]].
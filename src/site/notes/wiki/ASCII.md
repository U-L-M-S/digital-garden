---
{"dg-publish":true,"permalink":"/wiki/ascii/","noteIcon":"","updated":"2026-07-11T09:07:42.480+02:00","dg-note-properties":{"tags":null,"aliases":["American Standard Code for Information Interchange"],"links":null,"path":"Notes","created":"2024-08-13 08:38"}}
---

>Zeichencodierungssystem mit 128 Zeichen.

![ASCII-20240813090146146.png](/img/user/assets/IMG/ASCII-20240813090146146.png)

# I. Aufbau
___
- **7 Bit** pro Zeichen (das 8. war ursprünglich ein Prüfbit) → $2^7 = 128$ Zeichen.
- Codes `0x00`–`0x1F` = ==Steuerzeichen==, `0x20`–`0x7F` = druckbare Zeichen.
- Merk-Anker: `'A'` = `0x41`, `'a'` = `0x61`, `'0'` = `0x30`.

>[!warning] Grenzen
>Keine Umlaute, keine anderen Alphabete → nationale Behelfslösungen wie **DIN 66003** ersetzten `[ \ ] { | }` durch `Ä Ö Ü ä ö ü ß`. Erweitert durch ISO 8859-1/Latin-1 (8 Bit), heute abgelöst von [[Unicode\|Unicode]] mit [[UTF-8\|UTF-8]] (das ASCII-kompatibel bleibt: häufige Zeichen = 1 Byte).
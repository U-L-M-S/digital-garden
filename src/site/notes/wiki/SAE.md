---
{"dg-publish":true,"permalink":"/wiki/sae/","tags":["informatik/sicherheit"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["SAE","Simultaneous Authentication of Equals"],"created":"2024-08-04 23:31","links":null,"path":"Notes","tags":["informatik/sicherheit"]}}
---

>**SAE** (Simultaneous Authentication of Equals) ist das Schlüsselaustausch-Verfahren, das [[wiki/WPA3 und WPA3-Enterprise\|WPA3]] anstelle des unsicheren 4-Way-Handshakes von [[wiki/WPA2\|WPA2]] verwendet.
>>Auch bekannt als **Dragonfly-Handshake**. Es schützt gezielt vor Offline-Wörterbuchangriffen auf das WLAN-Passwort.

>[!check] Vorteile gegenüber WPA2
>- Mitschneiden des Handshakes erlaubt keinen Offline-Brute-Force mehr (Forward Secrecy)
>- Jede Sitzung bekommt einen eigenen, frischen Schlüssel
>- Schützt auch bei schwächeren Passwörtern deutlich besser

>[!info] Verbindung
>Kernbestandteil von [[wiki/WPA3 und WPA3-Enterprise\|WPA3 und WPA3-Enterprise]], löst die Schwachstellen von [[wiki/WPA2\|WPA2]] und [[wiki/WEP\|WEP]] ab.

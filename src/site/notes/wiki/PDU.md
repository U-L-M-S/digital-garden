---
{"dg-publish":true,"permalink":"/wiki/pdu/","tags":["ausbildung/pruefung","informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.883+02:00","dg-note-properties":{"aliases":["Protocol Data Unit"],"created":"2024-07-17 16:26","links":null,"path":"Notes","tags":["ausbildung/pruefung","informatik/netzwerk"]}}
---

> Protocol Data Unit
>>**Some People Fears Birthdays**

Protokoll, der die Verantwortung hat die bestimmte Information von jeder Layer in das [[wiki/Datenpakete\|Datenpakete]] einzusetzen.

- Von [[wiki/Layer 5\|Layer 5]] bis [[wiki/Layer 7\|Layer 7]] erkennt man das als 'Message' (Nicht wichtig für [[wiki/PDU\|PDU]]).

- [[wiki/Layer 4\|Layer 4]] setzt das **Segment** ein. Das ist nicht anders als die Information, ob das [[wiki/Datenpakete\|Datenpakete]] [[wiki/TCP\|TCP]] oder [[wiki/UDP\|UDP]] verwendet.
- [[wiki/Layer 3\|Layer 3]] setzt das **Packet** ein. Ziel des [[wiki/IP-Adresse\|IP-Adresse]].
- [[wiki/Layer 2\|Layer 2]] setzt das **Frame** ein. Informationen über das [[wiki/MAC Adresse\|MAC Adresse]] von Sender und Empfänger.
- [[wiki/Layer 1\|Layer 1]] setzt die **Bits** ein. Informationen über die Übertragung: elektronische Signale, Lichtimpulsen, Funkwellen.
![PDU-20240722114159211.png](/img/user/assets/IMG/PDU-20240722114159211.png)
---
{"dg-publish":true,"permalink":"/02-resources/notes/pdu/","tags":["netzwerk/protocol","GFN/prüfungsrelevant/AP1"],"noteIcon":"","updated":"2025-08-26T16:35:06.000+02:00"}
---

> Protocol Data Unit
>>**Some People Fears Birthdays**

Protokoll, der die Verantwortung hat die bestimmte Information von jeder Layer in das [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] einzusetzen.

- Von [[02 - RESOURCES/Notes/Layer 5\|Layer 5]] bis [[02 - RESOURCES/Notes/Layer 7\|Layer 7]] erkennt man das als 'Message' (Nicht wichtig für [[02 - RESOURCES/Notes/PDU\|PDU]]).

- [[02 - RESOURCES/Notes/Layer 4\|Layer 4]] setzt das **Segment** ein. Das ist nicht anders als die Information, ob das [[02 - RESOURCES/Notes/Datenpakete\|Datenpakete]] [[02 - RESOURCES/Notes/TCP\|TCP]] oder [[02 - RESOURCES/Notes/UDP\|UDP]] verwendet.
- [[02 - RESOURCES/Notes/Layer 3\|Layer 3]] setzt das **Packet** ein. Ziel des [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]].
- [[02 - RESOURCES/Notes/Layer 2\|Layer 2]] setzt das **Frame** ein. Informationen über das [[02 - RESOURCES/Notes/MAC Adresse\|MAC Adresse]] von Sender und Empfänger.
- [[02 - RESOURCES/Notes/Layer 1\|Layer 1]] setzt die **Bits** ein. Informationen über die Übertragung: elektronische Signale, Lichtimpulsen, Funkwellen.
![PDU-20240722114159211.png](/img/user/02%20-%20RESOURCES/Files/IMG/PDU-20240722114159211.png)
---
{"dg-publish":true,"permalink":"/wiki/routing/","tags":["ausbildung/gfn/ap1","informatik/netzwerk/gateway"],"noteIcon":"","updated":"2026-07-11T00:23:11.148+02:00","dg-note-properties":{"aliases":["Routing","routing"],"created":"2024-07-23 10:05","links":null,"path":"Notes","tags":["ausbildung/gfn/ap1","informatik/netzwerk/gateway"]}}
---

>Methode zu [[wiki/Verwaltung\|Verwaltung]] der Weiterleitung von [[wiki/Datenpakete\|Datenpakete]]n.

Diese kann entweder [[wiki/Statisches Routing\|Statisches Routing]] oder [[wiki/Dynamisches Routing\|Dynamisches Routing]] sein.

Die Routingtabelle wählt immer den Eintrag mit dem ==längsten passenden Präfix== (**Longest Prefix Match**). Passt gar nichts → **Default-Route** `0.0.0.0/0`, also ab zum [[wiki/Gateway\|Gateway]].

| Ziel | passende Einträge | gewählt |
| :--- | :--- | :--- |
| `192.168.1.7` | `192.168.0.0/16` **und** `192.168.1.0/24` | `/24` (länger = genauer) |
| `8.8.8.8` | keiner | `0.0.0.0/0` (Default) |
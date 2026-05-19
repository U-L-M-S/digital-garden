---
{"dg-publish":true,"permalink":"/02-resources/notes/connection-pool/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:39:14.493+02:00","dg-note-properties":{"aliases":["connection pool","verbindungspool","jdbc pool"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>Ein [[02 - RESOURCES/Notes/Connection Pool\|Connection Pool]] ist eine Sammlung vorgewärmter DB-Verbindungen.
>>Vermeidet TCP-Handshake + DB-Login bei jedem Request.

# I. Wofür?
___
Ein normaler DB-Connect kostet:
1. TCP-Handshake (3-Way)
2. TLS-Handshake (falls aktiv)
3. DB-Login (Auth + User-Setup)

Das dauert. Ein Pool macht das **einmal** und gibt die Connection bei jedem Request kurz raus, danach zurück in den Pool.

# II. Konfiguration in WildFly
___
- `min-pool-size=1` → mindestens 1 Connection offen
- `max-pool-size=10` → maximal 10 parallel
- Liegt auf der [[02 - RESOURCES/Notes/Datasource\|Datasource]]

# III. Visualisierung
___
```
Datasource (LeviLearningDS)
  ├─ C1 ──┐
  ├─ C2 ──┼──> EntityManager A (Request 1)
  ├─ C3 ──┘    EntityManager B (Request 2)
  ├─ C4
  └─ .. (bis max=10)
```

>[!tip] .NET-Vergleich
>ADO.NET hat eingebautes Connection-Pooling. Bei JDBC muss der App-Server (= WildFly) es bereitstellen.

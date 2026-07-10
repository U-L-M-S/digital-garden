---
{"dg-publish":true,"permalink":"/wiki/object-pool/","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/pattern"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["object pool","ejb pool","instance pool"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/pattern"]}}
---

>Ein [[wiki/Object Pool\|Object Pool]] ist eine Sammlung von vorinstanziierten Objekten, die wiederverwendet werden.
>>In [[wiki/Jakarta EE\|Jakarta EE]] nutzt [[wiki/@Stateless\|@Stateless]] einen Pool von Bean-Instanzen.

# I. Wofür?
___
Statt für jeden Request eine neue Bean zu erstellen, hält der Container N Instanzen bereit und reicht sie bei Bedarf raus.

# II. Visualisierung
___
```
HelloBean-Pool:
  ┌─────┐ ┌─────┐ ┌─────┐
  │ B1  │ │ B2  │ │ B3  │ ... (alle gleichwertig)
  └─────┘ └─────┘ └─────┘
     ↑       ↑
  Thread1  Thread2 (parallel, keine Wartezeit)
```

# III. Konsequenz für mich
___
- Bei [[wiki/@Stateless\|@Stateless]]: niemals Member-State mit User-Daten füllen — die nächste Anfrage könnte eine andere Instanz erwischen (oder dieselbe mit alten Werten)
- Bei [[wiki/Singleton\|@Singleton]]: **kein** Pool (nur 1 Instanz)
- Bei [[wiki/@Stateful\|@Stateful]]: **kein** Pool (1 pro Client)

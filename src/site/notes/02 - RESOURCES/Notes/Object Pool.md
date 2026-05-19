---
{"dg-publish":true,"permalink":"/02-resources/notes/object-pool/","tags":["informatik/code/java/framework","informatik/code/pattern"],"noteIcon":"","updated":"2026-05-19T14:43:37.522+02:00","dg-note-properties":{"aliases":["object pool","ejb pool","instance pool"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/pattern"]}}
---

>Ein [[02 - RESOURCES/Notes/Object Pool\|Object Pool]] ist eine Sammlung von vorinstanziierten Objekten, die wiederverwendet werden.
>>In [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]] nutzt [[02 - RESOURCES/Notes/@Stateless\|@Stateless]] einen Pool von Bean-Instanzen.

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
- Bei [[02 - RESOURCES/Notes/@Stateless\|@Stateless]]: niemals Member-State mit User-Daten füllen — die nächste Anfrage könnte eine andere Instanz erwischen (oder dieselbe mit alten Werten)
- Bei [[02 - RESOURCES/Notes/Singleton\|@Singleton]]: **kein** Pool (nur 1 Instanz)
- Bei [[02 - RESOURCES/Notes/@Stateful\|@Stateful]]: **kein** Pool (1 pro Client)

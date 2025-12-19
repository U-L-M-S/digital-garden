---
{"dg-publish":true,"permalink":"/02-resources/notes/rechenwerk/","tags":["hardware/cpu","informatik/architektur"],"noteIcon":"","updated":"2025-10-29T12:59:09.739+01:00"}
---


> Verarbeitet die Befehle des [[02 - RESOURCES/Notes/Steuerwerk\|Steuerwerk]]s durch mathematische und logische Rechenoperationen.

>> Hauptbestandteil ist die ALU (Arithmetic Logic Unit) mit spezialisierten Registern.

>[!info] ALU-Komponenten
>- **Datenregister**: Speichert zu verarbeitende Daten
>- **Akkumulator**: Speichert Zwischenergebnisse
>- **Operation**: Kommt vom [[02 - RESOURCES/Notes/Steuerwerk\|Steuerwerk]] (z.B. ADD)
>- **Ergebnis**: Zurück zum [[02 - RESOURCES/Notes/Steuerwerk\|Steuerwerk]] mit Status

>[!example] Rechenoperation
>```
>Datenregister A: 5
>Datenregister B: 3
>Operation: ADD
>→ Akkumulator: 8
>→ Status: Positive Zahl, kein Überlauf
>```

---
---
{"dg-publish":true,"permalink":"/wiki/rechenwerk/","tags":["informatik/hardware","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.943+02:00","dg-note-properties":{"tags":["informatik/hardware","informatik/software"],"aliases":["ALU","Arithmetic Logic Unit","Recheneinheit"],"links":null,"created_date":"2024-12-19"}}
---


> Verarbeitet die Befehle des [[wiki/Steuerwerk\|Steuerwerk]]s durch mathematische und logische Rechenoperationen.

>> Hauptbestandteil ist die ALU (Arithmetic Logic Unit) mit spezialisierten Registern.

>[!info] ALU-Komponenten
>- **Datenregister**: Speichert zu verarbeitende Daten
>- **Akkumulator**: Speichert Zwischenergebnisse
>- **Operation**: Kommt vom [[wiki/Steuerwerk\|Steuerwerk]] (z.B. ADD)
>- **Ergebnis**: Zurück zum [[wiki/Steuerwerk\|Steuerwerk]] mit Status

>[!example] Rechenoperation
>```
>Datenregister A: 5
>Datenregister B: 3
>Operation: ADD
>→ Akkumulator: 8
>→ Status: Positive Zahl, kein Überlauf
>```

---
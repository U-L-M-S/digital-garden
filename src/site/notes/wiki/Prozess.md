---
{"dg-publish":true,"permalink":"/wiki/prozess/","tags":["projektmanagement","informatik"],"noteIcon":"","updated":"2026-07-11T09:09:33.342+02:00","dg-note-properties":{"created":"2024-05-16 09:22","links":null,"tags":["projektmanagement","informatik"]}}
---

>Eine **Aufgabe** ist in der Computerwelt eine einzelne, definierte Handlung oder Operation, die von einem Computer ausgeführt wird. Alle Aufgaben, die ein Computer durchführt, sind oft im Hintergrund verborgen und laufen automatisiert ab.
>>Diese Aufgaben können von der Verarbeitung von Daten bis hin zur Ausführung von Programmen oder Befehlen reichen. In komplexeren Systemen werden Aufgaben in Prozesse unterteilt, die gleichzeitig ablaufen können, wobei der Computer je nach Ressourcen und Anforderungen diese Aufgaben effizient ausführt. 
>>Ein Prozess ist eine Instanz eines Programms, das in Ausführung ist, und besteht aus einer Reihe von Aufgaben, die nacheinander oder parallel bearbeitet werden, um das gewünschte Ergebnis zu erzielen.

Genauer: Ein Prozess ist der **aktuelle Zustand** eines laufenden Programms — Maschinencode + Programmzähler + alle Variablen & [[wiki/Register\|Register]]inhalte.

>[!tip] Kochrezept-Analogie
>Das **Programm** ist das Rezept (statisch). Der **Prozess** ist der aktuelle Kochvorgang: bereitgelegte Zutaten, Zustand der Töpfe, Herdtemperatur und der Punkt im Rezept, an dem man gerade ist (= Programmzähler).

# Prozesszustände
___
Ein Prozess ist immer in genau einem von ==drei Zuständen==:

| Zustand | engl. | Bedeutung |
| :--- | :--- | :--- |
| **Rechnend** | running | wird *gerade* auf der [[wiki/CPU\|CPU]] ausgeführt |
| **Bereit** | ready | will rechnen, wartet aber auf CPU-Zeit |
| **Blockiert** | blocked | wartet auf ein Ereignis, bewirbt sich *nicht* um CPU |

```
             (2) CPU zugeteilt
   ┌────────┐ ──────────────► ┌──────────┐
   │ BEREIT │                 │ RECHNEND │──(6)─► beendet
   └────────┘ ◄────────────── └──────────┘
     ▲    ▲    (3) Zeit abgelaufen    │
     │    │        (Scheduler)        │ (4) wartet auf
 (1) │    └───────────────┐           │     Ereignis (I/O)
 gestartet                │           ▼
                 (5) Ereignis   ┌───────────┐
                 eingetroffen ──│ BLOCKIERT │
                                └───────────┘
```

Die Übergänge steuert das [[wiki/Scheduling\|Scheduling]]; den Wechsel selbst macht der [[wiki/Kontextwechsel\|Kontextwechsel]]. Läuft ein terminierter Prozess fehlerhaft weiter → [[wiki/Zombieprozess\|Zombieprozess]].
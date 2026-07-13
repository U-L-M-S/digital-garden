---
{"dg-publish":true,"permalink":"/wiki/prozess/","tags":["projektmanagement","informatik"],"noteIcon":"","updated":"2026-07-11T19:49:39.000+02:00","dg-note-properties":{"created":"2024-05-16 09:22","links":null,"tags":["projektmanagement","informatik"]}}
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

Die Übergänge steuert das [[Scheduling\|Scheduling]]; den Wechsel selbst macht der [[wiki/Kontextwechsel\|Kontextwechsel]].

# Prozesskontrollblock (PCB)

Das Betriebssystem verwaltet jeden Prozess über einen **[[Prozesskontrollblock\|Prozesskontrollblock]]** ([[PCB\|PCB]]), ein Datensatz mit:
- **Prozess-ID** (PID) — eindeutige Nummer
- **Priorität** — Scheduling-Priorität
- **Besitzer** (User-ID) — wer hat den Prozess gestartet
- **Registerstatus** — alle Register-Werte (beim Kontextwechsel gespeichert)
- **Programmzähler** + **Programmstatuswort** (PSW)
- **Speicherbereich** (Anfangsadresse, Größe)
- **Offene Dateien** (Filedeskriptoren)

Alle PCBs liegen in der **[[Prozesstabelle\|Prozesstabelle]]** (Kernel-Speicher). Der Scheduler konsultiert sie ständig: wer läuft, wer blockiert, wer bereit?

# Prozess-Lifecycle

## Starten
1. Betriebssystem erzeugt einen neuen Prozess (PCB anlegen).
2. Programm + Daten werden aus dem Dateisystem in den RAM geladen.
3. Jeder Prozess erhält **eigenen Speicherbereich** (per [[Speichervirtualisierung\|Speichervirtualisierung]]).
4. Der **Elternprozess** hat nach dem Start *keinen* direkten Zugriff auf die Daten des [[Kindprozess\|Kindprozess]]es (Speichertrennung durch das BS).

## Beenden
- **Normal:** Prozess beendet sich selbst (Programm zu Ende, Nutzer beendet, `exit()`).
- **Erzwungen:** Anderer Prozess / Kernel terminiert ihn (Crash bei Division durch 0, `kill`, Memory-Limit überschritten).
- ⚠️ **Zombieprozess**: Läuft ein terminierter Prozess fehlerhaft weiter oder ist seine Ausgabe nicht gelesen, bleibt der PCB in der Prozesstabelle → blockiert Slot. (Unter Linux: Elternprozess muss `wait()` aufrufen.)

- Zu *einem* [[Programm\|Programm]] können **mehrere** Prozesse gleichzeitig existieren (z.B. drei Firefox-Fenster laufen technisch als drei Prozesse).
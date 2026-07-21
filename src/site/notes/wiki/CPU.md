---
{"dg-publish":true,"permalink":"/wiki/cpu/","tags":["ausbildung/pruefung","informatik/hardware","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["ausbildung/pruefung","informatik/hardware","informatik/software"],"aliases":["Prozessor","Central Processing Unit","Hauptprozessor"],"links":null,"created_date":"2024-12-19"}}
---


> Das Herzstück des Computers - führt alle Befehle und Berechnungen aus wie ein sehr schneller digitaler Rechner.

>> Besteht aus [[wiki/Steuerwerk\|Steuerwerk]], [[wiki/Rechenwerk\|Rechenwerk]] und [[Speichermanager\|Speichermanager]] mit [[wiki/Cache\|Cache]].

>[!info] Prozessor-Aufbau
>**Hauptkomponenten:**
>- **[[wiki/Steuerwerk\|Steuerwerk]]** - lädt und interpretiert Befehle
>- **[[wiki/Rechenwerk\|Rechenwerk]]** - führt mathematische/logische Operationen aus
>- **[[Speichermanager\|Speichermanager]]** - verwaltet Datenaustausch mit [[wiki/RAM\|RAM]]

>[!example] Prozessor-Zyklus
>1. Nächsten Befehl laden → Befehlsregister
>2. Befehlszähler erhöhen & Befehl dekodieren  
>3. Benötigte Werte laden
>4. [[ALU\|ALU]] führt Operation aus
>5. Ergebnis → Datenregister und Statusregister

>[!tip] 
>Alle PC-Aktionen basieren nur auf: Additionen, Wertvergleichen, Laden und Speichern von Daten.

# Von-Neumann-Zyklus (Fetch-Decode-Execute-Zyklus)

Die CPU arbeitet vom Start bis zum Herunterfahren **immer denselben Zyklus** ab:

```
FETCH             DECODE              FETCH OPERANDS       EXECUTE           WRITE BACK
┌─────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐  ┌────────────┐
│ Befehl aus  │─→ │ Steuerwerk   │─→ │ Operanden    │─→ │ Rechenwerk   │─→ │ Ergebnis   │
│ Speicher    │   │ übersetzt    │   │ laden        │   │ führt        │   │ ins        │
│ ins Befehls-│   │ in Anweisungen   │ ins Daten-   │   │ Befehl aus   │   │ Ergebnis-  │
│ register    │   │              │   │ register     │   │              │   │ register   │
└─────────────┘   └──────────────┘   └──────────────┘   └──────────────┘  └────────────┘
     ~1 Takt          ~1 Takt           ~1 Takt           ~1 Takt           ~1 Takt
                                                                                ↓
                                                           ┌────────────────────────────┐
                                                           │ nächster Befehl (zurück zu FETCH)
                                                           └────────────────────────────┘
```

- **Idealfall:** 1 [[Clock-Cycle\|Taktzyklus]] pro Schritt. 
- **Praktisch:** Verzögerung droht, wenn Daten aus dem langsamen Speicher geladen werden müssen ([[von-Neumann-Flaschenhals\|von-Neumann-Flaschenhals]]).
- **[[Taktrate\|Taktrate]]** (Taktfrequenz): gemessen in Hertz; typisch 2–5 GHz. Ein Taktzyklus dauert dann z.B. bei 2 GHz: 1/(2×10⁹) = 0,5 ns.

# Befehlssatz: RISC vs. CISC

Man unterscheidet die [[Maschinensprache\|Maschinensprache]] (für den Programmierer sichtbarer [[Befehlssatz\|Befehlssatz]]) von den internen [[Mikrobefehl\|Mikrobefehl]]en (entsprechen den Schaltkreisen).

| | **[[wiki/RISC\|RISC]]** (Reduced Instruction Set) | **[[wiki/CISC\|CISC]]** (Complex Instruction Set) |
| :--- | :--- | :--- |
| Befehle | wenige, einfach (direkt Schaltkreise) | viele, komplexe |
| Mikrobefehle | nicht nötig (1 Takt/Befehl) | komplexe Befehle = viele Mikrobefehle |
| Beispiele | **[[ARM\|ARM]]** (Smartphones, Supercomputer) | **[[Intel x86\|Intel x86]]** (Kompatibilität zu Vorgängern) |
| Vorteil | schnell, simpel | eine Anweisung ersetzt viele RISC-Befehle |
| Nachteil | Programm braucht mehr Befehle | langsamer pro Befehl |

- Moderne CISC-Prozessoren sind ein **Hybrid**: häufige Befehle direkt (1 Takt), seltene via Mikrobefehle.

# Rechenwerk und Steuerwerk

| Komponente | Aufgabe |
| :--- | :--- |
| **[[wiki/Rechenwerk\|Rechenwerk]]** (ALU = Arithmetic Logic Unit) | führt Berechnungen & logische Verknüpfungen aus (die eigentlichen Schaltkreise aus [[Logik & Schaltkreise\|Logik & Schaltkreise]]) |
| **[[wiki/Steuerwerk\|Steuerwerk]]** | Ablaufsteuerung: welcher Befehl kommt nächsten, wo liegt er im RAM, welcher Schaltkreis wird aktiviert |
| **[[wiki/Register\|Register]]** | winzige Speicherzellen *in* der CPU; Werte müssen erst hier rein, bevor gerechnet wird. z.B. Programmzähler ([[Program Counter\|PC]]), Stack Pointer (SP), Programmstatuswort (PSW) |

- Register sind als [[wiki/SRAM\|SRAM]] gebaut (sehr schnell, aber teuer), daher begrenzte Zahl (~64 in einem ARM-Core).
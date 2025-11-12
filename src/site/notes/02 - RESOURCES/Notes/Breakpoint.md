---
{"dg-publish":true,"permalink":"/02-resources/notes/breakpoint/","tags":["programmierung/debugging","entwicklung/tools","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:20:41.000+01:00"}
---

>Ein Breakpoint (Haltepunkt) ist eine markierte Stelle im Code, an der das Programm während des [[02 - RESOURCES/Notes/Debugging\|Debugging]]s anhält.
>>Der Entwickler kann dann Variablenwerte prüfen und Schritt für Schritt durch den Code gehen.

>[!summary] Was ist ein Breakpoint?
>- **Pause-Knopf** für das Programm
>- **Inspizieren** von Variablen während der Laufzeit
>- **Schritt-für-Schritt** durch Code gehen

![image-108.png](/img/user/02%20-%20RESOURCES/Files/image-108.png)

```
BREAKPOINT-FUNKTIONSWEISE

Code ausführen         Breakpoint erreicht
      │                       │
      ▼                       ▼
┌──────────┐            ┌──────────┐
│ Zeile 1  │            │ Zeile 5  │ ⏸️ STOP!
│ Zeile 2  │            │ (Break)  │
│ Zeile 3  │            └──────────┘
│ Zeile 4  │                  │
│ Zeile 5  │◄─────────────────┘
│ Zeile 6  │
│ Zeile 7  │            Entwickler prüft:
└──────────┘            • Variablenwerte
                        • Programmzustand
                        • Stack Trace
```

>[!important] Breakpoint-Arten
>
>**1. Line Breakpoint (Zeilen-Haltepunkt)**
>- Stoppt bei einer bestimmten Zeile
>- Am häufigsten verwendet
>
>**2. Conditional Breakpoint (Bedingt)**
>- Stoppt nur wenn Bedingung erfüllt
>- Beispiel: `i == 50` (stoppt nur bei i=50)
>
>**3. [[02 - RESOURCES/Notes/Exception\|Exception]] Breakpoint**
>- Stoppt bei bestimmten Fehlern ([[02 - RESOURCES/Notes/Exception\|Exception]]s)
>- z.B. bei NullPointerException
>
>**4. Method Breakpoint**
>- Stoppt beim Aufruf einer [[02 - RESOURCES/Notes/Methode\|Methode]]
>- Nützlich für [[02 - RESOURCES/Notes/Methode\|Methode]]nanalyse

>[!example] Praktisches Beispiel
>```java
>public void calculateSum(int a, int b) {
>    int result = a + b; // 🔴 Breakpoint hier setzen
>    System.out.println(result);
>}
>
>// Wenn Breakpoint erreicht wird:
>// → Programm stoppt
>// → Entwickler sieht: a = 5, b = 10
>// → Kann prüfen ob result = 15 ist
>```

```
DEBUGGING MIT BREAKPOINT

1. Breakpoint setzen
   │
   ▼
┌─────────────────────┐
│  int x = 10;        │
│  int y = 20;        │
│  int sum = x + y;   │ 🔴 Breakpoint
│  print(sum);        │
└─────────────────────┘
   │
   ▼
2. Programm starten (Debug-Modus)
   │
   ▼
3. Programm stoppt bei Breakpoint
   │
   ▼
┌─────────────────────┐
│ Variablen prüfen:   │
│  x = 10 ✓           │
│  y = 20 ✓           │
│  sum = 30 ✓         │
└─────────────────────┘
   │
   ▼
4. Weiter oder Schritt für Schritt
```

>[!tip] Bedingte Breakpoints - Mächtiges Tool!
>**Problem:** Schleife läuft 1000 Mal, Fehler nur bei i=999
>
>```java
>for (int i = 0; i < 1000; i++) {
>    process(i); // 🔴 Bedingter Breakpoint: i == 999
>}
>```
>
>**Vorteil:** Stoppt nur beim Problem, nicht bei jedem Durchlauf!

>[!warning] Breakpoints in Produktion
>Breakpoints sind nur für **Entwicklung** gedacht!
>- Nie in produktivem Code lassen
>- Verwende Logging für Produktion

>[!note] Breakpoint-Aktionen in IDE
>Wenn Breakpoint erreicht:
>- **Step Over (F8):** Nächste Zeile
>- **Step Into (F7):** In Methode hineinspringen
>- **Step Out:** Aus Methode herausspringen
>- **Resume (F9):** Bis zum nächsten Breakpoint
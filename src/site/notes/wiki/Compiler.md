---
{"dg-publish":true,"permalink":"/wiki/compiler/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Compiler","compiler"],"created_date":"2024-10-22","links":null,"tags":["informatik/code"]}}
---

>Es übersetzt den gesamten Quellcode in einer Programmiersprache in Maschinencode (z. B. eine .exe-Datei), bevor das Programm ausgeführt wird. 
>Das bedeutet, dass das Programm nach der Kompilierung eigenständig läuft, ohne dass der Quellcode mehr benötigt wird. 
>>Beispiel: [[wiki/C Sprache\|C Sprache]] und [[wiki/C++\|C++]] verwenden Compiler.

>[!note] Sehr ähnlich wie ein [[wiki/Interpreter\|Interpreter]].

| | Compiler | [[wiki/Interpreter\|Interpreter]] |
| :--- | :--- | :--- |
| Wann | **vorab** alles in Maschinencode | **zur Laufzeit**, Stück für Stück |
| Tempo | ✅ sehr schnell ausführbar | ❌ langsamer |
| Portabilität | ❌ pro Plattform eigene Datei | ✅ läuft überall mit passendem Interpreter |
| Typisch | C, C++, C# | Python, PHP, JavaScript |

>[!note] Sonderfall [[wiki/Java\|Java]]
>Quellcode → Compiler → **Java-Bytecode** (Befehlssatz der [[wiki/JVM\|JVM]]) → Interpreter übersetzt zur Laufzeit. So bekommt man **Portabilität** *und* Teile des **Effizienzgewinns**.

# Compiler-Phasen (vereinfacht)

Ein Compiler führt mehrere Transformations-Phasen durch:

```
test.c ──Präprozessor──► test.i ──Compiler──► test.s ──Assembler──► test.o ──Linker──► test
                      (C-Code)            (Assembler)        (Objektcode)      (ausführbar)
  (Header, Makros        (bereinigte     (maschinennahe    (nicht verlinkt)      (gelinkt)
   weg, Includes         Version)         Mnemoniken)
   aufgelöst)
```

1. **Präprozessor:** `#include`, `#define` ersetzen, Kommentare entfernen → reiner C-Code.
2. **Compiler (Lexing/Parsing/Codegen):** Überprüfung, Optimierung, Assembler-Code.
3. **Assembler:** Maschinencode für Befehle, aber Adressen noch relativ.
4. **Linker:** `test.o` + Bibliotheken zusammenschweißen → absolute Adressen.

## Compiler-Optimierungen

Nach Parsing, aber vor Codegen, können viele **Optimierungen** passieren:

| Optimierung | Effekt |
| :--- | :--- |
| **Constant Folding** | `int x = 5 + 3;` → `int x = 8;` |
| **Dead Code Elimination** | Unreachable Statements entfernen |
| **Loop Unrolling** | Schleife 4× hintereinander, statt in Schleife |
| **Inlining** | Kleine Funktionen in Aufrufer einbauen |
| **Common Subexpression Elimination** | `x = a+b; y = a+b;` → `x = y = a+b;` |

→ Das ist der Grund, warum `-O2` oder `-O3` Flags Compiler viel langsamer machen, aber schnelleren Code erzeugen.

# JIT vs. AOT (Just-In-Time vs. Ahead-Of-Time)

| | **AOT (Ahead-Of-Time)** | **JIT (Just-In-Time)** |
| :--- | :--- | :--- |
| Wenn | vor dem Start alles compilieren | während Laufzeit compilieren |
| Speed | startup-schnell, Laufzeit nur Maschinencode | langsamer Start (Kompilation), dann optimiert |
| Optimierungen | statisch (ohne Runtime-Infos) | dynamisch (kennt echte Laufzeit-Muster) |
| Beispiele | C/C++, Go, Rust | Java (hotspot JIT), JavaScript (V8) |
| Hybrid | — | **Tiered JIT:** Schnell als Bytecode starten, währenddessen häufige Code-Pfade optimieren |

→ Modernes Java mit JIT kann sogar schneller sein als C, weil der JIT Runtime-Muster sieht (z.B. welche Verzweigung am häufigsten), die ein statischer C-Compiler nicht kennt.
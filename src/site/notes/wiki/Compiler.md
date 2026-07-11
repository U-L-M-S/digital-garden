---
{"dg-publish":true,"permalink":"/wiki/compiler/","tags":["informatik/programmierung"],"noteIcon":"","updated":"2026-07-11T09:08:38.970+02:00","dg-note-properties":{"aliases":["Compiler","compiler"],"created_date":"2024-10-22","links":null,"tags":["informatik/programmierung"]}}
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
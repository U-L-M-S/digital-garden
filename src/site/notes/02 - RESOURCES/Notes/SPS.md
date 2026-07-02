---
{"dg-publish":true,"permalink":"/02-resources/notes/sps/","tags":["technik/automatisierung","informatik/steuerungstechnik"],"noteIcon":"","updated":"2026-06-25T10:07:52.548+02:00","dg-note-properties":{"aliases":["Speicherprogrammierbare Steuerung","PLC","sps"],"created":"2026-06-25 09:20","links":null,"path":"Notes","tags":["technik/automatisierung","informatik/steuerungstechnik"]}}
---

>Eine **SPS** (Speicherprogrammierbare Steuerung, engl. PLC) ist ein Industrie-Computer, der Maschinen und Anlagen steuert.
>>Sie liest die **Inputs** (Variablen/Signale) ein, rechnet die Logik im Programm und schreibt die **Outputs** (Positionen der Hardware) – und das in einem endlosen **Zyklus**.

![image-1.png\|480](/img/user/02%20-%20RESOURCES/Files/image-1.png)

# I. Der Zyklus
___
Eine SPS arbeitet nicht einmalig, sondern in einem **Loop**, der ständig von vorne anfängt:

1. **Inputs einlesen** – alle Variablen/Signale werden eingelesen (oben).
2. **Programm abarbeiten** – die Steuerungslogik wird durchgerechnet (Mitte).
3. **Outputs schreiben** – die Hardware (Positionen, Ventile, Motoren) wird gesetzt (unten).
4. Zurück zu Schritt 1 → der Zyklus beginnt von vorne.

>[!important] Inputs oben, Outputs unten
>Oben im Zyklus stehen die **Inputs** (Variablen), unten die **Outputs** (die Positionen der Hardware). Dazwischen läuft die Logik.

# II. Mehrere Zyklen & Zykluszeit
___
Eine Maschine kann **mehrere Zyklen** parallel haben, die unterschiedlich schnell laufen:

| Zyklus  | Zykluszeit | Eigenschaft                  |
| :------ | :--------: | :--------------------------- |
| Schnell |   `10 ms`  | zeitkritisch, am wichtigsten |
| Langsam |    `1 s`   | unkritischer, seltener       |

>[!important] Der kürzeste Zyklus ist am wichtigsten
>Je **kürzer die Zykluszeit**, desto **wichtiger/zeitkritischer** ist der Zyklus – er muss am häufigsten und zuverlässigsten durchlaufen.

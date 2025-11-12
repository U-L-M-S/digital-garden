---
{"dg-publish":true,"permalink":"/02-resources/notes/schreibtischtest/","tags":["testing/statisch","qualitaetssicherung/manual"],"noteIcon":"","updated":"2025-10-29T12:59:09.000+01:00"}
---


>[[02 - RESOURCES/Notes/Schreibtischtest\|Schreibtischtest]] ist die manuelle, statische Analyse von Code ohne Computer-Ausführung.

>>Entwickler simulieren die Programmausführung gedanklich oder auf Papier.

>[!important] 
>**Schreibtischtest-Vorgang:**
>1. Code Zeile für Zeile durchgehen
>2. Variablenwerte verfolgen und notieren
>3. Kontrollfluss nachvollziehen
>4. Erwartete vs. tatsächliche Ergebnisse vergleichen

>[!example] 
>**Schreibtischtest-Tabelle:**
>```
>Zeile | Variable i | Variable sum | Bedingung
>------|-----------|-------------|----------
>  1   |     0     |      0      |    -
>  2   |     0     |      0      | i < 5: true
>  3   |     0     |      0      |    -
>  4   |     1     |      0      |    -
>  2   |     1     |      0      | i < 5: true
>```

>[!success] 
>**Vorteile:**
>- Frühe Fehlererkennung
>- Tiefes Code-Verständnis
>- Keine Tools erforderlich
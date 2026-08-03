---
{"dg-publish":true,"permalink":"/wiki/schreibtischtest/","tags":["informatik/software","wirtschaft/qualitaet"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/software","wirtschaft/qualitaet"],"aliases":["Desk Check","Dry Run","Manueller Codetest"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Schreibtischtest\|Schreibtischtest]] ist die manuelle, statische Analyse von Code ohne Computer-Ausführung.

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
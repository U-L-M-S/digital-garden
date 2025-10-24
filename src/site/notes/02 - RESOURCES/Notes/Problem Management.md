---
{"dg-publish":true,"permalink":"/02-resources/notes/problem-management/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:57:15.416+02:00"}
---


>Problem Management ist der ITIL-Prozess zur Identifizierung und dauerhaften Beseitigung der Ursachen (Root Cause) wiederkehrender Störungen.

>>Während [[02 - RESOURCES/Notes/Incident Management\|Incident Management]] schnell Symptome behebt, sucht Problem Management nach der tieferliegenden Ursache, um Incidents zu verhindern.

>[!example] Problem vs. Incident
>- **Incident** - "[[02 - RESOURCES/Notes/Server\|Server]] ist down" → Schnell neu starten
>- **Problem** - "Warum fällt der [[02 - RESOURCES/Notes/Server\|Server]] ständig aus?" → [[02 - RESOURCES/Notes/USV\|USV]] defekt finden und ersetzen

---

## Problem-Prozess

```
1. Problem Detection (aus Incidents oder proaktiv)
   ↓
2. Problem Logging
   ↓
3. Problem Categorization & Prioritization
   ↓
4. Investigation & Diagnosis (Root Cause Analysis)
   ↓
5. Workaround finden (für zukünftige Incidents)
   ↓
6. Known Error Database (KEDB) eintragen
   ↓
7. [[02 - RESOURCES/Notes/RFC\|RFC]] erstellen für permanente Lösung
   ↓
8. Problem Resolution via [[02 - RESOURCES/Notes/Change Management\|Change Management]]
   ↓
9. Problem Closure
```

>[!important] Reaktiv vs. Proaktiv
>- **Reaktiv**: Nach wiederholten Incidents untersuchen
>- **Proaktiv**: Trends analysieren, bevor Incidents auftreten

---

## Root Cause Analysis Methoden

>[!tip] 5-Why-Methode
>Fünfmal "Warum?" fragen:
>```
>1. Warum ist [[Server]] down? → Stromausfall
>2. Warum Stromausfall? → [[USV]] defekt
>3. Warum [[USV]] defekt? → Batterie leer
>4. Warum Batterie leer? → Wartung vergessen
>5. Warum vergessen? → Kein Wartungsplan
>
>Root Cause: Fehlender Wartungsplan
>Lösung: Wartungsplan erstellen und automatisieren
>```

>[!example] Weitere Methoden
>- **Fishbone Diagram** (Ishikawa)
>- **Kepner-Tregoe**
>- **[[02 - RESOURCES/Notes/DMAIC-Zyklus\|DMAIC-Zyklus]]** (Six Sigma)
>- **Pareto-Analyse**

---

## Known Error Database (KEDB)

>[!info] KEDB
>Dokumentiert bekannte Probleme mit Workarounds:
>- Problem-Beschreibung
>- Root Cause (wenn bekannt)
>- Workaround für [[02 - RESOURCES/Notes/Incident Management\|Incident Management]]
>- Status (offen, in Bearbeitung, gelöst)

**Nutzen für [[02 - RESOURCES/Notes/Incident Management\|Incident Management]]:**
>Support-Teams können schnell nachschlagen und Workarounds anwenden, ohne jedes Mal von vorn zu analysieren.

---

## Zusammenarbeit

>[!note] Integration
>Problem Management arbeitet eng zusammen mit:
>- **[[02 - RESOURCES/Notes/Incident Management\|Incident Management]]** - Liefert Problem-Kandidaten
>- **[[Change Management]]** - Umsetzt permanente Lösungen via [[RFC]]
>- **[[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]]** - [[02 - RESOURCES/Notes/CMDB\|CMDB]] für Impact-Analyse
>- **Continual Service Improvement** - Lernt aus Problemen

>[!success] Nutzen
>- Weniger wiederkehrende Incidents
>- Höhere Service-Qualität
>- Langfristige Kosteneinsparung
>- Bessere [[02 - RESOURCES/Notes/SLA\|SLA]]-Erfüllung
>- Proaktive Verbesserung

>[!caution] Häufiger Fehler
>Problem Management vernachlässigen, weil [[02 - RESOURCES/Notes/Incident Management\|Incident Management]] dringender scheint - führt zu "Feuerlöschen" statt Prävention.

>[!important] Metriken
>- Anzahl reduzierter Incidents durch Problemlösungen
>- Durchschnittliche Zeit zur Root Cause-Identifikation
>- KEDB-Nutzungsrate

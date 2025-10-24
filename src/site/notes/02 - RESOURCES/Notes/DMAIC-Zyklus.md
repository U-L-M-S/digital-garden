---
{"dg-publish":true,"permalink":"/02-resources/notes/dmaic-zyklus/","tags":["projektmanagement/methodik","qualität","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:01:49.866+02:00"}
---


>Der DMAIC-Zyklus ist eine strukturierte Methode zur Prozessverbesserung aus Six Sigma, die in 5 Phasen (Define, Measure, Analyze, Improve, Control) Probleme systematisch löst.

>>DMAIC wird im [[02 - RESOURCES/Notes/Problem Management\|Problem Management]] eingesetzt, um Root Causes zu identifizieren und nachhaltige Verbesserungen zu implementieren.

>[!example] Die 5 Phasen
>1. **Define** - Problem definieren
>2. **Measure** - Aktuellen Zustand messen
>3. **Analyze** - Ursachen analysieren
>4. **Improve** - Lösungen entwickeln und umsetzen
>5. **Control** - Verbesserungen überwachen und standardisieren

---

## 1. Define (Definieren)

>[!info] Ziel: Problem klar beschreiben
>- **Was** ist das Problem?
>- **Wo** tritt es auf?
>- **Wann** tritt es auf?
>- **Wer** ist betroffen?
>- **Warum** ist es wichtig?

**Werkzeuge**: Project Charter, Stakeholder-Analyse, SIPOC-Diagramm

---

## 2. Measure (Messen)

>[!info] Ziel: Aktuellen Zustand quantifizieren
>- Daten sammeln über das Problem
>- Baseline festlegen
>- Metriken definieren

**Beispiel im IT-Support**:
>- Anzahl [[Incident\|Incident]]s pro Woche: 50
>- Durchschnittliche Lösungszeit: 4 Stunden
>- First Contact Resolution: 60%

**Werkzeuge**: Datenerfassung, [[02 - RESOURCES/Notes/Infrastructure Monitoring\|Infrastructure Monitoring]], [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]]-Reports

---

## 3. Analyze (Analysieren)

>[!info] Ziel: Root Cause finden
>- Daten analysieren
>- Ursachen identifizieren
>- Hypothesen testen

**Methoden**:
>- **5-Why** - Fünfmal "Warum?" fragen
>- **Fishbone-Diagramm** (Ishikawa)
>- **Pareto-Analyse** - 80/20-Regel
>- Prozess-Mapping

**Beispiel**:
>```
>Problem: [[02 - RESOURCES/Notes/Server\|Server]] fällt häufig aus
>Root Cause: [[02 - RESOURCES/Notes/USV\|USV]]-Batterie defekt wegen fehlendem Wartungsplan
>```

---

## 4. Improve (Verbessern)

>[!info] Ziel: Lösungen entwickeln und testen
>- Lösungsideen generieren
>- Beste Lösung auswählen
>- Pilotprojekt durchführen
>- Ergebnisse messen

**Beispiel**:
>- Lösung: Automatischen Wartungsplan für [[USV]] implementieren
>- Pilot: Zuerst in einem Rechenzentrum testen
>- Messung: [[Server]]-Ausfälle reduziert von 50 auf 5 pro Monat

**Integration**: [[02 - RESOURCES/Notes/Change Management\|Change Management]] - [[02 - RESOURCES/Notes/RFC\|RFC]] für Lösung erstellen

---

## 5. Control (Kontrollieren)

>[!info] Ziel: Verbesserungen nachhaltig sichern
>- Prozesse standardisieren
>- Monitoring etablieren
>- Dokumentation erstellen
>- Schulungen durchführen

**Werkzeuge**:
>- Control Charts (Prozesskontrolle)
>- [[02 - RESOURCES/Notes/SLA\|SLA]]s aktualisieren
>- Standard Operating Procedures (SOPs)
>- Regelmäßige Reviews

---

## DMAIC im IT-Service-Management

>[!success] Anwendungsbereiche
>- **[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**: Root Cause Analysis für wiederkehrende [[Incident\|Incident]]s
>- **[[02 - RESOURCES/Notes/Service Design\|Service Design]]**: Neue Services optimieren
>- **Continual Service Improvement**: Prozesse verbessern
>- **[[02 - RESOURCES/Notes/Capacity Management\|Capacity Management]]**: Performance-Probleme lösen

>[!example] Praxisbeispiel
>**Problem**: Zu viele Passwort-Reset-Anfragen
>
>1. **Define**: 200 Passwort-Resets pro Woche belasten [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]]
>2. **Measure**: 30% aller Tickets sind Passwort-Resets
>3. **Analyze**: Nutzer vergessen Passwörter, weil zu komplex und häufige Änderungen
>4. **Improve**: Self-Service-Portal für Passwort-Reset + SSO implementieren
>5. **Control**: Passwort-Tickets reduziert auf 50/Woche, Monitoring etabliert

>[!tip] Kombination mit [[02 - RESOURCES/Notes/Lean\|Lean]] und [[02 - RESOURCES/Notes/Agile\|Agile]]
>DMAIC passt gut zu [[02 - RESOURCES/Notes/Lean\|Lean]] (Verschwendung eliminieren) und [[02 - RESOURCES/Notes/Agile\|Agile]] (iteratives Vorgehen).

>[!important] Six Sigma Zertifizierung
>DMAIC ist Teil der Six Sigma Methodology - Zertifizierungen: Yellow Belt, Green Belt, Black Belt

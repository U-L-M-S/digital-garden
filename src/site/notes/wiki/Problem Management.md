---
{"dg-publish":true,"permalink":"/wiki/problem-management/","tags":["wirtschaft/itsm","ausbildung/gfn"],"noteIcon":"","updated":"2026-07-19T03:56:26.851+02:00","dg-note-properties":{"tags":["wirtschaft/itsm","ausbildung/gfn"],"aliases":["Problemmanagement","Problem-Management-Prozess"],"links":null,"created_date":"2025-11-05"}}
---


>[[wiki/Problem Management\|Problem Management]] findet die eigentlichen Ursachen von Störungen und verhindert, dass sie wiederkommen - wie ein Detektiv, der Brandstifter sucht, nicht nur Feuer löscht.

>>Während [[wiki/Incident Management\|Incident Management]] schnell Symptome bekämpft, geht [[wiki/Problem Management\|Problem Management]] in die Tiefe und beseitigt Root Causes.

## Definition

>[!quote] Was ist [[wiki/Problem Management\|Problem Management]]?
>[[wiki/Problem Management\|Problem Management]] ist der [[ITIL\|ITIL]]-Prozess zur Identifikation und Analyse der Ursachen von Incidents und zur Verhinderung zukünftiger Incidents.

**Ein Problem ist:**
>Die unbekannte Ursache von einem oder mehreren Incidents.

**Unterschied:**
- **[[Incident\|Incident]]** = Symptom (Server ist down)
- **Problem** = Ursache (Server überhitzt wegen defekter Kühlung)

## Ziele

### Hauptziele
1. **Root Causes finden** - Warum passiert das?
2. **Incidents verhindern** - Dass es nicht nochmal passiert
3. **Workarounds bereitstellen** - Wenn keine schnelle Lösung möglich
4. **Wissensdatenbank pflegen** - Known Errors dokumentieren

## Prozess-Schritte

### 1. Problem-Identifikation
>Wann wird aus Incidents ein Problem?

**Trigger:**
- **Wiederkehrende Incidents** - Gleiches Problem mehrmals
- **Major Incident** - Schwerwiegende Störung
- **Trend-Analyse** - [[wiki/Monitoring\|Monitoring]] zeigt Muster
- **Proaktiv** - Potenzielle Probleme vor Incident erkennen

### 2. Problem-Registrierung
>Problem dokumentieren.

**Dokumentiert wird:**
- Betroffene Incidents
- Symptome
- Betroffene [[CI\|CI]]s (Configuration Items)
- Workarounds falls bekannt

### 3. Problem-Kategorisierung
>Problem einordnen.

**Kategorien:**
- Hardware / Software / [[wiki/Netzwerk\|Netzwerk]]
- Service/System betroffen
- Priorität basierend auf Impact

### 4. Problem-Investigation
>Detektivarbeit - Ursache finden.

**Methoden:**
- **5-Why-Methode** - Fünfmal "Warum?" fragen
- **Ishikawa-Diagramm** - Ursachen visuell strukturieren
- **Kepner-Tregoe-Analyse** - Systematische Problemlösung
- **Brainstorming** - Team diskutiert mögliche Ursachen

**Beispiel 5-Why:**
1. Warum ist [[wiki/Server\|Server]] down? → Überhitzung
2. Warum Überhitzung? → Lüfter funktioniert nicht
3. Warum Lüfter kaputt? → Verstaubt
4. Warum verstaubt? → Keine regelmäßige Reinigung
5. Warum keine Reinigung? → Kein Wartungsplan

**Root Cause:** Fehlender Wartungsplan!

### 5. Known Error erstellen
>Sobald Root Cause bekannt ist, wird Known Error registriert.

**[[Known Error\|Known Error]] enthält:**
- Root Cause Beschreibung
- Workaround
- Geplante permanente Lösung
- Betroffene [[CI\|CI]]s

**In Knowledge Base:**
>Known Errors werden dokumentiert damit [[wiki/Incident Management\|Incident Management]] schneller reagieren kann.

### 6. Lösung entwickeln
>Permanente Lösung finden.

**Lösungsarten:**
- **Quick Fix** - Sofort umsetzbar
- **Change Request** - Benötigt [[Change Management\|Change Management]]
- **Projekt** - Größere Umstellung nötig

### 7. Lösung implementieren
>Fix in Produktion bringen.

**Via [[Change Management\|Change Management]]:**
- [[RFC\|RFC]] (Request for Change) erstellen
- Change genehmigen lassen
- Implementierung planen
- Rollback-Plan haben

### 8. Problem schließen
>Nach erfolgreicher Lösung.

**Voraussetzungen:**
- Root Cause behoben
- Keine weiteren Incidents
- Dokumentation vollständig
- Known Error aktualisiert

## Proaktives Problem Management

>[!tip] Proaktiv statt reaktiv
>Nicht warten bis Incidents passieren - potenzielle Probleme vorher finden!

**Aktivitäten:**
- **Trend-Analyse** - Incident-Muster erkennen
- **[[wiki/Monitoring\|Monitoring]]-Daten** - Schwellwerte vor Ausfall
- **Risk Assessments** - Was könnte schief gehen?
- **Lessons Learned** - Aus vergangenen Problemen lernen

**Beispiel:**
>Monitoring zeigt: [[wiki/Server\|Server]]-[[wiki/CPU\|CPU]] steigt kontinuierlich. Proaktiv handeln bevor [[wiki/Server\|Server]] crasht!

## Unterschied zu [[wiki/Incident Management\|Incident Management]]

| Aspekt | [[wiki/Incident Management\|Incident Management]] | [[wiki/Problem Management\|Problem Management]] |
|--------|------------------------|------------------------|
| Ziel | **Service wiederherstellen** | **Root Cause finden** |
| Fokus | **Symptom** | **Ursache** |
| Zeit | **Sofort** | **Langfristig** |
| Beispiel | [[wiki/Server\|Server]] neustarten | Warum crasht [[wiki/Server\|Server]]? |
| Mindset | "Feuer löschen" | "Brandstifter finden" |

>[!quote] Zusammenspiel
>[[wiki/Incident Management\|Incident Management]] ist die Feuerwehr, [[wiki/Problem Management\|Problem Management]] ist die Brandermittlung und Prävention.

## KPIs

| Metric | Beschreibung | Ziel |
|--------|--------------|------|
| **Problem Backlog** | Offene Probleme | Niedrig |
| **Problem Resolution Time** | Zeit bis Problem gelöst | Variabel |
| **Prevented Incidents** | Incidents durch PM verhindert | Hoch |
| **Known Errors** | Anzahl dokumentierter Known Errors | Wachsend |

## Prüfungsrelevanz LF06

>[!important] Für LF06 wichtig
>- **Ziel: Root Cause finden**, nicht schnell beheben
>- **Unterschied zu [[wiki/Incident Management\|Incident Management]]** (reaktiv vs. proaktiv)
>- **Known Error** Konzept
>- **5-Why-Methode** kennen
>- **Proaktives vs. reaktives** Problem Management

**Typische Prüfungsfrage:**
>"Erklären Sie den Unterschied zwischen Incident Management und Problem Management anhand eines Beispiels."

## Verwandte Konzepte

- [[wiki/Incident Management\|Incident Management]] - Bekämpft Symptome
- [[Change Management\|Change Management]] - Wenn Lösung implementiert wird
- [[Known Error\|Known Error]] - Dokumentierte Probleme mit Workaround
- [[ITIL\|ITIL]] - Rahmenwerk
- [[CMDB\|CMDB]] - Configuration Items

## Zusammenfassung

>[!quote] Kern-Aussage
>[[wiki/Problem Management\|Problem Management]] findet die Root Causes von Störungen und verhindert dass Incidents wiederkommen - Detektivarbeit statt Feuerwehr.

**Merksatz:**
>"Problem Mgmt = Detektiv + Präventivmedizin - Ursachen finden und verhindern!"

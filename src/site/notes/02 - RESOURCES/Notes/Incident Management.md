---
{"dg-publish":true,"permalink":"/02-resources/notes/incident-management/","tags":["itil/service-operation","GFN/LF06","itsm"],"noteIcon":"","updated":"2025-11-05T13:14:22.000+01:00"}
---


>[[02 - RESOURCES/Notes/Incident Management\|Incident Management]] ist der [[ITIL\|ITIL]]-Prozess um Störungen schnell zu beheben und den normalen Service wiederherzustellen - wie die Feuerwehr die Brände löscht.

>>Ziel ist nicht die Ursache zu finden, sondern möglichst schnell wieder normale Arbeitsweise herzustellen.

## Definition

>[!quote] Was ist [[02 - RESOURCES/Notes/Incident Management\|Incident Management]]?
>[[02 - RESOURCES/Notes/Incident Management\|Incident Management]] ist der Prozess zur Wiederherstellung des normalen Service-Betriebs so schnell wie möglich mit minimaler Auswirkung auf das Geschäft.

**Ein [[Incident\|Incident]] ist:**
>Eine ungeplante Unterbrechung oder Qualitätsminderung eines IT-Service.

**Beispiele:**
- [[02 - RESOURCES/Notes/Server\|Server]] ist down
- E-Mail funktioniert nicht
- Anwendung lädt nicht
- [[Drucker\|Drucker]] druckt nicht

## Ziele

### Hauptziel
>**So schnell wie möglich** normalen Service wiederherstellen.

>[!important] Wichtig
>[[02 - RESOURCES/Notes/Incident Management\|Incident Management]] sucht **NICHT** nach der Ursache - das macht [[02 - RESOURCES/Notes/Problem Management\|Problem Management]]. Incident Management will nur schnell wieder funktionierenden Service!

### Weitere Ziele
- Minimale Auswirkung auf Geschäftsprozesse
- Hohe User-Zufriedenheit
- Incidents priorisieren nach Business-Impact
- Transparenz über Incident-Status

## Prozess-Schritte

### 1. Incident-Identifikation
>Störung wird bekannt.

**Wie entdeckt:**
- User meldet Problem
- [[02 - RESOURCES/Notes/Monitoring\|Monitoring]]-System schlägt Alarm
- [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] entdeckt es

### 2. Incident-Registrierung
>Problem wird im [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]] erfasst.

**Was dokumentiert wird:**
- Wer hat gemeldet?
- Was ist das Problem?
- Welche Systeme betroffen?
- Wann ist es aufgetreten?

### 3. Kategorisierung
>Problem wird eingeordnet.

**Kategorien:**
- Hardware / Software / [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
- Service betroffen
- Fehlertyp

### 4. Priorisierung
>Wie dringend muss es gelöst werden?

| Dringlichkeit | Auswirkung | Priorität | Reaktionszeit |
|---------------|------------|-----------|---------------|
| Hoch | Hoch | **Kritisch** | 15 Min |
| Hoch | Mittel | **Hoch** | 1 Std |
| Mittel | Mittel | **Mittel** | 4 Std |
| Niedrig | Niedrig | **Niedrig** | 1 Tag |

### 5. Diagnose und Eskalation
>Ursache finden oder weiterleiten.

**Möglichkeiten:**
- [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]] löst direkt
- Eskalation an [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]]
- Eskalation an [[02 - RESOURCES/Notes/Third-Level-Support\|Third-Level-Support]]
- Funktionale oder hierarchische Eskalation

### 6. Lösungsfindung
>Problem beheben.

**Arten von Lösungen:**
- **Permanente Lösung** - Problem dauerhaft weg
- **Workaround** - Temporäre Umgehung
- **Service-Wiederherstellung** - Neustart reicht

### 7. Lösung anwenden
>Fix implementieren.

**Aktivitäten:**
- Änderung durchführen
- Mit User testen
- Funktionalität bestätigen

### 8. Incident schließen
>Fall abschließen.

**Abschluss-Kriterien:**
- Problem ist gelöst
- User ist zufrieden
- Dokumentation vollständig
- Kategorisierung korrekt

### 9. Incident-Review
>Bei größeren Incidents: Nachbesprechung.

**Was besprochen wird:**
- Was lief gut?
- Was kann verbessert werden?
- Sollte [[02 - RESOURCES/Notes/Problem Management\|Problem Management]] einbezogen werden?

## Major Incident

>[!danger] Major Incident
>Ein Major Incident ist ein Incident mit **sehr hohem Business-Impact** der besondere Behandlung braucht.

**Charakteristika:**
- Viele User betroffen
- Geschäftskritische Systeme
- Hoher finanzieller Schaden
- Öffentliche Aufmerksamkeit

**Besondere Behandlung:**
- Sofortige Management-Information
- Dediziertes Team
- Separate Kommunikation
- Post-Incident-Review Pflicht

**Beispiele:**
- [[02 - RESOURCES/Notes/Server\|Server]] komplett ausgefallen
- Ransomware-Angriff
- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] down
- E-Commerce-Shop nicht erreichbar

## Unterschied zu [[02 - RESOURCES/Notes/Problem Management\|Problem Management]]

| Aspekt | [[02 - RESOURCES/Notes/Incident Management\|Incident Management]] | [[02 - RESOURCES/Notes/Problem Management\|Problem Management]] |
|--------|------------------------|------------------------|
| Ziel | **Schnell beheben** | Ursache finden |
| Fokus | **Symptome** | Root Cause |
| Zeitrahmen | **Sofort** | Langfristig |
| Beispiel | [[02 - RESOURCES/Notes/Server\|Server]] neu starten | Warum crasht [[02 - RESOURCES/Notes/Server\|Server]]? |

**Zusammenspiel:**
>Incident Management löscht das Feuer, Problem Management verhindert dass es wieder brennt.

## KPIs

| Metric | Beschreibung | Ziel |
|--------|--------------|------|
| **MTTR** | Mean Time To Repair | Niedrig |
| **First-Call-Resolution** | % beim ersten Kontakt gelöst | >70% |
| **Reopened Incidents** | % die wiedereröffnet werden | <5% |
| **SLA Compliance** | % im [[02 - RESOURCES/Notes/SLA\|SLA]]-Zeitfenster gelöst | >95% |

## Prüfungsrelevanz LF06

>[!important] Für LF06 wichtig
>- **Ziel: Schnelle Service-Wiederherstellung**, nicht Ursachenforschung
>- **Priorisierung** nach Impact und Dringlichkeit
>- **Unterschied zu [[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**
>- **Major Incidents** als Spezialfall
>- **Teil von [[ITIL\|ITIL]] [[Service Operation\|Service Operation]]**

## Verwandte Konzepte

- [[02 - RESOURCES/Notes/Problem Management\|Problem Management]] - Findet Ursachen
- [[Change Management\|Change Management]] - Wenn Änderungen nötig
- [[Service Desk\|Service Desk]] - Nimmt Incidents entgegen
- [[ITIL\|ITIL]] - Rahmenwerk
- [[02 - RESOURCES/Notes/SLA\|SLA]] - Definiert Reaktionszeiten

## Zusammenfassung

>[!quote] Kern-Aussage
>[[02 - RESOURCES/Notes/Incident Management\|Incident Management]] stellt normalen IT-Service so schnell wie möglich wieder her - löscht Feuer, sucht aber nicht nach Brandstiftern.

**Merksatz:**
>"Incident Mgmt = Feuerwehr der IT - schnell löschen, Ursache ist erstmal egal!"

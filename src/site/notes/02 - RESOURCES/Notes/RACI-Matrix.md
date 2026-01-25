---
{"dg-publish":true,"permalink":"/02-resources/notes/raci-matrix/","tags":["projektmanagement/tools","GFN/LF06","organisation"],"noteIcon":"","updated":"2025-11-05T13:15:37.000+01:00"}
---


>Die [[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]] klärt wer für was verantwortlich ist - wie ein Organigramm das genau sagt wer macht was, wer entscheidet und wer informiert werden muss.

>>RACI steht für Responsible, Accountable, Consulted, Informed - die vier Arten wie jemand an einer Aufgabe beteiligt sein kann.

## Definition

>[!quote] Was ist eine [[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]]?
>Die [[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]] ist ein Projektmanagement-Tool das Rollen und Verantwortlichkeiten für Aufgaben oder Entscheidungen klar definiert.

## Die 4 RACI-Rollen

### R - Responsible (Durchführungsverantwortlich)
>Macht die eigentliche Arbeit.

**Wer ist R:**
- Führt die Aufgabe aus
- Kann mehrere Personen sein
- Tut die Hands-on-Arbeit

**Beispiel:**
>Entwickler programmiert Feature (R)

### A - Accountable (Rechenschaftspflichtig)
>Ist letztlich verantwortlich - unterschreibt ab.

**Wer ist A:**
- Entscheidungsgewalt
- Nur **eine Person** pro Aufgabe
- Trägt Konsequenzen wenn's schief geht

>[!important] Nur einer!
>Es gibt immer nur **EINE** Person mit A für eine Aufgabe - sonst weiß keiner wer wirklich verantwortlich ist!

**Beispiel:**
>Projektleiter ist accountable für Feature-Entwicklung (A)

### C - Consulted (Konsultiert)
>Wird um Rat gefragt - bidirektionale Kommunikation.

**Wer ist C:**
- Experten
- Stakeholder mit relevantem Wissen
- Geben Input vor Entscheidung
- Zweiseitige Kommunikation (Dialog)

**Beispiel:**
>Security-Team wird bei Feature-Design konsultiert (C)

### I - Informed (Informiert)
>Wird über Fortschritt informiert - einseitige Kommunikation.

**Wer ist I:**
- Müssen Bescheid wissen
- Kein aktiver Input
- Einseitige Kommunikation (nur empfangen)

**Beispiel:**
>Management wird über Feature-Fertigstellung informiert (I)

## Beispiel: Software-Deployment

| Aufgabe | Entwickler | Projektleiter | Betrieb | CTO |
|---------|-----------|---------------|---------|-----|
| **Code schreiben** | R | A | I | I |
| **Tests durchführen** | R | A | C | I |
| **Deployment planen** | C | A | R | I |
| **Go/No-Go Entscheidung** | I | A | C | C |
| **Produktiv-Deployment** | I | I | R | I |

**Interpretation:**
- Entwickler **macht** den Code (R)
- Projektleiter ist **verantwortlich** dass es klappt (A)
- Betrieb wird **konsultiert** bei Tests (C)
- CTO wird nur **informiert** (I)

## Vorteile

>[!check] Warum [[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]] nutzen?
>- **Klarheit** - Jeder weiß was seine Rolle ist
>- **Keine Überschneidungen** - Vermeidet "dachte der andere macht's"
>- **Transparenz** - Alle sehen wer wofür zuständig
>- **Kommunikation** - Klar wer wen wann einbeziehen muss

## Häufige Probleme

>[!warning] Typische Fehler
>- **Mehrere A** - Unklar wer wirklich verantwortlich
>- **Kein A** - Niemand fühlt sich verantwortlich
>- **Zu viele C** - Zu viele Köche verderben den Brei
>- **Zu viele I** - Information Overload

## Erstellung

### Schritt 1: Aufgaben auflisten
>Was muss alles gemacht werden?

**Zeileneinträge:**
- Alle Aufgaben des Projekts
- Entscheidungen die getroffen werden müssen
- Deliverables

### Schritt 2: Rollen identifizieren
>Wer ist involviert?

**Spalteneinträge:**
- Alle Rollen im Team
- Stakeholder
- Externe Partner

### Schritt 3: RACI zuweisen
>Für jede Aufgabe: Wer hat welche Rolle?

**Regeln:**
- Genau **ein A** pro Aufgabe
- Mindestens **ein R** pro Aufgabe
- C und I optional aber oft sinnvoll

### Schritt 4: Review
>Mit Team durchgehen.

**Prüfen:**
- Ist jedem seine Rolle klar?
- Gibt es Lücken?
- Ist Workload fair verteilt?

## Varianten

### RASCI
>Mit zusätzlichem S - Supportive (Unterstützung).

**S - Supportive:**
- Hilft bei Durchführung
- Ähnlich wie R, aber weniger zentral

### RACI-VS
>Mit zusätzlichem V - Verify (Überprüfung) und S - Sign-off (Abnahme).

**Für:**
- Compliance-lastige Projekte
- Regulierte Umgebungen

## Prüfungsrelevanz LF06

>[!important] Für LF06 wichtig
>- **4 Buchstaben bedeuten**: Responsible, Accountable, Consulted, Informed
>- **Nur ein A** pro Aufgabe Regel
>- **Zweck**: Verantwortlichkeiten klären
>- **Anwendung** in Serviceanfragen-Kontext

**Typische Prüfungsfrage:**
>"Erklären Sie die RACI-Matrix und warum es wichtig ist, dass es nur ein A pro Aufgabe gibt."

## Verwandte Konzepte

- [[02 - RESOURCES/Notes/Projektmanagement\|Projektmanagement]] - Rahmen für RACI
- [[Service Operation\|Service Operation]] - RACI für ITIL-Prozesse
- [[02 - RESOURCES/Notes/Incident Management\|Incident Management]] - RACI klärt wer Incidents bearbeitet
- [[Change Management\|Change Management]] - RACI für Change-Genehmigungen

## Zusammenfassung

>[!quote] Kern-Aussage
>Die [[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]] macht kristallklar wer was tut, wer entscheidet, wer mitreden darf und wer informiert wird - verhindert Chaos und Finger-Pointing.

**Merksatz:**
>"RACI = Wer macht's (R), wer haftet (A), wer redet mit (C), wer kriegt's mit (I)!"

**Die goldene Regel:**
>**Genau ein A pro Aufgabe** - sonst hat niemand wirklich Verantwortung!

---
{"dg-publish":true,"permalink":"/02-resources/notes/third-level-support/","tags":["it-service/support","GFN/LF06"],"noteIcon":"","updated":"2025-11-05T13:13:16.642+01:00"}
---


>[[02 - RESOURCES/Notes/Third-Level-Support\|Third-Level-Support]] ist die höchste Eskalationsstufe - die Profis vom Hersteller oder Entwickler-Team die selbst den härtesten Nüssen auf den Grund gehen.

>>Wenn auch [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] kapituliert, kommt L3 ins Spiel - mit Zugriff auf Source Code und Hersteller-Insider-Wissen.

## Definition

>[!quote] Was ist [[02 - RESOURCES/Notes/Third-Level-Support\|Third-Level-Support]]?
>[[02 - RESOURCES/Notes/Third-Level-Support\|Third-Level-Support]] (L3) ist die höchste Eskalationsstufe die schwerwiegendste technische Probleme löst, Software-Bugs behebt und direkten Herstellerkontakt hat.

## Wer ist L3?

### Hersteller / Vendor
>Direkter Support vom Software- oder Hardware-Hersteller.

**Beispiele:**
- Microsoft Support für Windows-Bugs
- Oracle Support für Datenbank-Probleme
- Cisco Support für [[02 - RESOURCES/Notes/Router\|Router]]-Firmware

### Interne Entwickler
>Eigenes Entwickler-Team bei Custom-Software.

**Zuständig für:**
- Eigenentwickelte Anwendungen
- Inhouse-Software
- Spezial-Systeme

### Externe Spezialisten
>Super-Experten für spezielle Themen.

**Beispiele:**
- Security-Forensik-Experten bei Hackerangriffen
- Datenrettungs-Spezialisten
- Spezialisierte Berater

## Hauptaufgaben

### Bug-Fixing
>Software-Fehler im Code beheben.

**Prozess:**
1. Bug-Report von L2 erhalten
2. Problem im Code reproduzieren
3. Root Cause im Source Code finden
4. Patch entwickeln
5. Patch testen
6. Patch ausliefern

### Root-Cause-Analysis
>Tiefste Ursache eines Problems finden.

**Methoden:**
- Core Dumps analysieren
- Memory Dumps untersuchen
- Detailliertes Logging
- Performance-Profiling

### Firmware/Software-Updates
>Kritische Updates entwickeln.

**Beispiele:**
- Security-Patches
- Hotfixes für kritische Bugs
- Treiber-Updates

### Produktverbesserungen
>Feedback ans Produktentwicklungs-Team.

**Ergebnis:**
- Feature-Requests aus Support-Erfahrung
- Verbesserungsvorschläge
- Usability-Probleme melden

## Charakteristika

### Kein direkter Endnutzer-Kontakt
>L3 kommuniziert meist nur mit L2.

**Warum:**
- Sehr technisch, User versteht es nicht
- Zeitaufwändig, L3 ist teuer
- L2 fungiert als Übersetzer

### Lange Bearbeitungszeiten
>L3-Tickets dauern Tage bis Wochen.

**Gründe:**
- Komplexe Probleme brauchen Zeit
- Code-Änderungen müssen getestet werden
- Oft mehrere Eskalationen nötig

### Niedrige Ticketzahl
>Nur 5-10% aller Tickets erreichen L3.

**Filterwirkung:**
- L1 löst 70-80%
- L2 löst weitere 15-20%
- Nur härteste Fälle für L3

### Hohe Kosten
>L3-Support ist teuer.

**Kostenarten:**
- Premium-Support-Verträge mit Herstellern
- Hochqualifizierte Spezialisten
- Lange Bearbeitungszeit

## Typische L3-Probleme

### Software-Bugs
>Fehler im Programmcode.

**Beispiele:**
- Anwendung crashed bei bestimmter Aktion
- Memory Leak führt zu Performance-Problemen
- Falsche Berechnungen in Business-Logik

### Hardware-Defekte
>Komplexe Hardware-Probleme.

**Beispiele:**
- Firmware-Bug in [[02 - RESOURCES/Notes/Server\|Server]]-Mainboard
- [[02 - RESOURCES/Notes/SAN\|SAN]]-Controller-Fehler
- Intermittierende Netzwerkkarten-Probleme

### Architektur-Probleme
>Grundlegende Design-Fehler.

**Beispiele:**
- Skalierungsprobleme
- Performance-Bottlenecks
- Inkompatibilitäten zwischen Systemen

## Eskalationsprozess zu L3

### Wann eskaliert L2 zu L3?

>[!check] Kriterien für L3-Eskalation
>- **Software-Bug vermutet** - Code-Änderung nötig
>- **Hersteller-Expertise benötigt** - L2 hat keine Lösung
>- **Produkt-Defekt** - Hardware-RMA nötig
>- **Kritischer Impact** - Geschäftskritisches System betroffen
>- **Workaround nicht ausreichend** - Echte Lösung nötig

### Ticket-Übergabe

**L2 muss für L3 dokumentieren:**
- Vollständige Problembeschreibung
- Alle durchgeführten Troubleshooting-Schritte
- Logs, Screenshots, Dumps
- Systemkonfiguration
- Reproduktionsschritte

## Support-Verträge

### Premium Support
>Teuerster Support-Level mit garantierter L3-Verfügbarkeit.

**Enthält:**
- 24/7 L3-Erreichbarkeit
- Schnelle Reaktionszeiten (4h)
- Dedizierter Technical Account Manager
- Proaktives [[02 - RESOURCES/Notes/Monitoring\|Monitoring]]

### Standard Support
>Basis-Support mit begrenztem L3-Zugang.

**Enthält:**
- Business-Hours L3
- Reaktionszeit 24-48h
- Community-Forum
- Keine proaktive Überwachung

### Break-Fix Support
>Nur bei kritischen Ausfällen.

**Limitiert:**
- Keine geplanten L3-Eskalationen
- Pay-per-Incident
- Lange Wartezeiten

## Abgrenzung zu anderen Leveln

| Aspekt | [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]] | [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] | [[02 - RESOURCES/Notes/Third-Level-Support\|Third-Level-Support]] |
|--------|------------------------|-------------------------|------------------------|
| Tickets | 70-80% gelöst | 15-20% gelöst | **5-10% gelöst** |
| Kontakt | Direkter User-Kontakt | Intern | **Kein User-Kontakt** |
| Wissen | Breit, oberflächlich | Tief, spezialisiert | **Sehr tief, Entwickler** |
| Zeitrahmen | Minuten | Stunden | **Tage bis Wochen** |
| Beispiel | Passwort-Reset | Netzwerk konfigurieren | **Software-Bug fixen** |

## KPIs für L3

| Metric | Beschreibung | Ziel |
|--------|--------------|------|
| **Escalation Rate** | % der L2-Tickets die zu L3 gehen | <5% |
| **Resolution Time** | Zeit bis L3-Problem gelöst | Variabel |
| **Bug Fix Rate** | % der Bugs die tatsächlich gefixt werden | >90% |
| **Patch Quality** | Wie viele Patches funktionieren beim ersten Mal | >95% |

## Prüfungsrelevanz LF06

>[!important] Für LF06 wichtig
>- **Höchste Eskalationsstufe**
>- **Hersteller / Entwickler** als L3
>- **Kein Endnutzer-Kontakt**
>- **Software-Bugs und tiefste Probleme**
>- **5-10% der Tickets**
>- **Lange Bearbeitungszeiten**

**Typische Prüfungsfrage:**
>"Beschreiben Sie die drei Support-Level und grenzen Sie deren Aufgaben voneinander ab."

## Verwandte Konzepte

- [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]] - Erste Stufe
- [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] - Zweite Stufe
- [[02 - RESOURCES/Notes/Eskalation\|Eskalation]] - Prozess zu L3
- [[02 - RESOURCES/Notes/Problem Management\|Problem Management]] - Strukturierte Fehler-Analyse
- [[Change Management\|Change Management]] - Wenn L3 Patches ausliefert

## Zusammenfassung

>[!quote] Kern-Aussage
>[[02 - RESOURCES/Notes/Third-Level-Support\|Third-Level-Support]] ist die höchste Eskalation für schwerste technische Probleme - meist Hersteller oder Entwickler mit Zugriff auf Source Code.

**Merksatz:**
>"L3 = Die Profis vom Hersteller - wenn auch die Mechaniker (L2) ratlos sind!"

**Die 3 Merkmale:**
1. **Höchste Expertise** - Entwickler-Level
2. **Längste Bearbeitungszeit** - Tage bis Wochen
3. **Seltenste Fälle** - Nur 5-10% der Tickets

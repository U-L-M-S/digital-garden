---
{"dg-publish":true,"permalink":"/02-resources/notes/third-level-support/","tags":["informatik/support","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:59:09.136+02:00"}
---


>Third-Level-Support ist die höchste Eskalationsebene und umfasst Hersteller, Software-Entwickler und externe Spezialisten für extrem komplexe oder kritische Probleme.

>>Third-Level-Support wird nur bei Problemen einbezogen, die weder [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]] noch [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] lösen können.

>[!example] Typische Aufgaben
>- Softwarefehler analysieren (Bug-Fixing)
>- Tiefe System-Diagnosen (Kernel, Core)
>- Produkt-Patches entwickeln
>- Kritische Sicherheitslücken schließen
>- Hardware-Defekte auf Komponentenebene
>- Komplexe Performance-Probleme
>- Forschung und Entwicklung für Lösungen

---

## Wer ist Third-Level?

>[!info] Typische Third-Level-Ressourcen
>- **Hersteller-Support**: Microsoft, Cisco, Oracle
>- **Software-Entwickler**: Internes Dev-Team
>- **Hardware-Hersteller**: Dell, HP, Cisco TAC
>- **Spezialisierte Consultants**: Externe Experten
>- **Forschungs-Teams**: R&D-Abteilungen

>[!important] Keine direkte Kundeninteraktion
>Third-Level arbeitet typischerweise nicht direkt mit End-[[02 - RESOURCES/Notes/Kunden\|Kunden]], sondern über [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] als Vermittler.

---

## Eskalation an Level 3

>[!note] Wann eskalieren?
>Eskalation von [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] erfolgt bei:
>- Produktfehler (Software-Bugs)
>- Unbekannte Hardware-Defekte
>- Architektur-Probleme
>- Hersteller-spezifisches Wissen benötigt
>- Sicherheitskritische Vorfälle
>- Major Incidents mit massivem Impact

**Voraussetzung**: Vollständige Dokumentation aller Diagnose-Schritte und Lösungsversuche

---

## Arbeitsweise

>[!tip] Third-Level-Prozess
>```
>1. Detaillierte Analyse des Problems
>   ↓
>2. Reproduktion in Testumgebung
>   ↓
>3. Code/System-Debugging
>   ↓
>4. Patch/Fix entwickeln
>   ↓
>5. Testing
>   ↓
>6. [[02 - RESOURCES/Notes/Release Management\|Release Management]] - Patch ausrollen
>   ↓
>7. Dokumentation und Knowledge Transfer
>```

>[!success] Permanente Lösungen
>Third-Level schafft oft dauerhafte Lösungen:
>- Software-Patches
>- Produkt-Updates
>- Konfigurationsänderungen
>- Architektur-Verbesserungen

---

## Integration mit ITSM

>[!important] ITIL-Prozesse
>- **[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**: Third-Level führt tiefe Root Cause Analysis durch
>- **[[02 - RESOURCES/Notes/Change Management\|Change Management]]**: Patches werden über [[02 - RESOURCES/Notes/RFC\|RFC]]s ausgerollt
>- **[[Release Management]]**: Neue Software-Versionen
>- **Knowledge Management**: Lösungen dokumentieren

>[!example] Known Error Database
>Third-Level-Lösungen werden in KEDB dokumentiert, damit zukünftige Fälle schneller gelöst werden.

---

## Kosten und Effizienz

>[!caution] Hohe Kosten
>Third-Level-Support ist sehr teuer:
>- Hersteller-Support-Verträge ([[02 - RESOURCES/Notes/UC\|UC]])
>- Hochqualifizierte Spezialisten
>- Zeitintensive Analysen

**Ziel**: Möglichst viele Probleme auf Level 1 und 2 lösen!

>[!tip] Escalation Prevention
>Durch gute Dokumentation, Knowledge Base und Schulungen können viele Level-3-Eskalationen vermieden werden.

---

## Metriken

>[!example] KPIs
>- **Resolution Time**: Oft Tage bis Wochen
>- **Patch Quality**: Werden Bugs wirklich behoben?
>- **Knowledge Transfer**: Werden Lower Levels geschult?
>- **Escalation Volume**: Wie viele Fälle erreichen L3?

>[!note] Proaktive Rolle
>Third-Level-Experten sollten proaktiv:
>- Produkt-Roadmaps beeinflussen
>- Sicherheitspatches frühzeitig einspielen
>- Architektur-Reviews durchführen
>- Best Practices entwickeln

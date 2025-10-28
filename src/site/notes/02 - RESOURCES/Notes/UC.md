---
{"dg-publish":true,"permalink":"/02-resources/notes/uc/","tags":["informatik/management","wirtschaft/vertrag","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:04:15.000+02:00"}
---


>Ein UC (Underpinning Contract) ist ein Vertrag mit einem externen Lieferanten oder Dienstleister, der die IT-Organisation bei der Erfüllung ihrer [[02 - RESOURCES/Notes/SLA\|SLA]]s unterstützt.

>>UCs regeln die Beziehungen zu externen Partnern und stellen sicher, dass [[02 - RESOURCES/Notes/Outsourcing\|Outsourcing]]-Services die benötigte Qualität liefern.

>[!example] Typische UCs
>- **Cloud-Provider** - AWS/Azure/Google Cloud für Hosting
>- **Internet Service Provider (ISP)** - [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Konnektivität
>- **Software-Hersteller** - Support-Verträge (Microsoft, Oracle)
>- **Hardware-Lieferanten** - Wartungsverträge für [[02 - RESOURCES/Notes/Server\|Server]], [[02 - RESOURCES/Notes/Switch\|Switch]], [[02 - RESOURCES/Notes/Router\|Router]]
>- **Managed Services** - Externes [[02 - RESOURCES/Notes/Helpdesk\|Helpdesk]], [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Management
>- **Datacenter-Provider** - [[02 - RESOURCES/Notes/Rechenzentrumsbetrieb\|Rechenzentrumsbetrieb]]

---

## UC vs. SLA vs. OLA

|Typ|Parteien|Beschreibung|Beispiel|
|---|---|---|---|
|**[[02 - RESOURCES/Notes/SLA\|SLA]]**|IT ↔ externer [[02 - RESOURCES/Notes/Kunden\|Kunden]]|Service-Vereinbarung mit Endkunden|"E-Mail verfügbar zu 99,9%"|
|**[[02 - RESOURCES/Notes/OLA\|OLA]]**|IT-Team A ↔ IT-Team B|Interne Vereinbarung zwischen IT-Teams|"[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Team liefert 99,8%"|
|**UC**|IT ↔ externer Lieferant|Vertrag mit externem Dienstleister|"AWS garantiert 99,99% EC2-Uptime"|

>[!important] Abhängigkeitskette
>```
>[[02 - RESOURCES/Notes/Kunden\|Kunden]] ← [[02 - RESOURCES/Notes/SLA\|SLA]] → IT-Service
>              ↓ (unterstützt durch)
>        IT-Teams ← [[02 - RESOURCES/Notes/OLA\|OLA]] → IT-Teams
>              ↓ (nutzt)
>        Externe Lieferanten ← UC
>```
>
>Ein [[02 - RESOURCES/Notes/SLA\|SLA]] kann nur erfüllt werden, wenn die darunterliegenden [[OLA]]s und UCs funktionieren!

---

## Typische UC-Inhalte

>[!note] Was gehört in einen UC?
>- **Service-Beschreibung**: Was liefert der Dienstleister?
>- **Service-Levels**: Verfügbarkeit, Performance (oft höher als im [[02 - RESOURCES/Notes/SLA\|SLA]])
>- **Kosten**: Preismodell (monatlich, nutzungsbasiert)
>- **Support**: Reaktions- und Lösungszeiten
>- **Vertragslaufzeit**: Kündigungsfristen
>- **Haftung**: Was passiert bei Nichteinhaltung? (Penalties, Credits)
>- **Eskalation**: Ansprechpartner bei Problemen
>- **Reporting**: Wie wird die Einhaltung nachgewiesen?

**Beispiel-UC (Auszug)**:
>```markdown
>### UC: AWS EC2-Hosting
>
>**Service**: Cloud [[Server]] (EC2-Instanzen)
>**Verfügbarkeit**: 99,99% (SLA-Credit bei Unterschreitung)
>**Performance**: Garantierte Compute-Ressourcen
>**Support**: 24/7 Premium Support
>**Kosten**: $0.10 pro Stunde pro Instanz
>**Vertragslaufzeit**: 12 Monate, monatlich kündbar
>**Reporting**: Monatlicher Availability-Report
>```

---

## UC-Management (Supplier Management)

>[!important] ITIL-Prozess
>**Supplier Management** ist der ITIL-Prozess zur Verwaltung aller UCs:
>
>**Aufgaben**:
>- Lieferanten auswählen und bewerten
>- Verträge verhandeln
>- Performance überwachen
>- Beziehungen pflegen
>- Risiken managen

>[!tip] Lieferanten-Kategorisierung
>|Typ|Beschreibung|Management-Aufwand|
>|---|---|---|
>|**Strategic**|Kritisch für Business|Hoch (regelmäßige Reviews)|
>|**Tactical**|Wichtig, nicht kritisch|Mittel|
>|**Operational**|Standarddienste|Niedrig|
>|**Commodity**|Austauschbar, Massenware|Minimal|

---

## UC und SLA-Alignment

>[!caution] UC muss besser sein als SLA!
>
>**Wichtige Regel**:
>UC-Service-Levels müssen **höher** sein als die versprochenen [[02 - RESOURCES/Notes/SLA\|SLA]]s, um Puffer zu haben.
>
>**Beispiel**:
>- **[[02 - RESOURCES/Notes/SLA\|SLA]] an [[Kunden]]**: 99,5% Verfügbarkeit
>- **UC vom Cloud-Provider**: 99,9% Verfügbarkeit
>- **Puffer**: 0,4% für interne Probleme

>[!example] Fehlerquelle
>Wenn UC nur 99,5% garantiert und [[02 - RESOURCES/Notes/SLA\|SLA]] 99,5% verspricht → kein Spielraum für interne Ausfälle → [[02 - RESOURCES/Notes/SLA\|SLA]] wird verletzt!

---

## Kosten und Budget

>[!info] Kostenmodelle
>- **Fest**: Monatliche/jährliche Pauschale
>- **Nutzungsbasiert**: Pay-per-Use (z.B. Cloud)
>- **Hybrid**: Basis + zusätzliche Nutzung
>- **Gestaffelt**: Rabatte bei höherer Abnahme

>[!tip] [[02 - RESOURCES/Notes/DSGVO\|DSGVO]] und Compliance
>Bei [[02 - RESOURCES/Notes/Outsourcing\|Outsourcing]] personenbezogener Daten:
>- **Auftragsverarbeitungsvertrag (AVV)** erforderlich
>- [[02 - RESOURCES/Notes/DSGVO\|DSGVO]]-konforme Datenschutzklauseln
>- Technische und organisatorische Maßnahmen (TOM)
>- Recht auf Audit

---

## Risikomanagement

>[!caution] UC-Risiken
>- **Vendor Lock-in**: Abhängigkeit von einem Lieferanten
>- **Service-Ausfall**: Lieferant kann nicht liefern
>- **Preiserhöhungen**: Unerwartete Kostensteigerungen
>- **Sicherheitsvorfälle**: Datenschutzverletzungen beim Lieferanten
>- **Insolvenz**: Lieferant geht pleite

>[!success] Risikominimierung
>- **Mehrere Lieferanten**: Kein Single Point of Failure
>- **Exit-Strategie**: Wie wechseln wir den Anbieter?
>- **Regelmäßige Audits**: Compliance überprüfen
>- **Klare Verträge**: Rechte und Pflichten definiert
>- **Monitoring**: UC-Performance kontinuierlich überwachen

---

## Integration mit ITSM-Prozessen

>[!important] ITIL-Integration
>UCs sind relevant für:
>- **[[02 - RESOURCES/Notes/Service-Level Management\|Service-Level Management]]**: [[SLA]]s können nur durch UCs erfüllt werden
>- **[[02 - RESOURCES/Notes/Availability Management\|Availability Management]]**: Externe Verfügbarkeit tracken
>- **[[02 - RESOURCES/Notes/Capacity Management\|Capacity Management]]**: Externe Ressourcen einplanen
>- **[[02 - RESOURCES/Notes/Incident Management\|Incident Management]]**: Lieferanten-Support bei Störungen
>- **[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**: Root Cause bei externen Services
>- **[[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]]**: Externe Services in [[02 - RESOURCES/Notes/CMDB\|CMDB]]

>[!note] [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]]-Perspektive
>In [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]] werden Lieferanten als Teil der "Partner und Lieferanten"-Dimension im [[02 - RESOURCES/Notes/Service Value System\|Service Value System]] betrachtet.

---
{"dg-publish":true,"permalink":"/02-resources/notes/ola/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:04:11.000+02:00"}
---


>Ein OLA (Operating Level Agreement / Operational Level Agreement) ist eine interne Vereinbarung zwischen IT-Teams innerhalb einer Organisation, die Service-Level für interne Leistungen definiert.

>>OLAs unterstützen die Erfüllung von [[02 - RESOURCES/Notes/SLA\|SLA]]s, indem sie sicherstellen, dass interne Abhängigkeiten klar geregelt sind.

>[!example] Typische OLAs
>- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Team garantiert [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] Reaktionszeit von 2 Stunden
>- [[02 - RESOURCES/Notes/Server\|Server]]-Team stellt 99,5% Verfügbarkeit für E-Mail-[[02 - RESOURCES/Notes/Server\|Server]] bereit
>- Datenbank-Team bietet Backup-Service innerhalb von 4 Stunden
>- Security-Team überprüft [[02 - RESOURCES/Notes/Change Management\|Changes]] innerhalb von 24 Stunden

---

## OLA vs. SLA vs. UC

|Typ|Parteien|Beschreibung|Beispiel|
|---|---|---|---|
|**[[02 - RESOURCES/Notes/SLA\|SLA]]**|IT ↔ externer [[02 - RESOURCES/Notes/Kunden\|Kunden]]|Service Level mit Business/End-User|"E-Mail-Service: 99,9% Verfügbarkeit"|
|**OLA**|IT-Team A ↔ IT-Team B|Interne Vereinbarung zwischen IT-Teams|"[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Team liefert 99,5% für [[02 - RESOURCES/Notes/Server\|Server]]-Team"|
|**[[02 - RESOURCES/Notes/UC\|UC]]**|IT ↔ externer Lieferant|Vertrag mit externem Dienstleister|"Cloud-Provider garantiert 99,99% Uptime"|

>[!important] Hierarchie
>```
>[[02 - RESOURCES/Notes/Kunden\|Kunden]] ← [[02 - RESOURCES/Notes/SLA\|SLA]] → IT-Service
>              ↓ (unterstützt durch)
>        IT-Team A ← OLA → IT-Team B
>              ↓ (nutzt)
>        Externer Lieferant ← [[02 - RESOURCES/Notes/UC\|UC]]
>```

---

## Zweck und Nutzen

>[!success] Warum OLAs?
>- **Klarheit**: Interne Verantwortlichkeiten definieren
>- **[[02 - RESOURCES/Notes/SLA\|SLA]]-Erfüllung**: Ohne funktionierende OLAs können [[02 - RESOURCES/Notes/SLA\|SLA]]s nicht eingehalten werden
>- **Messbarkeit**: Interne Service-Qualität messen
>- **Eskalation**: Klare Prozesse bei Problemen
>- **Koordination**: Abhängigkeiten zwischen Teams managen

>[!example] Praktisches Szenario
>**[[02 - RESOURCES/Notes/SLA\|SLA]]**: "E-Mail-Service verfügbar zu 99,9%"
>
>**Unterstützende OLAs**:
>- [[02 - RESOURCES/Notes/Server\|Server]]-Team: "E-Mail-[[02 - RESOURCES/Notes/Server\|Server]] läuft zu 99,95%"
>- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Team: "[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Verfügbarkeit 99,98%"
>- Storage-Team: "Speicher verfügbar zu 99,99%"
>
>→ Alle OLAs zusammen ermöglichen den [[02 - RESOURCES/Notes/SLA\|SLA]]

---

## Typische OLA-Inhalte

>[!note] Was gehört in ein OLA?
>- **Service-Beschreibung**: Was wird bereitgestellt?
>- **Service-Levels**: Verfügbarkeit, Performance, Reaktionszeiten
>- **Verantwortlichkeiten**: Wer macht was? ([[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]])
>- **Support-Zeiten**: 24/7 oder Geschäftszeiten?
>- **Eskalationsprozess**: An wen bei Problemen?
>- **Reporting**: Wie wird gemessen und berichtet?
>- **Review-Prozess**: Regelmäßige Überprüfungen

**Beispiel-OLA (Auszug)**:
>```markdown
>### OLA: [[Netzwerk]]-Support für Application-Team
>
>**Service**: [[Netzwerk]]-Konnektivität für Produktion
>**Verfügbarkeit**: 99,8%
>**Reaktionszeit**:
>  - Priorität 1: 30 Minuten
>  - Priorität 2: 2 Stunden
>**Support-Zeiten**: 24/7
>**Eskalation**: Bei Nichteinhaltung an IT-Manager
>**Review**: Quartalsweise
>```

---

## OLAs im ITIL-Kontext

>[!important] [[02 - RESOURCES/Notes/Service-Level Management\|Service-Level Management]]
>OLAs sind ein zentraler Bestandteil des [[02 - RESOURCES/Notes/Service-Level Management\|Service-Level Management]]-Prozesses:
>
>1. **[[02 - RESOURCES/Notes/SLA\|SLA]]s definieren** - Was versprechen wir [[Kunden]]?
>2. **OLAs erstellen** - Welche internen Services brauchen wir dafür?
>3. **[[UC]]s verhandeln** - Welche externen Lieferanten brauchen wir?
>4. **Monitoring** - Werden alle Levels eingehalten?
>5. **Reporting & Review** - Kontinuierliche Verbesserung

>[!tip] Service Value Chain
>In [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]] unterstützen OLAs die "Deliver & Support"-Aktivität des [[02 - RESOURCES/Notes/Service Value System\|Service Value System]].

---

## Best Practices

>[!success] Erfolgsfaktoren
>- **Realistisch**: Keine unrealistischen Versprechen
>- **Messbar**: Klare Metriken definieren
>- **Abgestimmt**: Mit allen beteiligten Teams vereinbart
>- **Dokumentiert**: Schriftlich festgehalten
>- **Gelebt**: Regelmäßig überprüft und angepasst
>- **Automatisiert**: Monitoring-Tools für Metriken

>[!caution] Häufige Fehler
>- OLAs existieren nur auf dem Papier
>- Keine regelmäßigen Reviews
>- Unrealistische Service-Levels
>- Fehlende [[02 - RESOURCES/Notes/RACI-Matrix\|Verantwortlichkeiten]]
>- Kein Monitoring der OLA-Einhaltung

---

## Monitoring und Reporting

>[!example] OLA-Metriken
>- **Availability**: Verfügbarkeit des internen Service
>- **Response Time**: Reaktionszeit auf Anfragen
>- **Resolution Time**: Lösungszeit
>- **Escalation Rate**: Wie oft eskaliert?
>- **SLA Impact**: Haben OLA-Verletzungen [[SLA]]s gefährdet?

>[!tip] Tools
>- [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]] für Tracking
>- [[02 - RESOURCES/Notes/Infrastructure Monitoring\|Infrastructure Monitoring]] für technische Metriken
>- ITSM-Tools (ServiceNow, Jira) für OLA-Management
>- Dashboards für Echtzeit-Übersicht

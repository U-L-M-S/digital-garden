---
{"dg-publish":true,"permalink":"/02-resources/notes/incident-management/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:57:13.000+02:00"}
---


>Incident Management ist der ITIL-Prozess zur schnellstmöglichen Wiederherstellung des normalen Service-Betriebs nach einer Störung oder Dienstunterbrechung.

>>Ein Incident ist jede ungeplante Unterbrechung oder Qualitätsminderung eines IT-Services - das Ziel ist schnelle Behebung, nicht Root Cause Analysis (das macht [[02 - RESOURCES/Notes/Problem Management\|Problem Management]]).

>[!example] Typische Incidents
>- [[02 - RESOURCES/Notes/Server\|Server]] ausgefallen
>- [[02 - RESOURCES/Notes/Drucker\|Drucker]] funktioniert nicht
>- [[02 - RESOURCES/Notes/Anwendung\|Anwendung]] langsam oder abgestürzt
>- Passwort vergessen
>- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Verbindung unterbrochen

---

## Incident-Prozess

```
1. Incident erkennen/melden (via [[Helpdesk]], [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]])
   ↓
2. Incident loggen und kategorisieren
   ↓
3. Priorisierung (Dringlichkeit × Impact)
   ↓
4. Initial Diagnosis ([[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]])
   ↓
5. Eskalation? → [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]] / [[02 - RESOURCES/Notes/Third-Level-Support\|Third-Level-Support]]
   ↓
6. Investigation & Diagnosis
   ↓
7. Resolution & Recovery
   ↓
8. Incident schließen
   ↓
9. Optional: An [[02 - RESOURCES/Notes/Problem Management\|Problem Management]] übergeben
```

>[!important] Priorisierung

|Dringlichkeit|Auswirkung|Priorität|Beispiel|
|---|---|---|---|
|**Hoch**|Hoch|**P1 - Kritisch**|Alle [[02 - RESOURCES/Notes/Server\|Server]] down|
|**Hoch**|Mittel|**P2 - Hoch**|Abteilung kann nicht arbeiten|
|**Mittel**|Hoch|**P2 - Hoch**|Wichtiges System langsam|
|**Mittel**|Mittel|**P3 - Normal**|Einzelner [[02 - RESOURCES/Notes/PC\|PC]] Problem|
|**Niedrig**|Niedrig|**P4 - Gering**|Kosmetischer Fehler|

---

## Support-Level und Eskalation

>[!tip] Support-Eskalation
>- **[[First-Level-Support]]** - Einfache, häufige Probleme
>- **[[Second-Level-Support]]** - Spezialisierte Kenntnisse
>- **[[Third-Level-Support]]** - Hersteller, tiefe Expertise

>[!note] Funktionale vs. Hierarchische Eskalation
>- **Funktional**: An höheres Support-Level
>- **Hierarchisch**: An Management (bei politischen Issues)

---

## Workaround vs. Resolution

>[!info] Unterschied
>- **Workaround** - Temporäre Lösung, Service läuft wieder
>- **Resolution** - Dauerhafte Lösung, Problem beseitigt

Incident Management akzeptiert Workarounds - Hauptsache der Service läuft. Die Root Cause wird dann im [[02 - RESOURCES/Notes/Problem Management\|Problem Management]] behandelt.

---

## Major Incident

>[!danger] Kritische Störungen
>Major Incidents haben massive Auswirkungen und erfordern:
>- Separate Behandlung mit höchster Priorität
>- Dedicated Team
>- Häufige Kommunikation mit [[02 - RESOURCES/Notes/Kunden\|Kunden]]
>- Eskalation an Management
>- Post-Incident-Review

>[!success] Nutzen
>- Minimierte Downtime
>- [[02 - RESOURCES/Notes/SLA\|SLA]]s werden eingehalten
>- Zufriedene [[02 - RESOURCES/Notes/Kunden\|Kunden]]
>- Dokumentation für [[02 - RESOURCES/Notes/Problem Management\|Problem Management]]

>[!important] Dokumentation
>Alle Incidents werden im [[Ticketsystem]] dokumentiert - wichtig für Reporting, [[02 - RESOURCES/Notes/SLA\|SLA]]-Tracking und [[Problem Management]].

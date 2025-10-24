---
{"dg-publish":true,"permalink":"/02-resources/notes/service-operation/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:24:24.113+02:00"}
---


>Service Operation ist die vierte Phase des ITIL v3 Service Lifecycle und umfasst den täglichen Betrieb und die Bereitstellung von IT-Services.

>>Service Operation stellt sicher, dass Services effektiv und effizient laufen, Störungen schnell behoben werden und [[02 - RESOURCES/Notes/Kunden\|Kunden]] zufrieden sind.

>[!example] Hauptziele
>- Services zuverlässig bereitstellen
>- [[Incident\|Incident]]s schnell beheben
>- Probleme dauerhaft lösen
>- [[02 - RESOURCES/Notes/SLA\|SLA]]s einhalten
>- Anwender unterstützen

---

## Kernprozesse

|Prozess|Beschreibung|
|---|---|
|**[[02 - RESOURCES/Notes/Incident Management\|Incident Management]]**|Störungen schnellstmöglich beheben|
|**[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**|Root Cause finden und beseitigen|
|**Request Fulfillment**|Service Requests bearbeiten|
|**Event Management**|Events überwachen und reagieren|
|**Access Management**|Zugriffe verwalten und kontrollieren|

>[!important] Funktionen
>- **Service Desk** - Zentrale Anlaufstelle ([[02 - RESOURCES/Notes/Helpdesk\|Helpdesk]])
>- **Technical Management** - Technische Expertise
>- **IT Operations Management** - Tägliche Betriebsaufgaben
>- **Application Management** - [[02 - RESOURCES/Notes/Anwendung\|Anwendung]]sverwaltung

---

## [[02 - RESOURCES/Notes/Helpdesk\|Helpdesk]]/Service Desk

>[!tip] Zentrale Anlaufstelle
>Der [[02 - RESOURCES/Notes/Helpdesk\|Helpdesk]] ist das Gesicht der IT:
>- Erste Anlaufstelle für [[02 - RESOURCES/Notes/Kunden\|Kunden]]
>- [[Incident\|Incident]]s entgegennehmen
>- Service Requests bearbeiten
>- Kommunikation mit Anwendern
>- Eskalation an höhere Support-Level

---

## Balance zwischen Stabilität und Reaktivität

>[!note] Spannungsfeld
>Service Operation muss balancieren zwischen:
>- **Stabilität** - Keine Änderungen, hohes Risiko
>- **Reaktivität** - Schnelle Anpassungen an Bedürfnisse

**Lösung**: Kontrolliertes [[02 - RESOURCES/Notes/Change Management\|Change Management]]

---

## Monitoring und Events

>[!example] [[02 - RESOURCES/Notes/Infrastructure Monitoring\|Infrastructure Monitoring]]
>- Kontinuierliche Überwachung von [[02 - RESOURCES/Notes/Server\|Server]]n, [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
>- Automatische Alerts bei Problemen
>- Proaktive Problemerkennung
>- Performance-Metriken für [[02 - RESOURCES/Notes/Capacity Management\|Capacity Management]]

|Event-Typ|Bedeutung|Aktion|
|---|---|---|
|**Informational**|Normaler Betrieb|Loggen|
|**Warning**|Schwellwert erreicht|Untersuchen|
|**Exception**|Fehler aufgetreten|[[Incident\|Incident]] erstellen|

---

## [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]]-Perspektive

>[!info] Service Value Chain
>In [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]] ist Service Operation Teil der "Deliver & Support"-Aktivität im [[02 - RESOURCES/Notes/Service Value System\|Service Value System]].

>[!tip] Integration mit [[02 - RESOURCES/Notes/DevOps\|DevOps]]
>Moderne Service Operation nutzt [[02 - RESOURCES/Notes/DevOps\|DevOps]]-Praktiken:
>- Automatisierte Deployments
>- Self-Service-Portale
>- Kontinuierliches Monitoring

>[!important] Continual Improvement
>Service Operation sollte kontinuierlich verbessert werden - aus [[Incident\|Incident]]s und Problemen lernen.

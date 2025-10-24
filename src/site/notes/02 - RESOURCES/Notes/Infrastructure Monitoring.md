---
{"dg-publish":true,"permalink":"/02-resources/notes/infrastructure-monitoring/","tags":["informatik/monitoring","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:59:04.845+02:00"}
---


>Infrastructure Monitoring ist die kontinuierliche Überwachung von IT-Infrastrukturkomponenten ([[02 - RESOURCES/Notes/Server\|Server]], [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]], [[02 - RESOURCES/Notes/Anwendung\|Anwendung]]en), um Performance-Probleme frühzeitig zu erkennen und Ausfälle zu verhindern.

>>Monitoring-Systeme sammeln Metriken, generieren Alerts und helfen bei der proaktiven Problemerkennung im Rahmen von [[02 - RESOURCES/Notes/Service Operation\|Service Operation]].

>[!example] Überwachte Komponenten
>- **[[02 - RESOURCES/Notes/Server\|Server]]**: CPU, RAM, Disk, Temperatur
>- **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]**: Bandbreite, Latenz, Paketverlust, [[02 - RESOURCES/Notes/Router\|Router]], [[02 - RESOURCES/Notes/Switch\|Switch]]
>- **[[02 - RESOURCES/Notes/Anwendung\|Anwendung]]en**: Verfügbarkeit, Antwortzeiten, Fehlerraten
>- **Datenbanken**: Connections, Queries, Performance
>- **Speicher**: Kapazität, IOPS, Auslastung
>- **Dienste**: [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]], DNS, Web-Server

---

## Monitoring-Arten

|Art|Beschreibung|Beispiel|
|---|---|---|
|**Availability Monitoring**|Ist es erreichbar?|Ping, HTTP-Check|
|**Performance Monitoring**|Wie schnell reagiert es?|Response Time, Latenz|
|**Capacity Monitoring**|Wird es knapp?|Disk 90% voll|
|**Log Monitoring**|Was sagen die Logs?|Error-Logs durchsuchen|
|**Application Performance Monitoring (APM)**|Wie läuft die App?|Transaktionen tracken|

>[!important] Metriken-Typen
>- **Availability**: Uptime, Downtime
>- **Performance**: CPU %, RAM %, Antwortzeit
>- **Capacity**: Speichernutzung, [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]auslastung
>- **Quality**: Fehlerraten, Success Rate

---

## Monitoring-Tools

>[!example] Bekannte Tools
>- **Nagios** - Open-Source-Klassiker
>- **Zabbix** - Enterprise Monitoring
>- **Prometheus + Grafana** - Moderne Cloud-Native-Lösung
>- **PRTG** - All-in-One Monitoring
>- **Datadog** - SaaS Monitoring
>- **ELK Stack** - Log-Management (Elasticsearch, Logstash, Kibana)

---

## Alerts und Notifications

>[!tip] Alert-Konfiguration
>Alerts sollten sinnvoll konfiguriert sein:
>- **Thresholds**: CPU > 90% für 5 Min
>- **Escalation**: Erst E-Mail, dann SMS, dann Anruf
>- **Unterdrückung**: Nicht bei jedem kleinen Spike
>- **Gruppierung**: Zusammenhängende Alerts bündeln

>[!caution] Alert Fatigue
>Zu viele False Positives → Menschen ignorieren Alerts → Echte Probleme werden übersehen

---

## Integration mit ITSM

>[!note] Event Management
>Monitoring erzeugt Events, die in [[02 - RESOURCES/Notes/Service Operation\|Service Operation]] verarbeitet werden:
>- **Informational**: Nur loggen
>- **Warning**: Untersuchen, vorbeugen
>- **Exception**: [[02 - RESOURCES/Notes/Incident Management\|Incident]] erstellen

>[!success] Proaktives Management
>Monitoring ermöglicht:
>- **[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**: Trends erkennen, Root Cause finden
>- **[[02 - RESOURCES/Notes/Capacity Management\|Capacity Management]]**: Engpässe vorhersagen
>- **[[02 - RESOURCES/Notes/Availability Management\|Availability Management]]**: Verfügbarkeit sicherstellen
>- **[[02 - RESOURCES/Notes/Service-Level Management\|Service-Level Management]]**: [[02 - RESOURCES/Notes/SLA\|SLA]]s überwachen

---

## Moderne Ansätze

>[!tip] Observability
>Neben klassischem Monitoring:
>- **Metrics**: Numerische Werte (CPU, RAM)
>- **Logs**: Textuelle Ereignisse
>- **Traces**: Verteilte Transaktionsverfolgung
>
>→ Vollständiges Bild des Systems

>[!info] [[02 - RESOURCES/Notes/DevOps\|DevOps]]-Integration
>Moderne Monitoring-Lösungen integrieren sich mit CI/CD-Pipelines und ermöglichen Continuous Monitoring.

>[!important] Automatische Remediation
>Fortgeschrittene Systeme können automatisch reagieren:
>- [[02 - RESOURCES/Notes/Server\|Server]] neu starten
>- Auto-Scaling auslösen
>- [[Incident\|Incident]] automatisch erstellen

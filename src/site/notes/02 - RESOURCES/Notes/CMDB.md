---
{"dg-publish":true,"permalink":"/02-resources/notes/cmdb/","tags":["informatik/datenbank","informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:55:33.000+02:00"}
---


>Die Configuration Management Database (CMDB) ist eine zentrale Datenbank, die alle IT-Assets (Configuration Items) und ihre Beziehungen speichert und verwaltet.

>>Die CMDB ist das Herzstück des [[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]] und liefert kritische Informationen für viele ITIL-Prozesse.

>[!example] Gespeicherte Informationen
>- **Configuration Items (CIs)**: [[02 - RESOURCES/Notes/Server\|Server]], [[02 - RESOURCES/Notes/PC\|PC]], Software, [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]komponenten
>- **Attribute**: Name, Version, Standort, Besitzer, Status
>- **Beziehungen**: "Server A hostet Anwendung B"
>- **Änderungshistorie**: Was wurde wann geändert?
>- **Abhängigkeiten**: Welche Services hängen wovon ab?

---

## CI-Typen in der CMDB

|CI-Typ|Beispiele|
|---|---|
|**Hardware**|[[02 - RESOURCES/Notes/Server\|Server]], [[02 - RESOURCES/Notes/Router\|Router]], [[02 - RESOURCES/Notes/Switch\|Switch]], [[02 - RESOURCES/Notes/PC\|PC]], [[02 - RESOURCES/Notes/Drucker\|Drucker]]|
|**Software**|[[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]], [[02 - RESOURCES/Notes/Anwendung\|Anwendung]]en, Datenbanken|
|**Netzwerk**|VLANs, [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]n, Firewalls|
|**Dokumentation**|[[02 - RESOURCES/Notes/SLA\|SLA]]s, Handbücher, Verträge|
|**Services**|E-Mail-Service, [[02 - RESOURCES/Notes/Helpdesk\|Helpdesk]]|
|**Personen**|Verantwortliche, Teams|

>[!important] Relationship Mapping
>Die CMDB zeigt nicht nur einzelne CIs, sondern auch deren Beziehungen:
>```
>Geschäftsprozess "Bestellung"
>  ↓ nutzt
>Webshop-Service
>  ↓ läuft auf
>[[Server]] "Web-01"
>  ↓ verbunden mit
>Datenbank-[[Server]] "DB-01"
>```

---

## Nutzen der CMDB

>[!success] Anwendungsfälle
>- **[[02 - RESOURCES/Notes/Incident Management\|Incident Management]]**: Welche CIs sind von der Störung betroffen?
>- **[[02 - RESOURCES/Notes/Change Management\|Change Management]]**: Impact-Analyse - was wird von der Änderung beeinflusst?
>- **[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**: Root Cause durch CI-Analyse finden
>- **Asset Management**: Inventar und Lizenzverwaltung
>- **Security**: Welche Systeme benötigen Patches?
>- **Disaster Recovery**: Was muss wiederhergestellt werden?

>[!tip] Impact Analysis
>Bei einem geplanten [[02 - RESOURCES/Notes/Change Management\|Change]] kann die CMDB zeigen:
>- Welche Services betroffen sind
>- Welche [[02 - RESOURCES/Notes/Kunden\|Kunden]] beeinträchtigt werden
>- Welche Abhängigkeiten existieren
>- Risikobewertung für den Change

---

## CMDB-Tools und Technologie

>[!example] Bekannte Tools
>- ServiceNow
>- BMC Remedy
>- Jira Service Management
>- iTop (Open Source)
>- Device42

>[!note] Auto-Discovery
>Moderne CMDB-Tools können automatisch:
>- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] scannen und CIs finden
>- Software-Inventar erfassen
>- Beziehungen erkennen
>- Änderungen tracken

---

## Best Practices

>[!success] Erfolgsfaktoren
>- **Aktualität**: Regelmäßige Updates, Auto-Discovery nutzen
>- **Relevanz**: Nur wichtige CIs erfassen
>- **Integration**: Mit [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]], [[02 - RESOURCES/Notes/Change Management\|Change Management]]-Tools
>- **Governance**: Klare Verantwortlichkeiten
>- **Audits**: Regelmäßige Überprüfungen

>[!caution] Häufige Probleme
>- CMDB veraltet und ungenau ("Garbage in, garbage out")
>- Zu komplex - zu viele Details
>- Fehlende Integration mit anderen Tools
>- Manuelle Pflege zu aufwändig

>[!important] Federated CMDB
>Große Organisationen nutzen oft mehrere, verbundene CMDBs statt einer zentralen - eine "Federated CMDB".

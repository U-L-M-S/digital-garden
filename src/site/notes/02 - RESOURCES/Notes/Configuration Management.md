---
{"dg-publish":true,"permalink":"/02-resources/notes/configuration-management/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:55:32.000+02:00"}
---


>Configuration Management ist der ITIL-Prozess zur Verwaltung aller IT-Assets (Configuration Items) und ihrer Beziehungen in einer zentralen Datenbank ([[02 - RESOURCES/Notes/CMDB\|CMDB]]).

>>Ziel ist es, jederzeit einen aktuellen und genauen Überblick über die IT-Infrastruktur zu haben - welche Komponenten existieren und wie sie zusammenhängen.

>[!example] Configuration Items (CIs)
>- **Hardware**: [[02 - RESOURCES/Notes/Server\|Server]], [[02 - RESOURCES/Notes/PC\|PC]], [[02 - RESOURCES/Notes/Drucker\|Drucker]], [[02 - RESOURCES/Notes/Router\|Router]], [[02 - RESOURCES/Notes/Switch\|Switch]]
>- **Software**: [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]e, [[02 - RESOURCES/Notes/Anwendung\|Anwendung]]en, Lizenzen
>- **Dokumentation**: Handbücher, Verträge, [[02 - RESOURCES/Notes/SLA\|SLA]]s
>- **Personen**: Schlüsselpersonen, Support-Teams
>- **Services**: Business Services

---

## [[02 - RESOURCES/Notes/CMDB\|CMDB]] - Configuration Management Database

>[!important] Herzstück
>Die [[02 - RESOURCES/Notes/CMDB\|CMDB]] ist die zentrale Datenbank, die alle Configuration Items und ihre Beziehungen speichert.

**CMDB-Inhalte:**
- CI-Attribute (Name, Version, Standort, Status)
- Beziehungen zwischen CIs ("Server A hostet Anwendung B")
- Änderungshistorie
>- Verantwortliche Personen
>- Abhängigkeiten

>[!example] Beziehungen
>```
>[[Server]] "Mail-Server-01"
>  ↓ hostet
>E-Mail-Service
>  ↓ genutzt von
>Abteilung Vertrieb
>  ↓ unterstützt durch
>[[SLA]] "E-Mail-Support"
>```

---

## Hauptaktivitäten

|Aktivität|Beschreibung|
|---|---|
|**Identification**|CIs identifizieren und benennen|
|**Control**|Änderungen kontrollieren|
|**Status Accounting**|CI-Status verfolgen|
|**Verification & Audit**|Korrektheit prüfen|

>[!tip] Nutzen der CMDB
>- **[[02 - RESOURCES/Notes/Incident Management\|Incident Management]]**: Welche CIs sind betroffen?
>- **[[02 - RESOURCES/Notes/Change Management\|Change Management]]**: Impact-Analyse - was ist betroffen?
>- **[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**: Root Cause finden
>- **Asset Management**: Lizenzen und Inventar
>- **Disaster Recovery**: Was muss wiederhergestellt werden?

---

## Best Practices

>[!success] Erfolgsfaktoren
>- [[02 - RESOURCES/Notes/CMDB\|CMDB]] aktuell halten (automatische Discovery-Tools)
>- Nicht zu detailliert - nur relevante CIs erfassen
>- Klare Naming Conventions
>- Regelmäßige Audits und Bereinigung
>- Integration mit anderen ITSM-Tools

>[!caution] Häufige Fehler
>- [[02 - RESOURCES/Notes/CMDB\|CMDB]] veraltet und nicht gepflegt
>- Zu viele irrelevante Details
>- Keine Integration mit [[02 - RESOURCES/Notes/Change Management\|Change Management]]
>- Manueller Aufwand zu hoch

>[!note] Automatisierung
>Moderne Tools können CIs automatisch entdecken (Auto-Discovery) und die [[02 - RESOURCES/Notes/CMDB\|CMDB]] aktuell halten.

>[!important] Integration
>Configuration Management ist essentiell für [[02 - RESOURCES/Notes/Change Management\|Change Management]], [[02 - RESOURCES/Notes/Release Management\|Release Management]] und [[02 - RESOURCES/Notes/Service Transition\|Service Transition]].

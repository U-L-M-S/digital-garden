---
{"dg-publish":true,"permalink":"/02-resources/notes/anwendung/","tags":["informatik/software","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:01:48.279+02:00"}
---


>Eine Anwendung (Application/Software) ist ein Computerprogramm, das spezifische Aufgaben für Nutzer erfüllt und auf einem [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] läuft.

>>Anwendungen sind zentrale Configuration Items ([[02 - RESOURCES/Notes/CMDB\|CMDB]]) und häufiges Thema in [[02 - RESOURCES/Notes/Incident Management\|Incident Management]] und [[02 - RESOURCES/Notes/Change Management\|Change Management]].

>[!example] Anwendungstypen
>- **Business-Anwendungen** - ERP (SAP), CRM (Salesforce)
>- **Office-Software** - Microsoft Office, LibreOffice
>- **Kommunikation** - E-Mail (Outlook), Messaging (Teams, Slack)
>- **Entwicklung** - IDEs (Visual Studio, IntelliJ)
>- **Datenbanken** - SQL Server, MySQL, PostgreSQL
>- **Web-Anwendungen** - SaaS-Dienste, Intranet
>- **Mobile Apps** - iOS, Android

---

## Anwendungsarchitekturen

|Architektur|Beschreibung|Beispiel|
|---|---|---|
|**Desktop-Anwendung**|Lokal auf [[02 - RESOURCES/Notes/PC\|PC]] installiert|Microsoft Word|
|**Client-Server**|Client auf [[02 - RESOURCES/Notes/PC\|PC]], Daten auf [[02 - RESOURCES/Notes/Server\|Server]]|E-Mail-Client + Mail-[[02 - RESOURCES/Notes/Server\|Server]]|
|**Web-basiert**|Browser-Zugriff, läuft auf [[02 - RESOURCES/Notes/Server\|Server]]|Google Docs, Office 365|
|**Mobile App**|Auf Smartphone/Tablet|WhatsApp, Outlook Mobile|
|**Cloud-native**|Komplett in der Cloud|Salesforce, AWS Services|

---

## Häufige Probleme

>[!caution] Typische Support-Anfragen
>- **Anwendung startet nicht** - Fehlende Abhängigkeiten, Lizenzen
>- **Abstürze** - Software-Bugs, Kompatibilitätsprobleme
>- **Performance-Probleme** - Langsame Reaktion, Timeouts
>- **Fehlermeldungen** - Ungültige Eingaben, Berechtigungsfehler
>- **Lizenzen abgelaufen** - Software gesperrt
>- **Datenbank-Verbindung verloren** - [[02 - RESOURCES/Notes/Server\|Server]] nicht erreichbar

>[!tip] [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]]-Maßnahmen
>1. Anwendung neu starten
>2. [[02 - RESOURCES/Notes/PC\|PC]] neu starten
>3. Anwendung neu installieren
>4. Cache/temporäre Dateien löschen
>5. Updates prüfen
>6. Logs prüfen für Fehlermeldungen

---

## Application Lifecycle Management

>[!note] Software-Lebenszyklus
>```
>1. Anforderungsanalyse
>2. Entwicklung/Beschaffung
>3. Testing (UAT, Integration)
>4. [[Service Transition]] - Deployment
>5. Betrieb ([[Service Operation]])
>6. Wartung und Updates ([[Release Management]])
>7. Außerbetriebnahme (Decommissioning)
>```

>[!important] [[02 - RESOURCES/Notes/Change Management\|Change Management]]
>Anwendungs-Updates werden über [[02 - RESOURCES/Notes/RFC\|RFC]]s gesteuert:
>- Impact-Analyse (welche Nutzer betroffen?)
>- Testing in Testumgebung
>- Rollback-Plan
>- Deployment-Planung

---

## Lizenzverwaltung

>[!example] Lizenzmodelle
>- **Per-User** - Lizenz pro Benutzer
>- **Per-Device** - Lizenz pro [[02 - RESOURCES/Notes/PC\|PC]]
>- **Concurrent** - Gleichzeitige Nutzer begrenzt
>- **Subscription** - Monatlich/jährlich (SaaS)
>- **Open Source** - Kostenlos, verschiedene Lizenzen (GPL, MIT)

>[!caution] Compliance
>Software-Lizenzen müssen in [[02 - RESOURCES/Notes/CMDB\|CMDB]] dokumentiert sein:
>- Lizenzanzahl vs. Installationen
>- Ablaufdaten
>- Kosten

---

## Application Performance Monitoring (APM)

>[!tip] Überwachung
>- Response Times - Wie schnell reagiert die App?
>- Error Rates - Wie viele Fehler treten auf?
>- Throughput - Wie viele Transaktionen?
>- Resource Usage - CPU, RAM, Datenbank

**Tools**: Dynatrace, New Relic, AppDynamics

>[!success] Integration mit [[02 - RESOURCES/Notes/ITSM\|ITSM]]
>- **[[02 - RESOURCES/Notes/Incident Management\|Incident Management]]**: Anwendungsfehler beheben
>- **[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**: Root Cause bei wiederkehrenden App-Fehlern
>- **[[02 - RESOURCES/Notes/Capacity Management\|Capacity Management]]**: Ressourcen für Anwendung planen
>- **[[02 - RESOURCES/Notes/Availability Management\|Availability Management]]**: Uptime sicherstellen
>- **[[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]]**: In [[02 - RESOURCES/Notes/CMDB\|CMDB]] dokumentieren

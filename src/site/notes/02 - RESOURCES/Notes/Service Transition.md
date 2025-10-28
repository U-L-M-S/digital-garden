---
{"dg-publish":true,"permalink":"/02-resources/notes/service-transition/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:24:25.000+02:00"}
---


>Service Transition ist die dritte Phase des ITIL v3 Service Lifecycle und umfasst die Überführung neuer oder geänderter Services vom Design in den Live-Betrieb.

>>Service Transition stellt sicher, dass neue Services erfolgreich eingeführt werden - ohne Störung bestehender Services und mit minimalen Risiken.

>[!example] Hauptaufgaben
>- Neue Services in Produktion bringen
>- Änderungen kontrolliert durchführen
>- Tests und Validierungen durchführen
>- Wissen und Dokumentation bereitstellen
>- Rollback-Strategien planen

---

## Hauptprozesse

|Prozess|Beschreibung|
|---|---|
|**[[02 - RESOURCES/Notes/Change Management\|Change Management]]**|Änderungen über [[02 - RESOURCES/Notes/RFC\|RFC]]s steuern|
|**[[02 - RESOURCES/Notes/Release Management\|Release Management]]**|Software-Releases koordinieren|
|**[[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]]**|Assets in [[02 - RESOURCES/Notes/CMDB\|CMDB]] verwalten|
|**Knowledge Management**|Wissen dokumentieren und teilen|
|**Service Validation and Testing**|Services vor Go-Live testen|
|**Deployment Management**|Rollout durchführen|
|**Change Evaluation**|Risiken und Impact bewerten|

>[!important] Die 4 P's der Service Transition
>- **People** - Schulung und Kommunikation
>- **Process** - Standardisierte Abläufe
>- **Product** - Technische Lösung
>- **Partner** - [[02 - RESOURCES/Notes/Outsourcing\|Outsourcing]], [[02 - RESOURCES/Notes/UC\|UC]]

---

## Deployment-Strategien

|Strategie|Beschreibung|Risiko|
|---|---|---|
|**Big Bang**|Alles auf einmal|Hoch|
|**Phased**|Schrittweise Einführung|Mittel|
|**Pilot**|Erst Testgruppe|Niedrig|
|**Parallel**|Alte und neue Systeme parallel|Sehr niedrig|

>[!success] Erfolgsfaktoren
>- Umfassendes Testing
>- Klarer Rollback-Plan
>- Gute Kommunikation
>- Schulung der Anwender
>- Dokumentation aktuell halten

>[!tip] [[02 - RESOURCES/Notes/DevOps\|DevOps]]-Integration
>Moderne Service Transition nutzt [[02 - RESOURCES/Notes/DevOps\|DevOps]]-Praktiken wie Continuous Delivery und Infrastructure as Code für schnellere, sicherere Deployments.

>[!note] [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]]-Perspektive
>In [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]] ist Service Transition Teil der "Design & Transition"-Aktivität im [[02 - RESOURCES/Notes/Service Value System\|Service Value System]].

>[!caution] Häufige Fehler
>- Unzureichendes Testing
>- Fehlende Rollback-Pläne
>- Schlechte Kommunikation
>- [[02 - RESOURCES/Notes/CMDB\|CMDB]] nicht aktualisiert

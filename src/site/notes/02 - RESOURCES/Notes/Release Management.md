---
{"dg-publish":true,"permalink":"/02-resources/notes/release-management/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:55:30.000+02:00"}
---


>Release Management ist der ITIL-Prozess zur Planung, Koordinierung und kontrollierten Bereitstellung von Software-Releases und Updates in die Produktivumgebung.

>>Ein Release ist eine Sammlung von neuer oder geänderter Software, Hardware oder Dokumentation, die zusammen als Einheit bereitgestellt wird.

>[!example] Hauptaufgaben
>- Release-Planung und -Zeitpläne
>- Build und Test von Releases
>- Koordination von Deployments
>- Rollback bei Problemen
>- Release-Dokumentation
>- Kommunikation mit Stakeholdern

---

## Release-Typen

|Typ|Beschreibung|Häufigkeit|
|---|---|---|
|**Major Release**|Große neue Funktionen, Breaking Changes|Jährlich|
|**Minor Release**|Kleinere Features, Verbesserungen|Quartalsweise|
|**Emergency Release**|Kritische Bugfixes, Sicherheitspatches|Nach Bedarf|
|**Patch**|Kleine Korrekturen|Monatlich|

>[!important] Release vs. Deployment
>- **Release** - Was wird bereitgestellt (Paket)
>- **Deployment** - Wie wird es bereitgestellt (Prozess)

---

## Release-Prozess

```
1. Release-Planung
   ↓
2. Build und Paketierung
   ↓
3. Testing (UAT, Integration)
   ↓
4. [[02 - RESOURCES/Notes/Change Management\|Change Management]] - [[RFC]] erstellen
   ↓
5. Deployment vorbereiten
   ↓
6. Go-Live durchführen
   ↓
7. Post-Implementation Review
   ↓
8. [[CMDB]] aktualisieren
```

>[!tip] Moderne Ansätze
>**[[02 - RESOURCES/Notes/DevOps\|DevOps]] und Continuous Delivery** ermöglichen häufigere, kleinere Releases - teilweise mehrmals täglich statt quartalsweise.

---

## Deployment-Automatisierung

>[!success] Benefits
>- **Geschwindigkeit**: Schnellere Releases
>- **Konsistenz**: Weniger menschliche Fehler
>- **Wiederholbarkeit**: Gleicher Prozess jedes Mal
>- **Rollback**: Automatische Rücknahme bei Problemen

>[!example] CI/CD-Tools
>- Jenkins, GitLab CI, GitHub Actions
>- Automatisierte Tests
>- Infrastructure as Code
>- Container (Docker, Kubernetes)

>[!note] [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]]-Integration
>In [[02 - RESOURCES/Notes/ITIL 4\|ITIL 4]] ist Release Management Teil der "Obtain/Build"-Aktivität im [[02 - RESOURCES/Notes/Service Value System\|Service Value System]].

>[!caution] Risiken
>- Ungetestete Releases
>- Fehlende Koordination mit [[02 - RESOURCES/Notes/Change Management\|Change Management]]
>- Inkompatibilitäten mit bestehenden Systemen
>- Unzureichende Rollback-Planung

>[!important] Zusammenarbeit
>Release Management arbeitet eng mit [[Change Management]], [[02 - RESOURCES/Notes/Service Transition\|Service Transition]] und [[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]] zusammen.

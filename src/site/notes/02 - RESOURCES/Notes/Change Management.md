---
{"dg-publish":true,"permalink":"/02-resources/notes/change-management/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:57:09.000+02:00"}
---


>Change Management ist der ITIL-Prozess zur kontrollierten Durchführung von Änderungen an IT-Services und Infrastruktur, um Risiken zu minimieren und Störungen zu vermeiden.

>>Ziel ist es, notwendige Änderungen effizient umzusetzen, während die Stabilität der Services erhalten bleibt.

>[!example] Typische Changes
>- Software-Updates und Patches
>- Hardware-Austausch ([[02 - RESOURCES/Notes/Server\|Server]], [[02 - RESOURCES/Notes/Router\|Router]], [[02 - RESOURCES/Notes/Switch\|Switch]])
>- Konfigurationsänderungen
>- Neue Services einführen
>- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Modifikationen

---

## Request for Change ([[02 - RESOURCES/Notes/RFC\|RFC]])

>[!important] RFC-Prozess
>Jede Änderung beginnt mit einem [[02 - RESOURCES/Notes/RFC\|Request for Change]]:

```
1. RFC erstellen (Beschreibung, Begründung, Risiken)
   ↓
2. Change Advisory Board (CAB) bewertet
   ↓
3. Genehmigung oder Ablehnung
   ↓
4. Planung und Scheduling
   ↓
5. Implementierung
   ↓
6. Review (Post Implementation Review)
   ↓
7. [[02 - RESOURCES/Notes/CMDB\|CMDB]] aktualisieren
```

>[!note] Change-Typen
>|Typ|Beschreibung|Genehmigung|
>|---|---|---|
>|**Standard Change**|Vordefiniert, geringes Risiko|Pre-authorized|
>|**Normal Change**|Regulärer Prozess|CAB-Genehmigung|
>|**Emergency Change**|Dringend, kritisch|E-CAB (schnell)|

---

## Change Advisory Board (CAB)

>[!info] CAB-Zusammensetzung
>- Change Manager (Leitung)
>- Technische Experten
>- [[02 - RESOURCES/Notes/Business-Relationship-Management\|Business-Relationship-Management]]
>- Sicherheitsbeauftragte
>- Betroffene Stakeholder

**CAB-Aufgaben:**
>- Changes bewerten (Risiko, Impact, Kosten)
>- Genehmigung oder Ablehnung
>- Priorisierung
>- Terminplanung

---

## Die 7 Rs des Change Managements

1. **Raised** - Wer hat den Change beantragt?
2. **Reason** - Warum ist der Change nötig?
3. **Return** - Welcher Nutzen entsteht?
4. **Risks** - Welche Risiken gibt es?
5. **Resources** - Was wird benötigt?
6. **Responsible** - Wer ist verantwortlich?
7. **Relationship** - Welche anderen Changes hängen damit zusammen?

>[!tip] [[02 - RESOURCES/Notes/DevOps\|DevOps]]-Ansatz
>In [[02 - RESOURCES/Notes/DevOps\|DevOps]]-Umgebungen werden Changes häufiger, kleiner und stärker automatisiert - weniger formale Genehmigungen, mehr Automatisierung.

>[!success] Nutzen
>- Reduzierte Fehlerquote
>- Weniger Störungen ([[02 - RESOURCES/Notes/Incident Management\|Incident Management]])
>- Nachvollziehbarkeit
>- Koordinierte Änderungen
>- Rollback-Planung

>[!caution] Häufige Fehler
>- Unauthorized Changes ("Under the radar")
>- Unzureichende Impact-Analyse
>- Fehlende Rollback-Pläne
>- [[CMDB]] nicht aktualisiert

>[!important] Integration
>Change Management arbeitet eng mit [[02 - RESOURCES/Notes/Release Management\|Release Management]], [[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]] und [[02 - RESOURCES/Notes/Service Transition\|Service Transition]] zusammen.

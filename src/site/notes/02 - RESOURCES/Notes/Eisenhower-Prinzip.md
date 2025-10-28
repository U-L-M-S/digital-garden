---
{"dg-publish":true,"permalink":"/02-resources/notes/eisenhower-prinzip/","tags":["produktivität/zeitmanagement","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:01:53.000+02:00"}
---


>Das Eisenhower-Prinzip ist eine Zeitmanagement-Methode zur Priorisierung von Aufgaben nach den Dimensionen "Wichtigkeit" und "Dringlichkeit".

>>Benannt nach US-Präsident Dwight D. Eisenhower, hilft die Matrix zu entscheiden, was sofort getan, geplant, delegiert oder ignoriert werden sollte.

>[!example] Die 4 Quadranten

|Dringlichkeit|Wichtig|Nicht wichtig|
|---|---|---|
|**Dringend**|**Q1: Sofort machen**<br>Krisen, Deadlines, Notfälle|**Q2: Delegieren**<br>Unterbrechungen, manche Meetings|
|**Nicht dringend**|**Q3: Terminieren**<br>Planung, Entwicklung, Beziehungen|**Q4: Eliminieren**<br>Zeitfresser, Ablenkungen|

---

## Quadrant 1: Sofort machen (Dringend + Wichtig)

>[!danger] Krisen und Notfälle
>**Charakteristika**:
>- Erfordert sofortige Aufmerksamkeit
>- Hoher Impact bei Nichtbehandlung
>- Stressig

**IT-Beispiele**:
>- Major [[Incident\|Incident]]s ([[02 - RESOURCES/Notes/Server\|Server]] komplett down)
>- Sicherheitslücken schließen
>- Kritische [[02 - RESOURCES/Notes/SLA\|SLA]]-Verletzungen
>- Deadline-kritische Projekte

>[!caution] Zu viel Q1 = Problem
>Dauerhaft in Q1 zu arbeiten führt zu Burnout. Ziel: Mehr Zeit in Q2 investieren (Prävention).

---

## Quadrant 2: Terminieren (Nicht dringend + Wichtig)

>[!success] Der wichtigste Quadrant
>**Charakteristika**:
>- Langfristig wertvoll
>- Keine unmittelbare Deadline
>- Proaktiv statt reaktiv

**IT-Beispiele**:
>- [[02 - RESOURCES/Notes/Problem Management\|Problem Management]] - Root Cause Analysis
>- Strategische Planung ([[02 - RESOURCES/Notes/Service Strategy\|Service Strategy]])
>- [[02 - RESOURCES/Notes/Capacity Management\|Capacity Management]] und Kapazitätsplanung
>- Team-Schulungen und Weiterbildung
>- Prozessverbesserungen
>- Dokumentation aktualisieren

>[!tip] Hier investieren!
>Zeit in Q2 reduziert Q1-Krisen. Beispiel: Regelmäßige [[02 - RESOURCES/Notes/USV\|USV]]-Wartung verhindert [[02 - RESOURCES/Notes/Server\|Server]]-Ausfälle.

---

## Quadrant 3: Delegieren (Dringend + Nicht wichtig)

>[!info] Delegieren oder minimieren
>**Charakteristika**:
>- Scheint dringend, aber wenig Impact
>- Oft Aufgaben für andere Menschen

**IT-Beispiele**:
>- Routine-Anfragen an [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]] delegieren
>- Standard [[Incident\|Incident]]s mit [[02 - RESOURCES/Notes/Chat-Bot\|Chat-Bot]] automatisieren
>- Meetings, die andere führen können
>- Reporting-Aufgaben automatisieren

>[!tip] Automatisierung
>Viele Q3-Aufgaben können automatisiert oder an Tools/Junior-Mitarbeiter delegiert werden.

---

## Quadrant 4: Eliminieren (Nicht dringend + Nicht wichtig)

>[!caution] Zeitverschwender
>**Charakteristika**:
>- Weder dringend noch wichtig
>- Ablenkungen und Prokrastination

**Beispiele**:
>- Endloses E-Mail-Checken
>- Unnötige Meetings
>- Social Media während Arbeitszeit
>- Überflüssige Reports lesen

>[!important] Eliminieren oder minimieren
>Diese Aktivitäten bewusst reduzieren oder komplett streichen.

---

## Anwendung im IT-Support

>[!example] [[02 - RESOURCES/Notes/Incident Management\|Incident Management]]-Priorisierung

|Kategorie|Beispiel|Quadrant|Aktion|
|---|---|---|---|
|**Kritischer [[Incident\|Incident]]**|Alle [[02 - RESOURCES/Notes/Server\|Server]] down|Q1|Sofort bearbeiten|
|**Proaktive Wartung**|[[02 - RESOURCES/Notes/USV\|USV]]-Batterien tauschen|Q2|Terminieren|
|**Standard-Request**|Passwort zurücksetzen|Q3|An [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]]|
|**Low-Priority-Ticket**|Kosmetischer UI-Fehler|Q4|Backlog oder ablehnen|

>[!tip] [[02 - RESOURCES/Notes/ITIL\|ITIL]]-Integration
>Das Eisenhower-Prinzip ergänzt die ITIL-Priorisierung in [[02 - RESOURCES/Notes/Incident Management\|Incident Management]]:
>- **Dringlichkeit** - Wie schnell muss es gelöst werden?
>- **Impact** - Wie viele sind betroffen? (≈ Wichtigkeit)

---

## Persönliche Produktivität

>[!success] Zeitmanagement-Tipps
>1. **Morgens Q2-Zeit blocken** - Vor Krisen/E-Mails
>2. **Q1 minimieren** - Durch Q2-Investition
>3. **Q3 delegieren** - Nicht alles selbst machen
>4. **Q4 eliminieren** - Bewusst "Nein" sagen
>5. **Wöchentliche Review** - Wo verbringst du Zeit?

>[!note] Unterschied zu [[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]]
>- **Eisenhower**: Priorisierung von Aufgaben
>- **[[02 - RESOURCES/Notes/RACI-Matrix\|RACI-Matrix]]**: Verantwortlichkeiten klären
>
>Beide ergänzen sich gut!

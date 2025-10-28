---
{"dg-publish":true,"permalink":"/02-resources/notes/rfc/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:57:11.000+02:00"}
---


>Ein Request for Change (RFC) ist ein formaler Antrag zur Durchführung einer Änderung an IT-Services oder Infrastruktur im Rahmen des [[02 - RESOURCES/Notes/Change Management\|Change Management]].

>>Der RFC dokumentiert, was geändert werden soll, warum, welche Risiken bestehen und wie die Änderung durchgeführt wird.

>[!example] Typische RFC-Inhalte
>- **Beschreibung**: Was soll geändert werden?
>- **Begründung**: Warum ist die Änderung nötig?
>- **Impact**: Welche Services/[[02 - RESOURCES/Notes/Kunden\|Kunden]] sind betroffen?
>- **Risiken**: Was kann schiefgehen?
>- **Rollback-Plan**: Wie machen wir es rückgängig?
>- **Zeitplan**: Wann soll es durchgeführt werden?
>- **Ressourcen**: Wer macht es, was wird benötigt?
>- **Affected CIs**: Welche [[02 - RESOURCES/Notes/CMDB\|CMDB]]-Items betroffen?

---

## RFC-Lebenszyklus

```
1. RFC erstellen und einreichen
   ↓
2. Initial Assessment (Ist es vollständig?)
   ↓
3. CAB-Review (Change Advisory Board)
   ↓
4. Genehmigung / Ablehnung / Zurückstellung
   ↓
5. Planung und Scheduling
   ↓
6. Implementierung
   ↓
7. Post Implementation Review
   ↓
8. RFC schließen
```

>[!important] Genehmigungsinstanzen
>|Change-Typ|Genehmigung durch|Dauer|
>|---|---|---|
|**Standard Change**|Pre-authorized|Sofort|
>|**Normal Change**|CAB-Meeting|Tage bis Wochen|
>|**Emergency Change**|Emergency CAB|Stunden|

---

## RFC-Bewertung (7 Rs)

>[!tip] Die 7 Rs
>1. **Raised** - Wer beantragt?
>2. **Reason** - Warum nötig?
>3. **Return** - Welcher Nutzen?
>4. **Risks** - Welche Risiken?
>5. **Resources** - Was wird gebraucht?
>6. **Responsible** - Wer ist verantwortlich?
>7. **Relationship** - Abhängigkeiten?

>[!note] Impact-Analyse
>Die [[02 - RESOURCES/Notes/CMDB\|CMDB]] hilft zu ermitteln:
>- Welche Services betroffen sind
>- Welche [[02 - RESOURCES/Notes/Kunden\|Kunden]] beeinträchtigt werden
>- Welche anderen Changes gleichzeitig laufen

---

## Standard vs. Normal RFC

>[!success] Standard Change
>- Vordefinierter, wiederholbarer Prozess
>- Geringes Risiko
>- Pre-authorized (vorab genehmigt)
>- Beispiel: Monatliche Windows-Updates, Passwort-Reset

>[!info] Normal Change
>- Individuelle Bewertung nötig
>- CAB-Genehmigung erforderlich
>- Höheres Risiko oder Impact
>- Beispiel: [[02 - RESOURCES/Notes/Server\|Server]]-Migration, neue Software

>[!caution] Emergency Change
>- Dringend und kritisch
>- Verkürzte Genehmigung (E-CAB)
>- Beispiel: Sicherheitspatch für kritische Lücke

>[!important] Dokumentation
>RFCs werden im [[02 - RESOURCES/Notes/Ticketsystem\|Ticketsystem]] oder speziellen Change-Management-Tools dokumentiert und nachverfolgt.

---
{"dg-publish":true,"permalink":"/02-resources/notes/raci-matrix/","tags":["projektmanagement/methodik","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:01:51.540+02:00"}
---


>Die RACI-Matrix ist ein Werkzeug zur Klärung von Rollen und Verantwortlichkeiten in Projekten und Prozessen.

>>RACI steht für Responsible, Accountable, Consulted, Informed - vier Arten der Beteiligung an Aufgaben.

>[!example] Die 4 RACI-Rollen
>- **R - Responsible** (Durchführend) - Führt die Arbeit aus
>- **A - Accountable** (Verantwortlich) - Trägt die Gesamtverantwortung, entscheidet
>- **C - Consulted** (Konsultiert) - Wird um Input/Expertise gefragt
>- **I - Informed** (Informiert) - Wird über Fortschritt/Ergebnisse informiert

---

## Grundregeln

>[!important] RACI-Prinzipien
>1. **Genau ein A** pro Aufgabe - Nur eine Person verantwortlich (Accountable)
>2. **Mindestens ein R** pro Aufgabe - Jemand muss es machen
>3. **R und A können gleich** sein - Eine Person macht und verantwortet
>4. **Nicht zu viele C** - Zu viele Beteiligte verlangsamen
>5. **I nur bei Bedarf** - Nicht jeder muss alles wissen

---

## Beispiel RACI-Matrix

|Aufgabe|IT-Manager|[[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]]|[[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]]|[[02 - RESOURCES/Notes/Kunden\|Kunden]]|
|---|---|---|---|---|
|**Ticket annehmen**|I|I|R/A|I|
|**Erstdiagnose**|I|C|R/A|I|
|**Eskalation an L2**|I|A|R|I|
|**Technische Lösung**|I|R/A|C|I|
|**[[02 - RESOURCES/Notes/RFC\|RFC]] erstellen**|A|R|I|I|
|**[[02 - RESOURCES/Notes/Change Management\|Change Management]]-Genehmigung**|A|C|I|I|
|**Kundenkommunikation**|I|C|R/A|I|
|**Ticket schließen**|I|I|R/A|I|

---

## RACI im IT-Service-Management

>[!tip] Anwendungsbereiche
>- **[[02 - RESOURCES/Notes/Incident Management\|Incident Management]]**: Wer löst welche Art von [[Incident\|Incident]]s?
>- **[[02 - RESOURCES/Notes/Change Management\|Change Management]]**: Wer genehmigt [[02 - RESOURCES/Notes/RFC\|RFC]]s?
>- **[[02 - RESOURCES/Notes/Problem Management\|Problem Management]]**: Wer führt Root Cause Analysis durch?
>- **[[02 - RESOURCES/Notes/Release Management\|Release Management]]**: Wer testet, genehmigt, deployed?
>- **Projekte**: Wer liefert was im Projekt?

>[!example] [[02 - RESOURCES/Notes/Change Management\|Change Management]]-Prozess
>|Schritt|Change Manager|CAB|Technical Team|[[02 - RESOURCES/Notes/Kunden\|Kunden]]|
>|---|---|---|---|---|
|**[[02 - RESOURCES/Notes/RFC\|RFC]] erstellen**|C|I|R/A|I|
>|**CAB-Review**|R|A|C|I|
>|**Genehmigung**|I|A|I|I|
>|**Implementierung**|C|I|R/A|I|
>|**Post-Implementation Review**|A|C|R|I|

---

## Vorteile

>[!success] Nutzen der RACI-Matrix
>- **Klarheit**: Jeder weiß, wer was macht
>- **Vermeidung von Doppelarbeit**: Keine Überschneidungen
>- **Accountability**: Klare Verantwortlichkeiten
>- **Kommunikation**: Wer muss informiert werden?
>- **Effizienz**: Schnellere Entscheidungen

---

## Häufige Fehler

>[!caution] Typische Probleme
>- **Mehrere A's** - Führt zu Unklarheit ("Wer ist jetzt verantwortlich?")
>- **Kein A** - Niemand fühlt sich verantwortlich
>- **Zu viele C's** - Verzögert Entscheidungen
>- **Zu viele I's** - Informationsflut
>- **R ohne Kompetenz** - Person kann Aufgabe nicht erfüllen

>[!tip] Best Practices
>1. RACI-Matrix im Team gemeinsam erstellen
>2. Regelmäßig reviewen und aktualisieren
>3. Mit Beteiligten abstimmen
>4. Nicht zu granular - nur wichtige Aufgaben
>5. In Prozessdokumentation integrieren

---

## Varianten

>[!info] Erweiterte Modelle
>- **RASCI** - +S für Supportive (unterstützt bei Ausführung)
>- **RACI-VS** - +V für Verifier (prüft), +S für Signer (unterschreibt)
>- **DACI** - Driver, Approver, Contributor, Informed (Amazon)

>[!note] [[02 - RESOURCES/Notes/ITIL\|ITIL]]-Kontext
>RACI-Matrizen werden in [[02 - RESOURCES/Notes/ITIL\|ITIL]] für alle Prozesse empfohlen, um klare Verantwortlichkeiten zu schaffen.

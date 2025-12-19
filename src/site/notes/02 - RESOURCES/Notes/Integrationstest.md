---
{"dg-publish":true,"permalink":"/02-resources/notes/integrationstest/","tags":["testing/integration","qualitaetssicherung/schnittstellen"],"noteIcon":"","updated":"2025-12-09T16:21:18.000+01:00"}
---

>[[02 - RESOURCES/Notes/Integrationstest\|Integrationstest]] prüft die Schnittstellen und Zusammenarbeit zwischen Software-Komponenten.

>>Er verifiziert, dass Module korrekt miteinander kommunizieren und Daten austauschen.

>[!important] 
>**Integrations-Strategien:**
>- **Big Bang**: Alle Module auf einmal integrieren
>- **Top-Down**: Von oberster Ebene nach unten
>- **Bottom-Up**: Von unterster Ebene nach oben
>- **Sandwich**: Kombination aus Top-Down und Bottom-Up

>[!example] 
>**Integration Test Beispiele:**
>- Datenbank-Zugriff testen
>- [[02 - RESOURCES/Notes/API\|API]]-Schnittstellen verifizieren
>- File I/O-Operationen prüfen
>- Network-Kommunikation testen

>[!note] 
>Verwendet oft Test-Doubles (Mocks, Stubs) für externe Abhängigkeiten.
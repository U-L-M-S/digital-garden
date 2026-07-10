---
{"dg-publish":true,"permalink":"/wiki/integrationstest/","tags":["testing/integration","qualitätssicherung/schnittstellen"],"noteIcon":"","updated":"2026-07-02T01:13:38.000+02:00","dg-note-properties":{"tags":["testing/integration","qualitätssicherung/schnittstellen"],"aliases":["Integration Testing","Interface-Test","Schnittstellentest"],"links":null,"created_date":"2025-09-16"}}
---

>[[wiki/Integrationstest\|Integrationstest]] prüft die Schnittstellen und Zusammenarbeit zwischen Software-Komponenten.

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
>- [[wiki/API\|API]]-Schnittstellen verifizieren
>- File I/O-Operationen prüfen
>- Network-Kommunikation testen

>[!note] 
>Verwendet oft Test-Doubles (Mocks, Stubs) für externe Abhängigkeiten.
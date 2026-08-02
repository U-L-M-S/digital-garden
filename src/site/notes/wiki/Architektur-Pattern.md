---
{"dg-publish":true,"permalink":"/wiki/architektur-pattern/","tags":["informatik/software","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.840+02:00","dg-note-properties":{"tags":["informatik/software","ausbildung/pruefung"],"aliases":["Architectural Patterns","System-Patterns","Software-Architektur-Muster"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Architektur-Pattern\|Architektur-Pattern]] sind Lösungsschablonen für die Gesamtstruktur von Software-Systemen.

>>Sie definieren grundlegende Organisations-Prinzipien und Komponenten-Beziehungen auf System-Ebene.

>[!important] 
>**Wichtige Architektur-Pattern:**
>- **[[wiki/MVC\|MVC]]** (Model-View-Controller): Trennung von Daten, Darstellung, Steuerung
>- **Layered Architecture**: Schichtenmodell (Presentation, Business, Data)
>- **Microservices**: Kleine, unabhängige Services
>- **Event-Driven**: Lose gekoppelte, nachrichtenbasierte Architektur

>[!example] 
>**MVC-Beispiel:**
>```
>Model (Daten) ↔ Controller (Logik) → View (UI)
>     ↑                                    ↓
>     ← ← ← ← User Input ← ← ← ← ← ← ← ←
>```

>[!success] 
>Ermöglichen skalierbare, wartbare und testbare Software-Systeme.
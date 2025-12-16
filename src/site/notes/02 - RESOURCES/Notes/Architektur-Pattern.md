---
{"dg-publish":true,"permalink":"/02-resources/notes/architektur-pattern/","tags":["softwarearchitektur/patterns","AP2025/neu"],"noteIcon":"","updated":"2025-10-29T12:59:02.584+01:00"}
---


>[[02 - RESOURCES/Notes/Architektur-Pattern\|Architektur-Pattern]] sind Lösungsschablonen für die Gesamtstruktur von Software-Systemen.

>>Sie definieren grundlegende Organisations-Prinzipien und Komponenten-Beziehungen auf System-Ebene.

>[!important] 
>**Wichtige Architektur-Pattern:**
>- **[[02 - RESOURCES/Notes/MVC\|MVC]]** (Model-View-Controller): Trennung von Daten, Darstellung, Steuerung
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
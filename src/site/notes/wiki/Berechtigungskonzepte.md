---
{"dg-publish":true,"permalink":"/wiki/berechtigungskonzepte/","tags":["informatik/sicherheit"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/sicherheit"],"aliases":["Access Control","Zugriffskonzepte","Permission Management"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Berechtigungskonzepte\|Berechtigungskonzepte]] regeln systematisch, wer auf welche Ressourcen zugreifen darf.

>>Sie implementieren das Prinzip der minimalen Berechtigung und Rollentrennung.

>[!important] 
>**Zugriffs-Ebenen:**
>- **Zugang**: Physischer Gebäude/Raum-Zugang
>- **Zutritt**: System-Anmeldung ([[wiki/Authentifizierung\|Authentifizierung]])
>- **Zugriff**: Ressourcen-Berechtigung ([[wiki/Autorisierung\|Autorisierung]])

>[!example] 
>**Berechtigungs-Modelle:**
>- **RBAC** (Role-Based): Rollen-basierte Rechte
>- **ABAC** (Attribute-Based): Attribut-gesteuert
>- **DAC** (Discretionary): Besitzer-kontrolliert
>- **MAC** (Mandatory): System-kontrolliert

>[!success] 
>**Prinzipien:**
>- Least Privilege (minimale Rechte)
>- Need-to-Know (nur nötige Information)
>- Separation of Duties (Aufgabentrennung)
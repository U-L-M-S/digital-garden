---
{"dg-publish":true,"permalink":"/wiki/autorisierung/","tags":["informatik/sicherheit/zugriff","berechtigungen/kontrolle"],"noteIcon":"","updated":"2026-07-02T15:37:49.000+02:00","dg-note-properties":{"tags":["informatik/sicherheit/zugriff","berechtigungen/kontrolle"],"aliases":["Authorization","Berechtigung","Zugriffssteuerung"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Autorisierung\|Autorisierung]] bestimmt, welche Aktionen ein authentifizierter Benutzer ausführen darf.

>>Sie kontrolliert "Was darfst du tun?" nach erfolgter [[wiki/Authentifizierung\|Authentifizierung]].

>[!important] 
>**Autorisierungs-Modelle:**
>- **RBAC** (Role-Based): Berechtigungen über Rollen
>- **ABAC** (Attribute-Based): Attribut-basierte Entscheidungen
>- **DAC** (Discretionary): Besitzer kontrolliert Zugriff
>- **MAC** (Mandatory): System kontrolliert Zugriff

>[!example] 
>**Autorisierungs-Systeme:**
>- Windows ACLs (Access Control Lists)
>- Linux-Dateiberechtigungen (chmod)
>- Datenbank-Permissions (GRANT/REVOKE)
>- Web-Framework-Permissions

>[!success] 
>**Prinzip der minimalen Berechtigung:** Nur notwendige Zugriffsrechte gewähren.
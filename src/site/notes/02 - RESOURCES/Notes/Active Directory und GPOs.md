---
{"dg-publish":true,"permalink":"/02-resources/notes/active-directory-und-gp-os/","tags":["informatik/netzwerk","informatik/server/windows","GFN/LF10/FISI"],"noteIcon":"","updated":"2025-09-10T17:01:52.257+02:00"}
---

# Active Directory und GPOs

> **Active Directory** ist ein zentraler Verzeichnisdienst von Microsoft Windows zur Verwaltung von Benutzern, Computern und Ressourcen in einer Netzwerkumgebung.

> > Die Nachbildung der Organisationsstruktur erfolgt über [[Domänen\|Domänen]], die organisatorisch abgetrennte Bereiche mit gleichen Sicherheitseinstellungen darstellen.

> [!important] Domain Controller Der [[Domain Controller\|Domain Controller]] ist die höchste Autorität einer [[Domäne\|Domäne]] und verantwortlich für:
> 
> - Authentisierung/Authentifizierung
> - Autorisierung
> - Änderungen innerhalb der Domäne (Hinzufügen, Löschen, Editieren)

## Organizational Units (OUs)

> **[[Organizational Units\|Organizational Units]]** sind Container-Objekte, die andere Objekte enthalten und reale Organisationsstrukturen abbilden.

> > [[OU\|OU]]s können Hierarchien, Abteilungen und Standorte wiederspiegeln. Berechtigungen werden an untergeordnete Objekte weitergegeben.

> [!example] Beispiel Benutzer aus der OU `Hamburg/Benutzer/Verwaltung` erhalten Zugriff auf Freigaben mit Hamburger Schülerdaten.

---

# Group Policy Objects (GPOs)

> **[[Group Policy Objects\|Group Policy Objects]]** sind Sammlungen von Einstellungen zur zentralen Konfigurationsverwaltung in Microsoft-Betriebssystemen.

> > [[GPO\|GPO]]s bestehen aus Gruppenrichtlinien, die definieren wie Systeme aussehen und sich gegenüber Benutzergruppen verhalten.

> [!info] Verwaltung GPOs werden über den [[Gruppenrichtlinieneditor\|Gruppenrichtlinieneditor]] (`gpedit.msc`) verwaltet.

> [!summary] Domänen GPOs
> 
> - Zentrale Verwaltung der Richtlinien
> - Vergabe nach Bedingungen (Standort, Gruppenzugehörigkeit)
> - Computer holen sich automatisch "ihre" Konfiguration ab

> [!note] Funktionsweise [[GPO\|GPO]]s sind Containerobjekte, die Richtlinien für Computer- und Benutzerkonfigurationen enthalten und automatisch im Netzwerk verteilt werden.

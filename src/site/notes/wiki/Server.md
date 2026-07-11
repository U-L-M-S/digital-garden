---
{"dg-publish":true,"permalink":"/wiki/server/","tags":["informatik/hardware/server"],"noteIcon":"","updated":"2026-07-11T23:28:14.767+02:00","dg-note-properties":{"aliases":null,"created_date":"2025-02-09","links":null,"tags":["informatik/hardware/server"]}}
---

![image-79.png](/img/user/assets/IMG/image-79.png)

>- Ein Server ist ein Computer oder Programm, das Dienste (z. B. Dateien, Webseiten, APIs) für andere Geräte (Clients) bereitstellt.  
>- Arbeitet oft 24/7, um Anfragen zuverlässig zu beantworten.
>- Kann physisch (Hardware-Server) oder virtuell (z. B. VM, Container) sein.


# Grundstruktur eines Servers

## Hardware

- CPU: verarbeitet Anfragen.
   
- [[wiki/RAM\|RAM]]: speichert aktive Daten.
   
- Festplatte: speichert Daten dauerhaft.
   
- [[wiki/Netzwerkkarte\|Netzwerkkarte]]: verbindet Server mit anderen Geräten.


## [[wiki/Software\|Software]]

- Betriebssystem (Linux, Windows Server usw.)
   
- Server-Software (z. B. Apache, Nginx, Node.js, [[wiki/dotNET\|.NET]] Kestrel)
   
- Sicherheits- und Verwaltungsdienste


# Typische Aufgaben eines Servers

- Webseiten ausliefern (Webserver)

- Daten speichern/verwalten (Datenbankserver)

- [[wiki/Authentifizierung\|Authentifizierung]] und Autorisierung

- [[wiki/API\|API]]s bereitstellen

- Dateien hosten


# Wichtig für Anwendungsentwickler

- Verstehen, wie die eigene Anwendung auf dem Server läuft.

- [[wiki/PORT\|Ports]] kennen (z. B. [[wiki/HTTP\|HTTP]] → 80, [[wiki/HTTPS\|HTTPS]] → 443).

- Deployment-Prozesse: CI/CD, [[wiki/Docker\|Docker]], manuelles Hochladen.

- Logging und Monitoring einrichten.

- Fehlerbehandlung: Logs lesen, Server-Status prüfen.

- Sicherheit: Updates, [[wiki/Firewall\|Firewall]], Zugriffskontrollen.


# Wichtige Begriffe

- Client-Server-Modell: Client sendet Anfrage → Server antwortet.

- Load Balancer: verteilt Last auf mehrere Server.

- Reverse Proxy: vermittelt Anfragen, schützt und optimiert Zugriffe.

- [[wiki/Virtualisierung\|Virtualisierung]]: mehrere Server auf einem physischen System.

- Containerisierung: z. B. [[wiki/Docker\|Docker]], um Apps isoliert zu betreiben.
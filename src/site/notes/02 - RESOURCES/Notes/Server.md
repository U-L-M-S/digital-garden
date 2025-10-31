---
{"dg-publish":true,"permalink":"/02-resources/notes/server/","tags":["informatik/hardware/server","AI-generated"],"noteIcon":"","updated":"2025-10-29T12:59:10.076+01:00"}
---

![image-79.png](/img/user/02%20-%20RESOURCES/Files/image-79.png)

>- Ein Server ist ein Computer oder Programm, das Dienste (z. B. Dateien, Webseiten, APIs) für andere Geräte (Clients) bereitstellt.  
>- Arbeitet oft 24/7, um Anfragen zuverlässig zu beantworten.
>- Kann physisch (Hardware-Server) oder virtuell (z. B. VM, Container) sein.


# Grundstruktur eines Servers

## Hardware

- CPU: verarbeitet Anfragen.
   
- [[02 - RESOURCES/Notes/RAM\|RAM]]: speichert aktive Daten.
   
- Festplatte: speichert Daten dauerhaft.
   
- [[02 - RESOURCES/Notes/Netzwerkkarte\|Netzwerkkarte]]: verbindet Server mit anderen Geräten.


## [[02 - RESOURCES/Notes/Software\|Software]]

- Betriebssystem (Linux, Windows Server usw.)
   
- Server-Software (z. B. Apache, Nginx, Node.js, [[02 - RESOURCES/Notes/dotNET\|.NET]] Kestrel)
   
- Sicherheits- und Verwaltungsdienste


# Typische Aufgaben eines Servers

- Webseiten ausliefern (Webserver)

- Daten speichern/verwalten (Datenbankserver)

- [[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]] und Autorisierung

- [[02 - RESOURCES/Notes/API\|API]]s bereitstellen

- Dateien hosten


# Wichtig für Anwendungsentwickler

- Verstehen, wie die eigene Anwendung auf dem Server läuft.

- [[02 - RESOURCES/Notes/PORT\|Ports]] kennen (z. B. [[02 - RESOURCES/Notes/HTTP\|HTTP]] → 80, [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] → 443).

- Deployment-Przesse: CI/CD, [[02 - RESOURCES/Notes/Docker\|Docker]], manuelles Hochladen.

- Logging und Monitoring einrichten.

- Fehlerbehandlung: Logs lesen, Server-Status prüfen.

- Sicherheit: Updates, [[02 - RESOURCES/Notes/Firewall\|Firewall]], Zugriffskontrollen.


# Wichtige Begriffe

- Client-Server-Modell: Client sendet Anfrage → Server antwortet.

- Load Balancer: verteilt Last auf mehrere Server.

- Reverse Proxy: vermittelt Anfragen, schützt und optimiert Zugriffe.

- [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]: mehrere Server auf einem physischen System.

- Containerisierung: z. B. [[02 - RESOURCES/Notes/Docker\|Docker]], um Apps isoliert zu betreiben.
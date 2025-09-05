---
{"dg-publish":true,"permalink":"/02-resources/notes/port/","tags":["netzwerk/ip/ipv4"],"noteIcon":"","updated":"2025-09-05T10:12:31.254+02:00"}
---

>Ports im [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] sind virtuelle Schnittstellen, die es ermöglichen, verschiedene Arten von Datenverkehr über ein Netzwerkprotokoll, wie [[02 - RESOURCES/Notes/TCP\|TCP]] oder [[02 - RESOURCES/Notes/UDP\|UDP]], zu unterscheiden. 
>>Jeder Port hat eine eindeutige Nummer, die zwischen **0 und 65535 (2^32)** liegt. 

# Hauptpunkte zu Ports:

1. **Kommunikationskanäle**: Ports fungieren als Kommunikationskanäle für verschiedene Anwendungen, die auf demselben Computer oder Server laufen. Zum Beispiel kann ein Webserver ([[02 - RESOURCES/Notes/HTTP\|HTTP]]) auf Port 80 laufen, während ein [[02 - RESOURCES/Notes/FTP\|FTP]]-Server auf Port 21 läuft.

2. **Unterscheidung von Diensten**: Durch die Verwendung verschiedener Ports kann ein Computer mehrere Netzwerkdienste gleichzeitig betreiben, ohne dass es zu Konflikten kommt. 

3. **Standardports**: Es gibt viele standardisierte Ports, die allgemein anerkannt sind, wie:
   - **80**: [[02 - RESOURCES/Notes/HTTP\|HTTP]] (Webseiten)
   - **443**: [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] (sichere Webseiten)
   - **22**: [[02 - RESOURCES/Notes/ssh\|SSH]] (sichere Fernsteuerung)
   - **25**: [[02 - RESOURCES/Notes/SMTP\|SMTP]] (E-Mail-Versand)

4. **Firewalls und Sicherheit**: Ports spielen eine wichtige Rolle in der Netzwerksicherheit. Firewalls verwenden Portfilterung, um den Datenverkehr basierend auf bestimmten Ports zu erlauben oder zu blockieren.

# Bsp
Wenn du im Webbrowser eine URL eingibst, sendet dein Computer eine Anfrage an den Server auf Port 80 oder 443. Der Server empfängt die Anfrage über diesen Port und sendet die angeforderten Daten zurück.

>[!note] Insgesamt ermöglichen Ports eine organisierte und effiziente Kommunikation zwischen verschiedenen Anwendungen über Netzwerke.


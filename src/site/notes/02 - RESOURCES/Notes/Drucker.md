---
{"dg-publish":true,"permalink":"/02-resources/notes/drucker/","tags":["informatik/hardware","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:59:10.000+02:00"}
---


>Ein Drucker ist ein Peripheriegerät zur Ausgabe digitaler Dokumente und Bilder auf Papier oder andere physische Medien.

>>Drucker sind häufige Anfragethemen im [[02 - RESOURCES/Notes/Helpdesk\|Helpdesk]] und [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]], da sie zu den störanfälligsten IT-Komponenten gehören.

>[!example] Druckertypen
>- **Laserdrucker** - Schnell, für große Mengen, Toner
>- **Tintenstrahldrucker** - Farbdruck, Fotos, Patronen
>- **Multifunktionsgeräte (MFP)** - Drucken, Scannen, Kopieren, Faxen
>- **Thermodrucker** - Kassenbons, Etiketten
>- **3D-Drucker** - Additive Fertigung

---

## Häufige Probleme

>[!caution] Typische Support-Anfragen
>- **Papierstau** - Häufigste Störung
>- **Treiber-Probleme** - Drucker nicht erkannt
>- **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Drucker offline** - [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] geändert, [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]-Problem
>- **Druckqualität schlecht** - Toner/Tinte leer, Düsen verstopft
>- **Druckauftrag hängt** - Druckerwarteschlange löschen
>- **Fehlermeldungen** - Wartung erforderlich, Toner leer

>[!tip] Erste Hilfe
>1. Drucker aus- und einschalten
>2. Druckerwarteschlange leeren
>3. Treiber neu installieren
>4. [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Verbindung prüfen (Ping)
>5. Papier und Toner/Tinte prüfen

---

## Netzwerk-Drucker

>[!info] Konfiguration
>- **[[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]]**: Statisch oder via [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]
>- **Treiber-Installation**: Auf Client-[[02 - RESOURCES/Notes/PC\|PC]]s
>- **Freigabe**: Über Print-[[02 - RESOURCES/Notes/Server\|Server]] oder direkt im [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
>- **Druckserver**: Zentrales Management (Windows Print Server, CUPS)

>[!important] [[02 - RESOURCES/Notes/DHCP-Server\|DHCP-Server]]-Reservierung
>Netzwerk-Drucker sollten eine feste [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]] haben (DHCP-Reservierung), damit sie immer unter derselben Adresse erreichbar sind.

---

## Management und Wartung

>[!example] Regelmäßige Aufgaben
>- Toner/Tinte-Bestand überwachen
>- Firmware-Updates einspielen
>- Wartungszyklen einhalten (Reinigung, Walzen)
>- Druckerzähler auslesen (für Abrechnungen)
>- Alte Druckaufträge löschen

>[!tip] Print Management
>Zentrale Tools für Druckermanagement:
>- Windows Print Management
>- CUPS (Linux)
>- PaperCut (Kostenkontrolle)
>- Hersteller-Software (HP Web Jetadmin)

---

## Support-Eskalation

>[!note] Wann eskalieren?
>- Hardware-Defekt (an Hersteller/Service-Techniker)
>- [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Probleme (an [[02 - RESOURCES/Notes/Second-Level-Support\|Second-Level-Support]])
>- Komplexe Treiber-Issues
>- Austausch von Verschleißteilen

>[!success] [[02 - RESOURCES/Notes/ITIL\|ITIL]]-Kontext
>Drucker sind Configuration Items ([[02 - RESOURCES/Notes/CMDB\|CMDB]]) und Druckprobleme werden über [[02 - RESOURCES/Notes/Incident Management\|Incident Management]] behandelt.

>[!important] Lizenzen
>Bei Netzwerk-Druckern auf Lizenzen achten - manche Drucker begrenzen gleichzeitige Verbindungen oder Druckvolumen.

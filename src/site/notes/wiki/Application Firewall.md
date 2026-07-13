---
{"dg-publish":true,"permalink":"/wiki/application-firewall/","tags":["filter/anwendung","firewall/typ","informatik/netzwerk/firewall","informatik/sicherheit/it-sicherheit"],"noteIcon":"","updated":"2026-07-11T00:30:01.000+02:00","dg-note-properties":{"created":"2025-08-27","path":"Notes","tags":["filter/anwendung","firewall/typ","informatik/netzwerk/firewall","informatik/sicherheit/it-sicherheit"]}}
---


**Application Firewall** - [[wiki/Firewall\|Firewall]], die Inhalte auf Anwendungsebene analysiert.
Tiefste Filterung möglich - erkennt Angriffe in Web-Anfragen, E-Mails, etc. aber rechenaufwendig.

Auch **Application-Level-Gateway** genannt: der „Mittelsmann" auf OSI-Layer 7 — es gibt ==keine direkte Verbindung== zwischen den Hosts, der [[wiki/Proxy\|Proxy]] terminiert beide Seiten.

- **Application-Level-Proxy:** ein Proxy **pro Protokoll** (HTTP, FTP, TELNET…). Entscheidet nach Header **und Payload** (HTTP: URL/Inhalt prüfen; FTP: z.B. `PUT` verbieten).
- **Circuit-Level-Proxy:** kennt das Protokoll nicht im Detail, filtert ähnlich wie ein [[wiki/Paketfilter\|Paketfilter]] (IPs, Ports, Flags) → flexibler, etwas weniger sicher.
- ⚖️ Trade-off: **hohe Sicherheit** ↔ höherer Ressourcen-/Performance-Bedarf.

>[!tip] Genau das hilft gegen das Port-80-Problem des [[wiki/Paketfilter\|Paketfilter]]s: ein Angriff über den **erlaubten** Port 80 wird erst erkannt, wenn jemand den ==HTTP-Inhalt== anschaut.
---
{"dg-publish":true,"permalink":"/wiki/firewall/","tags":["informatik/netzwerk/filter","informatik/sicherheit/it-sicherheit","informatik/sicherheit/schutz"],"noteIcon":"","updated":"2026-07-11T00:30:06.660+02:00","dg-note-properties":{"created":"2025-08-27","path":"Notes","tags":["informatik/netzwerk/filter","informatik/sicherheit/it-sicherheit","informatik/sicherheit/schutz"]}}
---


**Firewall** - "Brandschutzmauer", die unerwünschten Netzwerk-Verkehr blockiert.
Setzt [[wiki/ACL\|ACL]]s um, verschiedene Typen: [[wiki/Paketfilter\|Paketfilter]], [[wiki/Stateful Packet Inspection\|Stateful Packet Inspection]], [[wiki/Application Firewall\|Application Firewall]].

| | stateless ([[wiki/Paketfilter\|Paketfilter]]) | stateful ([[wiki/Stateful Packet Inspection\|Stateful Packet Inspection]]) |
| :--- | :--- | :--- |
| filtert nach | IP, Port, Protokoll | IP, Port + ==Status der Verbindung== |
| Antwortpakete | Regel muss **manuell** erlaubt werden | werden **automatisch** als zugehörig erkannt |
| Sicherheit | gröber (offene Antwort-Ports) | feiner, sicherer |

Grundsätze beim Firewall-Bau:
- **Zuerst die Security Policy** — erst Regeln festlegen, dann Technik.
- **KISS** („Keep it simple & stupid") — Komplexität ist der Feind der Sicherheit.
- **Kein [[Single Point of Failure\|Single Point of Failure]]** — fällt ein Teil aus, darf nicht alles offen sein.
- **Mehrschichtige Verteidigung** — [[wiki/Defense in Depth\|Defense in Depth]], wie eine Burg mit mehreren Mauern.
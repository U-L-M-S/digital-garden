---
{"dg-publish":true,"permalink":"/wiki/paketfilter/","tags":["informatik/netzwerk","informatik/sicherheit"],"noteIcon":"","updated":"2026-07-19T03:56:26.600+02:00","dg-note-properties":{"created":"2025-08-27","path":"Notes","tags":["informatik/netzwerk","informatik/sicherheit"]}}
---


**Paketfilter** - Einfache [[wiki/Firewall\|Firewall]] die nach [[wiki/IP-Adresse\|IP-Adresse]]n und [[wiki/Ports\|Ports]] filtert.
[[Stateless\|Stateless]] - kennt keinen Verbindungszustand, schnell aber weniger sicher als moderne Varianten.

Geprüft werden nur die **Header** (die Payload ==nie==), verglichen mit einer [[wiki/ACL\|ACL]]:
- **L3:** Quell-/Ziel-IP, Protokoll (TCP/UDP/ICMP…), ICMP-Type/Code
- **L4:** Portnummern, **TCP-Flags** (SYN, ACK, FIN, RST), Interface, Richtung

```
Regel │ Proto │ Quelle │ Q-Port │ Ziel        │ Z-Port │ Aktion
  1   │ TCP   │ Any    │ Any    │ 141.79.1.2  │  80    │ Allow
  2   │ UDP   │ Any    │ Any    │ 141.79.1.3  │  53    │ Allow
  4   │ Any   │ Any    │ Any    │ Any         │ Any    │ Drop   ← Default
```

Zwei mögliche Default-Strategien: „keine Regel passt ⇒ erlauben" oder „⇒ ==blockieren==" (besser!).

>[!warning] Das Port-80-Problem
>Ein eigener Web-Server braucht **Port 80 offen**. Der Paketfilter prüft nur Zieladresse + Zielport, nicht den **HTTP-Inhalt** — ein Angriff über die ==erlaubte== Verbindung (z.B. gegen eine Web-Server-Lücke) wird nicht erkannt. Gilt für stateless **und** stateful. Lösung: [[wiki/Application Firewall\|Application Firewall]] (prüft die Payload).
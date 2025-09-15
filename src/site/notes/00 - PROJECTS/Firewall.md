---
{"dg-publish":true,"permalink":"/00-projects/firewall/","tags":["informatik/netzwerk/firewall","informatik/hardware/information"],"noteIcon":"","updated":"2025-09-10T17:00:08.445+02:00"}
---

> Eine Firewall schützt ein [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] oder System, indem sie **Datenpakete** filtert und nur bestimmte Verbindungen zulässt oder blockiert.

---

# Arten von Firewalls

## **Packet Filter Firewall**

> Filtert nach **Quell-/Ziel-IP**, **Port** und **Protokoll**.  
> Arbeitet auf **OSI-Schicht 3 (Netzwerk)** und **4 (Transport)**.

## **Stateful Inspection Firewall**

> Erkennt den **Zustand von Verbindungen** (z.B. ob die Verbindung „erlaubt“ ist oder nicht).  
> Mehr Sicherheit als Packet Filter, da Verbindungsstatus geprüft wird.

## **Application Firewall (Layer 7)**

> Prüft auch den **Anwendungsdatenverkehr** (z.B. HTTP, FTP) und blockiert verdächtige Inhalte.  
> Arbeitet auf **OSI-Schicht 7 (Anwendungsschicht)**.

## **WAF (Web Application Firewall)**

> Spezielle Firewall für **Webanwendungen** (z.B. Schutz vor [[SQL-Injection\|SQL-Injection]], [[XSS\|XSS]]).  
> Wird oft vor Webservern eingesetzt.

> [!tip]  
> Für AP1 solltest du wissen:
> 
> - **Unterschied Packet Filter vs. Application Firewall**
> - **WAF = Spezialfall für Web-Apps**

---

| Art                          | OSI-Schicht   | Was prüft sie?                        | Besonderheit                       |
| ---------------------------- | ------------- | ------------------------------------- | ---------------------------------- |
| **Packet Filter Firewall**   | Schicht 3 & 4 | IP-Adressen, Ports, Protokolle        | Einfach, schnell, Grundschutz      |
| **Stateful Inspection**      | Schicht 3 & 4 | Verbindungsstatus + Packet Filter     | Prüft auch Session-Status          |
| **Application Firewall**     | Schicht 7     | Inhalt der Anwendung (z.B. HTTP, FTP) | Filtert auch „Inhalt“ von Paketen  |
| **WAF (Web Application FW)** | Schicht 7     | Web-Traffic (z.B. Formulare, Cookies) | Schutz vor Webangriffen (z.B. XSS) |

> [!tip]  
> **Packet Filter** = klassische Port/IP-Filterung  
> **Application Firewall** = schaut tief in die Datenpakete (Layer 7)  
> **WAF** = speziell für Webseiten

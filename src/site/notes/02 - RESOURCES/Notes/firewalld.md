---
{"dg-publish":true,"permalink":"/02-resources/notes/firewalld/","tags":["informatik/linux","informatik/netzwerk/firewall","linux/dienst"],"noteIcon":"","updated":"2025-11-07T11:35:48.000+01:00"}
---

> Moderne [[02 - RESOURCES/Notes/Firewall\|Firewall]]-Lösung für Linux

**firewalld** ist eine dynamische [[02 - RESOURCES/Notes/Firewall\|Firewall]]-Verwaltung für Linux-Systeme. Sie ist einfacher als iptables.

---

## Vorteile gegenüber iptables

- **Dynamische Konfiguration**: Keine Restart notwendig
- **Zonen-Konzept**: Einfachere Verwaltung
- **GUI verfügbar**: firewall-config
- **Integration mit NetworkManager**: Automatische Zonen-Zuordnung

## Zonen-Konzept

Eine **Zone** ist eine Sammlung von Regeln für ein [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Interface.

**Standard-Zonen** (vom niedrigsten zum höchsten Vertrauen):
- **drop**: Alles verwerfen, keine Antworten
- **block**: Alles ablehnen, mit ICMP-Fehlermeldung
- **public**: Öffentliche [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]e (z.B. Café, Flughafen)
- **external**: Externes [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] mit [[02 - RESOURCES/Notes/NAT\|NAT]]
- **dmz**: DMZ (demilitarisierte Zone)
- **work**: Arbeitsnetzwerk
- **home**: Heimnetzwerk
- **internal**: Internes vertrauenswürdiges [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
- **trusted**: Alle Verbindungen erlaubt

## Grundlegende Befehle

```bash
# Zone anzeigen
sudo firewall-cmd --get-default-zone

# Alle Zonen anzeigen
sudo firewall-cmd --get-active-zones

# Dienst erlauben (temporär)
sudo firewall-cmd --zone=public --add-service=http

# Dienst erlauben (permanent)
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --reload

# Port öffnen
sudo firewall-cmd --permanent --zone=public --add-port=8080/tcp
sudo firewall-cmd --reload

# Status prüfen
sudo firewall-cmd --list-all
```

## Rich Rules

Für komplexere Regeln:

```bash
# SSH nur von bestimmter IP erlauben
sudo firewall-cmd --permanent --zone=public --add-rich-rule='
  rule family="ipv4"
  source address="192.168.1.100/32"
  service name="ssh"
  accept'

# Traffic zu bestimmter IP blockieren
sudo firewall-cmd --permanent --zone=public --add-rich-rule='
  rule family="ipv4"
  destination address="10.0.0.50/32"
  reject'
```

## Dienste

firewalld kennt viele vordefinierte Dienste:

```bash
# Verfügbare Dienste anzeigen
sudo firewall-cmd --get-services

# Beliebte Dienste:
- http (Port 80)
- https (Port 443)
- ssh (Port 22)
- dns (Port 53)
- smtp (Port 25)
```

## Vergleich zu iptables

| Eigenschaft | iptables | firewalld |
|------------|----------|-----------|
| **Dynamisch** | Nein (Restart) | Ja (ohne Restart) |
| **Zonen** | Nein | Ja |
| **GUI** | Nein | Ja |
| **Komplexität** | Hoch | Mittel |

> [!tip] Empfehlung
> Für neue Linux-Installationen: **firewalld** verwenden. Für Legacy-Systeme: iptables beibehalten.

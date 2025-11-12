---
{"dg-publish":true,"permalink":"/02-resources/notes/next-generation-firewall/","tags":["informatik/netzwerk/firewall","firewall/generation-3"],"noteIcon":"","updated":"2025-11-07T11:31:55.000+01:00"}
---

> [[02 - RESOURCES/Notes/Firewall\|Firewall]] Generation 3 (ab 2010)

**Next Generation Firewall (NGFW)** prüft auch den **Anwendungsdatenverkehr** (z.B. HTTP, FTP) und blockiert verdächtige Inhalte. Arbeitet auf **OSI-Schicht 7 (Anwendungsschicht)**.

---

## Funktionen

```
NGFW Stack:

Layer 7: Application Firewall
         ├─► HTTP/HTTPS Inspection
         ├─► FTP Command Filtering
         └─► DNS Filtering

Layer 4-5: Stateful Inspection
         └─► Connection Tracking

Layer 3: Packet Filtering
         └─► IP/Port-based Rules

Additional:
         ├─► IDS/IPS (Suricata)
         ├─► Threat Intel (abuse.ch)
         ├─► Antivirus/Antimalware
         └─► VPN (WireGuard/OpenVPN)
```

## Hauptfunktionen

### 1. [[02 - RESOURCES/Notes/Deep Packet Inspection\|Deep Packet Inspection]] (DPI)

- Analysiert Paket-Inhalt (nicht nur Header)
- Erkennt Anwendungen unabhängig vom Port
- Beispiel: Facebook-Chat auch auf Port 443 erkennbar

### 2. Application Control

- Erlaubt/Blockiert spezifische Anwendungen
- Beispiel: Facebook erlauben, aber Facebook-Chat blockieren
- Granulare Kontrolle

### 3. [[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]]

- Erkennt Angriffsmuster
- Blockiert automatisch bekannte Exploits
- Integration von Regel-Sets (ET Open, [[02 - RESOURCES/Notes/abuse.ch\|abuse.ch]])

### 4. Threat Intelligence

- Nutzt externe Datenbanken
- Blockiert bekannte [[02 - RESOURCES/Notes/Malware\|Malware]]-IPs automatisch
- Tägliche Updates

### 5. SSL/TLS Inspection

- Entschlüsselt Traffic zur Analyse
- Prüft Inhalt
- Verschlüsselt wieder nach Prüfung

### 6. User/Identity Awareness

- Regeln basierend auf Benutzern (nicht nur IPs)
- Integration mit Active Directory
- "User X darf Facebook, User Y nicht"

## Vergleich zu älteren Generationen

| Feature | Gen 1 | Gen 2 | Gen 3 (NGFW) |
|---------|-------|-------|--------------|
| **IP/Port-Filter** | ✓ | ✓ | ✓ |
| **Stateful** | ✗ | ✓ | ✓ |
| **[[02 - RESOURCES/Notes/Deep Packet Inspection\|Deep Packet Inspection]]** | ✗ | ✗ | ✓ |
| **Application Awareness** | ✗ | ✗ | ✓ |
| **[[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]]** | ✗ | ✗ | ✓ |
| **Threat Intelligence** | ✗ | ✗ | ✓ |

## Vorteile

- **Höchste Sicherheit**: Erkennt moderne Angriffe
- **Application Control**: Filtert nach Anwendungen, nicht nur Ports
- **Integrierte Funktionen**: Alles in einem Gerät
- **Threat Intelligence**: Automatische Updates

## Nachteile

- **Teuer**: Hardware + Lizenzen
- **Hoher Ressourcen-Bedarf**: CPU, RAM
- **Komplexe Konfiguration**: Mehr zu lernen
- **Performance-Impact**: Latenz durch DPI

## Beispiele

- **Kommerziell:**
  - Palo Alto Networks (Marktführer)
  - Fortinet FortiGate
  - Cisco Firepower
  - Check Point

- **Open-Source:**
  - [[02 - RESOURCES/Notes/OpenSense\|OpenSense]] mit [[02 - RESOURCES/Notes/Suricata\|Suricata]]
  - pfSense mit Snort

## Einsatz

```
Internet
   │
   ▼
NGFW (Inline)
   │
   ├─► DPI: Analysiert Pakete
   ├─► IDS/IPS: Erkennt Angriffe
   ├─► Threat Intel: Prüft gegen Datenbanken
   └─► Application Control: Filtert Apps
   │
   ▼
Internes Netzwerk
```

## Wann einsetzen?

- Unternehmens-Umgebung
- Hohe Sicherheitsanforderungen
- Compliance (PCI-DSS, etc.)
- Budget vorhanden

> [!tip] Zukunft der Firewalls
> NGFWs sind heute Standard in Unternehmen. Sie ersetzen [[02 - RESOURCES/Notes/Stateful Inspection Firewall\|Stateful Inspection Firewall]] + separates [[02 - RESOURCES/Notes/IDS\|IDS]]/[[02 - RESOURCES/Notes/IPS\|IPS]].

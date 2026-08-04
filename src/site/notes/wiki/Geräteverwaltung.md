---
{"dg-publish":true,"permalink":"/wiki/geraeteverwaltung/","tags":["informatik/system","informatik/hardware"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/system","informatik/hardware"],"aliases":["Device Management","Hardware-Verwaltung"],"links":null,"created_date":"2024-12-19"}}
---


> [[wiki/Betriebssystem\|Betriebssystem]]-Komponente die Kommunikation zwischen Software und Hardware-Geräten koordiniert.

>> Stellt einheitliche Schnittstellen für verschiedene Hardware-Geräte bereit durch [[Treiber\|Treiber]].

>[!info] Hauptaufgaben
>**Geräte-Koordination:**
>- **Initiierung** - Geräte starten und konfigurieren
>- **Überwachung** - Status und Verfügbarkeit prüfen
>- **Terminierung** - Geräte sicher herunterfahren
>- **IRQ-Handling** - Interrupt-Requests verarbeiten

>[!info] Gerätetreiber
>**Treiber-Funktion:**
>- **Hardware-Seite** - direkte Gerät-Kommunikation
>- **Software-Seite** - einheitliche API für Programme
>- **Übersetzung** - zwischen OS-Befehlen und Hardware-Signalen

>[!example] Geräte-Kategorien
>```
>Eingabe:     Tastatur, Maus, Mikrofon
>Ausgabe:     Monitor, Drucker, Lautsprecher  
>Speicher:    Festplatte, SSD, USB-Stick
>Netzwerk:    WLAN-Karte, Ethernet-Port
>System:      Grafikkarte, Sound-Chip
>```

>[!important] Plug & Play
>Moderne Geräte werden automatisch erkannt und konfiguriert - [[wiki/Betriebssystem\|Betriebssystem]] lädt passenden [[Treiber\|Treiber]] automatisch.

>[!caution] Treiber-Probleme
>- **Veraltete Treiber** → schlechte Performance
>- **Falsche Treiber** → Gerät funktioniert nicht
>- **Fehlerhafte Treiber** → System-Absturz möglich

>[!tip] 
>Windows Geräte-Manager und Linux `lsusb`/`lspci` zeigen alle erkannten Geräte und Treiber-Status.

---
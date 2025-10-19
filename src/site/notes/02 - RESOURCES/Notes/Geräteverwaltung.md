---
{"dg-publish":true,"permalink":"/02-resources/notes/geraeteverwaltung/","tags":["software/betriebssystem","hardware/treiber"],"noteIcon":"","updated":"2025-09-16T23:41:26.753+02:00"}
---


> [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]-Komponente die Kommunikation zwischen Software und Hardware-Geräten koordiniert.

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
>Moderne Geräte werden automatisch erkannt und konfiguriert - [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]] lädt passenden [[Treiber\|Treiber]] automatisch.

>[!caution] Treiber-Probleme
>- **Veraltete Treiber** → schlechte Performance
>- **Falsche Treiber** → Gerät funktioniert nicht
>- **Fehlerhafte Treiber** → System-Absturz möglich

>[!tip] 
>Windows Geräte-Manager und Linux `lsusb`/`lspci` zeigen alle erkannten Geräte und Treiber-Status.

---
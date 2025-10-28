---
{"dg-publish":true,"permalink":"/02-resources/notes/pc/","tags":["informatik/hardware","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T13:01:46.000+02:00"}
---


>Ein PC (Personal Computer) ist ein Arbeitsplatzrechner für einzelne Nutzer, bestehend aus Hardware-Komponenten wie CPU, RAM, Festplatte und [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]].

>>PCs sind zentrale Configuration Items ([[02 - RESOURCES/Notes/CMDB\|CMDB]]) in der IT-Infrastruktur und häufiges Thema im [[02 - RESOURCES/Notes/Helpdesk\|Helpdesk]] und [[02 - RESOURCES/Notes/Incident Management\|Incident Management]].

>[!example] PC-Typen
>- **Desktop-PC** - Stationärer Rechner am Arbeitsplatz
>- **Laptop/Notebook** - Mobiler Rechner
>- **Thin Client** - Minimale Hardware, läuft über [[02 - RESOURCES/Notes/Server\|Server]]
>- **Workstation** - Hochleistungs-PC für spezielle Aufgaben
>- **All-in-One** - Monitor und PC in einem Gerät

---

## Hauptkomponenten

|Komponente|Funktion|Typische Probleme|
|---|---|---|
|**CPU**|Prozessor, Rechenleistung|Überhitzung, Defekt|
|**RAM**|Arbeitsspeicher|Zu wenig, Defekt|
|**Festplatte/SSD**|Datenspeicher|Voll, Defekt, langsam|
|**Motherboard**|Hauptplatine|BIOS-Probleme|
|**Netzteil**|Stromversorgung|Defekt, Unterdimensioniert|
|**Grafikkarte**|Bildausgabe|Treiber-Probleme, Defekt|

>[!important] [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]
>PCs benötigen ein [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]:
>- **Windows** (10, 11)
>- **macOS** (Apple)
>- **Linux** (Ubuntu, Fedora)

---

## Häufige Support-Anfragen

>[!caution] Typische PC-Probleme
>- **PC startet nicht** - Netzteil, RAM, Festplatte defekt
>- **PC ist langsam** - Zu viele Programme, Malware, volle Festplatte
>- **Blue Screen (BSOD)** - Hardware- oder Treiber-Probleme
>- **Software lässt sich nicht installieren** - Berechtigungen, Kompatibilität
>- **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]-Verbindung funktioniert nicht** - [[02 - RESOURCES/Notes/IP-Adresse\|IP-Adresse]], Treiber
>- **Passwort vergessen** - Zurücksetzen durch [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]]

>[!tip] Erste Hilfe
>1. PC neu starten (löst 50% der Probleme)
>2. Updates installieren (Windows Update)
>3. Virenscanner durchlaufen lassen
>4. Festplattenspeicher prüfen
>5. Task Manager öffnen (Ressourcenauslastung prüfen)

---

## PC-Management

>[!example] Verwaltungsaufgaben
>- **Asset Management**: PC-Inventar in [[02 - RESOURCES/Notes/CMDB\|CMDB]]
>- **Software-Deployment**: Zentrale Installation via [[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]] oder Tools
>- **Patch Management**: Windows Updates, Software-Updates
>- **Backup**: Regelmäßige Datensicherung
>- **Imaging**: Standard-Images für Neuinstallationen
>- **Remote Support**: TeamViewer, AnyDesk für [[02 - RESOURCES/Notes/First-Level-Support\|First-Level-Support]]

>[!info] Deployment-Methoden
>- **[[02 - RESOURCES/Notes/PXE-Boot\|PXE-Boot]]** - Installation über [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]
>- **MDT/SCCM** - Microsoft Deployment Toolkit
>- **Imaging** - Festplatten-Images klonen
>- **Manuelle Installation** - Bei Einzelgeräten

---

## Sicherheit

>[!important] PC-Sicherheit
>- **Antivirus/Antimalware** - Windows Defender, Kaspersky
>- **Firewall** - Windows Firewall, externe Firewalls
>- **Verschlüsselung** - BitLocker (Windows), FileVault (macOS)
>- **Berechtigungen** - Nutzer mit minimalen Rechten
>- **Updates** - Sicherheitspatches zeitnah einspielen

>[!caution] [[02 - RESOURCES/Notes/DSGVO\|DSGVO]]-Konformität
>PCs mit personenbezogenen Daten müssen [[02 - RESOURCES/Notes/DSGVO\|DSGVO]]-konform sein:
>- [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] nutzen
>- Zugriffsprotokolle
>- Sichere Löschung bei Entsorgung

---

## Lifecycle Management

>[!note] PC-Lebenszyklus
>```
>1. Beschaffung
>2. Setup und Konfiguration
>3. Deployment zum Nutzer
>4. Betrieb und Support ([[Incident Management]])
>5. Wartung und Updates
>6. Austausch/Upgrade (nach 3-5 Jahren)
>7. Sichere Entsorgung/Recycling
>```

>[!success] [[02 - RESOURCES/Notes/Configuration Management\|Configuration Management]]
>PCs sollten in der [[02 - RESOURCES/Notes/CMDB\|CMDB]] erfasst sein mit:
>- Hardware-Spezifikationen
>- Installierte Software und Lizenzen
>- Zugewiesener Nutzer
>- Standort
>- Wartungshistorie

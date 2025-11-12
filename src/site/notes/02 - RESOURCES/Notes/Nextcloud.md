---
{"dg-publish":true,"permalink":"/02-resources/notes/nextcloud/","tags":["informatik/server","GFN/LF10/FISI"],"noteIcon":"","updated":"2025-10-29T12:59:08.000+01:00"}
---

> **Nextcloud** ist eine freie Cloud-Software, die deine eigene "Dropbox" auf dem eigenen [[02 - RESOURCES/Notes/Server\|Server]] macht.

> > Einfach gesagt: Du hostest deine eigene Cloud – **ohne** dass Google, Microsoft oder Apple deine Daten sehen.

## Was ist Nextcloud?

> [!info] Grundlagen
> 
> - **Freie Software** (Open Source)
> - **Fork** von ownCloud (= abgespaltenes Projekt)
> - **Alternative** zu Office365, Google Drive, iCloud
> - **Datenschutzkonform** – deine Daten bleiben bei dir

### Technische Basis

**Frontend:**

- **Weboberfläche** in [[02 - RESOURCES/Notes/PHP\|PHP]]
- Läuft in jedem Browser
- Mobile Apps verfügbar

**Backend/[[02 - RESOURCES/Notes/Datenbank\|Datenbank]]:**

- [[SQLite\|SQLite]] (für kleine Setups)
- [[MariaDB\|MariaDB]], [[MySQL\|MySQL]] oder [[PostgreSQL\|PostgreSQL]] (für größere Installationen)

> [!example] Analogy Stell dir vor, du mietest nicht bei einem Hotel (Google Drive), sondern baust dein eigenes Haus (Nextcloud). Du hast die Schlüssel, du bestimmst die Regeln.

---

## Funktionsweise

> Das System funktioniert ganz klassisch **Client-Server**:

1. **Nextcloud-[[02 - RESOURCES/Notes/Server\|Server]]** – das Herzstück mit deinen Daten
2. **[[02 - RESOURCES/Notes/Datenbank\|Datenbank]]-[[02 - RESOURCES/Notes/Server\|Server]]** – speichert Metadaten und Einstellungen
3. **Client/Browser** – womit du auf alles zugreifst

> [!tip] Du kannst von **überall** auf deine Daten zugreifen – genau wie bei Google Drive, nur dass **du** der Chef bist.

---

## Hauptfunktionen

### 🔐 Sicherheit & Authentifizierung

- **[[SAML\|SAML]]** (Single Sign-On)
- **Zwei-Faktor-Authentifizierung** ([[2FA\|2FA]])
- **Benutzer-, Gruppen- und Rechteverwaltung**
- **Verschlüsselung** der Daten auf dem [[02 - RESOURCES/Notes/Server\|Server]]

### 📁 Dateien & Speicher

- **Dateien hochladen/downloaden** (wie Dropbox)
- **Integration von Windows-Netzfreigaben**
- **Externen Speicher** einbinden
- **Anonymes Hochladen** (für Gäste)

### 🛠️ Produktivität

- **Online-Office-Integration** (LibreOffice Online, OnlyOffice)
- **PDF- und Microsoft-Office-Betrachter**
- **[[Kalender\|Kalender]]** und **Kontakte**
- **Nextcloud-Talk** (Videokonferenz)

### 📊 Administration

- **Monitoring** der [[02 - RESOURCES/Notes/Server\|Server]]-Performance
- **Automatisierte Backups**
- **App-Store** für Erweiterungen

> [!important] Im Gegensatz zu Google Drive oder Dropbox **gehören dir deine Daten** – sie verlassen niemals deinen [[02 - RESOURCES/Notes/Server\|Server]].

---

## Nextcloud vs. kommerzielle Clouds

|Feature|Nextcloud|Google Drive|Dropbox|
|---|---|---|---|
|**Datenschutz**|✅ Vollständig|❌ Google liest mit|❌ Dropbox liest mit|
|**Kosten**|Nur [[02 - RESOURCES/Notes/Server\|Server]]-Kosten|Abo-Gebühren|Abo-Gebühren|
|**Speicherplatz**|Unbegrenzt*|Begrenzt|Begrenzt|
|**Anpassbarkeit**|✅ Vollständig|❌ Keine|❌ Keine|
|**Office-Integration**|✅ Ja|✅ Google Docs|❌ Nur Viewer|
|**Videokonferenz**|✅ Nextcloud Talk|✅ Google Meet|❌ Nein|

*abhängig von deiner [[02 - RESOURCES/Notes/Server\|Server]]-Festplatte

> [!warning] **Aber**: Du musst den [[02 - RESOURCES/Notes/Server\|Server]] selbst **warten**, **updaten** und **sichern**. Bei Google Drive macht das Google für dich.

---

## Anwendungsfälle

### 🏠 Privat

- **Familien-Cloud** für Fotos und Dokumente
- **Home-Office** mit eigenem Office-Paket
- **Backup-Lösung** für wichtige Dateien

### 🏢 Unternehmen

- **DSGVO-konforme** Cloud-Lösung
- **Collaboration** ohne externe Anbieter
- **Integration** in bestehende [[Windows\|Windows]]-Umgebung

### 🎓 Bildungseinrichtungen

- **Schüler/Studenten-Accounts** verwalten
- **Datenschutz** für Minderjährige
- **Kostenersparnis** gegenüber Microsoft/Google

> [!hint] Wenn du **Kontrolle über deine Daten** willst und **technisch versiert** bist → Nextcloud.  
> Wenn du **keine Lust auf Administration** hast → bleib bei Google Drive 😉.

---

## Installation & Anforderungen

### Minimum-Anforderungen

- **[[02 - RESOURCES/Notes/RAM\|RAM]]**: 512 MB (besser: 2+ GB)
- **Festplatte**: Je nach Datenvolumen
- **[[02 - RESOURCES/Notes/PHP\|PHP]]**: Version 8.0+
- **Webserver**: [[Apache\|Apache]] oder [[Nginx\|Nginx]]
- **[[02 - RESOURCES/Notes/Datenbank\|Datenbank]]**: [[MySQL\|MySQL]]/[[MariaDB\|MariaDB]]/[[PostgreSQL\|PostgreSQL]]

### Empfohlenes Setup

- **[[02 - RESOURCES/Notes/Server\|Server]]** mit [[Linux\|Linux]] (Ubuntu/Debian)
- **[[SSL\|SSL]]-Zertifikat** für [[02 - RESOURCES/Notes/HTTPS\|HTTPS]]
- **Backup-Strategie** für Daten
- **[[02 - RESOURCES/Notes/Firewall\|Firewall]]** und Sicherheits-Updates

> [!success] Sobald installiert, hast du deine **eigene Cloud** – **für immer**, **ohne monatliche Kosten**.

---

> [!quote] Bottom Line **Nextcloud = Deine eigene Cloud auf deinem eigenen [[02 - RESOURCES/Notes/Server\|Server]].**  
> **Mehr Kontrolle, mehr Datenschutz – aber auch mehr Verantwortung.**
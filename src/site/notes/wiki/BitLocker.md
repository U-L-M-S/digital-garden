---
{"dg-publish":true,"permalink":"/wiki/bit-locker/","tags":["informatik/sicherheit","informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/sicherheit","informatik/system"],"aliases":["Windows BitLocker","Festplattenverschlüsselung","Full Disk Encryption"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/BitLocker\|BitLocker]] ist Microsofts Lösung für vollständige Laufwerk-[[wiki/Verschlüsselung\|Verschlüsselung]] in Windows.

>>Es schützt Daten durch AES-Verschlüsselung und TPM-Integration gegen unbefugten Zugriff.

>[!important] 
>**BitLocker-Features:**
>- Vollverschlüsselung von System- und Datenlaufwerken
>- TPM-Integration für Hardware-Sicherheit
>- Pre-Boot-[[wiki/Authentifizierung\|Authentifizierung]]
>- Recovery Keys für Notfall-Zugriff

>[!example] 
>**BitLocker-Modi:**
>- **TPM-only**: Automatische Entsperrung
>- **TPM + PIN**: Zusätzlicher PIN erforderlich
>- **TPM + USB**: USB-Schlüssel nötig
>- **Password-only**: Nur Passwort (ohne TPM)

>[!success] 
>Standard-Schutz für Windows-Business-Umgebungen gegen Datendiebstahl.
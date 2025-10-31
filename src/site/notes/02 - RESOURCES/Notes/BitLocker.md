---
{"dg-publish":true,"permalink":"/02-resources/notes/bit-locker/","tags":["sicherheit/verschluesselung","windows/tools"],"noteIcon":"","updated":"2025-10-29T12:59:04.059+01:00"}
---


>[[02 - RESOURCES/Notes/BitLocker\|BitLocker]] ist Microsofts Lösung für vollständige Laufwerk-[[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] in Windows.

>>Es schützt Daten durch AES-Verschlüsselung und TPM-Integration gegen unbefugten Zugriff.

>[!important] 
>**BitLocker-Features:**
>- Vollverschlüsselung von System- und Datenlaufwerken
>- TPM-Integration für Hardware-Sicherheit
>- Pre-Boot-[[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]]
>- Recovery Keys für Notfall-Zugriff

>[!example] 
>**BitLocker-Modi:**
>- **TPM-only**: Automatische Entsperrung
>- **TPM + PIN**: Zusätzlicher PIN erforderlich
>- **TPM + USB**: USB-Schlüssel nötig
>- **Password-only**: Nur Passwort (ohne TPM)

>[!success] 
>Standard-Schutz für Windows-Business-Umgebungen gegen Datendiebstahl.
---
{"dg-publish":true,"permalink":"/wiki/verschluesselung/","tags":["informatik/sicherheit","informatik/sicherheit/kryptografie"],"noteIcon":"","updated":"2026-07-02T13:17:19.883+02:00","dg-note-properties":{"tags":["informatik/sicherheit","informatik/sicherheit/kryptografie"],"aliases":["encryption","verschlüsseln"],"links":null,"created_date":"2025-08-26"}}
---

>Verschlüsselung wandelt lesbare Daten (Klartext) in unlesbare Daten (Geheimtext) um. So kann niemand ohne Schlüssel die Daten lesen.
>>Verschlüsselung ist der wichtigste Schutz für Daten - selbst wenn jemand die Daten stiehlt, kann er sie nicht lesen.

## Was ist Verschlüsselung?

Verschlüsselung ist ein Prozess, der aus lesbaren Informationen einen unlesbaren Geheimcode macht.

**Das Prinzip:**
```
Klartext + Schlüssel → [Verschlüsselung] → Geheimtext
```

>[!example] Einfaches Beispiel
>- **Klartext:** "Hallo Welt"
>- **Schlüssel:** "MeinGeheimnis123"
>- **Geheimtext:** "Xp2mK9sL4r7Q"
>
>Ohne den Schlüssel kann niemand aus "Xp2mK9sL4r7Q" wieder "Hallo Welt" machen.

## Arten von Verschlüsselung

Es gibt zwei Hauptarten von Verschlüsselung:

### 1. [[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]
>Ein Schlüssel für Verschlüsselung und [[wiki/Entschlüsselung\|Entschlüsselung]]

**Eigenschaften:**
- Sehr schnell
- Beide Personen brauchen denselben Schlüssel
- Problem: Wie tauscht man den Schlüssel sicher aus?

**Beispiele:**
- [[wiki/AES\|AES]] - Moderner Standard
- DES - Alt und unsicher

### 2. [[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]
>Zwei Schlüssel - öffentlicher und privater Schlüssel

**Eigenschaften:**
- Langsamer als symmetrisch
- Jeder kann mit dem öffentlichen Schlüssel verschlüsseln
- Nur der private Schlüssel kann entschlüsseln
- Löst das Schlüsselaustausch-Problem

**Beispiele:**
- [[wiki/RSA\|RSA]] - Sehr bekannt
- ECC - Modern und effizienter

## Wo wird Verschlüsselung benutzt?

>[!info] Praktische Anwendungen
>- **Internet (HTTPS):** [[wiki/TLS\|TLS]] verschlüsselt Webseiten
>- **Messenger:** WhatsApp, Signal verschlüsseln Nachrichten
>- **Festplatten:** BitLocker, FileVault verschlüsseln Speicher
>- **VPN:** Verschlüsselt gesamten Internetverkehr
>- **E-Mails:** PGP/GPG verschlüsselt E-Mails
>- **Passwörter:** [[wiki/Passwort-Hashing\|Passwort-Hashing]] (spezielle Form)

## Wichtige Konzepte

**Schlüssel:**
Der Schlüssel ist wie ein Passwort für die Verschlüsselung. Je länger der Schlüssel, desto sicherer.

**Algorithmus:**
Der Algorithmus ist die Methode, wie verschlüsselt wird. Nutze immer bewährte Algorithmen wie [[wiki/AES\|AES]] oder [[wiki/RSA\|RSA]].

>[!warning] Wichtig
>- Erfinde niemals eigene Verschlüsselung!
>- Nutze immer getestete Bibliotheken
>- Verwende lange Schlüssel (mindestens 128 Bit für symmetrisch, 2048 Bit für [[wiki/RSA\|RSA]])

## Verschlüsselung vs [[wiki/Entschlüsselung\|Entschlüsselung]]

| | Verschlüsselung | [[wiki/Entschlüsselung\|Entschlüsselung]] |
|---|---|---|
| **Eingabe** | Klartext | Geheimtext |
| **Ausgabe** | Geheimtext | Klartext |
| **Braucht** | Schlüssel | Schlüssel |
| **Ziel** | Daten schützen | Daten lesen |

## Verwandte Themen

- [[wiki/Entschlüsselung\|Entschlüsselung]] - Geheimtext wieder lesbar machen
- [[wiki/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] - Ein Schlüssel für alles
- [[wiki/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] - Zwei Schlüssel System
- [[wiki/AES\|AES]] - Bester symmetrischer Algorithmus
- [[wiki/RSA\|RSA]] - Bekanntester asymmetrischer Algorithmus
- [[wiki/TLS\|TLS]] - Verschlüsselung im Internet
- [[wiki/Hash-Funktion\|Hash-Funktion]] - Einweg-Verschlüsselung
- [[wiki/Digitale Signatur\|Digitale Signatur]] - Echtheit beweisen
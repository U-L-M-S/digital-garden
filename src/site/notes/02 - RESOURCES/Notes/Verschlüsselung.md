---
{"dg-publish":true,"permalink":"/02-resources/notes/verschluesselung/","tags":["informatik/sicherheit","kryptografie"],"noteIcon":"","updated":"2025-11-07T09:43:31.232+01:00"}
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

### 1. [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]]
>Ein Schlüssel für Verschlüsselung und [[02 - RESOURCES/Notes/Entschlüsselung\|Entschlüsselung]]

**Eigenschaften:**
- Sehr schnell
- Beide Personen brauchen denselben Schlüssel
- Problem: Wie tauscht man den Schlüssel sicher aus?

**Beispiele:**
- [[02 - RESOURCES/Notes/AES\|AES]] - Moderner Standard
- DES - Alt und unsicher

### 2. [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]]
>Zwei Schlüssel - öffentlicher und privater Schlüssel

**Eigenschaften:**
- Langsamer als symmetrisch
- Jeder kann mit dem öffentlichen Schlüssel verschlüsseln
- Nur der private Schlüssel kann entschlüsseln
- Löst das Schlüsselaustausch-Problem

**Beispiele:**
- [[02 - RESOURCES/Notes/RSA\|RSA]] - Sehr bekannt
- ECC - Modern und effizienter

## Wo wird Verschlüsselung benutzt?

>[!info] Praktische Anwendungen
>- **Internet (HTTPS):** [[02 - RESOURCES/Notes/TLS\|TLS]] verschlüsselt Webseiten
>- **Messenger:** WhatsApp, Signal verschlüsseln Nachrichten
>- **Festplatten:** BitLocker, FileVault verschlüsseln Speicher
>- **VPN:** Verschlüsselt gesamten Internetverkehr
>- **E-Mails:** PGP/GPG verschlüsselt E-Mails
>- **Passwörter:** [[02 - RESOURCES/Notes/Passwort-Hashing\|Passwort-Hashing]] (spezielle Form)

## Wichtige Konzepte

**Schlüssel:**
Der Schlüssel ist wie ein Passwort für die Verschlüsselung. Je länger der Schlüssel, desto sicherer.

**Algorithmus:**
Der Algorithmus ist die Methode, wie verschlüsselt wird. Nutze immer bewährte Algorithmen wie [[02 - RESOURCES/Notes/AES\|AES]] oder [[02 - RESOURCES/Notes/RSA\|RSA]].

>[!warning] Wichtig
>- Erfinde niemals eigene Verschlüsselung!
>- Nutze immer getestete Bibliotheken
>- Verwende lange Schlüssel (mindestens 128 Bit für symmetrisch, 2048 Bit für [[02 - RESOURCES/Notes/RSA\|RSA]])

## Verschlüsselung vs [[02 - RESOURCES/Notes/Entschlüsselung\|Entschlüsselung]]

| | Verschlüsselung | [[02 - RESOURCES/Notes/Entschlüsselung\|Entschlüsselung]] |
|---|---|---|
| **Eingabe** | Klartext | Geheimtext |
| **Ausgabe** | Geheimtext | Klartext |
| **Braucht** | Schlüssel | Schlüssel |
| **Ziel** | Daten schützen | Daten lesen |

## Verwandte Themen

- [[02 - RESOURCES/Notes/Entschlüsselung\|Entschlüsselung]] - Geheimtext wieder lesbar machen
- [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] - Ein Schlüssel für alles
- [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] - Zwei Schlüssel System
- [[02 - RESOURCES/Notes/AES\|AES]] - Bester symmetrischer Algorithmus
- [[02 - RESOURCES/Notes/RSA\|RSA]] - Bekanntester asymmetrischer Algorithmus
- [[02 - RESOURCES/Notes/TLS\|TLS]] - Verschlüsselung im Internet
- [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]] - Einweg-Verschlüsselung
- [[02 - RESOURCES/Notes/Digitale Signatur\|Digitale Signatur]] - Echtheit beweisen
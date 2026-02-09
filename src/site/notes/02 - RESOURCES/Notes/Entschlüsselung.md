---
{"dg-publish":true,"permalink":"/02-resources/notes/entschluesselung/","tags":["informatik/sicherheit","kryptografie"],"noteIcon":"","updated":"2025-11-07T09:44:13.000+01:00"}
---

>Entschlüsselung wandelt unlesbare Daten (Geheimtext) zurück in lesbare Daten (Klartext) um. Dafür braucht man den richtigen Schlüssel.
>>Entschlüsselung ist das Gegenteil von [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] - sie macht verschlüsselte Daten wieder lesbar.

## Was ist Entschlüsselung?

Entschlüsselung ist ein Prozess, der aus unlesbaren Geheimcode wieder lesbare Informationen macht.

**Das Prinzip:**
```
Geheimtext + Schlüssel → [Entschlüsselung] → Klartext
```

>[!example] Einfaches Beispiel
>- **Geheimtext:** "Xp2mK9sL4r7Q"
>- **Schlüssel:** "MeinGeheimnis123"
>- **Klartext:** "Hallo Welt"
>
>Mit dem richtigen Schlüssel wird aus dem Geheimcode wieder die Original-Nachricht.

## Wie funktioniert Entschlüsselung?

### Bei [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|symmetrischer Verschlüsselung]]
>Derselbe Schlüssel wird für [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] und Entschlüsselung benutzt

**Ablauf:**
1. Person A verschlüsselt mit Schlüssel "ABC123"
2. Person B entschlüsselt mit demselben Schlüssel "ABC123"
3. Beide brauchen denselben Schlüssel!

**Beispiel:** [[02 - RESOURCES/Notes/AES\|AES]]
- Verschlüsselung: Klartext + Schlüssel → Geheimtext
- Entschlüsselung: Geheimtext + Schlüssel → Klartext

### Bei [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|asymmetrischer Verschlüsselung]]
>Zwei verschiedene Schlüssel - öffentlicher und privater Schlüssel

**Ablauf:**
1. Person A verschlüsselt mit Person B's öffentlichem Schlüssel
2. Person B entschlüsselt mit seinem privaten Schlüssel
3. Nur der private Schlüssel kann entschlüsseln!

**Beispiel:** [[02 - RESOURCES/Notes/RSA\|RSA]]
- Verschlüsselung: Klartext + öffentlicher Schlüssel → Geheimtext
- Entschlüsselung: Geheimtext + privater Schlüssel → Klartext

## Wichtige Konzepte

### Der richtige Schlüssel ist wichtig
>Ohne den richtigen Schlüssel ist Entschlüsselung unmöglich

Bei modernen Algorithmen wie [[02 - RESOURCES/Notes/AES\|AES]] oder [[02 - RESOURCES/Notes/RSA\|RSA]] ist es praktisch unmöglich, ohne den richtigen Schlüssel zu entschlüsseln:
- [[02 - RESOURCES/Notes/AES\|AES]]-256: $2^{256}$ mögliche Schlüssel (das sind mehr Möglichkeiten als Atome im Universum!)
- [[02 - RESOURCES/Notes/RSA\|RSA]]-2048: Faktoren zu finden würde tausende Jahre dauern

### Autorisierte vs. Unautorisierte Entschlüsselung

**Autorisierte Entschlüsselung:**
- Du hast den richtigen Schlüssel
- Du bist berechtigt, die Daten zu lesen
- Funktioniert sofort

**Unautorisierte Entschlüsselung (Angriff):**
- Du hast den Schlüssel nicht
- Du versuchst, die Verschlüsselung zu "knacken"
- Bei guter Verschlüsselung praktisch unmöglich

>[!warning] Verschlüsselung knacken
>Bei modernen Verschlüsselungen wie [[02 - RESOURCES/Notes/AES\|AES]]-256 oder [[02 - RESOURCES/Notes/RSA\|RSA]]-2048 ist es mit heutiger Technologie unmöglich, die Verschlüsselung in realistischer Zeit zu knacken.
>
>**Angreifer versuchen stattdessen:**
>- Schwache Passwörter zu erraten
>- Schlüssel zu stehlen
>- Schwache Implementierungen auszunutzen

## Wo wird Entschlüsselung benutzt?

>[!info] Praktische Anwendungen
>- **Webseiten öffnen:** Dein Browser entschlüsselt HTTPS-Verbindungen ([[02 - RESOURCES/Notes/TLS\|TLS]])
>- **Nachrichten lesen:** Messenger entschlüsseln empfangene Nachrichten
>- **Dateien öffnen:** Verschlüsselte Festplatten werden beim Start entschlüsselt
>- **E-Mails lesen:** PGP/GPG entschlüsselt verschlüsselte E-Mails
>- **Videos streamen:** Streaming-Dienste entschlüsseln geschützte Videos

## Verschlüsselung vs Entschlüsselung - Der Kreislauf

```
        Verschlüsselung
Klartext ───────────────> Geheimtext
   ↑                          │
   │                          │
   │                          ↓
   └─────── Entschlüsselung ──┘
```

**Der Ablauf:**
1. **[[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]:** Klartext wird mit Schlüssel in Geheimtext verwandelt
2. **Übertragung:** Geheimtext wird übertragen (z.B. über Internet)
3. **Entschlüsselung:** Geheimtext wird mit Schlüssel zurück in Klartext verwandelt

>[!tip] Wichtig zu verstehen
>Verschlüsselung und Entschlüsselung sind zwei Seiten derselben Medaille:
>- Verschlüsselung schützt Daten
>- Entschlüsselung macht sie wieder nutzbar
>
>Beide brauchen den richtigen Schlüssel!

## Vergleich: [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] vs Entschlüsselung

| Eigenschaft | [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] | Entschlüsselung |
|-------------|---------------------|-----------------|
| **Eingabe** | Klartext (lesbar) | Geheimtext (unlesbar) |
| **Ausgabe** | Geheimtext (unlesbar) | Klartext (lesbar) |
| **Ziel** | Daten schützen | Daten lesbar machen |
| **Braucht** | Schlüssel (zum Verschlüsseln) | Schlüssel (zum Entschlüsseln) |
| **Bei Symmetrisch** | Gleicher Schlüssel | Gleicher Schlüssel |
| **Bei Asymmetrisch** | Öffentlicher Schlüssel | Privater Schlüssel |

## Häufige Fehler

>[!danger] Fehler vermeiden
>- **Schlüssel verlieren:** Ohne Schlüssel sind Daten für immer verloren!
>- **Schwache Passwörter:** Nutze starke, lange Passwörter für Schlüssel
>- **Schlüssel unsicher speichern:** Niemals Schlüssel im Code oder in E-Mails
>- **Alte Algorithmen:** Nutze keine veralteten Algorithmen wie DES oder RC4

>[!success] Best Practices
>- **Sichere Schlüsselspeicherung:** Nutze Key Management Systeme
>- **Lange Schlüssel:** Mindestens 128 Bit für symmetrisch, 2048 Bit für [[02 - RESOURCES/Notes/RSA\|RSA]]
>- **Moderne Algorithmen:** [[02 - RESOURCES/Notes/AES\|AES]], [[02 - RESOURCES/Notes/RSA\|RSA]], ECC
>- **Backup der Schlüssel:** Aber sicher aufbewahren!

## Verwandte Themen

- [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] - Daten unlesbar machen
- [[02 - RESOURCES/Notes/Symmetrische Verschlüsselung\|Symmetrische Verschlüsselung]] - Ein Schlüssel für beides
- [[02 - RESOURCES/Notes/Asymmetrische Verschlüsselung\|Asymmetrische Verschlüsselung]] - Zwei Schlüssel System
- [[02 - RESOURCES/Notes/AES\|AES]] - Symmetrischer Standard-Algorithmus
- [[02 - RESOURCES/Notes/RSA\|RSA]] - Asymmetrischer Standard-Algorithmus
- [[02 - RESOURCES/Notes/TLS\|TLS]] - Verschlüsselung und Entschlüsselung im Internet
- [[02 - RESOURCES/Notes/Hash-Funktion\|Hash-Funktion]] - Einweg (keine Entschlüsselung möglich!)

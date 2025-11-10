---
{"dg-publish":true,"permalink":"/02-resources/notes/verschluesselung/","tags":["informatik/sicherheit","kryptografie"],"noteIcon":"","updated":"2025-11-10T15:23:30.802+01:00"}
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

---

# 🎯 AP2-Prüfungsaufgabe: Verschlüsselung

>[!example] Typische Prüfungsaufgabe
>**Aufgabe:** Unterscheide symmetrische und asymmetrische Verschlüsselung. Nenne je 2 Beispiele und erkläre Vor-/Nachteile.

---

## ✅ Kompakte Lösung

| Kriterium | Symmetrisch | Asymmetrisch |
|---|---|---|
| **Schlüssel** | 1 Schlüssel | 2 Schlüssel (public/private) |
| **Beispiele** | [[02 - RESOURCES/Notes/AES\|AES]], DES | [[02 - RESOURCES/Notes/RSA\|RSA]], ECC |
| **Geschwindigkeit** | ⚡ Sehr schnell | 🐌 Langsamer |
| **Schlüsseltausch** | ❌ Problem | ✅ Einfach |
| **Nutzung** | Daten verschlüsseln | Schlüsseltausch, Signatur |

**Typischer AP2-Ablauf:**
1. Bob sendet öffentlichen Schlüssel an Alice
2. Alice verschlüsselt AES-Schlüssel mit Bobs öffentlichem Schlüssel → Asymmetrisch
3. Alice sendet verschlüsselten AES-Schlüssel
4. Bob entschlüsselt mit privatem Schlüssel → hat jetzt AES-Schlüssel
5. Weitere Kommunikation mit AES → Symmetrisch (schnell!)

>[!check] AP2-Checkliste
>- ✅ Symmetrisch: 1 Schlüssel, schnell, Schlüsselproblem
>- ✅ Asymmetrisch: 2 Schlüssel, langsam, sicherer Austausch
>- ✅ [[02 - RESOURCES/Notes/Hybride Verschlüsselung\|Hybride Verschlüsselung]]: Kombination aus beiden
>- ✅ [[02 - RESOURCES/Notes/AES\|AES]]: 128/192/256 Bit
>- ✅ [[02 - RESOURCES/Notes/RSA\|RSA]]: Mindestens 2048 Bit

>[!warning] Häufige Fehler
>- ❌ "RSA für große Dateien" → Zu langsam!
>- ❌ "Public Key geheim halten" → Nein, public = öffentlich!
>- ❌ "Ein Schlüssel bei asymmetrisch" → Zwei Schlüssel!
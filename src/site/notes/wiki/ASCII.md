---
{"dg-publish":true,"permalink":"/wiki/ascii/","noteIcon":"","updated":"2026-07-18T01:35:03.000+02:00","dg-note-properties":{"tags":null,"aliases":["American Standard Code for Information Interchange"],"links":null,"path":"Notes","created":"2024-08-13 08:38"}}
---

>Zeichencodierungssystem mit 128 Zeichen.

![ASCII-20240813090146146.png](/img/user/assets/IMG/ASCII-20240813090146146.png)

# I. Aufbau
___
- **7 Bit** pro Zeichen (das 8. war ursprünglich ein Prüfbit) → $2^7 = 128$ Zeichen.
- Codes `0x00`–`0x1F` = ==Steuerzeichen==, `0x20`–`0x7F` = druckbare Zeichen.
- Merk-Anker: `'A'` = `0x41`, `'a'` = `0x61`, `'0'` = `0x30`.

>[!warning] Grenzen
>Keine Umlaute, keine anderen Alphabete → nationale Behelfslösungen wie **DIN 66003** ersetzten `[ \ ] { | }` durch `Ä Ö Ü ä ö ü ß`. Erweitert durch ISO 8859-1/Latin-1 (8 Bit), heute abgelöst von [[Unicode\|Unicode]] mit [[UTF-8\|UTF-8]] (das ASCII-kompatibel bleibt: häufige Zeichen = 1 Byte).

# II. Extended ASCII (8 Bit)

Nach ASCII war klar: 128 Zeichen reichen nicht. Deshalb wurde das 8. Bit als Datenbits genutzt:

| Standard | Bits | Zeichen | Einsatz |
| :--- | :-: | :-: | :--- |
| **ASCII** | 7 | 128 | International |
| **ISO 8859-1 (Latin-1)** | 8 | 256 | Westeuropa, Umlaute & Sonderzeichen |
| **ISO 8859-2** | 8 | 256 | Osteuropa (ą, ć, …) |
| **Windows-1252** | 8 | 256 | Microsoft (ähnlich Latin-1, aber mit $€ †…) |

**ASCII-Kompatibilität:** Die Codes `0x00`–`0x7F` sind gleich, Erweiterung nutzt `0x80`–`0xFF`.

# III. Unicode & UTF-Varianten

**Problem mit Extended ASCII:** Welt hat >1000 verschiedene Alphabete & Symbole. 8 Bit (256 Zeichen) reichen nicht.

**Lösung: Unicode**

[[Unicode\|Unicode]] gibt ==jedem Zeichen aller Alphabete== einen eindeutigen [[Codepunkt\|Codepunkt]] (Notation `U+`, z.B. `U+263A` = ☺, `U+00E4` = ä, `U+4E2D` = 中).

- Unicode hat >1 Mio. Codepunkte möglich (aktuell ~150.000 definiert).
- Problem: Wie speichert man das effizient?

**Lösung: UTF-Varianten** ([[UTF-8\|UTF-8]], [[UTF-16\|UTF-16]], [[UTF-32\|UTF-32]]):

| Format | Bytes | Speicher-Effizienz | Kompatibilität | Einsatz |
| :--- | :--- | :--- | :--- | :--- |
| **[[UTF-8\|UTF-8]]** | 1–4 (variabel) | ✅ kompakt (ASCII = 1 Byte) | ✅ ASCII-kompatibel | **Standard Web & Linux** |
| **[[UTF-16\|UTF-16]]** | 2 oder 4 | mittel | ❌ not ASCII-kompatibel | Windows, Java, alte XML |
| **[[UTF-32\|UTF-32]]** | immer 4 | ❌ verschwenderisch | ❌ not ASCII-kompatibel | kaum genutzt |

## UTF-8 im Detail

Die ==clevere Codierung==: häufige Zeichen kurz, seltene länger:

```
1-Byte (ASCII):       0xxxxxxx                    (0x00–0x7F) ← 128 Zeichen
2-Byte:          110xxxxx 10xxxxxx               (0xC0–0xDF)
3-Byte:     1110xxxx 10xxxxxx 10xxxxxx           (0xE0–0xEF)
4-Byte: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx     (0xF0–0xF7)
```

> [!example] UTF-8-Codierung
> Zeichen **ä** (U+00E4):  
> - Codepunkt 0xE4 = `11100100` (nicht 0–0x7F) → braucht **2 Byte**.
> - UTF-8: `11000011 10100100` (0xC3 0xA4)
>
> Zeichen **中** (U+4E2D):  
> - Codepunkt 0x4E2D (>0x7FF) → braucht **3 Byte**.
> - UTF-8: `11100100 10111000 10101101` (0xE4 0xB8 0xAD)

**Vorteile UTF-8:**
- ✅ ASCII-kompatibel (alle alten Texte funktionieren)
- ✅ Sehr platzsparend (die meisten Texte nutzen Lateinalphabet)
- ✅ Synchronisierbar (ein '`10`'-Byte ist sofort erkennbar als Fortsetzung)
- ✅ Web-Standard (fast alle Websites nutzen UTF-8)

## UTF-16 (für Kontext)

UTF-16 ist **nicht** ASCII-kompatibel, aber effizient für Sprachen mit vielen Nicht-ASCII-Zeichen (CJK):

```
2-Byte (BMP):  0xD800–0xDBFF 0xDC00–0xDFFF  (Surrogate Pair für >0xFFFF)
```

→ Windows und Java nutzen UTF-16, weil sie vor UTF-8-Dominanz designt wurden.
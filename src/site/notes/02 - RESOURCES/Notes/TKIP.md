---
{"dg-publish":true,"permalink":"/02-resources/notes/tkip/","tags":["sicherheit/kryptografie","netzwerk/wlan","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T13:46:55.000+01:00","dg-note-properties":{"aliases":["TKIP","Temporal Key Integrity Protocol","tkip"],"created_date":"2024-08-04","links":null,"tags":["sicherheit/kryptografie","netzwerk/wlan","ausbildung/gfn/ap1/vorbereitung"]}}
---

>**Temporal Key Integrity Protocol (TKIP)** ist ein Sicherheitsprotokoll für [[02 - RESOURCES/Notes/WLAN\|WLAN]], das als Übergangslösung entwickelt wurde, um die Schwächen von [[02 - RESOURCES/Notes/WEP\|WEP]] zu beheben. Es wurde in [[02 - RESOURCES/Notes/Wi-Fi 4\|Wi-Fi 4]] (802.11n) standardisiert.
>>TKIP war Teil von WPA (Wi-Fi Protected Access) und wurde später durch das sicherere [[02 - RESOURCES/Notes/AES\|AES]] in WPA2 ersetzt.

>[!warning] Status
>TKIP gilt seit 2012 als **veraltet und unsicher**! Moderne WLANs sollten **WPA2/WPA3 mit AES** verwenden.

---

# Warum wurde TKIP entwickelt?

>[[02 - RESOURCES/Notes/WEP\|WEP]] (Wired Equivalent Privacy) hatte **kritische Sicherheitslücken** und konnte in Minuten geknackt werden. TKIP sollte diese Probleme lösen, **ohne neue Hardware** zu benötigen.

**Probleme von WEP:**
- Statische Schlüssel (änderten sich nie)
- Schwache IV (Initialization Vector)
- Anfällig für Replay-Angriffe
- Leicht zu knacken

**Lösung durch TKIP:**
- Dynamische Schlüssel pro Paket
- Stärkere IVs (48 Bit statt 24 Bit)
- Message Integrity Check (MIC)
- Schlüssel-Mixing-Funktion

---

# Wie funktioniert TKIP?

## 1. Schlüssel-Hierarchie

```
Master Key (PSK)
     │
     ↓
Pairwise Master Key (PMK)
     │
     ↓
Pairwise Transient Key (PTK)
     │
     ├──► Temporal Key (TK) ← Wird für Verschlüsselung verwendet
     ├──► MIC Key
     └──► EAPOL Key
```

## 2. Packet Key Mixing

>TKIP **ändert den Schlüssel für jedes Paket** durch Mischen des temporären Schlüssels mit:
>- MAC-Adresse
>- Transmit Sequence Counter (TSC)

```
Per-Packet Key = MixingFunction(Temporal Key, MAC, TSC)
```

## 3. Message Integrity Check (MIC / Michael)

>TKIP fügt einen **MIC-Wert** hinzu, um Manipulation zu erkennen.

**Ablauf:**
```
1. Daten vorbereiten
   ↓
2. MIC berechnen (Michael-Algorithmus)
   ↓
3. MIC anhängen
   ↓
4. Mit RC4 verschlüsseln
   ↓
5. Senden
```

**Empfängerseite:**
```
1. Empfangen
   ↓
2. Entschlüsseln
   ↓
3. MIC neu berechnen
   ↓
4. MIC vergleichen
   ↓
5. Bei Übereinstimmung: ✓ Akzeptieren
   Bei Unterschied: ❌ Verwerfen
```

---

# TKIP vs. WEP vs. AES

| Merkmal | WEP | TKIP (WPA) | AES (WPA2/WPA3) |
|---------|-----|------------|-----------------|
| **Verschlüsselung** | RC4 | RC4 (verbessert) | AES |
| **Schlüssellänge** | 64/128 Bit | 128 Bit | 128/192/256 Bit |
| **IV-Größe** | 24 Bit | 48 Bit | - |
| **Schlüsselverwaltung** | Statisch | Dynamisch | Dynamisch |
| **Integrität** | CRC-32 (schwach) | Michael (MIC) | CCMP (stark) |
| **Sicherheit** | ❌ Unsicher | ⚠️ Veraltet | ✅ Sicher |
| **Status** | Obsolet | Deprecated | Empfohlen |

---

# Schwächen von TKIP

>[!caution] Bekannte Angriffe

## 1. Chopchop-Angriff
>Angreifer kann MIC fälschen und kleine Pakete einschleusen.

## 2. Beck-Tews-Angriff (2008)
>Ermöglicht das Entschlüsseln kleiner Pakete in ~15 Minuten.

## 3. Halvorsen-Angriff (2009)
>Verbesserter Angriff, der MIC-Schlüssel rekonstruieren kann.

## 4. RC4-Schwächen
>TKIP basiert immer noch auf [[02 - RESOURCES/Notes/RC4\|RC4]], das grundlegende Schwächen hat.

---

# Schutzmaßnahmen

>[!success] Empfehlungen

**1. Upgrade auf WPA2/WPA3**
```
❌ WEP
❌ WPA mit TKIP
✅ WPA2 mit AES
✅✅ WPA3
```

**2. Router-Einstellungen prüfen**
```
1. Router-Admin-Interface öffnen
2. WLAN-Sicherheit → WPA2-PSK (AES)
3. TKIP/WEP deaktivieren
4. Speichern & Neustart
```

**3. Starkes WLAN-Passwort**
- Mindestens 12-16 Zeichen
- Buchstaben, Zahlen, Sonderzeichen
- Keine Wörterbuch-Wörter

---

# Konfigurationsbeispiel

## Router-Einstellung (empfohlen):

```
SSID: MeinWLAN
Sicherheitsmodus: WPA2-Personal (nicht WPA!)
Verschlüsselung: AES (nicht TKIP!)
Passwort: [Starkes Passwort mit 16+ Zeichen]
```

## Linux WLAN-Konfiguration (WPA2):

```bash
# /etc/wpa_supplicant/wpa_supplicant.conf
network={
    ssid="MeinWLAN"
    psk="MeinSicheresPasswort"
    key_mgmt=WPA-PSK
    pairwise=CCMP  # AES (nicht TKIP!)
    group=CCMP
}
```

---

# Zeitstrahl: WLAN-Sicherheit

```
1999: WEP eingeführt          ──► 2001: WEP geknackt
                                         │
                                         ↓
2003: WPA mit TKIP            ──► 2008: TKIP-Angriffe
      (Übergangslösung)                  │
                                         ↓
2004: WPA2 mit AES            ──► Heute: Standard
      (Empfohlen ab hier!)               │
                                         ↓
2018: WPA3                    ──► Zukunft: Best Practice
```

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **TKIP** = Temporal Key Integrity Protocol für WLAN-Sicherheit
>- Entwickelt als **Übergangslösung** zwischen WEP und WPA2
>- **Verbesserungen** gegenüber WEP: Dynamische Schlüssel, größere IVs, MIC
>- **Status**: Seit 2012 **veraltet und unsicher**
>- **Empfehlung**: WPA2 mit AES oder WPA3 verwenden!

>[!important] Goldene Regel
>**Niemals TKIP oder WEP verwenden!** Nur WPA2/WPA3 mit AES ist sicher.

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/WEP\|WEP]] - Vorgänger von TKIP (noch unsicherer)
- [[02 - RESOURCES/Notes/WPA\|WPA]] - Wi-Fi Protected Access (nutzt TKIP)
- [[02 - RESOURCES/Notes/WPA2\|WPA2]] - Nachfolger mit AES
- [[WPA3\|WPA3]] - Neuester Standard
- [[02 - RESOURCES/Notes/AES\|AES]] - Moderne Verschlüsselung für WLAN
- [[02 - RESOURCES/Notes/RC4\|RC4]] - Stream-Cipher, der von TKIP verwendet wird

---

# Weiterführende Ressourcen

📚 **Dokumentation**:
- IEEE 802.11i Standard
- Wi-Fi Alliance: WPA/WPA2/WPA3
- NIST: Guidelines for Securing Wireless Local Area Networks

🔧 **Tools zum Testen**:
- Aircrack-ng Suite
- Wireshark (Packet-Analyse)

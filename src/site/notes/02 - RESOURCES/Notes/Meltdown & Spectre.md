---
{"dg-publish":true,"permalink":"/02-resources/notes/meltdown-and-spectre/","tags":["sicherheit/it-sicherheit","sicherheit/hardware","software/hardware","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T13:52:22.219+01:00"}
---

>**Meltdown** und **Spectre** sind kritische Hardware-Sicherheitslücken in modernen CPUs, die im Januar 2018 öffentlich bekannt wurden. Sie nutzen **Speculative Execution** (spekulative Ausführung) aus, um auf geschützte Speicherbereiche zuzugreifen.
>>Diese Schwachstellen betreffen **Milliarden von Geräten** weltweit (Intel, AMD, ARM) und können nicht vollständig durch Software-Patches behoben werden.

>[!danger] Kritische Hardware-Schwachstelle
>Meltdown und Spectre ermöglichen das Auslesen von **Passwörtern, Verschlüsselungsschlüsseln und privaten Daten** aus dem Speicher anderer Programme!

---

# Visualisierung: Betroffene CPUs

```
┌────────────────────────────────────────────────────┐
│         BETROFFENE PROZESSOREN                     │
├────────────────────────────────────────────────────┤
│                                                    │
│  Intel:   ✓ Core-Serie (i3, i5, i7, i9)          │
│           ✓ Xeon (Server)                         │
│           ✓ Atom (Mobile)                         │
│           ✓ Seit 1995! (Pentium Pro)              │
│                                                    │
│  AMD:     ⚠️ Teilweise (nur Spectre)              │
│           ✓ Ryzen, EPYC                           │
│                                                    │
│  ARM:     ⚠️ Teilweise (nur Spectre)              │
│           ✓ Cortex-A Serie                        │
│           ✓ Smartphones, Tablets                  │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

# Grundprinzip: Speculative Execution

>Moderne CPUs verwenden **spekulative Ausführung**, um die Performance zu steigern: Sie führen Befehle **vorausschauend** aus, bevor klar ist, ob sie benötigt werden.

**Normaler Ablauf:**

```
Schritt 1: Bedingung prüfen
    ↓
Schritt 2: If-Zweig ODER Else-Zweig ausführen
    ↓
Schritt 3: Weiter
```

**Mit Speculative Execution:**

```
Schritt 1: Bedingung prüfen
    ↓
Schritt 2: BEIDE Zweige parallel ausführen (spekulativ!)
    ↓
Schritt 3: Richtigen Zweig behalten, falschen verwerfen
    ↓
Schritt 4: Weiter (schneller!)
```

**Visualisierung:**

```
         if (x < 10)
            /    \
    SPEKULATIV   SPEKULATIV
          ↓        ↓
     Zweig A   Zweig B
          ↓        ↓
      ┌───────────────┐
      │ CPU entscheidet│
      │ x < 10 = FALSE│
      └───────────────┘
          ↓        ↓
       VERWERFEN  BEHALTEN
                   ↓
                Weiter
```

>[!info] Problem
>Die **verworfenen Operationen** hinterlassen **Spuren im Cache** - und genau das nutzen Meltdown und Spectre aus!

---

# Meltdown: Kernel-Speicher auslesen

## Was ist Meltdown?

>**Meltdown** ermöglicht es, aus **User-Space** (normales Programm) auf **Kernel-Space** (Betriebssystem) zuzugreifen - was eigentlich unmöglich sein sollte!

**Speicher-Layout:**

```
┌──────────────────────────────────┐
│      KERNEL-SPACE (geschützt)    │ ← Betriebssystem, sollte unerreichbar sein
│      - Passwörter                │
│      - Verschlüsselungsschlüssel │
│      - Private Daten             │
├──────────────────────────────────┤
│                                  │
│      USER-SPACE                  │ ← Normale Programme
│      - Dein Code                 │
│      - Browser                   │
│      - Anwendungen               │
└──────────────────────────────────┘
```

**Normalerweise:**
```
User-Programm versucht Kernel-Speicher zu lesen
    ↓
CPU prüft Berechtigung
    ↓
❌ ACCESS DENIED (Schutzmechanismus)
    ↓
Programm abstürzt
```

**Mit Meltdown:**
```
User-Programm versucht Kernel-Speicher zu lesen
    ↓
CPU führt spekulativ aus (bevor Prüfung abgeschlossen!)
    ↓
Daten landen im Cache
    ↓
Speicherzugriff wird verworfen (zu spät!)
    ↓
✓ Daten können aus Cache ausgelesen werden!
```

## Meltdown-Angriff (Schritt-für-Schritt)

```
Schritt 1: Kernel-Adresse vorbereiten
┌──────────────────────────────────┐
│ kernel_addr = 0xFFFF8800...      │
└──────────────────────────────────┘

Schritt 2: Spekulativ lesen
┌──────────────────────────────────┐
│ value = *kernel_addr  (illegal!) │
│ CPU führt aus, bevor Prüfung!    │
└──────────────────────────────────┘

Schritt 3: Wert in Cache bringen
┌──────────────────────────────────┐
│ array[value * 4096]              │
│ → Cache-Zeile wird geladen       │
└──────────────────────────────────┘

Schritt 4: Cache-Timing-Angriff
┌──────────────────────────────────┐
│ for i in 0..255:                 │
│   time = measure_access(array[i])│
│   if time < threshold:           │
│     value = i  ← GEFUNDEN!       │
└──────────────────────────────────┘
```

**Visualisierung:**

```
┌─────────────────────────────────────────────┐
│  USER-PROGRAMM (Angreifer)                  │
│                                             │
│  1. Lese Kernel-Adresse                     │
│     (wird sofort abgelehnt, aber...)        │
│                                             │
│  2. CPU hat VORHER spekulativ               │
│     Daten in Cache geladen!                 │
│                                             │
│  3. Cache-Timing messen:                    │
│     - Schnell = im Cache = war im Kernel!  │
│     - Langsam = nicht im Cache             │
│                                             │
│  4. Kernel-Daten rekonstruieren             │
│     Byte für Byte!                          │
└─────────────────────────────────────────────┘
```

---

# Spectre: Prozess-übergreifend angreifen

## Was ist Spectre?

>**Spectre** nutzt **Branch Prediction** (Sprungvorhersage) aus, um Daten aus **anderen Prozessen** zu stehlen - sogar aus dem **Browser** (JavaScript!).

**Branch Prediction:**

```
CPU merkt sich vergangene Entscheidungen:

Bisher:  if (x < 10) → TRUE 100x
         ↓
CPU denkt: "Wird wahrscheinlich wieder TRUE sein"
         ↓
CPU führt TRUE-Zweig spekulativ aus
```

**Spectre-Idee:**

```
1. Trainiere Branch Predictor
   (rufe Funktion 1000x mit x < 10 auf)

2. Rufe mit x >= 10 auf (out of bounds!)
   CPU führt TROTZDEM spekulativ aus

3. Lese Daten aus Cache
   → Daten aus fremdem Speicher!
```

## Spectre-Angriff (Visualisierung)

```
┌────────────────────────────────────────────────┐
│  OPFER-PROZESS (z.B. Browser)                  │
│                                                │
│  function read_byte(index):                    │
│    if (index < array.length):  ← Prüfung       │
│       return array[index]                      │
│                                                │
│  array = [geheime Daten, Passwörter, ...]     │
└────────────────────────────────────────────────┘

           Training Phase (1000x):
              index = 5 (gültig)
              → Branch Predictor lernt: "if = TRUE"

           Angriff:
              index = 999999 (ungültig!)
              ↓
              CPU sagt: "if wird TRUE sein" (falsch!)
              ↓
              return array[999999] wird spekulativ ausgeführt
              ↓
              Daten landen im Cache
              ↓
              Angreifer misst Cache-Timing
              ↓
              ✓ Geheime Daten ausgelesen!
```

---

# Meltdown vs. Spectre

| Merkmal | Meltdown | Spectre |
|---------|----------|---------|
| **Ziel** | Kernel-Speicher | Andere Prozesse |
| **Angriffsfläche** | User → Kernel | Prozess → Prozess |
| **Betroffene CPUs** | Hauptsächlich Intel | Intel, AMD, ARM |
| **Schwierigkeit** | Leichter | Schwieriger |
| **Patch** | Möglich (KPTI) | Sehr schwer |
| **JavaScript** | ❌ Nein | ✅ Ja (im Browser!) |

---

# Praktisches Beispiel: Spectre in JavaScript

```javascript
// VEREINFACHTES KONZEPT (nicht funktionsfähig ohne weitere Tricks)

// 1. Trainiere Branch Predictor
for (let i = 0; i < 1000; i++) {
    read_byte(5);  // Immer gültig
}

// 2. Angriff: Außerhalb des Arrays
let secret = read_byte(999999);  // Ungültig, aber CPU führt spekulativ aus!

// 3. Cache-Timing
let timings = [];
for (let i = 0; i < 256; i++) {
    let start = performance.now();
    array[i * 4096];  // Zugriff
    let end = performance.now();
    timings[i] = end - start;
}

// 4. Schnellster Zugriff = war im Cache = SECRET!
let fastest = timings.indexOf(Math.min(...timings));
console.log("Geheimes Byte:", fastest);
```

---

# Schutzmaßnahmen

## 1. Kernel Page-Table Isolation (KPTI) - gegen Meltdown

>Trennt Kernel- und User-Space strikt in separaten Seitentabellen.

**Vorher:**
```
┌────────────────┐
│ Kernel-Space   │ ← Immer im Speicher
├────────────────┤
│ User-Space     │
└────────────────┘
```

**Mit KPTI:**
```
User-Mode:              Kernel-Mode:
┌────────────────┐      ┌────────────────┐
│ User-Space     │      │ Kernel-Space   │
│                │      │ User-Space     │
└────────────────┘      └────────────────┘
   ↕ Wechsel teuer!
```

>[!caution] Performance-Verlust
>KPTI verlangsamt das System um **5-30%**!

## 2. Retpoline - gegen Spectre

>Vermeidet indirekte Sprünge, die Branch Predictor verwenden.

## 3. Microcode-Updates

>CPU-Hersteller liefern Firmware-Updates.

## 4. Browser-Patches

>Reduzierte Timer-Genauigkeit in JavaScript:
```javascript
// Vorher:
performance.now() → 0.123456789 ms (hochpräzise)

// Nach Patch:
performance.now() → 0.1 ms (gerundet)
→ Cache-Timing-Angriffe erschwert
```

---

# System prüfen und schützen

## Linux: Prüfen, ob geschützt

```bash
# Meltdown/Spectre-Status prüfen
grep . /sys/devices/system/cpu/vulnerabilities/*

# Output:
/sys/devices/system/cpu/vulnerabilities/meltdown: Mitigation: PTI
/sys/devices/system/cpu/vulnerabilities/spectre_v1: Mitigation: usercopy/swapgs barriers
/sys/devices/system/cpu/vulnerabilities/spectre_v2: Mitigation: Full generic retpoline
```

## Windows: Updates installieren

```powershell
# PowerShell als Administrator
Get-SpeculationControlSettings

# Installiere Updates
Windows Update → Nach Updates suchen
```

## Updates installieren!

```
1. Betriebssystem-Updates
   ↓
2. BIOS/UEFI-Updates (Microcode)
   ↓
3. Browser-Updates
```

---

# Zeitleiste

```
1995: Intel führt Speculative Execution ein
      │
      ↓
2017: Forscher entdecken Meltdown & Spectre
      │
      ↓
03.01.2018: Öffentliche Bekanntgabe (CVE-2017-5754, CVE-2017-5753)
      │
      ↓
2018: Panik-Patches (KPTI, Retpoline)
      │      Performance-Verluste
      │
      ↓
2018-heute: Weitere Varianten entdeckt
             (Spectre-NG, Foreshadow, ZombieLoad, ...)
      │
      ↓
Heute: Teilweise gepatcht, aber nicht vollständig behebbar
```

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **Meltdown & Spectre** = Hardware-Schwachstellen in CPUs
>- **Ursache**: Speculative Execution hinterlässt Spuren im Cache
>- **Meltdown**: User → Kernel-Speicher auslesen (Intel)
>- **Spectre**: Prozess → Prozess, auch via JavaScript (alle CPUs)
>- **Millionen von Geräten** betroffen
>- **Patches**: KPTI, Retpoline, Microcode-Updates
>- **Performance-Verlust**: 5-30%
>- **Nicht vollständig** behebbar (Hardware-Problem!)

>[!important] Goldene Regel
>**Alle Updates installieren!** OS, BIOS, Browser - regelmäßig prüfen.

---

# Verwandte Konzepte

- [[Speculative Execution\|Speculative Execution]] - CPU-Optimierungstechnik
- [[Cache-Timing-Angriffe\|Cache-Timing-Angriffe]] - Basis für Meltdown/Spectre
- [[Hardware-Sicherheit\|Hardware-Sicherheit]] - Allgemeines Thema
- [[Side-Channel-Angriffe\|Side-Channel-Angriffe]] - Angriffe durch Seiteneffekte

---

# Weiterführende Ressourcen

🌐 **Offizielle Seiten**:
- meltdownattack.com
- spectreattack.com

📚 **Papers**:
- "Meltdown" (Lipp et al., 2018)
- "Spectre Attacks" (Kocher et al., 2018)

🎥 **Videos**:
- Computerphile: Meltdown & Spectre Explained
- LiveOverflow: Meltdown & Spectre Analysis

🔧 **Tools**:
- spectre-meltdown-checker (Linux)
- InSpectre (Windows, von Gibson Research)

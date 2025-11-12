---
{"dg-publish":true,"permalink":"/02-resources/notes/testfall/","tags":["informatik/testing","informatik/qualitätssicherung","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:15:08.000+01:00"}
---

>Ein Testfall ist eine detaillierte Beschreibung, wie eine bestimmte Funktion oder ein Feature getestet werden soll, inklusive Eingabedaten, Ausführungsschritten und erwarteten Ergebnissen.
>>Testfälle dienen der systematischen Qualitätssicherung und stellen sicher, dass Software wie erwartet funktioniert.

>[!summary] Kernpunkte
>Ein **Testfall** (Test Case) definiert:
>- **Was** getestet wird (Testobjekt)
>- **Wie** getestet wird (Testschritte)
>- **Womit** getestet wird (Eingabedaten)
>- **Was erwartet wird** (erwartetes Ergebnis)
>- **Was tatsächlich passiert** (tatsächliches Ergebnis)
>- **Bestanden oder Fehlgeschlagen** (Pass/Fail)

## ASCII-Diagramm: Testfall-Struktur

```
TESTFALL-AUFBAU

┌────────────────────────────────────────────────┐
│ TESTFALL #001                                  │
├────────────────────────────────────────────────┤
│ Titel: Login mit gültigen Daten               │
│                                                │
│ ① VORBEDINGUNGEN (Preconditions)              │
│    → Benutzer existiert in Datenbank          │
│    → Login-Seite ist geöffnet                  │
│                                                │
│ ② TESTDATEN (Input)                            │
│    Username: testuser@mail.de                  │
│    Password: Test123!                          │
│                                                │
│ ③ TESTSCHRITTE (Steps)                         │
│    1. Öffne Login-Seite                        │
│    2. Gib Username ein                         │
│    3. Gib Password ein                         │
│    4. Klicke auf "Login"-Button                │
│                                                │
│ ④ ERWARTETES ERGEBNIS (Expected)              │
│    → Login erfolgreich                         │
│    → Weiterleitung zu Dashboard                │
│    → Begrüßung: "Willkommen, testuser"         │
│                                                │
│ ⑤ TATSÄCHLICHES ERGEBNIS (Actual)             │
│    → [Wird beim Test ausgefüllt]              │
│                                                │
│ ⑥ STATUS                                       │
│    ☐ Pass  ☐ Fail  ☐ Blocked  ☐ Skipped       │
└────────────────────────────────────────────────┘
```

## Given-When-Then Format (BDD)

```
TESTFALL MIT GIVEN-WHEN-THEN

┌─────────────────────────────────────────┐
│ GIVEN (Vorbedingung)                    │
│   → Der Ausgangszustand                 │
│                                         │
│   Beispiel:                             │
│   "Gegeben sei ein registrierter        │
│    Benutzer mit Email: test@mail.de"    │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│ WHEN (Aktion)                           │
│   → Was wird getan?                     │
│                                         │
│   Beispiel:                             │
│   "Wenn der Benutzer sich mit           │
│    korrekten Daten einloggt"            │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│ THEN (Erwartung)                        │
│   → Was soll passieren?                 │
│                                         │
│   Beispiel:                             │
│   "Dann wird er zum Dashboard           │
│    weitergeleitet"                      │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│ RESULT (Ergebnis)                       │
│   ✓ Pass  oder  ✗ Fail                  │
└─────────────────────────────────────────┘
```

## Positive vs. Negative Testfälle

```
TESTFALL-ARTEN

POSITIVE TESTFÄLLE (Happy Path)
┌────────────────────────────────────────┐
│ → Testen mit GÜLTIGEN Eingaben         │
│ → System soll FUNKTIONIEREN            │
│                                        │
│ Beispiel: Login-Test                   │
│ Input: Korrekter Username + Password   │
│ Expected: Login erfolgreich            │
└────────────────────────────────────────┘


NEGATIVE TESTFÄLLE (Error Path)
┌────────────────────────────────────────┐
│ → Testen mit UNGÜLTIGEN Eingaben       │
│ → System soll FEHLER abfangen          │
│                                        │
│ Beispiel: Login-Test                   │
│ Input: Falscher Username               │
│ Expected: Fehlermeldung anzeigen       │
└────────────────────────────────────────┘


EDGE CASES (Grenzfälle)
┌────────────────────────────────────────┐
│ → Testen an den GRENZEN                │
│ → Extremwerte, Sonderfälle             │
│                                        │
│ Beispiel: Alters-Eingabe               │
│ Input: 0, 150, -1 Jahre                │
│ Expected: Grenzwerte korrekt behandeln │
└────────────────────────────────────────┘
```

## Testfall-Beispiel: Formular

```
TESTFALL #042: ALTERS-VALIDIERUNG

┌──────────────────────────────────────────────────┐
│ TITEL                                            │
│ Formular akzeptiert nur Alter zwischen 0 und 120│
├──────────────────────────────────────────────────┤
│ VORBEDINGUNGEN                                   │
│ • Formular ist geladen                           │
│ • Feld "Alter" ist sichtbar                      │
├──────────────────────────────────────────────────┤
│ TESTDATEN                                        │
│                                                  │
│ Test 1 (Gültig): 25                              │
│ Test 2 (Gültig): 0                               │
│ Test 3 (Gültig): 120                             │
│ Test 4 (Ungültig): -5                            │
│ Test 5 (Ungültig): 150                           │
│ Test 6 (Ungültig): "abc"                         │
├──────────────────────────────────────────────────┤
│ TESTSCHRITTE                                     │
│ 1. Gib Wert in Feld "Alter" ein                  │
│ 2. Klicke auf "Absenden"                         │
│ 3. Beobachte Reaktion                            │
├──────────────────────────────────────────────────┤
│ ERWARTETES ERGEBNIS                              │
│ Test 1-3: Formular akzeptiert, keine Fehler     │
│ Test 4-6: Fehlermeldung: "Ungültiges Alter"     │
├──────────────────────────────────────────────────┤
│ TATSÄCHLICHES ERGEBNIS                           │
│ Test 1: ✓ Pass (akzeptiert)                     │
│ Test 2: ✓ Pass (akzeptiert)                     │
│ Test 3: ✓ Pass (akzeptiert)                     │
│ Test 4: ✗ FAIL (wurde akzeptiert, Bug!)         │← Bug!
│ Test 5: ✓ Pass (Fehlermeldung angezeigt)        │
│ Test 6: ✓ Pass (Fehlermeldung angezeigt)        │
├──────────────────────────────────────────────────┤
│ STATUS: FAILED (1 von 6 Tests fehlgeschlagen)    │
└──────────────────────────────────────────────────┘
```

## Testfall-Verwaltung

```
TESTFALL-ZYKLUS

┌─────────────────┐
│  1. ERSTELLEN   │  → Testfall schreiben
└────────┬────────┘
         ↓
┌─────────────────┐
│  2. REVIEWEN    │  → Testfall prüfen
└────────┬────────┘
         ↓
┌─────────────────┐
│  3. AUSFÜHREN   │  → Test durchführen
└────────┬────────┘
         ↓
┌─────────────────┐
│  4. ERGEBNIS    │  → Pass / Fail / Blocked
└────────┬────────┘
         ↓
      Pass?
    ┌───┴───┐
   JA       NEIN
    │        │
    │    ┌───┴───────┐
    │    │ Bug       │
    │    │ melden    │
    │    └───┬───────┘
    │        │
    └────────┴────────> DOKUMENTIEREN
```

>[!important] Wichtig für AP2
>**Testfall-Komponenten:**
>1. **Testfall-ID:** Eindeutige Nummer (z.B. TC-001)
>2. **Titel:** Kurze Beschreibung
>3. **Vorbedingungen:** Was muss gegeben sein?
>4. **Testdaten:** Welche Eingaben?
>5. **Testschritte:** Wie wird getestet?
>6. **Erwartetes Ergebnis:** Was soll passieren?
>7. **Tatsächliches Ergebnis:** Was ist passiert?
>8. **Status:** Pass/Fail/Blocked/Skipped
>
>**Testarten:**
>- **Positiv:** Gültige Eingaben (Happy Path)
>- **Negativ:** Ungültige Eingaben (Error Path)
>- **Edge Cases:** Grenzwerte, Extremfälle
>
>**Typische Prüfungsfrage:** "Was gehört zu einem vollständigen Testfall?"
>→ Antwort: Vorbedingungen, Testdaten, Testschritte, erwartetes und tatsächliches Ergebnis, Status

>[!example] Praxis-Beispiel: Login-Funktion

```
TESTFÄLLE FÜR LOGIN-FUNKTION

═══════════════════════════════════════════════════

TESTFALL #001: Login mit gültigen Daten
─────────────────────────────────────────
GIVEN:  Benutzer existiert (test@mail.de / Test123!)
WHEN:   Benutzer gibt korrekte Daten ein
THEN:   Login erfolgreich, Weiterleitung zu Dashboard
STATUS: ✓ PASS

═══════════════════════════════════════════════════

TESTFALL #002: Login mit falschem Passwort
─────────────────────────────────────────
GIVEN:  Benutzer existiert
WHEN:   Benutzer gibt falsches Passwort ein
THEN:   Fehlermeldung: "Falsches Passwort"
STATUS: ✓ PASS

═══════════════════════════════════════════════════

TESTFALL #003: Login mit nicht-existentem User
─────────────────────────────────────────
GIVEN:  Benutzer existiert NICHT
WHEN:   Benutzer gibt unbekannte Email ein
THEN:   Fehlermeldung: "Benutzer nicht gefunden"
STATUS: ✗ FAIL (keine Meldung, Bug!)

═══════════════════════════════════════════════════

TESTFALL #004: Login mit leerem Passwort
─────────────────────────────────────────
GIVEN:  Login-Seite geöffnet
WHEN:   Benutzer lässt Passwort-Feld leer
THEN:   Fehlermeldung: "Passwort erforderlich"
STATUS: ✓ PASS

═══════════════════════════════════════════════════

TESTFALL #005: SQL-Injection Versuch
─────────────────────────────────────────
GIVEN:  Login-Seite geöffnet
WHEN:   Benutzer gibt SQL-Code ein: "' OR '1'='1"
THEN:   Eingabe wird sanitiert, Login fehlschlägt
STATUS: ✓ PASS
```

>[!tip] Praxis-Tipps für AP2
>1. **SMART-Testfälle:** Specific, Measurable, Achievable, Relevant, Time-bound
>2. **AAA-Pattern:** Arrange (Given), Act (When), Assert (Then)
>3. **Eindeutige IDs:** Immer Testfall-IDs vergeben (TC-001, TC-002, ...)
>4. **Reproduzierbar:** Testfall muss wiederholbar sein
>5. **Unabhängig:** Testfälle sollten nicht voneinander abhängen
>6. **Typische Fehler:**
>   - Zu vage Testschritte
>   - Erwartetes Ergebnis fehlt
>   - Keine Vorbedingungen angegeben
>7. **Dokumentation:** Auch fehlgeschlagene Tests dokumentieren!

## Verwandte Konzepte
- [[02 - RESOURCES/Notes/Äquivalenzklasse\|Äquivalenzklasse]] - Gruppierung von Testdaten
- [[Grenzwertanalyse\|Grenzwertanalyse]] - Testen an Grenzen
- [[02 - RESOURCES/Notes/Unit Test\|Unit Test]] - Automatisierte Tests
- [[Black-Box-Test\|Black-Box-Test]] - Testen ohne Code-Kenntnis
- [[White-Box-Test\|White-Box-Test]] - Testen mit Code-Kenntnis
- [[Testplan\|Testplan]] - Sammlung von Testfällen

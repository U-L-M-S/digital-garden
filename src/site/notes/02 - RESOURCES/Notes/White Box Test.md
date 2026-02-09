---
{"dg-publish":true,"permalink":"/02-resources/notes/white-box-test/","tags":["qualitaetssicherung/testing","testing/verfahren","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:20:22.000+01:00"}
---

>White Box Test ist eine Testmethode, bei der der interne Code bekannt ist und gezielt getestet wird.
>>Der Tester "sieht durch die Box" und prüft alle Code-Pfade, Verzweigungen und Anweisungen.

>[!summary] Was ist White Box Test?
>- **Strukturtest** mit Code-Kenntnis
>- **Entwicklersicht:** Sind alle Pfade korrekt?
>- **Code-Abdeckung** messen

```
WHITE BOX TEST - KONZEPT

       Tester sieht ALLES:

Eingabe           Code (sichtbar!)        Ausgabe
  │                     │                    │
  ▼                     ▼                    ▼
┌───┐    ┌──────────────────────┐         ┌───┐
│ 5 │───>│ if (a > 0) {         │────────>│ 8 │
│ + │    │   result = a + b;    │         │   │
│ 3 │    │ } else {             │         └───┘
└───┘    │   result = 0;        │
         │ }                    │
         │ return result;       │
         └──────────────────────┘
                  │
         Tester prüft:
         • Alle if-Zweige getestet?
         • Alle Pfade durchlaufen?
         • Edge Cases bedacht?
```

>[!important] White Box Test Merkmale
>**4 Haupteigenschaften:**
>
>1. **Vollständige Code-Sichtbarkeit**
>   - Tester MUSS Code lesen können
>   - Versteht interne Logik
>
>2. **Strukturelle Testabdeckung**
>   - Alle Code-Zeilen testen
>   - Alle Verzweigungen prüfen
>
>3. **Pfad- und Verzweigungstests**
>   - Jede if/else-Bedingung testen
>   - Jede Schleife durchlaufen
>
>4. **[[02 - RESOURCES/Notes/Code Coverage\|Code Coverage]]-Messung**
>   - Wie viel % des Codes getestet?
>   - Tools messen automatisch

>[!example] Überdeckungsarten (Coverage)
>
>```java
>// Beispiel-Code:
>public int calculate(int a, int b) {
>    int result;                    // Zeile 1
>    if (a > 0) {                   // Zeile 2
>        result = a + b;            // Zeile 3
>    } else {                       // Zeile 4
>        result = 0;                // Zeile 5
>    }
>    return result;                 // Zeile 6
>}
>```
>
>**1. Statement Coverage (Anweisungsüberdeckung)**
>```
>Ziel: Jede Zeile einmal ausführen
>
>Test 1: calculate(5, 3)
>  → Zeilen: 1, 2, 3, 6 ✓
>
>Test 2: calculate(-1, 3)
>  → Zeilen: 1, 2, 5, 6 ✓
>
>Coverage: 100% (alle Zeilen getestet)
>```
>
>**2. Branch Coverage (Zweigüberdeckung)**
>```
>Ziel: Jede if/else-Verzweigung testen
>
>Test 1: a > 0  → TRUE-Zweig  ✓
>Test 2: a <= 0 → FALSE-Zweig ✓
>
>Coverage: 100% (beide Zweige)
>```
>
>**3. Path Coverage (Pfadüberdeckung)**
>```
>Ziel: ALLE möglichen Pfade durch Code
>
>Bei komplexem Code sehr aufwändig!
>```

```
COVERAGE-ARTEN IM VERGLEICH

Statement Coverage (am einfachsten)
     │
     ▼
┌────────────────────────┐
│ Jede Zeile einmal      │
│ ausführen              │
└────────────────────────┘
     │
     ▼
Branch Coverage
     │
     ▼
┌────────────────────────┐
│ Jede Verzweigung       │
│ (if/else) testen       │
└────────────────────────┘
     │
     ▼
Path Coverage (am gründlichsten)
     │
     ▼
┌────────────────────────┐
│ ALLE Kombinationen     │
│ von Pfaden             │
└────────────────────────┘
```

>[!tip] Vorteile White Box Test
>✅ **Gründlich:** Alle Code-Pfade werden geprüft mit [[02 - RESOURCES/Notes/Unit Testing\|Unit Testing]]
>✅ **Früh einsetzbar:** Während der Entwicklung
>✅ **Optimierung:** Findet ineffizienten Code
>✅ **Messbar:** [[02 - RESOURCES/Notes/Code Coverage\|Code Coverage]] in %

>[!warning] Nachteile White Box Test
>❌ **Code-Kenntnis nötig:** Tester muss programmieren können
>❌ **Zeitaufwändig:** Viele Tests für komplexen Code
>❌ **Nicht benutzernah:** Fokus auf Technik, nicht auf UX
>❌ **Keine Garantie:** 100% Coverage ≠ fehlerfrei!

```
WHITE BOX TEST - ABLAUF

┌──────────────────────┐
│ 1. CODE ANALYSIEREN  │
│  Struktur verstehen  │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 2. PFADE             │
│    IDENTIFIZIEREN    │
│  • if-Zweige         │
│  • Schleifen         │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 3. [[Testfall|TESTFÄLLE]] FÜR     │
│    JEDEN PFAD        │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 4. COVERAGE MESSEN   │
│  Wurde alles         │
│  getestet?           │
└──────────────────────┘
```

>[!warning] Wichtiger Hinweis
>**100% [[02 - RESOURCES/Notes/Code Coverage\|Code Coverage]] garantiert NICHT fehlerfreie Software!**
>
>Warum?
>- Kann Logikfehler übersehen
>- Testet nicht alle Eingabe-Kombinationen
>- Anforderungen könnten falsch sein
>
>**Kombination ist best Practice:**
>White Box + [[02 - RESOURCES/Notes/Black Box Test\|Black Box Test]] = Optimale Abdeckung

>[!note] White Box vs [[02 - RESOURCES/Notes/Black Box Test\|Black Box Test]]
>
>| Merkmal | White Box | [[02 - RESOURCES/Notes/Black Box Test\|Black Box Test]] |
>|---------|-----------|-------------|
>| **Code-Kenntnis** | Ja, vollständig | Nein |
>| **Perspektive** | Entwickler | Benutzer |
>| **Testet** | Interne Struktur | Funktionalität |
>| **Abdeckung** | Code Coverage | Anforderungen |
>| **Zeitpunkt** | Während Entwicklung | Nach Fertigstellung |
>
>**Praxis-Tipp:** Beide Methoden kombinieren!
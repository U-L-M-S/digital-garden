---
{"dg-publish":true,"permalink":"/02-resources/notes/black-box-test/","tags":["qualitaetssicherung/testing","testing/verfahren","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:20:43.437+01:00"}
---

>Black Box Test ist eine Testmethode, bei der Software getestet wird, ohne den internen Code zu kennen.
>>Der Tester sieht nur Eingabe und Ausgabe - wie eine "schwarze Box" die man von außen prüft.

>[!summary] Was ist Black Box Test?
>- **Funktionstest** ohne Code-Kenntnis
>- **Benutzersicht:** Funktioniert es wie erwartet?
>- **Eingabe → Black Box → Ausgabe**

```
BLACK BOX TEST - KONZEPT

       Tester sieht nur:

Eingabe              Ausgabe
  │                     │
  ▼                     ▼
┌───┐    ┌─────────┐  ┌───┐
│ 5 │───>│ ░░░░░░░ │─>│ 25│
│ + │    │ ░░░░░░░ │  │   │
│ 3 │    │ ░BLACK░ │  └───┘
└───┘    │ ░░BOX░░ │
         │ ░░░░░░░ │  Erwartung: 8
         └─────────┘  Ergebnis:  25 ❌
              │
              │       FEHLER GEFUNDEN!
          Code ist      (ohne Code
          unbekannt      zu sehen)
```

>[!important] Black Box Test Merkmale
>**4 Haupteigenschaften:**
>
>1. **Keine Code-Kenntnis nötig**
>   - Tester muss nicht programmieren können
>   - Fokus auf Funktionalität
>
>2. **Basiert auf Anforderungen**
>   - Was soll die Software tun?
>   - Spezifikation als Grundlage
>
>3. **Benutzerperspektive**
>   - Wie würde ein Kunde testen?
>   - Realitätsnahe Szenarien
>
>4. **Unabhängig von Implementierung**
>   - Egal welche Programmiersprache
>   - Egal wie der Code aussieht

>[!example] Test-Techniken im Black Box Test
>
>**1. [[02 - RESOURCES/Notes/Äquivalenzklasse\|Äquivalenzklasse]]nbildung**
>```
>Beispiel: Altersangabe (0-100)
>
>Klassen:
>  └→ Gültig:    1-100  ([[Testfall]]: 50)
>  └→ Ungültig: <0     ([[Testfall]]: -5)
>  └→ Ungültig: >100   ([[Testfall]]: 150)
>```
>
>**2. Grenzwertanalyse**
>```
>Grenzwerte testen:
>  └→ 0, 1, 99, 100, 101
>  (Fehler passieren oft an Grenzen!)
>```
>
>**3. Zustandsbasierte Tests**
>```
>Login-System:
>  Ausgeloggt → Einloggen → Eingeloggt
>  Eingeloggt → Ausloggen → Ausgeloggt
>```

```
BLACK BOX TEST - ABLAUF

┌──────────────────────┐
│ 1. ANFORDERUNGEN     │
│    lesen             │
│  "Rechner soll       │
│   addieren"          │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 2. TESTFÄLLE         │
│    erstellen         │
│  • 5 + 3 = 8         │
│  • 0 + 0 = 0         │
│  • -2 + 5 = 3        │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 3. TESTS AUSFÜHREN   │
│  Eingaben testen     │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ 4. ERGEBNISSE        │
│    VERGLEICHEN       │
│  Soll ↔ Ist          │
└──────────────────────┘
```

>[!tip] Vorteile Black Box Test
>✅ **Unabhängigkeit:** Tester braucht keine Programmierkenntnisse
>✅ **Benutzernah:** Tests aus Kundensicht
>✅ **Früh einsetzbar:** Sobald Anforderungen klar sind
>✅ **Objektiv:** Nicht durch Code-Struktur beeinflusst

>[!warning] Nachteile Black Box Test
>❌ **Keine Code-Abdeckung:** Kann nicht alle Code-Pfade testen
>❌ **Ineffizient:** Viele Tests nötig
>❌ **Versteckte Fehler:** Interne Logikfehler werden übersehen

>[!note] Black Box vs [[02 - RESOURCES/Notes/White Box Test\|White Box Test]]
>**Hauptunterschied:**
>- **Black Box:** Tester kennt Code NICHT
>- **[[02 - RESOURCES/Notes/White Box Test\|White Box Test]]:** Tester kennt Code und testet interne Logik mit [[02 - RESOURCES/Notes/Unit Testing\|Unit Testing]]
>
>**Kombiniert ergeben sie die beste Testabdeckung!**
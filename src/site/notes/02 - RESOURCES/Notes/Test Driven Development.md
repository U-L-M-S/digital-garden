---
{"dg-publish":true,"permalink":"/02-resources/notes/test-driven-development/","tags":["programmierung/methoden","qualitaetssicherung/agile","GFN/prüfungsrelevant/AP2","AP2025/neu"],"noteIcon":"","updated":"2025-11-12T15:22:53.209+01:00"}
---


>[[02 - RESOURCES/Notes/Test Driven Development\|Test Driven Development]] (TDD) ist eine Methode in der Softwareentwicklung. Du schreibst zuerst die Tests und dann erst den Code.

>>TDD folgt einem klaren Ablauf: Roter Test (Test schlägt fehl) → Grüner Test (Code funktioniert) → Code verbessern.

# I. Der TDD-Zyklus

>Die drei Schritte von TDD - immer wieder wiederholen.

>[!important] Red-Green-Refactor
>**1. RED (Rot) - Test schreiben:**
>- Schreibe einen Test für eine neue Funktion
>- Der Test schlägt fehl (keine Implementierung)
>- Das ist gut! Zeigt, dass der Test funktioniert
>
>**2. GREEN (Grün) - Code schreiben:**
>- Schreibe nur so viel Code wie nötig
>- Der [[02 - RESOURCES/Notes/Testfall\|Testfall]] muss erfolgreich sein
>- Keine Optimierung jetzt!
>
>**3. REFACTOR (Verbessern) - Code aufräumen:**
>- Code sauberer machen
>- Doppelten Code entfernen
>- Tests bleiben grün

```
ASCII-Zyklus:

    ┌─────────────┐
    │   1. RED    │  Test schreiben
    │   (Fehlt)   │  (schlägt fehl)
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  2. GREEN   │  Code schreiben
    │  (Klappt!)  │  (Test läuft)
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │ 3. REFACTOR │  Code verbessern
    │ (Schöner!)  │  (bleibt grün)
    └──────┬──────┘
           │
           └──────────────┐
                          │
                          ▼
                    Zurück zu RED
```

# II. Praktisches Beispiel

>So sieht TDD in der Praxis aus - Schritt für Schritt.

>[!example] Taschenrechner mit TDD erstellen
>
>**Schritt 1 - RED (Test zuerst):**
>```java
>@Test
>public void testAddition() {
>    Calculator rechner = new Calculator();
>    int ergebnis = rechner.add(2, 3);
>    assertEquals(5, ergebnis);
>}
>// Test schlägt fehl: Calculator existiert nicht!
>```
>
>**Schritt 2 - GREEN (Minimal-Code):**
>```java
>public class Calculator {
>    public int add(int a, int b) {  // [[Methode]]
>        return a + b;
>    }
>}
>// Test ist grün: Funktioniert!
>```
>
>**Schritt 3 - REFACTOR (Verbessern):**
>```java
>public class Calculator {
>    // Code ist schon gut - nichts zu verbessern
>    public int add(int a, int b) {
>        return a + b;
>    }
>}
>```

>[!example] Komplexeres Beispiel - Division
>```java
>// 1. RED - Test für Division
>@Test
>public void testDivisionDurchNull() {
>    Calculator rechner = new Calculator();
>    assertThrows(IllegalArgumentException.class,
>        () -> rechner.divide(10, 0));
>}
>
>// 2. GREEN - Code schreiben
>public double divide(int a, int b) {
>    if (b == 0) {
>        throw new IllegalArgumentException("Division durch Null!");  // [[Exception]]
>    }
>    return (double) a / b;
>}
>
>// 3. REFACTOR - Fehlermeldung verbessern
>public double divide(int a, int b) {
>    if (b == 0) {
>        throw new IllegalArgumentException(  // [[Exception]]
>            "Fehler: Division durch " + b + " ist nicht erlaubt!"
>        );
>    }
>    return (double) a / b;
>}
>```

# III. Vorteile von TDD

>Warum TDD verwenden? Das sind die Vorteile.

>[!success] Hauptvorteile
>**Besserer Code:**
>- Code ist automatisch testbar
>- Weniger Bugs
>- Einfacher zu verstehen
>
>**Schnellere Entwicklung:**
>- Fehler werden sofort gefunden
>- Keine langen [[02 - RESOURCES/Notes/Debugging\|Debugging]]-Sessions
>- Änderungen sind sicher
>
>**Besseres Design:**
>- Code ist modular aufgebaut
>- Klare Schnittstellen
>- Leichter zu erweitern
>
>**Hohe Testabdeckung:**
>- Fast 100% [[02 - RESOURCES/Notes/Code Coverage\|Code Coverage]]
>- Alle wichtigen Fälle getestet mit [[02 - RESOURCES/Notes/Unit Testing\|Unit Testing]]
>- Dokumentation durch Tests

```
TDD vs. Traditionell:

Traditionell:           TDD:
┌─────────┐            ┌─────────┐
│  Code   │            │  Test   │
│ schreib │            │ schreib │
│   en    │            │   en    │
└────┬────┘            └────┬────┘
     │                      │
     ▼                      ▼
┌─────────┐            ┌─────────┐
│  Testen │            │  Code   │
│ (später)│            │ schreib │
└────┬────┘            │   en    │
     │                 └────┬────┘
     ▼                      │
  Viele Bugs               ▼
  gefunden!           ┌─────────┐
                      │ Refactor│
                      └────┬────┘
                           │
                           ▼
                      Wenig Bugs!
```

# IV. Nachteile und Herausforderungen

>TDD ist nicht perfekt - das musst du beachten.

>[!warning] Herausforderungen
>**Zeitaufwand am Anfang:**
>- Tests schreiben braucht Zeit
>- Lernen dauert
>- Fühlt sich langsam an
>
>**Disziplin nötig:**
>- Immer Tests zuerst schreiben
>- Nicht schummeln!
>- Team muss mitmachen
>
>**Nicht für alles geeignet:**
>- Prototypen
>- Einmalige Scripts
>- Sehr einfache Programme

>[!tip] Tipps für den Einstieg
>- Starte mit kleinen Projekten
>- Übe den Red-Green-Refactor-Zyklus
>- Nutze [[02 - RESOURCES/Notes/Unit Testing\|Unit Testing]]-Frameworks (JUnit, pytest)
>- Schreibe einfache Tests zuerst
>- Verbessere mit der Zeit
>- Nutze [[02 - RESOURCES/Notes/Code Coverage\|Code Coverage]]-Tools

# V. TDD in der Prüfung

>Was du für die [[02 - RESOURCES/Notes/IHK\|IHK]]-Prüfung wissen musst.

>[!important] Prüfungsrelevant
>**Definition können:**
>- TDD = Test Driven Development
>- Tests vor dem Code schreiben
>- Red-Green-Refactor-Zyklus
>
>**Vorteile nennen:**
>- Bessere Codequalität
>- Weniger Fehler
>- Automatische Tests
>- Dokumentation
>
>**Ablauf erklären:**
>1. Roten Test schreiben
>2. Code zum Bestehen schreiben
>3. Code verbessern (Refactoring)
>4. Wiederholen

>[!example] Typische Prüfungsfrage
>**Frage:** "Erklären Sie den TDD-Zyklus mit einem Beispiel."
>
>**Antwort:**
>Der TDD-Zyklus besteht aus drei Schritten:
>
>1. **RED**: Zuerst schreibe ich einen Test für eine Addition-Methode. Der Test schlägt fehl, weil die Methode noch nicht existiert.
>
>2. **GREEN**: Ich implementiere die Methode mit minimalem Code. Der Test wird grün.
>
>3. **REFACTOR**: Ich verbessere den Code, z.B. bessere Variablennamen. Die Tests bleiben grün.
>
>Danach beginne ich wieder bei RED für die nächste Funktion.
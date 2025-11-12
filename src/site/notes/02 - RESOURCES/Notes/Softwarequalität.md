---
{"dg-publish":true,"permalink":"/02-resources/notes/softwarequalitaet/","tags":["informatik/softwareentwicklung","ausbildung/gfn/ap2/vorbereitung","qualität/software"],"noteIcon":"","updated":"2025-11-07T15:13:15.000+01:00"}
---

>**Softwarequalität** beschreibt, wie gut eine [[02 - RESOURCES/Notes/Software\|Software]] ihre Aufgabe erfüllt und den Anforderungen entspricht.
>>Qualität bedeutet: Die [[02 - RESOURCES/Notes/Software\|Software]] tut was sie soll - **zuverlässig, sicher und benutzerfreundlich**.

>[!important] Warum ist Softwarequalität wichtig?
>- Zufriedene Benutzer
>- Weniger Fehler und Abstürze
>- Geringere Wartungskosten
>- Bessere [[02 - RESOURCES/Notes/Wartbarkeit\|Wartbarkeit]] und [[02 - RESOURCES/Notes/Erweiterbarkeit\|Erweiterbarkeit]]
>- Höhere Sicherheit

---

# ISO 25010 Qualitätsmodell

>Die internationale Norm **ISO 25010** definiert 8 Hauptkategorien für Softwarequalität:

```
┌─────────────────────────────────────┐
│      ISO 25010 Qualitätsmodell      │
├─────────────────────────────────────┤
│ 1. Funktionale Tauglichkeit         │
│ 2. Leistungseffizienz (Performance) │
│ 3. Kompatibilität                   │
│ 4. Benutzbarkeit (Usability)        │
│ 5. Zuverlässigkeit                  │
│ 6. Sicherheit                       │
│ 7. Wartbarkeit                      │
│ 8. Übertragbarkeit                  │
└─────────────────────────────────────┘
```

---

# Die 8 Qualitätsmerkmale

## 1. Funktionale Tauglichkeit

>Erfüllt die [[02 - RESOURCES/Notes/Software\|Software]] die funktionalen Anforderungen?

**Unterkriterien:**
- **Funktionale Vollständigkeit** - Sind alle Funktionen vorhanden?
- **Funktionale Korrektheit** - Funktioniert alles richtig?
- **Funktionale Angemessenheit** - Sind die Funktionen sinnvoll?

>[!example] Beispiel
>✅ Ein Online-Shop muss Produkte anzeigen, in den Warenkorb legen und bezahlen können.
>
>❌ Wenn der Bezahlvorgang fehlt → keine funktionale Vollständigkeit

---

## 2. Leistungseffizienz (Performance)

>Wie effizient nutzt die [[02 - RESOURCES/Notes/Software\|Software]] Ressourcen?

**Unterkriterien:**
- **Zeitverhalten** - Wie schnell antwortet das System?
- **Ressourcennutzung** - [[02 - RESOURCES/Notes/Speicher\|Speicher]], CPU, Netzwerk
- **Kapazität** - Wie viele Nutzer/Daten verkraftet es?

>[!example] Beispiel
>- Login sollte unter 2 Sekunden erfolgen
>- Datenbank-Abfrage < 500ms
>- System sollte 10.000 gleichzeitige Nutzer verarbeiten

---

## 3. Kompatibilität

>Kann die [[02 - RESOURCES/Notes/Software\|Software]] mit anderen Systemen zusammenarbeiten?

**Unterkriterien:**
- **Koexistenz** - Funktioniert mit anderer [[02 - RESOURCES/Notes/Software\|Software]] auf demselben System
- **Interoperabilität** - Kann Daten austauschen mit anderen Systemen

>[!example] Beispiel
>- Word-Dokumente in LibreOffice öffnen
>- [[02 - RESOURCES/Notes/REST API\|REST API]] für externe Systeme
>- [[02 - RESOURCES/Notes/ODBC\|ODBC]] für verschiedene [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]en

---

## 4. Benutzbarkeit ([[02 - RESOURCES/Notes/Usability\|Usability]])

>Wie einfach ist die [[02 - RESOURCES/Notes/Software\|Software]] zu bedienen?

**Unterkriterien:**
- **Erkennbarkeit** - Benutzer verstehen, was die [[02 - RESOURCES/Notes/Software\|Software]] kann
- **Erlernbarkeit** - Schnell zu lernen
- **Bedienbarkeit** - Einfach zu bedienen
- **Fehlerrobustheit** - Schützt vor Fehlbedienung
- **Ästhetik** - Ansprechendes Design
- **Zugänglichkeit** - Barrierefreiheit

>[!example] Beispiel
>✅ Klare Beschriftung von Buttons
>✅ Intuitive Navigation
>✅ Hilfetexte und Tooltips
>✅ Responsive Design für Mobilgeräte

---

## 5. Zuverlässigkeit

>Funktioniert die [[02 - RESOURCES/Notes/Software\|Software]] stabil und fehlerfrei?

**Unterkriterien:**
- **Reife** - Wie häufig treten Fehler auf?
- **[[02 - RESOURCES/Notes/Verfügbarkeit\|Verfügbarkeit]]** - Uptime (z.B. 99,9%)
- **Fehlertoleranz** - System funktioniert trotz Fehlern weiter
- **Wiederherstellbarkeit** - Schnelle Wiederherstellung nach Ausfall

>[!example] Beispiel
>- **99,9% Uptime** = max. 8,76 Stunden Ausfall pro Jahr
>- Automatisches Backup
>- Graceful Degradation (Teilfunktionen bei Ausfall)

---

## 6. Sicherheit

>Ist die [[02 - RESOURCES/Notes/Software\|Software]] vor Angriffen geschützt?

**Unterkriterien:**
- **Vertraulichkeit** - Unbefugte können keine Daten lesen
- **Integrität** - Daten können nicht manipuliert werden
- **Nachweisbarkeit** - Aktionen sind nachvollziehbar (Logs)
- **Authentizität** - Identität wird überprüft
- **Verantwortlichkeit** - Aktionen sind Nutzern zuordenbar

>[!example] Beispiel
>- Passwörter [[02 - RESOURCES/Notes/Verschlüsselung\|verschlüsselt]] speichern
>- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] für Kommunikation
>- Schutz vor [[02 - RESOURCES/Notes/SQL Injection\|SQL Injection]]
>- Schutz vor [[02 - RESOURCES/Notes/DDOS Attack\|DDoS Attack]]
>- Schutz vor [[02 - RESOURCES/Notes/Man-in-the-Middle Attack\|Man-in-the-Middle Attack]]

---

## 7. [[02 - RESOURCES/Notes/Wartbarkeit\|Wartbarkeit]]

>Wie einfach lässt sich die [[02 - RESOURCES/Notes/Software\|Software]] ändern und erweitern?

🆕 **Verstärkt im Prüfungskatalog 2025!**

**Unterkriterien:**
- **Modularität** - Code ist in Module aufgeteilt
- **Wiederverwendbarkeit** - Code kann mehrfach genutzt werden
- **Analysierbarkeit** - Fehler sind schnell zu finden
- **[[02 - RESOURCES/Notes/Änderbarkeit\|Änderbarkeit]]** - Einfach anzupassen
- **Testbarkeit** - Gut testbar
- **[[02 - RESOURCES/Notes/Erweiterbarkeit\|Erweiterbarkeit]]** - Neue Funktionen einfach hinzufügen

>[!example] Beispiel
>✅ Klare Code-Struktur
>✅ Gute Dokumentation
>✅ [[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]] verwenden
>✅ Unit Tests
>✅ Code-Reviews

---

## 8. Übertragbarkeit

>Kann die [[02 - RESOURCES/Notes/Software\|Software]] in verschiedenen Umgebungen laufen?

**Unterkriterien:**
- **Anpassbarkeit** - Leicht an andere Umgebungen anpassbar
- **Installierbarkeit** - Einfach zu installieren
- **Austauschbarkeit** - Kann andere [[02 - RESOURCES/Notes/Software\|Software]] ersetzen

>[!example] Beispiel
>- Läuft auf Windows, Linux, macOS
>- Docker-Container für einfache Installation
>- Plattformunabhängiger Code (Java, Python)

---

# Qualitätssicherung (QA)

>**Quality Assurance** - Maßnahmen zur Sicherstellung der Qualität.

## Testing-Strategien

### [[02 - RESOURCES/Notes/Test Driven Development\|Test Driven Development]] (TDD)
>Erst Tests schreiben, dann Code.

🆕 **Neu im Katalog 2025!**

**TDD-Zyklus:**
1. **Red** - Test schreiben (schlägt fehl)
2. **Green** - Code schreiben (Test erfolgreich)
3. **Refactor** - Code verbessern

### Test-Pyramide
```
        /\
       /E2E\      ← Wenige End-to-End Tests
      /──────\
     /Integr.\   ← Mittlere Anzahl Integrationstests
    /──────────\
   /Unit Tests \  ← Viele Unit Tests
  /──────────────\
```

**Unit Tests:**
- Testen einzelne Funktionen/Methoden
- Schnell, viele davon
- Beispiel: `testCalculateSum()`

**Integrationstests:**
- Testen Zusammenspiel mehrerer Komponenten
- Mittlere Geschwindigkeit
- Beispiel: Controller + [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]

**End-to-End Tests:**
- Testen gesamten Ablauf
- Langsam, wenige davon
- Beispiel: Kompletter Login-Prozess

### [[02 - RESOURCES/Notes/Last- und Performancetest\|Last- und Performancetest]]

🆕 **Neu im Katalog 2025!**

>Testet, wie sich das System unter Last verhält.

**Was wird getestet:**
- Wie viele gleichzeitige Nutzer?
- Antwortzeiten unter Last
- Wo sind Engpässe?
- Stabilitätstest über lange Zeit

**Tools:**
- JMeter
- Gatling
- LoadRunner

---

# Code-Qualität

>[!success] Merkmale guten Codes
>- **Lesbar** - Andere verstehen den Code
>- **Konsistent** - Einheitlicher Stil
>- **Kommentiert** - Wichtige Stellen erklärt
>- **DRY** - Don't Repeat Yourself
>- **KISS** - Keep It Simple, Stupid
>- **SOLID**-Prinzipien befolgen

>[!warning] Code Smells (schlechter Code)
>- ❌ Duplizierter Code
>- ❌ Zu lange Methoden
>- ❌ Zu große Klassen
>- ❌ Zu viele Parameter
>- ❌ Hardcodierte Werte
>- ❌ Verschachtelte if-else Ketten

---

# Qualitätsmetriken

## Code Coverage
>Wie viel Prozent des Codes wird von Tests abgedeckt?

**Ziel:** Mindestens 80% Coverage

```java
// Beispiel: 2 von 3 Zeilen getestet = 66% Coverage
public int divide(int a, int b) {
    if (b == 0) return 0;  // ✅ Getestet
    return a / b;           // ✅ Getestet
    // Diese Zeile wird nie erreicht ❌
}
```

## Zyklomatische Komplexität
>Anzahl der möglichen Pfade durch den Code.

**Faustregel:**
- 1-10: Einfach, gut wartbar
- 11-20: Komplex, aber ok
- 21+: Zu komplex, refactorn!

## Technical Debt
>Wie viel "Schulden" hat man durch schnelle/schlechte Lösungen?

**Arten:**
- Code Debt - Schlechter Code
- Design Debt - Schlechte Architektur
- Documentation Debt - Fehlende Doku

---

# Best Practices

>[!success] Qualität von Anfang an
>- ✅ Tests schreiben ([[02 - RESOURCES/Notes/Test Driven Development\|Test Driven Development]])
>- ✅ Code-Reviews durchführen
>- ✅ Automatisierte Tests (CI/CD)
>- ✅ Coding Standards definieren
>- ✅ Regelmäßig refactorn
>- ✅ Dokumentation aktuell halten
>- ✅ Security von Beginn an mitdenken

>[!warning] Häufige Fehler
>- ❌ "Das testen wir später" (passiert nie)
>- ❌ Nur auf Features fokussieren, Qualität ignorieren
>- ❌ Keine Code-Reviews
>- ❌ Technical Debt ignorieren
>- ❌ Fehlende Dokumentation

---

# Qualität messen

## Checkliste für gute [[02 - RESOURCES/Notes/Software\|Software]]

- [ ] Alle funktionalen Anforderungen erfüllt?
- [ ] Performance-Anforderungen erfüllt? (z.B. < 2s Ladezeit)
- [ ] [[02 - RESOURCES/Notes/Verfügbarkeit\|Verfügbarkeit]] ausreichend? (z.B. 99,9% Uptime)
- [ ] Sicherheitsanforderungen erfüllt?
- [ ] [[02 - RESOURCES/Notes/Usability\|Usability]]-Tests durchgeführt?
- [ ] Code-Coverage > 80%?
- [ ] Alle kritischen Bugs behoben?
- [ ] Dokumentation vollständig?
- [ ] [[02 - RESOURCES/Notes/Last- und Performancetest\|Last- und Performancetest]] durchgeführt?

---

**Siehe auch:**
- [[02 - RESOURCES/Notes/Wartbarkeit\|Wartbarkeit]]
- [[02 - RESOURCES/Notes/Änderbarkeit\|Änderbarkeit]]
- [[02 - RESOURCES/Notes/Erweiterbarkeit\|Erweiterbarkeit]]
- [[02 - RESOURCES/Notes/Usability\|Usability]]
- [[02 - RESOURCES/Notes/Verfügbarkeit\|Verfügbarkeit]]
- [[02 - RESOURCES/Notes/Test Driven Development\|Test Driven Development]]
- [[02 - RESOURCES/Notes/Last- und Performancetest\|Last- und Performancetest]]
- [[02 - RESOURCES/Notes/Softwarearchitektur\|Softwarearchitektur]]
- [[02 - RESOURCES/Notes/Design Patterns\|Design Patterns]]

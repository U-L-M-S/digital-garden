---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-2/lf-10-benutzerschnittstellen-gestalten-und-entwickeln/","tags":["GFN/LF10","inProgress"],"noteIcon":"","updated":"2025-08-27T17:37:16.000+02:00"}
---

> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.

# I. [[02 - RESOURCES/Notes/User Interface\|User Interface]] - Die Verbindung zwischen Mensch und Maschine

---

> Stell dir vor, du willst mit einem Computer sprechen - aber ihr habt keine gemeinsame Sprache. Das [[02 - RESOURCES/Notes/User Interface\|User Interface]] ist der Übersetzer zwischen dir und der Maschine.

## Was ist ein [[02 - RESOURCES/Notes/User Interface\|User Interface]]?

Eine **Benutzerschnittstelle** (User Interface, UI) **verbindet Menschen mit Computern**. Sie ist überall: in Software, Apps, Maschinen und Haushaltsgeräten. Ohne UI könntest du deinen Computer nicht bedienen.

**Warum brauchen wir UIs?**

- Menschen denken anders als Computer
- Computer verstehen nur 0 und 1
- Menschen brauchen Bilder, Texte, Knöpfe

## Die Grundbausteine

UI arbeitet mit **Eingabe- und Ausgabegeräten**:

### [[Eingabegeräte\|Eingabegeräte]]

Damit sagst du dem Computer, was er tun soll:

- Maus, Tastatur, Touchscreen
- Knöpfe, Schalter, Sensoren
- Mikrofon für Sprachsteuerung

### [[Ausgabegeräte\|Ausgabegeräte]]

Damit antwortet der Computer:

- Bildschirm, Lautsprecher, Drucker
- LEDs, Vibration
- Manchmal gar keine Ausgabe (wie bei einem Lichtschalter)

## Die Evolution der Benutzeroberflächen

### [[Hardware User Interface\|Hardware User Interface]]

Die einfachste Form: **Physische Knöpfe und Schalter**

- Lichtschalter, Tasten am Radio
- Direkte, mechanische Bedienung
- "Was du drückst, passiert sofort"

### [[Batch Interface\|Batch Interface]]

Die Steinzeit der Computer: **Lochkarten-Ära**

- Ganzes Programm auf Lochkarten
- Ein Fehler = Alles neu stanzen
- Wie einen Brief zur Post bringen: Hin und warten

### [[Text-based User Interface (CLI)\|Text-based User Interface (CLI)]]

Die **Kommandozeile** - nur Text, keine Bilder:

**Vorteile:**

- Sehr schnell für Profis
- Braucht wenig Speicher
- Skripte automatisieren alles

**Nachteile:**

- Braucht Programmierkenntnisse
- Keine Maus, nur Tastatur
- Fehleranfällig

### [[Menu-driven User Interface\|Menu-driven User Interface]]

**Menüs** machen es einfacher:

- Erste benutzerfreundliche Oberfläche
- Zeigt alle verfügbaren Optionen
- Wie eine Speisekarte im Restaurant

**Problem:** Bei vielen Funktionen wird es unübersichtlich

### [[Graphical User Interface (GUI)\|Graphical User Interface (GUI)]]

**Windows, Mac, Smartphone** - das kennst du:

**Vorteile:**

- Schöne Bilder und Symbole
- Maus und Touch-Bedienung
- Intuitiv für fast jeden

**Nachteile:**

- Braucht viel Speicher und Rechenleistung
- Aufwändig zu programmieren

### [[Conversational User Interface (CUI)\|Conversational User Interface (CUI)]]

**Siri, Alexa, ChatGPT** - Sprechen wie mit Menschen:

**Vorteile:**

- Sehr natürlich
- Funktioniert ohne Bildschirm
- Emotional ansprechend

**Nachteile:**

- Versteht nicht immer richtig
- Schwer zu programmieren
- Kein visuelles Feedback

### [[Virtual Reality User Interface (VRUI)\|Virtual Reality User Interface (VRUI)]]

**VR-Brille** - Eintauchen in andere Welten:

- Steuerung durch Gesten und Bewegung
- Komplette Realität wird ersetzt
- Wie in einem 3D-Film mitspielen

### [[Brain-Computer User Interface (BCI)\|Brain-Computer User Interface (BCI)]]

**Gedankensteuerung** - Science Fiction wird real:

- Direkter Draht zwischen Gehirn und Computer
- Noch in der Forschung
- Hauptsächlich für medizinische Anwendungen

---

# II. [[02 - RESOURCES/Notes/Qualitätssicherung\|Qualitätssicherung]] - Wie gut ist gut genug?

---

> Stell dir vor, du kaufst ein Auto, aber die Bremsen funktionieren nur manchmal. Software ohne Qualitätssicherung ist genauso gefährlich - nur meist weniger offensichtlich.

## Was bedeutet **Qualität** bei Software?

**Qualität** = Software erfüllt alle Anforderungen gut. Das heißt: Sie tut, was sie soll, und zwar **zuverlässig, sicher und benutzerfreundlich**.

### Warum ist das wichtig?

- Benutzer werden schnell frustriert
- Schlechte Software kostet Geld und Zeit
- Sicherheitslücken können gefährlich werden
- Reparieren ist teurer als richtig machen

## Die 8 Qualitätskriterien (ISO/IEC 25010)

### [[Funktionale Vollständigkeit\|Funktionale Vollständigkeit]]

**Sind alle geforderten Funktionen da?**

- Wie ein Auto mit Motor, Bremsen, Licht
- Fehlt was? Dann ist es unvollständig

### [[Funktionale Korrektheit\|Funktionale Korrektheit]]

**Funktionieren die vorhandenen Funktionen richtig?**

- Das Auto fährt, aber lenkt nach links
- Software rechnet, aber falsch

### [[Gebrauchstauglichkeit (Qualitätssicherung)\|Gebrauchstauglichkeit (Qualitätssicherung)]]

**Können normale Menschen die Software bedienen?**

- Intuitiv wie ein Lichtschalter
- Kein Handbuch nötig für Grundfunktionen

### [[Sicherheit (Qualitätssicherung)\|Sicherheit (Qualitätssicherung)]]

**Sind Daten und Nutzer geschützt?**

- Wie ein Tresor für deine Geheimnisse
- Nur Berechtigte kommen rein

### [[Zuverlässigkeit (Qualitätssicherung)\|Zuverlässigkeit (Qualitätssicherung)]]

**Läuft die Software stabil ohne Abstürze?**

- Wie ein gutes Auto: Springt immer an
- Kein "hat schon wieder nicht funktioniert"

### [[Performanz (Qualitätssicherung)\|Performanz (Qualitätssicherung)]]

**Ist die Software schnell genug?**

- Reagiert sofort auf Klicks
- Braucht wenig Speicher und CPU

### [[Portierbarkeit (Qualitätssicherung)\|Portierbarkeit (Qualitätssicherung)]]

**Läuft die Software überall?**

- Windows, Mac, Smartphone
- Wie ein universeller USB-Stecker

### [[Kompatibilität (Qualitätssicherung)\|Kompatibilität (Qualitätssicherung)]]

**Arbeitet sie mit anderen Programmen zusammen?**

- Kann Word-Dateien öffnen
- Teilt Daten mit anderen Apps

### [[Wartbarkeit (Qualitätssicherung)\|Wartbarkeit (Qualitätssicherung)]]

**Lässt sich der Code einfach ändern?**

- Wie ein Auto mit zugänglichem Motor
- Neue Funktionen sind einfach zu ergänzen

## Wie testet man Software?

### Der [[Testprozess\|Testprozess]] - Schritt für Schritt:

1. **Testplanung** - Wer testet was wann?
2. **Testentwurf** - Wie genau wird getestet?
3. **Testvorbereitung** - Testumgebung aufbauen
4. **Testdurchführung** - Tests durchführen
5. **Testauswertung** - Ergebnisse bewerten
6. **Testabschluss** - Alles dokumentieren

### Test-Philosophien:

#### [[Black-Box-Tests\|Black-Box-Tests]]

**Testen ohne in den Code zu schauen**

- Wie ein Auto-Test: Fährt es? Bremst es?
- Egal wie der Motor aussieht
- Findet Probleme, aber nicht deren Ursache

#### [[White-Box-Tests\|White-Box-Tests]]

**Testen mit Code-Kenntnis**

- Wie ein Mechaniker: Schaut unter die Haube
- Findet die genaue Fehlerquelle
- Übersieht manchmal das große Bild

### Die Test-Pyramide:

#### [[Komponententest (Unittest)\|Komponententest (Unittest)]]

**Testet einzelne Code-Teile**

- Wie Einzelteile im Auto prüfen
- Schnell und automatisierbar
- Findet Fehler früh und günstig

#### [[Integrationstest\|Integrationstest]]

**Testet das Zusammenspiel**

- Funktionieren Motor und Getriebe zusammen?
- Prüft Schnittstellen zwischen Modulen

#### [[Systemtest\|Systemtest]]

**Testet die komplette Anwendung**

- Das ganze Auto auf der Teststrecke
- Reale Bedingungen simulieren

#### [[Abnahmetest (Akzeptanztest)\|Abnahmetest (Akzeptanztest)]]

**Der Kunde testet vor Übergabe**

- Probefahrt vor dem Autokauf
- Letzte Chance, Probleme zu finden

## Weitere Qualitätsmaßnahmen

### [[Codeanalyse\|Codeanalyse]]

**Automatische Code-Prüfung**

- Wie Rechtschreibprüfung für Code
- Findet typische Fehler und Probleme

### [[Debugging\|Debugging]]

**Fehlersuche im Code**

- Wie ein Detektiv: Spuren verfolgen
- Schritt-für-Schritt durch den Code

### [[Code Review\|Code Review]]

**Kollegen schauen über den Code**

- Vier Augen sehen mehr als zwei
- Wissenstransfer im Team

### [[Pair Programming\|Pair Programming]]

**Zwei Entwickler, ein Computer**

- Einer tippt, einer denkt mit
- Weniger Fehler, bessere Ideen

---

# III. [[02 - RESOURCES/Notes/UX\|User Experience]] - Wie fühlt sich Software an?

---

> Stell dir vor, du gehst in ein Restaurant. Das Essen ist gut, aber der Service ist schlecht, es ist laut und das Klo ist dreckig. Kommst du wieder? [[User Experience\|User Experience]] ist das Gesamterlebnis mit einem Produkt.

## Was ist [[User Experience\|User Experience]]?

**UX** ist **mehr als nur schönes Design**. Es ist das komplette Erlebnis: Wie fühlt sich die Nutzung an? Macht es Spaß? Ist es frustrierend? Erreiche ich meine Ziele?

### Das [[UX-Honeycomb\|UX-Honeycomb]] - 7 Zutaten für gute UX:

#### [[Nützliche Software (UX)\|Nützliche Software (UX)]] - USEFUL

**Löst echte Probleme**

- Wie ein Regenschirm bei Regen
- Ohne Nutzen ist alles andere egal
- "Warum sollte ich das verwenden?"

#### [[Gebrauchstaugliche Software (UX)\|Gebrauchstaugliche Software (UX)]] - USABLE

**Einfach zu bedienen**

- Wie ein guter Korkenzieher: Tut was er soll
- Intuitive Bedienung ohne Handbuch
- Minimiert Fehler und Frustration

#### [[Attraktive Software (UX)\|Attraktive Software (UX)]] - DESIRABLE

**Sieht gut aus und spricht Gefühle an**

- Wie ein schönes Auto: Will man haben
- Erster Eindruck zählt
- Emotionale Bindung schaffen

#### [[Auffindbare Software (UX)\|Auffindbare Software (UX)]] - FINDABLE

**Man findet, was man sucht**

- Wie ein gut organisierter Laden
- Klare Navigation und Struktur
- Suchfunktionen helfen

#### [[Barrierefreie Software (UX)\|Barrierefreie Software (UX)]] - ACCESSIBLE

**Funktioniert für alle Menschen**

- Auch für Menschen mit Behinderungen
- Verschiedene Eingabemethoden
- Niemand wird ausgeschlossen

#### [[Glaubwürdige Software (UX)\|Glaubwürdige Software (UX)]] - CREDIBLE

**Schafft Vertrauen**

- Wie ein seriöser Laden mit klaren Preisen
- Transparent und ehrlich kommunizieren
- Verspricht nicht zu viel

#### [[Hochwertige Software (UX)\|Hochwertige Software (UX)]] - VALUABLE

**Bringt echten Wert**

- Wie ein gutes Werkzeug: Investition lohnt sich
- Professioneller Eindruck
- Respektiert Standards

## Die 10 UX-Gestaltungsprinzipien

### [[Sichtbarkeit des Systemzustands\|Sichtbarkeit des Systemzustands]]

**Zeige, was gerade passiert**

Stell dir vor, du drückst einen Aufzugsknopf - ohne Feedback weißt du nicht, ob er reagiert hat.

- **Sofortiges Feedback** bei Klicks
- **Ladebalken** bei längeren Prozessen
- **Status-Anzeigen**: "Nachricht wird gesendet..."

### [[Wirklichkeitsbezug (UX)\|Wirklichkeitsbezug (UX)]]

**Nutze bekannte Konzepte aus der realen Welt**

**Beispiele:**

- **"Papierkorb"** zum Löschen
- **"Einkaufswagen"** in Online-Shops
- **Kalender-Symbol** für Termine
- **Vertraute Sprache** statt Fachbegriffe

### [[Benutzerfreiheit (UX)\|Benutzerfreiheit (UX)]]

**Lass Nutzer selbst entscheiden**

Menschen machen Fehler und ändern ihre Meinung:

- **Zurück-Button** funktioniert immer
- **Rückgängig** für alle wichtigen Aktionen
- **Abbrechen** bei langen Prozessen möglich
- **Beenden** jederzeit erlaubt

### [[Konsistenz (UX)\|Konsistenz (UX)]]

**Gleiches sieht gleich aus und funktioniert gleich**

- **Externe Konsistenz**: Standards einhalten (Diskette = Speichern)
- **Interne Konsistenz**: Eigene Muster beibehalten
- **Gleiche Farben** für gleiche Funktionen
- **Buttons** immer an der gleichen Stelle

### [[Fehlervermeidung (UX)\|Fehlervermeidung (UX)]]

**Verhindere Fehler, statt sie nur zu korrigieren**

**Strategien:**

- **Eingabe-Hilfen**: Dropdown statt Freitext
- **Validierung**: "Passwort zu kurz" schon beim Tippen
- **Bestätigung**: "Wirklich löschen?" bei kritischen Aktionen
- **Klare Buttons**: Was passiert bei Klick?

### [[Merkhilfen (UX)\|Merkhilfen (UX)]]

**Wiedererkennen ist einfacher als sich erinnern**

- **Menüs** statt Kommandos eingeben
- **"Letzte Dateien"** anzeigen
- **Suchvorschläge** während dem Tippen
- **Sichtbare Navigation** immer verfügbar

### [[Flexibilität (UX)\|Flexibilität (UX)]]

**Verschiedene Wege für verschiedene Nutzer**

- **Anfänger**: Schritt-für-Schritt Assistenten
- **Profis**: Keyboard-Shortcuts und Bulk-Aktionen
- **Anpassbarkeit**: Benutzer kann Interface modifizieren
- **Verschiedene Eingabemethoden**: Maus, Touch, Keyboard

### [[Minimalismus und Ästhetik (UX)\|Minimalismus und Ästhetik (UX)]]

**Weniger ist mehr**

Der erste Eindruck entscheidet in Sekundenbruchteilen:

- **Aufgeräumtes Design** wirkt professionell
- **Zu viele Infos** überfordern
- **Fokus** auf das Wesentliche
- **"So viel wie nötig, so wenig wie möglich"**

### [[Fehlerbehandlung (UX)\|Fehlerbehandlung (UX)]]

**Wenn doch Fehler passieren: Hilf beim Lösen**

- **Klar erklären** was schiefging
- **Lösung anbieten** statt nur Problem nennen
- **Menschliche Sprache** statt Fehlercodes
- **Vertrauen erhalten** durch Transparenz

### [[Hilfe (UX)\|Hilfe (UX)]]

**Hilfe genau dann, wenn sie gebraucht wird**

- **Tooltips** für schnelle Erklärungen
- **Kontexthilfe** direkt im Interface
- **FAQ** für häufige Probleme
- **Suchbare Dokumentation** für komplexe Fälle

---

---

---

> [!info] Diese Zusammenfassung basiert auf den Materialien von Herrn [Alfred Walter](https://www.linkedin.com/in/artingo/?originalSubdomain=de).  
> Die Informationen und Konzepte wurden aus den von ihm bereitgestellten Lehrunterlagen und Vorlesungen entnommen. Alle Bilder, die hier gepostet wurden, wurden in meiner eigenen Umgebung erstellt, stammen aus dem Buch [Westermann](https://www.westermann.de/reihe/ITBERUF2020/IT-Berufe?a=1) oder aus den PDF-Präsentationen von Herrn [Alfred Walter](https://www.linkedin.com/in/artingo/?originalSubdomain=de).  
> Mein Ziel war es, die wesentlichen Punkte zusammenzufassen und die Kerninhalte verständlich darzustellen.
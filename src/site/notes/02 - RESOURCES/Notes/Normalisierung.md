---
{"dg-publish":true,"permalink":"/02-resources/notes/normalisierung/","tags":["informatik/datenbank","datenmodellierung","ausbildung/gfn/ap2/vorbereitung","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-10T14:53:08.507+01:00"}
---

> **Normalisierung** ist der Prozess, eine Datenbankstruktur so zu organisieren, dass [[02 - RESOURCES/Notes/Redundanzen\|Redundanzen]] minimiert und [[02 - RESOURCES/Notes/Anomalien\|Anomalien]] vermieden werden.

>> Durch die schrittweise Anwendung von Normalformen (1NF, 2NF, 3NF) wird eine effiziente, wartbare und konsistente Datenbank erstellt.

>[!important] Wichtig für die AP2-Prüfung
>Normalisierung kommt in **75% der Prüfungen** vor! ⭐⭐⭐
>- Erkennen von Anomalien und Redundanzen
>- Anwenden der Normalformen
>- Tabellen schrittweise normalisieren
>- Begründen warum Normalisierung notwendig ist

---

# Warum Normalisierung?

>Normalisierung löst drei Hauptprobleme:

## 1. [[02 - RESOURCES/Notes/Redundanzen\|Redundanzen]] vermeiden
>Gleiche Daten werden nicht mehrfach gespeichert.

**Problem ohne Normalisierung:**
```
| BestellNr | KundenName | KundenAdresse | Produkt | Preis |
|-----------|-----------|---------------|---------|-------|
| 1         | Max Müller| Berlin        | Laptop  | 800€  |
| 2         | Max Müller| Berlin        | Maus    | 20€   |
| 3         | Max Müller| Berlin        | Tastatur| 50€   |
```
→ KundenName und KundenAdresse 3x gespeichert! 💾

## 2. [[02 - RESOURCES/Notes/Anomalien\|Anomalien]] verhindern
>Unerwünschte Seiteneffekte bei Datenbankoperationen vermeiden.

### Update-Anomalie
>Änderung muss an mehreren Stellen vorgenommen werden.

**Problem:** Max Müller zieht um → Adresse in 3 Zeilen ändern!
**Risiko:** Vergisst man eine Zeile → Inkonsistenz

### Einfüge-Anomalie
>Daten können nicht gespeichert werden ohne andere Daten.

**Problem:** Neuer Kunde ohne Bestellung → Kann nicht angelegt werden!

### Lösch-Anomalie
>Beim Löschen gehen ungewollt andere Daten verloren.

**Problem:** Letzte Bestellung löschen → Kundendaten verschwinden!

## 3. Datenintegrität sicherstellen
>Widersprüche in den Daten vermeiden.

---

# Die 3 Normalformen

## Überblick

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Unnormalisierte Tabelle                        │
│  (Listen, mehrere Werte pro Zelle)             │
│                                                 │
└─────────────────┬───────────────────────────────┘
                  │
                  │ 1. Normalform (1NF)
                  │ Atomare Werte
                  ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│  Erste Normalform (1NF)                         │
│  Alle Werte sind atomar                         │
│                                                 │
└─────────────────┬───────────────────────────────┘
                  │
                  │ 2. Normalform (2NF)
                  │ Keine partiellen Abhängigkeiten
                  ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│  Zweite Normalform (2NF)                        │
│  Alle Attribute hängen vom ganzen Schlüssel ab │
│                                                 │
└─────────────────┬───────────────────────────────┘
                  │
                  │ 3. Normalform (3NF)
                  │ Keine transitiven Abhängigkeiten
                  ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│  Dritte Normalform (3NF)                        │
│  Keine Abhängigkeiten zwischen Nicht-Schlüsseln│
│                                                 │
└─────────────────────────────────────────────────┘
```

---

# [[02 - RESOURCES/Notes/1. Normalform\|1. Normalform]] (1NF)

>Jedes Attribut muss **atomar** sein - keine Listen oder mehrfache Werte in einer Zelle.

## Regeln der 1NF:
1. ✅ Alle Attribute sind atomar (unteilbar)
2. ✅ Keine wiederholten Gruppen
3. ✅ Jede Zeile ist eindeutig identifizierbar (Primärschlüssel)

## Beispiel: 1NF

**❌ NICHT in 1NF:**
```
| StudentID | Name      | Kurse                    |
|-----------|-----------|--------------------------|
| 1         | Max       | Mathe, Physik, Chemie   |
| 2         | Anna      | Mathe, Englisch         |
| 3         | Tom       | Physik                  |
```
→ Spalte "Kurse" enthält Listen! ❌

**✅ IN 1NF:**
```
| StudentID | Name      | Kurs     |
|-----------|-----------|----------|
| 1         | Max       | Mathe    |
| 1         | Max       | Physik   |
| 1         | Max       | Chemie   |
| 2         | Anna      | Mathe    |
| 2         | Anna      | Englisch |
| 3         | Tom       | Physik   |
```
→ Jede Zelle hat nur einen Wert! ✅

---

# [[02 - RESOURCES/Notes/2. Normalform\|2. Normalform]] (2NF)

>Alle Nicht-Schlüssel-Attribute müssen vom **gesamten Primärschlüssel** abhängen, nicht nur von einem Teil.

## Regeln der 2NF:
1. ✅ Erfüllt 1NF
2. ✅ Keine partiellen Abhängigkeiten bei zusammengesetzten Schlüsseln
3. ✅ Jedes Attribut hängt vom kompletten Primärschlüssel ab

## Beispiel: 2NF

**❌ NICHT in 2NF (aber in 1NF):**
```
| StudentID | KursID | StudentName | Kursname | Dozent       |
|-----------|--------|-------------|----------|--------------|
| 1         | 101    | Max         | Mathe    | Herr Müller  |
| 1         | 102    | Max         | Physik   | Frau Schmidt |
| 2         | 101    | Anna        | Mathe    | Herr Müller  |
```
Primärschlüssel: (StudentID, KursID) - zusammengesetzt!

**Problem:**
- `StudentName` hängt nur von `StudentID` ab ❌
- `Kursname` und `Dozent` hängen nur von `KursID` ab ❌

**✅ IN 2NF:**

**Tabelle: Student**
```
| StudentID | StudentName |
|-----------|-------------|
| 1         | Max         |
| 2         | Anna        |
```

**Tabelle: Kurs**
```
| KursID | Kursname | Dozent       |
|--------|----------|--------------|
| 101    | Mathe    | Herr Müller  |
| 102    | Physik   | Frau Schmidt |
```

**Tabelle: Student_Kurs (Zwischentabelle)**
```
| StudentID | KursID |
|-----------|--------|
| 1         | 101    |
| 1         | 102    |
| 2         | 101    |
```

---

# [[02 - RESOURCES/Notes/3. Normalform\|3. Normalform]] (3NF)

>Keine **transitiven Abhängigkeiten** - Nicht-Schlüssel-Attribute dürfen nicht von anderen Nicht-Schlüssel-Attributen abhängen.

## Regeln der 3NF:
1. ✅ Erfüllt 2NF
2. ✅ Keine transitiven Abhängigkeiten
3. ✅ Jedes Nicht-Schlüssel-Attribut hängt **direkt** vom Primärschlüssel ab

## Beispiel: 3NF

**❌ NICHT in 3NF (aber in 2NF):**
```
| KursID | Kursname | Dozent       | Dozent_Büro | Dozent_Telefon |
|--------|----------|--------------|-------------|----------------|
| 101    | Mathe    | Herr Müller  | Raum 101    | 0123-456       |
| 102    | Physik   | Frau Schmidt | Raum 202    | 0123-789       |
| 103    | Chemie   | Herr Müller  | Raum 101    | 0123-456       |
```

**Problem - Transitive Abhängigkeit:**
```
KursID → Dozent → Dozent_Büro
KursID → Dozent → Dozent_Telefon
```
→ `Dozent_Büro` und `Dozent_Telefon` hängen von `Dozent` ab, nicht direkt von `KursID`! ❌

**✅ IN 3NF:**

**Tabelle: Kurs**
```
| KursID | Kursname | Dozent       |
|--------|----------|--------------|
| 101    | Mathe    | Herr Müller  |
| 102    | Physik   | Frau Schmidt |
| 103    | Chemie   | Herr Müller  |
```

**Tabelle: Dozent**
```
| Dozent       | Dozent_Büro | Dozent_Telefon |
|--------------|-------------|----------------|
| Herr Müller  | Raum 101    | 0123-456       |
| Frau Schmidt | Raum 202    | 0123-789       |
```

---

# 🎯 Typische AP2-Prüfungsaufgabe

>[!example] Prüfungsaufgabe: Bibliotheksverwaltung
>**Szenario:** Eine Bibliothek verwaltet ihre Daten in folgender Tabelle:
>
>**Tabelle: Ausleihe**
>```
>| AusleihNr | BenutzerID | BenutzerName | BenutzerAdresse | ISBN       | Buchtitel         | Autor        | Verlag    | Ausleihdatum | Rückgabedatum |
>|-----------|-----------|--------------|-----------------|------------|-------------------|--------------|-----------|--------------|---------------|
>| 1         | 101       | Max Müller   | Berlin          | 978-3-16-1 | Java Grundlagen   | M. Schmidt   | TechVerlag| 2025-10-01   | 2025-10-15    |
>| 2         | 101       | Max Müller   | Berlin          | 978-3-16-2 | Python Basics     | A. Meyer     | CodeVerlag| 2025-10-05   | 2025-10-19    |
>| 3         | 102       | Anna Schmidt | Hamburg         | 978-3-16-1 | Java Grundlagen   | M. Schmidt   | TechVerlag| 2025-10-03   | 2025-10-17    |
>| 4         | 103       | Tom Weber    | München         | 978-3-16-3 | SQL für Anfänger  | T. Klein     | DataPress | 2025-10-07   | 2025-10-21    |
>```
>
>**Aufgaben:**
>1. Identifizieren Sie alle **Redundanzen** in der Tabelle
>2. Identifizieren Sie alle **Anomalien** (Einfüge-, Update-, Lösch-Anomalie)
>3. Überführen Sie die Tabelle in die **1. Normalform (1NF)**
>4. Überführen Sie die Tabelle in die **2. Normalform (2NF)**
>5. Überführen Sie die Tabelle in die **3. Normalform (3NF)**
>6. Zeichnen Sie das finale **ER-Diagramm** nach 3NF

---

# 🍳 Kochrezept: Normalisierung in 6 Schritten (Visuell)

```
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 1: REDUNDANZEN IDENTIFIZIEREN                   │
├─────────────────────────────────────────────────────────┤
│ Suche nach: Gleiche Daten in mehreren Zeilen            │
│                                                          │
│ Markiere im Beispiel:                                    │
│  • BenutzerName "Max Müller" → 2x                       │
│  • BenutzerAdresse "Berlin" → 2x                        │
│  • ISBN "978-3-16-1" → 2x                                │
│  • Buchtitel "Java Grundlagen" → 2x                     │
│  • Autor "M. Schmidt" → 2x                               │
│  • Verlag "TechVerlag" → 2x                              │
│                                                          │
│ 📌 FRAGE: Welche Daten wiederholen sich?                │
│          Markiere sie mit Textmarker!                    │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 2: ANOMALIEN ERKENNEN                           │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ UPDATE-ANOMALIE:                                         │
│  ❌ Max Müller zieht um → Adresse in 2 Zeilen ändern   │
│  ❌ Verlag ändert Namen → in allen Zeilen anpassen      │
│                                                          │
│ EINFÜGE-ANOMALIE:                                        │
│  ❌ Neues Buch ohne Ausleihe → Kann nicht gespeichert  │
│     werden (AusleihNr ist Schlüssel!)                   │
│  ❌ Neuer Benutzer ohne Ausleihe → Geht nicht!          │
│                                                          │
│ LÖSCH-ANOMALIE:                                          │
│  ❌ Ausleihe 4 löschen → Infos über "SQL für Anfänger"  │
│     verschwinden komplett!                              │
│  ❌ Letzte Ausleihe von Tom → Tom verschwindet!         │
│                                                          │
│ 📌 REGEL: Wo treten Probleme auf?                       │
│          Schreibe sie auf!                               │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 3: 1NF PRÜFEN - Atomare Werte?                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ FRAGE: Gibt es Listen oder mehrere Werte in einer Zelle?│
│                                                          │
│ In unserem Beispiel:                                     │
│  ✅ Alle Zellen haben nur einen Wert                    │
│  ✅ Keine Listen wie "Mathe, Physik"                    │
│  ✅ Keine zusammengesetzten Werte                        │
│                                                          │
│ → Tabelle ist bereits in 1NF! ✓                         │
│                                                          │
│ Falls NICHT in 1NF:                                      │
│  1. Listen aufsplitten                                   │
│  2. Neue Zeile für jeden Wert                            │
│  3. Zusammengesetzte Werte aufteilen                     │
│                                                          │
│ 📌 REGEL: Eine Zelle = Ein Wert                         │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 4: 2NF ANWENDEN - Funktionale Abhängigkeiten    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ FRAGE 1: Was ist der Primärschlüssel?                   │
│ Antwort: AusleihNr (identifiziert jede Ausleihe)        │
│                                                          │
│ FRAGE 2: Welche Attribute hängen NICHT vom              │
│          KOMPLETTEN Primärschlüssel ab?                  │
│                                                          │
│ Analyse:                                                 │
│  • BenutzerName hängt von BenutzerID ab ❌              │
│  • BenutzerAdresse hängt von BenutzerID ab ❌           │
│  • Buchtitel hängt von ISBN ab ❌                        │
│  • Autor hängt von ISBN ab ❌                            │
│  • Verlag hängt von ISBN ab ❌                           │
│                                                          │
│ LÖSUNG: Tabellen aufteilen!                              │
│  → Tabelle "Benutzer" (BenutzerID als Schlüssel)        │
│  → Tabelle "Buch" (ISBN als Schlüssel)                  │
│  → Tabelle "Ausleihe" (nur noch IDs + Datumsfelder)     │
│                                                          │
│ 📌 REGEL: Alle Attribute müssen vom ganzen Schlüssel    │
│           abhängen, nicht von Teilen!                    │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 5: 3NF ANWENDEN - Transitive Abhängigkeiten     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ FRAGE: Gibt es Nicht-Schlüssel-Attribute die von        │
│        anderen Nicht-Schlüssel-Attributen abhängen?     │
│                                                          │
│ Prüfe jede Tabelle nach 2NF:                             │
│                                                          │
│ Tabelle "Buch":                                          │
│  ISBN → Buchtitel  ✓ (direkt vom Schlüssel)            │
│  ISBN → Autor      ✓ (direkt vom Schlüssel)            │
│  ISBN → Verlag     ✓ (direkt vom Schlüssel)            │
│                                                          │
│ Aber: Hat der Autor vielleicht eine E-Mail?             │
│  → ISBN → Autor → Autor_Email  ❌                       │
│  → Das wäre eine transitive Abhängigkeit!               │
│                                                          │
│ Falls vorhanden: Weitere Tabelle erstellen!             │
│  → Tabelle "Autor" (Autor als Schlüssel)                │
│                                                          │
│ 📌 REGEL: A → B → C ist verboten!                       │
│           Nur A → B oder A → C erlaubt                   │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 6: FINALE TABELLEN ZEICHNEN + ER-DIAGRAMM       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Erstelle saubere Tabellen:                               │
│                                                          │
│ 1. Benutzer-Tabelle                                      │
│    - BenutzerID (PK)                                     │
│    - BenutzerName                                        │
│    - BenutzerAdresse                                     │
│                                                          │
│ 2. Buch-Tabelle                                          │
│    - ISBN (PK)                                           │
│    - Buchtitel                                           │
│    - Autor                                               │
│    - Verlag                                              │
│                                                          │
│ 3. Ausleihe-Tabelle                                      │
│    - AusleihNr (PK)                                      │
│    - BenutzerID (FK)                                     │
│    - ISBN (FK)                                           │
│    - Ausleihdatum                                        │
│    - Rückgabedatum                                       │
│                                                          │
│ Zeichne ER-Diagramm mit Beziehungen:                     │
│  Benutzer (1) ←→ (N) Ausleihe (N) ←→ (1) Buch         │
│                                                          │
│ 📌 KONTROLLE: Keine Redundanzen mehr? ✓                 │
│               Keine Anomalien mehr? ✓                    │
└─────────────────────────────────────────────────────────┘
```

---

# 🎨 Vollständige Lösung: Bibliotheksverwaltung

## Nach 3NF normalisiert:

### Tabelle: Benutzer
```
| BenutzerID | BenutzerName | BenutzerAdresse |
|-----------|--------------|-----------------|
| 101       | Max Müller   | Berlin          |
| 102       | Anna Schmidt | Hamburg         |
| 103       | Tom Weber    | München         |
```

### Tabelle: Buch
```
| ISBN       | Buchtitel         | Autor        | Verlag     |
|------------|-------------------|--------------|------------|
| 978-3-16-1 | Java Grundlagen   | M. Schmidt   | TechVerlag |
| 978-3-16-2 | Python Basics     | A. Meyer     | CodeVerlag |
| 978-3-16-3 | SQL für Anfänger  | T. Klein     | DataPress  |
```

### Tabelle: Ausleihe
```
| AusleihNr | BenutzerID | ISBN       | Ausleihdatum | Rückgabedatum |
|-----------|-----------|------------|--------------|---------------|
| 1         | 101       | 978-3-16-1 | 2025-10-01   | 2025-10-15    |
| 2         | 101       | 978-3-16-2 | 2025-10-05   | 2025-10-19    |
| 3         | 102       | 978-3-16-1 | 2025-10-03   | 2025-10-17    |
| 4         | 103       | 978-3-16-3 | 2025-10-07   | 2025-10-21    |
```

## ER-Diagramm

```
    ┌──────────────┐
    │  BenutzerID  │
    └──────┬───────┘
           │
    ┌──────┴───────────┐
    │    BENUTZER      │
    │──────────────────│
    │  BenutzerID      │ ← PK
    │  BenutzerName    │
    │  BenutzerAdresse │
    └──────┬───────────┘
           │
           │ 1
           │
      ┌────┴────┐
      │  leiht  │
      │   aus   │
      └────┬────┘
           │ N
           │
    ┌──────┴───────────┐
    │    AUSLEIHE      │
    │──────────────────│
    │  AusleihNr       │ ← PK
    │  BenutzerID      │ ← FK
    │  ISBN            │ ← FK
    │  Ausleihdatum    │
    │  Rückgabedatum   │
    └──────┬───────────┘
           │ N
           │
      ┌────┴────┐
      │betrifft │
      └────┬────┘
           │ 1
           │
    ┌──────┴───────────┐
    │      BUCH        │
    │──────────────────│
    │  ISBN            │ ← PK
    │  Buchtitel       │
    │  Autor           │
    │  Verlag          │
    └──────────────────┘
```

## SQL-Implementierung

```sql
-- Tabelle 1: Benutzer
CREATE TABLE Benutzer (
    BenutzerID INT PRIMARY KEY,
    BenutzerName VARCHAR(100) NOT NULL,
    BenutzerAdresse VARCHAR(200)
);

-- Tabelle 2: Buch
CREATE TABLE Buch (
    ISBN VARCHAR(20) PRIMARY KEY,
    Buchtitel VARCHAR(200) NOT NULL,
    Autor VARCHAR(100),
    Verlag VARCHAR(100)
);

-- Tabelle 3: Ausleihe (mit Fremdschlüsseln)
CREATE TABLE Ausleihe (
    AusleihNr INT PRIMARY KEY,
    BenutzerID INT NOT NULL,
    ISBN VARCHAR(20) NOT NULL,
    Ausleihdatum DATE NOT NULL,
    Rueckgabedatum DATE,
    FOREIGN KEY (BenutzerID) REFERENCES Benutzer(BenutzerID),
    FOREIGN KEY (ISBN) REFERENCES Buch(ISBN)
);
```

---

# ✅ Checkliste Normalisierung

>[!check] Vor der Abgabe prüfen:
>- [ ] **1NF**: Alle Werte atomar? Keine Listen in Zellen?
>- [ ] **2NF**: Alle Attribute hängen vom ganzen Primärschlüssel ab?
>- [ ] **3NF**: Keine transitiven Abhängigkeiten mehr?
>- [ ] Alle **Redundanzen** eliminiert?
>- [ ] Keine **Update-Anomalien** mehr möglich?
>- [ ] Keine **Einfüge-Anomalien** mehr möglich?
>- [ ] Keine **Lösch-Anomalien** mehr möglich?
>- [ ] Primärschlüssel in jeder Tabelle definiert?
>- [ ] Fremdschlüssel korrekt gesetzt?
>- [ ] ER-Diagramm erstellt mit Kardinalitäten?

>[!failure] Häufige Fehler in der AP2-Prüfung
>❌ 1NF nicht erkannt (Listen übersehen)
>❌ Partielle Abhängigkeiten nicht aufgelöst (2NF)
>❌ Transitive Abhängigkeiten übersehen (3NF)
>❌ Zu viele Tabellen erstellt (über-normalisiert)
>❌ Zu wenige Tabellen (unter-normalisiert)
>❌ Fremdschlüssel vergessen
>❌ Primärschlüssel nicht unterstrichen/markiert
>❌ Anomalien nicht begründet
>❌ Redundanzen nicht alle gefunden

---

# 🎨 Visuelle Merkhilfe: Normalformen auf einen Blick

```
┌─────────────────────────────────────────────────────────┐
│         WIE ERKENNE ICH WELCHE NORMALFORM?               │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ 1NF - "Die Atomare"                                      │
│ ┌────────────────────────────────────┐                  │
│ │ ❌ "Mathe, Physik, Chemie" in      │                  │
│ │    einer Zelle                     │                  │
│ │ ✅ Jede Zelle = ein Wert           │                  │
│ └────────────────────────────────────┘                  │
│ Frage: Gibt es Listen/mehrere Werte?                    │
│                                                          │
│ ─────────────────────────────────────                   │
│                                                          │
│ 2NF - "Die Ganze-Schlüssel"                             │
│ ┌────────────────────────────────────┐                  │
│ │ ❌ StudentName hängt nur von       │                  │
│ │    StudentID ab, nicht von         │                  │
│ │    (StudentID, KursID)             │                  │
│ │ ✅ Alle Attribute vom ganzen       │                  │
│ │    Schlüssel abhängig              │                  │
│ └────────────────────────────────────┘                  │
│ Frage: Partiell abhängige Attribute?                    │
│                                                          │
│ ─────────────────────────────────────                   │
│                                                          │
│ 3NF - "Die Direkte"                                      │
│ ┌────────────────────────────────────┐                  │
│ │ ❌ Dozent_Büro hängt von Dozent    │                  │
│ │    ab, nicht direkt von KursID     │                  │
│ │ ✅ Alle Attribute direkt vom       │                  │
│ │    Primärschlüssel abhängig        │                  │
│ └────────────────────────────────────┘                  │
│ Frage: A → B → C Kette vorhanden?                       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

# 📊 Vergleich: Vorher vs. Nachher

## ❌ Vor der Normalisierung (0NF)

**Probleme:**
- 🔴 Redundanzen: "Max Müller" und "Berlin" 2x gespeichert
- 🔴 Update-Anomalie: Adresse ändern = 2 Stellen
- 🔴 Einfüge-Anomalie: Buch ohne Ausleihe nicht speicherbar
- 🔴 Lösch-Anomalie: Ausleihe löschen = Buchdaten weg
- 🔴 Speicherverschwendung durch Duplikate

**Datengröße:** ~800 Bytes (mit Redundanzen)

## ✅ Nach der Normalisierung (3NF)

**Vorteile:**
- 🟢 Keine Redundanzen mehr
- 🟢 Keine Anomalien mehr
- 🟢 Datenintegrität gewährleistet
- 🟢 Wartbarkeit verbessert
- 🟢 Speicher effizienter genutzt

**Datengröße:** ~450 Bytes (ohne Redundanzen)

**Einsparung:** ~44% weniger Speicher! 💾

---

# 🎯 Prüfungstipps

>[!tip] So punktest du in der AP2-Prüfung
>
>**1. Systematisch vorgehen:**
>- Erst alle Redundanzen markieren
>- Dann alle Anomalien beschreiben
>- Schrittweise normalisieren (1NF → 2NF → 3NF)
>
>**2. Begründungen geben:**
>- IMMER begründen WARUM eine Normalform verletzt ist
>- Beispiele für Anomalien nennen
>- Vorteile der Normalisierung aufzählen
>
>**3. Visuell darstellen:**
>- Tabellen vor/nach Normalisierung zeigen
>- ER-Diagramm zeichnen
>- Abhängigkeiten aufzeichnen (A → B → C)
>
>**4. SQL nicht vergessen:**
>- CREATE TABLE Statements schreiben
>- PRIMARY KEY markieren
>- FOREIGN KEY definieren
>
>**5. Zeitmanagement:**
>- Nicht perfektionistisch sein
>- Lieber alle Schritte kurz als einen perfekt
>- Checkliste durchgehen

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/1. Normalform\|1. Normalform]] - Erste Normalform (1NF) im Detail
- [[02 - RESOURCES/Notes/2. Normalform\|2. Normalform]] - Zweite Normalform (2NF) im Detail
- [[02 - RESOURCES/Notes/3. Normalform\|3. Normalform]] - Dritte Normalform (3NF) im Detail
- [[02 - RESOURCES/Notes/Anomalien\|Anomalien]] - Datenbank-Anomalien erklärt
- [[02 - RESOURCES/Notes/Redundanzen\|Redundanzen]] - Datenredundanz vermeiden
- [[02 - RESOURCES/Notes/ERM\|ERM]] - Entity-Relationship-Modell
- [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] - Primärschlüssel
- [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] - Fremdschlüssel
- [[02 - RESOURCES/Notes/SQL\|SQL]] - Datenbank-Abfragesprache

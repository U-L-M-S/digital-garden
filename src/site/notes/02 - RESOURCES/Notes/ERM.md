---
{"dg-publish":true,"permalink":"/02-resources/notes/erm/","tags":["informatik/datenbank","datenmodellierung","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-10T14:44:29.821+01:00"}
---

>Ein **Entity-Relationship-Modell (ERM)** ist ein konzeptionelles Datenbankmodell, das die **Struktur** und **Beziehungen** zwischen Daten visualisiert.
>>Es zeigt, welche **Entitäten** (Objekte/Dinge) existieren, welche **Attribute** (Eigenschaften) sie haben und wie sie miteinander in **Beziehung** stehen.

>[!important] Wichtig für die Prüfung
>ERM ist fundamental für:
>- Datenbankdesign und -planung
>- Visualisierung von Datenstrukturen
>- Kommunikation mit Stakeholdern
>- Grundlage für relationale Datenbanken

---

# Wofür wird ERM verwendet?

>Das ERM dient zur **konzeptionellen Modellierung** von Datenbanken **vor** der technischen Implementierung.

**Anwendungsfälle:**
- Planung neuer Datenbanken
- Dokumentation bestehender Systeme
- Kommunikation zwischen Entwicklern und Fachbereich
- Grundlage für SQL-Datenbankschema

**Prozess:**
```
1. Anforderungsanalyse
   ↓
2. ERM erstellen (konzeptionell)
   ↓
3. In relationales Modell überführen
   ↓
4. SQL-Datenbank implementieren
```

---

# Die 3 Grundelemente des ERM

## 1. Entität (Entity)
>Eine **Entität** ist ein Objekt der realen Welt, über das Informationen gespeichert werden sollen.

**Symbol**: Rechteck

```
┌─────────────┐
│   KUNDE     │
└─────────────┘
```

**Beispiele für Entitäten:**
- **Person**: Kunde, Mitarbeiter, Student
- **Objekt**: Produkt, Auto, Buch
- **Konzept**: Bestellung, Rechnung, Kurs
- **Ort**: Filiale, Lager, Raum

>[!info] Entitätstyp vs. Entität
>- **Entitätstyp**: Kategorie (z.B. "Kunde")
>- **Entität**: Konkrete Instanz (z.B. "Max Mustermann")

## 2. Attribut (Attribute)
>Ein **Attribut** ist eine Eigenschaft oder ein Merkmal einer Entität.

**Symbol**: Oval, verbunden mit der Entität

```
     ┌────────┐
     │  Name  │
     └────┬───┘
          │
┌─────────┴────────┐
│     KUNDE        │
└─────────┬────────┘
          │
     ┌────┴────┐
     │  Alter  │
     └─────────┘
```

**Beispiele:**
- **Kunde**: KundenNr, Name, Email, Geburtsdatum
- **Produkt**: ProduktNr, Bezeichnung, Preis, Lagerbestand
- **Bestellung**: BestellNr, Datum, Gesamtbetrag

### Arten von Attributen

| Art | Beschreibung | Beispiel |
|-----|--------------|----------|
| **Einfach** | Kann nicht weiter zerlegt werden | Alter, Preis |
| **Zusammengesetzt** | Besteht aus mehreren Teilen | Adresse = Straße + PLZ + Stadt |
| **Einwertig** | Ein Wert pro Entität | Geburtsdatum |
| **Mehrwertig** | Mehrere Werte möglich | Telefonnummern (privat, geschäftlich) |
| **Abgeleitet** | Wird berechnet | Alter (aus Geburtsdatum) |

### Primärschlüssel (Primary Key)
>Ein **Primärschlüssel** ist ein Attribut, das eine Entität **eindeutig identifiziert**.

**Symbol**: Unterstrichener Name

```
     ┌──────────┐
     │KundenNr  │ ← Primärschlüssel (unterstrichen)
     └────┬─────┘
          │
┌─────────┴────────┐
│     KUNDE        │
└──────────────────┘
```

>[!important] Eigenschaften eines Primärschlüssels
>- **Eindeutig**: Jeder Wert kommt nur einmal vor
>- **Nicht NULL**: Muss immer einen Wert haben
>- **Unveränderlich**: Sollte sich nicht ändern

## 3. Beziehung (Relationship)
>Eine **Beziehung** beschreibt, wie Entitäten miteinander in Verbindung stehen.

**Symbol**: Raute (Rhombus)

```
┌─────────┐       ┌─────────┐       ┌─────────┐
│ KUNDE   │───────│ bestellt│───────│ PRODUKT │
└─────────┘       └─────────┘       └─────────┘
```

**Beispiele:**
- Kunde **bestellt** Produkt
- Student **belegt** Kurs
- Mitarbeiter **arbeitet in** Abteilung
- Autor **schreibt** Buch

---

# Kardinalitäten (Beziehungstypen)

>Die **Kardinalität** gibt an, wie viele Entitäten an einer Beziehung beteiligt sein können.

## 1:1 (Eins-zu-Eins)
>Jede Entität A ist mit **genau einer** Entität B verbunden.

```
┌─────────┐  1    ┌─────────┐  1   ┌─────────┐
│ PERSON  │───────│  hat    │──────│ AUSWEIS │
└─────────┘       └─────────┘      └─────────┘
```

**Beispiel**: Eine Person hat genau einen Personalausweis, ein Ausweis gehört zu genau einer Person.

## 1:N (Eins-zu-Viele)
>Eine Entität A ist mit **mehreren** Entitäten B verbunden, aber B nur mit einer A.

```
┌─────────┐  1    ┌─────────┐  N   ┌─────────┐
│ABTEILUNG│───────│arbeitet │──────│MITARBEIT│
└─────────┘       │   in    │      └─────────┘
                  └─────────┘
```

**Beispiel**: Eine Abteilung hat viele Mitarbeiter, aber ein Mitarbeiter gehört zu genau einer Abteilung.

**Häufigste Beziehung!**

## N:M (Viele-zu-Viele)
>Mehrere Entitäten A sind mit mehreren Entitäten B verbunden.

```
┌─────────┐  N    ┌─────────┐  M   ┌─────────┐
│ STUDENT │───────│ belegt  │──────│  KURS   │
└─────────┘       └─────────┘      └─────────┘
```

**Beispiel**: Ein Student belegt mehrere Kurse, ein Kurs wird von mehreren Studenten besucht.

>[!warning] Wichtig
>N:M-Beziehungen müssen in relationalen Datenbanken durch eine **Zwischentabelle** aufgelöst werden!

---

# Visuelles Beispiel: Online-Shop

```
     ┌────────┐
     │KundenNr│
     └───┬────┘
         │
┌────────┴─────────┐
│     KUNDE        │
├──────────────────┤
│ Name             │
│ Email            │
│ Adresse          │
└────────┬─────────┘
         │
         │ 1
         │
    ┌────┴───────┐
    │  bestellt  │
    └────┬───────┘
         │ N
         │
┌────────┴─────────┐
│   BESTELLUNG     │
├──────────────────┤
│ BestellNr        │
│ Datum            │
│ Gesamtbetrag     │
└────────┬─────────┘
         │
         │ N
         │
    ┌────┴───────┐
    │  enthält   │
    └────┬───────┘
         │ M
         │
┌────────┴─────────┐
│    PRODUKT       │
├──────────────────┤
│ ProduktNr        │
│ Bezeichnung      │
│ Preis            │
│ Lagerbestand     │
└──────────────────┘
```

**Beschreibung:**
- Ein **Kunde** kann **viele Bestellungen** aufgeben (1:N)
- Eine **Bestellung** kann **viele Produkte** enthalten (N:M)
- Ein **Produkt** kann in **vielen Bestellungen** vorkommen (N:M)

---

# Erweiterte Konzepte

## Schwache Entität
>Eine **schwache Entität** kann nicht ohne eine andere Entität existieren.

**Symbol**: Doppelter Rahmen

```
┌─────────┐      ┌─────────┐      ╔═════════╗
│  BUCH   │──────│  hat    │──────║ KAPITEL ║
└─────────┘      └─────────┘      ╚═════════╝
```

**Beispiel**: Ein Kapitel kann nicht ohne ein Buch existieren.

## Beziehungsattribute
>Attribute, die **zur Beziehung** gehören, nicht zu den Entitäten.

```
┌─────────┐                        ┌─────────┐
│MITARBEIT│────────┐     ┌─────────│ PROJEKT │
└─────────┘        │     │         └─────────┘
                   │     │
              ┌────┴─────┴────┐
              │  arbeitet_an   │
              ├────────────────┤
              │ Stunden        │ ← Beziehungsattribut
              │ Rolle          │
              └────────────────┘
```

**Beispiel**: Ein Mitarbeiter arbeitet an einem Projekt mit einer bestimmten **Stundenanzahl** und **Rolle**.

## Generalisierung / Spezialisierung (Vererbung)
>**Supertyp** und **Subtypen** (wie in OOP).

```
        ┌─────────────┐
        │   FAHRZEUG  │ ← Supertyp
        └──────┬──────┘
               │
       ┌───────┴───────┐
       │               │
┌──────┴──────┐ ┌─────┴──────┐
│     PKW     │ │     LKW    │ ← Subtypen
└─────────────┘ └────────────┘
```

**Beispiel**: PKW und LKW erben gemeinsame Attribute von Fahrzeug (z.B. Kennzeichen, Farbe).

---

# Überführung in relationale Datenbank

## 1:N Beziehung
>Fremdschlüssel in der N-Seite.

**ERM:**
```
ABTEILUNG (1) ──arbeitet_in──► (N) MITARBEITER
```

**SQL:**
```sql
CREATE TABLE Abteilung (
    AbteilungsNr INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Mitarbeiter (
    MitarbeiterNr INT PRIMARY KEY,
    Name VARCHAR(100),
    AbteilungsNr INT,
    FOREIGN KEY (AbteilungsNr) REFERENCES Abteilung(AbteilungsNr)
);
```

## N:M Beziehung
>Zwischentabelle (Assoziationstabelle) erstellen.

**ERM:**
```
STUDENT (N) ──belegt──► (M) KURS
```

**SQL:**
```sql
CREATE TABLE Student (
    StudentNr INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Kurs (
    KursNr INT PRIMARY KEY,
    Bezeichnung VARCHAR(100)
);

-- Zwischentabelle
CREATE TABLE Belegung (
    StudentNr INT,
    KursNr INT,
    Semester VARCHAR(10),
    Note DECIMAL(2,1),
    PRIMARY KEY (StudentNr, KursNr),
    FOREIGN KEY (StudentNr) REFERENCES Student(StudentNr),
    FOREIGN KEY (KursNr) REFERENCES Kurs(KursNr)
);
```

---

# Praktisches Beispiel: Bibliothekssystem

## ERM

```
     ┌───────────┐
     │ BenutzerNr│
     └─────┬─────┘
           │
    ┌──────┴──────┐
    │   BENUTZER  │
    ├─────────────┤
    │ Name        │
    │ Adresse     │
    │ Email       │
    └──────┬──────┘
           │ 1
           │
      ┌────┴────┐
      │  leiht  │
      └────┬────┘
           │ N
           │
    ┌──────┴──────┐
    │   AUSLEIHE  │ ← Zwischenentität
    ├─────────────┤
    │ AusleiheNr  │
    │ AusleihDatum│
    │ RückgabeDatum│
    └──────┬──────┘
           │ N
           │
      ┌────┴────┐
      │ betrifft│
      └────┬────┘
           │ 1
           │
    ┌──────┴──────┐
    │    BUCH     │
    ├─────────────┤
    │ ISBN        │
    │ Titel       │
    │ Autor       │
    │ Verlag      │
    └─────────────┘
```

## SQL-Implementierung

```sql
CREATE TABLE Benutzer (
    BenutzerNr INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Adresse VARCHAR(200),
    Email VARCHAR(100)
);

CREATE TABLE Buch (
    ISBN VARCHAR(13) PRIMARY KEY,
    Titel VARCHAR(200) NOT NULL,
    Autor VARCHAR(100),
    Verlag VARCHAR(100)
);

CREATE TABLE Ausleihe (
    AusleiheNr INT PRIMARY KEY,
    BenutzerNr INT NOT NULL,
    ISBN VARCHAR(13) NOT NULL,
    AusleihDatum DATE NOT NULL,
    RueckgabeDatum DATE,
    FOREIGN KEY (BenutzerNr) REFERENCES Benutzer(BenutzerNr),
    FOREIGN KEY (ISBN) REFERENCES Buch(ISBN)
);
```

---

# Chen-Notation vs. Crow's Foot Notation

## Chen-Notation (klassisch)
```
┌─────────┐  1    ┌─────────┐  N   ┌─────────┐
│ KUNDE   │───────│bestellt │──────│BESTELLUNG│
└─────────┘       └─────────┘      └─────────┘
```

## Crow's Foot Notation (modern)
```
┌─────────┐       ┌─────────────┐
│ KUNDE   │──<───│  BESTELLUNG │
└─────────┘       └─────────────┘
     │                  │
     └──────────────────┘
     Ein Kunde kann viele Bestellungen haben
```

**Symbole:**
- `│` = Eins (genau 1)
- `<` = Viele (N)
- `○` = Optional (0 oder mehr)
- `│` = Obligatorisch (mindestens 1)

---

# Best Practices

>[!success] Gute Praktiken
>- **Klare Benennung**: Verständliche Entitäts- und Attributnamen
>- **Normalisierung**: Redundanz vermeiden
>- **Primärschlüssel**: Immer eindeutig definieren
>- **Dokumentation**: ERM immer dokumentieren
>- **Iterativ arbeiten**: ERM schrittweise verfeinern

>[!caution] Häufige Fehler
>- ❌ Zu viele N:M-Beziehungen ohne Auflösung
>- ❌ Fehlende Primärschlüssel
>- ❌ Attribute in Beziehungen statt in Entitäten
>- ❌ Zu komplexe Diagramme (Überladen)

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **ERM** = Konzeptionelles Modell für Datenbanken
>- **3 Grundelemente**: Entitäten (Rechteck), Attribute (Oval), Beziehungen (Raute)
>- **Kardinalitäten**: 1:1, 1:N, N:M
>- **Primärschlüssel**: Eindeutige Identifikation
>- **N:M-Beziehungen** werden durch Zwischentabellen aufgelöst
>- Grundlage für relationale Datenbanken (SQL)

---

# Verwandte Konzepte

- [[Relationale Datenbanken\|Relationale Datenbanken]] - Implementierung von ERM
- [[02 - RESOURCES/Notes/SQL\|SQL]] - Abfragesprache für Datenbanken
- [[02 - RESOURCES/Notes/Normalisierung\|Normalisierung]] - Optimierung von Datenbankstrukturen
- [[Fremdschlüssel\|Fremdschlüssel]] - Beziehungen in SQL
- [[Datenmodellierung\|Datenmodellierung]] - Übergeordnetes Konzept

---

# 🎯 Typische AP2-Prüfungsaufgabe

>[!example] Prüfungsaufgabe: Fahrzeugverwaltung einer Autovermietung
>**Szenario:** Eine Autovermietung möchte ihre Daten digital verwalten. Folgende Anforderungen sind gegeben:
>
>**Gegeben:**
>- Die Vermietung hat mehrere **Filialen** (mit FilialNr, Adresse, Telefon)
>- Jede Filiale hat mehrere **Fahrzeuge** (mit FahrzeugNr, Marke, Modell, Baujahr, Tagessatz)
>- Es gibt **Kunden** (mit KundenNr, Name, Adresse, Führerscheinnummer)
>- Kunden können Fahrzeuge **mieten** (mit MietNr, Startdatum, Enddatum, Gesamtpreis)
>- Ein Fahrzeug gehört zu genau einer Filiale
>- Ein Kunde kann mehrere Mietverträge haben
>- Ein Fahrzeug kann in mehreren Mietverträgen vorkommen (zu unterschiedlichen Zeiten)
>- Jede Miete bezieht sich auf genau ein Fahrzeug und genau einen Kunden
>
>**Aufgaben:**
>1. Erstellen Sie ein vollständiges ER-Diagramm
>2. Markieren Sie alle Primärschlüssel (unterstrichen)
>3. Geben Sie alle Kardinalitäten an (1:1, 1:N, N:M)
>4. Kennzeichnen Sie die Attribute korrekt
>5. Überführen Sie die N:M-Beziehung in ein relationales Modell (mit Zwischentabelle)

---

# 🍳 Kochrezept: ER-Diagramm in 6 Schritten (Visuell)

```
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 1: ENTITÄTEN IDENTIFIZIEREN                     │
├─────────────────────────────────────────────────────────┤
│ Suche nach: Substantive = "Dinge" über die Daten        │
│             gespeichert werden sollen                    │
│                                                          │
│ Markiere im Text:                                        │
│  • Filiale     ✓                                         │
│  • Fahrzeug    ✓                                         │
│  • Kunde       ✓                                         │
│  • Miete       ✓ (Zwischenentität!)                      │
│                                                          │
│ Zeichne Rechtecke:                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ FILIALE  │  │ FAHRZEUG │  │  KUNDE   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                          │
│ 📌 TIPP: Nur die WICHTIGEN Substantive!                 │
│         "Adresse" = Attribut, keine eigene Entität       │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 2: PRIMÄRSCHLÜSSEL BESTIMMEN                    │
├─────────────────────────────────────────────────────────┤
│ Frage: Wie kann ich JEDE Instanz EINDEUTIG identifizieren?│
│                                                          │
│  ┌──────────┐                                           │
│  │ FILIALE  │                                           │
│  │──────────│                                           │
│  │ FilialNr │ ← Primärschlüssel (unterstrichen!)       │
│  └──────────┘                                           │
│                                                          │
│  ┌──────────┐                                           │
│  │ FAHRZEUG │                                           │
│  │──────────│                                           │
│  │FahrzeugNr│ ← Primärschlüssel                         │
│  └──────────┘                                           │
│                                                          │
│  ┌──────────┐                                           │
│  │  KUNDE   │                                           │
│  │──────────│                                           │
│  │ KundenNr │ ← Primärschlüssel                         │
│  └──────────┘                                           │
│                                                          │
│ 📌 REGEL: Primärschlüssel IMMER unterstreichen!         │
│          Meistens: ...Nr, ...ID, ...Code                 │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 3: ATTRIBUTE HINZUFÜGEN                          │
├─────────────────────────────────────────────────────────┤
│ Suche nach: Eigenschaften der Entitäten                 │
│             "hat", "besitzt", Adjektive                  │
│                                                          │
│     ┌─────────┐  ┌─────────┐  ┌──────────┐             │
│     │ Adresse │  │ Telefon │  │  Name    │             │
│     └────┬────┘  └────┬────┘  └────┬─────┘             │
│          │            │            │                     │
│     ┌────┴────────────┴────────────┴─────┐              │
│     │            FILIALE                 │              │
│     │────────────────────────────────────│              │
│     │          FilialNr                  │              │
│     │          Adresse                   │              │
│     │          Telefon                   │              │
│     └────────────────────────────────────┘              │
│                                                          │
│ Gleich machen für: FAHRZEUG, KUNDE                       │
│                                                          │
│ 📌 TIPP: Primärschlüssel OBEN, andere Attribute UNTEN   │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 4: BEZIEHUNGEN IDENTIFIZIEREN                   │
├─────────────────────────────────────────────────────────┤
│ Suche nach: Verben zwischen Entitäten                   │
│             "gehört zu", "hat", "mietet", "arbeitet in" │
│                                                          │
│ Zeichne Rauten (Rhombus):                                │
│                                                          │
│  ┌──────────┐      ┌──────────┐      ┌──────────┐      │
│  │ FILIALE  │──────│   hat    │──────│ FAHRZEUG │      │
│  └──────────┘      └──────────┘      └──────────┘      │
│                                                          │
│  ┌──────────┐      ┌──────────┐      ┌──────────┐      │
│  │  KUNDE   │──────│  mietet  │──────│ FAHRZEUG │      │
│  └──────────┘      └──────────┘      └──────────┘      │
│                                                          │
│ 📌 FORMAT: Beziehung = Verb in Raute                    │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 5: KARDINALITÄTEN BESTIMMEN                     │
├─────────────────────────────────────────────────────────┤
│ Frage 1: Wie viele B gehören zu einem A?                │
│ Frage 2: Wie viele A gehören zu einem B?                │
│                                                          │
│ BEISPIEL: Filiale ←→ Fahrzeug                           │
│                                                          │
│ Frage 1: Wie viele Fahrzeuge hat eine Filiale?          │
│ Antwort: VIELE (N)                                       │
│                                                          │
│ Frage 2: Zu wie vielen Filialen gehört ein Fahrzeug?    │
│ Antwort: GENAU EINE (1)                                  │
│                                                          │
│ Ergebnis: 1:N Beziehung                                  │
│                                                          │
│  ┌──────────┐  1   ┌──────────┐  N   ┌──────────┐      │
│  │ FILIALE  │──────│   hat    │──────│ FAHRZEUG │      │
│  └──────────┘      └──────────┘      └──────────┘      │
│                                                          │
│ 📌 ESELSBRÜCKE:                                          │
│    1:1  = Eins-zu-Eins    (Selten)                       │
│    1:N  = Eins-zu-Viele   (Häufigste!)                   │
│    N:M  = Viele-zu-Viele  (Zwischentabelle nötig!)      │
└─────────────────────────────────────────────────────────┘
          ↓
┌─────────────────────────────────────────────────────────┐
│ SCHRITT 6: N:M BEZIEHUNGEN AUFLÖSEN                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Problem: N:M geht NICHT direkt in SQL!                  │
│                                                          │
│ Lösung: Zwischentabelle erstellen                        │
│                                                          │
│ VORHER:                                                  │
│  ┌──────────┐  N   ┌──────────┐  M   ┌──────────┐      │
│  │  KUNDE   │──────│  mietet  │──────│ FAHRZEUG │      │
│  └──────────┘      └──────────┘      └──────────┘      │
│                                                          │
│ NACHHER:                                                 │
│  ┌──────────┐  1   ┌──────────┐  N   ┌──────────┐      │
│  │  KUNDE   │──────│  MIETE   │──────│ FAHRZEUG │      │
│  └──────────┘      └──────────┘      └──────────┘      │
│                         │                                │
│                    ┌────┴─────┐                          │
│                    │  MietNr  │ ← Neuer Primärschlüssel  │
│                    │Startdatum│                          │
│                    │ Enddatum │                          │
│                    │KundenNr  │ ← Fremdschlüssel         │
│                    │FahrzeugNr│ ← Fremdschlüssel         │
│                    └──────────┘                          │
│                                                          │
│ 📌 REGEL: N:M → 2x 1:N mit Zwischenentität              │
│          Zwischentabelle enthält beide Fremdschlüssel!   │
└─────────────────────────────────────────────────────────┘
```

---

# 🎨 Vollständige Lösung: Fahrzeugverwaltung

## ER-Diagramm

```
     ┌──────────┐
     │ FilialNr │
     └─────┬────┘
           │
    ┌──────┴───────┐
    │   FILIALE    │
    │──────────────│
    │  FilialNr    │ ← Primärschlüssel
    │  Adresse     │
    │  Telefon     │
    └──────┬───────┘
           │
           │ 1
           │
      ┌────┴────┐
      │   hat   │
      └────┬────┘
           │ N
           │
    ┌──────┴───────┐
    │  FAHRZEUG    │
    │──────────────│
    │ FahrzeugNr   │ ← Primärschlüssel
    │  Marke       │
    │  Modell      │
    │  Baujahr     │
    │  Tagessatz   │
    │  FilialNr    │ ← Fremdschlüssel
    └──────┬───────┘
           │
           │ N
           │
      ┌────┴────┐
      │ betrifft│
      └────┬────┘
           │ 1
           │
    ┌──────┴───────┐
    │    MIETE     │ ← Zwischenentität
    │──────────────│
    │   MietNr     │ ← Primärschlüssel
    │  Startdatum  │
    │   Enddatum   │
    │ Gesamtpreis  │
    │  KundenNr    │ ← Fremdschlüssel
    │ FahrzeugNr   │ ← Fremdschlüssel
    └──────┬───────┘
           │
           │ N
           │
      ┌────┴────┐
      │  wird   │
      │  gemietet│
      │   von   │
      └────┬────┘
           │ 1
           │
    ┌──────┴───────┐
    │    KUNDE     │
    │──────────────│
    │  KundenNr    │ ← Primärschlüssel
    │    Name      │
    │   Adresse    │
    │Führerschein- │
    │   nummer     │
    └──────────────┘
```

## SQL-Implementierung

```sql
-- Schritt 1: Entitäten ohne Fremdschlüssel
CREATE TABLE Filiale (
    FilialNr INT PRIMARY KEY,
    Adresse VARCHAR(200) NOT NULL,
    Telefon VARCHAR(20)
);

CREATE TABLE Kunde (
    KundenNr INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Adresse VARCHAR(200),
    Fuehrerscheinnummer VARCHAR(20) NOT NULL
);

-- Schritt 2: Entität mit Fremdschlüssel (1:N)
CREATE TABLE Fahrzeug (
    FahrzeugNr INT PRIMARY KEY,
    Marke VARCHAR(50) NOT NULL,
    Modell VARCHAR(50) NOT NULL,
    Baujahr INT,
    Tagessatz DECIMAL(8,2) NOT NULL,
    FilialNr INT NOT NULL,
    FOREIGN KEY (FilialNr) REFERENCES Filiale(FilialNr)
);

-- Schritt 3: Zwischentabelle (N:M Auflösung)
CREATE TABLE Miete (
    MietNr INT PRIMARY KEY,
    Startdatum DATE NOT NULL,
    Enddatum DATE,
    Gesamtpreis DECIMAL(10,2),
    KundenNr INT NOT NULL,
    FahrzeugNr INT NOT NULL,
    FOREIGN KEY (KundenNr) REFERENCES Kunde(KundenNr),
    FOREIGN KEY (FahrzeugNr) REFERENCES Fahrzeug(FahrzeugNr)
);
```

---

# ✅ Checkliste ER-Diagramm

>[!check] Vor der Abgabe prüfen:
>- [ ] Alle relevanten Entitäten identifiziert?
>- [ ] Jede Entität hat einen Primärschlüssel?
>- [ ] Primärschlüssel unterstrichen?
>- [ ] Alle wichtigen Attribute eingetragen?
>- [ ] Beziehungen mit Rauten dargestellt?
>- [ ] Kardinalitäten (1:1, 1:N, N:M) angegeben?
>- [ ] N:M-Beziehungen aufgelöst (Zwischentabelle)?
>- [ ] Fremdschlüssel in den richtigen Tabellen?

>[!failure] Häufige Fehler in der AP2-Prüfung
>❌ Primärschlüssel nicht unterstrichen
>❌ Kardinalitäten vertauscht oder vergessen
>❌ N:M-Beziehung nicht aufgelöst
>❌ Attribute als eigene Entitäten (z.B. "Adresse" als Tabelle)
>❌ Fremdschlüssel auf der falschen Seite (bei 1:N)
>❌ Beziehungsattribute nicht erkannt (gehören zur Zwischentabelle!)
>❌ Zu viele oder zu wenige Entitäten

---

# 🎨 Entscheidungshilfe: Kardinalitäten bestimmen

```
┌─────────────────────────────────────────────────────────┐
│         WIE BESTIMME ICH KARDINALITÄTEN?                 │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Stelle DIR diese Fragen:                                │
│                                                          │
│ Entität A ←→ Entität B                                  │
│                                                          │
│ Frage 1: Wie viele B gehören zu EINEM A?                │
│ ┌────────────────────────────────────────┐              │
│ │ Genau 1    → 1                         │              │
│ │ 0 oder 1   → 0..1                      │              │
│ │ Mehrere    → N (oder M)                │              │
│ │ Mindestens → 1..N                      │              │
│ └────────────────────────────────────────┘              │
│                                                          │
│ Frage 2: Wie viele A gehören zu EINEM B?                │
│ ┌────────────────────────────────────────┐              │
│ │ Genau 1    → 1                         │              │
│ │ 0 oder 1   → 0..1                      │              │
│ │ Mehrere    → M (oder N)                │              │
│ │ Mindestens → 1..M                      │              │
│ └────────────────────────────────────────┘              │
│                                                          │
│ BEISPIELE:                                               │
│                                                          │
│ 📌 Person ←→ Ausweis                                    │
│   • Eine Person hat genau einen Ausweis → 1             │
│   • Ein Ausweis gehört zu einer Person → 1              │
│   Ergebnis: 1:1                                          │
│                                                          │
│ 📌 Abteilung ←→ Mitarbeiter                             │
│   • Eine Abteilung hat viele Mitarbeiter → N            │
│   • Ein Mitarbeiter gehört zu einer Abteilung → 1       │
│   Ergebnis: 1:N                                          │
│                                                          │
│ 📌 Student ←→ Kurs                                       │
│   • Ein Student belegt viele Kurse → M                  │
│   • Ein Kurs hat viele Studenten → N                    │
│   Ergebnis: N:M (Zwischentabelle!)                       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

# Weiterführende Ressourcen

📚 **Dokumentation**:
- "Database Systems" von Ramez Elmasri & Shamkant Navathe
- W3Schools: Database Design
- Oracle Database Modeling

🔧 **Tools**:
- **draw.io**: Kostenlos, einfach
- **Lucidchart**: Online, kollaborativ
- **MySQL Workbench**: ERM → SQL automatisch
- **dbdiagram.io**: Code-basierte Diagramme

---
{"dg-publish":true,"permalink":"/02-resources/notes/erm/","tags":["informatik/datenbank","datenmodellierung","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T12:06:34.000+01:00","dg-note-properties":{"aliases":["ERM","Entity Relationship Modell","Entity-Relationship-Modell","ER-Modell","ER-Diagramm"],"created_date":"2025-11-06","links":null,"tags":["informatik/datenbank","datenmodellierung","ausbildung/gfn/ap1/vorbereitung"]}}
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

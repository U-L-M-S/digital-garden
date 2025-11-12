---
{"dg-publish":true,"permalink":"/02-resources/notes/kardinalitaet/","tags":["ausbildung/gfn/ap1","ausbildung/gfn/ap2","GFN/prüfungsrelevant/AP2","informatik/datenbank"],"noteIcon":"","updated":"2025-11-12T15:22:20.000+01:00"}
---


>[[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]] beschreibt, wie viele Datensätze zwischen zwei Tabellen miteinander verbunden sein können.

>>In Datenbanken zeigt die [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]], ob eine Beziehung 1:1, 1:n oder n:m ist.

# I. Was ist Kardinalität?

>Die Anzahl-Regel für Beziehungen.

>[!note] Einfach erklärt
>Stell dir vor:
>- Eine Person hat **einen** Personalausweis → 1:1
>- Eine Mutter hat **mehrere** Kinder → 1:n
>- Viele Studenten in **vielen** Kursen → n:m
>
>Das ist [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]]!

```
Kardinalität = "Wie viele?"

Tabelle A ←──?──→ Tabelle B

? = 1:1, 1:n, oder n:m
```

# II. Die drei Arten

>Es gibt genau drei Möglichkeiten.

## 1 zu 1 (1:1)

>Jeder Datensatz hat genau einen Partner.

```
ASCII-Darstellung:

┌──────────┐  1      1  ┌──────────┐
│  PERSON  │────────────│  AUSWEIS │
└──────────┘            └──────────┘

Eine Person → Ein Ausweis
Ein Ausweis → Eine Person
```

>[!example] Beispiele für 1:1
>- Person ↔ Personalausweis
>- Land ↔ Hauptstadt
>- Mitarbeiter ↔ Arbeitsplatz
>- Kunde ↔ Kundennummer

>[!note] Siehe: [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]] für Details
>
>*Eine Person hat genau einen Ausweis - [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]] [[02 - RESOURCES/Notes/Relationship\|Relationship]]*

## 1 zu n (1:n)

>Ein Datensatz kann viele Partner haben.

```
ASCII-Darstellung:

┌──────────┐  1     n  ┌──────────┐
│  MUTTER  │───────────│   KIND   │
└──────────┘           └──────────┘

Eine Mutter → Viele Kinder
Ein Kind → Eine Mutter
```

>[!example] Beispiele für 1:n
>- Kunde → Bestellungen (1 Kunde, viele Bestellungen)
>- Lehrer → Schüler (1 Lehrer, viele Schüler)
>- Kategorie → Produkte (1 Kategorie, viele Produkte)
>- Autor → Bücher (1 Autor, viele Bücher)

>[!note] Siehe: [[02 - RESOURCES/Notes/1 zu n\|1 zu n]] für Details
>
>*Eine Mutter hat viele Kinder - [[02 - RESOURCES/Notes/1 zu n\|1 zu n]] [[02 - RESOURCES/Notes/Relationship\|Relationship]]*

## n zu m (n:m)

>Viele Datensätze können viele Partner haben.

```
ASCII-Darstellung:

┌──────────┐  n     m  ┌──────────┐
│  STUDENT │───────────│   KURS   │
└──────────┘           └──────────┘

Viele Studenten → Viele Kurse
Viele Kurse → Viele Studenten
```

>[!important] n:m braucht Zwischentabelle!
>In der Datenbank wird n:m aufgelöst:
>
>```
>┌──────────┐       ┌────────────┐       ┌──────────┐
>│  STUDENT │───┐   │ TEILNAHME  │   ┌───│   KURS   │
>└──────────┘ 1 │   │(Zwischen-  │   │ 1 └──────────┘
>               └──n│  tabelle)  │n──┘
>                   └────────────┘
>```

>[!example] Beispiele für n:m
>- Studenten ↔ Kurse (Viele Studenten in vielen Kursen)
>- Produkte ↔ Bestellungen (Viele Produkte in vielen Bestellungen)
>- Schauspieler ↔ Filme (Viele Schauspieler in vielen Filmen)
>- Autoren ↔ Bücher (Viele Autoren für viele Bücher)

>[!note] Siehe: [[02 - RESOURCES/Notes/n zu m\|n zu m]] für Details
>
>*Viele Studenten in vielen Kursen - [[02 - RESOURCES/Notes/n zu m\|n zu m]] [[02 - RESOURCES/Notes/Relationship\|Relationship]]*

# III. Kardinalität in der Praxis

>So erkennst und verwendest du [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]].

>[!tip] Fragen zur Ermittlung
>**Um die Kardinalität zu finden, frage:**
>
>**Von A nach B:**
>"Wie viele B kann ein A haben?"
>- Einer? → 1
>- Viele? → n
>
>**Von B nach A:**
>"Wie viele A kann ein B haben?"
>- Einer? → 1
>- Viele? → m/n
>
>**Beispiel Kunde-Bestellung:**
>- "Wie viele Bestellungen kann ein Kunde haben?" → Viele (n)
>- "Wie viele Kunden hat eine Bestellung?" → Einer (1)
>- **Ergebnis: 1:n**

>[!example] Detailliertes Beispiel
>**Szenario: Bibliothek**
>
>```
>BUCH ↔ AUTOR
>Frage 1: Wie viele Autoren kann ein Buch haben?
>→ Mehrere (z.B. Co-Autoren)
>
>Frage 2: Wie viele Bücher kann ein Autor schreiben?
>→ Mehrere
>
>Ergebnis: n:m (Zwischentabelle nötig!)
>
>     ┌──────┐       ┌──────────┐       ┌──────┐
>     │ BUCH │──n────│ VERFASST │───n───│ AUTOR│
>     └──────┘       │  (Zwischen-│      └──────┘
>                    │   tabelle) │
>                    └────────────┘
>                         │
>                      (Rolle)
>                    (z.B. Hauptautor)
>```

# IV. Kardinalität im ER-Modell

>So zeichnest du [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]] im [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]].

>[!important] Notation im ER-Diagramm
>**Crow's Foot Notation:**
>```
>1   = ──│  (senkrechter Strich)
>n/m = ──<  (Krähenfuß)
>
>Beispiele:
>
>1:1 = ──│────│──
>1:n = ──│────<──
>n:m = ──<────<──
>```
>
>**Min-Max Notation:**
>```
>(1,1) = genau eins
>(0,1) = null oder eins
>(1,n) = eins oder viele
>(0,n) = null oder viele
>(1,*) = mindestens eins
>```

# V. Umsetzung in SQL

>So setzt du [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]] in der Datenbank um.

>[!example] SQL-Implementierung
>
>**1:1 Beziehung:**
>```sql
>-- Eindeutiger [[Foreign Key]]
>CREATE TABLE Person (
>    PersonID INT PRIMARY KEY,  -- [[Primary Key]]
>    Name VARCHAR(100)
>);
>
>CREATE TABLE Ausweis (
>    AusweisID INT PRIMARY KEY,  -- [[Primary Key]]
>    PersonID INT UNIQUE,  ← UNIQUE macht es 1:1
>    Nummer VARCHAR(20),
>    FOREIGN KEY (PersonID) REFERENCES Person(PersonID)  -- [[Foreign Key]]
>);
>```
>
>**1:n Beziehung:**
>```sql
>CREATE TABLE Kunde (
>    KundeID INT PRIMARY KEY,  -- [[Primary Key]]
>    Name VARCHAR(100)
>);
>
>CREATE TABLE Bestellung (
>    BestellID INT PRIMARY KEY,  -- [[Primary Key]]
>    KundeID INT,  ← Kein UNIQUE = 1:n ([[Foreign Key]])
>    Datum DATE,
>    FOREIGN KEY (KundeID) REFERENCES Kunde(KundeID)
>);
>```
>
>**n:m Beziehung:**
>```sql
>CREATE TABLE Student (
>    StudentID INT PRIMARY KEY,  -- [[Primary Key]]
>    Name VARCHAR(100)
>);
>
>CREATE TABLE Kurs (
>    KursID INT PRIMARY KEY,  -- [[Primary Key]]
>    Titel VARCHAR(100)
>);
>
>-- Zwischentabelle für n:m ([[SQL]])
>CREATE TABLE Teilnahme (
>    StudentID INT,  -- [[Foreign Key]]
>    KursID INT,  -- [[Foreign Key]]
>    Note DECIMAL(2,1),
>    PRIMARY KEY (StudentID, KursID),  ← Kombinierter [[Primary Key]]
>    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
>    FOREIGN KEY (KursID) REFERENCES Kurs(KursID)
>);
>```

# VI. Häufige Fehler

>[!warning] Typische Fehler
>**1. n:m nicht auflösen:**
>```
>❌ FALSCH:
>Student ←→ Kurs direkt verbinden
>
>✅ RICHTIG:
>Student ← Teilnahme → Kurs
>(Zwischentabelle verwenden!)
>```
>
>**2. Falsche Richtung:**
>```
>❌ FALSCH:
>"Ein Kind hat viele Mütter" (n:1)
>
>✅ RICHTIG:
>"Eine Mutter hat viele Kinder" (1:n)
>```
>
>**3. UNIQUE vergessen bei 1:1:**
>```sql
>❌ FALSCH:
>PersonID INT  ← Erlaubt mehrfache Einträge!
>
>✅ RICHTIG:
>PersonID INT UNIQUE  ← Erzwingt 1:1
>```

# VII. Prüfungswissen

>[!important] Prüfungsrelevant
>**Drei Arten kennen:**
>- 1:1 (eins zu eins)
>- 1:n (eins zu viele)
>- n:m (viele zu viele)
>
>**Erkennen können:**
>- Fragen stellen: "Wie viele?"
>- Von beiden Seiten prüfen
>- n:m braucht Zwischentabelle
>
>**Zeichnen können:**
>- Im ER-Diagramm darstellen
>- Mit Crow's Foot Notation
>- Korrekte Richtung beachten

>[!example] Typische Prüfungsfrage
>**Frage:** "Bestimmen Sie die Kardinalität zwischen den Entitäten Arzt und Patient. Ein Arzt behandelt viele Patienten, ein Patient kann von mehreren Ärzten behandelt werden."
>
>**Antwort:**
>Die Kardinalität ist **n:m** (viele zu viele).
>
>**Begründung:**
>- Ein Arzt kann viele Patienten behandeln (1:n von Arzt aus)
>- Ein Patient kann von vielen Ärzten behandelt werden (1:n von Patient aus)
>- Beides zusammen ergibt n:m
>
>**Umsetzung:**
>```
>  ┌──────┐       ┌────────────┐       ┌─────────┐
>  │ ARZT │───n───│ BEHANDLUNG │───n───│ PATIENT │
>  └──────┘       │(Zwischen-  │       └─────────┘
>                 │  tabelle)  │
>                 └────────────┘
>                      │
>                   (Datum)
>                   (Diagnose)
>```

# VIII. Zusammenfassung

>[!summary] Das Wichtigste
>**Kardinalität beschreibt:**
>- Wie viele Datensätze verbunden sein können
>- Drei Arten: 1:1, 1:n, n:m
>- Wichtig für Datenbank-Design
>
>**Merkregel:**
>```
>1:1 → Eindeutig beidseitig
>1:n → Einer hat viele
>n:m → Viele haben viele → Zwischentabelle!
>```
>
>**Siehe auch:**
>- [[02 - RESOURCES/Notes/1 zu 1\|1 zu 1]] für 1:1 Details
>- [[02 - RESOURCES/Notes/1 zu n\|1 zu n]] für 1:n Details
>- [[02 - RESOURCES/Notes/n zu m\|n zu m]] für n:m Details
>- [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] für Gesamtkontext
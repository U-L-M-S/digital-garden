---
{"dg-publish":true,"permalink":"/02-resources/notes/er-modell/","tags":["datenmodellierung/konzeptionell","datenbank/design","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:21:45.000+01:00"}
---


>Das [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] (Entity-Relationship-Modell) ist ein Plan für Datenbanken. Es zeigt, welche Daten es gibt und wie sie zusammenhängen.

>>Mit dem [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] planst du die Struktur deiner Datenbank, bevor du sie baust.

# I. Was ist das ER-Modell?

>Ein Werkzeug zum Planen von Datenbanken.

>[!note] Einfach erklärt
>Das [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] ist wie eine Landkarte für deine Datenbank:
>- Zeigt alle wichtigen "Dinge" (Entitäten)
>- Zeigt deren Eigenschaften (Attribute)
>- Zeigt wie sie verbunden sind (Beziehungen)
>
>**Beispiel Bibliothek:**
>- Entitäten: Buch, Kunde, Ausleihe
>- Attribute: Buchtitel, Kundennummer
>- Beziehungen: Kunde leiht Buch aus

# II. Die drei Grundelemente

>Aus diesen Teilen besteht das [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]].

>[!important] ER-Komponenten
>
>**1. [[02 - RESOURCES/Notes/Entität\|Entität]]en (Rechtecke)**
>```
>┌──────────┐
>│  KUNDE   │  ← Objekt der realen Welt
>└──────────┘
>```
>- Dinge, die du speichern willst
>- Z.B. Kunde, Produkt, Rechnung
>- Immer GROSSGESCHRIEBEN
>
>**2. Attribute (Ovale)**
>```
>    (Name)
>      │
>┌─────┴────┐
>│  KUNDE   │
>└─────┬────┘
>      │
>   (Alter)
>```
>- Eigenschaften der Entitäten
>- Z.B. Name, Preis, Datum
>- In Klammern oder Ovalen
>
>**3. [[02 - RESOURCES/Notes/Relationship\|Beziehungen]] (Rauten)**
>```
>┌────────┐     ┌──────────┐     ┌─────────┐
>│ KUNDE  │────<│ BESTELLT │>────│ PRODUKT │
>└────────┘     └──────────┘     └─────────┘
>```
>- Verbindungen zwischen [[02 - RESOURCES/Notes/Entität\|Entität]]en
>- Z.B. kauft, gehört zu, liefert
>- Als Verb formulieren

# III. Kardinalität

>Wie viele Objekte können miteinander verbunden sein?

>[!important] [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]]
>**Die drei Arten:**
>
>| Notation | Name    | Bedeutung                      |
>|----------|---------|--------------------------------|
>| **[[02 - RESOURCES/Notes/1 zu 1\|1:1]]**  | Eins zu eins | Jeder hat genau einen   |
>| **[[02 - RESOURCES/Notes/1 zu n\|1:n]]**  | Eins zu viele| Einer hat viele         |
>| **[[02 - RESOURCES/Notes/n zu m\|n:m]]**  | Viele zu viele| Viele haben viele      |
>
>**Beispiele:**
>```
>1:1 - Person ── hat ── Ausweis
>      (Jede Person hat genau einen Ausweis)
>
>1:n - Mutter ── hat ── Kinder
>      (Eine Mutter kann viele Kinder haben)
>
>n:m - Student ── besucht ── Kurs
>      (Viele Studenten in vielen Kursen)
>```

>[!note] Siehe: [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]] für Details

# IV. Vollständiges Beispiel

>So sieht ein [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] in der Praxis aus.

>[!example] Online-Shop
>```
>(Name)  (Adresse)         (Titel)  (Preis)
>   │       │                 │        │
>   └───┬───┘                 └────┬───┘
>   ┌───┴────┐     ┌──────────┐   ┌┴────────┐
>   │ KUNDE  │────<│ BESTELLT │>──│ PRODUKT │
>   └────────┘  1  └──────────┘ n └─────────┘
>                       │
>                       │ (Datum)
>                       │ (Menge)
>
>Erklärung:
>- Ein Kunde kann viele Produkte bestellen (1:n)
>- Bestellung hat Attribute: Datum, Menge
>- Kunde hat: Name, Adresse
>- Produkt hat: Titel, Preis
>```

```
Detailliertes ASCII-Diagramm:

 ┌──────────────────────────────────────────────┐
 │                                              │
 │    (Email)    (Telefon)                      │
 │       │          │                           │
 │   ┌───┴──────────┴──┐                        │
 │   │     KUNDE       │                        │
 │   ├─────────────────┤                        │
 │   │ PK: KundenID    │                        │
 │   └────────┬────────┘                        │
 │            │                                 │
 │            │ 1                               │
 │            │                                 │
 │            ◇                                 │
 │      ┌─────┴────────┐                        │
 │      │   BESTELLT   │                        │
 │      └─────┬────────┘                        │
 │            │                                 │
 │            │ n                               │
 │            │                                 │
 │   ┌────────┴────────┐                        │
 │   │    PRODUKT      │                        │
 │   ├─────────────────┤                        │
 │   │ PK: ProduktID   │                        │
 │   └─────────────────┘                        │
 │       │          │                           │
 │   (Preis)    (Lager)                         │
 │                                              │
 └──────────────────────────────────────────────┘

Legende:
PK = Primary Key (Primärschlüssel)
1:n = Ein Kunde, viele Produkte
◇ = Beziehung
```

# V. Vom ER-Modell zur Datenbank

>So wird aus dem Modell eine echte Datenbank.

>[!tip] Umwandlung in Tabellen
>**Schritt 1: Entitäten → Tabellen**
>```
>KUNDE → Tabelle "Kunde"
>├─ KundenID ([[02 - RESOURCES/Notes/Primary Key\|Primary Key]])
>├─ Name
>├─ Adresse
>└─ Email
>```
>
>**Schritt 2: Beziehungen → Fremdschlüssel**
>```
>1:n Beziehung:
>[[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] auf der "n"-Seite
>
>Bestellung:
>├─ BestellID ([[Primary Key]])
>├─ KundenID ([[Foreign Key]])  ← Verweis auf Kunde
>├─ Datum
>└─ Menge
>```
>
>**Schritt 3: n:m Beziehungen → Zwischentabelle**
>```
>Student ←→ Kurs
>
>Neue Tabelle "Teilnahme":
>├─ StudentID ([[Foreign Key]])
>├─ KursID ([[Foreign Key]])
>└─ Note
>```

>[!success] Grundlage für Datenbank-Design
>Das [[02 - RESOURCES/Notes/ER-Modell\|ER-Modell]] ist der erste Schritt beim Erstellen einer Datenbank. Danach kommen:
>1. ER-Modell erstellen
>2. In Tabellen umwandeln mit [[Primary Key]] und [[Foreign Key]]
>3. [[02 - RESOURCES/Notes/Normalisierung\|Normalisierung]] anwenden: [[02 - RESOURCES/Notes/1. Normalform\|1. Normalform]], [[02 - RESOURCES/Notes/2. Normalform\|2. Normalform]], [[02 - RESOURCES/Notes/3. Normalform\|3. Normalform]]
>4. Datenbank implementieren mit [[02 - RESOURCES/Notes/SQL\|SQL]]

# VI. Prüfungswissen

>[!important] Prüfungsrelevant
>**Grundelemente kennen:**
>- Entität (Rechteck)
>- Attribut (Oval)
>- Beziehung (Raute)
>- [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]] (1:1, 1:n, n:m)
>
>**ER-Diagramm zeichnen können:**
>- Entitäten identifizieren
>- Attribute zuordnen
>- Beziehungen benennen
>- Kardinalität angeben
>
>**Typische Aufgaben:**
>- "Erstellen Sie ein ER-Modell für..."
>- "Welche Kardinalität hat die Beziehung?"
>- "Wandeln Sie das ER-Modell in Tabellen um"

>[!example] Typische Prüfungsfrage
>**Frage:** "Erstellen Sie ein ER-Modell für eine Schulverwaltung mit Lehrern, Schülern und Klassen."
>
>**Antwort:**
>```
>  ┌─────────┐     ┌──────────┐     ┌─────────┐
>  │ LEHRER  │────<│ UNTERRICHT│>────│ KLASSE  │
>  └─────────┘  n  └──────────┘  m  └─────────┘
>      │                                  │
>   (Name)                             (Raum)
>   (Fach)                              │
>                                       │
>                                  ┌────┴────┐
>                                  │ SCHÜLER │
>                                  └─────────┘
>                                       │
>                                    (Name)
>                                    (Alter)
>
>Erklärung:
>- n:m zwischen Lehrer und Klasse (Lehrer unterrichtet mehrere Klassen, Klasse hat mehrere Lehrer)
>- 1:n zwischen Klasse und Schüler (Klasse hat viele Schüler)
>```
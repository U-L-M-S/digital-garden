---
{"dg-publish":true,"permalink":"/wiki/normalisierung/","tags":["informatik/datenbank","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.821+02:00","dg-note-properties":{"tags":["informatik/datenbank","ausbildung/pruefung"],"aliases":["Datenbanknormalisierung","Normalisierungsformen"],"links":null,"created_date":"2025-11-12"}}
---

>Normalisierung ist ein Prozess in der Datenbankentwicklung, um [[wiki/Redundanz\|Redundanz]] zu vermeiden und Datenintegrität sicherzustellen.
>>Durch Normalisierung werden Tabellen in mehrere kleinere Tabellen aufgeteilt, die über Beziehungen ([[wiki/Foreign Key\|Foreign Key]]) verbunden sind.

```
Normalisierung - Übersicht:

Unnormalisierte Tabelle
         │
         │ Schritt 1
         ▼
┌────────────────────┐
│  1. Normalform     │ ← Atomare Werte
│  (1NF)             │   Keine Wiederholgruppen
└──────────┬─────────┘
           │ Schritt 2
           ▼
┌────────────────────┐
│  2. Normalform     │ ← Keine partiellen
│  (2NF)             │   Abhängigkeiten
└──────────┬─────────┘
           │ Schritt 3
           ▼
┌────────────────────┐
│  3. Normalform     │ ← Keine transitiven
│  (3NF)             │   Abhängigkeiten
└────────────────────┘

Warum Normalisieren?

Problem: Redundanz (Daten-Dopplung)
┌────────────────────────────────────┐
│ StudentID │ Name  │ Kurs │ Dozent │
├───────────┼───────┼──────┼────────┤
│    1      │ Max   │ Math │ Müller │
│    1      │ Max   │ Bio  │ Wagner │ ← Name doppelt!
│    2      │ Anna  │ Math │ Müller │ ← Dozent doppelt!
└────────────────────────────────────┘

Lösung: Normalisierung
Tabelle 1: Student     Tabelle 2: Kurs
┌────┬──────┐         ┌────┬──────┬────────┐
│ ID │ Name │         │ ID │ Name │ Dozent │
├────┼──────┤         ├────┼──────┼────────┤
│ 1  │ Max  │         │ 1  │ Math │ Müller │
│ 2  │ Anna │         │ 2  │ Bio  │ Wagner │
└────┴──────┘         └────┴──────┴────────┘
        ↑                     ↑
        │                     │
        └──────┬──────────────┘
               │
    Tabelle 3: Einschreibung
    ┌───────────┬─────────┐
    │ StudentID │ KursID  │
    ├───────────┼─────────┤
    │     1     │    1    │
    │     1     │    2    │
    │     2     │    1    │
    └───────────┴─────────┘

Vorteile der Normalisierung:

┌─────────────────┐
│ KEINE Redundanz │ ← Daten nur einmal gespeichert
└────────┬────────┘
         │
┌────────▼────────┐
│ Konsistenz      │ ← Änderungen nur an einer Stelle
└────────┬────────┘
         │
┌────────▼────────┐
│ Integrität      │ ← Keine Anomalien
└────────┬────────┘
         │
┌────────▼────────┐
│ Platzersparnis  │ ← Weniger Speicherplatz
└─────────────────┘

Nachteile der Normalisierung:

┌──────────────────┐
│ Komplexere       │
│ Abfragen (JOINs) │
└────────┬─────────┘
         │
┌────────▼─────────┐
│ Mehr Tabellen    │
└────────┬─────────┘
         │
┌────────▼─────────┐
│ Langsamer bei    │
│ vielen JOINs     │
└──────────────────┘
```

## Die Normalformen

>[!summary] Übersicht der Normalformen
>1. **[[wiki/1. Normalform\|1. Normalform]] (1NF)**: Atomare Werte, keine Wiederholgruppen
>2. **[[wiki/2. Normalform\|2. Normalform]] (2NF)**: 1NF + keine partiellen Abhängigkeiten
>3. **[[wiki/3. Normalform\|3. Normalform]] (3NF)**: 2NF + keine transitiven Abhängigkeiten
>
>(Es gibt auch BCNF, 4NF, 5NF - für AP2 meist nicht relevant)

## Beispiel: Von unnormalisiert zu 3NF

>[!example] Ausgangssituation (Unnormalisiert)
>```
>┌────────┬──────┬──────────────────┬────────────────┐
>│Student │ Name │ Kurse            │ Dozenten       │
>├────────┼──────┼──────────────────┼────────────────┤
>│   1    │ Max  │ Math, Bio, Chem  │ M, Wagner, S   │
>│   2    │ Anna │ Math, Physics    │ M, Becker      │
>└────────┴──────┴──────────────────┴────────────────┘
>
>Problem: Mehrere Werte in einer Zelle!
>```

>[!example] 1. Normalform (1NF)
>```
>┌────────┬──────┬──────┬────────┐
>│Student │ Name │ Kurs │ Dozent │
>├────────┼──────┼──────┼────────┤
>│   1    │ Max  │ Math │ Müller │
>│   1    │ Max  │ Bio  │ Wagner │
>│   1    │ Max  │ Chem │ Schmidt│
>│   2    │ Anna │ Math │ Müller │
>│   2    │ Anna │ Phys │ Becker │
>└────────┴──────┴──────┴────────┘
>
>Problem: Name und Dozent mehrfach gespeichert!
>```

>[!example] 2. Normalform (2NF)
>```
>Student:                  Kurs:
>┌────┬──────┐            ┌────┬──────┬────────┐
>│ ID │ Name │            │ ID │ Name │ Dozent │
>├────┼──────┤            ├────┼──────┼────────┤
>│ 1  │ Max  │            │ 1  │ Math │ Müller │
>│ 2  │ Anna │            │ 2  │ Bio  │ Wagner │
>└────┴──────┘            │ 3  │ Chem │ Schmidt│
>                         │ 4  │ Phys │ Becker │
>Einschreibung:           └────┴──────┴────────┘
>┌───────────┬─────────┐
>│ StudentID │ KursID  │  Problem: Dozent hängt
>├───────────┼─────────┤  von Kurs ab (transitiv)
>│     1     │    1    │
>│     1     │    2    │
>│     1     │    3    │
>│     2     │    1    │
>│     2     │    4    │
>└───────────┴─────────┘
>```

>[!example] 3. Normalform (3NF)
>```
>Student:              Kurs:
>┌────┬──────┐        ┌────┬──────┬──────────┐
>│ ID │ Name │        │ ID │ Name │ DozentID │ ← FK!
>├────┼──────┤        ├────┼──────┼──────────┤
>│ 1  │ Max  │        │ 1  │ Math │    1     │
>│ 2  │ Anna │        │ 2  │ Bio  │    2     │
>└────┴──────┘        │ 3  │ Chem │    3     │
>                     │ 4  │ Phys │    4     │
>Dozent:              └────┴──────┴──────────┘
>┌────┬─────────┐
>│ ID │ Name    │    Einschreibung:
>├────┼─────────┤    ┌───────────┬─────────┐
>│ 1  │ Müller  │    │ StudentID │ KursID  │
>│ 2  │ Wagner  │    ├───────────┼─────────┤
>│ 3  │ Schmidt │    │     1     │    1    │
>│ 4  │ Becker  │    │     1     │    2    │
>└────┴─────────┘    │     1     │    3    │
>                    │     2     │    1    │
>                    │     2     │    4    │
>                    └───────────┴─────────┘
>
>✓ Keine Redundanz mehr!
>```

## Anomalien (Probleme ohne Normalisierung)

```
Anomalien bei unnormalisierten Tabellen:

1. Einfüge-Anomalie:
   ┌────────────────────────────────┐
   │ Kann keinen neuen Dozenten    │
   │ hinzufügen ohne Student/Kurs  │
   └────────────────────────────────┘

2. Änderungs-Anomalie:
   ┌────────────────────────────────┐
   │ Dozent-Name ändern = Alle      │
   │ Zeilen ändern (inkonsistent!)  │
   └────────────────────────────────┘

3. Lösch-Anomalie:
   ┌────────────────────────────────┐
   │ Letzten Student löschen =      │
   │ Kurs-Info geht verloren!       │
   └────────────────────────────────┘
```

>[!important] Prüfungsrelevant
>**Was ist Normalisierung?**
>- Prozess zur Strukturierung von Datenbanken
>- Ziel: [[wiki/Redundanz\|Redundanz]] vermeiden
>- Ergebnis: Mehrere verknüpfte Tabellen
>
>**Die 3 Normalformen:**
>1. **1NF**: Atomare Werte (keine Listen in Zellen)
>2. **2NF**: + Keine partiellen Abhängigkeiten
>3. **3NF**: + Keine transitiven Abhängigkeiten
>
>**Vorteile:**
>- Keine Daten-Dopplung
>- Konsistente Daten
>- Keine Anomalien

>[!warning] Denormalisierung
>Manchmal ist es sinnvoll, NICHT zu normalisieren:
>- Bei sehr vielen JOINs (Performance)
>- Bei Data Warehouses (Analytics)
>- Bei Read-Heavy Anwendungen
>
>Das nennt man **Denormalisierung** - bewusst Redundanz einbauen!

>[!tip] Faustregel für die Prüfung
>1. Frage: "Sind alle Werte atomar?" → Wenn ja: 1NF ✓
>2. Frage: "Hängen alle Attribute vom GANZEN Primärschlüssel ab?" → Wenn ja: 2NF ✓
>3. Frage: "Hängt ein Attribut von einem anderen Nicht-Schlüssel-Attribut ab?" → Wenn nein: 3NF ✓

>[!note] Siehe auch
>- [[wiki/1. Normalform\|1. Normalform]] - Erste Normalisierungsstufe
>- [[wiki/2. Normalform\|2. Normalform]] - Zweite Normalisierungsstufe
>- [[wiki/3. Normalform\|3. Normalform]] - Dritte Normalisierungsstufe
>- [[wiki/Redundanz\|Redundanz]] - Was vermieden werden soll
>- [[wiki/Primary Key\|Primary Key]] - Eindeutige Identifikation
>- [[wiki/Foreign Key\|Foreign Key]] - Verknüpfung zwischen Tabellen

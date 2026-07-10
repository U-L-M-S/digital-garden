---
{"dg-publish":true,"permalink":"/wiki/lf-05-software-zur-verwaltung-von-daten-anpassen/","tags":["status/in-progress","informatik/datenbank","informatik/code/sql","informatik/programmierung/sprachen/python","GFN/LF05"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"tags":["status/in-progress","informatik/datenbank","informatik/code/sql","informatik/programmierung/sprachen/python","GFN/LF05"],"links":null,"reference":null,"path":"GFN","created":"2024-05-03 18:10"}}
---

> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.

>Hier passt du [[wiki/Software\|Software]] so an, dass sie [[Daten\|Daten]] sinnvoll speichert, abfragt und verändert.
>>Du lernst die Basics von [[Datenbanken\|Datenbanken]], [[Modellierung\|Modellierung]] (ERM), [[wiki/SQL\|SQL]], einfache [[wiki/Python\|Python]]‑Anwendungen, Dateizugriffe, sowie [[Testen\|Testen]] und [[Dokumentation\|Dokumentation]].

# I. Warum Daten verwalten?
>Ohne Struktur wirst du langsam, machst Fehler und findest nichts wieder.
>>Mit [[wiki/Datenbank\|Datenbank]] + Regeln (Modell, Normalisierung, [[wiki/SQL\|SQL]]) werden Daten verlässlich, schnell und auswertbar.
___

## Kernideen (sehr kurz)
- [[Daten\|Daten]] vs. [[Information\|Information]]: Daten sind Rohmaterial; Information entsteht durch Bedeutung.
- [[DBMS\|DBMS]]: Software, die Daten speichert, schützt und zugreifbar macht.
- Ziel: Weniger Redundanz, mehr Konsistenz, klare Zugriffe (CRUD: Create/Read/Update/Delete).

# II. Modellieren mit [[wiki/ERM\|ERM]] (vor der Technik denken)
>Erst Fachwelt verstehen, dann Tabellen bauen.
>>Du beschreibst Dinge (Entitäten), Eigenschaften (Attribute) und Beziehungen.
___

## Bausteine
- [[wiki/Entität\|Entität]]/[[Entitätstyp\|Entitätstyp]]: „Ding“ der Fachwelt (z. B. Kunde, Artikel)
- [[wiki/Attribut\|Attribut]]: Eigenschaft (z. B. KundenNr als [[wiki/Schlüsselattribut\|Schlüsselattribut]])
- [[Beziehung\|Beziehung]]: Verknüpfung (z. B. Kunde kauft Artikel)
- [[wiki/Kardinalität\|Kardinalität]]: 1:1, 1:n, m:n (wie viele gehören zusammen?)

### Mini‑Beispiel (Konzept → Tabellen)
| Konzept | Tabelle | Schlüssel |
|--------|---------|-----------|
| Kunde | `Kunde` | [[wiki/Primary Key\|Primary Key]] `KundenNr` |
| Artikel | `Artikel` | [[wiki/Primary Key\|Primary Key]] `ArtikelNr` |
| Kauf (1:n) | `Bestellung` | [[wiki/Foreign Key\|Foreign Key]] `KundenNr`, `ArtikelNr` |

>[!tip]
>m:n wird zu eigener Tabelle (Zwischentabelle) mit zwei [[wiki/Foreign Key\|Foreign Key]]s.

# III. Relationales [[Datenmodell\|Datenmodell]] und Normalisierung
>Tabellen + Schlüssel + Regeln = saubere Daten.
>>Normalisierung reduziert Redundanz und vermeidet [[wiki/Anomalie\|Anomalie]]n.
___

## Kurzformeln fürs Denken
- Schlüssel: [[wiki/Primary Key\|Primary Key]] eindeutig, [[wiki/Foreign Key\|Foreign Key]] verweist auf Primärschlüssel.
- [[Referentielle Integrität\|Referentielle Integrität]]: Kein verwaister Verweis.
- Normalformen (Daumenregel):
  - 1NF: Nur atomare Werte (keine Listen in Zellen).
  - 2NF: Nicht‑Schlüsselattribute hängen vom ganzen Schlüssel ab.
  - 3NF: Keine transitiven Abhängigkeiten von Nicht‑Schlüsselattributen.

# IV. [[wiki/SQL\|SQL]] – sprechen mit der Datenbank
>Du beschreibst, was du willst – das [[DBMS\|DBMS]] macht den Plan.
>>Aufgeteilt in DDL, DML, DCL, [[TCL\|TCL]].
___

## Wichtigste Kommandos (mini‑Spickzettel)
- DDL (Struktur): `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`
- DML (Daten): `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- TCL (Transaktionen): `COMMIT`, `ROLLBACK`

### Abfrage‑Beispiel (Join)
```sql
SELECT p.Name, a.Abteilungsname
FROM Person p
JOIN Abteilung a ON a.AbtID = p.AbtID
WHERE a.Abteilungsname = 'Buchhaltung';
```

>[!warning]
>Immer `WHERE` beachten bei `UPDATE`/`DELETE` – sonst änderst du ALLE Zeilen.

# V. Dateien in Anwendungen nutzen
>Programme lesen/schreiben Daten aus/zu Files (CSV, JSON, Bilder, Logs).
>>Ein sauberer Datei‑Zugriff braucht Pfad‑Handling, Fehlerbehandlung, und [[Encoding\|Encoding]].
___

## Praktische Basics (Python‑Denke)
- Öffnen/Schließen sicher (Kontextmanager), try/except für Fehler.
- Formate: CSV für Tabellen, JSON für strukturierte Objekte.
- Pfade: relativ statt absolut; keine Geheimnisse im Klartext.

# VI. Einfache Anwendungen bauen (z. B. [[wiki/Python\|Python]])
>Klein anfangen: Daten einlesen → validieren → speichern → anzeigen.
>>Klarer Ablauf hilft: Eingabe → Verarbeitung → Ausgabe.
___

## Konstruktionsmuster
- [[Funktionen\|Funktionen]] klein halten, sprechende Namen.
- Trennen: Logik, Datenzugriff, Darstellung.
- Fehler und Kantenfälle testen (leer, kaputt, doppelt).

# VII. [[Testen\|Testen]] und [[Dokumentation\|Dokumentation]]
>Qualität ist kein Zufall – du planst sie ein.
>>Tests fangen Fehler früh, Doku macht dich und andere schneller.
___

## Test‑Landkarte
- Stufen: [[Modultest\|Modultest]] → [[wiki/Integrationstest\|Integrationstest]] → [[wiki/Systemtest\|Systemtest]] → [[Abnahmetest\|Abnahmetest]]
- Verfahren: [[Black-Box-Test\|Black-Box-Test]] (Spezifikation), [[White-Box-Test\|White-Box-Test]] (Code‑Struktur)
- Flow (optional [[wiki/tdd\|TDD]]): RED → GREEN → REFACTOR

## Doku‑Arten
- Entwickler: Architektur, Modelle, Schnittstellen, [[Testdokumentation\|Testdokumentation]]
- Nutzer/Admin: Handbuch, Installation, Betrieb, Troubleshooting

# VIII. Mini‑Checklisten (Alltag)
>Schnell prüfen, ob du auf Kurs bist.
___

## Modell/Schema
- Habe ich Entitäten, Attribute, Beziehungen klar?
- Passen [[wiki/Kardinalität\|Kardinalität]]en? Brauche ich eine m:n‑Zwischentabelle?
- 3NF erreicht? Schlüssel sauber?

## SQL/Transaktionen
- Habe ich Joins korrekt (PK/FK) gesetzt?
- Sind Filter (`WHERE`) korrekt und getestet?
- Brauche ich `COMMIT`/`ROLLBACK` (Konsistenz)?

## Code/Dateien
- Eingaben validiert? Fehler abgefangen?
- Dateien mit Kontextmanager geöffnet? Pfade relativ?
- Keine Geheimnisse im Repo/Log?

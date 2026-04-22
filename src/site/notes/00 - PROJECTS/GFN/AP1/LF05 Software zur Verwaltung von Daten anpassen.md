---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-1/lf-05-software-zur-verwaltung-von-daten-anpassen/","tags":["inProgress","informatik/datenbank","informatik/code/SQL","informatik/code/python","GFN/LF05"],"noteIcon":"","updated":"2025-10-29T09:17:59.000+01:00"}
---

> Du kannst gerne unter [meinem GitHub](https://github.com/U-L-M-S/digital-garden) mithelfen.

>Hier passt du [[02 - RESOURCES/Notes/Software\|Software]] so an, dass sie [[Daten\|Daten]] sinnvoll speichert, abfragt und verändert.
>>Du lernst die Basics von [[Datenbanken\|Datenbanken]], [[Modellierung\|Modellierung]] (ERM), [[02 - RESOURCES/Notes/SQL\|SQL]], einfache [[02 - RESOURCES/Notes/Python\|Python]]‑Anwendungen, Dateizugriffe, sowie [[Testen\|Testen]] und [[Dokumentation\|Dokumentation]].

# I. Warum Daten verwalten?
>Ohne Struktur wirst du langsam, machst Fehler und findest nichts wieder.
>>Mit [[02 - RESOURCES/Notes/Datenbank\|Datenbank]] + Regeln (Modell, Normalisierung, [[02 - RESOURCES/Notes/SQL\|SQL]]) werden Daten verlässlich, schnell und auswertbar.
___

## Kernideen (sehr kurz)
- [[Daten\|Daten]] vs. [[Information\|Information]]: Daten sind Rohmaterial; Information entsteht durch Bedeutung.
- [[DBMS\|DBMS]]: Software, die Daten speichert, schützt und zugreifbar macht.
- Ziel: Weniger Redundanz, mehr Konsistenz, klare Zugriffe (CRUD: Create/Read/Update/Delete).

# II. Modellieren mit [[02 - RESOURCES/Notes/ERM\|ERM]] (vor der Technik denken)
>Erst Fachwelt verstehen, dann Tabellen bauen.
>>Du beschreibst Dinge (Entitäten), Eigenschaften (Attribute) und Beziehungen.
___

## Bausteine
- [[02 - RESOURCES/Notes/Entität\|Entität]]/[[Entitätstyp\|Entitätstyp]]: „Ding“ der Fachwelt (z. B. Kunde, Artikel)
- [[02 - RESOURCES/Notes/Attribut\|Attribut]]: Eigenschaft (z. B. KundenNr als [[02 - RESOURCES/Notes/Schlüsselattribut\|Schlüsselattribut]])
- [[Beziehung\|Beziehung]]: Verknüpfung (z. B. Kunde kauft Artikel)
- [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]]: 1:1, 1:n, m:n (wie viele gehören zusammen?)

### Mini‑Beispiel (Konzept → Tabellen)
| Konzept | Tabelle | Schlüssel |
|--------|---------|-----------|
| Kunde | `Kunde` | [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] `KundenNr` |
| Artikel | `Artikel` | [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] `ArtikelNr` |
| Kauf (1:n) | `Bestellung` | [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] `KundenNr`, `ArtikelNr` |

>[!tip]
>m:n wird zu eigener Tabelle (Zwischentabelle) mit zwei [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]]s.

# III. Relationales [[Datenmodell\|Datenmodell]] und Normalisierung
>Tabellen + Schlüssel + Regeln = saubere Daten.
>>Normalisierung reduziert Redundanz und vermeidet [[02 - RESOURCES/Notes/Anomalie\|Anomalie]]n.
___

## Kurzformeln fürs Denken
- Schlüssel: [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] eindeutig, [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] verweist auf Primärschlüssel.
- [[Referentielle Integrität\|Referentielle Integrität]]: Kein verwaister Verweis.
- Normalformen (Daumenregel):
  - 1NF: Nur atomare Werte (keine Listen in Zellen).
  - 2NF: Nicht‑Schlüsselattribute hängen vom ganzen Schlüssel ab.
  - 3NF: Keine transitiven Abhängigkeiten von Nicht‑Schlüsselattributen.

# IV. [[02 - RESOURCES/Notes/SQL\|SQL]] – sprechen mit der Datenbank
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

# VI. Einfache Anwendungen bauen (z. B. [[02 - RESOURCES/Notes/Python\|Python]])
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
- Stufen: [[Modultest\|Modultest]] → [[02 - RESOURCES/Notes/Integrationstest\|Integrationstest]] → [[02 - RESOURCES/Notes/Systemtest\|Systemtest]] → [[Abnahmetest\|Abnahmetest]]
- Verfahren: [[Black-Box-Test\|Black-Box-Test]] (Spezifikation), [[White-Box-Test\|White-Box-Test]] (Code‑Struktur)
- Flow (optional [[TDD\|TDD]]): RED → GREEN → REFACTOR

## Doku‑Arten
- Entwickler: Architektur, Modelle, Schnittstellen, [[Testdokumentation\|Testdokumentation]]
- Nutzer/Admin: Handbuch, Installation, Betrieb, Troubleshooting

# VIII. Mini‑Checklisten (Alltag)
>Schnell prüfen, ob du auf Kurs bist.
___

## Modell/Schema
- Habe ich Entitäten, Attribute, Beziehungen klar?
- Passen [[02 - RESOURCES/Notes/Kardinalität\|Kardinalität]]en? Brauche ich eine m:n‑Zwischentabelle?
- 3NF erreicht? Schlüssel sauber?

## SQL/Transaktionen
- Habe ich Joins korrekt (PK/FK) gesetzt?
- Sind Filter (`WHERE`) korrekt und getestet?
- Brauche ich `COMMIT`/`ROLLBACK` (Konsistenz)?

## Code/Dateien
- Eingaben validiert? Fehler abgefangen?
- Dateien mit Kontextmanager geöffnet? Pfade relativ?
- Keine Geheimnisse im Repo/Log?

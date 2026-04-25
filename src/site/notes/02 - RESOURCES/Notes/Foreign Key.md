---
{"dg-publish":true,"permalink":"/02-resources/notes/foreign-key/","tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:38:30.000+01:00","dg-note-properties":{"aliases":["Fremdschlüssel","Foreign-Key","FK"],"created_date":"2024-10-10","links":null,"tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"]}}
---

>Ein Foreign Key (Fremdschlüssel) ist eine Spalte in einer [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]], die auf den [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] einer anderen Tabelle verweist.
>>Foreign Keys stellen Beziehungen zwischen Tabellen her und sichern die Datenintegrität.

```
Foreign Key Beziehung:

Parent-Tabelle: Schueler
┌────────────┬──────────┐
│ schueler_id│ name     │ ← Primary Key
├────────────┼──────────┤
│     1      │ Max      │
│     2      │ Anna     │
│     3      │ Tom      │
└────────────┴──────────┘
       │
       │ wird referenziert von
       ▼
Child-Tabelle: Noten
┌─────────┬────────────┬──────┐
│ note_id │ schueler_id│ note │  ← Foreign Key
├─────────┼────────────┼──────┤     zeigt auf
│   101   │     1      │ 2.0  │     schueler_id
│   102   │     1      │ 1.5  │     (Parent)
│   103   │     2      │ 2.5  │
└─────────┴────────────┴──────┘

Referentielle Integrität:

✓ ERLAUBT:
schueler_id = 1 (existiert in Parent)
┌─────────┬────────────┬──────┐
│ note_id │ schueler_id│ note │
├─────────┼────────────┼──────┤
│   101   │     1      │ 2.0  │ ← OK!
└─────────┴────────────┴──────┘

✗ VERBOTEN:
schueler_id = 999 (existiert NICHT in Parent)
┌─────────┬────────────┬──────┐
│ note_id │ schueler_id│ note │
├─────────┼────────────┼──────┤
│   101   │    999     │ 2.0  │ ← FEHLER!
└─────────┴────────────┴──────┘

n:m Beziehung mit Zwischentabelle:

Schueler              Kurse
┌────┬──────┐        ┌────┬──────┐
│ id │ name │        │ id │ name │
├────┼──────┤        ├────┼──────┤
│ 1  │ Max  │        │ 1  │ Math │
│ 2  │ Anna │        │ 2  │ Bio  │
└────┴──────┘        └────┴──────┘
      │                    │
      └──────┬─────────────┘
             │
    ┌────────▼───────┐
    │ Einschreibung  │ ← 2 Foreign Keys!
    ├────────┬───────┤
    │stud_id │kurs_id│
    ├────────┼───────┤
    │   1    │   1   │
    │   1    │   2   │
    │   2    │   1   │
    └────────┴───────┘
       FK1     FK2
```

## Syntax

>[!example] Einfacher Foreign Key
>```sql
>CREATE TABLE Noten (
>    note_id INT PRIMARY KEY,
>    schueler_id INT,
>    note DECIMAL(2,1),
>    FOREIGN KEY (schueler_id)          -- ← Foreign Key
>        REFERENCES Schueler(schueler_id)  -- zeigt auf Parent
>);
>```

>[!example] Mehrere Foreign Keys
>```sql
>CREATE TABLE Einschreibung (
>    einschreibung_id INT PRIMARY KEY,
>    schueler_id INT,                   -- FK zu Schueler
>    kurs_id INT,                       -- FK zu Kurse
>    einschreibedatum DATE,
>    FOREIGN KEY (schueler_id) REFERENCES Schueler(schueler_id),
>    FOREIGN KEY (kurs_id) REFERENCES Kurse(kurs_id)
>);
>```

>[!example] Mit Aktion bei Löschung/Änderung
>```sql
>CREATE TABLE Noten (
>    note_id INT PRIMARY KEY,
>    schueler_id INT,
>    note DECIMAL(2,1),
>    FOREIGN KEY (schueler_id)
>        REFERENCES Schueler(schueler_id)
>        ON DELETE CASCADE                -- ← Lösche auch Child
>        ON UPDATE CASCADE                -- ← Update auch Child
>);
>```

## Referentielle Aktionen

```
ON DELETE / ON UPDATE Optionen:

┌────────────┬──────────────────────────────────┐
│ Option     │ Bedeutung                        │
├────────────┼──────────────────────────────────┤
│ CASCADE    │ Lösche/Ändere auch Child-Zeilen  │
│ SET NULL   │ Setze FK auf NULL                │
│ SET DEFAULT│ Setze FK auf Default-Wert        │
│ RESTRICT   │ Verhindere Löschung/Änderung     │
│ NO ACTION  │ Wie RESTRICT (Standard)          │
└────────────┴──────────────────────────────────┘

Beispiel CASCADE:

Parent: Schueler         Child: Noten
┌────┬──────┐           ┌─────┬────────────┬──────┐
│ id │ name │           │  id │ schueler_id│ note │
├────┼──────┤           ├─────┼────────────┼──────┤
│ 1  │ Max  │ ───────> │ 101 │     1      │ 2.0  │
└────┴──────┘           │ 102 │     1      │ 1.5  │
                        └─────┴────────────┴──────┘

DELETE FROM Schueler WHERE id = 1;
                  │
                  ▼ CASCADE
         ┌─────────────────┐
         │ Auch Noten      │
         │ werden gelöscht!│
         └─────────────────┘
```

>[!important] Prüfungsrelevant
>**Was ist ein Foreign Key?**
>- Spalte, die auf [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] einer anderen Tabelle zeigt
>- Stellt Beziehung zwischen Tabellen her
>- Sichert Datenintegrität (referentielle Integrität)
>
>**Eigenschaften:**
>- Wert muss in Parent-Tabelle existieren ODER NULL sein
>- Kann mehrfach vorkommen (im Gegensatz zu PK)
>- Kann NULL sein (außer wenn NOT NULL definiert)
>
>**Zweck:**
>- Verknüpfung von Tabellen
>- Verhindert "verwaiste" Datensätze
>- Erzwingt Konsistenz

>[!warning] Häufige Fehler
>1. **FK auf nicht existierenden PK**
>   ```sql
>   INSERT INTO Noten (schueler_id, note)
>   VALUES (999, 2.0);  -- ❌ Schueler 999 existiert nicht!
>   ```
>
>2. **Parent löschen ohne CASCADE**
>   ```sql
>   DELETE FROM Schueler WHERE id = 1;
>   -- ❌ Fehler: Noten referenzieren noch diesen Schüler!
>   ```
>
>3. **Falsche Reihenfolge beim Löschen**
>   ```sql
>   -- ✗ FALSCH:
>   DELETE FROM Schueler WHERE id = 1;  -- Fehler!
>   DELETE FROM Noten WHERE schueler_id = 1;
>
>   -- ✓ RICHTIG:
>   DELETE FROM Noten WHERE schueler_id = 1;  -- Erst Child
>   DELETE FROM Schueler WHERE id = 1;         -- Dann Parent
>   ```

>[!tip] Best Practices
>1. **Immer Foreign Keys definieren**
>   - Auch wenn DB es nicht erzwingt
>   - Dokumentiert Beziehungen
>   - Verhindert Fehler
>
>2. **Naming Convention**
>   ```sql
>   -- Wenn Parent-Tabelle "Schueler" heißt:
>   schueler_id   -- ✓ Erkennbar
>   fk_schueler   -- ✓ Alternative
>   id            -- ✗ Zu allgemein
>   ```
>
>3. **CASCADE mit Bedacht**
>   - ON DELETE CASCADE: Nur wenn wirklich gewollt
>   - Oft besser: RESTRICT (verhindert Löschung)
>
>4. **Indizes auf FK**
>   ```sql
>   CREATE INDEX idx_schueler_id ON Noten(schueler_id);
>   ```
>   → Macht JOINs schneller!

>[!note] Foreign Key vs Primary Key
>```
>┌──────────────┬───────────────┬──────────────┐
>│ Eigenschaft  │ Primary Key   │ Foreign Key  │
>├──────────────┼───────────────┼──────────────┤
>│ Eindeutig    │ Ja (UNIQUE)   │ Nein         │
>│ NULL erlaubt │ Nein          │ Ja*          │
>│ Pro Tabelle  │ Nur 1         │ Mehrere      │
>│ Verweist auf │ Sich selbst   │ Andere Tabell│
>└──────────────┴───────────────┴──────────────┘
>* Außer NOT NULL definiert
>```

>[!note] Siehe auch
>- [[02 - RESOURCES/Notes/Primary Key\|Primary Key]] - Wird von FK referenziert
>- [[02 - RESOURCES/Notes/SQL JOIN\|SQL JOIN]] - Nutzt FK für Verknüpfungen
>- [[02 - RESOURCES/Notes/Normalisierung\|Normalisierung]] - Benötigt FK für Aufteilung
---
{"dg-publish":true,"permalink":"/02-resources/notes/primary-key/","tags":["informatik/code/SQL","informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:38:27.000+01:00"}
---

>Der Primary Key (Primärschlüssel) ist eine Spalte oder Kombination von [[02 - RESOURCES/Notes/SQL Spalte\|SQL Spalte]]n, die jeden Datensatz in einer [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] eindeutig identifiziert.
>>Jeder Wert im Primärschlüssel muss einzigartig sein und darf nicht [[02 - RESOURCES/Notes/NULL\|NULL]] sein.
>>Entspricht dem [[02 - RESOURCES/Notes/Schlüsselattribut\|Schlüsselattribut]] im [[02 - RESOURCES/Notes/ERM\|ERM]].

```
Primary Key Konzept:

Tabelle OHNE Primary Key:
┌─────────┬──────────┬───────┐
│ Name    │ Nachname │ Alter │  ← Wie eindeutig
├─────────┼──────────┼───────┤     identifizieren?
│ Max     │ Müller   │  20   │
│ Max     │ Müller   │  20   │  ← Duplikat!
│ Anna    │ Schmidt  │  22   │
└─────────┴──────────┴───────┘

Tabelle MIT Primary Key:
┌────┬─────────┬──────────┬───────┐
│ ID │ Name    │ Nachname │ Alter │
├────┼─────────┼──────────┼───────┤
│ 1  │ Max     │ Müller   │  20   │  ← Eindeutig!
│ 2  │ Max     │ Müller   │  20   │  ← Eindeutig!
│ 3  │ Anna    │ Schmidt  │  22   │  ← Eindeutig!
└────┴─────────┴──────────┴───────┘
  ↑
  Primary Key

Eigenschaften:

┌──────────────────┐
│ UNIQUE           │ ← Wert darf nur 1x vorkommen
└────────┬─────────┘
         │
┌────────▼─────────┐
│ NOT NULL         │ ← Darf nicht leer sein
└────────┬─────────┘
         │
┌────────▼─────────┐
│ UNVERÄNDERLICH   │ ← Sollte sich nicht ändern
└──────────────────┘

Primary Key in Beziehungen:

Tabelle: Schueler (Parent)
┌────────────┬──────────┐
│ schueler_id│ name     │ ← Primary Key
├────────────┼──────────┤
│     1      │ Max      │
│     2      │ Anna     │
└────────────┴──────────┘
      │
      │ wird referenziert von
      ▼
Tabelle: Noten (Child)
┌─────────┬────────────┬──────┐
│ note_id │ schueler_id│ note │
├─────────┼────────────┼──────┤  ← Foreign Key
│   101   │     1      │ 2.0  │
│   102   │     1      │ 1.5  │
│   103   │     2      │ 2.5  │
└─────────┴────────────┴──────┘
```

## Syntax

>[!example] Einfacher Primary Key
>```sql
>CREATE TABLE Kurse (
>    kurs_id INT PRIMARY KEY,        -- ← Primärschlüssel
>    kurs_name VARCHAR(100),
>    lehrer_name VARCHAR(100)
>);
>```

>[!example] Primary Key nachträglich definieren
>```sql
>CREATE TABLE Kurse (
>    kurs_id INT,
>    kurs_name VARCHAR(100),
>    PRIMARY KEY (kurs_id)           -- ← Am Ende
>);
>```

>[!example] Zusammengesetzter Primary Key
>```sql
>CREATE TABLE Einschreibung (
>    schueler_id INT,
>    kurs_id INT,
>    einschreibedatum DATE,
>    PRIMARY KEY (schueler_id, kurs_id)  -- ← Beide zusammen!
>);
>```

## Arten von Primary Keys

```
1. Natural Key (Natürlicher Schlüssel):
   ┌──────────┬──────────┐
   │ ISBN     │ Buchtitel│  ← ISBN ist natürlicher PK
   ├──────────┼──────────┤
   │978-3-16..│ SQL Buch │
   └──────────┴──────────┘

2. Surrogate Key (Künstlicher Schlüssel):
   ┌────┬──────────┬──────────┐
   │ ID │ ISBN     │ Buchtitel│  ← ID ist künstlicher PK
   ├────┼──────────┼──────────┤
   │ 1  │978-3-16..│ SQL Buch │
   └────┴──────────┴──────────┘

3. Composite Key (Zusammengesetzter Schlüssel):
   ┌───────────┬─────────┬──────┐
   │StudentID  │ KursID  │ Note │  ← Beide zusammen = PK
   ├───────────┼─────────┼──────┤
   │    1      │   101   │ 2.0  │
   │    1      │   102   │ 1.5  │  ← Kombination eindeutig
   └───────────┴─────────┴──────┘
```

>[!important] Prüfungsrelevant
>**Primary Key Eigenschaften:**
>- **UNIQUE**: Jeder Wert nur 1x
>- **NOT NULL**: Darf nicht leer sein
>- **Pro Tabelle: nur 1 Primary Key**
>
>**Zweck:**
>- Eindeutige Identifikation jeder Zeile
>- Referenzierung durch [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]]
>- Index wird automatisch erstellt (schneller!)
>
>**Arten:**
>- Natural Key: Existierende Daten (z.B. ISBN)
>- Surrogate Key: Künstliche ID (meist INT AUTO_INCREMENT)
>- Composite Key: Mehrere Spalten kombiniert

>[!warning] Häufige Fehler
>1. **Primary Key ändern**
>   ```sql
>   UPDATE Schueler SET id = 999 WHERE id = 1;  -- ❌ Schlecht!
>   ```
>   → Besser: IDs nie ändern!
>
>2. **NULL als Primary Key**
>   ```sql
>   INSERT INTO Schueler (id, name) VALUES (NULL, 'Max');  -- ❌ Fehler!
>   ```
>
>3. **Doppelte Werte**
>   ```sql
>   INSERT INTO Schueler (id, name) VALUES (1, 'Max');
>   INSERT INTO Schueler (id, name) VALUES (1, 'Anna');  -- ❌ Fehler!
>   ```

>[!tip] Best Practices
>1. **AUTO_INCREMENT verwenden**
>   ```sql
>   CREATE TABLE Schueler (
>       id INT AUTO_INCREMENT PRIMARY KEY,  -- ✓ Automatisch
>       name VARCHAR(100)
>   );
>   ```
>
>2. **Kurze Namen**
>   - `id` statt `schueler_identifikationsnummer`
>   - `student_id` wenn mehrere Tabellen
>
>3. **INT oder BIGINT**
>   - INT: bis 2 Milliarden
>   - BIGINT: bis 9 Quintillion
>
>4. **Nicht aussagekräftige Werte**
>   - Keine Namen als PK (können sich ändern)
>   - Besser: Künstliche IDs

>[!note] Siehe auch
>- [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]] - Verweist auf Primary Key
>- [[02 - RESOURCES/Notes/SQL Tabelle\|SQL Tabelle]] - Enthält Primary Keys
>- [[02 - RESOURCES/Notes/Normalisierung\|Normalisierung]] - Benötigt Primary Keys
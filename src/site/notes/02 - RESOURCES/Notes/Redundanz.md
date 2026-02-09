---
{"dg-publish":true,"permalink":"/02-resources/notes/redundanz/","tags":["informatik/datenbank","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:40:04.000+01:00"}
---

>Redundanz ist die unnötige Wiederholung von Daten in einer Datenbank.
>>Redundante Daten verschwenden Speicherplatz und führen zu Inkonsistenzen.

```
Problem: Redundanz

Tabelle MIT Redundanz:
┌────┬──────┬──────────┬──────┬─────────┐
│ ID │ Name │ Kursname │ Note │ Dozent  │
├────┼──────┼──────────┼──────┼─────────┤
│ 1  │ Max  │ Math     │ 2.0  │ Müller  │ ← Müller
│ 2  │ Max  │ Bio      │ 1.5  │ Wagner  │   mehrfach!
│ 3  │ Anna │ Math     │ 2.5  │ Müller  │ ← Müller
└────┴──────┴──────────┴──────┴─────────┘
       ↑               ↑
     Max 2x         Math 2x

Lösung: Normalisierung (keine Redundanz)

Student:           Kurs:
┌────┬──────┐     ┌────┬──────┬─────────┐
│ ID │ Name │     │ ID │ Name │ Dozent  │
├────┼──────┤     ├────┼──────┼─────────┤
│ 1  │ Max  │     │ 1  │ Math │ Müller  │ ← Nur 1x!
│ 2  │ Anna │     │ 2  │ Bio  │ Wagner  │
└────┴──────┘     └────┴──────┴─────────┘
      ↑                  ↑
   Nur 1x!           Nur 1x!

Einschreibung (Verknüpfung):
┌───────────┬─────────┬──────┐
│ StudentID │ KursID  │ Note │
├───────────┼─────────┼──────┤
│     1     │    1    │ 2.0  │
│     1     │    2    │ 1.5  │
│     2     │    1    │ 2.5  │
└───────────┴─────────┴──────┘

Probleme durch Redundanz:

1. Update-Anomalie:
   ┌─────────────────────────────────┐
   │ Dozent "Müller" heißt jetzt     │
   │ "Dr. Müller"                     │
   │ → Muss an 3 Stellen geändert    │
   │   werden!                        │
   │ → Was wenn 1 Stelle vergessen?  │
   │   → Inkonsistenz!                │
   └─────────────────────────────────┘

2. Einfüge-Anomalie:
   ┌─────────────────────────────────┐
   │ Neuer Dozent ohne Kurs?         │
   │ → Kann nicht eingefügt werden!  │
   └─────────────────────────────────┘

3. Lösch-Anomalie:
   ┌─────────────────────────────────┐
   │ Letzter Student aus Kurs        │
   │ gelöscht                         │
   │ → Kurs-Info verloren!            │
   └─────────────────────────────────┘

4. Speicherplatz:
   ┌─────────────────────────────────┐
   │ "Müller" gespeichert: 6 Byte    │
   │ 100x gespeichert = 600 Byte     │
   │                                  │
   │ Mit Normalisierung:              │
   │ 1x "Müller" + 100x ID (4 Byte)  │
   │ = 6 + 400 = 406 Byte             │
   │ → 194 Byte gespart!              │
   └─────────────────────────────────┘
```

>[!example] Redundanz-Beispiel
>```
>Ohne Normalisierung:
>┌────┬──────┬───────────┬──────────┐
>│ ID │ Name │ Email     │ Adresse  │
>├────┼──────┼───────────┼──────────┤
>│ 1  │ Max  │max@x.com  │Berlin    │
>│ 2  │ Max  │max@x.com  │Berlin    │ ← Redundant!
>│ 3  │ Max  │max@x.com  │Berlin    │ ← Redundant!
>└────┴──────┴───────────┴──────────┘
>
>Problem: Wenn Max umzieht → 3 Zeilen ändern!
>
>Mit Normalisierung:
>Person:                Bestellung:
>┌────┬──────┬──────┐   ┌────┬──────────┐
>│ ID │ Name │Adr.  │   │ ID │PersonID  │
>├────┼──────┼──────┤   ├────┼──────────┤
>│ 1  │ Max  │Berlin│   │ 1  │    1     │
>└────┴──────┴──────┘   │ 2  │    1     │
>       ↑               │ 3  │    1     │
>     Nur 1x!           └────┴──────────┘
>
>Max umzieht → nur 1 Zeile ändern!
>```

>[!important] Prüfungsrelevant
>**Was ist Redundanz?**
>- Unnötige Wiederholung von Daten
>- Führt zu Problemen bei Update/Insert/Delete
>- Wird durch [[02 - RESOURCES/Notes/Normalisierung\|Normalisierung]] beseitigt
>
>**Probleme:**
>1. **Update-Anomalie**: Änderung an mehreren Stellen nötig
>2. **Einfüge-Anomalie**: Daten können nicht gespeichert werden
>3. **Lösch-Anomalie**: Ungewollter Datenverlust
>4. **Speicherplatz**: Unnötiger Verbrauch
>
>**Lösung:**
>- [[02 - RESOURCES/Notes/Normalisierung\|Normalisierung]] (1NF, 2NF, 3NF)
>- Aufteilung in mehrere Tabellen
>- Verknüpfung über [[02 - RESOURCES/Notes/Foreign Key\|Foreign Key]]

>[!warning] Wann ist Redundanz OK?
>Manchmal ist Redundanz GEWOLLT:
>```
>┌──────────────────────────────────────┐
>│ Performance (schnellere Abfragen)    │
>│ Data Warehouses (Reporting)          │
>│ Caching                               │
>│ Denormalisierung (bewusst!)          │
>└──────────────────────────────────────┘
>```
>
>→ Aber: Nur mit gutem Grund!

>[!tip] Redundanz erkennen
>Fragen stellen:
>1. "Kommt dieser Wert mehrfach vor?"
>2. "Muss ich bei Änderungen mehrere Zeilen updaten?"
>3. "Kann ich Informationen ableiten/berechnen?"
>4. "Sind Daten in mehreren Spalten ähnlich?"
>
>Wenn JA → Redundanz vorhanden!

>[!note] Siehe auch
>- [[02 - RESOURCES/Notes/Normalisierung\|Normalisierung]] - Beseitigt Redundanz
>- [[02 - RESOURCES/Notes/1. Normalform\|1. Normalform]] - Erster Schritt gegen Redundanz
>- [[02 - RESOURCES/Notes/2. Normalform\|2. Normalform]] - Verhindert partielle Redundanz
>- [[02 - RESOURCES/Notes/3. Normalform\|3. Normalform]] - Verhindert transitive Redundanz
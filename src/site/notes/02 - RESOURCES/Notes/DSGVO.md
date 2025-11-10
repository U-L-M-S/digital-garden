---
{"dg-publish":true,"permalink":"/02-resources/notes/dsgvo/","tags":["ausbildung/gfn/ap1/vorbereitung","sicherheit/it-sicherheit"],"noteIcon":"","updated":"2025-11-10T15:23:11.213+01:00"}
---

>Datenschutz-Grundverordnung.
>>Es regelt die Umgang mit die [[02 - RESOURCES/Notes/Personenbezogene Daten\|Personenbezogene Daten]] und wie werden die Daten erhoben, verarbeiten und gespeichert.
>>Es bezieht sich auf alle EU-Bürger.


# Artikel
>Diese sind besondere Artikel, was man besonders draufarten muss:

- Artikel 15 ([[02 - RESOURCES/Notes/Recht\|Recht]] auf Auskunft):
  Betroffene können erfragen, welche Daten über sie gespeichert sind und wie sie verarbeitet werden.
  
{ #2a3455}

- Artikel 16 ([[02 - RESOURCES/Notes/Recht\|Recht]] auf Berichtigung):
   Falsche oder unvollständige Daten können korrigiert oder vervollständigt werden.
   
{ #1d1f30}

- Artikel 17 ([[02 - RESOURCES/Notes/Recht\|Recht]] auf Löschung):
  Betroffene können verlangen, dass ihre Daten gelöscht werden, wenn z. B. die Daten nicht mehr benötigt werden oder unrechtmäßig verarbeitet wurden.
{ #ce7839}


---

# 🎯 AP2-Prüfungsaufgabe: DSGVO

>[!example] Typische Prüfungsaufgabe
>**Szenario: Online-Shop Kundendaten**
>
>Ein Online-Shop speichert: Name, Email, Adresse, Kaufhistorie. Ein Kunde fordert Auskunft.
>
>**Aufgabe:**
>1. Welche DSGVO-Artikel greifen?
>2. Was muss der Shop bereitstellen?
>3. Wie lange dürfen Daten gespeichert werden?
>4. Was passiert bei Löschanfrage?

---

## ✅ Kompakte Lösung

**1. Relevante Artikel:**
- **Art. 15 (Auskunftsrecht)**: Kunde darf fragen welche Daten gespeichert sind
- **Art. 16 (Berichtigung)**: Falsche Adresse kann korrigiert werden
- **Art. 17 (Löschung)**: Nach Widerruf müssen Daten gelöscht werden
- **Art. 25 (Privacy by Design)**: Datenschutz von Anfang an

**2. Pflichten des Shops:**
```
✅ Auskunft erteilen (innerhalb 30 Tage)
✅ Alle gespeicherten Daten auflisten
✅ Zweck der Speicherung nennen
✅ Empfänger der Daten nennen
✅ Speicherdauer angeben
✅ Rechte erklären (Berichtigung, Löschung)
```

**3. Speicherdauer:**
- Vertragsdaten: Bis Vertragsende + 10 Jahre (Steuerrecht)
- Kaufhistorie: Nur mit Einwilligung länger
- Newsletter: Bis Abmeldung

**4. Löschanfrage:**
```java
// Pseudocode
if (kundeFortertLöschung) {
    if (keineGesetzlichePflicht) {
        löscheAlleDaten();
        protokolliereLöschung(); // Nachweis!
    } else {
        informiereKunde("Steuerrechtlich 10 Jahre nötig");
    }
}
```

>[!check] AP2-Checkliste
>- ✅ 6 Grundprinzipien kennen (Rechtmäßigkeit, Zweckbindung, Datenminimierung...)
>- ✅ Art. 15-17 auswendig
>- ✅ 30-Tage-Frist für Auskunft
>- ✅ Löschpflicht vs. Aufbewahrungspflicht

>[!warning] Häufige Fehler
>- ❌ "Alle Daten sofort löschen" → FALSCH! Steuerrecht beachten
>- ❌ Keine Dokumentation der Löschung
>- ❌ Vergessen dass Einwilligung widerrufbar ist

---

# 🔗 Weiterführende Themen

- [[02 - RESOURCES/Notes/Datenschutz\|Datenschutz]] - Allgemeine Prinzipien
- [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] - Technischer Datenschutz
- [[02 - RESOURCES/Notes/Personenbezogene Daten\|Personenbezogene Daten]] - Was ist geschützt?
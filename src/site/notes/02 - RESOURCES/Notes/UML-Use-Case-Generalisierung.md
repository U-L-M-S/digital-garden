---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-use-case-generalisierung/","tags":["uml/anwendungsfalldiagramm","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T16:00:26.330+01:00"}
---

>**Generalisierung** (auch Vererbung genannt) zeigt eine **"ist-ein"**-Beziehung zwischen Use Cases oder Akteuren.
>>Der spezialisierte Use Case/Akteur erbt alle Eigenschaften vom allgemeinen Use Case/Akteur.

---

# Symbol

```
  [Allgemein]
       △
       │  ← Pfeil zum Allgemeinen
   ────┴────
   │       │
[Speziel]  [Speziel]
  Case 1    Case 2
```

**Pfeil**: Geschlossener, nicht ausgefüllter Pfeil (wie bei Vererbung in Klassendiagrammen)

---

# Generalisierung bei Akteuren

>Zeigt Hierarchie zwischen Akteuren.

```
       O
      /|\
      / \
    Benutzer  ← Allgemeiner Akteur
       △
       │
   ────┴────
   │       │
   O       O
  /|\     /|\
  / \     / \
 Kunde   Admin  ← Spezialisierte Akteure
```

**Bedeutung:**
- **Kunde** ist ein **Benutzer**
- **Admin** ist ein **Benutzer**
- Beide erben alle Use Cases von **Benutzer**
- Haben zusätzlich eigene, spezielle Use Cases

---

# Beispiel: E-Commerce-System

```
       O
      /|\
      / \
    Benutzer
       │
       ├──► [Produkte durchsuchen]
       ├──► [Profil bearbeiten]
       │
       △
       │
   ────┴─────────
   │             │
   O             O
  /|\           /|\
  / \           / \
 Kunde         Admin
   │             │
   ├──► [Bestellen]        ├──► [Produkte verwalten]
   ├──► [Bewerten]         ├──► [Nutzer verwalten]
   └──► [Retoure]          └──► [Statistiken ansehen]
```

**Vererbung:**
- **Kunde** kann:
  - Produkte durchsuchen ✓ (geerbt)
  - Profil bearbeiten ✓ (geerbt)
  - Bestellen ✓ (eigener Use Case)
  - Bewerten ✓ (eigener Use Case)

- **Admin** kann:
  - Produkte durchsuchen ✓ (geerbt)
  - Profil bearbeiten ✓ (geerbt)
  - Produkte verwalten ✓ (eigener Use Case)
  - Nutzer verwalten ✓ (eigener Use Case)

---

# Generalisierung bei Use Cases

>Zeigt, dass ein Use Case eine spezielle Variante eines anderen ist.

```
┌─────────────────┐
│    Bezahlen     │ ← Allgemeiner Use Case
└─────────────────┘
         △
         │
     ────┴────────────
     │       │       │
┌─────┐ ┌─────┐ ┌─────┐
│Kredit│PayPal│Bank-│ ← Spezielle Use Cases
│-karte│      │über-│
└─────┘ └─────┘│weisung│
                └─────┘
```

**Bedeutung:**
- **"Mit Kreditkarte bezahlen"** ist eine Art von **"Bezahlen"**
- **"Mit PayPal bezahlen"** ist eine Art von **"Bezahlen"**
- **"Mit Banküberweisung bezahlen"** ist eine Art von **"Bezahlen"**
- Alle teilen gemeinsame Schritte, haben aber eigene Spezifika

---

# Visuelles Beispiel: Bibliotheks-System

```
     O
    /|\
    / \
  Besucher
     │
     ├──► [Katalog durchsuchen]
     │
     △
     │
 ────┴────
 │       │
 O       O
/|\     /|\
/ \     / \
Gast  Mitglied
 │       │
 │       ├──► [Buch ausleihen]
 │       ├──► [Buch verlängern]
 │       └──► [Reservieren]


┌────────────────┐
│ Medien suchen  │ ← Allgemeiner Use Case
└────────────────┘
       △
       │
   ────┴──────────
   │       │     │
┌──────┐┌──────┐┌──────┐
│Buch  ││DVD   ││Zeit- │
│suchen││suchen││schrif-│
└──────┘└──────┘│ten   │
                │suchen│
                └──────┘
```

---

# Code-Analogie

**Generalisierung = Klassen-Vererbung:**

```java
// Allgemeine Klasse
class Benutzer {
    void produkteDurchsuchen() { ... }
    void profilBearbeiten() { ... }
}

// Spezialisierte Klassen
class Kunde extends Benutzer {  // Vererbung!
    void bestellen() { ... }
    void bewerten() { ... }
}

class Admin extends Benutzer {  // Vererbung!
    void produkteVerwalten() { ... }
    void nutzerVerwalten() { ... }
}
```

---

# Generalisierung vs. Include vs. Extend

```
┌──────────────────────────────────────────────────┐
│           GENERALISIERUNG (IST-EIN)              │
└──────────────────────────────────────────────────┘

   [Bezahlen]
       △
       │ "ist ein"
   [Kreditkarte bezahlen]


┌──────────────────────────────────────────────────┐
│           INCLUDE (BENÖTIGT IMMER)               │
└──────────────────────────────────────────────────┘

[Bestellen] ────<<include>>────► [Bezahlen]
                   "benötigt"


┌──────────────────────────────────────────────────┐
│           EXTEND (OPTIONAL)                      │
└──────────────────────────────────────────────────┘

[Bestellen] ◄────<<extend>>──── [Gutschein einlösen]
                   "kann erweitert werden durch"
```

| Beziehung | Bedeutung | Beispiel |
|-----------|-----------|----------|
| **Generalisierung** | "ist ein" | Admin ist ein Benutzer |
| **Include** | "benötigt immer" | Bestellen benötigt Bezahlen |
| **Extend** | "kann erweitert werden" | Bestellen kann Gutschein haben |

---

# Praktisches Beispiel: Ticket-System

```
       O
      /|\
      / \
     Nutzer
       △
       │
   ────┴────────────
   │       │       │
   O       O       O
  /|\     /|\     /|\
  / \     / \     / \
 Kunde  Support  Manager
   │       │       │
   │       │       │
   ├──► [Ticket erstellen]
   │       │       │
   │       ├──► [Ticket bearbeiten]
   │       │       │
   │       │       ├──► [Statistiken ansehen]
   │       │       └──► [Team verwalten]
   │       │
   │       └──► [Ticket schließen]
   │
   └──► [Ticket status prüfen]
```

**Vererbungs-Hierarchie:**
- **Nutzer** (Basis):
  - Keine direkten Use Cases

- **Kunde** (erbt von Nutzer):
  - Ticket erstellen ✓
  - Ticket-Status prüfen ✓

- **Support** (erbt von Nutzer):
  - Ticket bearbeiten ✓
  - Ticket schließen ✓

- **Manager** (erbt von Nutzer):
  - Statistiken ansehen ✓
  - Team verwalten ✓

---

# Regeln für Generalisierung

>[!important] Wichtige Regeln
>1. **"Ist-ein"-Beziehung**: Admin ist ein Benutzer
>2. **Vererbung**: Spezialisierung erbt alle Features
>3. **Pfeil nach oben**: Zum allgemeineren Element
>4. **Erweiterung**: Spezialisierung kann eigene Use Cases haben

**Gute Verwendung:**
```
✅ Kunde ist ein Benutzer
✅ Admin ist ein Benutzer
✅ Kreditkarte-Bezahlen ist eine Art von Bezahlen
```

**Schlechte Verwendung:**
```
❌ Bestellen ist ein Bezahlen (nein, Bestellen nutzt Bezahlen)
❌ Login ist ein Benutzer (nein, Login ist ein Use Case)
```

---

# Zusammenfassung

>[!summary] Generalisierung
>- **Symbol**: Geschlossener, nicht ausgefüllter Pfeil △
>- **Bedeutung**: "Ist-ein"-Beziehung (Vererbung)
>- **Pfeil**: Von speziell zu allgemein (nach oben)
>- **Bei Akteuren**: Kunde ist ein Benutzer
>- **Bei Use Cases**: Kreditkarte-Bezahlen ist eine Art von Bezahlen
>- **Vererbung**: Spezielle erben alle Eigenschaften vom Allgemeinen

>[!tip] Merkhilfe
>"Generalisierung" = "Allgemeiner machen" = **Vererbung**

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]] - Hauptnotiz
- [[02 - RESOURCES/Notes/UML-Use-Case-Akteur\|UML-Use-Case-Akteur]] - Akteure
- [[02 - RESOURCES/Notes/UML-Use-Case-Include\|UML-Use-Case-Include]] - Include-Beziehung
- [[02 - RESOURCES/Notes/UML-Use-Case-Extend\|UML-Use-Case-Extend]] - Extend-Beziehung
- [[02 - RESOURCES/Notes/UML-Vererbung\|UML-Vererbung]] - Vererbung bei Klassendiagrammen

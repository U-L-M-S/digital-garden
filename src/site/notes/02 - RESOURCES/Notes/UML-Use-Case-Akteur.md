---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-use-case-akteur/","tags":["uml/anwendungsfalldiagramm","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T13:58:25.000+01:00"}
---

>Ein **Akteur (Actor)** ist eine Person, Organisation oder externes System, das mit dem System interagiert.
>>Akteure befinden sich **außerhalb** des Systems und nutzen dessen Funktionen (Use Cases).

---

# Symbol

**Strichmännchen:**
```
    O      ← Kopf
   /|\     ← Körper
   / \     ← Beine

  Kunde
```

**Alternative Darstellung (externes System):**
```
┌─────────────┐
│   <<actor>> │
│  Zahlungs-  │
│   system    │
└─────────────┘
```

---

# Arten von Akteuren

## Primäre Akteure (Primary Actors)
>Nutzer, die das System **aktiv verwenden**, um ein Ziel zu erreichen.

**Beispiele:**
- Kunde (in Online-Shop)
- Administrator
- Bankangestellter
- Student (in Uni-System)

## Sekundäre Akteure (Secondary Actors)
>Systeme oder Personen, die das System **unterstützen**, aber nicht direkt nutzen.

**Beispiele:**
- Datenbank
- Zahlungssystem
- E-Mail-Server
- Drucker

---

# Visuelles Beispiel: Online-Shop

```
     O                        O
    /|\                      /|\
    / \                      / \
   Kunde                  Administrator
     │                          │
     │                          │
     ├──► [Produkt suchen]      ├──► [Produkte verwalten]
     │                          │
     ├──► [Bestellen]           ├──► [Bestellungen verwalten]
     │                          │
     └──► [Bezahlen] ◄──────────┤
                               │
                          ┌─────────────┐
                          │  <<actor>>  │
                          │  Zahlungs-  │
                          │   system    │
                          └─────────────┘
```

---

# Regeln für Akteure

>[!important] Wichtige Regeln
>1. **Außerhalb des Systems**: Akteure sind NICHT Teil des Systems
>2. **Interagieren mit Use Cases**: Über Assoziationslinien verbunden
>3. **Klar benannt**: Rolle beschreiben (z.B. "Kunde", nicht "Person")
>4. **Keine Implementierung**: Zeigt nur, WER das System nutzt, nicht WIE

**Gute Benennung:**
```
✅ Kunde
✅ Administrator
✅ Bankangestellter
✅ Gast
```

**Schlechte Benennung:**
```
❌ Person
❌ Nutzer (zu allgemein)
❌ System (zu vage)
```

---

# Akteur-Hierarchie (Generalisierung)

>Akteure können Vererbungsbeziehungen haben.

```
       O
      /|\
      / \
    Benutzer
       △
       │
   ┌───┴───┐
   │       │
   O       O
  /|\     /|\
  / \     / \
 Kunde  Admin
```

**Bedeutung:**
- **Kunde** und **Admin** sind spezielle Arten von **Benutzer**
- Sie erben alle Use Cases von **Benutzer**
- Haben zusätzlich eigene Use Cases

---

# Zusammenfassung

>[!summary] Akteure
>- **Symbol**: Strichmännchen (Person) oder Box (System)
>- **Position**: Außerhalb des Systems
>- **Funktion**: Interagieren mit Use Cases
>- **Typen**: Primär (nutzt System) vs. Sekundär (unterstützt System)
>- **Benennung**: Klare Rollen

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]] - Hauptnotiz
- [[02 - RESOURCES/Notes/UML-Use-Case-Include\|UML-Use-Case-Include]] - Include-Beziehung
- [[02 - RESOURCES/Notes/UML-Use-Case-Extend\|UML-Use-Case-Extend]] - Extend-Beziehung
- [[02 - RESOURCES/Notes/UML-Use-Case-Generalisierung\|UML-Use-Case-Generalisierung]] - Vererbung bei Akteuren

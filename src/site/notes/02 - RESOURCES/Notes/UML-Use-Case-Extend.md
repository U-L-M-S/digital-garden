---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-use-case-extend/","tags":["uml/anwendungsfalldiagramm","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T16:00:41.449+01:00"}
---

>Eine **Extend-Beziehung** zeigt, dass ein Use Case einen anderen Use Case **optional** erweitern kann.
>>Die Erweiterung findet nur unter **bestimmten Bedingungen** statt.

---

# Symbol

```
[Use Case A] ◄────────<<extend>>──────── [Use Case B]
              gestrichelte Linie
              mit <<extend>>
```

**Pfeilrichtung:** Von B nach A = "B erweitert A"

---

# Wann verwendet man Extend?

>Use Case B ist eine **optionale Erweiterung** von Use Case A.

**Typische Szenarien:**
- **Sonderfälle**: Nur unter bestimmten Bedingungen
- **Zusatzfunktionen**: Optional verfügbar
- **Ausnahmen**: Fehlerbehandlung

---

# Visuelles Beispiel: Online-Shopping

```
     O
    /|\
    / \
   Kunde
     │
     │
     ↓
┌─────────────────┐
│   Bestellen     │ ◄─────<<extend>>────── ┌───────────────────┐
└─────────────────┘                         │Gutschein einlösen │
                                            └───────────────────┘
                                            [Extension Point:
                                             Wenn Gutschein
                                             vorhanden]
```

**Erklärung:**
- **"Bestellen"** ist der Basis-Use-Case
- **"Gutschein einlösen"** ist OPTIONAL
- Wird nur ausgeführt, wenn Kunde einen Gutschein hat

---

# Code-Analogie

**Extend-Beziehung = Optionaler Code:**

```java
public void bestellen() {
    warenkorb_pruefen();

    // EXTEND: Optional, nur wenn Bedingung erfüllt
    if (kunde.hatGutschein()) {
        gutschein_einloesen();  // <<extend>>
    }

    bezahlen();
    bestaetigen();
}
```

---

# Extension Points

>**Extension Points** definieren, **wo** und **wann** die Erweiterung stattfindet.

```
┌─────────────────────────────┐
│      Produkt bestellen      │
├─────────────────────────────┤
│ Extension Points:           │
│ - Nach Warenkorb            │
│ - Vor Bezahlung             │
└─────────────────────────────┘
         △
         │ <<extend>>
         │
┌─────────────────┐
│ Rabatt gewähren │
└─────────────────┘
    [Bedingung:
     VIP-Kunde]
```

---

# Beispiel: ATM (Geldautomat)

```
┌─────────────────┐
│  Geld abheben   │ ◄─────<<extend>>────── ┌───────────────────┐
└─────────────────┘                         │ Quittung drucken  │
                                            └───────────────────┘
                                            [Extension Point:
                                             Nach Geldausgabe,
                                             wenn Kunde möchte]
```

**Ablauf:**
1. Kunde hebt Geld ab (Basis-Use-Case)
2. **Optional**: Kunde kann Quittung drucken
3. Wenn Kunde "Ja" wählt → Quittung wird gedruckt
4. Wenn Kunde "Nein" wählt → Keine Quittung

---

# Include vs. Extend (Vergleich)

```
┌─────────────────────────────────────────────────────────┐
│                  INCLUDE (IMMER)                        │
└─────────────────────────────────────────────────────────┘

[Bestellen] ────<<include>>────► [Anmelden]
                                    │
                                    └─► MUSS ausgeführt werden


┌─────────────────────────────────────────────────────────┐
│                  EXTEND (OPTIONAL)                      │
└─────────────────────────────────────────────────────────┘

[Bestellen] ◄────<<extend>>──── [Gutschein einlösen]
                                        │
                                        └─► KANN ausgeführt werden
```

| Merkmal | <<include>> | <<extend>> |
|---------|-------------|------------|
| **Häufigkeit** | IMMER | OPTIONAL |
| **Pfeilrichtung** | A → B (A inkludiert B) | B → A (B erweitert A) |
| **Kontrolle** | Base-Use-Case entscheidet | Extension entscheidet |
| **Bedingung** | Keine | Extension Point + Bedingung |
| **Beispiel** | Login ist Pflicht | Gutschein ist optional |

---

# Praktisches Beispiel: Restaurant-System

```
     O
    /|\
    / \
   Kunde
     │
     ↓
┌─────────────────┐
│ Essen bestellen │
└─────────────────┘
         △
         │
    ┌────┴────┬────────────┬────────────┐
    │         │            │            │
    │         │            │            │
<<extend>>  <<extend>>   <<extend>>   <<extend>>
    │         │            │            │
┌─────┐  ┌──────┐   ┌──────────┐  ┌─────────┐
│Vorspeise│Dessert│ │Extra-Beilage│Getränk│
│hinzu-│ │hinzu-│   │ hinzufügen │ │hinzu-│
│fügen │ │fügen │   └──────────┘  │fügen │
└─────┘  └──────┘                 └─────────┘
```

**Alle Erweiterungen sind optional!**

---

# Extend mit Bedingung

```
┌─────────────────────────────┐
│    Online bezahlen          │
├─────────────────────────────┤
│ Extension Point:            │
│ "Vor Abschluss"             │
└─────────────────────────────┘
         △
         │ <<extend>>
         │
┌─────────────────────────────┐
│ Zahlung in Raten aufteilen  │
└─────────────────────────────┘
    [Bedingung:
     Betrag > 100€]
```

**Bedeutung:**
- Ratenzahlung ist nur verfügbar, wenn Betrag > 100€
- Wird **am Extension Point "Vor Abschluss"** ausgeführt
- Kunde kann wählen: Ja oder Nein

---

# Regeln für Extend

>[!important] Wichtige Regeln
>1. **Extend ist optional**: Basis-Use-Case funktioniert auch ohne Erweiterung
>2. **Pfeilrichtung**: Von erweiterndem zu Basis-Use-Case (rückwärts!)
>3. **Extension Points**: Definieren, wo Erweiterung stattfindet
>4. **Bedingungen**: Wann die Erweiterung aktiv wird

**Gute Verwendung:**
```
✅ [Bestellen] ◄──<<extend>>── [Gutschein einlösen]
✅ [Suchen] ◄──<<extend>>── [Filter anwenden]
✅ [Zahlen] ◄──<<extend>>── [Rechnung ausdrucken]
```

**Schlechte Verwendung:**
```
❌ [Bestellen] ◄──<<extend>>── [Bezahlen] (Pflicht, nicht optional!)
❌ [Anmelden] ◄──<<extend>>── [Passwort eingeben] (Pflicht!)
```

---

# Zusammenfassung

>[!summary] Extend-Beziehung
>- **Symbol**: Gestrichelte Linie mit `<<extend>>`
>- **Bedeutung**: Use Case B erweitert Use Case A **optional**
>- **Pfeil**: Von B → A (B erweitert A)
>- **Bedingung**: Extension Point + Bedingung
>- **Verwendung**: Zusatzfunktionen, Sonderfälle
>- **Beispiel**: [Bestellen] wird erweitert durch [Gutschein einlösen]

>[!tip] Merkhilfe
>"Extend" = "erweitern" = **kann hinzugefügt werden**

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]] - Hauptnotiz
- [[02 - RESOURCES/Notes/UML-Use-Case-Akteur\|UML-Use-Case-Akteur]] - Akteure
- [[02 - RESOURCES/Notes/UML-Use-Case-Include\|UML-Use-Case-Include]] - Include-Beziehung (Pflicht)
- [[02 - RESOURCES/Notes/UML-Use-Case-Generalisierung\|UML-Use-Case-Generalisierung]] - Vererbung

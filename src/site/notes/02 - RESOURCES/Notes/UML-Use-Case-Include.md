---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-use-case-include/","tags":["uml/anwendungsfalldiagramm","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T16:00:51.965+01:00"}
---

>Eine **Include-Beziehung** zeigt, dass ein Use Case einen anderen Use Case **immer** einschließt und benötigt.
>>Der eingefügte Use Case ist **notwendig** und wird **jedes Mal** ausgeführt.

---

# Symbol

```
[Use Case A] ────────<<include>>────────► [Use Case B]
              gestrichelte Linie
              mit <<include>>
```

**Pfeilrichtung:** Von A nach B = "A inkludiert B"

---

# Wann verwendet man Include?

>Use Case A benötigt **immer** die Funktionalität von Use Case B.

**Typische Szenarien:**
- **Wiederverwendung**: Gemeinsame Logik extrahieren
- **Pflicht-Schritte**: Ein Schritt ist immer nötig
- **Vereinfachung**: Komplexe Use Cases aufteilen

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
│   Bestellen     │
└─────────────────┘
         │
         │ <<include>>
         ↓
┌─────────────────┐
│  Anmelden       │ ← IMMER nötig!
└─────────────────┘
         │
         │ <<include>>
         ↓
┌─────────────────┐
│ Bezahlen        │ ← IMMER nötig!
└─────────────────┘
```

**Erklärung:**
- **"Bestellen"** inkludiert **"Anmelden"** → Kunde muss sich IMMER einloggen
- **"Bestellen"** inkludiert **"Bezahlen"** → Bezahlung ist IMMER erforderlich

---

# Code-Analogie

**Include-Beziehung = Funktionsaufruf:**

```java
public void bestellen() {
    anmelden();    // <<include>> - wird IMMER aufgerufen
    bezahlen();    // <<include>> - wird IMMER aufgerufen
    bestaetigen();
}
```

---

# Beispiel: Bibliotheks-System

```
┌─────────────────┐
│  Buch ausleihen │
└─────────────────┘
         │
         │ <<include>>
         ↓
┌─────────────────┐
│ Benutzer prüfen │ ← Muss IMMER geprüft werden
└─────────────────┘
         │
         │ <<include>>
         ↓
┌─────────────────┐
│ Verfügbarkeit   │ ← Muss IMMER geprüft werden
│    prüfen       │
└─────────────────┘
```

**Ablauf:**
1. Benutzer möchte Buch ausleihen
2. System prüft **immer** Benutzer (registriert? Gebühren bezahlt?)
3. System prüft **immer** Verfügbarkeit (Buch vorhanden?)

---

# Include vs. Extend

| Merkmal | <<include>> | <<extend>> |
|---------|-------------|------------|
| **Häufigkeit** | IMMER | OPTIONAL |
| **Richtung** | A inkludiert B | B erweitert A |
| **Verwendung** | Pflicht-Funktionalität | Zusatz-Funktionalität |
| **Beispiel** | Login bei Bestellung | Gutschein bei Bestellung |

**Visualisierung:**

```
Include (IMMER):
[Bestellen] ──<<include>>──► [Anmelden]
   └─► "Bestellen" braucht "Anmelden" IMMER

Extend (OPTIONAL):
[Bestellen] ◄──<<extend>>── [Gutschein einlösen]
   └─► "Gutschein" ist optional bei "Bestellen"
```

---

# Praktisches Beispiel: ATM (Geldautomat)

```
     O
    /|\
    / \
   Kunde
     │
     ├──────────────────────────┐
     │                          │
     ↓                          ↓
┌─────────────┐        ┌─────────────┐
│Geld abheben │        │ Überweisen  │
└─────────────┘        └─────────────┘
     │                          │
     │ <<include>>              │ <<include>>
     ↓                          ↓
┌─────────────────────────────────┐
│  PIN eingeben & verifizieren    │ ← Für BEIDE nötig!
└─────────────────────────────────┘
```

**Vorteil:**
- "PIN eingeben" wird **einmal definiert**
- Wird von **mehreren Use Cases** wiederverwendet
- Änderung an "PIN eingeben" wirkt sich überall aus

---

# Regeln für Include

>[!important] Wichtige Regeln
>1. **Include ist zwingend**: Der eingeschlossene Use Case MUSS ausgeführt werden
>2. **Pfeilrichtung**: Von inkludierendem zu inkludiertem Use Case
>3. **Wiederverwendung**: Nutze Include für gemeinsame Funktionalität
>4. **Nicht übertreiben**: Nur bei wirklich notwendigen Abhängigkeiten

**Gute Verwendung:**
```
✅ [Bestellen] ──<<include>>──► [Bezahlen]
✅ [Artikel kaufen] ──<<include>>──► [Anmelden]
✅ [Dokument drucken] ──<<include>>──► [Drucker wählen]
```

**Schlechte Verwendung:**
```
❌ [Bestellen] ──<<include>>──► [Newsletter abonnieren] (optional!)
❌ [Suchen] ──<<include>>──► [Favorit hinzufügen] (optional!)
```

---

# Zusammenfassung

>[!summary] Include-Beziehung
>- **Symbol**: Gestrichelte Linie mit `<<include>>`
>- **Bedeutung**: Use Case A benötigt Use Case B **immer**
>- **Pfeil**: Von A → B (A inkludiert B)
>- **Verwendung**: Wiederverwendung von Pflicht-Funktionalität
>- **Beispiel**: [Bestellen] inkludiert [Anmelden]

>[!tip] Merkhilfe
>"Include" = "einschließen" = **muss dabei sein**

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/UML-Anwendungsfalldiagramm\|UML-Anwendungsfalldiagramm]] - Hauptnotiz
- [[02 - RESOURCES/Notes/UML-Use-Case-Akteur\|UML-Use-Case-Akteur]] - Akteure
- [[02 - RESOURCES/Notes/UML-Use-Case-Extend\|UML-Use-Case-Extend]] - Extend-Beziehung (optional)
- [[02 - RESOURCES/Notes/UML-Use-Case-Generalisierung\|UML-Use-Case-Generalisierung]] - Vererbung

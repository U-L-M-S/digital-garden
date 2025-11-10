---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-anwendungsfalldiagramm/","tags":["ausbildung/gfn/ap1/vorbereitung","uml/anwendungsfalldiagramm"],"noteIcon":"","updated":"2025-11-10T12:59:48.163+01:00"}
---

>Ein UML-Anwendungsfalldiagramm ist eine grafische Darstellung, die zeigt, wie Nutzer (Akteure) mit einem System interagieren können.
>>Es beschreibt die verschiedenen *Use Cases* (Anwendungsfälle) und die Beziehungen zwischen ihnen und den Akteuren. 
>>Solche Diagramme helfen, die Anforderungen an ein System zu verstehen und zu planen, indem sie die Funktionen aus Sicht der Benutzer visualisieren.

![TEQoGCUjPw4PopfwMAIGuFwSrY.png](/img/user/02%20-%20RESOURCES/Files/TEQoGCUjPw4PopfwMAIGuFwSrY.png)

---

# Zweck und Verwendung

>[!info] Wofür werden Use-Case-Diagramme verwendet?
>Anwendungsfalldiagramme dienen der **Anforderungsanalyse** und helfen dabei:
>- System-Funktionalitäten aus **Nutzersicht** zu definieren
>- **Systemgrenzen** klar zu ziehen
>- **Beziehungen zwischen Akteuren** und Use Cases zu visualisieren
>- **Projektumfang** festzulegen

**Typische Einsatzbereiche:**
```
┌────────────────────────────────────────┐
│  Anforderungsanalyse                   │
│  ↓                                     │
│  System-Design                         │
│  ↓                                     │
│  Kommunikation mit Stakeholdern        │
│  ↓                                     │
│  Testplanung                           │
└────────────────────────────────────────┘
```

---

# Grundelemente

>Ein Anwendungsfalldiagramm besteht aus **vier Hauptelementen**:

1. **Akteure (Actors)** - Wer nutzt das System?
2. **Use Cases** - Was kann das System tun?
3. **Beziehungen** - Wie hängen Use Cases zusammen?
4. **Systemgrenzen** - Was gehört zum System?

**Visuelles Beispiel:**

```
     O                    ┌───────────────────────────┐
    /|\                   │     SYSTEM                │
    / \                   │                           │
   Kunde ──────────►  (Use Case 1)                │
                          │         │                │
     O                    │         │                │
    /|\                   │         ↓                │
    / \                   │    (Use Case 2)          │
   Admin ──────────►  │                           │
                          └───────────────────────────┘
```

---

# Komponenten im Detail

>Um Anwendungsfalldiagramme vollständig zu verstehen, müssen wir die einzelnen Komponenten kennen:

# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-use-case-akteur/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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


</div></div>


# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-use-case-include/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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


</div></div>


# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-use-case-extend/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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


</div></div>


# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-use-case-generalisierung/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




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


</div></div>


---

# Vollständiges Beispiel: Bibliotheks-System

```
                    ┌────────────────────────────────────────────┐
                    │        BIBLIOTHEKS-SYSTEM                  │
                    │                                            │
     O              │  ┌─────────────────────┐                  │
    /|\             │  │ Katalog durchsuchen │                  │
    / \             │  └─────────────────────┘                  │
  Besucher ────────┼────────────┘                               │
                    │                                            │
     △              │                                            │
     │              │  ┌─────────────────┐                      │
  ───┴───           │  │ Buch ausleihen  │                      │
  │     │           │  └─────────────────┘                      │
  O     O           │         │                                  │
 /|\   /|\          │         │ <<include>>                     │
 / \   / \          │         ↓                                  │
Gast Mitglied──────┼───►┌──────────────┐                       │
       │            │    │Benutzer prüfen│                      │
       │            │    └──────────────┘                       │
       │            │                                            │
       ├────────────┼───►┌─────────────────┐                   │
       │            │    │ Buch verlängern │                   │
       │            │    └─────────────────┘                   │
       │            │                                            │
       └────────────┼───►┌─────────────────┐                   │
                    │    │  Reservieren    │                   │
                    │    └─────────────────┘                   │
                    │         △                                  │
                    │         │ <<extend>>                      │
                    │         │                                  │
                    │    ┌─────────────────────────┐            │
                    │    │ E-Mail-Benachrichtigung │            │
                    │    └─────────────────────────┘            │
                    │                                            │
                    └────────────────────────────────────────────┘
```

**Erklärung:**
- **Besucher**: Basis-Akteur
- **Gast/Mitglied**: Spezialisierte Akteure (Generalisierung)
- **Katalog durchsuchen**: Für alle Besucher
- **Buch ausleihen** inkludiert **Benutzer prüfen** (Include)
- **Reservieren** kann optional **E-Mail-Benachrichtigung** auslösen (Extend)

---

# Erstellen eines Use-Case-Diagramms

>[!tip] Schritte zum Erstellen
>1. **Akteure identifizieren**: Wer nutzt das System?
>2. **Use Cases definieren**: Was soll das System tun?
>3. **Systemgrenzen zeichnen**: Was ist Teil des Systems?
>4. **Beziehungen modellieren**: Include, Extend, Generalisierung
>5. **Validieren**: Mit Stakeholdern überprüfen

**Beispiel-Workflow:**

```
Schritt 1: Akteure sammeln
    Kunde, Administrator, Zahlungssystem

Schritt 2: Use Cases sammeln
    Bestellen, Bezahlen, Produkte verwalten

Schritt 3: Systemgrenze ziehen
    [System: Online-Shop]

Schritt 4: Beziehungen hinzufügen
    Bestellen <<include>> Bezahlen
    Bestellen <<extend>> Gutschein einlösen

Schritt 5: Review mit Team
    ✓ Vollständig? Korrekt?
```

---

# Häufige Fehler

>[!warning] Typische Fehler vermeiden
>
>**❌ Zu technische Use Cases:**
>```
>Falsch: "Datenbank abfragen"
>Richtig: "Produkte suchen"
>```
>
>**❌ Implementierungsdetails:**
>```
>Falsch: "SQL-Query ausführen"
>Richtig: "Kundendaten abrufen"
>```
>
>**❌ Falsche Beziehungsrichtung:**
>```
>Falsch: [Anmelden] ◄── <<extend>> ── [Bestellen]
>Richtig: [Bestellen] ──── <<include>> ──► [Anmelden]
>```
>
>**❌ Zu viele Details:**
>```
>Falsch: 50 Use Cases mit allen Spezialfällen
>Richtig: 10-15 Haupt-Use-Cases
>```

---

# Use-Case-Diagramm vs. andere UML-Diagramme

| Diagramm | Zweck | Perspektive |
|----------|-------|-------------|
| **Anwendungsfalldiagramm** | Was kann das System? | Nutzersicht (extern) |
| [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] | Wie ist das System strukturiert? | Entwicklersicht (intern) |
| [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]] | Wie läuft eine Interaktion ab? | Zeitlicher Ablauf |
| [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] | Wie läuft ein Prozess ab? | Workflow/Prozess |
| [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|UML-Zustandsdiagramme]] | Welche Zustände hat ein Objekt? | Zustandsübergänge |

---

# Zusammenfassung

>[!summary] Anwendungsfalldiagramm - Kernpunkte
>- **Zweck**: System-Funktionalitäten aus Nutzersicht definieren
>- **Hauptelemente**: Akteure, Use Cases, Beziehungen, Systemgrenzen
>- **Beziehungen**: Include (Pflicht), Extend (Optional), Generalisierung (Vererbung)
>- **Verwendung**: Anforderungsanalyse, Projektplanung, Kommunikation
>- **Perspektive**: Externe Sicht auf das System

>[!tip] Merkhilfe
>Anwendungsfalldiagramme beantworten: **"WER macht WAS mit dem System?"**

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/UML\|UML]] - Unified Modeling Language
- [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] - Struktur des Systems
- [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|UML-Sequenzdiagramme]] - Zeitlicher Ablauf
- [[02 - RESOURCES/Notes/UML-Aktivitätsdiagramm\|UML-Aktivitätsdiagramm]] - Prozessabläufe
- [[Requirements Engineering\|Requirements Engineering]] - Anforderungsanalyse
- [[User Stories\|User Stories]] - Alternative Anforderungsdokumentation
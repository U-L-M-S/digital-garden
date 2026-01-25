---
{"dg-publish":true,"permalink":"/02-resources/notes/algorithmus/","tags":["algorithmus","informatik/code/algorithmus","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:21:10.000+01:00"}
---


>Ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] ist eine genaue Schritt-für-Schritt-Anleitung um ein Problem zu lösen.

>>Jeder [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] hat eine Eingabe (Input), verarbeitet diese nach festen Regeln und liefert eine Ausgabe (Output).

# I. Was ist ein Algorithmus?

>Ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] ist wie ein Kochrezept - eine klare Anleitung.

>[!note] Einfach erklärt
>Stell dir vor, du erklärst jemandem, wie man einen Tee macht:
>1. Wasser in den Wasserkocher füllen
>2. Wasserkocher einschalten
>3. Warten bis Wasser kocht
>4. Teebeutel in Tasse legen
>5. Heißes Wasser in Tasse gießen
>6. 3 Minuten ziehen lassen
>7. Teebeutel entfernen
>
>Das ist ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] für Tee kochen!

```
Algorithmus-Schema:

┌──────────┐
│ EINGABE  │  Was brauche ich?
└────┬─────┘
     │
     ▼
┌──────────┐
│VERARBEIT │  Was mache ich?
│   UNG    │  (Schritte)
└────┬─────┘
     │
     ▼
┌──────────┐
│ AUSGABE  │  Was kommt raus?
└──────────┘
```

# II. Die drei wichtigsten Eigenschaften

>Ein guter [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] braucht diese drei Eigenschaften.

>[!important] 1. Definitheit (Eindeutigkeit)
>**Jeder Schritt muss klar sein.**
>
>Keine Mehrdeutigkeiten erlaubt!
>- ❌ Schlecht: "Füge etwas Wasser hinzu"
>- ✅ Gut: "Füge 200ml Wasser hinzu"
>
>**Beispiel:**
>```
>Schlecht definiert:
>"Fahre schnell zur Schule"
>→ Wie schnell? Welche Route?
>
>Gut definiert:
>"Fahre mit 30 km/h über die Hauptstraße zur Schule"
>→ Klar und eindeutig!
>```

>[!important] 2. Endlichkeit (Finitheit)
>**Der [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] muss irgendwann fertig sein.**
>
>Keine Endlos-Schleifen!
>- Der [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] darf nicht für immer laufen
>- Er muss nach einer bestimmten Anzahl von Schritten stoppen
>- Er muss ein Ergebnis liefern
>
>**Beispiel:**
>```
>❌ Endlos (schlecht):
>WHILE true DO
>    zähle = zähle + 1
>END WHILE
>
>✅ Endlich (gut):
>FOR i = 1 TO 10 DO
>    zähle = zähle + 1
>END FOR
>```

>[!important] 3. Eingabe und Ausgabe
>**Ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] braucht Daten zum Verarbeiten.**
>
>**Eingabe (Input):**
>- Daten, die der [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] bekommt
>- Kann 0 oder mehr Werte sein
>
>**Ausgabe (Output):**
>- Ergebnis der Verarbeitung
>- Mindestens 1 Wert
>
>```
>Beispiel Addition:
>
>EINGABE: a = 5, b = 3
>    │
>    ▼
>VERARBEITUNG: summe = a + b
>    │
>    ▼
>AUSGABE: summe = 8
>```

# III. Einfache Beispiele

>So sehen [[02 - RESOURCES/Notes/Algorithmus\|Algorithmen]] in der Praxis aus.

>[!example] Beispiel 1: Zwei Zahlen addieren
>**Problem:** Berechne die Summe von zwei Zahlen.
>
>**[[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]:**
>```
>1. EINGABE: Zahl a = 5
>2. EINGABE: Zahl b = 3
>3. BERECHNE: summe = a + b
>4. AUSGABE: summe
>
>Ergebnis: 8
>```
>
>**In [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]:**
>```
>FUNCTION addiere(a, b)
>    SET summe = a + b
>    RETURN summe
>END FUNCTION
>```

>[!example] Beispiel 2: Größte Zahl finden
>**Problem:** Finde die größte von drei Zahlen.
>
>**[[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]:**
>```
>1. EINGABE: a = 5, b = 9, c = 3
>2. SETZE max = a
>3. WENN b > max DANN max = b
>4. WENN c > max DANN max = c
>5. AUSGABE: max
>
>Ergebnis: 9
>```
>
>**In [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]:**
>```
>FUNCTION findeGroesste(a, b, c)
>    SET max = a
>    IF b > max THEN
>        SET max = b
>    END IF
>    IF c > max THEN
>        SET max = c
>    END IF
>    RETURN max
>END FUNCTION
>```

>[!example] Beispiel 3: Zahlen sortieren
>**Problem:** Sortiere drei Zahlen aufsteigend.
>
>**[[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] (Bubble Sort vereinfacht):**
>```
>1. EINGABE: zahlen = [5, 2, 8]
>2. Vergleiche erste zwei Zahlen
>3. Wenn erste > zweite: tausche
>4. Vergleiche zweite und dritte
>5. Wenn zweite > dritte: tausche
>6. Wiederhole bis fertig
>7. AUSGABE: [2, 5, 8]
>```

# IV. Darstellungsformen

>[[02 - RESOURCES/Notes/Algorithmus\|Algorithmen]] kann man auf verschiedene Arten aufschreiben.

>[!note] Möglichkeiten zur Darstellung
>**1. Natürliche Sprache (Text):**
>```
>"Nimm zwei Zahlen und addiere sie."
>```
>Vorteil: Einfach zu verstehen
>Nachteil: Kann mehrdeutig sein
>
>**2. [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]:**
>```
>SET summe = a + b
>RETURN summe
>```
>Vorteil: Strukturiert, klar
>Nachteil: Nicht ausführbar
>
>**3. Programmiersprache ([[02 - RESOURCES/Notes/Java\|Java]]):**
>```java
>public int add(int a, int b) {
>    return a + b;
>}
>```
>Vorteil: Direkt ausführbar
>Nachteil: Syntax-abhängig
>
>**Hinweis:** Dies ist eine [[02 - RESOURCES/Notes/Methode\|Methode]] in Java
>
>**4. Flussdiagramm:**
>```
>┌─────────┐
>│  START  │
>└────┬────┘
>     │
>     ▼
>┌─────────┐
>│Input a,b│
>└────┬────┘
>     │
>     ▼
>┌─────────┐
>│ c = a+b │
>└────┬────┘
>     │
>     ▼
>┌─────────┐
>│Output c │
>└────┬────┘
>     │
>     ▼
>┌─────────┐
>│   END   │
>└─────────┘
>```

# V. Praxisbeispiel: Login-System

>Ein komplexerer [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] aus der Praxis.

>[!example] Login-Algorithmus
>**Problem:** Prüfe, ob Benutzer sich einloggen kann.
>
>**[[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]:**
>```
>1. EINGABE: benutzername, passwort
>2. LADE gespeichertes Passwort aus Datenbank
>3. WENN kein Benutzer gefunden:
>     AUSGABE: "Benutzer existiert nicht"
>     STOP
>4. WENN passwort = gespeichertesPasswort:
>     AUSGABE: "Login erfolgreich"
>     ERSTELLE Session
>5. SONST:
>     AUSGABE: "Falsches Passwort"
>     ERHÖHE Fehlversuche
>     WENN Fehlversuche > 3:
>         SPERRE Account für 10 Minuten
>6. ENDE
>```
>
>**Visualisierung:**
>```
>         ┌──────────────┐
>         │ Benutzername │
>         │  & Passwort  │
>         └──────┬───────┘
>                │
>                ▼
>         ┌──────────────┐
>         │ Benutzer in  │
>         │ DB vorhanden?│
>         └──┬────────┬──┘
>            │        │
>         NEIN      JA
>            │        │
>            ▼        ▼
>      ┌─────────┐ ┌──────────┐
>      │ Fehler! │ │ Passwort │
>      └─────────┘ │ richtig? │
>                  └──┬────┬──┘
>                     │    │
>                   JA    NEIN
>                     │    │
>                     ▼    ▼
>              ┌────────┐ ┌────────┐
>              │ Login  │ │ Fehler │
>              │   OK   │ │ +1     │
>              └────────┘ └────────┘
>```

# VI. Algorithmus-Komplexität

>Nicht alle [[02 - RESOURCES/Notes/Algorithmus\|Algorithmen]] sind gleich schnell.

>[!note] Performance verstehen
>**Einfacher [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] (schnell):**
>```
>Finde erstes Element in Liste:
>→ Schaue an Position 0
>→ Fertig!
>Zeit: Immer gleich (O(1))
>```
>
>**Mittlerer [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]:**
>```
>Finde bestimmtes Element in Liste:
>→ Gehe durch alle Elemente
>→ Vergleiche jedes Element
>Zeit: Abhängig von Länge (O(n))
>```
>
>**Komplexer [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] (langsam):**
>```
>Bubble Sort:
>→ Vergleiche jedes mit jedem
>→ Viele Durchgänge
>Zeit: n × n = n² (O(n²))
>```

>[!tip] Faustregeln
>- Weniger Schleifen = Schneller
>- Verschachtelte Schleifen = Langsamer
>- Rekursion = Kann langsam sein
>- Suche vorher sortieren = Schneller

# VII. Häufige Fehler

>Diese Fehler solltest du vermeiden.

>[!warning] Typische Fehler beim [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]-Design
>**1. Endlos-Schleifen:**
>```
>❌ FALSCH:
>WHILE bedingung = true DO
>    mach_etwas()
>    // bedingung wird nie false!
>END WHILE
>
>✅ RICHTIG:
>SET zaehler = 0
>WHILE zaehler < 10 DO
>    mach_etwas()
>    SET zaehler = zaehler + 1
>END WHILE
>```
>
>**2. Fehlende Eingabe-Prüfung:**
>```
>❌ FALSCH:
>FUNCTION teile(a, b)
>    RETURN a / b
>END FUNCTION
>// Was wenn b = 0?
>
>✅ RICHTIG:
>FUNCTION teile(a, b)
>    IF b = 0 THEN
>        RETURN "Fehler: Division durch 0"
>    END IF
>    RETURN a / b
>END FUNCTION
>```
>
>**3. Mehrdeutige Schritte:**
>```
>❌ FALSCH:
>"Addiere einige Zahlen zusammen"
>→ Wie viele? Welche?
>
>✅ RICHTIG:
>"Addiere die Zahlen 5 und 3"
>→ Klar und eindeutig
>```

# VIII. Prüfungswissen

>Was du für die [[02 - RESOURCES/Notes/IHK\|IHK]]-Prüfung wissen musst.

>[!important] Prüfungsrelevant
>**Definition:**
>Ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] ist eine eindeutige, endliche Folge von Anweisungen zur Lösung eines Problems.
>
>**Drei Eigenschaften nennen können:**
>1. **Definitheit**: Jeder Schritt ist eindeutig
>2. **Endlichkeit**: Stoppt nach endlich vielen Schritten
>3. **Ein-/Ausgabe**: Hat Input und Output
>
>**Darstellungsformen:**
>- Natürliche Sprache
>- [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]
>- [[Flussdiagramm\|Flussdiagramm]]
>- Programmiersprache
>
>**Beispiel geben können:**
>- Einfache Addition
>- Zahlen sortieren
>- Maximum finden

>[!example] Typische Prüfungsfrage
>**Frage:** "Nennen Sie die drei wichtigsten Eigenschaften eines Algorithmus und erklären Sie diese anhand eines Beispiels."
>
>**Antwort:**
>Die drei wichtigsten Eigenschaften sind:
>
>1. **Definitheit**: Jeder Schritt ist eindeutig definiert. Beispiel: "Addiere 5 + 3" ist eindeutig, "addiere etwa 5" wäre mehrdeutig.
>
>2. **Endlichkeit**: Der Algorithmus stoppt nach endlich vielen Schritten. Eine FOR-Schleife von 1 bis 10 ist endlich, eine WHILE-Schleife ohne Abbruchbedingung wäre unendlich.
>
>3. **Eingabe und Ausgabe**: Der Algorithmus erhält Eingabewerte und liefert Ergebnisse. Bei der Addition sind die Eingaben zwei Zahlen (5 und 3), die Ausgabe ist die Summe (8).
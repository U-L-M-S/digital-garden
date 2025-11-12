---
{"dg-publish":true,"permalink":"/02-resources/notes/pseudocode/","tags":["informatik/code","GFN/prüfungsrelevant/AP2","AI-generated"],"noteIcon":"","updated":"2025-11-12T15:22:55.000+01:00"}
---

> [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] ist wie ein Rezept zum Kochen - du schreibst die Schritte auf, bevor du wirklich kochst. Es ist eine Zwischenstufe zwischen deiner Idee und dem echten [[Code\|Code]].
> > Mit [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] kannst du deine [[02 - RESOURCES/Notes/Algorithmus\|Algorithmen]] planen, ohne dich um die [[Syntax\|Syntax]] einer bestimmten Programs kümmern zu müssen.
___
## Warum [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] verwenden?

- **Planung**: Durchdenke deinen [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] bevor du Code
- **Kommunikation**: Zeige anderen deine Idee ohne Syntax-Probleme
- **[[02 - RESOURCES/Notes/Debugging\|Debugging]]**: Finde Logikfehler früher
- **Sprachunabhängig**: Funktioniert für [[02 - RESOURCES/Notes/Java\|Java]], [[02 - RESOURCES/Notes/Python\|Python]], [[02 - RESOURCES/Notes/C++\|C++]] etc.

# I. Grundelemente von [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]

> Die wichtigsten Bausteine die du immer wieder brauchst.
> 
> > Wie Lego-Steine - damit baust du jeden [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]].

---

## [[02 - RESOURCES/Notes/Variable\|Variablen]] und Zuweisungen

```
SET name = "Max"
SET alter = 25
SET summe = a + b
```

## [[02 - RESOURCES/Notes/Bedingung\|Bedingungen]]

```
IF alter >= 18 THEN
    PRINT "Volljährig"
ELSE
    PRINT "Minderjährig"
END IF
```

*Hinweis: Dies kann später als [[02 - RESOURCES/Notes/Methode\|Methode]] implementiert werden*

## Schleife

### [[02 - RESOURCES/Notes/For-Loop\|For-Loop]]:

```
FOR i = 1 TO 10 DO
    PRINT i
END FOR
```

### [[02 - RESOURCES/Notes/While-Loop\|While-Loop]]:

```
WHILE zahl > 0 DO
    PRINT zahl
    SET zahl = zahl - 1
END WHILE
```

## [[02 - RESOURCES/Notes/Funktion\|Funktionen]]

```
FUNCTION berechneQuadrat(x)
    RETURN x * x
END FUNCTION
```

# II. [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]-Konventionen

> Damit jeder deinen [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] versteht, gibt es ein paar Regeln.
> 
> > Wie Verkehrsregeln - macht alles einfacher und sicherer.

---

## Struktur-Wörter

| Wort         | Bedeutung             | Beispiel         |
| ------------ | --------------------- | ---------------- |
| SET          | [[02 - RESOURCES/Notes/Variable\|Variable]] zuweisen | SET x = 5        |
| IF/THEN/ELSE | [[02 - RESOURCES/Notes/Bedingung\|Bedingung]] prüfen  | IF x > 0 THEN... |
| FOR/WHILE    | Schleife starten      | FOR i = 1 TO 10  |
| PRINT        | Ausgabe               | PRINT "Hallo"    |
| INPUT        | Eingabe               | INPUT name       |
| RETURN       | Wert zurückgeben      | RETURN ergebnis  |

## Einrückungen verwenden

```
IF wetter = "sonnig" THEN
    PRINT "Gehe schwimmen"
    IF temperatur > 25 THEN
        PRINT "Nehme Sonnencreme mit"
    END IF
ELSE
    PRINT "Bleibe zuhause"
END IF
```

# III. Praktische Beispiele

> Echte [[02 - RESOURCES/Notes/Algorithmus\|Algorithmen]] in [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] - so machst du es richtig.
> 
> > Von einfach bis komplex - Schritt für Schritt lernen.

---

## Einfaches Beispiel: Taschenrechner

```
PRINT "Gib erste Zahl ein:"
INPUT zahl1
PRINT "Gib zweite Zahl ein:"
INPUT zahl2
PRINT "Wähle Operation (+, -, *, /):"
INPUT operation

IF operation = "+" THEN
    SET ergebnis = zahl1 + zahl2
ELSE IF operation = "-" THEN
    SET ergebnis = zahl1 - zahl2
ELSE IF operation = "*" THEN
    SET ergebnis = zahl1 * zahl2
ELSE IF operation = "/" THEN
    IF zahl2 ≠ 0 THEN
        SET ergebnis = zahl1 / zahl2
    ELSE
        PRINT "Fehler: Division durch null!"
        STOP
    END IF
END IF

PRINT "Ergebnis:", ergebnis
```

## Komplexeres Beispiel: Array sortieren

```
FUNCTION bubbleSort(liste)
    SET n = LENGTH(liste)
    
    FOR i = 0 TO n-2 DO
        FOR j = 0 TO n-2-i DO
            IF liste[j] > liste[j+1] THEN
                // Tausche Elemente
                SET temp = liste[j]
                SET liste[j] = liste[j+1]
                SET liste[j+1] = temp
            END IF
        END FOR
    END FOR
    
    RETURN liste
END FUNCTION
```

# IV. Von [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] zu echtem Code

> So übersetzt du deinen [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] in eine echte Programmiersprache.
> 
> > Wie Übersetzen von Deutsch ins Englische - die Idee bleibt gleich.

---

## [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] → [[02 - RESOURCES/Notes/Java\|Java]]:

**[[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]:**

```
IF alter >= 18 THEN
    PRINT "Volljährig"
END IF
```

**[[02 - RESOURCES/Notes/Java\|Java]]:**

```java
if (alter >= 18) {
    System.out.println("Volljährig");
}
```

## [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] → [[02 - RESOURCES/Notes/Python\|Python]]:

**[[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]:**

```
FOR i = 1 TO 5 DO
    PRINT i
END FOR
```

**[[02 - RESOURCES/Notes/Python\|Python]]:**

```python
for i in range(1, 6):
    print(i)
```

> [!tip] Tipp Schreibe immer erst [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]], dann erst echten [[Code\|Code]]. Das spart dir viel Zeit beim [[02 - RESOURCES/Notes/Debugging\|Debugging]]!

# V. Häufige Fehler vermeiden

> Die typischen Stolperfallen und wie du sie umgehst.
> 
> > Aus Fehlern lernt man - aber manche kann man auch direkt vermeiden.

---

## Typische Probleme:

### Unklare [[02 - RESOURCES/Notes/Variable\|Variablen]]-Namen

❌ **Schlecht:**

```
SET x = 5
SET y = x * 2
```

✅ **Besser:**

```
SET radius = 5
SET durchmesser = radius * 2
```

### Fehlende [[02 - RESOURCES/Notes/Bedingung\|Bedingungen]]

❌ **Schlecht:**

```
SET ergebnis = zahl1 / zahl2
```

✅ **Besser:**

```
IF zahl2 ≠ 0 THEN
    SET ergebnis = zahl1 / zahl2
ELSE
    PRINT "Division durch null nicht möglich!"
END IF
```

### Endlos-Schleife

❌ **Schlecht:**

```
WHILE zahl > 0 DO
    PRINT zahl
    // Vergessen: zahl zu verringern!
END WHILE
```

✅ **Besser:**

```
WHILE zahl > 0 DO
    PRINT zahl
    SET zahl = zahl - 1
END WHILE
```

> [!important] Wichtig [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]] soll verständlich sein - schreibe so, dass es auch andere verstehen können!
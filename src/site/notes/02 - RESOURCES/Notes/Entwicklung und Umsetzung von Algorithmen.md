---
{"dg-publish":true,"permalink":"/02-resources/notes/entwicklung-und-umsetzung-von-algorithmen/","tags":["ausbildung/gfn/ap2/vorbereitung"],"noteIcon":"","updated":"2025-11-06T11:14:43.000+01:00"}
---


>Dieser Teil dauert ebenfalls 90 Minuten und umfasst 100 Punkte (10%).
>>Hier geht es um die praktische Programmierung - Algorithmen, [[02 - RESOURCES/Notes/SQL\|SQL]], [[02 - RESOURCES/Notes/OOP\|OOP]] und Testing.
___

## [[02 - RESOURCES/Notes/SQL\|SQL]] - Strukturierte Datenbankabfragen
>[[02 - RESOURCES/Notes/SQL\|SQL]] ist die Sprache um mit [[02 - RESOURCES/Notes/Datenbank\|Datenbank]]en zu kommunizieren - unverzichtbar für jeden Entwickler.

>[!important] Wichtig - Prüfungsrelevant
>In der AP2 gibt es ein **2-seitiges SQL-Detailblatt** mit allen Befehlen! 👈

### Tabellen erstellen und ändern

#### [[02 - RESOURCES/Notes/SQL CREATE\|SQL CREATE]] TABLE
>Erstellt eine neue Tabelle in der [[02 - RESOURCES/Notes/Datenbank\|Datenbank]].

```sql
CREATE TABLE Kunde (
    KundenID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100),
    Geburtsdatum DATE
);
```

#### [[02 - RESOURCES/Notes/SQL ALTER\|SQL ALTER]] TABLE
>Ändert bestehende Tabellen - Spalten hinzufügen oder entfernen.

```sql
-- Spalte hinzufügen
ALTER TABLE Kunde ADD Telefon VARCHAR(20);

-- Spalte löschen
ALTER TABLE Kunde DROP COLUMN Telefon;

-- Spalte ändern
ALTER TABLE Kunde MODIFY Email VARCHAR(150);
```

#### INDEX erstellen
>Indizes machen Abfragen schneller - wie ein Stichwortverzeichnis im Buch.

```sql
CREATE INDEX idx_kunde_name ON Kunde(Name);
```

### Daten manipulieren

#### [[02 - RESOURCES/Notes/SQL INSERT\|SQL INSERT]]
>Fügt neue Datensätze in Tabellen ein.

```sql
-- Einzelner Datensatz
INSERT INTO Kunde (KundenID, Name, Email)
VALUES (1, 'Max Mustermann', 'max@example.com');

-- Mehrere Datensätze
INSERT INTO Kunde (KundenID, Name, Email) VALUES
    (2, 'Anna Schmidt', 'anna@example.com'),
    (3, 'Tom Meyer', 'tom@example.com');
```

#### [[02 - RESOURCES/Notes/SQL UPDATE\|SQL UPDATE]]
>Ändert bestehende Datensätze.

```sql
UPDATE Kunde
SET Email = 'neuemail@example.com'
WHERE KundenID = 1;
```

>[!warning] Warnung
>Vergiss nie die WHERE-Klausel - sonst änderst du ALLE Datensätze!

#### [[02 - RESOURCES/Notes/SQL DELETE\|SQL DELETE]]
>Löscht Datensätze aus Tabellen.

```sql
DELETE FROM Kunde WHERE KundenID = 3;
```

### Daten abfragen

#### [[02 - RESOURCES/Notes/SQL SELECT\|SQL SELECT]] - Die Basis
>Holt Daten aus der [[02 - RESOURCES/Notes/Datenbank\|Datenbank]].

```sql
-- Alle Spalten
SELECT * FROM Kunde;

-- Bestimmte Spalten
SELECT Name, Email FROM Kunde;

-- Mit Bedingung
SELECT Name FROM Kunde WHERE KundenID > 5;
```

#### [[02 - RESOURCES/Notes/SQL WHERE\|SQL WHERE]] - Filtern
>Filtert Ergebnisse nach Bedingungen.

```sql
-- Vergleiche
SELECT * FROM Kunde WHERE Alter > 18;
SELECT * FROM Kunde WHERE Name = 'Max';

-- Kombinationen
SELECT * FROM Kunde WHERE Alter > 18 AND Stadt = 'Berlin';
SELECT * FROM Kunde WHERE Stadt = 'Berlin' OR Stadt = 'Hamburg';

-- LIKE für Textsuche
SELECT * FROM Kunde WHERE Name LIKE 'M%'; -- Beginnt mit M
SELECT * FROM Kunde WHERE Email LIKE '%@gmail.com'; -- Endet mit @gmail.com
```

#### [[02 - RESOURCES/Notes/SQL JOIN\|SQL JOIN]] - Tabellen verbinden
>Kombiniert Daten aus mehreren Tabellen.

**INNER JOIN** - Nur übereinstimmende Datensätze:
```sql
SELECT Kunde.Name, Bestellung.BestellNr
FROM Kunde
INNER JOIN Bestellung ON Kunde.KundenID = Bestellung.KundenID;
```

**LEFT JOIN** - Alle aus linker Tabelle:
```sql
SELECT Kunde.Name, Bestellung.BestellNr
FROM Kunde
LEFT JOIN Bestellung ON Kunde.KundenID = Bestellung.KundenID;
```

**RIGHT JOIN** - Alle aus rechter Tabelle:
```sql
SELECT Kunde.Name, Bestellung.BestellNr
FROM Kunde
RIGHT JOIN Bestellung ON Kunde.KundenID = Bestellung.KundenID;
```

#### [[SQL ORDER BY\|SQL ORDER BY]] - Sortieren
>Sortiert Ergebnisse aufsteigend oder absteigend.

```sql
-- Aufsteigend (Standard)
SELECT * FROM Kunde ORDER BY Name;

-- Absteigend
SELECT * FROM Kunde ORDER BY Alter DESC;

-- Mehrere Spalten
SELECT * FROM Kunde ORDER BY Stadt, Name;
```

#### [[02 - RESOURCES/Notes/SQL GROUP BY\|SQL GROUP BY]] - Gruppieren
>Fasst Datensätze zusammen - oft mit Aggregatfunktionen.

```sql
-- Anzahl Kunden pro Stadt
SELECT Stadt, COUNT(*) as AnzahlKunden
FROM Kunde
GROUP BY Stadt;

-- Durchschnittsalter pro Stadt
SELECT Stadt, AVG(Alter) as Durchschnittsalter
FROM Kunde
GROUP BY Stadt;
```

**Aggregatfunktionen:**
- **COUNT()** - Anzahl
- **SUM()** - Summe
- **AVG()** - Durchschnitt
- **MIN()** - Minimum
- **MAX()** - Maximum

#### [[02 - RESOURCES/Notes/SQL HAVING\|SQL HAVING]] - Gruppierungen filtern
>Wie WHERE, aber für gruppierte Ergebnisse.

```sql
-- Nur Städte mit mehr als 10 Kunden
SELECT Stadt, COUNT(*) as AnzahlKunden
FROM Kunde
GROUP BY Stadt
HAVING COUNT(*) > 10;
```

>[!tip] Merkhilfe
>**WHERE** filtert VOR Gruppierung, **HAVING** filtert NACH Gruppierung.

___

## [[02 - RESOURCES/Notes/Algorithmus\|Algorithmen]]
>Ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] ist eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems.

### Eigenschaften eines guten [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]:
- **Korrektheit** - Liefert das richtige Ergebnis
- **Effizienz** - Braucht wenig Zeit und [[02 - RESOURCES/Notes/Speicher\|Speicher]]
- **Verständlichkeit** - Code ist lesbar und wartbar
- **Determinismus** - Gleiches Input = gleiches Output
- **Terminierung** - Hört irgendwann auf

### Sortieralgorithmen

#### [[02 - RESOURCES/Notes/Bubble Sort\|Bubble Sort]]
>Vergleicht benachbarte Elemente und tauscht sie wenn nötig - wie Blasen die aufsteigen.

**Funktionsweise:**
1. Vergleiche Element mit Nachbar
2. Tausche wenn in falscher Reihenfolge
3. Wiederhole bis sortiert

**Komplexität:**
- **Best Case:** [[3. Big O(n)\|O(n)]] - bereits sortiert
- **Average Case:** [[02 - RESOURCES/Notes/6. Big O(n²)\|O(n²)]]
- **Worst Case:** [[02 - RESOURCES/Notes/6. Big O(n²)\|O(n²)]]

```java
void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Tauschen
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

#### [[02 - RESOURCES/Notes/Selection Sort\|Selection Sort]]
>Sucht immer das kleinste Element und setzt es an die richtige Position.

🆕 **Detailliert im Katalog 2025!**

**Funktionsweise:**
1. Finde kleinstes Element
2. Tausche es an erste Position
3. Wiederhole für restliche Elemente

**Komplexität:**
- **Best/Average/Worst Case:** [[02 - RESOURCES/Notes/6. Big O(n²)\|O(n²)]]

```java
void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Tauschen
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
```

#### [[02 - RESOURCES/Notes/Insertion Sort\|Insertion Sort]]
>Fügt Elemente eins nach dem anderen an die richtige Stelle ein - wie Karten sortieren.

🆕 **Detailliert im Katalog 2025!**

**Funktionsweise:**
1. Nehme nächstes Element
2. Suche richtige Position in sortiertem Teil
3. Füge es dort ein

**Komplexität:**
- **Best Case:** [[3. Big O(n)\|O(n)]] - bereits sortiert
- **Average/Worst Case:** [[02 - RESOURCES/Notes/6. Big O(n²)\|O(n²)]]

```java
void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

### Suchalgorithmen

#### Lineare Suche
>Durchsucht Liste Element für Element von Anfang bis Ende.

**Komplexität:** [[3. Big O(n)\|O(n)]]

```java
int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i; // Gefunden
        }
    }
    return -1; // Nicht gefunden
}
```

#### Binäre Suche
>Halbiert Suchbereich in jedem Schritt - funktioniert NUR bei sortierten Arrays!

**Komplexität:** [[4. Big O(log n)\|O(log n)]]

**Funktionsweise:**
1. Schaue in die Mitte
2. Ist Element kleiner? → Linke Hälfte
3. Ist Element größer? → Rechte Hälfte
4. Wiederhole bis gefunden

```java
int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

___

## Komplexitätsanalyse - O-Notation
>Beschreibt wie langsam ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] wird wenn Daten größer werden.

### Die wichtigsten Komplexitäten:

| Notation | Name | Beispiel | Beschreibung |
|----------|------|----------|--------------|
| [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] | Konstant | Array-Zugriff | Immer gleich schnell |
| [[4. Big O(log n)\|O(log n)]] | Logarithmisch | Binäre Suche | Sehr effizient |
| [[3. Big O(n)\|O(n)]] | Linear | Lineare Suche | Proportional zur Größe |
| [[02 - RESOURCES/Notes/5. Big O(n log n)\|O(n log n)]] | Quasi-Linear | [[02 - RESOURCES/Notes/Quicksort\|Quicksort]], Mergesort | Gute Sortierung |
| [[02 - RESOURCES/Notes/6. Big O(n²)\|O(n²)]] | Quadratisch | [[02 - RESOURCES/Notes/Bubble Sort\|Bubble Sort]] | Langsam bei großen Daten |

### Best/Average/Worst Case
>Algorithmen können je nach Input unterschiedlich schnell sein.

- **Best Case** - Ideale Bedingungen (z.B. Array bereits sortiert)
- **Average Case** - Durchschnittlicher Fall
- **Worst Case** - Schlechtester Fall (meist wichtigster)

___

## [[02 - RESOURCES/Notes/OOP\|OOP]] - Objektorientierte Programmierung
>[[02 - RESOURCES/Notes/OOP\|OOP]] organisiert Code in Objekten - jedes Objekt hat Daten und Funktionen.

### Die 4 Säulen der [[02 - RESOURCES/Notes/OOP\|OOP]]:

#### [[02 - RESOURCES/Notes/Kapselung\|Kapselung]]
>Verstecke interne Details - nur das Nötige nach außen zeigen.

🆕 **Explizit betont im Katalog 2025!**

**Vorteile:**
- Schützt Daten vor direktem Zugriff
- Änderungen innen haben keine Auswirkung außen
- Erleichtert Wartung

```java
public class BankKonto {
    private double kontostand; // Privat!

    public void einzahlen(double betrag) {
        if (betrag > 0) {
            kontostand += betrag;
        }
    }

    public double getKontostand() {
        return kontostand;
    }
}
```

#### [[02 - RESOURCES/Notes/Vererbung\|Vererbung]]
>Kindklassen erben Eigenschaften von Elternklassen - verhindert Code-Duplikation.

```java
class Tier {
    String name;

    void atmen() {
        System.out.println("Atmet");
    }
}

class Hund extends Tier {
    void bellen() {
        System.out.println("Wuff!");
    }
}
```

#### [[02 - RESOURCES/Notes/Polymorphie\|Polymorphie]]
>Ein [[02 - RESOURCES/Notes/Java Interface\|Interface]], viele Formen - gleicher Aufruf, unterschiedliches Verhalten.

```java
class Tier {
    void machGeraeusch() {
        System.out.println("...");
    }
}

class Hund extends Tier {
    void machGeraeusch() {
        System.out.println("Wuff!");
    }
}

class Katze extends Tier {
    void machGeraeusch() {
        System.out.println("Miau!");
    }
}
```

#### Abstraktion
>Komplexität verstecken - zeige nur das Wesentliche.

```java
abstract class Form {
    abstract double berechneFlaeche();
}

class Kreis extends Form {
    double radius;

    double berechneFlaeche() {
        return Math.PI * radius * radius;
    }
}
```

___

## Programmierung - Kontrollstrukturen
>Kontrollstrukturen steuern den Ablauf deines Programms.

### Verzweigungen

#### if-else
```java
if (alter >= 18) {
    System.out.println("Volljährig");
} else {
    System.out.println("Minderjährig");
}
```

#### switch-case
```java
switch (tag) {
    case 1:
        System.out.println("Montag");
        break;
    case 2:
        System.out.println("Dienstag");
        break;
    default:
        System.out.println("Anderer Tag");
}
```

### Schleifen

#### for-Schleife
>Wenn du weißt wie oft wiederholt werden soll.

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

#### while-Schleife
>Wiederholt solange Bedingung wahr ist.

```java
while (zaehler < 100) {
    zaehler++;
}
```

#### do-while-Schleife
>Führt Code mindestens einmal aus.

```java
do {
    System.out.println("Mindestens einmal");
} while (false);
```

___

## Testing
>Tests finden Fehler früh - je später ein Fehler gefunden wird, desto teurer.

### [[02 - RESOURCES/Notes/Unit Test\|Unit-Tests]]
>Testet einzelne Funktionen oder Methoden isoliert.

```java
@Test
public void testAddition() {
    Calculator calc = new Calculator();
    assertEquals(5, calc.add(2, 3));
}
```

### [[02 - RESOURCES/Notes/Black Box Test\|Black Box Test]]
>Testen ohne Code zu kennen - nur Eingabe und erwartete Ausgabe.

**Vorteile:**
- Unabhängig von Implementierung
- Testet aus Nutzerperspektive

**Nachteile:**
- Findet nicht alle Fehler
- Weiß nicht wo Problem liegt

### [[02 - RESOURCES/Notes/White Box Test\|White Box Test]]
>Testen mit Code-Kenntnis - alle Pfade durchgehen.

**Vorteile:**
- Findet versteckte Fehler
- Testet alle Code-Pfade

**Nachteile:**
- Aufwändig
- Braucht Programmier-Kenntnisse

### [[02 - RESOURCES/Notes/Last- und Performancetest\|Last-/Performancetests]]
>Testen wie System unter Last reagiert.

**Was wird getestet:**
- Antwortzeiten unter Last
- Maximale Nutzerzahl
- [[02 - RESOURCES/Notes/Speicher\|Speicher]]-Verbrauch
- [[02 - RESOURCES/Notes/CPU\|CPU]]-Auslastung

___

## Datenstrukturen
>Wie du Daten organisierst beeinflusst Performance und Wartbarkeit.

### Arrays
>Feste Größe, schneller Zugriff über Index.

```java
int[] zahlen = {1, 2, 3, 4, 5};
int erste = zahlen[0]; // Zugriff: O(1)
```

**Vorteile:**
- Sehr schneller Zugriff [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]]
- Wenig [[02 - RESOURCES/Notes/Speicher\|Speicher]]-Overhead

**Nachteile:**
- Größe ist fix
- Einfügen/Löschen teuer

### Listen
>Variable Größe, dynamisch erweiterbar.

```java
ArrayList<String> liste = new ArrayList<>();
liste.add("Element 1");
liste.add("Element 2");
```

**LinkedList:**
- Gut fürs Einfügen/Löschen
- Langsamer Zugriff

**ArrayList:**
- Schneller Zugriff
- Langsames Einfügen/Löschen

### Stack
>Last In, First Out (LIFO) - wie ein Stapel Teller.

**Operationen:**
- **push()** - Element oben drauf
- **pop()** - Element von oben nehmen
- **peek()** - Oberstes Element anschauen

```java
Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.push(2);
int top = stack.pop(); // 2
```

### Queue
>First In, First Out (FIFO) - wie eine Warteschlange.

**Operationen:**
- **enqueue()** - Hinten anstellen
- **dequeue()** - Vorne rauskommen

```java
Queue<String> queue = new LinkedList<>();
queue.add("Erster");
queue.add("Zweiter");
String naechster = queue.poll(); // "Erster"
```

___

## Fehlerbehandlung
>Fehler passieren - wichtig ist wie du damit umgehst.

### try-catch-finally
>Fange Fehler ab bevor das Programm abstürzt.

```java
try {
    int result = 10 / 0; // Division durch 0
} catch (ArithmeticException e) {
    System.out.println("Fehler: " + e.getMessage());
} finally {
    System.out.println("Wird immer ausgeführt");
}
```

**Struktur:**
- **try** - Code der Fehler werfen könnte
- **catch** - Was tun bei Fehler
- **finally** - Immer ausführen (z.B. Ressourcen freigeben)

### Exception-Hierarchie
- **Exception** - Behandelbare Fehler
- **RuntimeException** - Programmierfehler (NullPointer, ArrayIndexOutOfBounds)
- **Error** - Schwere Systemfehler (OutOfMemory)

___

## [[02 - RESOURCES/Notes/CPS\|Cyber-physische Systeme]]
>Verbindung zwischen [[02 - RESOURCES/Notes/Software\|Software]] und physischer Welt - [[02 - RESOURCES/Notes/Sensoren\|Sensoren]] und [[02 - RESOURCES/Notes/Aktoren\|Aktoren]].

🆕 **Neu für FIAE im Katalog 2025!**

### [[02 - RESOURCES/Notes/Sensoren\|Sensoren]]
>Sammeln Daten aus der Umwelt.

**Beispiele:**
- **Temperatursensor** - misst Temperatur
- **Bewegungssensor** - erkennt Bewegung
- **Lichtsensor** - misst Helligkeit
- **Drucksensor** - misst Druck

### [[02 - RESOURCES/Notes/Aktoren\|Aktoren]]
>Führen physische Aktionen aus.

**Beispiele:**
- **Motor** - Bewegung erzeugen
- **LED** - Licht ausgeben
- **Lautsprecher** - Ton ausgeben
- **Ventil** - Flüssigkeiten steuern

### Bibliotheken für [[02 - RESOURCES/Notes/CPS\|CPS]]
>Nutze fertige Bibliotheken statt alles selbst zu programmieren.

**Beispiele:**
- **Arduino Libraries** - für Mikrocontroller
- **Raspberry Pi GPIO** - für Sensoren und Aktoren
- **MQTT** - Kommunikation zwischen Geräten

### Abfragerhythmus planen
>Wie oft sollen [[02 - RESOURCES/Notes/Sensoren\|Sensoren]] abgefragt werden?

**Überlegungen:**
- **Zu schnell:** Verschwendet Rechenleistung
- **Zu langsam:** Verpasst wichtige Events
- **Kompromiss:** So oft wie nötig, so selten wie möglich

```java
// Alle 100ms Sensor abfragen
while (true) {
    int temperatur = sensor.readTemperature();
    if (temperatur > 30) {
        motor.turnOn(); // Lüfter an
    }
    Thread.sleep(100);
}
```

___

## [[02 - RESOURCES/Notes/Monitoring\|Monitoring]]
>Überwache deine Systeme - finde Probleme bevor Nutzer sie merken.

🆕 **Festlegung Monitoringdaten verstärkt im Katalog 2025!**

### Was monitoren?
- **[[02 - RESOURCES/Notes/CPU\|CPU]]-Auslastung** - Ist der [[Prozessor\|Prozessor]] überlastet?
- **[[02 - RESOURCES/Notes/Speicher\|Speicher]]-Verbrauch** - Läuft der RAM voll?
- **Festplatten-Platz** - Wird Speicherplatz knapp?
- **Netzwerk-Traffic** - Wie viele Daten fließen?
- **Antwortzeiten** - Reagiert das System schnell genug?
- **Fehlerraten** - Wie viele Anfragen schlagen fehl?

### [[Schwellwerte\|Schwellwerte]] festlegen
>Definiere Grenzwerte ab wann Alarm geschlagen wird.

🆕 **Verstärkt im Katalog 2025!**

**Beispiele:**
- **[[02 - RESOURCES/Notes/CPU\|CPU]] > 80%** für 5 Minuten → Warnung
- **[[02 - RESOURCES/Notes/Speicher\|Speicher]] > 90%** → Kritisch
- **Antwortzeit > 2 Sekunden** → Performance-Problem
- **Fehlerrate > 5%** → Untersuchen

```java
if (cpu_usage > 80) {
    sendAlert("CPU-Auslastung kritisch: " + cpu_usage + "%");
}

if (response_time > 2000) {
    logWarning("Langsame Antwortzeit: " + response_time + "ms");
}
```

### Monitoring-Tools
- **Prometheus** - Metriken sammeln
- **Grafana** - Visualisierung
- **Nagios** - Infrastruktur-Monitoring
- **ELK Stack** - Log-Analyse

___

## [[02 - RESOURCES/Notes/Pseudocode\|Pseudocode]]
>Algorithmen in einfacher Sprache aufschreiben - vor dem Programmieren.

**Vorteile:**
- Unabhängig von Programmiersprache
- Fokus auf Logik, nicht Syntax
- Gut für Planung und Kommunikation

**Beispiel: Lineare Suche in Pseudocode**
```
FUNKTION linearesuche(liste, zielwert)
    FÜR JEDES element IN liste:
        WENN element == zielwert:
            GEBE position ZURÜCK
    GEBE -1 ZURÜCK  // Nicht gefunden
```

**Beispiel: Bubble Sort in Pseudocode**
```
FUNKTION bubblesort(liste)
    n = länge(liste)
    FÜR i VON 0 BIS n-1:
        FÜR j VON 0 BIS n-i-1:
            WENN liste[j] > liste[j+1]:
                TAUSCHE liste[j] MIT liste[j+1]
```


---
{"dg-publish":true,"permalink":"/00-projects/gfn/ap-2/lf-11-funktionalitaet-in-anwendungen-realisieren/","tags":["GFN/LF11"],"noteIcon":"","updated":"2025-09-16T14:40:37.000+02:00"}
---

> Dieses Lernfeld 11a bringt dir bei, wie du richtige [[02 - RESOURCES/Notes/Software\|Software]] entwickelst - von der ersten Idee bis zum fertigen Programm.
> 
> > Hier lernst du Algorithmen, [[02 - RESOURCES/Notes/Java\|Java]], Datenstrukturen und [[02 - RESOURCES/Notes/UML\|UML]] kennen. Das ist das Handwerkszeug für jeden Programmierer.

---

# I. Grundlagen der Algorithmen

> Algorithmen sind wie Kochrezepte für den Computer - sie zeigen Schritt für Schritt, wie Probleme gelöst werden.
> 
> > Ohne Algorithmen könnte kein Programm funktionieren. Sie sind das Herz jeder [[02 - RESOURCES/Notes/Software\|Software]].

---

## [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]

> Ein [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]] ist ein präzise festgelegtes Verfahren zur Lösung von Problemen. Wie ein Kochrezept, das aus endlich vielen Schritten besteht und in endlicher Zeit ein Ergebnis produziert.

### 5 Bedingungen für jeden [[02 - RESOURCES/Notes/Algorithmus\|Algorithmus]]:

- **Spezifikation** - Was kommt rein, was soll rauskommen?
- **Durchführbarkeit** - Muss vollständig beschrieben und ausführbar sein
- **Terminiertheit** - Muss irgendwann aufhören
- **Determiniertheit** - Bei gleichen Eingaben immer gleiches Ergebnis
- **Korrektheit** - Bei korrekten Eingaben muss korrektes Ergebnis rauskommen

> [!example] Beispiel Gehaltsberechnung: Bruttolohn rein, Nettolohn raus. Immer dasselbe Ergebnis bei gleichen Daten.

---

# II. [[02 - RESOURCES/Notes/Java\|Java]] Entwicklungsumgebung

> [[02 - RESOURCES/Notes/Java\|Java]] ist plattformunabhängig - einmal geschrieben, läuft überall. Das macht die Sprache so beliebt für große [[02 - RESOURCES/Notes/Software\|Software]]-Projekte.
> 
> > Dafür brauchst du die richtige [[02 - RESOURCES/Notes/IDE\|IDE]] und verstehen, wie der [[02 - RESOURCES/Notes/javac\|javac]] funktioniert.

---

## [[02 - RESOURCES/Notes/Java\|Java]] [[02 - RESOURCES/Notes/IDE\|IDE]]

> Eine [[02 - RESOURCES/Notes/IDE\|IDE]] ist wie eine Werkbank für Programmierer - alles was du brauchst ist an einem Ort.

### Wichtige Komponenten:

- **JDK** - Java Development Kit - die komplette Werkzeugkiste
- **JRE** - Java Runtime Environment - damit laufen Java Programme
- **[[02 - RESOURCES/Notes/JVM\|JVM]]** - [[02 - RESOURCES/Notes/JVM\|Java Virtual Machine]] - übersetzt Bytecode in Maschinencode
- **Java [[02 - RESOURCES/Notes/Compiler\|Compiler]]** ([[02 - RESOURCES/Notes/javac\|javac]]) - macht aus Java-Code Bytecode

### Entwicklungsfluss:

1. **Quelle.java** - dein Java Code
2. **Java [[02 - RESOURCES/Notes/Compiler\|Compiler]]** ([[02 - RESOURCES/Notes/javac\|javac]]) - macht Bytecode draus (Quelle.class)
3. **[[02 - RESOURCES/Notes/JVM\|JVM]]** - führt Bytecode auf dem Zielsystem aus

> [!tip] Tipp NetBeans ist eine gute [[02 - RESOURCES/Notes/IDE\|IDE]] für Anfänger - hat alles integriert.

---

# III. Java Grundlagen

> Java ist objektorientiert - alles dreht sich um Klassen und Objekte. Das macht Programme übersichtlich und wiederverwendbar.
> 
> > Mit Klassen baust du Bausteine, aus denen du dann Objekte erschaffst.

---

## [[02 - RESOURCES/Notes/Java klasse\|Java klasse]] und [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]]

> Klassen sind wie Baupläne, Objekte sind die fertigen Häuser. Eine Klassen beschreibt, was ein Objekt können soll.

### Aufbau einer [[02 - RESOURCES/Notes/Java klasse\|Java klasse]]:

- **Attributen** - Was das [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] weiß (Eigenschaften)
- **[[02 - RESOURCES/Notes/Java Methode\|Java Methode]]** - Was das [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] kann (Funktionen)

> [!example] Beispiel Klasse Tier:
> 
> ```java
> class Tier {
>    String art;        // Attribut
>    double gewicht;    // Attribut
>    
>    void friss() {     // Methode
>        // Code zum Fressen
>    }
> }
> ```

### Java Objekt erstellen:

```java
Tier elefant = new Tier();  // Neues Objekt
elefant.art = "Elefant";    // Attribut setzen
elefant.friss();            // Methode aufrufen
```

---

# IV. Datenstrukturen

> Datenstrukturen sind wie Container - verschiedene Formen für verschiedene Zwecke. Willst du Daten sortiert? Unsortiert? Schnell durchsuchen?
> 
> > Die richtige Datenstruktur macht dein Programm schneller und sauberer.

---

## Einfache Datenstrukturen

### Arrays

- Feste Größe, gleicher [[02 - RESOURCES/Notes/Datentyp\|Datentyp]]
- Schneller Zugriff über Index
- `int[] zahlen = {1, 2, 3, 4, 5};`

## Collections - die Flexiblen

### Lists:

- **ArrayList** - variabel, wie ein erweiterbares Array
- **LinkedList** - verkettet, gut zum Einfügen/Löschen

### Sets:

- **HashSet** - unsortiert, jedes Element nur einmal
- **TreeSet** - sortiert automatisch

### Maps:

- **HashMap** - unsortiert, Schlüssel → Wert
- **TreeMap** - sortiert nach Schlüsseln

| Datenstruktur | Eigenschaften | Verwendung | |-----------------------------------|---------------|------------| | ArrayList | Variabel, schneller Zugriff | Wenn du oft auf Elemente zugreifst | | LinkedList | Verkettet, schnelles Einfügen | Wenn du oft einfügst/löschst | | HashSet | Eindeutige Elemente, unsortiert | Duplikate vermeiden | | HashMap | Schlüssel-Wert-Paare | Wie ein Wörterbuch |

---

# V. Komplexe Datenstrukturen

> Für große Datenmengen brauchst du clevere Datenstrukturen - sie machen den Unterschied zwischen sekunden- und minutenlangen Wartezeiten.
> 
> > Hash-basierte Strukturen und Sortieralgorithmen sind hier die Profiwerkzeuge.

---

## Hashbasierte Datenstrukturen

> Hash-Verfahren sind wie ein super-schneller Index in einem Buch. Statt alles durchzublättern, springst du direkt zur richtigen Seite.

### Eigenschaften:

- Nicht lineare Datenstruktur
- Jeder Datenwert hat eindeutigen Schlüssel
- Schnelle Suche unabhängig von Datengröße
- Verschiedene Hash-Verfahren: Divisions-Rest-Methode, Multiplikative Methode, etc.

### Bekannte Hash-Verfahren:

- **Brent-Hashing**
- **Doppel-Hashing**
- **Kuckucks-Hashing**
- **Mittquadratmethode**

> [!tip] Anwendung Datenbanken nutzen Hash-Verfahren für schnelle Suchen in riesigen Tabellen.

## Sortieralgorithmen

### Heapsort

- "Heap" = Haufen, Halde
- Instabiles aber schnelles Sortierverfahren
- Basiert auf binärem Heap (vollständiger binärer Baum)
- **Max-Heap**: Elternknoten ≥ Kindknoten
- **Min-Heap**: Elternknoten ≤ Kindknoten

> [!important] Prinzip Beginne bei letzten Elternknoten, baue Heap auf, tausche größtes Element an Ende.

---

# VI. [[02 - RESOURCES/Notes/UML\|UML]] Modellierung

> [[02 - RESOURCES/Notes/UML\|UML]] ist die Sprache der [[02 - RESOURCES/Notes/Software\|Software]]-Architekten. Bevor du programmierst, zeichnest du deine Ideen auf - das spart später viel Zeit.
> 
> > Mit [[02 - RESOURCES/Notes/UML\|UML]] können alle im Team verstehen, wie die [[02 - RESOURCES/Notes/Software\|Software]] aufgebaut ist.

---

## [[02 - RESOURCES/Notes/UML\|UML]] - [[02 - RESOURCES/Notes/UML\|Unified Modeling Language]]

> [[02 - RESOURCES/Notes/UML\|UML]] hat verschiedene Diagramme für verschiedene Sichten auf deine Software - wie ein Bauplan mit Grundriss, Seitenansicht und Elektroplan.

### Die 5 Sichten:

- **Logische Sicht** - [[02 - RESOURCES/Notes/UML-Klassendiagramm\|Klassendiagramme]], Paketdiagramme
- **Ablaufsicht** - [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|Sequenzdiagramme]], [[02 - RESOURCES/Notes/UML-Zustandsdiagramme\|Zustandsdiagramme]]
- **Physische Sicht** - Deployment-Diagramme
- **Implementierungssicht** - Komponenten-Diagramme
- **Szenarien** - Use-Case-Diagramme, Aktivitätsdiagramme

## Anwendungsfalldiagramm

> Use-Case-Diagramme zeigen, was dein System für wen tun soll - wie eine Aufgabenliste für die Software.

### Aufbau:

- **Anwendungsfall** - horizontale Ovale mit Verben (z.B. "Geld abheben")
- **Akteure** - Strichmännchen für Benutzer
- **System-Grenzen** - Rechteck um alle Anwendungsfälle

> [!example] Beispiel Bankautomat: Akteur "Kunde" → Anwendungsfall "Geld abheben", "Kontostand prüfen"

## Klassendiagramm

> [[02 - RESOURCES/Notes/UML-Klassendiagramm\|Klassendiagramme]] sind der Bauplan deiner Klassen - zeigen Eigenschaften, Funktionen und Beziehungen.

### Darstellung einer Klasse:

```
┌─────────────┐
│ Klassenname │
├─────────────┤
│ + attribut1 │ ← Attribute
│ - attribut2 │
├─────────────┤
│ + methode1()│ ← Methoden
│ - methode2()│
└─────────────┘
```

### Sichtbarkeiten:

- **+** öffentlich - jeder kann darauf zugreifen
- **-** privat - nur die Klasse selbst
- **#** geschützt - Klasse und Unterklassen

## Sequenzdiagramm

> [[02 - RESOURCES/Notes/UML-Sequenzdiagramme\|Sequenzdiagramme]] zeigen zeitliche Abläufe - wie ein Chat-Verlauf zwischen Objekten.

### Elemente:

- **Akteure** - senkrechte Linien (Lebenslinien)
- **Nachrichten** - Pfeile zwischen Akteuren
- **Zeit** - läuft von oben nach unten

## Aktivitätsdiagramm

> Aktivitätsdiagramme sind wie Flussdiagramme - zeigen Entscheidungen und parallele Abläufe.

### Notation:

- **Startknoten** - schwarzer Punkt ●
- **Endknoten** - schwarzer Punkt im Kreis ⦿
- **Aktivität** - abgerundetes Rechteck
- **Entscheidung** - Raute ◇
- **Ablaufende** - X (beendet aktuellen Fluss)

### Anwendung:

- Alternative Abläufe modellieren
- Parallele Aktivitäten darstellen
- Verantwortungsbereiche zuordnen
- Ausnahmebehandlung planen

---

# VII. Softwareentwicklung

> Gute [[02 - RESOURCES/Notes/Software\|Software]] entsteht nicht durch Zufall - du brauchst Planung, Tests und modularen Aufbau.
> 
> > Modularität macht deine Software wartbar und erweiterbar.

---

## Modulare Softwarekomponenten

### Prinzipien:

- **Kapselung** - Interna verstecken
- **Schnittstellen** - Klare Kommunikationswege
- **Wiederverwendbarkeit** - Einmal schreiben, oft nutzen
- **Testbarkeit** - Komponenten einzeln prüfbar

### Vorteile modularer Entwicklung:

- Mehrere Entwickler können parallel arbeiten
- Fehler sind leichter zu finden
- Einzelne Module sind austauschbar
- Code ist besser verständlich

> [!tip] Faustregel Eine Komponente sollte genau eine Aufgabe haben und diese gut erfüllen.

## Softwarekomponenten testen

### Testarten:

- **Unit-Tests** - Teste einzelne Methoden
- **Integrationstests** - Teste Zusammenspiel zwischen Komponenten
- **Systemtests** - Teste komplette Anwendung

### Test-Prinzip:

1. **Arrange** - Testdaten vorbereiten
2. **Act** - [[02 - RESOURCES/Notes/Funktion\|Funktion]] ausführen
3. **Assert** - Ergebnis prüfen

> [!important] Warum testen? Tests fangen Fehler früh ab - je später ein Fehler gefunden wird, desto teurer wird die Reparatur.

---

# VIII. Erweiterte Konzepte

> Für professionelle [[02 - RESOURCES/Notes/Software\|Software]] brauchst du noch mehr Werkzeuge - Sortieralgorithmen, Komprimierung und [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]].
> 
> > Diese Themen machen aus einem einfachen Programm eine robuste Anwendung.

---

## Sortieralgorithmen

> Sortierung ist überall - in Suchmaschinen, Datenbanken, Listen. Der richtige Sortieralgorithmus macht den Geschwindigkeitsunterschied.

### Wichtige Sortieralgorithmen:

- **Heapsort** - immer [[02 - RESOURCES/Notes/5. Big O(n log n)\|O(n log n)]], aber instabil
- **[[02 - RESOURCES/Notes/Quicksort\|Quicksort]]** - meist sehr schnell, schlimmstenfalls [[02 - RESOURCES/Notes/6. Big O(n²)\|O(n²)]]
- **Mergesort** - immer [[02 - RESOURCES/Notes/5. Big O(n log n)\|O(n log n)]], stabil aber braucht mehr [[02 - RESOURCES/Notes/Speicher\|Speicher]]

## Komprimierung

> Komprimierung spart Speicherplatz und Übertragungszeit - besonders wichtig bei großen Datenmengen.


### Verfahren:

- **Verlustfrei** - Original kann perfekt wiederhergestellt werden (ZIP)
- **Verlustbehaftet** - Acceptable Qualitätsverluste (JPEG, MP3)

## [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]]

> [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] schützt sensible Daten - vom Online-Banking bis zu privaten Nachrichten.

### Grundarten:

- **Symmetrisch** - Gleicher Schlüssel für Ver- und Entschlüsselung
- **Asymmetrisch** - Öffentlicher und privater Schlüssel ([[02 - RESOURCES/Notes/RSA\|RSA]])
- **Hash-Funktionen** - Einweg-[[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] für Passwörter

> [!warning] Sicherheit Niemals eigene [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] entwickeln - nutze bewährte Bibliotheken!

> [!info] Diese Zusammenfassung basiert auf den Materialien von Herrn [Wondmu Alemu](https://www.xing.com/profile/Wondmu_Alemu).  
> Die Informationen und Konzepte wurden aus den von ihm bereitgestellten Lehrunterlagen und Vorlesungen entnommen. Alle Bilder, die hier gepostet wurden, wurden in meiner eigenen Umgebung erstellt, stammen aus dem Buch [Westermann](https://www.westermann.de/reihe/ITBERUF2020/IT-Berufe?a=1) oder aus den PDF-Präsentationen von Herrn [Wondmu Alemu](https://www.xing.com/profile/Wondmu_Alemu).  
> Mein Ziel war es, die wesentlichen Punkte zusammenzufassen und die Kerninhalte verständlich darzustellen.
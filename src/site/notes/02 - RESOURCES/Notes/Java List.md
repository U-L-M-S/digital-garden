---
{"dg-publish":true,"permalink":"/02-resources/notes/java-list/","tags":["code/java"],"updated":"2024-10-26T22:33:31.000+02:00"}
---

>[!summary] Regeln
>- Eine [[02 - RESOURCES/Notes/Java List\|Java List]] ist eine dynamische Datenstruktur, die ihre Größe während der Laufzeit anpassen kann.
>- Im Gegensatz zu [[02 - RESOURCES/Notes/Java Array\|Java Array]] können Elemente in einer [[02 - RESOURCES/Notes/Java List\|Java List]] unterschiedlichen [[Datentypen\|Datentypen]] angehören.
>- **Unterschiede zu [[02 - RESOURCES/Notes/Java Array\|Java Array]]**:
>  - **Größe**: [[02 - RESOURCES/Notes/Java Array\|Java Array]] hat eine feste Größe, während [[02 - RESOURCES/Notes/Java List\|Java List]] dynamisch ist und ihre Größe anpassen kann.
>  - **Datentypen**: Alle Elemente in einem [[02 - RESOURCES/Notes/Java Array\|Java Array]] müssen denselben [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] haben, während eine [[02 - RESOURCES/Notes/Java List\|Java List]] unterschiedliche Datentypen speichern kann.
>  - **Methoden**: [[02 - RESOURCES/Notes/Java Array\|Java Array]] hat keine eingebauten Methoden zur Bearbeitung von Elementen, während [[02 - RESOURCES/Notes/Java List\|Java List]] viele nützliche Methoden wie `add()`, `remove()`, und `size()` bietet.

# Syntax
```java
List<datatype> listName;
```

>[!info] List-Deklaration und Initialisierung
```java
List<datatype> listName = new ArrayList<>();
```
>Somit wird die List deklariert und initialisiert. **ABER** es wird kein Wert zugewiesen.

# Bsp

```java
import java.util.*;

public class BeispielList {
    public static void main(String[] args) {
        List<String> namen = new ArrayList<>();
        
        namen.add("Anna");
        namen.add("Bob");
        namen.add("Charlie");

        // Ausgabe der Liste
        System.out.println("Liste der Namen: " + namen);
    }
}
```

# Elemente bearbeiten
>Stell dir vor, du hast eine Liste mit Elementen, die du bearbeiten möchtest.

## Elementen vertauschen
>[!example] Elemente vertauschen
```java
import java.util.ArrayList;
import java.util.Collections;

public class ListElementVertauschen {
    public static void main(String[] args) {
        List<Integer> zahlen = new ArrayList<>();
        
        zahlen.add(10);
        zahlen.add(20);
        zahlen.add(30);
        zahlen.add(40);
        zahlen.add(50);

        // Ausgabe der ursprünglichen Liste
        System.out.println("Ursprüngliche Liste:");
        ausgabeListe(zahlen);

        // Elemente vertauschen: Element an Index 1 (20) und Index 3 (40) vertauschen
        Collections.swap(zahlen, 1, 3);

        // Ausgabe nach dem Vertauschen der Elemente
        System.out.println("\nNach dem Vertauschen der Elemente:");
        ausgabeListe(zahlen);
    }

    // Hilfsmethode zur Ausgabe der Liste
    public static void ausgabeListe(List<Integer> list) {
        for (int zahl : list) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```

## Neues Wert für Element einsetzen
>[!example] Neues Wert für Element einsetzen
```java
import java.util.ArrayList;

public class ListWertEinsetzen {
    public static void main(String[] args) {
        List<Integer> zahlen = new ArrayList<>();
        
        zahlen.add(10);
        zahlen.add(20);
        zahlen.add(30);
        zahlen.add(40);
        zahlen.add(50);

        // Ausgabe der ursprünglichen Liste
        System.out.println("Ursprüngliche Liste:");
        ausgabeListe(zahlen);

        // Neues Wert für das Element an Index 2 (d.h. 30 ersetzen)
        zahlen.set(2, 99); // 30 wird durch 99 ersetzt

        // Ausgabe nach dem Ändern eines Wertes
        System.out.println("\nNach dem Ändern eines Wertes:");
        ausgabeListe(zahlen);
    }

    // Hilfsmethode zur Ausgabe der Liste
    public static void ausgabeListe(List<Integer> list) {
        for (int zahl : list) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```

## Element ergänzen
>Du kannst Elemente auf verschiedene Arten hinzufügen.

>[!example] Element ergänzen
```java
import java.util.ArrayList;

public class ListElementHinzufuegen {
    public static void main(String[] args) {
        List<Integer> zahlen = new ArrayList<>();
        
        zahlen.add(10);
        zahlen.add(20);
        zahlen.add(30);

        // Neues Element, das hinzugefügt werden soll
        int neuesElement = 40;

        // Hinzufügen des neuen Elements
        zahlen.add(neuesElement);

        // Ausgabe nach dem Hinzufügen des Elements
        System.out.println("Liste nach dem Hinzufügen: " + zahlen);
    }
}
```

## Element löschen
>[!example] Element löschen
```java
import java.util.ArrayList;

public class ListElementLoeschen {
    public static void main(String[] args) {
        List<Integer> zahlen = new ArrayList<>();
        
        zahlen.add(10);
        zahlen.add(20);
        zahlen.add(30);
        zahlen.add(40);
        zahlen.add(50);

        // Ausgabe der ursprünglichen Liste
        System.out.println("Ursprüngliche Liste:");
        ausgabeListe(zahlen);

        // Element, das entfernt werden soll (z.B. 30)
        Integer elementZuLoeschen = 30;

        // Entfernen des Elements aus der Liste
        zahlen.remove(elementZuLoeschen); // Entfernt die erste Instanz des Wertes 30

        // Ausgabe nach dem Entfernen des Elements
        System.out.println("\nNach dem Entfernen des Elements " + elementZuLoeschen + ":");
        ausgabeListe(zahlen);
    }

    // Hilfsmethode zur Ausgabe der Liste
    public static void ausgabeListe(List<Integer> list) {
        for (int zahl : list) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```

# Fazit
- **Vorteile von Java List**:
  - Dynamische Größe: Kann während der Laufzeit Elemente hinzufügen oder entfernen.
  - Flexibilität: Unterstützt verschiedene Datentypen und bietet zahlreiche Methoden zur Manipulation von Elementen.

- **Nachteile von Java List**:
  - Etwas höhere Speicherkosten im Vergleich zu Arrays, da zusätzliche Informationen über die Liste gespeichert werden müssen.
  - Zugriff auf Elemente kann langsamer sein, insbesondere bei großen Listen, aufgrund der internen Datenstruktur.


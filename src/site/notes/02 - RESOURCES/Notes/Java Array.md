---
{"dg-publish":true,"permalink":"/02-resources/notes/java-array/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-09-27T01:32:44.257+02:00"}
---

>[!summary] Regeln
>- So wie die meisten Programmiersprachen fängt [[02 - RESOURCES/Notes/Java Array\|Java Array]] bei 0 an (Index).
>- Jedes Element in die [[02 - RESOURCES/Notes/Java Array\|Java Array]] haben das gleiche [[02 - RESOURCES/Notes/Datentyp\|Datentyp]].

# Syntax
>[!info] Array-Deklaration
> ```java
 >datatype[] arrayName;
>```
 
 >[!info] Array-Deklaration und Initialisierung (**n** feste Länge)
> ```java
 >datatype[] arrayName = new datatype[n];
>```
>Somit wird die Array deklariert und Initialisiert. **ABER**  es wird kein Wert zugewiesen. 
 >>Es wird nur die Länge (`n`) von die Array definiert.
 
 >[!info] Array-Deklaration und Initialisierung
> ```java
>datatype[] arrayName = {n0, n1, n2, n3};
>```
# Bsp

```java
import java.util.*;

public class BeispielArrayZufallszahlen {

	public static void main(String[] args){
		int anzahlElemente = 20;
		int[] feld = new int[anzahlElemente];
		
		for(int i = 0; i < anzahlElemente; i++){
			feld[i] = (int)(Math.random() * 10);
			System.out.println(feld[i]);
		}
		System.out.println();  
	}

}
```

# Element bearbeiten
>Stell dir mal vor, du hast eine Liste mit Elementen und du muss die aber bearbeiten.

>[!example] Elementen vertauschen 
```java
public class ArrayElementVertauschen {
    public static void main(String[] args) {
        // Initialisierung des Arrays
        int[] zahlen = {10, 20, 30, 40, 50};

        // Ausgabe des ursprünglichen Arrays
        System.out.println("Ursprüngliches Array:");
        ausgabeArray(zahlen);

        // Elemente vertauschen: Element an Index 1 (20) und Index 3 (40) vertauschen
        int temp = zahlen[1]; // Temporäre Speicherung des Wertes an Index 1
        zahlen[1] = zahlen[3]; // Wert an Index 1 wird durch Wert an Index 3 ersetzt
        zahlen[3] = temp; // Wert an Index 3 wird durch den temporären Wert ersetzt

        // Ausgabe nach dem Vertauschen der Elemente
        System.out.println("\nNach dem Vertauschen der Elemente:");
        ausgabeArray(zahlen);
    }

    // Hilfsmethode zur Ausgabe des Arrays
    public static void ausgabeArray(int[] array) {
        for (int zahl : array) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```

>[!example] Elementen vertauschen (Mit Bibliotheken)
```java
import java.util.ArrayList;
import java.util.Collections;

public class ArrayListElementVertauschen {
    public static void main(String[] args) {
        // Initialisierung der ArrayList
        ArrayList<Integer> zahlen = new ArrayList<>();
        
        // Hinzufügen von Werten zur ArrayList
        zahlen.add(10);
        zahlen.add(20);
        zahlen.add(30);
        zahlen.add(40);
        zahlen.add(50);

        // Ausgabe der ursprünglichen ArrayList
        System.out.println("Ursprüngliche ArrayList:");
        ausgabeArrayList(zahlen);

        // Elemente vertauschen: Element an Index 1 (20) und Index 3 (40) vertauschen
        Collections.swap(zahlen, 1, 3); // Vertauscht die Elemente an Index 1 und 3

        // Ausgabe nach dem Vertauschen der Elemente
        System.out.println("\nNach dem Vertauschen der Elemente:");
        ausgabeArrayList(zahlen);
    }

    // Hilfsmethode zur Ausgabe der ArrayList
    public static void ausgabeArrayList(ArrayList<Integer> list) {
        for (int zahl : list) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```

___

>[!example] Neues Wert für Element einsetzen
```java
public class ArrayWertEinsetzen {
    public static void main(String[] args) {
        // Initialisierung des Arrays
        int[] zahlen = {10, 20, 30, 40, 50};

        // Ausgabe des ursprünglichen Arrays
        System.out.println("Ursprüngliches Array:");
        ausgabeArray(zahlen);

        // Neues Wert für das Element an Index 2 (d.h. 30 ersetzen)
        zahlen[2] = 99; // 30 wird durch 99 ersetzt

        // Ausgabe nach dem Ändern eines Wertes
        System.out.println("\nNach dem Ändern eines Wertes:");
        ausgabeArray(zahlen);
    }

    // Hilfsmethode zur Ausgabe des Arrays
    public static void ausgabeArray(int[] array) {
        for (int zahl : array) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```

>[!example] Neues Wert einsetzen (Mit Bibliotheken)
```java
import java.util.ArrayList;

public class ArrayListWertEinsetzen {
    public static void main(String[] args) {
        // Initialisierung der ArrayList
        ArrayList<Integer> zahlen = new ArrayList<>();
        
        // Hinzufügen von Werten zur ArrayList
        zahlen.add(10);
        zahlen.add(20);
        zahlen.add(30);
        zahlen.add(40);
        zahlen.add(50);

        // Ausgabe der ursprünglichen ArrayList
        System.out.println("Ursprüngliche ArrayList:");
        ausgabeArrayList(zahlen);

        // Neues Wert für das Element an Index 2 (d.h. 30 ersetzen)
        zahlen.set(2, 99); // 30 wird durch 99 ersetzt

        // Ausgabe nach dem Ändern eines Wertes
        System.out.println("\nNach dem Ändern eines Wertes:");
        ausgabeArrayList(zahlen);
    }

    // Hilfsmethode zur Ausgabe der ArrayList
    public static void ausgabeArrayList(ArrayList<Integer> list) {
        for (int zahl : list) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }

```

# Element ergänzen

>[!example] Element ergänzen
```java
public class ArrayElementHinzufuegen {
    public static void main(String[] args) {
        // Initialisierung des ursprünglichen Arrays
        int[] zahlen = {10, 20, 30};
        
        // Ausgabe des ursprünglichen Arrays
        System.out.println("Ursprüngliches Array:");
        ausgabeArray(zahlen);

        // Neues Element, das hinzugefügt werden soll
        int neuesElement = 40;

        // Erstellen eines neuen Arrays mit einer Größe um 1 größer
        int[] neuesArray = new int[zahlen.length + 1];

        // Kopieren der alten Elemente ins neue Array
        for (int i = 0; i < zahlen.length; i++) {
            neuesArray[i] = zahlen[i];
        }

        // Hinzufügen des neuen Elements am Ende
        neuesArray[neuesArray.length - 1] = neuesElement;

        // Ausgabe nach dem Hinzufügen des Elements
        System.out.println("\nNach dem Hinzufügen des Elements:");
        ausgabeArray(neuesArray);
    }

    // Hilfsmethode zur Ausgabe des Arrays
    public static void ausgabeArray(int[] array) {
        for (int zahl : array) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```

>[!example] Automatisch (Mit Bibliotheken)
```java
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        
        ArrayList<Integer> zahlen = new ArrayList<>();
        
        zahlen.add(10);
        zahlen.add(20);
        zahlen.add(30);

        // Element hinzufügen (z.B. 40)
        zahlen.add(40);

        // Ausgabe
        System.out.println("ArrayList nach dem Hinzufügen: " + zahlen);
   }
}
```

# Element löschen

>[!example] Ohne Bibliotheken
```java
public class ArrayElementLoeschen {
    public static void main(String[] args) {
        // Initialisierung des ursprünglichen Arrays
        int[] zahlen = {10, 20, 30, 40, 50};

        // Ausgabe des ursprünglichen Arrays
        System.out.println("Ursprüngliches Array:");
        ausgabeArray(zahlen);

        // Element, das entfernt werden soll (z.B. 30)
        int elementZuLoeschen = 30;

        // Erstellen eines neuen Arrays, das 1 Element weniger hat
        int[] neuesArray = new int[zahlen.length - 1];
        int j = 0;

        // Kopieren der Elemente ins neue Array, wobei das zu löschende Element übersprungen wird
        for (int i = 0; i < zahlen.length; i++) {
            if (zahlen[i] != elementZuLoeschen) {
                neuesArray[j] = zahlen[i];
                j++;
            }
        }

        // Ausgabe nach dem Entfernen des Elements
        System.out.println("\nNach dem Entfernen des Elements " + elementZuLoeschen + ":");
        ausgabeArray(neuesArray);
    }

    // Hilfsmethode zur Ausgabe des Arrays
    public static void ausgabeArray(int[] array) {
        for (int zahl : array) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```

>[!example] Mit Bibliotheken
```java
import java.util.ArrayList;

public class ArrayListElementLoeschen {
    public static void main(String[] args) {
        // Initialisierung der ArrayList
        ArrayList<Integer> zahlen = new ArrayList<>();
        
        // Hinzufügen von Werten zur ArrayList
        zahlen.add(10);
        zahlen.add(20);
        zahlen.add(30);
        zahlen.add(40);
        zahlen.add(50);

        // Ausgabe der ursprünglichen ArrayList
        System.out.println("Ursprüngliche ArrayList:");
        ausgabeArrayList(zahlen);

        // Element, das entfernt werden soll (z.B. 30)
        Integer elementZuLoeschen = 30;

        // Entfernen des Elements aus der ArrayList
        zahlen.remove(elementZuLoeschen); // Entfernt die erste Instanz des Wertes 30

        // Ausgabe nach dem Entfernen des Elements
        System.out.println("\nNach dem Entfernen des Elements " + elementZuLoeschen + ":");
        ausgabeArrayList(zahlen);
    }

    // Hilfsmethode zur Ausgabe der ArrayList
    public static void ausgabeArrayList(ArrayList<Integer> list) {
        for (int zahl : list) {
            System.out.print(zahl + " ");
        }
        System.out.println();
    }
}
```
# [[02 - RESOURCES/Notes/Java 2D-Array\|Java 2D-Array]]
>Eigentlich kann [[02 - RESOURCES/Notes/Java Array\|Java Array]] unendlich lang sein. D.h: 3D, 4D, 5D, ... [[02 - RESOURCES/Notes/Java Array\|Java Array]]
>Es macht aber kein Sinn.  
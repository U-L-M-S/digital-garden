---
{"dg-publish":true,"permalink":"/02-resources/notes/java-array/","tags":["code/java/array"],"updated":"2024-10-23T11:09:38.617+02:00"}
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

# Elementen bearbeiten
>Stell dir mal vor, du hast eine Liste mit Elementen und du muss die aber bearbeiten.

## Element ergänzen
>Es gibt hauptsächlich 2 Wege um das zu machen.

>[!example] Automatisch (Mit Bibliotheken)
>```java
>import java.util.ArrayList;
>
>public class ArrayListExample {
>    public static void main(String[] args) {
>        
>        ArrayList<Integer> zahlen = new ArrayList<>();
>        
>        zahlen.add(10);
>        zahlen.add(20);
>        zahlen.add(30);
>
>        // Element hinzufügen (z.B. 40)
>        zahlen.add(40);
>
>        // Ausgabe
>        System.out.println("ArrayList nach dem Hinzufügen: " + zahlen);
>   }
>}
>```

>[]

# [[02 - RESOURCES/Notes/Java 2D-Array\|Java 2D-Array]]
>Eigentlich kann [[02 - RESOURCES/Notes/Java Array\|Java Array]] unendlich lang sein. D.h: 3D, 4D, 5D, ... [[02 - RESOURCES/Notes/Java Array\|Java Array]]
>Es macht aber kein Sinn.  
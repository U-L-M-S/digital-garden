---
{"dg-publish":true,"permalink":"/02-resources/notes/java-array/","tags":["code/java/array"],"noteIcon":"","updated":"2024-10-21T14:59:22.000+02:00"}
---

>So wie die meisten Programmiersprachen fängt Java Array bei 0 an (Index).

# Syntax
 ## Array-Deklaration
 ```java
 datatype[] arrayName;
```
 
 ## Array-Deklaration und Initialisierung (**n** feste Länge) 
 ```java
 datatype[] arrayName = new datatype[n];
```

>Somit wird die Array deklariert und Initialisiert. **ABER**  es wird kein Wert zugewiesen. 
 >>Es wird nur die Länge (`n`) von die Array definiert.
 
 ## Array-Deklaration und Initialisierung 
 ```java
datatype[] arrayName = {n0, n1, n2, n3};
```
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
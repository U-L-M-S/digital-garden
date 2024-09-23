---
{"dg-publish":true,"permalink":"/02-resources/notes/java-array/","tags":["code/java/array"],"updated":"2024-09-23T14:01:56.845+02:00"}
---

>So wie die meisten Programmiersprachen fängt Java-Array bei 0 an (Index).
>- Array-Deklaration: `datatype[] arrayName;`
>- Array-Deklaration und Initialisierung (feste Länge): `datatype[] arrayName = new datatype[n];`
>>- Somit wird die [[02 - RESOURCES/Notes/Array\|Array]] deklariert und Initialisiert. **ABER**  es wird kein Wert zugewiesen. Es wird nur die Länge (`n`) von die Array definiert.
>- Array-Deklaration und Initialisierung: ``datatype[] arrayName = {n0, n1, n2, n3};`

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
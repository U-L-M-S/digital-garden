---
{"dg-publish":true,"permalink":"/02-resources/notes/java-arrays/","tags":["code/java/array"],"noteIcon":"","updated":"2024-08-16T19:15:59.933+02:00"}
---

> So wie die meisten Programmiersprachen fängt Java-Array bei 0 an (Index).

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
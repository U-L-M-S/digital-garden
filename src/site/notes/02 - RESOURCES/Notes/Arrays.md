---
tags:
  - code/java/array
dg-publish: true
links: 
path: Notes
created: 2024-06-21 16:27
---
> So wie die meisten Programmiersprachen fängt Java-Array bei 0 an.

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
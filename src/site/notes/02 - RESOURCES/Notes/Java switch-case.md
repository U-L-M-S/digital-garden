---
tags:
  - code/java/switch-case
  - code/java
dg-publish: true
links: 
path: Notes
created: 2024-06-21 16:37
---

```java
public class SwitchCase {
    public static void main(String[] args) {
        int auswahl = 2;

		switch(auswahl):
		case 1: System.out.println("Eins");
			break;
		case 2: System.out.println("Zwei");
			break;
		case 3: System.out.println("Drei");
			break;
		default:  
            System.out.println("Das Wert ist nicht gueltig");  
            break;
    }
}
```
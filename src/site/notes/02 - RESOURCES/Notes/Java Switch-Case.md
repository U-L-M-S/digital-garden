---
{"dg-publish":true,"permalink":"/02 - RESOURCES/Notes/Java Switch-Case/","tags":["code/java"],"noteIcon":"","updated":"2024-10-26T19:48:38.839+02:00"}
---

>Es ist eine Alternative zu vielen `if-else`-Statements und macht den Code lesbarer, wenn viele Bedingungen abgefragt werden.

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
---
{"dg-publish":true,"permalink":"/wiki/java-switch-case/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"created":"2024-06-21 16:37","links":null,"path":["Notes"],"tags":["informatik/software"]}}
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
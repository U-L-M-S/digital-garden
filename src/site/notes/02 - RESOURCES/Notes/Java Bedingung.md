---
{"dg-publish":true,"permalink":"/02-resources/notes/java-bedingung/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:07.000+01:00"}
---

# IF
```java
public class ConditionalOperator {
    public static void main(String[] args) {
	    int number1 = 420;
	    int number2 = 69;
	    int max;
	    
	    if(number1 > number2) {
		    max = number1;    
	    }

        System.out.println("Der groesste Wert ist: " + max);
    }
}
```
>[!note] 
>Hier wird nur das `if` geprüft. Wenn der Wert von `number1` größer ist als der von `number2`, erhält `max` diesen Wert. Aber was passiert, wenn das nicht der Fall ist?
>>Dann stürzt der Code ab! 
>>Dafür haben wir `else`, um solche Fälle zu behandeln.

# ELSE
```java
public class ConditionalOperator {
    public static void main(String[] args) {
	    int number1 = 420;
	    int number2 = 421;
	    int max;
	    
	    if(number1 > number2) {
		    max = number1;    
	    }
	    else{
		    max = number2;
	    }

        System.out.println("Der groesste Wert ist: " + max);
    }
}
```
>[!note] 
>`else` wird nur ausgeführt, wenn keine andere Bedingung zutrifft.

# ELSE IF
```java
public class ConditionalOperator {
    public static void main(String[] args) {
	    int number1 = 420;
	    int number2 = 420;
	    int max;
	    
	    if(number1 > number2) {
		    max = number1;    
		    System.out.println("Der groesste Wert ist: " + max);
	    }
	    else if(number2 > number1){
		    max = number2;
	        System.out.println("Der groesste Wert ist: " + max);
	    }	   
	    else{
		    System.out.println("Sie sind genau so gross");
	    }
    }
}
```
>[!note] 
>Das `else if` wird nur überprüft, falls das erste `if` false ist, und es wird nur ausgeführt, wenn `number2 > number1` true ist. Andernfalls wird `else` ausgeführt.
# Tip
>[!tip] 
>[[02 - RESOURCES/Notes/Ternärer Operator\|Ternärer Operator]] es ist immer ein Nice To Know ;)

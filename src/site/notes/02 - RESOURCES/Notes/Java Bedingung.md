---
{"dg-publish":true,"permalink":"/02-resources/notes/java-bedingung/","tags":["code/java/loop"],"updated":"2024-09-21T17:25:20.000+02:00"}
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
>Hier wird nur das IF geprüft. Wenn das Wert bei `number1` größer ist als bei `number2` bekommt `max` dieses Wert.
>Was passiert aber, wenn das nicht stimmt ?
>>Da wird den Code abstürzen!
>>Somit haben wir `else`  um solche Fälle zu begrenzen.

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
>`else` wird nur getriggert wenn keine andere Möglichkeit gibt.

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

# Tip
>[!tip] 
>[[02 - RESOURCES/Notes/ternären Operator\|ternären Operator]] es ist immer ein Nice To Know ;)

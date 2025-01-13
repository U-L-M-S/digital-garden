---
{"dg-publish":true,"permalink":"/02-resources/notes/static-java-methode/","tags":["code/java","code/java","code/OOP"],"updated":"2024-10-25T11:27:18.266+02:00"}
---

>Wir haben gelernt; wir brauchen ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] damit wir mit [[02 - RESOURCES/Notes/OOP\|OOP]] in [[03 - ARCHIVES/Abgeschlossen/Java\|Java]] arbeiten können.
>>Nun mit eine statische Methode ist es möglich eine [[02 - RESOURCES/Notes/Java Methode\|Java Methode]] zu benutzen ohne ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] zu initialisieren.

# Bsp
```java
public class Auto {
    // Eine normale Methode (nicht static)
    public void fahren() {
        System.out.println("Das Auto fährt.");
    }

    // Eine statische Methode
    public static void hupen() {
        System.out.println("Das Auto hupt.");
    }
}

Auto meinAuto = new Auto(); // Wir erstellen ein Auto
meinAuto.fahren();          // Das Auto fährt

// Ohne Objekt
Auto.hupen(); // Das Auto hupt
```


>Auch innerhalb der deklarierten Klasse können die Methoden nur miteinander kommunizieren, wenn sie `static` sind. 
>>Andernfalls können sie nur über ein Objekt kommunizieren.

Das heißt, die [[02 - RESOURCES/Notes/Java Methode\|Java Methode]] `public static void hupen()` hier kann die  andere [[02 - RESOURCES/Notes/Java Methode\|Java Methode]]  `public void fahren()` nicht einfach rufen.
Nur wenn man ein Objekt hat

>[!failure] 
>```java
>	public void fahren() {
>		System.out.println("Das Auto fährt.");
>	}
>
>    public static void hupen() {
>		System.out.println("Das Auto hupt.");
>		fahren();  ❌
>    }
>```

>[!success] 
>```java
>public class Auto{
>	public static void fahren() {
> 		System.out.println("Das Auto fährt.");
> 	}
>
> 	public static void hupen() {
>	 	System.out.println("Das Auto hupt.");
> 		fahren(); ✅
>	}
>} 	   
>```

**ODER**

>[!success] 
>```java
>public class Auto{
>	public void fahren() { // <-- NOTE: no static
> 		System.out.println("Das Auto fährt.");
> 	}
>
> 	public static void hupen() {
>	 	System.out.println("Das Auto hupt.");
>	 	Auto myCar = new Auto();
> 		myCar.fahren(); ✅
>	}
>} 	   
>```
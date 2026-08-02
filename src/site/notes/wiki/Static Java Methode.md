---
{"dg-publish":true,"permalink":"/wiki/static-java-methode/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.856+02:00","dg-note-properties":{"aliases":["Static Java Methode","statische Methode"],"created_date":"2024-10-21","links":null,"tags":["informatik/software"]}}
---

>Wir haben gelernt: Wir brauchen ein [[wiki/Java Objekt\|Java Objekt]], damit wir mit [[wiki/OOP\|OOP]] in [[wiki/Java\|Java]] arbeiten können.
>>Nun mit einer statischen Methode ist es möglich, eine [[wiki/Java Methode\|Java Methode]] zu benutzen, ohne ein [[wiki/Java Objekt\|Java Objekt]] zu initialisieren.

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

Das heißt, die [[wiki/Java Methode\|Java Methode]] `public static void hupen()` hier kann die  andere [[wiki/Java Methode\|Java Methode]]  `public void fahren()` nicht einfach rufen.
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
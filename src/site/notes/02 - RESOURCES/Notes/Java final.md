---
{"dg-publish":true,"permalink":"/02-resources/notes/java-final/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-09-27T01:32:44.000+02:00"}
---

>In [[02 - RESOURCES/Notes/Java\|Java]] wird `final` verwendet, wenn man [[02 - RESOURCES/Notes/Variable\|Variable]]n, [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]]n oder [[02 - RESOURCES/Notes/Klasse\|Klasse]]n **konstant** machen möchte.
>Der Wert, die [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] und die [[02 - RESOURCES/Notes/Klasse\|Klasse]] können dann nicht erneut überschrieben werden: keine neue Wertzuweisung, kein `@Override` bei Vererbung und bei Klassen können [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]]n und Eigenschaften nicht erweitert werden.

```java
final int MAX_SPEED = 120; // MAX_SPEED kann nicht geändert werden
```

```java
class Car {
    public final void startEngine() {
        System.out.println("Motor gestartet");
    }
}

class ElectricCar extends Car {
    // startEngine() kann hier nicht überschrieben werden
}
```

```java
public final class MathUtils {
    // Methoden und Eigenschaften von MathUtils können nicht erweitert werden
}
```
---
{"dg-publish":true,"permalink":"/02-resources/notes/java-final/","tags":["code/java"],"updated":"2024-10-27T15:09:44.000+01:00"}
---

>In [[02 - RESOURCES/Notes/Java\|Java]] wird `final` verwendet, wenn man [[02 - RESOURCES/Notes/Variable\|Variable]]n, [[02 - RESOURCES/Notes/Methode\|Methode]]n oder [[02 - RESOURCES/Notes/Klasse\|Klasse]]n **konstant** machen möchte.
>Der Wert, die [[02 - RESOURCES/Notes/Methode\|Methode]] und die [[02 - RESOURCES/Notes/Klasse\|Klasse]] können dann nicht erneut überschrieben werden: keine neue Wertzuweisung, kein `@Override` bei Vererbung und bei Klassen können [[02 - RESOURCES/Notes/Methode\|Methode]]n und Eigenschaften nicht erweitert werden.

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
---
{"dg-publish":true,"permalink":"/wiki/java-final/","tags":["informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:07.000+01:00","dg-note-properties":{"aliases":["java-final","Java Immutable","Java-Immutable","Java unveränderlich"],"created_date":"2024-10-27","links":null,"tags":["informatik/programmierung/sprachen/java"]}}
---

>In [[wiki/Java\|Java]] wird `final` verwendet, wenn man [[wiki/Variable\|Variable]]n, [[wiki/Programmierung Methode\|Programmierung Methode]]n oder [[wiki/Klasse\|Klasse]]n **konstant** machen möchte.
>Der Wert, die [[wiki/Programmierung Methode\|Programmierung Methode]] und die [[wiki/Klasse\|Klasse]] können dann nicht erneut überschrieben werden: keine neue Wertzuweisung, kein `@Override` bei Vererbung und bei Klassen können [[wiki/Programmierung Methode\|Programmierung Methode]]n und Eigenschaften nicht erweitert werden.

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
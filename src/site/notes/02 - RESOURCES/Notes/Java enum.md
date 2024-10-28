---
{"dg-publish":true,"permalink":"/02-resources/notes/java-enum/","tags":["code/java"],"updated":"2024-10-28T09:51:49.423+01:00"}
---

>Ein `enum` in Java ist ein spezieller Datentyp, der eine Sammlung von Konstanten definiert. 
>Es wird verwendet, um eine feste Anzahl von Werten zu speichern, wie zum Beispiel die Wochentage oder Jahreszeiten.
>> `enum`-Typen sind in Java Klassen und können Methoden und Attribute haben.

# Syntax
```java
public enum ENUMNAME {
    KONSTANTE1, KONSTANTE2, KONSTANTE3;
}
```

>[!note] Standardmäßig wird `EnumName` komplett großgeschrieben 

# BSP
```java
public enum Wochentag {
    MONTAG, DIENSTAG, MITTWOCH, DONNERSTAG, FREITAG, SAMSTAG, SONNTAG;

    public boolean isWochenende() {
        return this == SAMSTAG || this == SONNTAG;
    }
}

public class Main {
    public static void main(String[] args) {
        Wochentag heute = Wochentag.SAMSTAG;
        System.out.println("Heute ist " + heute);

        if (heute.isWochenende()) {
            System.out.println("Es ist Wochenende!");
        } else {
            System.out.println("Es ist ein Wochentag.");
        }
    }
}
```

---
{"dg-publish":true,"permalink":"/02 - RESOURCES/Notes/Java enum/","tags":["code/java"],"noteIcon":"","updated":"2024-11-01T23:17:59.496+01:00"}
---

>Ein `enum` in [[02 - RESOURCES/Notes/Java\|Java]] ist ein spezieller [[02 - RESOURCES/Notes/Datentyp\|Datentyp]], der eine Sammlung von Konstanten definiert. 
>Es wird verwendet, um eine feste Anzahl von Werten zu speichern, wie zum Beispiel die Wochentage oder Jahreszeiten.
>> `enum`-Typen sind in [[02 - RESOURCES/Notes/Java klasse\|Java Klasse]]n und können [[02 - RESOURCES/Notes/Java Methode\|Java Methode]]n und [[02 - RESOURCES/Notes/Attribut\|Attribut]]e haben.

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

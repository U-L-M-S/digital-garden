---
{"dg-publish":true,"permalink":"/wiki/java-enum/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Java-enum"],"created_date":"2024-10-28","links":null,"tags":["informatik/software"]}}
---

>Ein `enum` in [[wiki/Java\|Java]] ist ein spezieller [[wiki/Datentyp\|Datentyp]], der eine Sammlung von Konstanten definiert. 
>Es wird verwendet, um eine feste Anzahl von Werten zu speichern, wie zum Beispiel die Wochentage oder Jahreszeiten.
>> `enum`-Typen sind [[wiki/Java klasse\|Java Klasse]]n und können [[wiki/Java Methode\|Java Methode]]n und [[wiki/Attribut\|Attribut]]e haben.

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

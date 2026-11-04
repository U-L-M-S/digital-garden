---
{"dg-publish":true,"permalink":"/wiki/java-oop/","tags":["meta/status","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Java OOP"],"created_date":"2024-11-02","links":null,"tags":["meta/status","informatik/software"]}}
---

> Da du jetzt die [[wiki/Java Grundlage\|Java Grundlage]]n kennst, tauchen wir tiefer in die objektorientierte Programmierung ([[wiki/OOP\|OOP]]) von [[wiki/Java\|Java]] ein.

In deinem ersten [[wiki/Java\|Java]]-Code hast du wahrscheinlich `Hello World` auf der Konsole ausgegeben. Lass uns anschauen, was hier passiert ist:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

In den [[wiki/Java Grundlage\|Java Grundlage]]n haben wir gelernt, dass `main` eine spezielle [[wiki/Java Methode\|Java Methode]] ist – sie ist der Code-STARTER. Egal wie groß das Programm ist, der [[wiki/Compiler\|Compiler]] sucht immer zuerst nach `main`. Dir ist bereits bekannt, dass Code in einer [[wiki/Java klasse\|Java Klasse]] abläuft, in diesem Fall `HelloWorld`.

Aber was passiert, wenn wir eine [[wiki/Klasse\|Klasse]] ohne `main`-[[wiki/Programmierung Methode\|Programmierung Methode]] erstellen?

```java
public class SayHelloWorld {
    public String getGreeting() {
        return "Hello, World!";
    }
}
```

Diese [[wiki/Java klasse\|Java Klasse]] lässt sich nicht direkt ausführen, da sie keine `main`-Methode hat. ABER wir können `SayHelloWorld` in `HelloWorld` importieren, dort als [[wiki/Java Objekt\|Java Objekt]] instanziieren und in der `main`-[[wiki/Programmierung Methode\|Programmierung Methode]] verwenden:

```java
public class HelloWorld {
    public static void main(String[] args) {
        SayHelloWorld hello = new SayHelloWorld();
        System.out.println(hello.getGreeting());
    }
}
```

>[!note] 
>[[wiki/Java OOP\|Java OOP]] bedeutet im Grunde, mit verschiedenen [[wiki/Java klasse\|Java Klasse]]n zu arbeiten und diese zu verknüpfen, um Probleme zu lösen. Es gibt natürlich noch viele weitere Details, aber das ist die Basis von [[wiki/Java OOP\|Java OOP]].

>[!important] 
>Bevor wir weiterlernen, werfen wir einen Blick auf [[wiki/Java Static\|Java Static]].
>Hier ist derselbe Code wie oben, aber `getGreeting` ist jetzt [[wiki/static\|static]]:

```java
public class SayHelloWorld {
    public static String getGreeting() {
        return "Hello, World!";
    }
}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println(SayHelloWorld.getGreeting());
    }
}
```

Jetzt erhalten wir dieselbe Ausgabe, ohne ein [[wiki/Java Objekt\|Java Objekt]] erstellen zu müssen.

# [[wiki/Java Objekt\|Java Objekt]] oder [[wiki/Java Static\|Java Static]]?

>Ob du in [[wiki/Java\|Java]] eine Instanz eines Objekts oder eine `static`-[[wiki/Programmierung Methode\|Programmierung Methode]] verwenden solltest, hängt davon ab, wie die Methode auf Daten zugreift und wie flexibel der Code sein muss. Schauen wir uns an, wann was zu bevorzugen ist:

## Wann verwende ich ein [[wiki/Java Objekt\|Java Objekt]]?

Ein Objekt ermöglicht dir, Daten individuell für jede Instanz zu speichern. Das ist ideal, wenn die Methode oder der Zustand der Klasse auf ein spezifisches Objekt bezogen ist.

Beispiel:
- Ein **Konto**-Objekt, das Informationen wie `kontostand`, `kontoinhaber`, und `kontoNummer` speichert. Da jeder Kontoinhaber eigene Daten hat, ist eine Instanz sinnvoll.

```java
public class Konto {
    private double kontostand;
    
    public Konto(double startKontostand) {
        this.kontostand = startKontostand;
    }
    
    public double getKontostand() {
        return this.kontostand;
    }
}
```

Hier können wir mehrere `Konto`-Objekte mit unterschiedlichem Kontostand erstellen.

## Wann verwende ich eine [[wiki/Java Static\|Java Static]] Methode?

`static`-Methoden sind nützlich, wenn die Methode keine spezifischen Daten einer Instanz benötigt, sondern allgemeine Berechnungen oder logische Prozesse durchführt. Sie lassen sich direkt über die Klasse aufrufen, ohne dass ein Objekt erstellt werden muss.

Beispiel:
- Ein `Math`-Helper für allgemeine Berechnungen wie `addieren` oder `subtrahieren`. Da diese unabhängig von einem spezifischen Objekt sind, können sie `static` sein.

```java
public class MathHelper {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

## Entscheidungshilfe
1. **Objektmethode (Instanzmethode)**: Verwende sie, wenn auf Daten oder Methoden einer spezifischen Instanz zugegriffen wird oder diese benötigt werden.
2. **Static Methode**: Verwende sie, wenn keine Instanzdaten erforderlich sind und die [[wiki/Programmierung Methode\|Programmierung Methode]] universell einsetzbar ist.

>[!note] 
>Einfach gesagt: Wenn der Code sich auf ein spezifisches **Objekt** bezieht, nutze ein **[[wiki/Java Objekt\|Java Objekt]]**. Wenn der Code für alle **Objekte** gleich ist, verwende **[[wiki/Java Static\|Java Static]]**.


___


# Klassenarten

## Basis
<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.0399977067501 398.41595458984375" width="328.0399977067501" height="398.41595458984375" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="328.0399977067501" height="398.41595458984375" fill="#ffffff"/><g transform="translate(145.26434528525124 17.81225214775975) rotate(0 20.228248596191406 10.640209277930452)"><text x="0" y="14.998438998170768" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="17.024334844688727px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Auto</text></g><g transform="translate(133.4131285430169 246.08932867204692) rotate(0 17.973106384277344 10.640209277930454)"><text x="0" y="14.998438998170768" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="17.024334844688727px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Main</text></g><g stroke-linecap="round" transform="translate(10 10) rotate(0 152.23532834461417 84.20797729492186)"><path d="M42.1 0 C124.72 1.89, 206.1 -0.51, 262.37 0 M42.1 0 C106.39 -2.1, 170.81 -2.05, 262.37 0 M262.37 0 C291.05 1.97, 302.98 14.23, 304.47 42.1 M262.37 0 C291.4 0.41, 303.05 14.51, 304.47 42.1 M304.47 42.1 C305.73 62.12, 304.58 86.15, 304.47 126.31 M304.47 42.1 C304.98 64.44, 304.28 87.65, 304.47 126.31 M304.47 126.31 C305.51 155.65, 290.03 168.15, 262.37 168.42 M304.47 126.31 C303.48 154.59, 289.21 168.58, 262.37 168.42 M262.37 168.42 C175.19 168.22, 86.81 168.1, 42.1 168.42 M262.37 168.42 C178.03 169.11, 92.24 169.99, 42.1 168.42 M42.1 168.42 C13.43 168.11, 1.64 153.59, 0 126.31 M42.1 168.42 C14.26 170.54, 1.3 155.6, 0 126.31 M0 126.31 C-1.83 100.18, -2.01 74.67, 0 42.1 M0 126.31 C0.73 97.12, -0.34 65.38, 0 42.1 M0 42.1 C1.76 13.03, 13.24 -0.18, 42.1 0 M0 42.1 C-1.56 13.43, 15.94 1.86, 42.1 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(12.733766356527553 53.45953760302956) rotate(0 152.66676224624456 -0.7278888167862902)"><path d="M0.97 0.6 C51.52 0.13, 252.45 -1.78, 302.95 -2.05 M0.03 -0.13 C50.99 -0.47, 254.75 -0.1, 305.31 -0.58" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(22.48871044381667 58.602508544921875) rotate(0 145.20217895507812 52.703473554804006)"><text x="0" y="10.612973760407389" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="12.046508241098058px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+brand: String </text><text x="0" y="25.671109061779962" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="12.046508241098058px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+speed: double </text><text x="0" y="40.72924436315253" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="12.046508241098058px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+plate: String </text><text x="0" y="55.787379664525105" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="12.046508241098058px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">____________________________________</text><text x="0" y="70.84551496589768" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="12.046508241098058px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+Auto()</text><text x="0" y="85.90365026727025" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="12.046508241098058px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void drive()</text><text x="0" y="100.96178556864282" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="12.046508241098058px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void stop()</text></g><g stroke-linecap="round" transform="translate(17.93986906442001 239) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C87.04 -0.45, 139.99 -0.63, 232.77 0 M37.35 0 C86.9 1.55, 139.09 2.1, 232.77 0 M232.77 0 C257.23 0.9, 268.16 10.57, 270.12 37.35 M232.77 0 C259.64 0.57, 269.91 10.8, 270.12 37.35 M270.12 37.35 C269.57 53.9, 269.35 71.29, 270.12 112.06 M270.12 37.35 C271.08 61.79, 269.51 84.41, 270.12 112.06 M270.12 112.06 C270.3 135.47, 256.03 151.21, 232.77 149.42 M270.12 112.06 C270.77 134.92, 256.74 149.24, 232.77 149.42 M232.77 149.42 C158.31 151.24, 85.16 151.92, 37.35 149.42 M232.77 149.42 C190.52 150.49, 147.05 151.41, 37.35 149.42 M37.35 149.42 C11.24 149.17, -0.8 138.79, 0 112.06 M37.35 149.42 C13.51 151.07, 0.27 135.22, 0 112.06 M0 112.06 C0.11 90.01, -0.85 66.24, 0 37.35 M0 112.06 C-0.06 87.33, 0.16 60.45, 0 37.35 M0 37.35 C0.87 13.92, 13.55 0.91, 37.35 0 M0 37.35 C-0.02 10.33, 12.86 1.46, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(20.36522306832626 277.5566101074219) rotate(0 135.15292918955907 -0.9880463447421794)"><path d="M-0.65 0.25 C44.19 0.02, 223.51 -1.73, 268.63 -2.23 M1.22 -0.67 C46.47 -0.66, 226.21 -0.74, 270.95 -0.95" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(26.96874431832839 286.1025085449219) rotate(0 34.01997375488281 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+main()</text></g><g stroke-linecap="round"><g transform="translate(147.98871044381667 177.10250854492188) rotate(0 -0.11962292039765998 31.65123224567622)"><path d="M0.77 1.11 C0.71 11.43, -0.03 51.25, -0.21 61.07 M-0.29 0.65 C-0.48 11.25, -0.9 52.62, -1.01 62.65" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/></svg></div>

>[!example] 
>Dies ist eine Standardklasse in [[wiki/Java\|Java]]. Ein Objekt wurde in einer anderen Datei erstellt, in die Main-[[wiki/Klasse\|Klasse]] importiert, und ein Objekt wird erstellt, mit dem wir arbeiten können.
>
>Natürlich gibt es unendlich viele Möglichkeiten, wie man das anpassen kann. Am besten sollten wir die [[wiki/Variable\|Variable]]n mit [[wiki/Zugriffsmodifikator\|Zugriffsmodifikator]] auf _private_ setzen.
>
>
>
>```java
>class Auto {
>    // Attribute
>    public String brand;
>    public double speed;
>    public String plate;
>
>    // Konstruktor
>    public Auto(String brand, double speed, String plate) {
>        this.brand = brand;
>        this.speed = speed;
>        this.plate = plate;
>    }
>
>    // Methode zum Fahren
>    public void drive() {
>        System.out.println(brand + " fährt mit " + speed + " km/h.");
>    }
>
>    // Methode zum Anhalten
>    public void stop() {
>        speed = 0;
>        System.out.println(brand + " hat angehalten.");
>    }
>}
>
>public class Main {
>    public static void main(String[] args) {
>        // Erstellen eines Auto-Objekts und Aufruf der Methoden
>        Auto meinAuto = new Auto("BMW", 120.5, "AB-1234");
>        meinAuto.drive();
>        meinAuto.stop();
>    }
>}
>```

>[!example] 
>
>Gleiche BSP aber mit [[wiki/Java Static\|Java Static]]
>
>```java
>class Auto {
>
>   // Statische Methode zum Fahren
>   public static void drive(String brand, double speed) {
>       System.out.println(brand + " fährt mit " + speed + " km/h.");
>   }
>
>   // Statische Methode zum Anhalten
>   public static void stop(String brand) {
>       System.out.println(brand + " hat angehalten.");
>   }
>}
>
>public class Main {
>   public static void main(String[] args) {
>       // Aufruf der statischen Methoden ohne ein Objekt zu erstellen
>       Auto.drive("BMW", 120.5);
>       Auto.stop("BMW");
>   }
>}
>
>```

## [[wiki/Java Vererbung\|Java Vererbung]]
<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 938.9317145353393 468.2418146074803" width="938.9317145353393" height="468.2418146074803" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="938.9317145353393" height="468.2418146074803" fill="#ffffff"/><g transform="translate(448.16624680914185 13.432246034610273) rotate(0 29.0999755859375 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Animal</text></g><g transform="translate(114.92418853383776 313.20142878762977) rotate(0 23.649978637695312 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Duck</text></g><g transform="translate(456.40480044183164 316.6213268029641) rotate(0 19.349990844726562 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Dog</text></g><g transform="translate(768.7307478353529 306.1958893327708) rotate(0 20.149978637695312 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Fish</text></g><g stroke-linecap="round" transform="translate(336.4997545110767 10) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C85.35 0.27, 136.08 -0.33, 232.77 0 M37.35 0 C107.76 -0.39, 177.35 -0.3, 232.77 0 M232.77 0 C256.78 0.89, 268.85 13.85, 270.12 37.35 M232.77 0 C257.44 -0.76, 269.94 12.55, 270.12 37.35 M270.12 37.35 C269.41 54.08, 271.83 66.9, 270.12 112.06 M270.12 37.35 C269.01 67.16, 270.09 95.45, 270.12 112.06 M270.12 112.06 C270.02 137.8, 256.67 149.39, 232.77 149.42 M270.12 112.06 C271.32 137.53, 259.01 148.12, 232.77 149.42 M232.77 149.42 C182.7 146.42, 130.5 145.96, 37.35 149.42 M232.77 149.42 C169.49 151.7, 104.52 150.62, 37.35 149.42 M37.35 149.42 C11.25 148.01, 1.44 138.79, 0 112.06 M37.35 149.42 C10.46 147.33, 0.5 139.22, 0 112.06 M0 112.06 C-0.5 88.3, 1.65 62.44, 0 37.35 M0 112.06 C0.99 92.34, 0.97 74.6, 0 37.35 M0 37.35 C0.91 10.81, 12.58 -1.3, 37.35 0 M0 37.35 C-2.25 11.58, 10.25 0.91, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(338.9251085149829 48.556610107421875) rotate(0 134.23818007509226 -1.3609245113691202)"><path d="M0.36 0.02 C45.22 -0.01, 224.67 -0.68, 269.39 -1 M-0.91 -1.01 C43.78 -1.31, 223.1 -2.8, 268.44 -2.74" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(352.6470118097703 57.71621235477994) rotate(0 63.09996032714844 37.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void fly()</text><text x="0" y="42.62" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void run()</text><text x="0" y="67.62" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void swim()</text></g><g stroke-linecap="round" transform="translate(10 308.82586001763656) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C85.86 2.93, 138.53 1.51, 232.77 0 M37.35 0 C82.38 0.54, 126.6 2, 232.77 0 M232.77 0 C258.59 -0.99, 272.01 13.32, 270.12 37.35 M232.77 0 C258.29 -0.83, 269.95 11.94, 270.12 37.35 M270.12 37.35 C270.75 58.8, 269.39 77.54, 270.12 112.06 M270.12 37.35 C269.57 53.59, 269.74 70.76, 270.12 112.06 M270.12 112.06 C269.8 138.95, 259.19 149.55, 232.77 149.42 M270.12 112.06 C270.44 135.31, 258.52 148.85, 232.77 149.42 M232.77 149.42 C190 149.92, 144.56 150.85, 37.35 149.42 M232.77 149.42 C188.28 148.66, 141.56 147.71, 37.35 149.42 M37.35 149.42 C13.83 150.47, -0.42 136.23, 0 112.06 M37.35 149.42 C13.94 148.34, 2.07 139.14, 0 112.06 M0 112.06 C-0.19 90.88, 0.01 73, 0 37.35 M0 112.06 C0.41 86.5, 0.22 61, 0 37.35 M0 37.35 C-1.68 13.31, 13.53 1.21, 37.35 0 M0 37.35 C-1.32 14.09, 12.58 -1.75, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(12.42535400390625 347.38247012505843) rotate(0 134.27457696681844 -1.1954864587634804)"><path d="M0.59 0.18 C45.64 -0.06, 224.46 -2.1, 269.11 -2.57 M-0.57 -0.77 C44.41 -0.78, 222.77 -1.31, 268.03 -1.48" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round" transform="translate(336.73752357585045 308.318858705934) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C79.5 0.15, 122.35 -2.76, 232.77 0 M37.35 0 C77.55 -1, 117.55 0.33, 232.77 0 M232.77 0 C257.38 -0.77, 270.97 14.29, 270.12 37.35 M232.77 0 C256.21 2.08, 272.4 10.75, 270.12 37.35 M270.12 37.35 C272.27 59.83, 272 78.32, 270.12 112.06 M270.12 37.35 C269.81 59.24, 269.57 82.83, 270.12 112.06 M270.12 112.06 C269.4 138.52, 256.83 147.53, 232.77 149.42 M270.12 112.06 C270.58 138.07, 259.18 150, 232.77 149.42 M232.77 149.42 C186.31 148.55, 141.8 149.37, 37.35 149.42 M232.77 149.42 C188.97 151.36, 146.56 151.54, 37.35 149.42 M37.35 149.42 C14.04 147.51, -0.01 135.26, 0 112.06 M37.35 149.42 C10.56 147.85, 1.55 135.67, 0 112.06 M0 112.06 C-0.7 89.83, 1.05 64.84, 0 37.35 M0 112.06 C0.94 84.91, 0.09 57.7, 0 37.35 M0 37.35 C-1.47 12.43, 13.27 0.9, 37.35 0 M0 37.35 C1.39 12.66, 14.09 -0.89, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(339.1628775797567 346.8754688133559) rotate(0 135.23847059715538 -1.5542013015598055)"><path d="M0.82 -0.27 C45.44 -0.68, 223.57 -2.65, 268.46 -2.84 M-0.21 -1.45 C44.72 -1.73, 225.69 -2.14, 270.68 -1.89" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round" transform="translate(655.6265659920895 302.16735121296693) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C80.3 1.6, 122.82 0, 232.77 0 M37.35 0 C106.8 0.11, 177.07 0.33, 232.77 0 M232.77 0 C256.07 0.94, 271.11 12.92, 270.12 37.35 M232.77 0 C257.47 1.03, 270.33 14.23, 270.12 37.35 M270.12 37.35 C268.68 64.35, 270.49 91.69, 270.12 112.06 M270.12 37.35 C269.66 57.88, 268.92 77.11, 270.12 112.06 M270.12 112.06 C271.04 135.8, 255.92 147.52, 232.77 149.42 M270.12 112.06 C270.1 138.64, 257.33 149.02, 232.77 149.42 M232.77 149.42 C159.01 149.89, 81.79 152.25, 37.35 149.42 M232.77 149.42 C165.49 150.94, 99.51 150.54, 37.35 149.42 M37.35 149.42 C11.97 149.98, -1.21 136.85, 0 112.06 M37.35 149.42 C12.39 149.07, 1.44 135.69, 0 112.06 M0 112.06 C-0.43 95.21, 0.01 77.8, 0 37.35 M0 112.06 C-0.37 88.51, 1.4 66.07, 0 37.35 M0 37.35 C-0.23 10.98, 10.79 -0.47, 37.35 0 M0 37.35 C-1.02 12.72, 11.65 -1.92, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(658.0519199959957 340.7239613203888) rotate(0 134.83442477328705 -0.9424231661390512)"><path d="M0.16 0.9 C45.06 0.64, 223.77 -0.58, 268.59 -1.03 M-1.21 0.33 C44.14 -0.33, 225.99 -2.64, 270.88 -2.79" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(351.77141573946705 353.4593544296723) rotate(0 56.52996826171875 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void run()</text></g><g transform="translate(28.34247061312152 369.97856343728824) rotate(0 63.09996032714844 25)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void fly()</text><text x="0" y="42.62" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void swim()</text></g><g transform="translate(666.6637589949403 351.63599767919015) rotate(0 54.66996765136719 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void swim</text></g><g stroke-linecap="round"><g transform="translate(471.6982840738973 303.318858705934) rotate(0 0.17896463409006458 -69.45145205804513)"><path d="M0 0 C1.44 -17.09, 1.44 -32.56, 0 -69.33 M0 0 C-0.33 -24.79, 0.58 -51.94, 0 -69.33 M0 -69.33 C0.11 -69.15, 1.8 -68.56, -0.12 -69.45 M0 -69.33 C1.64 -71.63, -2.12 -68.37, -0.12 -69.45 M-0.12 -69.45 C-0.12 -69.45, -0.12 -69.45, -0.12 -69.45 M-0.12 -69.45 C-0.12 -69.45, -0.12 -69.45, -0.12 -69.45 M-0.12 -69.45 C-1.05 -68.73, 1.33 -71.42, -0.24 -69.57 M-0.12 -69.45 C0.2 -70.11, -0.38 -68.78, -0.24 -69.57 M-0.24 -69.57 C1.04 -95.19, 1.39 -123.07, -0.24 -138.9 M-0.24 -69.57 C-0.14 -84.91, 0.04 -98.84, -0.24 -138.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(471.6982840738973 303.318858705934) rotate(0 0.17896463409006458 -69.45145205804513)"><path d="M8.43 -115.45 C7.3 -121.27, 5.17 -125.46, -0.24 -138.9 M8.43 -115.45 C4.58 -123.29, 2.31 -133.56, -0.24 -138.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(471.6982840738973 303.318858705934) rotate(0 0.17896463409006458 -69.45145205804513)"><path d="M-8.68 -115.37 C-5.6 -121.18, -3.52 -125.39, -0.24 -138.9 M-8.68 -115.37 C-6.23 -123.39, -2.21 -133.69, -0.24 -138.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(144.96076049804688 303.82586001763656) rotate(0 162.91013811912183 -69.7049527138964)"><path d="M0 0 C-0.18 -10.26, 0.37 -24.13, 0 -53.7 M0 0 C-1.29 -19.62, -0.57 -40.45, 0 -53.7 M0 -53.7 C-0.94 -62.89, 6.57 -71.18, 16 -69.7 M0 -53.7 C1.36 -65.78, 5.36 -71.03, 16 -69.7 M16 -69.7 C94.39 -69.39, 170.89 -69.55, 310.5 -69.7 M16 -69.7 C100.99 -72.39, 186.92 -72.4, 310.5 -69.7 M310.5 -69.7 C322.52 -70.28, 325.77 -74.38, 326.5 -85.7 M310.5 -69.7 C319.44 -68.52, 327.1 -74.49, 326.5 -85.7 M326.5 -85.7 C326.66 -99.97, 326.29 -112.56, 326.5 -139.41 M326.5 -85.7 C326.53 -106.18, 326.13 -124.44, 326.5 -139.41" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(144.96076049804688 303.82586001763656) rotate(0 162.91013811912183 -69.7049527138964)"><path d="M334.8 -115.83 C332.76 -119.27, 331.43 -126.33, 326.5 -139.41 M334.8 -115.83 C330.58 -124.02, 328.14 -133.36, 326.5 -139.41" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(144.96076049804688 303.82586001763656) rotate(0 162.91013811912183 -69.7049527138964)"><path d="M317.7 -116.01 C319.52 -119.41, 322.07 -126.43, 326.5 -139.41 M317.7 -116.01 C320.01 -124, 324.09 -133.27, 326.5 -139.41" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(790.5873264901363 297.16735121296693) rotate(0 -159.28759378377828 -66.37569831156159)"><path d="M0 0 C1.43 -13.34, 0.18 -28.74, 0 -50.38 M0 0 C0.62 -10.36, 0.29 -21.27, 0 -50.38 M0 -50.38 C-1.67 -60.9, -6.35 -64.6, -16 -66.38 M0 -50.38 C1.85 -62.56, -5.41 -67.98, -16 -66.38 M-16 -66.38 C-109.52 -68.44, -204.83 -66.49, -303.13 -66.38 M-16 -66.38 C-105.52 -66.12, -196.62 -66.07, -303.13 -66.38 M-303.13 -66.38 C-313.42 -65.36, -320.14 -69.98, -319.13 -82.38 M-303.13 -66.38 C-312.29 -65.6, -320.35 -72.36, -319.13 -82.38 M-319.13 -82.38 C-319.13 -97.74, -317.1 -115.55, -319.13 -132.75 M-319.13 -82.38 C-318.35 -97.42, -318.62 -113.73, -319.13 -132.75" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(790.5873264901363 297.16735121296693) rotate(0 -159.28759378377828 -66.37569831156159)"><path d="M-310.05 -109.46 C-311.36 -114.78, -315.27 -122.23, -319.13 -132.75 M-310.05 -109.46 C-311.32 -114.13, -313.54 -119.39, -319.13 -132.75" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(790.5873264901363 297.16735121296693) rotate(0 -159.28759378377828 -66.37569831156159)"><path d="M-327.14 -109.07 C-323.44 -114.63, -322.33 -122.19, -319.13 -132.75 M-327.14 -109.07 C-324.85 -113.89, -323.5 -119.23, -319.13 -132.75" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/></svg></div>

>[!example] 
>Eine [[wiki/Java klasse\|Java Klasse]] wird erstellt (Parent-[[wiki/Klasse\|Klasse]]), und alle anderen Java Klassen (Child-Klassen) werden von dieser abgeleitet, in denen die [[wiki/Java klasse\|Java klasse]]n die [[wiki/Java Methode\|Java Methode]]n und [[wiki/Java Variable\|Java Variable]]n bei sich kopieren.
>
>```java
>class Animal {
>    void fly() {
>        System.out.println("This animal cannot fly.");
>    }
>
>    void run() {
>        System.out.println("This animal cannot run.");
>    }
>
>    void swim() {
>        System.out.println("This animal cannot swim.");
>    }
>}
>
>class Duck extends Animal {
>    @Override
>    void fly() {
>        System.out.println("The duck flies in the sky.");
>    }
>
>    @Override
>    void swim() {
>        System.out.println("The duck swims in the pond.");
>    }
>}
>
>class Dog extends Animal {
>    @Override
>    void run() {
>        System.out.println("The dog runs quickly in the park.");
>    }
>}
>
>class Fish extends Animal {
>    @Override
>    void swim() {
>        System.out.println("The fish swims in the water.");
>    }
>}
>
>
>public class Main {
>    public static void main(String[] args) {
>        Animal duck = new Duck();
>        duck.fly(); // Output: The duck flies in the sky.
>        duck.run(); // Output: The duck waddles along the shore.
>        duck.swim(); // Output: The duck swims in the pond.
>
>        Animal dog = new Dog();
>        dog.run(); // Output: The dog runs quickly in the park.
>        dog.fly(); // Output: This animal cannot fly.
>        dog.swim(); // Output: This animal cannot swim.
>
>        Animal fish = new Fish();
>        fish.swim(); // Output: The fish swims in the water.
>        fish.fly(); // Output: This animal cannot fly.
>        fish.run(); // Output: This animal cannot run.
>    }
>}
>
>```

<div class="excalidraw-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 910.121957369967 688.4387073290555" width="910.121957369967" height="688.4387073290555" class="excalidraw-svg" style="max-width: 100%; height: auto;"><!-- svg-source:excalidraw --><metadata/><defs><style class="style-fonts">      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }</style></defs><rect x="0" y="0" width="910.121957369967" height="688.4387073290555" fill="#ffffff"/><g transform="translate(426.34284096049157 11.88170218135383) rotate(0 29.0999755859375 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Animal</text></g><g transform="translate(115.75826767293461 533.3983215092051) rotate(0 23.649978637695312 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Duck</text></g><g transform="translate(428.0461097125378 316.6213268029641) rotate(0 19.349990844726562 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Dog</text></g><g transform="translate(740.3720571060591 306.1958893327708) rotate(0 20.149978637695312 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Fish</text></g><g stroke-linecap="round" transform="translate(308.1410637817828 10) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C101.26 -2.79, 167.23 -3.13, 232.77 0 M37.35 0 C91.97 -1, 146.66 -1.31, 232.77 0 M232.77 0 C256.51 0.53, 270.81 11.01, 270.12 37.35 M232.77 0 C255.62 0.86, 272.12 10.35, 270.12 37.35 M270.12 37.35 C271.26 52.87, 272.6 73.31, 270.12 112.06 M270.12 37.35 C270.79 66.44, 271.57 96.93, 270.12 112.06 M270.12 112.06 C271.1 138.26, 257.14 151.25, 232.77 149.42 M270.12 112.06 C271.52 136.16, 258.23 149.19, 232.77 149.42 M232.77 149.42 C190.56 150.21, 151.73 151.83, 37.35 149.42 M232.77 149.42 C171.26 147.78, 109.02 148.01, 37.35 149.42 M37.35 149.42 C10.88 149.67, 0.03 137.89, 0 112.06 M37.35 149.42 C12.29 148.88, -0.78 138.16, 0 112.06 M0 112.06 C-1.46 98.04, -1.3 81.84, 0 37.35 M0 112.06 C-0.34 85.76, 0.66 59.53, 0 37.35 M0 37.35 C-0.78 10.74, 13.55 -0.8, 37.35 0 M0 37.35 C0.74 11.61, 11.98 0.1, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(310.56641778568905 48.556610107421875) rotate(0 134.6991417100467 -0.10539309189277901)"><path d="M-0.94 -0.56 C43.64 -0.74, 223.35 -1.87, 268.23 -1.98 M0.76 1.77 C45.63 1.85, 225.34 0.27, 270.34 -0.58" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(324.2883210804764 57.71621235477994) rotate(0 63.09996032714844 37.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void fly()</text><text x="0" y="42.62" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void run()</text><text x="0" y="67.62" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void swim()</text></g><g stroke-linecap="round" transform="translate(10 529.0227527392118) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C78.1 1.93, 116.82 2.39, 232.77 0 M37.35 0 C86.94 -1.24, 134.94 -0.14, 232.77 0 M232.77 0 C259.41 -1.82, 268.79 14.2, 270.12 37.35 M232.77 0 C255.62 0.56, 267.9 14.55, 270.12 37.35 M270.12 37.35 C268.93 63.65, 269.68 91.6, 270.12 112.06 M270.12 37.35 C270.22 62.48, 271.1 85.42, 270.12 112.06 M270.12 112.06 C270.61 136.76, 255.87 150.1, 232.77 149.42 M270.12 112.06 C270.87 135.66, 257.85 150.69, 232.77 149.42 M232.77 149.42 C154.85 150.72, 81.26 150.59, 37.35 149.42 M232.77 149.42 C164.89 150.12, 96.92 149.43, 37.35 149.42 M37.35 149.42 C11.77 150.45, -1.95 136.01, 0 112.06 M37.35 149.42 C10.82 147.32, 1.25 135.07, 0 112.06 M0 112.06 C1.43 88.04, -0.09 67.64, 0 37.35 M0 112.06 C0.84 86.42, 0.61 61.22, 0 37.35 M0 37.35 C-0.41 12.54, 11.91 -0.64, 37.35 0 M0 37.35 C0.28 11.54, 13.72 0.58, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(12.42535400390625 567.5793628466337) rotate(0 134.33805288383738 -1.2499445911496991)"><path d="M0.19 -0.2 C45.33 -0.67, 225.1 -2.1, 269.85 -2.3 M-1.17 -1.35 C43.94 -1.71, 224.35 -1.3, 269.14 -1.07" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round" transform="translate(308.37883284655663 308.318858705934) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C98.1 -1.91, 161.29 -0.06, 232.77 0 M37.35 0 C82.8 -1.64, 125.84 0.15, 232.77 0 M232.77 0 C255.89 0.49, 268.19 14.27, 270.12 37.35 M232.77 0 C258.9 2.23, 272.34 10.24, 270.12 37.35 M270.12 37.35 C270.17 60.37, 270.98 80.9, 270.12 112.06 M270.12 37.35 C270.82 66.53, 269.68 96.25, 270.12 112.06 M270.12 112.06 C270.77 135.83, 257.83 150.52, 232.77 149.42 M270.12 112.06 C272.17 137.38, 257.64 147.2, 232.77 149.42 M232.77 149.42 C162.1 149.02, 89.8 150.61, 37.35 149.42 M232.77 149.42 C164.79 149.48, 96.53 148.49, 37.35 149.42 M37.35 149.42 C11.04 147.6, 1.09 135.31, 0 112.06 M37.35 149.42 C12.45 150.66, -1.46 139.08, 0 112.06 M0 112.06 C0.64 94.92, -1.83 80.43, 0 37.35 M0 112.06 C-0.44 92.7, -0.51 72.92, 0 37.35 M0 37.35 C0.24 11.66, 13.56 0.51, 37.35 0 M0 37.35 C-1.07 11.51, 14.41 0.58, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(310.8041868504629 346.8754688133559) rotate(0 134.55158669315279 -1.1346747633069754)"><path d="M-0.7 0.32 C44.19 -0.02, 224.96 -2.32, 269.8 -2.59 M1.14 -0.56 C45.87 -0.72, 224.15 -1.03, 269.07 -1.5" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g stroke-linecap="round" transform="translate(627.2678752627957 302.16735121296693) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C83.21 -2.45, 132.7 1.07, 232.77 0 M37.35 0 C77.27 -1.47, 118.01 -0.8, 232.77 0 M232.77 0 C258.74 1.94, 272.05 10.53, 270.12 37.35 M232.77 0 C257.55 -1.34, 271.79 13, 270.12 37.35 M270.12 37.35 C272.44 64.64, 269.91 89.97, 270.12 112.06 M270.12 37.35 C269.78 58.45, 269.53 81.24, 270.12 112.06 M270.12 112.06 C271.9 137.33, 257.65 147.49, 232.77 149.42 M270.12 112.06 C271.65 137.52, 259.05 150.51, 232.77 149.42 M232.77 149.42 C190.42 149.3, 145.76 148.76, 37.35 149.42 M232.77 149.42 C163.29 147.58, 95.78 147.66, 37.35 149.42 M37.35 149.42 C12.45 150.5, -1.27 138.8, 0 112.06 M37.35 149.42 C10.59 149.77, 0.44 137.83, 0 112.06 M0 112.06 C-0.16 93.22, -0.09 72.68, 0 37.35 M0 112.06 C0.32 88.92, 0.76 66.83, 0 37.35 M0 37.35 C-0.93 11.63, 14.15 0.51, 37.35 0 M0 37.35 C2.04 11.83, 14.75 -1.16, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(629.6932292667019 340.7239613203888) rotate(0 134.68053263984618 -1.1848819252103553)"><path d="M-1.07 0.45 C43.93 0.12, 225.49 -2.63, 270.43 -2.82 M0.57 -0.36 C45.47 -0.5, 224.95 -1.5, 270.03 -1.85" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(323.4127250101733 353.4593544296723) rotate(0 56.52996826171875 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void run()</text></g><g transform="translate(18.33352094395906 578.4983482115074) rotate(0 63.09996032714844 25)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void fly()</text><text x="0" y="42.62" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void swim()</text></g><g transform="translate(638.3050682656465 351.63599767919015) rotate(0 54.66996765136719 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ void swim</text></g><g stroke-linecap="round"><g transform="translate(443.3395933446035 303.318858705934) rotate(0 -0.06552655981800726 -69.45145205804513)"><path d="M0 0 C1.65 -13.55, 1.77 -27.3, 0 -69.33 M0 0 C0.76 -13.9, 0.52 -27.63, 0 -69.33 M0 -69.33 C-0.53 -67.57, 1.18 -70.15, -0.12 -69.45 M0 -69.33 C0.56 -69.64, -2.11 -68.66, -0.12 -69.45 M-0.12 -69.45 C-0.12 -69.45, -0.12 -69.45, -0.12 -69.45 M-0.12 -69.45 C-0.12 -69.45, -0.12 -69.45, -0.12 -69.45 M-0.12 -69.45 C-0.17 -68.53, -0.38 -69.96, -0.24 -69.57 M-0.12 -69.45 C-0.98 -68.26, -2.49 -70.58, -0.24 -69.57 M-0.24 -69.57 C-1.26 -85.47, 1.47 -102.63, -0.24 -138.9 M-0.24 -69.57 C0.51 -96.36, -0.07 -124.76, -0.24 -138.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(443.3395933446035 303.318858705934) rotate(0 -0.06552655981800726 -69.45145205804513)"><path d="M8.63 -115.53 C8.53 -119.47, 6.78 -123.54, -0.24 -138.9 M8.63 -115.53 C7.56 -120.11, 5.51 -124.47, -0.24 -138.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(443.3395933446035 303.318858705934) rotate(0 -0.06552655981800726 -69.45145205804513)"><path d="M-8.47 -115.3 C-4.97 -119.13, -3.12 -123.24, -0.24 -138.9 M-8.47 -115.3 C-6.06 -119.82, -4.61 -124.23, -0.24 -138.9" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(762.2286357608425 297.16735121296693) rotate(0 -159.68804024567257 -66.37569831156159)"><path d="M0 0 C-2.41 -17.9, -1.66 -34.15, 0 -50.38 M0 0 C-0.51 -15.4, 0.36 -33, 0 -50.38 M0 -50.38 C0.49 -61.24, -7.13 -65.69, -16 -66.38 M0 -50.38 C0.75 -62.35, -5.15 -65.1, -16 -66.38 M-16 -66.38 C-129.12 -65.4, -238.96 -65.5, -303.13 -66.38 M-16 -66.38 C-115.74 -65.75, -215.56 -66.28, -303.13 -66.38 M-303.13 -66.38 C-314.48 -65.34, -321.08 -72.66, -319.13 -82.38 M-303.13 -66.38 C-315.42 -68.47, -317.88 -73.61, -319.13 -82.38 M-319.13 -82.38 C-317.56 -99.1, -319.09 -112.2, -319.13 -132.75 M-319.13 -82.38 C-318.38 -99.79, -318.61 -116.78, -319.13 -132.75" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(762.2286357608425 297.16735121296693) rotate(0 -159.68804024567257 -66.37569831156159)"><path d="M-309.99 -109.48 C-315.36 -117.72, -317.84 -124.39, -319.13 -132.75 M-309.99 -109.48 C-313.33 -116.04, -315.41 -124.85, -319.13 -132.75" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(762.2286357608425 297.16735121296693) rotate(0 -159.68804024567257 -66.37569831156159)"><path d="M-327.08 -109.05 C-326.42 -117.6, -322.86 -124.42, -319.13 -132.75 M-327.08 -109.05 C-324.88 -115.86, -321.43 -124.81, -319.13 -132.75" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round" transform="translate(10.311972885446437 309.9518149610982) rotate(0 135.06076049804688 74.70797729492188)"><path d="M37.35 0 C104.64 -0.82, 174.37 0.92, 232.77 0 M37.35 0 C99.74 0.91, 163.26 0.83, 232.77 0 M232.77 0 C255.95 -0.17, 270.18 12.47, 270.12 37.35 M232.77 0 C257.64 -2.04, 268.59 11.3, 270.12 37.35 M270.12 37.35 C270.35 54.23, 272.19 73.87, 270.12 112.06 M270.12 37.35 C270.48 60.82, 269.83 82.38, 270.12 112.06 M270.12 112.06 C268.78 137.77, 257.36 148.8, 232.77 149.42 M270.12 112.06 C272.19 136.93, 259.84 148.06, 232.77 149.42 M232.77 149.42 C187.9 151.34, 145.59 151, 37.35 149.42 M232.77 149.42 C177.4 149.39, 122.36 148.43, 37.35 149.42 M37.35 149.42 C12.15 150.99, -1.34 136.44, 0 112.06 M37.35 149.42 C10.68 150.8, 1.7 137.57, 0 112.06 M0 112.06 C0.25 84.15, -2.16 56.29, 0 37.35 M0 112.06 C0.81 85.24, -0.9 58.6, 0 37.35 M0 37.35 C0.76 12, 13.28 -0.61, 37.35 0 M0 37.35 C1.64 13.19, 14.24 -1.85, 37.35 0" stroke="#000000" stroke-width="1" fill="none"/></g><g stroke-linecap="round"><g transform="translate(12.737326889352687 348.50842506852007) rotate(0 134.25744234882293 -1.1650509155727953)"><path d="M-0.95 1.09 C44.04 0.88, 224.29 -0.93, 269.47 -1.45 M0.75 0.62 C45.63 0.05, 223.73 -3.18, 268.57 -3.42" stroke="#000000" stroke-width="1" fill="none"/></g></g><mask/><g transform="translate(111.4167381535658 317.0993819891732) rotate(0 36.09996795654297 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Ostrich</text></g><g transform="translate(15.787714289822759 368.8346627860858) rotate(0 32.78997802734375 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">+ run()</text></g><g stroke-linecap="round"><g transform="translate(150.61845769111898 304.95181496109814) rotate(0 145.0984556707101 -70.2679301856272)"><path d="M0 0 C1.61 -16.24, -0.26 -30.26, 0 -54.27 M0 0 C-0.07 -20, -0.34 -40.5, 0 -54.27 M0 -54.27 C-0.51 -66.14, 7.33 -70.88, 16 -70.27 M0 -54.27 C-0.23 -65.69, 4.57 -69.36, 16 -70.27 M16 -70.27 C96.26 -70.17, 178.41 -69.41, 274.26 -70.27 M16 -70.27 C97.22 -71.55, 180.17 -72.07, 274.26 -70.27 M274.26 -70.27 C286.61 -68.57, 288.45 -76.35, 290.26 -86.27 M274.26 -70.27 C284.01 -71.38, 289.3 -76.59, 290.26 -86.27 M290.26 -86.27 C289.02 -106.15, 288.7 -126.56, 290.26 -140.54 M290.26 -86.27 C290.51 -104.29, 290.22 -122.7, 290.26 -140.54" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(150.61845769111898 304.95181496109814) rotate(0 145.0984556707101 -70.2679301856272)"><path d="M298.85 -117.06 C297.79 -124.6, 293.48 -129.86, 290.26 -140.54 M298.85 -117.06 C295.35 -125.58, 291.88 -134.63, 290.26 -140.54" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(150.61845769111898 304.95181496109814) rotate(0 145.0984556707101 -70.2679301856272)"><path d="M281.75 -117.03 C285.55 -124.5, 286.09 -129.77, 290.26 -140.54 M281.75 -117.03 C284.61 -125.61, 287.5 -134.67, 290.26 -140.54" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/><g stroke-linecap="round"><g transform="translate(144.96076049804685 524.0227527392118) rotate(0 0.18911715504336257 -29.827491594134926)"><path d="M0 0 C1.3 -10.07, -1.82 -17.01, 0 -29.67 M0 0 C-0.7 -9.21, 0.9 -17.87, 0 -29.67 M0 -29.67 C-0.33 -29.05, -0.44 -29.21, 0.16 -29.83 M0 -29.67 C-0.08 -31.04, 2.1 -30.38, 0.16 -29.83 M0.16 -29.83 C0.16 -29.83, 0.16 -29.83, 0.16 -29.83 M0.16 -29.83 C0.16 -29.83, 0.16 -29.83, 0.16 -29.83 M0.16 -29.83 C-1.39 -28.74, 0.14 -31.17, 0.31 -29.98 M0.16 -29.83 C0.23 -32.01, -0.46 -31.61, 0.31 -29.98 M0.31 -29.98 C-0.19 -38.53, 1.92 -47.76, 0.31 -59.65 M0.31 -29.98 C0.83 -36.71, 1.04 -43.38, 0.31 -59.65" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(144.96076049804685 524.0227527392118) rotate(0 0.18911715504336257 -29.827491594134926)"><path d="M5.89 -45.82 C5.35 -51.02, 1.49 -53.91, 0.31 -59.65 M5.89 -45.82 C3.63 -50.24, 3.17 -54.23, 0.31 -59.65" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g transform="translate(144.96076049804685 524.0227527392118) rotate(0 0.18911715504336257 -29.827491594134926)"><path d="M-4.31 -45.47 C-2.05 -50.83, -3.11 -53.82, 0.31 -59.65 M-4.31 -45.47 C-3.53 -49.97, -0.97 -54.07, 0.31 -59.65" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></g><mask/></svg></div>
>[!example] 
>[[wiki/Java Vererbung\|Java Vererbung]] kann sich noch erweitern und eine Child-Klasse in eine Parent-[[wiki/Klasse\|Klasse]] umwandeln.
>```java
>class Animal {
>   void fly() {
>       System.out.println("This animal cannot fly.");
>   }
>
>   void run() {
>       System.out.println("This animal cannot run.");
>   }
>
>   void swim() {
>       System.out.println("This animal cannot swim.");
>   }
>}
>
>class Ostrich extends Animal {
>   @Override
>   void run() {
>       System.out.println("The bird waddles along the shore.");
>   }
>
>class Duck extends Ostrich {
>   @Override
>   void fly() {
>       System.out.println("The bird flies in the sky.");
>   }
>   @Override
>   void swim() {
>       System.out.println("The bird swims in the pond.");
>   }
>}
>
>class Dog extends Animal {
>   @Override
>   void run() {
>       System.out.println("The dog runs quickly in the park.");
>   }
>}
>
>class Fish extends Animal {
>   @Override
>   void swim() {
>       System.out.println("The fish swims in the water.");
>   }
>}
>
>
>public class Main {
>   public static void main(String[] args) {
>
>       Animal dog = new Dog();
>       dog.run(); // Output: The dog runs quickly in the park.
>       dog.fly(); // Output: This animal cannot fly.
>       dog.swim(); // Output: This animal cannot swim.
>
>       Animal fish = new Fish();
>       fish.swim(); // Output: The fish swims in the water.
>       fish.fly(); // Output: This animal cannot fly.
>       fish.run(); // Output: This animal cannot run.
>       
>       Animal ostrich = new Ostrich();
>       ostrich.swim(); //This animal cannot swim
>       ostrich.fly(); //  The bird flies in the sky
>       ostrich.run(); // The bird waddles along the shore
>       
>       Ostrich duck = new Duck();
>       duck.fly(); // Output: The bird flies in the sky
>       duck.run(); // Output: The bird waddles along the shore.
>       duck.swim(); // Output: The bird swims in the pond.
>   }
>}
>```


# [[wiki/Java Interface\|Java Interface]]
# [[wiki/Java Factory Method\|Java Factory Method]]
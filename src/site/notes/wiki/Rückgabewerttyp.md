---
{"dg-publish":true,"permalink":"/wiki/rueckgabewerttyp/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Rückgabewerttyp","rückgabewerttyp"],"created_date":"2024-10-21","links":null,"tags":["informatik/code"]}}
---

>Der **Rückgabewerttyp** einer [[wiki/Programmierung Methode\|Programmierung Methode]] oder [[wiki/Funktion\|Funktion]] in der Programmierung gibt an, **welchen [[wiki/Datentyp\|Datentyp]]** die [[wiki/Programmierung Methode\|Programmierung Methode]] nach ihrer Ausführung zurückliefert. 
>>Er definiert, was eine [[wiki/Programmierung Methode\|Programmierung Methode]] dem Aufrufer „zurückgibt“ (z.B. eine Zahl, ein Text, ein Objekt usw.).

### 1. **Grundlegendes zum Rückgabewerttyp**
Jede [[wiki/Programmierung Methode\|Programmierung Methode]] in Sprachen wie [[wiki/Java\|Java]], C++, oder [[wiki/C Sharp\|C Sharp]] muss, wenn sie einen Wert zurückgeben soll, einen **Rückgabewerttyp** angeben. Der Rückgabewert ist das Ergebnis der [[wiki/Programmierung Methode\|Programmierung Methode]]. In einigen Fällen gibt eine [[wiki/Programmierung Methode\|Programmierung Methode]] nichts zurück, in solchen Fällen wird in vielen Sprachen `void` verwendet.

### 2. **Varianten des Rückgabewerttyps**
Je nach Programmiersprache und [[wiki/Programmierung Methode\|Programmierung Methode]] können unterschiedliche Typen zurückgegeben werden:

- **Primitive Datentypen**: Einfache Datentypen wie [[wiki/int\|int]], [[wiki/double\|double]], boolean, [[wiki/char\|char]], etc.
  - **Beispiel ([[wiki/Java\|Java]])**:
    ```java
    public int addiere(int a, int b) {
        return a + b;  // Gibt einen int-Wert zurück
    }
    ```
  
- **Objekte/Referenztypen**: Methoden können auch komplexe Objekte (z.B. [[wiki/String\|String]], `ArrayList`, oder benutzerdefinierte Klassen) zurückgeben.
  - **Beispiel ([[wiki/Java\|Java]])**:
    ```java
    public String getName() {
        return "Levi";  // Gibt einen String zurück
    }
    ```

- **Sammlungen/Arrays**: Eine Methode kann auch eine Liste oder ein Array von Werten zurückgeben, wie z.B. ein `int[]` oder eine `List<String>`.
  - **Beispiel (Java)**:
    ```java
    public int[] getZahlen() {
        return new int[]{1, 2, 3};  // Gibt ein Array von int zurück
    }
    ```

- **Benutzerdefinierte Typen (Klassen)**: Du kannst auch deine eigenen Klassen als Rückgabewert verwenden.
  - **Beispiel (Java)**:
    ```java
    public Auto erzeugeAuto() {
        return new Auto();  // Gibt ein Objekt vom Typ Auto zurück
    }
    ```

- **Spezielle Typen**:
  - **Void**: Wenn eine Methode nichts zurückgibt, wird `void` als Rückgabewerttyp verwendet. Sie führt nur Anweisungen aus, ohne einen Wert zurückzugeben.
    ```java
    public void drucken() {
        System.out.println("Hallo Welt");  // Gibt nichts zurück
    }
    ```

  - **Optional/Nullable** (Java, C#, etc.): Einige Sprachen haben Typen wie `Optional` (Java) oder `Nullable` (C#), um anzuzeigen, dass eine Methode möglicherweise keinen Wert zurückgibt.
    ```java
    public Optional<String> getName() {
        return Optional.ofNullable(name);  // Gibt Optional<String> zurück, kann leer sein
    }
    ```

### 3. **Erklärung der Funktionsweise**
- Der **Rückgabewert** wird in der Regel am Ende einer Methode durch das Schlüsselwort `return` zurückgegeben.
- Der Datentyp, den die Methode zurückgibt, muss dem deklarierten Rückgabewerttyp entsprechen.
- Wenn die Methode einen Wert zurückgibt, kann dieser Wert vom Aufrufer der Methode verwendet werden.

### 4. **Beispiele und Rückgabewerttypen**

#### Beispiel 1: Rückgabe eines primitiven Typs (Java)
```java
public int addiere(int a, int b) {
    return a + b;  // Gibt einen int-Wert zurück
}
```
- Diese Methode addiert zwei `int`-Werte und gibt das Ergebnis zurück.

#### Beispiel 2: Rückgabe eines Objekts (Java)
```java
public String getName() {
    return "Levi";  // Gibt einen String zurück
}
```
- Diese Methode gibt den Namen als `String` zurück.

#### Beispiel 3: Rückgabe von `void` ([[wiki/Java\|Java]])
```java
public void drucken() {
    System.out.println("Hallo Welt");  // Gibt nichts zurück
}
```
- Diese [[wiki/Programmierung Methode\|Programmierung Methode]] gibt nichts zurück, sondern führt nur eine Aktion aus.

#### Beispiel 4: Rückgabe eines Arrays ([[wiki/Java\|Java]])
```java
public int[] getZahlen() {
    return new int[]{1, 2, 3};  // Gibt ein Array von int zurück
}
```

#### Beispiel 5: Rückgabe eines Optional-Werts (Java)
```java
public Optional<String> getName() {
    return Optional.ofNullable(name);  // Gibt Optional<String> zurück, kann leer sein
}
```

### 5. **Zusammenfassung**
- Der **Rückgabewerttyp** gibt an, welchen [[wiki/Datentyp\|Datentyp]] eine [[wiki/Programmierung Methode\|Programmierung Methode]] zurückgibt.
- Es gibt verschiedene Rückgabewerttypen: primitive Typen, Objekte, Arrays, Sammlungen, `void`, und optional/nullable Typen.
- Der Rückgabewert einer [[wiki/Programmierung Methode\|Programmierung Methode]] wird mit dem Schlüsselwort `return` zurückgegeben und kann vom Aufrufer der [[wiki/Programmierung Methode\|Programmierung Methode]] genutzt werden.
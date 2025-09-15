---
{"dg-publish":true,"permalink":"/02-resources/notes/rueckgabewerttyp/","tags":["informatik/code"],"noteIcon":"","updated":"2025-09-10T16:33:11.884+02:00"}
---

>Der **Rückgabewerttyp** einer [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] oder [[02 - RESOURCES/Notes/Funktion\|Funktion]] in der Programmierung gibt an, **welchen [[02 - RESOURCES/Notes/Datentyp\|Datentyp]]** die [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] nach ihrer Ausführung zurückliefert. 
>>Er definiert, was eine [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] dem Aufrufer „zurückgibt“ (z.B. eine Zahl, ein Text, ein Objekt usw.).

### 1. **Grundlegendes zum Rückgabewerttyp**
Jede [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] in Sprachen wie [[02 - RESOURCES/Notes/Java\|Java]], C++, oder [[00 - PROJECTS/C Sharp\|C Sharp]] muss, wenn sie einen Wert zurückgeben soll, einen **Rückgabewerttyp** angeben. Der Rückgabewert ist das Ergebnis der [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]]. In einigen Fällen gibt eine [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] nichts zurück, in solchen Fällen wird in vielen Sprachen `void` verwendet.

### 2. **Varianten des Rückgabewerttyps**
Je nach Programmiersprache und [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] können unterschiedliche Typen zurückgegeben werden:

- **Primitive Datentypen**: Einfache Datentypen wie [[02 - RESOURCES/Notes/int\|int]], [[02 - RESOURCES/Notes/double\|double]], boolean, [[02 - RESOURCES/Notes/char\|char]], etc.
  - **Beispiel ([[02 - RESOURCES/Notes/Java\|Java]])**:
    ```java
    public int addiere(int a, int b) {
        return a + b;  // Gibt einen int-Wert zurück
    }
    ```
  
- **Objekte/Referenztypen**: Methoden können auch komplexe Objekte (z.B. [[02 - RESOURCES/Notes/String\|String]], `ArrayList`, oder benutzerdefinierte Klassen) zurückgeben.
  - **Beispiel ([[02 - RESOURCES/Notes/Java\|Java]])**:
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

#### Beispiel 3: Rückgabe von `void` ([[02 - RESOURCES/Notes/Java\|Java]])
```java
public void drucken() {
    System.out.println("Hallo Welt");  // Gibt nichts zurück
}
```
- Diese [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] gibt nichts zurück, sondern führt nur eine Aktion aus.

#### Beispiel 4: Rückgabe eines Arrays ([[02 - RESOURCES/Notes/Java\|Java]])
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
- Der **Rückgabewerttyp** gibt an, welchen [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] eine [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] zurückgibt.
- Es gibt verschiedene Rückgabewerttypen: primitive Typen, Objekte, Arrays, Sammlungen, `void`, und optional/nullable Typen.
- Der Rückgabewert einer [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] wird mit dem Schlüsselwort `return` zurückgegeben und kann vom Aufrufer der [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] genutzt werden.
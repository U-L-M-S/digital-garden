---
{"dg-publish":true,"permalink":"/wiki/stack/","tags":["informatik/code","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.969+02:00","dg-note-properties":{"tags":["informatik/code","ausbildung/pruefung"],"aliases":["Stapel","LIFO","Stack-Datenstruktur"],"links":null,"created_date":"2025-11-05"}}
---


>Ein [[wiki/Stack\|Stack]] ist eine Datenstruktur nach dem **Last In, First Out (LIFO)** Prinzip - wie ein Stapel Teller, wo du immer nur von oben nehmen und hinzufügen kannst.

>>Was zuletzt draufgelegt wurde, wird zuerst wieder genommen.

## Grundprinzip

>[!quote] Definition
>Ein [[wiki/Stack\|Stack]] ist eine lineare Datenstruktur, bei der Elemente nur an einem Ende (der Spitze) hinzugefügt und entfernt werden können.

### LIFO - Last In, First Out

```
     ┌───┐
     │ 3 │  ← Top (oben) - zuletzt hinzugefügt, wird zuerst genommen
     ├───┤
     │ 2 │
     ├───┤
     │ 1 │  ← Bottom (unten) - zuerst hinzugefügt
     └───┘
```

**Wie ein Stapel Teller:**
>Du kannst nur den obersten Teller nehmen oder einen neuen oben drauflegen - nie in der Mitte oder unten!

## Operationen

### Grundlegende Operationen:

#### 1. push() - Element hinzufügen
>Legt ein neues Element **oben** auf den [[wiki/Stack\|Stack]].

```java
stack.push(1);  // [1]
stack.push(2);  // [1, 2]
stack.push(3);  // [1, 2, 3] ← 3 ist oben
```

**Komplexität:** [[1. Big O(1)\|O(1)]] - konstante Zeit

#### 2. pop() - Element entfernen
>Entfernt das **oberste** Element und gibt es zurück.

```java
int element = stack.pop();  // 3
// Stack ist jetzt: [1, 2]
```

**Komplexität:** [[1. Big O(1)\|O(1)]]

>[!warning] Warnung
>pop() auf leerem [[wiki/Stack\|Stack]] wirft Exception! Immer erst prüfen, ob Stack leer ist.

#### 3. peek() / top() - Oberstes Element anschauen
>Gibt oberstes Element zurück **ohne** es zu entfernen.

```java
int top = stack.peek();  // 2 (bei Stack [1, 2])
// Stack bleibt: [1, 2]
```

**Komplexität:** [[1. Big O(1)\|O(1)]]

#### 4. isEmpty() - Ist Stack leer?
>Prüft ob [[wiki/Stack\|Stack]] leer ist.

```java
boolean leer = stack.isEmpty();  // true oder false
```

**Komplexität:** [[1. Big O(1)\|O(1)]]

#### 5. size() - Anzahl Elemente
>Gibt Anzahl der Elemente zurück.

```java
int anzahl = stack.size();  // z.B. 3
```

**Komplexität:** [[1. Big O(1)\|O(1)]]

## Implementierung in [[wiki/Java\|Java]]

### Mit Java Stack-Klasse:

```java
import java.util.Stack;

public class StackBeispiel {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        // Push - Elemente hinzufügen
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Stack: " + stack);  // [10, 20, 30]

        // Peek - Oberstes anschauen
        System.out.println("Top: " + stack.peek());  // 30

        // Pop - Oberstes entfernen
        int removed = stack.pop();
        System.out.println("Entfernt: " + removed);  // 30
        System.out.println("Stack: " + stack);  // [10, 20]

        // isEmpty
        System.out.println("Leer? " + stack.isEmpty());  // false

        // Size
        System.out.println("Größe: " + stack.size());  // 2
    }
}
```

### Eigene Implementierung mit Array:

```java
public class MyStack {
    private int[] arr;
    private int top;  // Index des obersten Elements
    private int capacity;

    public MyStack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;  // -1 bedeutet leer
    }

    public void push(int element) {
        if (isFull()) {
            throw new RuntimeException("Stack ist voll!");
        }
        arr[++top] = element;
    }

    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack ist leer!");
        }
        return arr[top--];
    }

    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack ist leer!");
        }
        return arr[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public boolean isFull() {
        return top == capacity - 1;
    }

    public int size() {
        return top + 1;
    }
}
```

## Anwendungsfälle

### 1. Rückgängig-Funktion (Undo)

```java
Stack<String> history = new Stack<>();

// Änderungen speichern
history.push("Text eingegeben");
history.push("Formatierung geändert");
history.push("Bild eingefügt");

// Rückgängig machen
String letzte = history.pop();  // "Bild eingefügt" rückgängig
```

**Beispiel:**
- Texteditor (Strg+Z)
- Photoshop Undo
- Browser Zurück-Button

### 2. Klammerprüfung

```java
boolean pruefeKlammern(String text) {
    Stack<Character> stack = new Stack<>();

    for (char c : text.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        }
        else if (c == ')' || c == '}' || c == ']') {
            if (stack.isEmpty()) return false;

            char top = stack.pop();
            if (!passt(top, c)) return false;
        }
    }

    return stack.isEmpty();  // Alle Klammern geschlossen?
}

boolean passt(char offen, char zu) {
    return (offen == '(' && zu == ')') ||
           (offen == '{' && zu == '}') ||
           (offen == '[' && zu == ']');
}
```

**Beispiel:**
```java
pruefeKlammern("(a + b) * {c - [d]}");  // true
pruefeKlammern("(a + b");               // false
pruefeKlammern("(a + b})");             // false
```

### 3. Funktionsaufrufe (Call Stack)

>Wenn Programm Funktionen aufruft, speichert [[wiki/CPU\|CPU]] Rücksprungadressen auf einem [[wiki/Stack\|Stack]].

```java
void main() {
    funktionA();        // Push Rücksprungadresse
}

void funktionA() {
    funktionB();        // Push Rücksprungadresse
}

void funktionB() {
    System.out.println("Hi");
    // Pop - zurück zu funktionA
}
// Pop - zurück zu main
```

**Call Stack:**
```
main → funktionA → funktionB
     ← (return)  ← (return)
```

### 4. Postfix-Notation berechnen

>Mathematische Ausdrücke in umgekehrter polnischer Notation.

```java
// "3 4 + 5 *" = (3 + 4) * 5 = 35
int berechnePostfix(String ausdruck) {
    Stack<Integer> stack = new Stack<>();

    for (String token : ausdruck.split(" ")) {
        if (istZahl(token)) {
            stack.push(Integer.parseInt(token));
        } else {
            int b = stack.pop();
            int a = stack.pop();

            if (token.equals("+")) stack.push(a + b);
            if (token.equals("-")) stack.push(a - b);
            if (token.equals("*")) stack.push(a * b);
            if (token.equals("/")) stack.push(a / b);
        }
    }

    return stack.pop();
}
```

### 5. Tiefensuche (DFS) in Graphen

>[[wiki/Stack\|Stack]] wird für Tiefensuche in Bäumen und Graphen verwendet.

```java
void depthFirstSearch(Node start) {
    Stack<Node> stack = new Stack<>();
    Set<Node> besucht = new HashSet<>();

    stack.push(start);

    while (!stack.isEmpty()) {
        Node aktuell = stack.pop();

        if (!besucht.contains(aktuell)) {
            System.out.println("Besuche: " + aktuell);
            besucht.add(aktuell);

            for (Node nachbar : aktuell.getNachbarn()) {
                stack.push(nachbar);
            }
        }
    }
}
```

## Vergleich mit anderen Datenstrukturen

### [[wiki/Stack\|Stack]] vs [[wiki/Queue\|Queue]]

| Aspekt | [[wiki/Stack\|Stack]] (LIFO) | [[wiki/Queue\|Queue]] (FIFO) |
|--------|-----------------|------------------|
| Prinzip | Last In, First Out | First In, First Out |
| Analogie | Stapel Teller | Warteschlange |
| Hinzufügen | Oben (push) | Hinten (enqueue) |
| Entfernen | Oben (pop) | Vorne (dequeue) |
| Verwendung | Undo, Rekursion | Warteschlangen, BFS |

### [[wiki/Stack\|Stack]] vs Array

| Aspekt | [[wiki/Stack\|Stack]] | Array |
|--------|-----------|-------|
| Zugriff | Nur oben | Beliebiger Index |
| Größe | Dynamisch wachsen | Fix (außer ArrayList) |
| Operationen | push, pop, peek | get, set |
| Verwendung | LIFO-Verhalten | Beliebiger Zugriff |

## Vor- und Nachteile

>[!check] Vorteile
>- **Einfach** - Leicht zu verstehen und implementieren
>- **Effizient** - Alle Operationen [[1. Big O(1)\|O(1)]]
>- **Speichereffizient** - Kein Overhead
>- **Natürliches Modell** - Passt zu vielen Problemen (Rekursion, Undo)

>[!fail] Nachteile
>- **Eingeschränkter Zugriff** - Nur oberstes Element
>- **Keine Suche** - Kann nicht in Mitte schauen ohne zu poppen
>- **Feste Größe** - Bei Array-Implementierung begrenzt
>- **Stack Overflow** - Bei zu vielen Funktionsaufrufen

## Komplexität

| Operation | Zeitkomplexität | Speicherkomplexität |
|-----------|-----------------|---------------------|
| push() | [[1. Big O(1)\|O(1)]] | [[1. Big O(1)\|O(1)]] |
| pop() | [[1. Big O(1)\|O(1)]] | [[1. Big O(1)\|O(1)]] |
| peek() | [[1. Big O(1)\|O(1)]] | [[1. Big O(1)\|O(1)]] |
| isEmpty() | [[1. Big O(1)\|O(1)]] | [[1. Big O(1)\|O(1)]] |
| size() | [[1. Big O(1)\|O(1)]] | [[1. Big O(1)\|O(1)]] |

## Stack Overflow

>[!danger] Stack Overflow
>Wenn zu viele Funktionsaufrufe auf dem Call Stack liegen, gibt es einen **Stack Overflow Error**.

**Beispiel:**
```java
void unendlicheRekursion() {
    unendlicheRekursion();  // Kein Abbruch!
}
// Führt zu: java.lang.StackOverflowError
```

**Vermeidung:**
- Rekursion mit Abbruchbedingung
- Iterative Lösungen statt Rekursion
- Tail-Rekursion optimieren

## Prüfungsrelevanz AP2

>[!important] Für AP2 wichtig
>- **LIFO-Prinzip** erklären können
>- **Operationen** (push, pop, peek) kennen
>- **Komplexität** [[1. Big O(1)\|O(1)]] für alle Operationen
>- **Anwendungsfälle** nennen (Undo, Klammerprüfung, Call Stack)
>- **Unterschied zu [[wiki/Queue\|Queue]]** erklären
>- **Implementierung** in [[wiki/Java\|Java]] kennen

**Typische Prüfungsfrage:**
>"Erkläre das LIFO-Prinzip eines [[wiki/Stack\|Stack]]s und nenne drei praktische Anwendungsfälle."

## Verwandte Konzepte

- [[wiki/Queue\|Queue]] - FIFO-Datenstruktur
- [[Linked List\|Linked List]] - Kann als [[wiki/Stack\|Stack]] verwendet werden
- [[Array\|Array]] - Basis für Array-[[wiki/Stack\|Stack]]
- [[Rekursion\|Rekursion]] - Nutzt implizit Call Stack
- [[wiki/Datenstrukturen\|Datenstrukturen]] - Übergeordnetes Konzept
- [[wiki/Algorithmus\|Algorithmen]] - Nutzen oft [[wiki/Stack\|Stack]]s

## Zusammenfassung

>[!quote] Kern-Aussage
>Ein [[wiki/Stack\|Stack]] ist eine LIFO-Datenstruktur, wo Elemente nur oben hinzugefügt und entfernt werden - wie ein Stapel Teller.

**Merksatz:**
>"Last In, First Out - Was zuletzt drauf kommt, geht zuerst wieder runter!"

**Die 3 Kern-Operationen:**
1. **push()** - Oben drauflegen
2. **pop()** - Von oben nehmen
3. **peek()** - Oben anschauen ohne nehmen

---
{"dg-publish":true,"permalink":"/02-resources/notes/funktion-programmierung/","tags":["code"],"noteIcon":"","updated":"2025-09-05T10:12:28.000+02:00"}
---

> Eine Funktion ist ein Block von wiederverwendbarem Code, der eine bestimmte Aufgabe ausführt.
> 
> > Funktionen ermöglichen es, den Code sauberer, modularer und effizienter zu gestalten. Sie können Parameter annehmen und Werte zurückgeben. Sie helfen dabei, Wiederholungen zu vermeiden, logische Einheiten zu kapseln und Programme besser wartbar zu machen.

---

## 🧠 Eigenschaften von Funktionen

- **Wiederverwendbarkeit:** Einmal definiert, kann sie beliebig oft aufgerufen werden.
    
- **Parameter:** Funktionen können Eingaben (Argumente) annehmen.
    
- **Rückgabewert:** Funktionen können Ergebnisse zurückgeben.
    
- **Kapselung:** Logik wird gebündelt und außerhalb abstrahiert.
    

---

## Bsp
### 🐍 [[02 - RESOURCES/Notes/Python\|Python]] Beispiel

```python
def sayHello(name):
    return f"Hallo, {name}!"

print(sayHello("Nutzer"))
```

### ☕ Java Beispiel

```java
public class Main {
    static String sayHello(String name) {
        return "Hallo, " + name + "!";
    }

    public static void main(String[] args) {
        System.out.println(sayHello("Nutzer"));
    }
}
```

### 🧾 JavaScript Beispiel

```javascript
function sayHello(name) {
    return `Hallo, ${name}!`;
}

console.log(sayHello("Nutzer"));
```

### 🔣 C Beispiel

```c
#include <stdio.h>

void sayHello(char name[]) {
    printf("Hallo, %s!\n", name);
}

int main() {
    sayHello("Nutzer");
    return 0;
}
```


### 📌 Beispiel mit Rückgabewert und Parameter

```python
def addiere(a, b):
    return a + b

print(addiere(3, 5))  # Ausgabe: 8
```

---

> [!IMPORTANT]  
> **Nicht mit [[02 - RESOURCES/Notes/Methode Programmierung\|Methode Programmierung]] verwechseln!!!**  
> Methoden sind Funktionen, die an Objekte (z. B. Klassen in [[02 - RESOURCES/Notes/OOP\|OOP]]) gebunden sind.

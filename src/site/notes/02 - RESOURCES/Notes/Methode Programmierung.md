---
{"dg-publish":true,"permalink":"/02-resources/notes/methode-programmierung/","tags":["informatik/code/OOP","projektmanagement"],"noteIcon":"","updated":"2025-09-10T16:33:07.654+02:00"}
---

> In der Programmierung ist eine **Methode** eine [[02 - RESOURCES/Notes/Funktion Programmierung\|Funktion Programmierung]], die **innerhalb einer [[02 - RESOURCES/Notes/Klasse\|Klasse]] definiert** ist und auf **Instanzen dieser Klasse** angewendet wird.
> 
> > Sie kann auf die **Daten der Klasse** zugreifen und diese verändern oder auswerten.

---

## Bsp
### ☕ [[02 - RESOURCES/Notes/Java\|Java]] Beispiel

```java
public class Auto {
    String marke;

    public Auto(String marke) {
        this.marke = marke;
    }

    public void hupe() {
        System.out.println(marke + " macht: Tuuut!");
    }
}

public class Main {
    public static void main(String[] args) {
        Auto meinAuto = new Auto("BMW");
        meinAuto.hupe();
    }
}
```



### 🐍 [[02 - RESOURCES/Notes/Python\|Python]] Beispiel

```python
class Auto:
    def __init__(self, marke):
        self.marke = marke

    def hupe(self):
        print(f"{self.marke} macht: Tuuut!")

mein_auto = Auto("BMW")
mein_auto.hupe()
```



### 🧾 JavaScript Beispiel (ES6 Class)

```javascript
class Auto {
    constructor(marke) {
        this.marke = marke;
    }

    hupe() {
        console.log(`${this.marke} macht: Tuuut!`);
    }
}

const meinAuto = new Auto("BMW");
meinAuto.hupe();
```



### 🔣 [[00 - PROJECTS/C++\|C++]] Beispiel

```cpp
#include <iostream>
using namespace std;

class Auto {
    string marke;

public:
    Auto(string m) { marke = m; }
    void hupe() { cout << marke << " macht: Tuuut!" << endl; }
};

int main() {
    Auto meinAuto("BMW");
    meinAuto.hupe();
    return 0;
}
```

---

> [!TIP]  
> 🔍 Methoden sind an **Objekte** gebunden. Im Gegensatz dazu sind [[02 - RESOURCES/Notes/Funktion\|Funktion]]en meist unabhängig und stehen **außerhalb von Klassen**.

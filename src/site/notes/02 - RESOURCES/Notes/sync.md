---
{"dg-publish":true,"permalink":"/02-resources/notes/sync/","tags":["informatik/code/CSharp","informatik/programmierung/sprachen/java","informatik/programmierung/sprachen/python"],"noteIcon":"","updated":"2025-09-27T01:32:44.000+02:00"}
---

>Schritte laufen nacheinander (nicht gleichzeitig)

- **Synchronous = Schritt für Schritt**
    
- Jeder Befehl wartet, bis der vorherige fertig ist.
    
- Kein `await`, kein `async`.
    

---

## Bsp

### JavaScript

```js
function start() {
  let data = fetchSync(); // wartet bis fertig
  console.log("Fertig:", data);
}
```



### [[02 - RESOURCES/Notes/Python\|Python]]

```python
def start():
    data = fetch_data()  # läuft direkt, blockiert bis fertig
    print("Fertig:", data)
```



### [[CSharp\|CSharp]]

```csharp
void Start() {
    var data = FetchData(); // blockiert
    Console.WriteLine("Fertig: " + data);
}
```



### [[02 - RESOURCES/Notes/Java\|Java]]

```java
String data = fetchData(); // läuft synchron
System.out.println("Fertig: " + data);
```

---

**Merkhilfe:**  
📦 `sync` = Paket wird **vollständig geliefert**, bevor der nächste Schritt passiert.  
⚙️ `await` = Warte, bis Paket da ist, dann mach weiter.

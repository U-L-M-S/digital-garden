---
{"dg-publish":true,"permalink":"/02-resources/notes/await/","tags":["code/python","code/csharp","code/java"],"noteIcon":"","updated":"2025-09-05T10:12:28.319+02:00"}
---

>Warten auf ein Ergebnis von einer async-Funktion

- `await` wartet, bis ein **Promise** oder **Future** fertig ist.
    
- Es wird oft in `async`-Funktionen genutzt.
    
- Der Code läuft nicht sofort weiter – er wartet.
    

---

## Bsp
### JavaScript

```js
async function start() {
  let data = await fetch("https://api.com");
  console.log("Fertig:", data);
}
```



### [[02 - RESOURCES/Notes/Python\|Python]]

```python
import asyncio

async def start():
    data = await fetch_data()
    print("Fertig:", data)
```



### [[CSharp\|CSharp]]

```csharp
async Task StartAsync() {
    var data = await FetchData();
    Console.WriteLine("Fertig: " + data);
}
```



### [[02 - RESOURCES/Notes/Java\|Java]] (mit CompletableFuture)

```java
CompletableFuture<String> future = fetchData();
future.thenAccept(data -> {
    System.out.println("Fertig: " + data);
});
```

> Java hat kein echtes `await`, aber `thenAccept()` macht Ähnliches.


---

**Merkhilfe:**  
📦 `sync` = Paket wird **vollständig geliefert**, bevor der nächste Schritt passiert.  
⚙️ `await` = Warte, bis Paket da ist, dann mach weiter.

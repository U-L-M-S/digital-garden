---
{"dg-publish":true,"permalink":"/wiki/await/","tags":["informatik/code","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":null,"created_date":"2025-05-05","links":null,"tags":["informatik/code","informatik/software"]}}
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



### [[wiki/Python\|Python]]

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



### [[wiki/Java\|Java]] (mit CompletableFuture)

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

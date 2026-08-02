---
{"dg-publish":true,"permalink":"/wiki/stateful/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.919+02:00","dg-note-properties":{"aliases":["stateful ejb","stateful bean","@stateful"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/@Stateful\|@Stateful]] markiert eine [[wiki/Enterprise Java Bean\|EJB]] als "eine Instanz pro Client".
>>Member-State erlaubt, lebt bis [[wiki/@Remove\|@Remove]] oder Timeout.

# I. Eigenschaften
___
- Jeder [[wiki/JNDI\|JNDI]]-Lookup → neue Instanz
- Member-Felder dürfen User-spezifische Daten halten
- Container hält die Instanz im Speicher zwischen Calls
- Typisch: Shopping-Cart, Wizard, Session

# II. Beispiel
___
```java
@Stateful
public class CartBean {
    private final List<String> items = new ArrayList<>();

    public void addItem(String item) { items.add(item); }
    public List<String> getItems()   { return items; }
}
```

# III. Lookup für "pro User"
___
Bei [[wiki/@Stateful\|@Stateful]] willst du oft **eine eigene Instanz pro User** → also kein [[wiki/@EJB\|@EJB]], sondern manueller [[wiki/JNDI\|JNDI]]-Lookup:

```java
CartBean cart = (CartBean) ctx.lookup("java:module/CartBean");
```

# IV. .NET-Pendant
___
Wie Session-State — aber Container-managed.

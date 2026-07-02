---
{"dg-publish":true,"permalink":"/02-resources/notes/stateful/","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"],"noteIcon":"","updated":"2026-07-02T13:17:19.619+02:00","dg-note-properties":{"aliases":["stateful ejb","stateful bean","@stateful"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"]}}
---

>[[02 - RESOURCES/Notes/@Stateful\|@Stateful]] markiert eine [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] als "eine Instanz pro Client".
>>Member-State erlaubt, lebt bis [[02 - RESOURCES/Notes/@Remove\|@Remove]] oder Timeout.

# I. Eigenschaften
___
- Jeder [[02 - RESOURCES/Notes/JNDI\|JNDI]]-Lookup → neue Instanz
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
Bei [[02 - RESOURCES/Notes/@Stateful\|@Stateful]] willst du oft **eine eigene Instanz pro User** → also kein [[02 - RESOURCES/Notes/@EJB\|@EJB]], sondern manueller [[02 - RESOURCES/Notes/JNDI\|JNDI]]-Lookup:

```java
CartBean cart = (CartBean) ctx.lookup("java:module/CartBean");
```

# IV. .NET-Pendant
___
Wie Session-State — aber Container-managed.

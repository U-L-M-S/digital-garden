---
{"dg-publish":true,"permalink":"/02-resources/notes/remove/","tags":["informatik/code/java/framework","informatik/code/java/annotation"],"noteIcon":"","updated":"2026-05-19T14:43:31.512+02:00","dg-note-properties":{"aliases":["remove","@remove"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/code/java/annotation"]}}
---

>[[02 - RESOURCES/Notes/@Remove\|@Remove]] markiert eine Methode in einer [[02 - RESOURCES/Notes/@Stateful\|@Stateful]]-Bean: nach dem Aufruf wird die Instanz **zerstört**.
>>Wichtig, damit Stateful-Beans nicht ewig im Speicher bleiben.

# I. Beispiel
___
```java
@Stateful
public class CartBean {
    private List<String> items = new ArrayList<>();

    public void addItem(String item) { items.add(item); }

    @Remove
    public void checkout() {
        // ... bestellen ...
        // Container entfernt die Bean nach dieser Methode
    }
}
```

# II. Wann nutzen?
___
- Bei [[02 - RESOURCES/Notes/@Stateful\|@Stateful]]: nach "Logout", "Checkout", "Cancel"
- Sonst läuft die Bean bis Timeout (Memory-Leak-Risiko!)

>[!warning]
>Bei [[02 - RESOURCES/Notes/@Stateless\|@Stateless]] / [[02 - RESOURCES/Notes/Singleton\|@Singleton]] hat [[02 - RESOURCES/Notes/@Remove\|@Remove]] **keine** Bedeutung.

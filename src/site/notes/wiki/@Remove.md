---
{"dg-publish":true,"permalink":"/wiki/remove/","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"],"noteIcon":"","updated":"2026-07-02T13:17:19.000+02:00","dg-note-properties":{"aliases":["remove","@remove"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/programmierung/sprachen/java/annotation"]}}
---

>[[wiki/@Remove\|@Remove]] markiert eine Methode in einer [[wiki/@Stateful\|@Stateful]]-Bean: nach dem Aufruf wird die Instanz **zerstört**.
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
- Bei [[wiki/@Stateful\|@Stateful]]: nach "Logout", "Checkout", "Cancel"
- Sonst läuft die Bean bis Timeout (Memory-Leak-Risiko!)

>[!warning]
>Bei [[wiki/@Stateless\|@Stateless]] / [[wiki/Singleton\|@Singleton]] hat [[wiki/@Remove\|@Remove]] **keine** Bedeutung.

---
{"dg-publish":true,"permalink":"/wiki/java-array-list/","tags":["informatik/code","informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.922+02:00","dg-note-properties":{"tags":["informatik/code","informatik/software"],"aliases":["java ArrayList"],"links":null,"created_date":"2026-02-10"}}
---

```java
import java.util.ArrayList;
```
>Es ist keine Standardbibliothek von [[wiki/Java\|Java]]. Es wird aber häufig verwendet für [[wiki/Java Array\|Java Array]]-Management.

# Schreibweise
```java
import java.util.ArrayList;

ArrayList <Wrapper> arrayName = new ArrayList<>();
```

# Bsp
```java
import java.util.ArrayList;

ArrayList <String> namen = new ArrayList<>();

namen.add("Hanna");
namen.add("Anna");
namen.add("Nana");

namen.remove("Anna"); // Anna entfernen
namen.remove(2); // Nana entfernen

namen.get(0); // Nana holen
namen.set(1, "Banana") // Setz Banana
nana.size() // Array Länge = 2 
```

Es ist wichtig, dass man Wrapper verwendet und nicht den [[wiki/Datentyp\|Datentyp]].
---
{"dg-publish":true,"permalink":"/02-resources/notes/java-array-list/","tags":["grundlagen/array","informatik/code/java"],"noteIcon":"","updated":"2026-02-10T15:49:16.000+01:00"}
---

```java
import java.util.ArrayList;
```
>Es ist kein Standard Bibliothek von [[02 - RESOURCES/Notes/Java\|Java]]. Es wird aber häufig verwendet für [[02 - RESOURCES/Notes/Java Array\|Java Array]]-Management.

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

Es ist wichtig dass man Wrapper verwendet und nicht den [[02 - RESOURCES/Notes/Datentyp\|Datentyp]].
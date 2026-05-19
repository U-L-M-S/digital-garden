---
{"dg-publish":true,"permalink":"/02-resources/notes/persistence-unit/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:39:22.696+02:00","dg-note-properties":{"aliases":["persistence unit","persistence-unit","PU"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>Eine [[02 - RESOURCES/Notes/Persistence Unit\|Persistence Unit]] ist die logische Brücke zwischen [[02 - RESOURCES/Notes/JPA\|JPA]]-Code und einer [[02 - RESOURCES/Notes/Datasource\|Datasource]].
>>Wird in der [[02 - RESOURCES/Notes/persistence.xml\|persistence.xml]] definiert.

# I. Beispiel
___
```xml
<persistence-unit name="LeviLearningPU" transaction-type="JTA">
    <jta-data-source>java:jboss/datasources/LeviLearningDS</jta-data-source>
    ...
</persistence-unit>
```

# II. Im Code referenzieren
___
```java
@PersistenceContext(unitName = "LeviLearningPU")
private EntityManager em;
```

>[!warning]
>Der `name` der Unit und der `unitName` im Code müssen **exakt** matchen.

# III. Deployment-Phasen
___
[[02 - RESOURCES/Notes/Hibernate\|Hibernate]] startet die Unit in 2 Phasen (siehe [[02 - RESOURCES/Notes/Log-Codes\|Log-Codes]]):
1. **Phase 1 of 2**: persistence.xml parsen, [[02 - RESOURCES/Notes/@Entity\|@Entity]]-Klassen scannen, Metamodell bauen
2. **Phase 2 of 2**: mit DB verbinden, [[02 - RESOURCES/Notes/hbm2ddl.auto\|hbm2ddl.auto]] ausführen ([[02 - RESOURCES/Notes/hbm2ddl.auto\|validate]] passt Schema?)

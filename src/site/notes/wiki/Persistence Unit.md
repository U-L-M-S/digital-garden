---
{"dg-publish":true,"permalink":"/wiki/persistence-unit/","tags":["informatik/software","informatik/datenbank"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["persistence unit","persistence-unit","PU"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software","informatik/datenbank"]}}
---

>Eine [[wiki/Persistence Unit\|Persistence Unit]] ist die logische Brücke zwischen [[wiki/JPA\|JPA]]-Code und einer [[wiki/Datasource\|Datasource]].
>>Wird in der [[wiki/persistence.xml\|persistence.xml]] definiert.

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
[[wiki/Hibernate\|Hibernate]] startet die Unit in 2 Phasen (siehe [[wiki/Log-Codes\|Log-Codes]]):
1. **Phase 1 of 2**: persistence.xml parsen, [[wiki/@Entity\|@Entity]]-Klassen scannen, Metamodell bauen
2. **Phase 2 of 2**: mit DB verbinden, [[wiki/hbm2ddl.auto\|hbm2ddl.auto]] ausführen ([[wiki/hbm2ddl.auto\|validate]] passt Schema?)

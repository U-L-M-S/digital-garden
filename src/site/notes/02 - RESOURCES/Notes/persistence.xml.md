---
{"dg-publish":true,"permalink":"/02-resources/notes/persistence-xml/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:38:54.748+02:00","dg-note-properties":{"aliases":["persistence xml","persistence-xml"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>[[02 - RESOURCES/Notes/persistence.xml\|persistence.xml]] ist die Konfig-Datei für [[02 - RESOURCES/Notes/JPA\|JPA]] / [[02 - RESOURCES/Notes/Hibernate\|Hibernate]].
>>Sie verbindet den Code mit einer [[02 - RESOURCES/Notes/Datasource\|Datasource]].

# I. Wo liegt sie?
___
- Im Projekt: `src/main/resources/META-INF/persistence.xml`
- Im WAR: `WEB-INF/classes/META-INF/persistence.xml`

# II. Beispiel
___
```xml
<persistence version="3.0"
             xmlns="https://jakarta.ee/xml/ns/persistence">
  <persistence-unit name="LeviLearningPU" transaction-type="JTA">
    <jta-data-source>java:jboss/datasources/LeviLearningDS</jta-data-source>
    <properties>
      <property name="hibernate.dialect"
                value="org.hibernate.dialect.MariaDBDialect"/>
      <property name="hibernate.hbm2ddl.auto" value="validate"/>
      <property name="hibernate.show_sql"     value="true"/>
      <property name="hibernate.format_sql"   value="true"/>
    </properties>
  </persistence-unit>
</persistence>
```

# III. Wichtige Elemente
___
- `<persistence-unit name="...">` → die [[02 - RESOURCES/Notes/Persistence Unit\|Persistence Unit]]
- `transaction-type="JTA"` → aktiviert [[02 - RESOURCES/Notes/CMT\|CMT]]
- `<jta-data-source>` → [[02 - RESOURCES/Notes/JNDI\|JNDI]]-Name der [[02 - RESOURCES/Notes/Datasource\|Datasource]]
- `hibernate.dialect` → DB-spezifisches SQL
- [[02 - RESOURCES/Notes/hbm2ddl.auto\|hbm2ddl.auto]] → Schema-Verhalten

>[!warning]
>Falscher Ort = `LeviLearningPU` wird nicht gefunden = Deploy failt.

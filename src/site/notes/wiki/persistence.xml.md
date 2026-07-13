---
{"dg-publish":true,"permalink":"/wiki/persistence-xml/","tags":["informatik/programmierung/sprachen/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-07-02T13:17:19.912+02:00","dg-note-properties":{"aliases":["persistence xml","persistence-xml"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/datenbank"]}}
---

>[[wiki/persistence.xml\|persistence.xml]] ist die Konfig-Datei für [[wiki/JPA\|JPA]] / [[wiki/Hibernate\|Hibernate]].
>>Sie verbindet den Code mit einer [[wiki/Datasource\|Datasource]].

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
- `<persistence-unit name="...">` → die [[wiki/Persistence Unit\|Persistence Unit]]
- `transaction-type="JTA"` → aktiviert [[wiki/CMT\|CMT]]
- `<jta-data-source>` → [[wiki/JNDI\|JNDI]]-Name der [[wiki/Datasource\|Datasource]]
- `hibernate.dialect` → DB-spezifisches SQL
- [[wiki/hbm2ddl.auto\|hbm2ddl.auto]] → Schema-Verhalten

>[!warning]
>Falscher Ort = `LeviLearningPU` wird nicht gefunden = Deploy failt.

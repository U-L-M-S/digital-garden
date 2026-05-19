---
{"dg-publish":true,"permalink":"/02-resources/notes/datasource/","tags":["informatik/code/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-05-19T13:39:07.204+02:00","dg-note-properties":{"aliases":["data source","datasource","jndi datasource"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework","informatik/datenbank"]}}
---

>Eine [[02 - RESOURCES/Notes/Datasource\|Datasource]] ist eine Verbindungsfabrik im [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Container.
>>Sie hält einen [[02 - RESOURCES/Notes/Connection Pool\|Connection Pool]] und liegt unter [[02 - RESOURCES/Notes/JNDI\|JNDI]] `java:jboss/datasources/...`.

# I. Wofür?
___
Statt jedes Mal eine neue TCP-Verbindung zur DB aufzubauen, hält die Datasource einen Pool von vorgewärmten JDBC-Verbindungen bereit.

# II. Anlegen mit JBoss-CLI
___
```bash
data-source add \
    --name=LeviLearningDS \
    --jndi-name=java:jboss/datasources/LeviLearningDS \
    --driver-name=mariadb \
    --connection-url=jdbc:mariadb://localhost:3306/levi_learning_db \
    --user-name=root --password=*** \
    --min-pool-size=1 --max-pool-size=10
```

# III. Testen
___
```bash
/subsystem=datasources/data-source=LeviLearningDS:test-connection-in-pool
# → {"outcome" => "success", "result" => [true]}
```

# IV. Nutzung
___
Die [[02 - RESOURCES/Notes/persistence.xml\|persistence.xml]] referenziert den JNDI-Namen als `<jta-data-source>`.

>[!warning]
>Passwort steht im Klartext in `standalone.xml`. Production → credential-store nutzen.

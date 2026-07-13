---
{"dg-publish":true,"permalink":"/wiki/datasource/","tags":["informatik/programmierung/sprachen/java/framework","informatik/datenbank"],"noteIcon":"","updated":"2026-07-02T13:17:19.712+02:00","dg-note-properties":{"aliases":["data source","datasource","jndi datasource"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework","informatik/datenbank"]}}
---

>Eine [[wiki/Datasource\|Datasource]] ist eine Verbindungsfabrik im [[wiki/WildFly\|WildFly]]-Container.
>>Sie hält einen [[wiki/Connection Pool\|Connection Pool]] und liegt unter [[wiki/JNDI\|JNDI]] `java:jboss/datasources/...`.

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
Die [[wiki/persistence.xml\|persistence.xml]] referenziert den JNDI-Namen als `<jta-data-source>`.

>[!warning]
>Passwort steht im Klartext in `standalone.xml`. Production → credential-store nutzen.

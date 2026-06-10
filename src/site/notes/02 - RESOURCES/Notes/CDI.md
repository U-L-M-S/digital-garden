---
{"dg-publish":true,"permalink":"/02-resources/notes/cdi/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T18:36:16.696+07:00","dg-note-properties":{"aliases":["Contexts and Dependency Injection","cdi","weld"],"created":"2026-05-19 19:00","links":"https://jakarta.ee/specifications/cdi/","path":"Notes","tags":["informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/CDI\|CDI]] (Contexts and Dependency Injection) ist das DI-System von [[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]].
>>In [[02 - RESOURCES/Notes/WildFly\|WildFly]] implementiert durch Weld.

# I. Was macht es?
___
- Verwaltet Beans und ihre Lebenszyklen
- Aktiviert [[02 - RESOURCES/Notes/@Inject\|@Inject]] für [[02 - RESOURCES/Notes/Dependency Injection\|Dependency Injection]]
- Bindet [[02 - RESOURCES/Notes/Annotation\|Annotation]]en wie [[02 - RESOURCES/Notes/@PostConstruct\|@PostConstruct]] und [[02 - RESOURCES/Notes/@Remove\|@Remove]]

# II. Aktivierung
___
Die [[02 - RESOURCES/Notes/beans.xml\|beans.xml]] aktiviert CDI:
- In einer [[02 - RESOURCES/Notes/WAR\|WAR]]: `WEB-INF/beans.xml`
- In einem [[02 - RESOURCES/Notes/EJB-Jar\|EJB-Jar]]: `META-INF/beans.xml`

>[!warning]
>Ohne `beans.xml` am richtigen Ort → [[02 - RESOURCES/Notes/@Inject\|@Inject]] / [[02 - RESOURCES/Notes/@EJB\|@EJB]] = `null` zur Laufzeit.

# III. CDI vs. EJB
___
| | [[02 - RESOURCES/Notes/CDI\|CDI]] (`@Inject`) | [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] (`@EJB`) |
|---|---|---|
| Für was | Alle POJO-Beans | Nur [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s |
| Transaktion | Nein (außer manuell) | Ja ([[02 - RESOURCES/Notes/CMT\|CMT]]) |
| Pool | Nein | Ja ([[02 - RESOURCES/Notes/@Stateless\|@Stateless]]) |

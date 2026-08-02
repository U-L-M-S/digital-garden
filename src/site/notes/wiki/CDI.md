---
{"dg-publish":true,"permalink":"/wiki/cdi/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.720+02:00","dg-note-properties":{"aliases":["Contexts and Dependency Injection","cdi","weld"],"created":"2026-05-19 19:00","links":"https://jakarta.ee/specifications/cdi/","path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/CDI\|CDI]] (Contexts and Dependency Injection) ist das DI-System von [[wiki/Jakarta EE\|Jakarta EE]].
>>In [[wiki/WildFly\|WildFly]] implementiert durch Weld.

# I. Was macht es?
___
- Verwaltet Beans und ihre Lebenszyklen
- Aktiviert [[wiki/@Inject\|@Inject]] für [[wiki/Dependency Injection\|Dependency Injection]]
- Bindet [[wiki/Annotation\|Annotation]]en wie [[wiki/@PostConstruct\|@PostConstruct]] und [[wiki/@Remove\|@Remove]]

# II. Aktivierung
___
Die [[wiki/beans.xml\|beans.xml]] aktiviert CDI:
- In einer [[wiki/WAR\|WAR]]: `WEB-INF/beans.xml`
- In einem [[wiki/EJB-Jar\|EJB-Jar]]: `META-INF/beans.xml`

>[!warning]
>Ohne `beans.xml` am richtigen Ort → [[wiki/@Inject\|@Inject]] / [[wiki/@EJB\|@EJB]] = `null` zur Laufzeit.

# III. CDI vs. EJB
___
| | [[wiki/CDI\|CDI]] (`@Inject`) | [[wiki/Enterprise Java Bean\|EJB]] (`@EJB`) |
|---|---|---|
| Für was | Alle POJO-Beans | Nur [[wiki/Enterprise Java Bean\|EJB]]s |
| Transaktion | Nein (außer manuell) | Ja ([[wiki/CMT\|CMT]]) |
| Pool | Nein | Ja ([[wiki/@Stateless\|@Stateless]]) |

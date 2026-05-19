---
{"dg-publish":true,"permalink":"/02-resources/notes/jakarta-ee/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:35:25.815+02:00","dg-note-properties":{"aliases":["Jakarta Enterprise Edition","jakarta ee","jakartaee"],"created":"2026-05-19 19:00","links":"https://jakarta.ee/","path":"Notes","tags":["informatik/code/java/framework"]}}
---

>[[02 - RESOURCES/Notes/Jakarta EE\|Jakarta EE]] ist die Enterprise-Edition von [[02 - RESOURCES/Notes/Java\|Java]] mit Standards für Web-Apps, Persistenz und [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s.
>>Nachfolger von Java EE. Alle Imports nutzen `jakarta.*` statt `javax.*`.

# I. Was ist das?
___
Jakarta EE ist eine Sammlung von Spezifikationen für Enterprise-Java:
- Web ([[02 - RESOURCES/Notes/@WebServlet\|@WebServlet]], [[02 - RESOURCES/Notes/HttpServlet\|HttpServlet]])
- Persistenz ([[02 - RESOURCES/Notes/JPA\|JPA]], [[02 - RESOURCES/Notes/@Entity\|@Entity]])
- Beans ([[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]], [[02 - RESOURCES/Notes/@Stateless\|@Stateless]], [[02 - RESOURCES/Notes/@Singleton\|@Singleton]], [[02 - RESOURCES/Notes/@Stateful\|@Stateful]])
- DI ([[02 - RESOURCES/Notes/CDI\|CDI]], [[02 - RESOURCES/Notes/@Inject\|@Inject]])
- Transaktionen ([[02 - RESOURCES/Notes/CMT\|CMT]])

# II. javax → jakarta
___
2017 hat Oracle das `javax.*`-Trademark an die [[02 - RESOURCES/Notes/Eclipse\|Eclipse]]-Foundation übergeben. Seitdem heißen alle Pakete `jakarta.*`.

>[!warning] Ausnahme
>[[02 - RESOURCES/Notes/Java\|Java]]-SE-Pakete wie `javax.naming` bleiben `javax.*`.

# III. Versionen & Server
___
- Jakarta EE 10 läuft auf [[02 - RESOURCES/Notes/WildFly\|WildFly]] 30+
- Implementierungen: [[02 - RESOURCES/Notes/WildFly\|WildFly]], Payara, Open Liberty, GlassFish

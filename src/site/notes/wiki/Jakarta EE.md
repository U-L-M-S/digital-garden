---
{"dg-publish":true,"permalink":"/wiki/jakarta-ee/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.854+02:00","dg-note-properties":{"aliases":["Jakarta Enterprise Edition","jakarta ee","jakartaee"],"created":"2026-05-19 19:00","links":"https://jakarta.ee/","path":"Notes","tags":["informatik/software"]}}
---

>[[wiki/Jakarta EE\|Jakarta EE]] ist die Enterprise-Edition von [[wiki/Java\|Java]] mit Standards für Web-Apps, Persistenz und [[wiki/Enterprise Java Bean\|EJB]]s.
>>Nachfolger von Java EE. Alle Imports nutzen `jakarta.*` statt `javax.*`.

# I. Was ist das?
___
Jakarta EE ist eine Sammlung von Spezifikationen für Enterprise-Java:
- Web ([[wiki/@WebServlet\|@WebServlet]], [[wiki/HttpServlet\|HttpServlet]])
- Persistenz ([[wiki/JPA\|JPA]], [[wiki/@Entity\|@Entity]])
- Beans ([[wiki/Enterprise Java Bean\|EJB]], [[wiki/@Stateless\|@Stateless]], [[wiki/Singleton\|@Singleton]], [[wiki/@Stateful\|@Stateful]])
- DI ([[wiki/CDI\|CDI]], [[wiki/@Inject\|@Inject]])
- Transaktionen ([[wiki/CMT\|CMT]])

# II. javax → jakarta
___
2017 hat Oracle das `javax.*`-Trademark an die [[wiki/Eclipse\|Eclipse]]-Foundation übergeben. Seitdem heißen alle Pakete `jakarta.*`.

>[!warning] Ausnahme
>[[wiki/Java\|Java]]-SE-Pakete wie `javax.naming` bleiben `javax.*`.

# III. Versionen & Server
___
- Jakarta EE 10 läuft auf [[wiki/WildFly\|WildFly]] 30+
- Implementierungen: [[wiki/WildFly\|WildFly]], Payara, Open Liberty, GlassFish

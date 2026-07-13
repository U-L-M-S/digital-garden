---
{"dg-publish":true,"permalink":"/wiki/container-proxy/","tags":["informatik/programmierung/sprachen/java/framework"],"noteIcon":"","updated":"2026-07-02T13:17:19.707+02:00","dg-note-properties":{"aliases":["container proxy","ejb proxy","bean proxy"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/programmierung/sprachen/java/framework"]}}
---

>Du bekommst **niemals** eine [[wiki/Enterprise Java Bean\|EJB]] direkt — der [[wiki/WildFly\|WildFly]]-Container gibt dir einen [[wiki/Proxy\|Proxy]].
>>Im `JndiServlet` sichtbar als z.B. `HelloBean$$$view6`.

# I. Was macht der Proxy?
___
Bei jedem Methoden-Aufruf macht der Proxy automatisch:
- [[wiki/Object Pool\|Pool]]-Lookup (bei [[wiki/@Stateless\|@Stateless]])
- [[wiki/Transaktion\|Transaktion]] starten ([[wiki/CMT\|CMT]])
- Threading absichern
- Logging
- Security-Check

# II. Warum sieht man ihn?
___
Wenn du via [[wiki/JNDI\|JNDI]] eine Bean holst und `.getClass().getName()` aufrufst, siehst du nicht `HelloBean`, sondern `HelloBean$$$view6` — eine zur Laufzeit generierte Klasse.

>[!tip] .NET-Vergleich
>Wie Castle DynamicProxy oder EF Core Lazy-Loading-Proxies — beide generieren Subklassen zur Laufzeit.

# III. Konsequenz
___
Du kannst eine [[wiki/Enterprise Java Bean\|EJB]] **nie** mit `new` erstellen — sonst hast du keinen Proxy → keine [[wiki/CMT\|CMT]] → keine [[wiki/Object Pool\|Pool]]-Verwaltung.

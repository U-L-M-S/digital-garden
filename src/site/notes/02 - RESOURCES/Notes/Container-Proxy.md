---
{"dg-publish":true,"permalink":"/02-resources/notes/container-proxy/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:36:35.128+02:00","dg-note-properties":{"aliases":["container proxy","ejb proxy","bean proxy"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>Du bekommst **niemals** eine [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] direkt — der [[02 - RESOURCES/Notes/WildFly\|WildFly]]-Container gibt dir einen [[02 - RESOURCES/Notes/Proxy\|Proxy]].
>>Im `JndiServlet` sichtbar als z.B. `HelloBean$$$view6`.

# I. Was macht der Proxy?
___
Bei jedem Methoden-Aufruf macht der Proxy automatisch:
- [[02 - RESOURCES/Notes/Object Pool\|Pool]]-Lookup (bei [[02 - RESOURCES/Notes/@Stateless\|@Stateless]])
- [[02 - RESOURCES/Notes/Transaktion\|Transaktion]] starten ([[02 - RESOURCES/Notes/CMT\|CMT]])
- Threading absichern
- Logging
- Security-Check

# II. Warum sieht man ihn?
___
Wenn du via [[02 - RESOURCES/Notes/JNDI\|JNDI]] eine Bean holst und `.getClass().getName()` aufrufst, siehst du nicht `HelloBean`, sondern `HelloBean$$$view6` — eine zur Laufzeit generierte Klasse.

>[!tip] .NET-Vergleich
>Wie Castle DynamicProxy oder EF Core Lazy-Loading-Proxies — beide generieren Subklassen zur Laufzeit.

# III. Konsequenz
___
Du kannst eine [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]] **nie** mit `new` erstellen — sonst hast du keinen Proxy → keine [[02 - RESOURCES/Notes/CMT\|CMT]] → keine [[02 - RESOURCES/Notes/Object Pool\|Pool]]-Verwaltung.

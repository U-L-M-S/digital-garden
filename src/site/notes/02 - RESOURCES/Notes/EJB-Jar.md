---
{"dg-publish":true,"permalink":"/02-resources/notes/ejb-jar/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T18:40:14.149+07:00","dg-note-properties":{"aliases":["ejb jar","ejb-jar"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>Ein [[02 - RESOURCES/Notes/EJB-Jar\|EJB-Jar]] ist eine JAR-Datei mit nur [[02 - RESOURCES/Notes/Enterprise Java Bean\|EJB]]s — ohne Web-Schicht.
>>Wird typisch in einem EAR-File mit einem [[02 - RESOURCES/Notes/WAR\|WAR]] kombiniert.

# I. Struktur
___
```
my-beans.jar
├── de/levi/learning/...   ← kompilierte EJB-Klassen
└── META-INF/
    └── beans.xml          ← CDI-Aktivierung
```

# II. Wann nutzen?
___
- Wenn Beans **mehrfach** verwendet werden (von mehreren WARs)
- In großen Apps zur klaren Trennung Web ↔ Business
- In einem EAR-Paket

# III. Wichtig
___
>[!warning]
>Die [[02 - RESOURCES/Notes/beans.xml\|beans.xml]] muss in einem EJB-Jar unter `META-INF/`, in einem [[02 - RESOURCES/Notes/WAR\|WAR]] unter `WEB-INF/` liegen!

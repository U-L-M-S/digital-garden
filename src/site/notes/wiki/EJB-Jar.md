---
{"dg-publish":true,"permalink":"/wiki/ejb-jar/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.935+02:00","dg-note-properties":{"aliases":["ejb jar","ejb-jar"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>Ein [[wiki/EJB-Jar\|EJB-Jar]] ist eine JAR-Datei mit nur [[wiki/Enterprise Java Bean\|EJB]]s — ohne Web-Schicht.
>>Wird typisch in einem EAR-File mit einem [[wiki/WAR\|WAR]] kombiniert.

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
>Die [[wiki/beans.xml\|beans.xml]] muss in einem EJB-Jar unter `META-INF/`, in einem [[wiki/WAR\|WAR]] unter `WEB-INF/` liegen!

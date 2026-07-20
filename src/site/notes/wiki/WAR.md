---
{"dg-publish":true,"permalink":"/wiki/war/","tags":["informatik/software"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["war datei","web archive","war file"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/software"]}}
---

>Eine [[wiki/WAR\|WAR]]-Datei (**W**eb **AR**chive) ist eine ZIP-Datei mit einer Java-Web-App.
>>Wird von [[wiki/WildFly\|WildFly]] aus `standalone/deployments/` automatisch deployed.

# I. Struktur
___
```
levi-ejb-learning.war
├── WEB-INF/
│   ├── classes/                  ← kompilierte .class-Dateien
│   │   └── de/levi/learning/...
│   │   └── META-INF/persistence.xml
│   ├── lib/                      ← App-eigene .jar-Dependencies
│   └── beans.xml                 ← CDI-Aktivierung
└── (statische HTML/CSS/JS optional)
```

# II. Erzeugung
___
[[wiki/Gradle\|Gradle]] mit `war`-Plugin baut die Datei in `build/libs/`.

# III. Deployment
___
Drop in `standalone/deployments/` → [[wiki/Deployment-Scanner\|Deployment-Scanner]] erkennt sie → [[wiki/Hot-Deploy\|Hot-Deploy]].

>[!tip] Unterschied zu [[wiki/EJB-Jar\|EJB-Jar]]
>WAR = Web-Schicht ([[wiki/@WebServlet\|@WebServlet]]) + EJBs. EJB-Jar = nur Beans, ohne Web-Schicht.

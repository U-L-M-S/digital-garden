---
{"dg-publish":true,"permalink":"/02-resources/notes/war/","tags":["informatik/code/java/framework"],"noteIcon":"","updated":"2026-05-19T13:40:13.634+02:00","dg-note-properties":{"aliases":["war datei","web archive","war file"],"created":"2026-05-19 19:00","links":null,"path":"Notes","tags":["informatik/code/java/framework"]}}
---

>Eine [[02 - RESOURCES/Notes/WAR\|WAR]]-Datei (**W**eb **AR**chive) ist eine ZIP-Datei mit einer Java-Web-App.
>>Wird von [[02 - RESOURCES/Notes/WildFly\|WildFly]] aus `standalone/deployments/` automatisch deployed.

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
[[02 - RESOURCES/Notes/Gradle\|Gradle]] mit `war`-Plugin baut die Datei in `build/libs/`.

# III. Deployment
___
Drop in `standalone/deployments/` → [[02 - RESOURCES/Notes/Deployment-Scanner\|Deployment-Scanner]] erkennt sie → [[02 - RESOURCES/Notes/Hot-Deploy\|Hot-Deploy]].

>[!tip] Unterschied zu [[02 - RESOURCES/Notes/EJB-Jar\|EJB-Jar]]
>WAR = Web-Schicht ([[02 - RESOURCES/Notes/@WebServlet\|@WebServlet]]) + EJBs. EJB-Jar = nur Beans, ohne Web-Schicht.

---
{"dg-publish":true,"permalink":"/02-resources/notes/odbc/","tags":["datenbank/schnittstellen","programmierung/apis","AP2025/neu"],"noteIcon":"","updated":"2025-10-29T12:59:08.000+01:00"}
---


>[[02 - RESOURCES/Notes/ODBC\|ODBC]] (Open Database Connectivity) ist eine standardisierte Schnittstelle für den Zugriff auf Datenbanken.

>>Es ermöglicht Anwendungen den einheitlichen Zugriff auf verschiedene Datenbank-Management-Systeme.

>[!important] 
>**ODBC-Architektur:**
>- Anwendung (Client)
>- ODBC-Treiber-Manager
>- Datenbank-spezifische Treiber
>- Datenquelle (DBMS)

>[!example] 
>**ODBC-Verbindungsstring:**
>```
>DRIVER={SQL Server};
>SERVER=localhost;
>DATABASE=testdb;
>UID=user;PWD=password;
>```

>[!success] 
>Plattform- und datenbankübereifende Anwendungsentwicklung.
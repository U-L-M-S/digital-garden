---
{"dg-publish":true,"permalink":"/02-resources/notes/odbc/","tags":["datenbank/schnittstellen","informatik/programmierung/apis","AP2025/neu"],"noteIcon":"","updated":"2026-07-02T13:17:19.809+02:00","dg-note-properties":{"tags":["datenbank/schnittstellen","informatik/programmierung/apis","AP2025/neu"],"aliases":["Open Database Connectivity","ODBC-Treiber","Datenbankschnittstelle"],"links":null,"created_date":"2025-09-16"}}
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
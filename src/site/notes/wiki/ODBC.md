---
{"dg-publish":true,"permalink":"/wiki/odbc/","tags":["informatik/datenbank","informatik/code","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.632+02:00","dg-note-properties":{"tags":["informatik/datenbank","informatik/code","ausbildung/pruefung"],"aliases":["Open Database Connectivity","ODBC-Treiber","Datenbankschnittstelle"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/ODBC\|ODBC]] (Open Database Connectivity) ist eine standardisierte Schnittstelle für den Zugriff auf Datenbanken.

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
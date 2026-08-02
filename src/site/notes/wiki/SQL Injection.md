---
{"dg-publish":true,"permalink":"/wiki/sql-injection/","tags":["informatik/sicherheit","informatik/datenbank","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.943+02:00","dg-note-properties":{"tags":["informatik/sicherheit","informatik/datenbank","ausbildung/pruefung"],"aliases":["SQL-Injection","SQLi","SQL-Einschleusung"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/SQL Injection\|SQL Injection]] ist ein Angriff, bei dem schädlicher [[wiki/SQL\|SQL]]-Code in Eingabefelder eingeschleust wird.

>>Der Code wird von der Anwendung ausgeführt und kann Datenbanken kompromittieren oder umgehen.

>[!important] 
>**SQLi-Arten:**
>- Classic SQLi (direkter Code)
>- Blind SQLi (boolean/time-based)
>- Union-based SQLi
>- Error-based SQLi

>[!example] 
>**Verwundbare Abfrage:**
>```sql
>SELECT * FROM users 
>WHERE username = '$input'
>```
>**Angriff:** `admin'; DROP TABLE users; --`

>[!warning] 
>**Schutzmaßnahmen:**
>- Prepared Statements verwenden
>- Input Validation
>- Least Privilege Prinzip
>- Web Application Firewall
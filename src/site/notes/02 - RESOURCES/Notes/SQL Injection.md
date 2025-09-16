---
{"dg-publish":true,"permalink":"/02-resources/notes/sql-injection/","tags":["sicherheit/web-angriffe","datenbank/vulnerabilities","AP2025/neu"],"noteIcon":"","updated":"2025-09-16T16:45:03.261+02:00"}
---


>[[02 - RESOURCES/Notes/SQL Injection\|SQL Injection]] ist ein Angriff, bei dem schädlicher [[02 - RESOURCES/Notes/SQL\|SQL]]-Code in Eingabefelder eingeschleust wird.

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
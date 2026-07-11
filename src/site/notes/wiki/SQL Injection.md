---
{"dg-publish":true,"permalink":"/wiki/sql-injection/","tags":["informatik/sicherheit/web-angriffe","datenbank/vulnerabilities","AP2025/neu"],"noteIcon":"","updated":"2026-07-02T15:37:49.000+02:00","dg-note-properties":{"tags":["informatik/sicherheit/web-angriffe","datenbank/vulnerabilities","AP2025/neu"],"aliases":["SQL-Injection","SQLi","SQL-Einschleusung"],"links":null,"created_date":"2025-09-16"}}
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
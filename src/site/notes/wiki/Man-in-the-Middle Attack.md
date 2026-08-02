---
{"dg-publish":true,"permalink":"/wiki/man-in-the-middle-attack/","tags":["informatik/sicherheit","ausbildung/pruefung"],"noteIcon":"","updated":"2026-07-19T03:56:26.908+02:00","dg-note-properties":{"tags":["informatik/sicherheit","ausbildung/pruefung"],"aliases":["MITM-Angriff","Mensch-in-der-Mitte-Angriff","Man-in-the-Middle"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Man-in-the-Middle Attack\|Man-in-the-Middle Attack]] ist ein Angriff, bei dem sich der Angreifer zwischen zwei kommunizierende Parteien schaltet.

>>Der Angreifer kann Daten abfangen, lesen, manipulieren oder weiterleiten, ohne dass die Kommunikationspartner es bemerken.

>[!important] 
>**MITM-Techniken:**
>- ARP-Spoofing
>- DNS-Spoofing
>- WiFi-Zwillinge (Evil Twin)
>- SSL-Stripping

>[!example] 
>**Angriffsszenario:**
>```
>Client ↔ Angreifer ↔ Server
>(Client denkt, er spricht direkt mit Server)
>```

>[!warning] 
>**Schutzmaßnahmen:**
>- [[wiki/HTTPS\|HTTPS]] verwenden
>- Zertifikate prüfen
>- VPN nutzen
>- Öffentliche WLAN meiden
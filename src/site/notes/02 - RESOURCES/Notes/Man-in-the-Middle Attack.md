---
{"dg-publish":true,"permalink":"/02-resources/notes/man-in-the-middle-attack/","tags":["sicherheit/angriffe","netzwerk/bedrohungen","AP2025/neu"],"noteIcon":"","updated":"2025-09-16T23:41:26.777+02:00"}
---


>[[02 - RESOURCES/Notes/Man-in-the-Middle Attack\|Man-in-the-Middle Attack]] ist ein Angriff, bei dem sich der Angreifer zwischen zwei kommunizierende Parteien schaltet.

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
>- [[02 - RESOURCES/Notes/HTTPS\|HTTPS]] verwenden
>- Zertifikate prüfen
>- VPN nutzen
>- Öffentliche WLAN meiden
---
{"dg-publish":true,"permalink":"/wiki/apipa/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"aliases":["Automatic Private IP Addressing"],"created_date":"2025-03-23","links":null,"tags":["informatik/netzwerk"]}}
---

>Es ist eine automatische Notfall-Adressvergabe im [[wiki/IPv4\|IPv4]]-Netzwerk.
> 
>> Wird genutzt, wenn ein Gerät **keinen DHCP-Server** erreichen kann.

---

> [!note]  
> Das Gerät vergibt sich selbst automatisch eine **IP-Adresse aus dem Bereich**:  
> **169.254.0.0 bis 169.254.255.255**

> [!tip]  
> APIPA-Adressen sind **nur für lokale Netze** gedacht – es findet keine Kommunikation ins Internet statt.

> [!example]  
> Du startest deinen PC, aber der [[wiki/Router\|Router]] (DHCP) funktioniert nicht. Dein PC bekommt z.B. **169.254.23.10**.


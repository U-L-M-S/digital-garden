---
{"dg-publish":true,"permalink":"/02-resources/notes/apipa/","tags":["informatik/netzwerk/ip/ipv4"],"noteIcon":"","updated":"2025-09-10T16:35:07.302+02:00"}
---

>Es ist eine automatische Notfall-Adressvergabe im [[02 - RESOURCES/Notes/IPv4\|IPv4]]-Netzwerk.
> 
>> Wird genutzt, wenn ein Gerät **keinen DHCP-Server** erreichen kann.

---

> [!note]  
> Das Gerät vergibt sich selbst automatisch eine **IP-Adresse aus dem Bereich**:  
> **169.254.0.0 bis 169.254.255.255**

> [!tip]  
> APIPA-Adressen sind **nur für lokale Netze** gedacht – es findet keine Kommunikation ins Internet statt.

> [!example]  
> Du startest deinen PC, aber der [[02 - RESOURCES/Notes/Router\|Router]] (DHCP) funktioniert nicht. Dein PC bekommt z.B. **169.254.23.10**.


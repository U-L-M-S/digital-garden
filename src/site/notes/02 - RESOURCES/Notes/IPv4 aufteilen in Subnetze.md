---
{"dg-publish":true,"permalink":"/02-resources/notes/i-pv4-aufteilen-in-subnetze/","tags":["netzwerk/ip/ipv4"],"noteIcon":"","updated":"2024-07-28T00:31:02.095+02:00"}
---

>Um das zumachen müssen wir erstens wissen wie viele Subnetze wir brauchen um die [[02 - RESOURCES/Notes/Bit\|Bit]]s bei den [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] nach Rechts zu verschieben und ein Teil von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] für sich zunehmen.
>>$$2^{n}=gewünsche Anzahl Von Subnetze$$


>[!example] Anzahl der [[02 - RESOURCES/Notes/Bit\|Bit]]s Berechen
>
>Nehmen wir an wir haben dieses [[02 - RESOURCES/Notes/IP\|IP]]: 192.168.0.0/24
>und wir möchten diese Netz in 4 kleinere Subnetze unterteilen.
>Dann benötigen wir $$2^{2}=4$$ 
>**2** [[02 - RESOURCES/Notes/Bit\|Bit]]s von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]].
>$$24+2=27$$
>
>Jetzt sieht die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] folgendes aus: 192.168.0.0/27


Im Fall von Zahlen, die kein [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 2 sind, müssen wir das nächstgrößere mögliche Einheit nehmen.

>[!example] Anzahl der [Bit](app://obsidian.md/Bit)s Berechen, nicht [[02 - RESOURCES/Notes/Vielfaches\|Vielfaches]] von 2.
>Nehmen wir an wir haben dieses [[02 - RESOURCES/Notes/IP\|IP]]: 192.168.0.0/24
>und wir möchten diese Netz in 7 kleinere Subnetze unterteilen.
>Dann benötigen wir $$2^{3}=8$$ 
>**3** [[02 - RESOURCES/Notes/Bit\|Bit]]s von den [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]].
>$$24+3=28$$
>
>Jetzt sieht die [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] folgendes aus: 192.168.0.0/28


---
{"dg-publish":true,"permalink":"/02-resources/notes/bmc/","tags":["informatik/hardware/server"],"noteIcon":"","updated":"2025-10-29T12:59:04.000+01:00"}
---

## BMC
>**Baseboard Management Controller**

Es ist ein spezialisierter Mikrocontroller (Hardware) der in [[02 - RESOURCES/Notes/Server\|Server]] reimplantiert wird um bestimmte Daten wie Speicher, Temperatur, [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] und noch viel mehr protokolliert und in den Fall eine eine Betriebsstörung wird der Administrator kontaktiert, durch eine unabhängige Verbindung.  Der [[02 - RESOURCES/Notes/BMC\|BMC]] braucht dafür ein Protokoll und diese heißt [[02 - RESOURCES/Notes/IPMI\|IPMI]]

>[!summary] 
>Mit andere Wörter es ist ein mini PC in der [[02 - RESOURCES/Notes/Server\|Server]] drin und es hat sein eigenen Akku damit falls eine Betriebsstörung gibt in der [[02 - RESOURCES/Notes/Server\|Server]], der BMC funktioniert immer noch weiter.
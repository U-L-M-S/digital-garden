---
{"dg-publish":true,"permalink":"/02-resources/notes/bmc/","tags":["informatik/hardware/server"],"noteIcon":"","updated":"2026-05-13T13:57:20.566+07:00","dg-note-properties":{"created":"2023-09-24 21:57","links":null,"path":"Notes","tags":["informatik/hardware/server"]}}
---

## BMC
>**Baseboard Management Controller**

Es ist ein spezialisierter Mikrocontroller (Hardware), der in [[02 - RESOURCES/Notes/Server\|Server]]n implementiert wird, um bestimmte Daten wie Speicher, Temperatur, [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]] und noch viel mehr zu protokollieren. Im Fall einer Betriebsstörung wird der Administrator durch eine unabhängige Verbindung kontaktiert. Der [[02 - RESOURCES/Notes/BMC\|BMC]] braucht dafür ein Protokoll, und dieses heißt [[02 - RESOURCES/Notes/IPMI\|IPMI]].

>[!summary] 
>In anderen Worten: Es ist ein Mini-PC im [[02 - RESOURCES/Notes/Server\|Server]] drin und hat seinen eigenen Akku, damit, falls es eine Betriebsstörung im [[02 - RESOURCES/Notes/Server\|Server]] gibt, der BMC immer noch weiterfunktioniert.
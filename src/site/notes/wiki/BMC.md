---
{"dg-publish":true,"permalink":"/wiki/bmc/","tags":["informatik/hardware/server"],"noteIcon":"","updated":"2026-05-13T08:57:20.566+02:00","dg-note-properties":{"created":"2023-09-24 21:57","links":null,"path":"Notes","tags":["informatik/hardware/server"]}}
---

## BMC
>**Baseboard Management Controller**

Es ist ein spezialisierter Mikrocontroller (Hardware), der in [[wiki/Server\|Server]]n implementiert wird, um bestimmte Daten wie Speicher, Temperatur, [[wiki/Netzwerk\|Netzwerk]] und noch viel mehr zu protokollieren. Im Fall einer Betriebsstörung wird der Administrator durch eine unabhängige Verbindung kontaktiert. Der [[wiki/BMC\|BMC]] braucht dafür ein Protokoll, und dieses heißt [[wiki/IPMI\|IPMI]].

>[!summary] 
>In anderen Worten: Es ist ein Mini-PC im [[wiki/Server\|Server]] drin und hat seinen eigenen Akku, damit, falls es eine Betriebsstörung im [[wiki/Server\|Server]] gibt, der BMC immer noch weiterfunktioniert.
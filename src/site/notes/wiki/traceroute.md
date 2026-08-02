---
{"dg-publish":true,"permalink":"/wiki/traceroute/","tags":["informatik/system","informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.859+02:00","dg-note-properties":{"aliases":null,"created_date":"2025-03-24","links":null,"tags":["informatik/system","informatik/netzwerk"]}}
---

> Zeigt den **Weg der [[wiki/Datenpakete\|Datenpakete]]** von deinem Rechner bis zum Zielserver ([[wiki/Hop\|Hop]] für [[wiki/Hop\|Hop]]).  
>> Nutzt das **[[wiki/TTL\|TTL]]-Feld**, um jeden [[wiki/Router\|Router]] unterwegs sichtbar zu machen.

# I. Ablauf
___
`traceroute` schickt Pakete mit ==steigender [[wiki/TTL\|TTL]]== (1, 2, 3 …). Jeder [[wiki/Router\|Router]], bei dem die TTL auf 0 fällt, verwirft das Paket und meldet das per ICMP zurück → so wird [[wiki/Hop\|Hop]] für [[wiki/Hop\|Hop]] der Weg sichtbar.
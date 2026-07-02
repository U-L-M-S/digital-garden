---
{"dg-publish":true,"permalink":"/02-resources/notes/hybride-verschluesselung/","tags":["sicherheit/it-sicherheit","informatik/sicherheit/kryptografie"],"noteIcon":"","updated":"2026-07-02T13:17:19.764+02:00","dg-note-properties":{"aliases":null,"created_date":"2025-03-24","links":null,"tags":["sicherheit/it-sicherheit","informatik/sicherheit/kryptografie"]}}
---

> Kombiniert **asymmetrische** und **symmetrische** Verschlüsselung, um die Vorteile beider zu nutzen.

> [!note] Ablauf:
> 
> - Der **Schlüsselaustausch** erfolgt über **asymmetrische Verschlüsselung** (z.B. mit [[02 - RESOURCES/Notes/RSA\|RSA]]).
> - Für die **eigentliche Datenübertragung** wird ein **symmetrischer Schlüssel** (z.B. AES) genutzt, da dieser schneller ist.

> [!tip]  
> **Hybride Verfahren** werden häufig in [[TLS/SSL\|TLS/SSL]] eingesetzt.  
> Erst asymmetrisch den Schlüssel austauschen, dann symmetrisch die Daten verschlüsseln.

> [!example]  
> HTTPS-Verbindungen nutzen hybride Verschlüsselung:  
> RSA für den Schlüsselaustausch + AES für die Datensicherheit.
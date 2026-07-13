---
{"dg-publish":true,"permalink":"/wiki/hybride-verschluesselung/","tags":["informatik/sicherheit/it-sicherheit","informatik/sicherheit/kryptografie"],"noteIcon":"","updated":"2026-07-02T15:37:49.224+02:00","dg-note-properties":{"aliases":null,"created_date":"2025-03-24","links":null,"tags":["informatik/sicherheit/it-sicherheit","informatik/sicherheit/kryptografie"]}}
---

> Kombiniert **asymmetrische** und **symmetrische** Verschlüsselung, um die Vorteile beider zu nutzen.

> [!note] Ablauf:
> 
> - Der **Schlüsselaustausch** erfolgt über **asymmetrische Verschlüsselung** (z.B. mit [[wiki/RSA\|RSA]]).
> - Für die **eigentliche Datenübertragung** wird ein **symmetrischer Schlüssel** (z.B. AES) genutzt, da dieser schneller ist.

> [!tip]  
> **Hybride Verfahren** werden häufig in [[TLS/SSL\|TLS/SSL]] eingesetzt.  
> Erst asymmetrisch den Schlüssel austauschen, dann symmetrisch die Daten verschlüsseln.

> [!example]  
> HTTPS-Verbindungen nutzen hybride Verschlüsselung:  
> RSA für den Schlüsselaustausch + AES für die Datensicherheit.
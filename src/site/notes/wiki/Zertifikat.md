---
{"dg-publish":true,"permalink":"/wiki/zertifikat/","tags":["informatik/sicherheit"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/sicherheit"],"aliases":["Digital Certificate","X.509-Zertifikat","SSL-Zertifikat"],"links":null,"created_date":"2025-09-16"}}
---


>Ein [[wiki/Zertifikat\|Zertifikat]] ist eine digitale Bescheinigung zur [[wiki/Authentifizierung\|Authentifizierung]] von Identitäten oder Public Keys.

>>Es wird von einer vertrauenswürdigen Zertifizierungsstelle (CA) ausgestellt und digital signiert.

>[!important] 
>**Zertifikat-Inhalte:**
>- Public Key des Inhabers
>- Identitätsinformationen (CN, OU, O)
>- Gültigkeitszeitraum
>- CA-Signatur zur Verifikation

>[!example] 
>**Zertifikat-Arten:**
>- **SSL/TLS**: [[wiki/HTTPS\|HTTPS]]-Websites (Domain-Validierung)
>- **Code-Signing**: Software-[[wiki/Authentifizierung\|Authentifizierung]]
>- **Client**: Benutzer-[[wiki/Authentifizierung\|Authentifizierung]]
>- **Root**: CA-Selbst-Signierung

>[!success] 
>Grundlage für PKI (Public Key Infrastructure) und sichere Kommunikation.
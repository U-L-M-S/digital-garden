---
{"dg-publish":true,"permalink":"/02-resources/notes/zertifikat/","tags":["sicherheit/pki","verschluesselung/vertrauen"],"noteIcon":"","updated":"2025-10-29T12:59:11.000+01:00"}
---


>Ein [[02 - RESOURCES/Notes/Zertifikat\|Zertifikat]] ist eine digitale Bescheinigung zur [[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]] von Identitäten oder Public Keys.

>>Es wird von einer vertrauenswürdigen Zertifizierungsstelle (CA) ausgestellt und digital signiert.

>[!important] 
>**Zertifikat-Inhalte:**
>- Public Key des Inhabers
>- Identitätsinformationen (CN, OU, O)
>- Gültigkeitszeitraum
>- CA-Signatur zur Verifikation

>[!example] 
>**Zertifikat-Arten:**
>- **SSL/TLS**: [[02 - RESOURCES/Notes/HTTPS\|HTTPS]]-Websites (Domain-Validierung)
>- **Code-Signing**: Software-[[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]]
>- **Client**: Benutzer-[[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]]
>- **Root**: CA-Selbst-Signierung

>[!success] 
>Grundlage für PKI (Public Key Infrastructure) und sichere Kommunikation.
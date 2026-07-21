---
{"dg-publish":true,"permalink":"/wiki/kerberos/","tags":["ausbildung/pruefung","informatik/netzwerk","informatik/sicherheit"],"noteIcon":"","updated":"2026-07-19T03:56:27.000+02:00","dg-note-properties":{"tags":["ausbildung/pruefung","informatik/netzwerk","informatik/sicherheit"],"aliases":["Kerberos-Protokoll","Network Authentication"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/Kerberos\|Kerberos]] ist ein Netzwerk-[[wiki/Authentifizierung\|Authentifizierung]]sprotokoll für sichere Identitätsprüfung in unsicheren Netzwerken.

>>Es verwendet Tickets und symmetrische [[wiki/Verschlüsselung\|Verschlüsselung]] mit einer vertrauenswürdigen dritten Partei (KDC).

>[!important] 
>**Kerberos-Komponenten:**
>- **KDC** (Key Distribution Center)
>- **TGT** (Ticket Granting Ticket)
>- **Service Tickets**
>- **Authenticators**

>[!example] 
>**Kerberos-Ablauf:**
>1. Client → KDC: TGT anfordern
>2. KDC → Client: Verschlüsseltes TGT
>3. Client → TGS: Service Ticket anfordern  
>4. Client → Service: Mit Service Ticket authentifizieren

>[!success] 
>**Vorteile:**
>- Single Sign-On (SSO)
>- Keine Passwort-Übertragung
>- Mutual Authentication
>- Replay-Attack-Schutz

>[!note] 
>Standard in Windows Active Directory und Unix-Umgebungen.
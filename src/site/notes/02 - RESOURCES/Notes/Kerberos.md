---
{"dg-publish":true,"permalink":"/02-resources/notes/kerberos/","tags":["AP2025/neu","netzwerk/protokolle","sicherheit/authentifizierung"],"noteIcon":"","updated":"2025-10-29T12:59:07.000+01:00"}
---


>[[02 - RESOURCES/Notes/Kerberos\|Kerberos]] ist ein Netzwerk-[[02 - RESOURCES/Notes/Authentifizierung\|Authentifizierung]]sprotokoll für sichere Identitätsprüfung in unsicheren Netzwerken.

>>Es verwendet Tickets und symmetrische [[02 - RESOURCES/Notes/Verschlüsselung\|Verschlüsselung]] mit einer vertrauenswürdigen dritten Partei (KDC).

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
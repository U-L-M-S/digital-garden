---
{"dg-publish":true,"permalink":"/02-resources/notes/soap/","tags":["web-services/protokolle","xml/standards"],"noteIcon":"","updated":"2025-09-16T16:45:03.488+02:00"}
---


>[[02 - RESOURCES/Notes/SOAP\|SOAP]] (Simple Object Access Protocol) ist ein protokoll für den Austausch strukturierter Nachrichten in Web-Services.

>>Es basiert auf [[02 - RESOURCES/Notes/XML\|XML]] und ermöglicht plattformübergreifende Kommunikation zwischen Anwendungen.

>[!important] 
>**SOAP-Komponenten:**
>- **Envelope**: SOAP-Nachricht-Container
>- **Header**: Meta-Informationen (optional)
>- **Body**: Eigentliche Nachricht/Daten
>- **Fault**: Fehler-Informationen

>[!example] 
>```xml
><?xml version="1.0"?>
><soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
>  <soap:Header>
>  </soap:Header>
>  <soap:Body>
>    <getUser xmlns="http://example.com/">
>      <userId>123</userId>
>    </getUser>
>  </soap:Body>
></soap:Envelope>
>```

>[!note] 
>**SOAP vs [[02 - RESOURCES/Notes/REST API\|REST API]]:**
>- SOAP: Formal, XML-basiert, Standards (WS-Security)
>- REST: Leichtgewichtig, HTTP-basiert, flexibler
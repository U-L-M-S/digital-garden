---
{"dg-publish":true,"permalink":"/wiki/soap/","tags":["informatik/netzwerk","informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/netzwerk","informatik/code"],"aliases":["Simple Object Access Protocol","SOAP-Service","XML-Webservice"],"links":null,"created_date":"2025-09-16"}}
---


>[[wiki/SOAP\|SOAP]] (Simple Object Access Protocol) ist ein protokoll für den Austausch strukturierter Nachrichten in Web-Services.

>>Es basiert auf [[wiki/XML\|XML]] und ermöglicht plattformübergreifende Kommunikation zwischen Anwendungen.

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
>**SOAP vs [[wiki/REST API\|REST API]]:**
>- SOAP: Formal, XML-basiert, Standards (WS-Security)
>- REST: Leichtgewichtig, HTTP-basiert, flexibler
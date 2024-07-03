---
tags:
  - netzwerk
dg-publish: true
links: 
path: Notes
created: 2024-06-25 10:52
---

```mermaid
graph TD

subgraph Application
7.
    Application1[HTTP]
    Application2[FTP]
end

subgraph Presentation
6.
    Presentation1[ASCII]
    Presentation2[JPEG]
end

subgraph Session
5.
    Session1[TLS/SSL]
    Session2[NFS]
end

subgraph Transport
4.
    Transport1[TCP]
    Transport2[UDP]
end

subgraph Network
3.
    Network1[IP]
    Network2[ICMP]
end

subgraph DataLink
2.
    DataLink1[Ethernet]
    DataLink2[PPP]
end

subgraph Physical
1.
    Physical1[Kupferkabel]
    Physical2[Funkwellen]
end

  

Application --- Presentation
Presentation --- Session
Session --- Transport
Transport --- Network
Network --- DataLink
DataLink --- Physical
```
---
{"dg-publish":true,"permalink":"/02-resources/notes/availability-management/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:55:27.683+02:00"}
---


>Availability Management ist der ITIL-Prozess zur Sicherstellung, dass IT-Services die vereinbarte Verfügbarkeit erreichen und aufrechterhalten.

>>Ziel ist es, dass Services dann verfügbar sind, wenn [[02 - RESOURCES/Notes/Kunden\|Kunden]] sie benötigen - gemäß den [[02 - RESOURCES/Notes/SLA\|SLA]]s.

>[!example] Hauptaufgaben
>- Verfügbarkeitsanforderungen definieren
>- Verfügbarkeit messen und überwachen
>- Ausfallzeiten minimieren
>- Single Points of Failure identifizieren
>- Redundanzen planen
>- Availability Plans erstellen

---

## Verfügbarkeitsmetriken

|Metrik|Formel|Beispiel|
|---|---|---|
|**Verfügbarkeit**|`(Uptime / Gesamtzeit) × 100%`|99,9% = 8,76 Stunden Ausfall/Jahr|
|**MTBF**|Mean Time Between Failures|Durchschnitt zwischen Ausfällen|
|**MTTR**|Mean Time To Repair|Durchschnittliche Reparaturzeit|
|**MTRS**|Mean Time To Restore|Zeit bis Wiederherstellung|

>[!important] High Availability
>Kritische Services benötigen oft 99,9% ("Three Nines") oder höher - erreicht durch Redundanz und [[02 - RESOURCES/Notes/USV\|USV]].

---

## Techniken zur Verbesserung

>[!tip] Redundanz
>- Mehrere [[02 - RESOURCES/Notes/Server\|Server]] (Cluster, Load Balancing)
>- Redundante [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]verbindungen
>- Mehrere Stromversorgungen ([[02 - RESOURCES/Notes/USV\|USV]])
>- RAID-Systeme für Festplatten
>- Geo-Redundanz (mehrere Rechenzentren)

>[!example] Fault Tolerance
>- Automatisches Failover bei Ausfall
>- Hot-Standby-Systeme
>- Datenbank-Replikation
>- Active-Active-Konfigurationen

---

## Service Design Aspekte

>[!note] Zusammenarbeit
>Availability Management ist eng verzahnt mit:
>- [[02 - RESOURCES/Notes/Service Design\|Service Design]] - Verfügbarkeit einplanen
>- [[02 - RESOURCES/Notes/Capacity Management\|Capacity Management]] - Ressourcen für Verfügbarkeit
>- [[02 - RESOURCES/Notes/Incident Management\|Incident Management]] - Schnelle Wiederherstellung
>- [[02 - RESOURCES/Notes/Service-Level Management\|Service-Level Management]] - [[02 - RESOURCES/Notes/SLA\|SLA]]s definieren

>[!caution] Kosten vs. Verfügbarkeit
>Höhere Verfügbarkeit = höhere Kosten. Balance zwischen Geschäftsanforderungen und Budget finden.

>[!important] Downtime-Kosten
>Berechne die Kosten von Ausfällen, um Investitionen in Verfügbarkeit zu rechtfertigen.

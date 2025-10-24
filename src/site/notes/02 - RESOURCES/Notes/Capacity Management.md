---
{"dg-publish":true,"permalink":"/02-resources/notes/capacity-management/","tags":["informatik/management","GFN/LF06"],"noteIcon":"","updated":"2025-10-24T12:54:03.137+02:00"}
---


>Capacity Management ist der ITIL-Prozess zur Sicherstellung, dass die IT-Infrastruktur jederzeit ausreichende Kapazität für aktuelle und zukünftige Geschäftsanforderungen bereitstellt.

>>Ziel ist es, die richtige Menge an Ressourcen zur richtigen Zeit zum richtigen Preis verfügbar zu haben - weder zu wenig (Performance-Probleme) noch zu viel (Verschwendung).

>[!example] Hauptaufgaben
>- Kapazitätsbedarf prognostizieren
>- Ressourcenauslastung überwachen
>- Performance-Probleme identifizieren
>- Kapazitätsengpässe vermeiden
>- Kosten optimieren
>- Capacity Plans erstellen

---

## Die 3 Sub-Prozesse

|Sub-Prozess|Fokus|Beispiel|
|---|---|---|
|**Business Capacity Management**|Geschäftsanforderungen|Neuer Onlineshop: 10.000 User erwartet|
|**Service Capacity Management**|Service-Performance|[[02 - RESOURCES/Notes/Server\|Server]] für E-Mail-Service dimensionieren|
|**Component Capacity Management**|Technische Komponenten|CPU, RAM, Storage, [[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]|

>[!important] Proaktiv und Reaktiv
>- **Proaktiv**: Zukünftigen Bedarf vorhersagen und planen
>- **Reaktiv**: Akute Performance-Probleme lösen

---

## Capacity-Metriken

>[!example] Überwachte Ressourcen
>- **CPU-Auslastung** - Prozessorkapazität
>- **RAM** - Arbeitsspeicher
>- **Storage** - Festplattenspeicher
>- **[[02 - RESOURCES/Notes/Netzwerk\|Netzwerk]]bandbreite** - Datenübertragung
>- **Datenbank-Performance** - Transaktionen pro Sekunde
>- **Antwortzeiten** - User Experience

>[!tip] Monitoring
>Capacity Management nutzt [[02 - RESOURCES/Notes/Infrastructure Monitoring\|Infrastructure Monitoring]]-Tools, um Ressourcen kontinuierlich zu überwachen.

---

## Capacity Planning

```
1. Aktuelle Nutzung analysieren
2. Trends identifizieren (wächst Nutzung?)
3. Geschäftspläne berücksichtigen (neue Projekte?)
4. Zukünftigen Bedarf berechnen
5. Kapazität planen und budgetieren
6. Umsetzen und überwachen
```

>[!success] Nutzen
>- Vermeidung von Performance-Problemen
>- [[02 - RESOURCES/Notes/SLA\|SLA]]s werden eingehalten
>- Kostenoptimierung (nicht zu viel kaufen)
>- Planungssicherheit
>- Früherkennung von Engpässen

>[!note] Cloud-Kontext
>In Cloud-Umgebungen ist Capacity Management flexibler - Ressourcen können dynamisch skaliert werden (Auto-Scaling).

>[!important] Zusammenarbeit
>Capacity Management arbeitet eng mit [[02 - RESOURCES/Notes/Service-Level Management\|Service-Level Management]], [[02 - RESOURCES/Notes/Availability Management\|Availability Management]] und [[02 - RESOURCES/Notes/Service Design\|Service Design]] zusammen.

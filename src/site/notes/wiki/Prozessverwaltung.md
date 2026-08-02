---
{"dg-publish":true,"permalink":"/wiki/prozessverwaltung/","tags":["informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.978+02:00","dg-note-properties":{"tags":["informatik/system"],"aliases":["Process Management","Task-Management"],"links":null,"created_date":"2024-12-19"}}
---


> [[wiki/Betriebssystem\|Betriebssystem]]-Komponente, die Prozesse (laufende Programme) startet, stoppt, überwacht und koordiniert.

>> Sorgt für konfliktfreie Nutzung der Systemressourcen zwischen mehreren gleichzeitigen Programmen.

>[!info] Prozess-Eigenschaften
>**Jeder Prozess kann:**
>- Programmschritte abarbeiten
>- Angehalten und später fortgesetzt werden
>- Mit anderen Prozessen kommunizieren
>- Neue Prozesse erzeugen (Child-Prozesse)
>- Sich selbst beenden (Terminierung)

>[!info] Prozess-Zustände
>```
>Neu → Bereit → Laufend → Wartend → Beendet
>       ↑         ↓         ↓
>       └─────────┴─────────┘
>```

>[!info] Scheduling-Verfahren
>**CPU-Zuteilung:**
>- **Round-Robin** - jeder Prozess bekommt Zeitscheibe
>- **Priority-based** - wichtige Prozesse zuerst  
>- **First Come First Serve** - Reihenfolge nach Ankunft

>[!example] Prozess-Hierarchie
>```
>init (PID 1)
>├─ systemd-services
>├─ browser
>│  ├─ tab1
>│  ├─ tab2
>│  └─ extension
>└─ text-editor
>```

>[!tip] Task-Manager
>Windows Task-Manager oder Linux `top`/`htop` zeigen alle laufenden Prozesse mit CPU- und RAM-Verbrauch.

---
---
{"dg-publish":true,"permalink":"/02-resources/notes/prozessverwaltung/","tags":["software/betriebssystem","informatik/prozesse"],"noteIcon":"","updated":"2025-09-16T23:41:26.000+02:00"}
---


> [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]-Komponente die Prozesse (laufende Programme) startet, stoppt, überwacht und koordiniert.

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
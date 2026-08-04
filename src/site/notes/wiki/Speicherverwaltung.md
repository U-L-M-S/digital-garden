---
{"dg-publish":true,"permalink":"/wiki/speicherverwaltung/","tags":["informatik/system","informatik/hardware"],"noteIcon":"","updated":"2026-07-19T03:56:26.000+02:00","dg-note-properties":{"tags":["informatik/system","informatik/hardware"],"aliases":["Memory Management","RAM-Verwaltung"],"links":null,"created_date":"2024-12-19"}}
---


> [[wiki/Betriebssystem\|Betriebssystem]]-Komponente, die den [[wiki/RAM\|RAM]] zwischen laufenden Programmen aufteilt und verwaltet.

>> Sorgt dafür, dass jedes Programm genug Speicher bekommt, ohne andere Programme zu stören.

>[!info] Virtueller Speicher
>**Problem:** Programme brauchen mehr [[wiki/RAM\|RAM]] als verfügbar
>**Lösung:** 
>- Haupt- und Sekundärspeicher bilden **virtuellen Speicher**
>- Nicht benötigte Teile → Festplatte auslagern ([[Paging\|Paging]])
>- Bei Bedarf → zurück in [[wiki/RAM\|RAM]] laden

>[!info] Speicher-Strategien
>**Zuteilung:**
>- **Statisch** - feste Speicherblöcke
>- **Dynamisch** - Speicher nach Bedarf
>
>**Schutz:**
>- **Isolation** - Programme können sich nicht gegenseitig überschreiben
>- **Zugriffskontrolle** - nur erlaubte Speicherbereiche

>[!example] Speicher-Aufteilung
>```
>16 GB RAM System:
>├─ OS Kernel:        2 GB
>├─ Browser:          4 GB  
>├─ Office:           1 GB
>├─ Spiel:           8 GB
>└─ System-Cache:    1 GB
>```

>[!tip] Memory Leak
>Wenn Programme vergessen, nicht mehr benötigten Speicher freizugeben → System wird langsam → Neustart hilft.

---
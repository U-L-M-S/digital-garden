---
{"dg-publish":true,"permalink":"/02-resources/notes/speicherverwaltung/","tags":["software/betriebssystem","informatik/speicher"],"noteIcon":"","updated":"2025-09-16T10:51:03.158+02:00"}
---


> [[02 - RESOURCES/Notes/Betriebssystem\|Betriebssystem]]-Komponente die den [[02 - RESOURCES/Notes/RAM\|RAM]] zwischen laufenden Programmen aufteilt und verwaltet.

>> Sorgt dafür, dass jedes Programm genug Speicher bekommt ohne andere Programme zu stören.

>[!info] Virtueller Speicher
>**Problem:** Programme brauchen mehr [[02 - RESOURCES/Notes/RAM\|RAM]] als verfügbar
>**Lösung:** 
>- Haupt- und Sekundärspeicher bilden **virtuellen Speicher**
>- Nicht benötigte Teile → Festplatte auslagern ([[Paging\|Paging]])
>- Bei Bedarf → zurück in [[02 - RESOURCES/Notes/RAM\|RAM]] laden

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
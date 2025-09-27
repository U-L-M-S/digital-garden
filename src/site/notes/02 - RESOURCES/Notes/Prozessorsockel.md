---
{"dg-publish":true,"permalink":"/02-resources/notes/prozessorsockel/","tags":["#hardware/mainboard","#hardware/cpu"],"noteIcon":"","updated":"2025-09-16T23:41:26.818+02:00"}
---


> Mechanische und elektrische Verbindung zwischen [[Prozessor\|Prozessor]] und [[02 - RESOURCES/Notes/Mainboard\|Mainboard]] - bestimmt welche [[02 - RESOURCES/Notes/CPU\|CPU]] eingesetzt werden kann.

>> Verschiedene Hersteller (Intel, AMD) verwenden unterschiedliche Sockel-Typen mit spezifischen PIN-Anordnungen.

>[!info] Sockel-Typen
>**Intel-Sockel:**
>- **LGA1700** - 12./13. Generation (Alder Lake, Raptor Lake)
>- **LGA1200** - 10./11. Generation (Comet Lake, Rocket Lake)
>- **LGA2066** - High-End X-Series
>
>**AMD-Sockel:**
>- **AM5** - Ryzen 7000 Serie (DDR5, PCIe 5.0)
>- **AM4** - Ryzen 1000-5000 Serie
>- **TR4/TRX40** - Threadripper Serie

>[!warning] Kompatibilität
>- Sockel MUSS zur [[02 - RESOURCES/Notes/CPU\|CPU]] passen
>- Unterschiedliche PIN-Anzahl und -Anordnung
>- Auch [[Chipsatz\|Chipsatz]] muss [[02 - RESOURCES/Notes/CPU\|CPU]] unterstützen

>[!example] 
>```
>Intel Core i5-12600K → benötigt LGA1700-Sockel
>AMD Ryzen 5 5600X   → benötigt AM4-Sockel
>```

---
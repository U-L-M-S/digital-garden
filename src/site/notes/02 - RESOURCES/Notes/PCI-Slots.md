---
{"dg-publish":true,"permalink":"/02-resources/notes/pci-slots/","tags":["hardware/mainboard","hardware/erweiterung"],"noteIcon":"","updated":"2025-09-16T23:41:26.788+02:00"}
---


> Erweiterungssteckplätze für zusätzliche Hardware wie Grafikkarten, Netzwerkkarten oder Soundkarten.

>> PCI-Express (PCIe) hat das veraltete PCI-System ersetzt und bietet höhere Übertragungsgeschwindigkeiten.

>[!info] PCIe-Varianten
>**Nach Anzahl Lanes:**
>- **PCIe x1** - 1 Lane, kleine Karten (WLAN, Sound)
>- **PCIe x4** - 4 Lanes, NVMe-SSDs
>- **PCIe x8** - 8 Lanes, Spezielle Anwendungen
>- **PCIe x16** - 16 Lanes, Grafikkarten

>[!info] PCIe-Generationen
>|Generation|Jahr|Bandwidth pro Lane|x16 Gesamtbandbreite|
>|---|---|---|---|
>|PCIe 1.0|2003|250 MB/s|4 GB/s|
>|PCIe 2.0|2007|500 MB/s|8 GB/s|
>|PCIe 3.0|2010|1 GB/s|16 GB/s|
>|PCIe 4.0|2017|2 GB/s|32 GB/s|
>|PCIe 5.0|2019|4 GB/s|64 GB/s|

>[!example] Typische Slot-Aufteilung
>```
>1× PCIe x16 (GPU)
>2× PCIe x1  (WLAN, Sound)
>1× PCIe x4  (NVMe-SSD)
>```

>[!note] Abwärtskompatibilität
>Größere Slots können kleinere Karten aufnehmen (PCIe x16 kann x1-Karte aufnehmen).

---
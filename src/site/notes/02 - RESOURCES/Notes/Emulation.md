---
{"dg-publish":true,"permalink":"/02-resources/notes/emulation/","tags":["informatik/virtualisierung"],"noteIcon":"","updated":"2025-07-18T15:57:57.000+02:00"}
---

> **Emulation** ist das **Nachbilden** von Hardware oder [[02 - RESOURCES/Notes/Software\|Software]], sodass ein System auf einem anderen System so läuft, als wäre es das Original.

> [!note] Was wird emuliert?
> 
> - **Hardware-Plattformen** (z. B. alte Konsolen, andere CPU-Architekturen)
>     
> - **Betriebssysteme** (z. B. Windows auf macOS)
>     
> - **Prozessoren** (z. B. x86 auf ARM)
>     

> [!tip] Warum Emulation?
> 
> - **Alte Software/Spiele** auf moderner Hardware lauffähig machen
>     
> - **Plattformunabhängigkeit**
>     
> - **Tests und Debugging** auf anderer Architektur (z. B. ARM → x86)
>     
> - **Kein direkter Zugriff** auf Original-Hardware nötig
>     

---

> 🔄 **Unterschied zu [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]] und [[02 - RESOURCES/Notes/Emulation\|Emulation]]**
> 
> > Simulation stellt **Verhalten** nach – keine echte Ausführung oder Hardware-Umgebung.

| [[02 - RESOURCES/Notes/Virtualisierung\|Virtualisierung]]             | [[02 - RESOURCES/Notes/Emulation\|Emulation]]                | [[02 - RESOURCES/Notes/Simulation\|Simulation]]                      |
| ------------------------------- | ---------------------------- | ----------------------------------- |
| Echte Ausführung auf echter CPU | Nachbildung fremder Hardware | Nachbildung des **Verhaltens**      |
| Sehr schnell (nativ)            | Langsam (wegen Übersetzung)  | Geschwindigkeit variabel            |
| Beispiel: VMware, KVM           | Beispiel: QEMU, Yuzu         | Beispiel: GNS3, Flugsimulator, NS-3 |


---

> [!note] Typische Emulatoren:
> 
> - **QEMU** – Emulator für viele Architekturen (z. B. x86, ARM, RISC-V)
>     
> - **DOSBox** – DOS-Umgebung für alte Spiele
>     
> - **Wine** – Führt Windows-Programme auf Linux/macOS aus (_Kompatibilitätsschicht_)
>     
> - **RetroArch**, **Yuzu**, **PCSX2** – Emulatoren für Spielekonsolen
>     

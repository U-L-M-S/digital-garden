---
{"dg-publish":true,"permalink":"/02-resources/notes/simulation/","tags":["informatik/virtualisierung"],"noteIcon":"","updated":"2025-10-29T12:59:10.246+01:00"}
---

> **Simulation** ist das **Nachstellen von realen Prozessen oder Systemen**, um deren Verhalten unter bestimmten Bedingungen zu analysieren – ohne sie physisch auszuführen.

> [!note] Was wird simuliert?
> 
> - **Physikalische Prozesse** (z. B. Wetter, Strömung, Elektronik)
>     
> - **Technische Systeme** (z. B. Netzwerke, Verkehr, Produktion)
>     
> - **Verhalten** von Software oder Systemen in Testumgebungen
>     
> - **Trainingsszenarien** (z. B. Flugsimulatoren)
>     

> [!tip] Warum Simulation?
> 
> - **Gefahrlose Tests** von Szenarien
>     
> - **Kostenersparnis** (keine reale Hardware nötig)
>     
> - **Analyse** von komplexen oder seltenen Situationen
>     
> - **Vorhersagen & Optimierung** von Verhalten/Ergebnissen
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

> [!note] Typische Simulations-Tools:
> 
> - **GNS3** – Netzwerksimulation
>     
> - **NS-3** – Netzwerkverhalten (Paket-Level)
>     
> - **Simulink** – Modellierung technischer Systeme
>     
> - **OMNeT++**, **AnyLogic**, **Arena** – allgemeine System- und Prozesssimulation
>     
> - **Flugsimulatoren** – für Ausbildung und Training
>     

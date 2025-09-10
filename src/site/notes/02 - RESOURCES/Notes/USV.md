---
{"dg-publish":true,"permalink":"/02-resources/notes/usv/","tags":["elektrotechnik","informatik/hardware"],"noteIcon":"","updated":"2025-09-10T17:00:14.261+02:00"}
---

> Schützt IT-Systeme vor **Stromausfällen** und anderen **Stromproblemen**.  
>> Ziel: Stromversorgung bleibt auch bei Ausfall der Hauptstromquelle für kurze Zeit aktiv.

> [!note] Wovor schützt eine USV?
> 
> - **Stromausfall**
> - **Unterspannung**
> - **Überspannung**
> - **Frequenzschwankungen**
> - **Spannungsspitzen (Transienten)**
> - **Netzrauschen**

---

> [!tip] Arten von USV:
> 
> - **Offline / Standby (VFD)**  
>     Billigste Variante, schaltet nur bei Stromausfall auf Batterie um.
>     
> - **Line-Interactive (VI)**  
>     Regelt leichte Schwankungen und schaltet bei Ausfall auf Batterie.
>     
> - **Online / Doppelwandler (VFI)**  
>     Dauerhafte Trennung vom Stromnetz, sauberste Versorgung durch konstanten Wechselrichterbetrieb.
>     

---

> [!example] Beispiel:
> 
> - [[02 - RESOURCES/Notes/Server\|Server]] im Rechenzentrum hängen meist an einer **Online-USV**.
> - Ein einzelner Büro-PC bekommt oft nur eine **Offline-USV**.

$$
S = U \times I
$$

- **S** = Scheinleistung in **VA**  
- **U** = Spannung in **[[02 - RESOURCES/Notes/Volt\|Volt]] (V)**  
- **I** = Stromstärke in **[[02 - RESOURCES/Notes/Ampere\|Ampere]] (A)**

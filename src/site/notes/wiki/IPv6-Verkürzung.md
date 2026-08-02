---
{"dg-publish":true,"permalink":"/wiki/i-pv6-verkuerzung/","tags":["informatik/netzwerk"],"noteIcon":"","updated":"2026-07-19T03:56:26.758+02:00","dg-note-properties":{"aliases":[],"created":"2024-07-30 09:14","links":["[[wiki/IPv6\|IPv6]]"],"path":["Notes"],"tags":["informatik/netzwerk"]}}
---

>Um [[wiki/IPv6\|IPv6]] lesbarer zu machen, kann man es verkürzen.
Hier sind die Regeln, denen man folgen muss:
>- Führende Nullen in jeder Gruppe können weggelassen werden. 
 >> <mark style="background: #FFF3A3A6;">0db8 -> db8</mark>
>- Gruppen von aufeinanderfolgenden Nullen können durch zwei Doppelpunkte "::" ersetzt werden, aber <mark style="background: #FFF3A3A6;">nur einmal pro Adresse</mark>. Dies kann nur gemacht werden, wenn es keine Verwechslungsmöglichkeiten gibt. 
>> <mark style="background: #FFF3A3A6;">0000:0000:0000 -> ::</mark>

>[!important] 
><mark style="background: #FFF3A3A6;">0000:0000 -> ::</mark>
>ABER
> 8a2e:<mark style="background: #FFF3A3A6;">0000</mark>:7334 -> 8a2e:<mark style="background: #FFF3A3A6;">0</mark>:7334


| 2001 | 0db8 | 85a3 | 0000 | 0000 | 8a2e | 0000 | 7334 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 2001 | db8  | 85a3 |      |      | 8a2e |  0   | 7334 |

**2001:0db8:85a3:0000:0000:8a2e:0000:7334**  -> **2001:db8:85a3::8a2e:0:7334**

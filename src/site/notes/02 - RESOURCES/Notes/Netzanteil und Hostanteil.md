---
{"dg-publish":true,"permalink":"/02-resources/notes/netzanteil-und-hostanteil/","tags":["netzwerk/ip","netzwerk/subnet-mask","netzwerk/network-portion","netzwerk/host"],"noteIcon":""}
---

Überall, wo 255 sich befindet, sind die Bereiche statisch([[02 - RESOURCES/Notes/static\|static]]) und werden als [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] bezeichnet; dieser Bereich kann nicht geändert werden. Alles, was unter 0 liegt, ist dynamisch([[02 - RESOURCES/Notes/dynamic\|dynamic]]) und wird als [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] bezeichnet.

|             | -   | Netzanteil | Netzanteil | Netzanteil | Hostanteil |
| :---------: | --- | :--------: | :--------: | :--------: | :--------: |
| Subnet Mask | -   |    255     |    255     |    255     |     0      |
|     IP      | -   |    192     |    168     |     1      |    204     |

{ #099b19}


>[!important] 
>Es kann passiert dass das [[02 - RESOURCES/Notes/Netzwerkmaske\|Netzwerkmaske]] nicht in eine 
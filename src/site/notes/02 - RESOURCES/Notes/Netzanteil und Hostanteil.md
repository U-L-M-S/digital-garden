---
{"dg-publish":true,"permalink":"/02-resources/notes/netzanteil-und-hostanteil/","tags":["netzwerk/ip","netzwerk/subnet-mask","netzwerk/network-portion","netzwerk/host"],"noteIcon":"","updated":"2024-10-17T20:37:30.382+02:00"}
---

Überall, wo 255 sich befindet, sind die Bereiche statisch([[02 - RESOURCES/Notes/static\|static]]) und werden als [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] bezeichnet; dieser Bereich kann nicht geändert werden. Alles, was unter 0 liegt, ist dynamisch([[02 - RESOURCES/Notes/dynamic\|dynamic]]) und wird als [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] bezeichnet.

|             | -   | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] |
| :---------: | --- | :--------: | :--------: | :--------: | :--------: |
| [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]] | -   |    255     |    255     |    255     |     0      |
|     [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]]      | -   |    192     |    168     |     1      |    204     |

---
{"dg-publish":true,"permalink":"/02-resources/notes/netzanteil-und-hostanteil/","tags":["netzwerk/ip","netzwerk/subnet-mask","netzwerk/network-portion","netzwerk/host"]}
---

Überall, wo 255 sich befindet, sind die Bereiche statisch([[02 - RESOURCES/Notes/static\|static]]) und werden als [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] bezeichnet; dieser Bereich kann nicht geändert werden. Alles, was unter 0 liegt, ist dynamisch([[02 - RESOURCES/Notes/dynamic\|dynamic]]) und wird als [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] bezeichnet.

|             | -   | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] |
| :---------: | --- | :--------: | :--------: | :--------: | :--------: |
| [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]] | -   |    255     |    255     |    255     |     0      |
|     [[02 - RESOURCES/Notes/IP\|IP]]      | -   |    192     |    168     |     1      |    204     |

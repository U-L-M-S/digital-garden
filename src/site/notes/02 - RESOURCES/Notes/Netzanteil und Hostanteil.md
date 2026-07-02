---
{"dg-publish":true,"permalink":"/02-resources/notes/netzanteil-und-hostanteil/","tags":["informatik/netzwerk/ip","informatik/netzwerk/subnet-mask","informatik/netzwerk/network-portion","informatik/netzwerk/host"],"noteIcon":"","updated":"2026-05-12T16:02:39.984+02:00","dg-note-properties":{"created":"2023-09-13 13:31","links":null,"path":"Notes","tags":["informatik/netzwerk/ip","informatik/netzwerk/subnet-mask","informatik/netzwerk/network-portion","informatik/netzwerk/host"]}}
---

Überall, wo 255 sich befindet, sind die Bereiche statisch ([[02 - RESOURCES/Notes/static\|static]]) und werden als [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] bezeichnet; dieser Bereich kann nicht geändert werden. Überall, wo eine 0 steht, ist es dynamisch ([[02 - RESOURCES/Notes/dynamic\|dynamic]]) und wird als [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] bezeichnet.

|             | -   | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Netzanteil\|Netzanteil]] | [[02 - RESOURCES/Notes/Hostanteil\|Hostanteil]] |
| :---------: | --- | :--------: | :--------: | :--------: | :--------: |
| [[02 - RESOURCES/Notes/Subnet Mask\|Subnet Mask]] | -   |    255     |    255     |    255     |     0      |
|     [[02 - RESOURCES/Notes/IP\|02 - RESOURCES/Notes/IP]]      | -   |    192     |    168     |     1      |    204     |

---
{"dg-publish":true,"permalink":"/02-resources/notes/base64/","tags":["informatik/code","sicherheit/it-sicherheit"],"noteIcon":"","updated":"2025-09-27T01:32:43.946+02:00"}
---

>Es ist ein Kodierungsverfahren, das binäre Daten (wie z.B. Bilder oder Dateien) in eine Zeichenkette aus [[02 - RESOURCES/Notes/ASCII\|ASCII]]-Zeichen umwandelt. 
>>Es wird oft verwendet, um Daten über Protokolle zu übertragen, die nur Text unterstützen (z.B. E-Mail oder JSON). 
>>Base64 verwendet ein 64-Zeichen-Alphabet, bestehend aus Buchstaben (A-Z, a-z), Ziffern (0-9), sowie den Symbolen `+` und `/`.

>[!example] 
>Das Wort "Hi" In Binär ([[02 - RESOURCES/Notes/ASCII\|ASCII]]-Werte) ist **72, 105**. 
>In [[02 - RESOURCES/Notes/Base64\|Base64]] lautet  **SGK=**

Um ein Wort in [[02 - RESOURCES/Notes/Base64\|Base64]] umzuwandeln muss man erstmal jedes Buchstaben in [[02 - RESOURCES/Notes/Dezimal\|Dezimal]] umstelle (Lautet [[02 - RESOURCES/Notes/ASCII\|ASCII]]-Tabell) und diesen Werten in [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]] umstellen.

Hi -> 72 und 105 -> `01001000` `01101001` 

Als nächstes, muss man die [[02 - RESOURCES/Notes/Binärzahl\|Binärzahl]]en zusammen setzen und diese in 6 [[02 - RESOURCES/Notes/Bit\|Bit]]s-Blöcken teilen.
Achtung: Wenn [[02 - RESOURCES/Notes/Bit\|Bit]]s fehlen müssen die [[02 - RESOURCES/Notes/Bit\|Bit]]s-Stellen mit **Nullen** eingesetzt werden ([[02 - RESOURCES/Notes/Bits Padding\|Bits Padding]]).

`0100100001101001`  -> <mark style="background: #FFF3A3A6;">010010</mark><mark style="background: #BBFABBA6;">000110</mark><mark style="background: #ABF7F7A6;">1001</mark>00


Und jetzt muss du die neuen [[02 - RESOURCES/Notes/Bit\|Bit]]-Werten mit die [[02 - RESOURCES/Notes/Base64 Tabelle\|Base64 Tabelle]] ausgleichen und "=" an Ende einsetzen.

<mark style="background: #FFF3A3A6;">S</mark><mark style="background: #BBFABBA6;">G</mark><mark style="background: #ABF7F7A6;">K</mark>=


___

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/base64-tabelle/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





| Wert | Zeichen |
| ---- | ------- |
| 0    | A       |
| 1    | B       |
| 2    | C       |
| 3    | D       |
| 4    | E       |
| 5    | F       |
| 6    | G       |
| 7    | H       |
| 8    | I       |
| 9    | J       |
| 10   | K       |
| 11   | L       |
| 12   | M       |
| 13   | N       |
| 14   | O       |
| 15   | P       |
| 16   | Q       |
| 17   | R       |
| 18   | S       |
| 19   | T       |
| 20   | U       |
| 21   | V       |
| 22   | W       |
| 23   | X       |
| 24   | Y       |
| 25   | Z       |
| 26   | a       |
| 27   | b       |
| 28   | c       |
| 29   | d       |
| 30   | e       |
| 31   | f       |
| 32   | g       |
| 33   | h       |
| 34   | i       |
| 35   | j       |
| 36   | k       |
| 37   | l       |
| 38   | m       |
| 39   | n       |
| 40   | o       |
| 41   | p       |
| 42   | q       |
| 43   | r       |
| 44   | s       |
| 45   | t       |
| 46   | u       |
| 47   | v       |
| 48   | w       |
| 49   | x       |
| 50   | y       |
| 51   | z       |
| 52   | 0       |
| 53   | 1       |
| 54   | 2       |
| 55   | 3       |
| 56   | 4       |
| 57   | 5       |
| 58   | 6       |
| 59   | 7       |
| 60   | 8       |
| 61   | 9       |
| 62   | +       |
| 63   | /       |


</div></div>

---
{"dg-publish":true,"permalink":"/02-resources/notes/hamming-code-7-4/","tags":["algorithmus","netzwerk","hardware"],"noteIcon":"","updated":"2025-09-05T10:12:29.712+02:00"}
---

>Hamming-Code oder besser gesagt (7,4)-Hamming-Code ist ein Code bei den Daten (Nachricht) gesendet wird + eine Prüfsumme. 
>>Die Prüfsumme  ist nur da zu überprüfen ob ein Bit-Fehler (Bit-Invertierung) passiert ist.
 
 Die ersten 4 Bits sind die Nachricht und die letzten 3 sind die Prüfbits.
$x_{1}$ = 0
$x_{2}$ = 0
$x_{3}$ = 1
$x_{4}$ = 1
$x_{5}$ = 1
$x_{6}$ = 0
$x_{7}$ = 1


| $x_{1}$ | $x_{2}$ | $x_{3}$ | $x_{4}$ | $x_{5}$ | $x_{6}$ | $x_{7}$ |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 1 | 1 | 0       | 0       |         |
 

Um die Nachricht zu überprüfen lautet folgende Regel:
$x_{5}$ = ($x_{2}$ + $x_{3}$ + $x_{4}$) mod 2 
$x_{6}$ = ($x_{1}$ + $x_{3}$ + $x_{4}$) mod 2
$x_{7}$ = ($x_{1}$ + $x_{2}$ + $x_{4}$) mod 2 

Das heißt die Ergebnisse von $x_{5}$(1), $x_{6}$(0), $x_{7}$(1) müssen mit den Formel einstimmen.

  $x_{5}$ = ($x_{2}$ + $x_{3}$ + $x_{4}$) mod 2 
  $x_{5}$ = (0 + 1 +1) mod 2
  $x_{5}$ = (2) mod 2 
<mark style="background: #FF5582A6;">  $x_{5}$ = 0</mark> ❌
  
$x_{6}$ = ($x_{1}$ + $x_{3}$ + $x_{4}$) mod 2
$x_{6}$ = (0+1+1) mod 2
$x_{6}$ = (2) mod 2
$x_{6}$ = (2) mod 2
<mark style="background: #BBFABBA6;">$x_{6}$ = 0</mark> ✅

$x_{7}$ = (0+0+1) mod 2
$x_{7}$ = (1) mod 2
<mark style="background: #BBFABBA6;">$x_{7}$ = 1</mark> ✅


| $x_{1}$ | $x_{2}$ | $x_{3}$ | $x_{4}$ | $x_{5}$ | $x_{6}$ | $x_{7}$ |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 1 | <mark style="background: #FF5582A6;">1</mark> | <mark style="background: #BBFABBA6;">0</mark>       | <mark style="background: #BBFABBA6;">0</mark>       |         |


Wie wir oben sehen können $x_{5}$ stimmt nicht.
um zu überprüfen welche Bit in die Nachricht falsch ist müssen wir nur die 3 Formel unter einander stellen (ohne mod 2) und die Bits vergleichen.

$x_{5}$ =         $x_{2}$   $x_{3}$   $x_{4}$  ❌
$x_{6}$ = $x_{1}$           $x_{3}$   $x_{4}$  ✅
$x_{7}$ = $x_{1}$    $x_{2}$          $x_{4}$  ✅

Das heißt den Bit-Fehler soll in $x_{5}$, $x_{2}$, $x_{3}$, $x_{4}$ stehen, aber da $x_{6}$, $x_{7}$  und alle ihren  Nachfolger richtig sind. Muss den Bit-Fehler nut $x_{5}$ sein.

Korrekt Codewört: **0011001**

___

$x_{1}$ = 1
$x_{2}$ = 1
$x_{3}$ = 1
$x_{4}$ = 0
$x_{5}$ = 1
$x_{6}$ = 0
$x_{7}$ = 1
 
 | $x_{1}$ | $x_{2}$ | $x_{3}$ | $x_{4}$ | $x_{5}$ | $x_{6}$ | $x_{7}$ |
 | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
 | 1       | 1       | 1       | 0       | <mark style="background: #FF5582A6;">1</mark>       | <mark style="background: #BBFABBA6;">0</mark>       | <mark style="background: #FF5582A6;">1</mark>        |

$x_{5}$ = (1 + 1 + 0) mod 2
$x_{5}$ = 2 mod 2 
<mark style="background: #FF5582A6;">$x_{5}$ = 0</mark> ❌

$x_{6}$ = (1 + 1 + 0) mod 2
$x_{6}$ = 2 mod 2
<mark style="background: #BBFABBA6;">$x_{6}$ = 0</mark> ✅

$x_{7}$ = (1+ 1 + 0) mod 2 
$x_{7}$ = 2 mod 2 
<mark style="background: #FF5582A6;">$x_{7}$ = 0</mark> ❌

$x_{5}$ =         $x_{2}$   $x_{3}$   $x_{4}$  ❌
$x_{6}$ = $x_{1}$           $x_{3}$   $x_{4}$  ✅
$x_{7}$ = $x_{1}$    $x_{2}$          $x_{4}$  ❌

Da wir 2 Fehler haben ($x_{5}$ und $x_{7}$) müssen wir vergleichen welche Xs sie gemeinsam haben ($x_{2}$ und $x_{4}$), aber da $x_{4}$ zu $x_{6}$ gehört und da kein Fehler ausgetaucht ist. Können wir mit Sicherheit sagen, dass $x_{2}$ eine Bit-Fehler enthält.

Korrekt Codewört: **1010101**
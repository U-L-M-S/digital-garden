---
{"dg-publish":true,"permalink":"/wiki/php-variable/","tags":["informatik/code"],"noteIcon":"","updated":"2026-07-19T03:56:26.868+02:00","dg-note-properties":{"aliases":["PHP Variable"],"created_date":"2024-09-05","links":null,"tags":["informatik/code"]}}
---

[[wiki/Variable\|Variable]]n in [[wiki/PHP\|PHP]] werden deklariert mit einen `$`.
>>Sie brauchen keine [[wiki/Datentyp\|Datentyp]]spezifikationen.

```php
<?php
	$name = 'Anna';
	$age = 24;

?>
```

[[wiki/PHP Variable\|PHP Variable]]n können soeben mit `$` angezeigt werden in die `echo` [[wiki/Funktion\|Funktion]].

```php
<?php
	$name = 'Anna';
	$age = 24;

	echo 'Hi, my name is ' . $name . ' and I\'m ' . $age . ' years old.'
?>
```

>[!hint] 
>Das `.` hier entspricht das `+` bei [[wiki/Python\|Python]] und [[wiki/Java\|Java]],

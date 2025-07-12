---
{"dg-publish":true,"permalink":"/02-resources/notes/php-variable/","tags":["code/PHP"],"noteIcon":"","updated":"2025-07-12T13:31:41.311+02:00"}
---

[[02 - RESOURCES/Notes/Variable\|Variable]]n in [[02 - RESOURCES/Notes/PHP\|PHP]] werden deklariert mit einen `$`.
>>Sie brauchen keine [[02 - RESOURCES/Notes/Datentyp\|Datentyp]]spezifikationen.

```php
<?php
	$name = 'Anna';
	$age = 24;

?>
```

[[02 - RESOURCES/Notes/PHP Variable\|PHP Variable]]n können soeben mit `$` angezeigt werden in die `echo` [[02 - RESOURCES/Notes/Funktion\|Funktion]].

```php
<?php
	$name = 'Anna';
	$age = 24;

	echo 'Hi, my name is ' . $name . ' and I\'m ' . $age . ' years old.'
?>
```

>[!hint] 
>Das `.` hier entspricht das `+` bei [[02 - RESOURCES/Notes/Python\|Python]] und [[02 - RESOURCES/Notes/Java\|Java]],

---
{"dg-publish":true,"permalink":"/02-resources/notes/php-variable/","tags":["code/PHP"],"noteIcon":"","updated":"2025-05-05T15:23:07.000+02:00"}
---

[[02 - RESOURCES/Notes/Variable\|Variable]]n in [[02 - RESOURCES/Notes/PHP\|PHP]] werden deklariert mit einen `$`.
>>Sie brauchen keine [[02 - RESOURCES/Notes/Datentyp\|Datentyp]]spezifikationen.

```php
<?php
	$name = 'Anna';
	$age = 24;

?>
```

[[02 - RESOURCES/Notes/PHP Variable\|PHP Variable]]n können soeben mit `$` angezeigt werden in die `echo` [[02 - RESOURCES/Notes/Funktion Programmierung\|Funktion Programmierung]].

```php
<?php
	$name = 'Anna';
	$age = 24;

	echo 'Hi, my name is ' . $name . ' and I\'m ' . $age . ' years old.'
?>
```

>[!hint] 
>Das `.` hier entspricht das `+` bei [[02 - RESOURCES/Notes/Python\|Python]] und [[02 - RESOURCES/Notes/Java\|Java]],

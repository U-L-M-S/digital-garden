---
{"dg-publish":true,"permalink":"/02-resources/notes/php-fuer-frontend/","tags":["code/PHP"],"updated":"2024-09-05T16:22:45.603+02:00"}
---

>Damit man mit [[00 - PROJECTS/PHP\|PHP]] in den Frontend arbeiten kann braucht man mit den `<body>` zu arbeiten und da die [[00 - PROJECTS/PHP\|PHP]]-Syntax arbeiten **ODER** man arbeitet in ein extra [[00 - PROJECTS/PHP\|PHP]]-Datei mit Funktionen und importiert diese in den index.html Datei.

```php
<!DOCTYPE html>

<html>

    <head>

        <title>PHP Test</title>

    </head>

    <body>

        <?php

            echo 'Hello world';

        ?>
  

    </body>

</html>
```
![PHP für Frontend-20240905115538632.png](/img/user/02%20-%20RESOURCES/Files/PHP%20f%C3%BCr%20Frontend-20240905115538632.png)

Man kann auch HTML-Syntax verwenden um den Format umzupassen.
```php
<!DOCTYPE html>

<html>

    <head>

        <title>PHP Test</title>

    </head>

    <body>
  

        <?php

            echo '<h1>Hello world</h1>';

        ?>


    </body>

</html>
```

![PHP für Frontend-20240905122722946.png](/img/user/02%20-%20RESOURCES/Files/PHP%20f%C3%BCr%20Frontend-20240905122722946.png)

___
>Wie bereits gesagt wurde. Man kann [[00 - PROJECTS/PHP\|PHP]]-Werten importieren, oder besser gesagt Funktionen.

functions.php:
```php
<?php

function getYear() {

    return date('Y');
}
  
function calculateDaysUntilBirthday($birthday) {

    $currentDate = new DateTime();

    $nextBirthday = new DateTime($birthday);

    if ($nextBirthday < $currentDate) {

        $nextBirthday->modify('+1 year');

    }

  

    $interval = $currentDate->diff($nextBirthday);

    return $interval->days;
}

?>
```

index.php:
```php
        <?php
        <h1>Year</h1>
            include 'functions.php';

            echo "The year is: ". getYear();
        ?>

        <h1>Calc Birthday</h1>

        <?php
        
            $birthday = '2024-12-25';

            echo "<p>There are " . calculateDaysUntilBirthday($birthday) . " days left until your next birthday!</p>";

        ?>
```
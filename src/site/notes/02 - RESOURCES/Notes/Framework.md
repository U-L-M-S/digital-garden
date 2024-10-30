---
{"dg-publish":true,"permalink":"/02-resources/notes/framework/","tags":["code/java/","code/python"],"noteIcon":"","updated":"2024-10-25T11:33:45.000+02:00"}
---

>Es ist ein Softwaregerüst, das vorgefertigte Bausteine und Regeln zur Verfügung stellt, um Anwendungen effizient zu entwickeln. 
>Es definiert oft eine Struktur, sodass Entwickler bestimmte Funktionen nutzen können, ohne alles selbst zu programmieren. 
>>Ein Framework spart Zeit und sorgt für eine einheitliche Code-Organisation.

# [[02 - RESOURCES/Notes/Django\|Django]]
```python
# views.py in Django
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello, World!")  # Gibt Text als HTTP-Antwort zurück
```

# [[02 - RESOURCES/Notes/Spring\|Spring]]
```java
// Controller-Klasse in Spring Boot
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!"; // Gibt Text als Antwort für Webanfrage zurück
    }
}
```
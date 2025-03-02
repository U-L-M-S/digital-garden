---
{"dg-publish":true,"permalink":"/02-resources/notes/framework/","tags":["code/java/","code/python"],"noteIcon":"","updated":"2024-11-22T21:30:13.530+01:00"}
---

>Es ist ein **Gerüst**, das in verschiedenen Bereichen (z. B. Softwareentwicklung, [[02 - RESOURCES/Notes/Projektmanagement\|Projektmanagement]]) verwendet wird, um Prozesse oder Aufgaben zu erleichtern und zu strukturieren.

# Allgemein:

- Es bietet **vorgefertigte Bausteine**, **Regeln** und **Strukturen**, die den Anwender dabei unterstützen, effizient und einheitlich zu arbeiten.
- Ein Framework dient als **Hilfsmittel**, um nicht bei null zu beginnen, sondern auf bestehenden Konzepten und Funktionen aufzubauen.

# In der Softwareentwicklung:

- Ein **[[02 - RESOURCES/Notes/Software\|Software]]-Framework** ist ein spezielles Tool, das Entwicklern hilft, Anwendungen schneller und mit weniger Aufwand zu erstellen.
- Es stellt eine **Codebasis** und **Standardfunktionen** bereit, sodass Entwickler sich auf die spezifischen Anforderungen ihrer Anwendung konzentrieren können, ohne grundlegende Funktionen neu zu programmieren.
- Ein Framework spart Zeit, fördert die Konsistenz im Code und unterstützt oft die Automatisierung bestimmter Aufgaben.

## Beispiele:

1. **Allgemeines Framework**:
    
    - **[[02 - RESOURCES/Notes/Scrum Framework\|Scrum Framework]]**: Ein methodisches Arbeitsgerüst zur Organisation von Projekten und Teams, das klare Rollen, Artefakte und Ereignisse definiert.
    
2. **[[02 - RESOURCES/Notes/Software\|Software]]-Frameworks**:
    
    - **[[02 - RESOURCES/Notes/Django\|Django]]**:        
        ```python
        from django.http import HttpResponse
        
        def hello(request):
            return HttpResponse("Hello, World!")  # Gibt Text als HTTP-Antwort zurück
        ```
        
        [[02 - RESOURCES/Notes/Django\|Django]] erleichtert die Webentwicklung durch vorgefertigte Funktionen wie URL-[[02 - RESOURCES/Notes/Routing\|Routing]], Datenbankzugriffe und Vorlagen.
        
    - **[[02 - RESOURCES/Notes/Spring\|Spring]]**:
        ```java
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
        
		[[02 - RESOURCES/Notes/Spring\|Spring]] bietet ein Framework für [[03 - ARCHIVES/Abgeschlossen/Java\|Java]]-Anwendungen mit umfangreichen Funktionen für Webentwicklung und Backend-Systeme.
        

# Fazit:

Ein Framework, ob allgemein oder in der Programmierung, ist ein Werkzeug, das Prozesse standardisiert und vereinfacht, damit Anwender effizienter arbeiten können.
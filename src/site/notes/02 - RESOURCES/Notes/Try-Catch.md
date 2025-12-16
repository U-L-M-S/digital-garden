---
{"dg-publish":true,"permalink":"/02-resources/notes/try-catch/","tags":["informatik/code","informatik/programmierung","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T14:34:06.525+01:00"}
---

>Try-Catch ist ein Konstrukt zur Behandlung von [[02 - RESOURCES/Notes/Exception\|Exception]]s (Ausnahmen) in der Programmierung.
>>Mit try-catch kann man Fehler abfangen und behandeln, ohne dass das Programm abstürzt.

```
Try-Catch Struktur:

┌────────────────────────────────────┐
│ try {                              │
│   ┌──────────────────────┐         │
│   │ Code, der Fehler     │         │
│   │ verursachen könnte   │         │
│   └──────────────────────┘         │
│ }                                  │
├────────────────────────────────────┤
│ catch (ExceptionType e) {          │
│   ┌──────────────────────┐         │
│   │ Fehlerbehandlung     │         │
│   └──────────────────────┘         │
│ }                                  │
├────────────────────────────────────┤
│ finally {                          │
│   ┌──────────────────────┐         │
│   │ Immer ausführen      │         │
│   │ (z.B. Aufräumen)     │         │
│   └──────────────────────┘         │
│ }                                  │
└────────────────────────────────────┘

Ablauf mit Try-Catch:

    Start
      │
      ▼
  ┌───────┐
  │ try { │
  └───┬───┘
      │
      ▼
  ┌───────────┐      Kein Fehler
  │ Code      │─────────────┐
  │ ausführen │             │
  └─────┬─────┘             │
        │                   │
        │ Fehler!           │
        ▼                   │
  ┌──────────┐              │
  │ Exception│              │
  │ geworfen │              │
  └─────┬────┘              │
        │                   │
        ▼                   │
  ┌──────────┐              │
  │ catch {  │              │
  │ Handle   │              │
  │ Error    │              │
  └─────┬────┘              │
        │                   │
        └───────┬───────────┘
                │
                ▼
          ┌──────────┐
          │ finally  │ ← Immer!
          └─────┬────┘
                │
                ▼
              Weiter

Mehrere Catch-Blöcke:

try {
    Code...
}
    │
    ├─> FileNotFoundException
    │   └─> catch (FileNotFoundException e)
    │
    ├─> IOException
    │   └─> catch (IOException e)
    │
    └─> Exception (alle anderen)
        └─> catch (Exception e)

Visuelle Darstellung - Exception Handling:

OHNE Try-Catch:
┌────────────┐
│ Code läuft │
└─────┬──────┘
      │
      ▼
  ┌───────┐
  │ Fehler│  ← CRASH!
  └───┬───┘
      │
      ▼
  ┌──────┐
  │ STOP │  ← Programm endet
  └──────┘

MIT Try-Catch:
┌────────────┐
│ try {      │
│ Code läuft │
└─────┬──────┘
      │
      ▼
  ┌───────┐
  │ Fehler│
  └───┬───┘
      │
      ▼
┌─────────────┐
│ catch {     │  ← Fehler gefangen!
│ Behandlung  │
└─────┬───────┘
      │
      ▼
┌─────────────┐
│ Programm    │  ← Läuft weiter!
│ läuft weiter│
└─────────────┘
```

## Syntax - Verschiedene Sprachen

>[!example] Java
>```java
>try {
>    // Code, der Fehler verursachen könnte
>    int result = 10 / 0;  // ArithmeticException!
>}
>catch (ArithmeticException e) {
>    // Fehlerbehandlung
>    System.out.println("Division durch Null!");
>    e.printStackTrace();
>}
>finally {
>    // Wird immer ausgeführt
>    System.out.println("Fertig!");
>}
>```

>[!example] C#
>```csharp
>try
>{
>    // Code, der Fehler verursachen könnte
>    int result = 10 / 0;  // DivideByZeroException!
>}
>catch (DivideByZeroException e)
>{
>    // Fehlerbehandlung
>    Console.WriteLine("Division durch Null!");
>    Console.WriteLine(e.Message);
>}
>finally
>{
>    // Wird immer ausgeführt
>    Console.WriteLine("Fertig!");
>}
>```

>[!example] Python
>```python
>try:
>    # Code, der Fehler verursachen könnte
>    result = 10 / 0  # ZeroDivisionError!
>except ZeroDivisionError as e:
>    # Fehlerbehandlung
>    print("Division durch Null!")
>    print(e)
>finally:
>    # Wird immer ausgeführt
>    print("Fertig!")
>```

## Mehrere Catch-Blöcke

>[!example] Spezifische Fehlerbehandlung
>```java
>try {
>    File file = new File("datei.txt");
>    Scanner scanner = new Scanner(file);
>    int zahl = Integer.parseInt(scanner.nextLine());
>}
>catch (FileNotFoundException e) {
>    System.out.println("Datei nicht gefunden!");
>}
>catch (NumberFormatException e) {
>    System.out.println("Keine gültige Zahl!");
>}
>catch (Exception e) {
>    System.out.println("Allgemeiner Fehler!");
>}
>finally {
>    System.out.println("Aufräumen...");
>}
>```

## Try-Catch-Finally vs Try-with-Resources

```
Klassisches Try-Catch-Finally:
┌──────────────────────────────┐
│ Connection conn = null;      │
│ try {                        │
│   conn = getConnection();    │
│   // Arbeite mit Connection  │
│ }                            │
│ catch (Exception e) {        │
│   // Fehlerbehandlung        │
│ }                            │
│ finally {                    │
│   if (conn != null) {        │
│     conn.close(); // Manuell │
│   }                          │
│ }                            │
└──────────────────────────────┘

Try-with-Resources (Java 7+):
┌──────────────────────────────┐
│ try (Connection conn =       │
│      getConnection()) {      │
│   // Arbeite mit Connection  │
│ }                            │
│ catch (Exception e) {        │
│   // Fehlerbehandlung        │
│ }                            │
│ // conn wird automatisch     │
│ // geschlossen!              │
└──────────────────────────────┘
```

>[!important] Prüfungsrelevant
>**Try-Catch-Finally Struktur:**
>- **try**: Code, der Fehler verursachen könnte
>- **catch**: Fehlerbehandlung (kann mehrere geben)
>- **finally**: Wird IMMER ausgeführt (auch bei return!)
>
>**Reihenfolge der Catch-Blöcke:**
>- Von spezifisch zu allgemein
>- Spezifische Exceptions zuerst
>- `Exception` (allgemein) am Ende

>[!warning] Häufige Fehler
>1. **Leerer Catch-Block** (Exception "verschlucken")
>   ```java
>   catch (Exception e) { }  // ❌ SCHLECHT!
>   ```
>
>2. **Zu allgemeines Catch**
>   ```java
>   catch (Exception e) { }  // ❌ Zu allgemein!
>   ```
>
>3. **Falsche Reihenfolge**
>   ```java
>   catch (Exception e) { }         // ❌ Zuerst!
>   catch (IOException e) { }       // Wird nie erreicht!
>   ```

>[!tip] Best Practices
>1. **Spezifische Exceptions fangen**
>   ```java
>   catch (FileNotFoundException e) { }  // ✓
>   ```
>
>2. **Aussagekräftige Fehlermeldungen**
>   ```java
>   catch (IOException e) {
>       System.err.println("Fehler beim Lesen: " + e.getMessage());
>   }
>   ```
>
>3. **Ressourcen schließen**
>   - Nutze `finally` oder `try-with-resources`
>
>4. **Logging statt printStackTrace**
>   ```java
>   catch (Exception e) {
>       logger.error("Fehler aufgetreten", e);
>   }
>   ```

>[!note] Wann Try-Catch verwenden?
>- Bei Dateioperationen (IOException)
>- Bei Datenbankzugriffen (SQLException)
>- Bei Netzwerkoperationen
>- Bei User-Input (NumberFormatException)
>- Überall wo Fehler auftreten können!

>[!note] Siehe auch
>- [[02 - RESOURCES/Notes/Exception\|Exception]] - Grundlagen zu Exceptions
>- [[02 - RESOURCES/Notes/Unit Testing\|Unit Testing]] - Tests mit Exception-Handling

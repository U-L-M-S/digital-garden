---
{"dg-publish":true,"permalink":"/02-resources/notes/mcp-obsidian-befehle-leitfaden/","tags":["obsidian/mcp","claude/commands","api/integration"],"noteIcon":"","updated":"2025-09-27T01:10:10.000+02:00"}
---


# MCP Obsidian Befehle Leitfaden

>Vollständige Übersicht aller verfügbaren MCP-Befehle zur Interaktion mit Obsidian über Claude.

>>Diese Befehle ermöglichen es, Notizen zu erstellen, zu bearbeiten, zu durchsuchen und zu organisieren, ohne die Obsidian-Oberfläche direkt verwenden zu müssen.

## Datei-Verwaltung

### Grundlegende Datei-Operationen

>[!note] Aktive Datei Operationen
>Diese Befehle beziehen sich auf die aktuell in Obsidian geöffnete Datei:
>- **Aktive Datei anzeigen**: Inhalt der geöffneten Datei abrufen
>- **Aktive Datei aktualisieren**: Kompletten Inhalt der geöffneten Datei ersetzen
>- **An aktive Datei anhängen**: Inhalt am Ende der geöffneten Datei hinzufügen
>- **Aktive Datei löschen**: Aktuell geöffnete Datei aus dem Vault entfernen
>- **Datei in Obsidian anzeigen**: Bestimmte Datei in der Obsidian-Oberfläche öffnen

### Vault Datei-Operationen

>[!info] Vault-weite Operationen
>Diese Befehle funktionieren mit jeder Datei im gesamten Vault:
>- **Vault-Dateien auflisten**: Dateien und Ordner im Vault oder bestimmten Unterordnern durchsuchen
>- **Vault-Datei abrufen**: Inhalt jeder beliebigen Datei im Vault lesen
>- **Vault-Datei erstellen**: Neue Dateien erstellen oder bestehende aktualisieren
>- **An Vault-Datei anhängen**: Inhalt zu bestehenden Dateien hinzufügen
>- **Vault-Datei löschen**: Dateien aus dem Vault entfernen

## Erweiterte Inhalts-Bearbeitung

### Patch-Operationen

>[!tip] Präzise Bearbeitung
>Patch-Befehle ermöglichen es, Inhalte relativ zu [[Überschriften\|Überschriften]], Block-Referenzen oder Frontmatter zu ändern:

**Ziel-Typen:**
|Typ|Beschreibung|
|---|---|
|`heading`|Überschriften-basierte Navigation|
|`block`|Block-Referenzen für präzise Positionierung|
|`frontmatter`|YAML-Metadaten am Dateianfang|

**Operationen:**
|Operation|Funktion|
|---|---|
|`append`|Nach dem Zielbereich hinzufügen|
|`prepend`|Vor dem Zielbereich hinzufügen|
|`replace`|Zielbereich komplett ersetzen|

**Inhalts-Typen:**
- `text/markdown`: Für normalen Markdown-Text
- `application/json`: Für strukturierte Daten wie Tabellen oder Frontmatter

## Such-Funktionen

### Text-Suche

>[!example] Such-Beispiele
>**Einfache Suche**: Grundlegende Textsuche im gesamten Vault mit Kontext
>```
>Suchbegriff: "Machine Learning"
>Ergebnis: Alle Dateien mit diesem Begriff + Kontext
>```
>
>**Smart Search**: Semantische KI-Suche für konzeptionell verwandte Inhalte
>```
>Suchbegriff: "Algorithmus"
>Ergebnis: Auch Dateien mit "Verfahren", "Methode", etc.
>```

### Erweiterte Suche

>[!important] Dataview Integration
>**Dataview-Suche**: Komplexe DQL-Abfragen für strukturierte Suchen
>```
>WHERE file.name CONTAINS "Project" AND file.tags CONTAINS "aktiv"
>```
>
>**JsonLogic-Suche**: Strukturierte Abfragen mit JsonLogic-Syntax

### Such-Filter

**Ordner einschließen/ausschließen:**
- `Include folders`: Suche auf bestimmte Verzeichnisse beschränken
- `Exclude folders`: Bestimmte Verzeichnisse von der Suche ausschließen
- `Result limits`: Anzahl der Ergebnisse kontrollieren

## Templates

### Templater Integration

>[!success] Template-Automatisierung
>**Template ausführen**: Templater-Vorlagen mit benutzerdefinierten Argumenten ausführen
>
>**Dateien aus Templates erstellen**: Neue Dateien basierend auf Vorlagen generieren
>
>**Template-Argumente**: Dynamische Werte an Vorlagen übergeben

>[!example] Template-Beispiel
>```markdown
>Template: "Projekt Vorlage"
>Argumente: {
>  "projekt_name": "Neues Projekt",
>  "start_datum": "2025-09-27"
>}
>```

## Server-Informationen

### Verbindungsstatus

>[!info] API-Status
>**Server-Info abrufen**: Obsidian Local REST API Status und Authentifizierung prüfen

---

## Häufige Anwendungsfälle

### Tägliche Notizen-Verwaltung

>[!example] Tagesnotiz erstellen
>```markdown
>Datei erstellen: "Tägliche Notizen/2025-09-27.md"
>Inhalt: Vorlage mit Datum, Wetter, Aufgaben
>```

### Forschung und Wissensmanagement

>[!example] Verwandte Konzepte finden
>```markdown
>Smart Search: "Maschinelles Lernen Algorithmen"
>Filter: Nur "Forschung/" und "Notizen/" Ordner einschließen
>```

### Inhalts-Organisation

>[!example] Metadaten aktualisieren
>```markdown
>Patch: Frontmatter-Feld "tags"
>Operation: anhängen
>Inhalt: ["neuer-tag", "forschung"]
>```

### Template-Workflows

>[!example] Projekt-Struktur generieren
>```markdown
>Template ausführen: "Projekt Vorlage"
>Argumente: {
>  "projekt_name": "Neues Projekt",
>  "start_datum": "2025-09-27"
>}
>```

---

## Tipps für effektive Nutzung

>[!tip] Best Practices
>1. **Semantische Suche verwenden** für konzeptionell verwandte Notizen
>2. **Patch-Operationen nutzen** für präzise Inhalts-Änderungen
>3. **Mit Templates organisieren** für konsistente Notiz-Strukturen
>4. **Suchen filtern** um sich auf relevante Inhaltsbereiche zu konzentrieren
>5. **Server-Status prüfen** wenn Befehle nicht funktionieren

## Unterstützte Dateiformate

>[!note] Format-Unterstützung
>- **Markdown-Dateien** (.md): Vollständige Unterstützung für alle Operationen
>- **JSON-Format**: Verfügbar für strukturierte Daten-Operationen
>- **Frontmatter**: Unterstützt YAML-Frontmatter-Änderungen
>- **Block-Referenzen**: Kann spezifische Blöcke innerhalb von Notizen ansprechen

>[!summary] Zusammenfassung
>Dieser Leitfaden deckt die Kern-MCP-Obsidian-Funktionalität ab, die über Claude verfügbar ist. Experimentiere mit diesen Befehlen, um deinen Workflow für Notizen und Wissensmanagement zu verbessern!
---
{"dg-publish":true,"permalink":"/02-resources/notes/git-apply/","tags":["tools/versionsverwaltung/git"],"noteIcon":"","updated":"2025-09-27T01:32:44.000+02:00"}
---

>git apply` ist ein Git-Befehl, um Änderungen aus einer `.diff`- oder `.patch`-Datei in das Arbeitsverzeichnis einzufügen – **ohne einen Commit zu erzeugen**.

---

### 🧠 **Kernaussage**

- Nur der Inhalt wird übernommen (nicht Commit-Metadaten wie Autor, Message, Datum).
    
- Ideal, um gezielte Änderungen manuell zu übernehmen oder weiterzubearbeiten.
    

---

### 💡 **Syntax**

```bash
git apply <datei.diff>
```

---

### 🔧 **Beispiel**

```bash
git apply inputfeld_validierung.diff
```

➡️ Fügt die Änderungen aus der Datei ins Working Directory ein. Danach:

```bash
git add .
git commit -m "Deine Commit-Beschreibung"
```

---

### ⚠️ **Hinweis**

- Kein Commit erfolgt automatisch
    
- Keine Konfliktbehandlung wie bei `git merge` → muss manuell gelöst werden
    
- `.diff` kann mit `git diff` erzeugt werden
    

---

### 🧰 **Typischer Workflow**

```bash
git diff master..branch -- <datei> > änderung.diff
git checkout -b neuer-branch
git apply änderung.diff
git add .
git commit -m "feat: deine Änderung"
```


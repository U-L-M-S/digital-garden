---
{"dg-publish":true,"permalink":"/wiki/git-apply/","tags":["informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.968+02:00","dg-note-properties":{"aliases":null,"created_date":"2025-05-21","links":null,"tags":["informatik/system"]}}
---

>`git apply` ist ein Git-Befehl, um Änderungen aus einer `.diff`- oder `.patch`-Datei in das Arbeitsverzeichnis einzufügen – **ohne einen Commit zu erzeugen**.

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


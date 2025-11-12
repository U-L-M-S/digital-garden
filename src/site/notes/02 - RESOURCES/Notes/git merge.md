---
{"dg-publish":true,"permalink":"/02-resources/notes/git-merge/","tags":["git/merge"],"noteIcon":"","updated":"2025-10-29T12:59:06.337+01:00"}
---


> Befehl wird verwendet um zwei Branches zusammenzuführen. Du nimmst die Änderungen von einem Branch und fügst sie in deinen aktuellen Branch ein.

```bash
git merge <branch-name>
```

> [!important] Stelle sicher, dass du in dem Branch bist, in den du mergen willst. Mit [[02 - RESOURCES/Notes/git checkout\|git checkout]] kannst du den Branch wechseln. [!important] Falls es Konflikte gibt, musst du diese manuell lösen bevor der Merge abgeschlossen werden kann.

# --no-ff

```bash
git merge --no-ff <branch-name>
```

> Erstellt immer einen Merge-Commit, auch wenn ein Fast-Forward möglich wäre. Dadurch bleibt die Branch-Geschichte sichtbar.

> [!summary] Nach einem erfolgreichen Merge kannst du den alten Branch mit `git branch -d <branch-name>` löschen.


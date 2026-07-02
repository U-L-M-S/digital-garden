---
{"dg-publish":true,"permalink":"/02-resources/notes/git-push/","tags":["git/push"],"noteIcon":"","updated":"2026-05-13T08:47:44.458+02:00","dg-note-properties":{"tags":["git/push"]}}
---

>Befehl wird verwendet, um das, was bei mir (Lokal) steht, an das Git zu verschicken.

```bash
git push
```


>[!important] 
> Bei deinem ersten Push ist es sehr normal, dass ein Fehler passiert.
> Wie Branch-Names [[02 - RESOURCES/Notes/git checkout\|git checkout]] **ODER** dein Branch wurde noch nicht angelegt: `git push -u origin main`

>[!important] 
> Falls du ein Commit mit `git commit --amend` überschreibst. Wird dein Commit-Hash sich ändern (Lokal) und somit wird es nicht möglich sein zu pushen. 
> Was du machen kannst, ist ein `git push --force origin <branch-name>` **ABER** es ist sehr gefährlich. Da du einen Commit mit `--force` löschen wirst.
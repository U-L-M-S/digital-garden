---
{"dg-publish":true,"permalink":"/02-resources/notes/git-push/","tags":["git/push"],"noteIcon":"","updated":"2025-07-12T13:31:41.324+02:00"}
---

>Befehl wird verwendet um was bei mir (Lokal) steht an das Git verschickt wird.

```bash
git push
```


>[!important] 
> In dein erste push, ist sehr normal, dass ein Fehler passiert.
> Wie Branch-Names [[02 - RESOURCES/Notes/git checkout\|git checkout]] **ODER** dein Branch wurde noch nicht eingelegt `git push -u origin main`

>[!important] 
> Falls du ein Commit mit `git commit --amend` überschreibst. Wird dein Commit-Hash sich ändern (Lokal) und somit wird es nicht möglich sein zu pushen. 
> Was du machen kannst ist ein `git push --force origin <branch-name>` **ABER** es ist sehr gefährlich. Da du ein Commit löschen wird mit `--force`
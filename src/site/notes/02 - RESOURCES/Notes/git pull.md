---
{"dg-publish":true,"permalink":"/02-resources/notes/git-pull/","tags":["git/pull"],"noteIcon":"","updated":"2025-07-12T13:31:41.000+02:00"}
---

>Es funktioniert fast wie [[02 - RESOURCES/Notes/git clone\|git clone]]. Wird aber oft verwendet wenn du in Team arbeitest und das neueste Version von dein Code (das was in GitHub ist) willst.

```bash
git pull
```

# --rebase

```sh
git pull --rebase
```

>Der Befehl git pull --rebase aktualisiert deinen Branch, indem er deine lokalen Änderungen auf die neuesten Änderungen im entfernten Repository "umlegt", anstatt einen Merge-Commit zu erstellen. 
>>Dadurch bleibt die Historie linear und übersichtlicher.

>[!summary] 
>Es ist ein "Safe" `git pull`.


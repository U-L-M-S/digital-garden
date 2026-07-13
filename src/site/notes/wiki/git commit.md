---
{"dg-publish":true,"permalink":"/wiki/git-commit/","tags":["git/commit"],"noteIcon":"","updated":"2026-05-13T08:47:26.545+02:00","dg-note-properties":{"tags":["git/commit"]}}
---

>Mit dem Befehl `git commit` und der Nachricht `this is a commit` kannst du einen Save Point speichern. Das bedeutet, hier wird ein Save Point gesetzt, und mit dem Befehl [[wiki/git log\|git log]] können sogar alle deine Save Points eingesehen werden. 
>Du kannst dann mit dem Befehl [[wiki/git checkout\|git checkout]] in der Zeit zurückgehen.
```bash
git commit -m "this is a commit"
```


>[!tip] 
>Du kannst ```git commit -m "Titel #ENTER Kurz Beschreibung #ENTER"```
>eingeben. Somit wird es in deinem GitHub so aussehen:
>![Pasted image 20230804162548.png](/img/user/assets/IMG/Pasted%20image%2020230804162548.png)
>![Pasted image 20230804162651.png](/img/user/assets/IMG/Pasted%20image%2020230804162651.png)

# --amend
```bash
git commit --amend
```

>Auf diese Weise kannst du Informationen zu einem Commit hinzufügen, anstatt einen neuen Commit zu erstellen.
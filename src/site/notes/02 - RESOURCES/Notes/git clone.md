---
{"dg-publish":true,"permalink":"/02-resources/notes/git-clone/","tags":["git/clone"],"noteIcon":"","updated":"2024-10-15T11:19:05.691+02:00"}
---

>Lade das gesamte Repository auf deinen PC herunter.
```bash
git clone <repository-url>
```

>[!tip] 
> `git clone <repository-url> ~/Downloads`
> 
> So kannst du etwas in eine bestimmte Path herunterlanden. 

---

>[!tip] 
>`git archive --remote=<repository-url> HEAD:<path_to_folder_or_file>`
>
> Auf dieser Weise kannst du nur eine bestimmte File oder Directory herunterladen.
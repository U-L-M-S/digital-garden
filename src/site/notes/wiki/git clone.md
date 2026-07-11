---
{"dg-publish":true,"permalink":"/wiki/git-clone/","tags":["git/clone"],"noteIcon":"","updated":"2026-05-13T08:47:39.000+02:00","dg-note-properties":{"tags":["git/clone"]}}
---

>Lade das gesamte Repository auf deinen PC herunter.
```bash
git clone <repository-url>
```

>[!tip] 
> `git clone <repository-url> ~/Downloads`
> 
> So kannst du etwas in einen bestimmten Pfad herunterladen. 

---

>[!tip] 
>`git archive --remote=<repository-url> HEAD:<path_to_folder_or_file>`
>
> Auf diese Weise kannst du nur eine bestimmte Datei oder ein bestimmtes Verzeichnis herunterladen.
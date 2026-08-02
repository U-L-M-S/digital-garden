---
{"dg-publish":true,"permalink":"/wiki/git-clone/","tags":["informatik/system"],"noteIcon":"","updated":"2026-07-19T03:56:26.924+02:00","dg-note-properties":{"tags":["informatik/system"]}}
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
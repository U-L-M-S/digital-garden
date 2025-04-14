---
{"dg-publish":true,"permalink":"/02-resources/notes/backup/","updated":"2025-03-24T16:31:59.305+01:00"}
---

>Sicherung von Daten auf externen Medien oder Speichern, um sie im Notfall wiederherstellen zu können.  
>Ziel: Schutz vor Datenverlust durch Hardwarefehler, Malware oder menschliche Fehler.

## Arten von Backups
>Es gibt hauptsächlich 3 arten von Backups:


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/vollbackup/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Es werden **alle Daten** gesichert, unabhängig davon, ob sie sich verändert haben.

- **Vorteile**:
    
    - Einfach & vollständig
        
    - Schnelle Wiederherstellung
        
- **Nachteile**:
    
    - Braucht viel Speicherplatz
        
    - Dauert lange bei großen Datenmengen
        

</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/differenzielles-backup/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Sichert nur **Änderungen seit dem letzten Vollbackup**.

- **Vorteile**:
    
    - Spart Speicherplatz im Vergleich zum Vollbackup
        
    - Schnellere Sicherung als Vollbackup
        
- **Nachteile**:
    
    - Mit der Zeit größer werdend
        
    - Zum Wiederherstellen wird das **letzte Vollbackup + letztes Differenzial-Backup** benötigt
  

</div></div>


## 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/inkrementelles-backup/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Sichert nur **Änderungen seit der letzten Sicherung** (egal ob Voll oder Inkrement).

- **Vorteile**:
    
    - Sehr platzsparend
        
    - Schnellste Sicherung
        
- **Nachteile**:
    
    - Wiederherstellung aufwendiger (Vollbackup + alle Inkrementellen Backups nötig)
        
    - Höhere Fehleranfälligkeit beim Restore-Prozess

</div></div>


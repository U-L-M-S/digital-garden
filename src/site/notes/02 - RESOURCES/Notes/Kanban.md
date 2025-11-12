---
{"dg-publish":true,"permalink":"/02-resources/notes/kanban/","tags":["projektmanagement","agile/methoden","ausbildung/gfn/ap1/vorbereitung"],"noteIcon":"","updated":"2025-11-06T12:05:06.000+01:00"}
---

>**Kanban** ist eine agile Projektmanagement-Methode, die Arbeitsprozesse visualisiert und den Workflow optimiert, indem Aufgaben in Spalten auf einem Board dargestellt werden.
>>Kanban stammt ursprünglich aus der japanischen Automobilindustrie (Toyota) und bedeutet wörtlich "Signalkarte" oder "Anzeigetafel". Ziel ist es, Arbeitsabläufe transparent zu machen und Engpässe sichtbar zu erkennen.

>[!info] Herkunft
>**Kan** (看) = sehen, beobachten
>**Ban** (板) = Tafel, Brett
>→ "Sichtbare Tafel"

---

# Grundprinzip von Kanban

>Kanban basiert auf der **Visualisierung von Arbeit** und der **Begrenzung laufender Aufgaben** (Work in Progress - WIP).

**Kernidee:**
```
Backlog → To Do → In Progress → Review → Done
   │        │          │          │        │
   └────────┴──────────┴──────────┴────────┘
         Workflow wird sichtbar gemacht
```

---

# Das Kanban-Board

## Aufbau

>Ein **Kanban-Board** ist in **Spalten** unterteilt, die verschiedene Phasen des Workflows darstellen. Jede **Karte** (Task) wandert von links nach rechts durch die Spalten.

**Einfaches Kanban-Board:**

```
┌──────────────────────────────────────────────────────────────┐
│                     Kanban Board                             │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│   TO DO     │ IN PROGRESS │   REVIEW    │       DONE       │
│             │   (WIP: 3)  │             │                  │
├─────────────┼─────────────┼─────────────┼──────────────────┤
│             │             │             │                  │
│  ┌────────┐ │  ┌────────┐ │  ┌────────┐ │  ┌────────┐     │
│  │Task A  │ │  │Task B  │ │  │Task E  │ │  │Task F  │     │
│  └────────┘ │  └────────┘ │  └────────┘ │  └────────┘     │
│             │             │             │                  │
│  ┌────────┐ │  ┌────────┐ │             │  ┌────────┐     │
│  │Task C  │ │  │Task D  │ │             │  │Task G  │     │
│  └────────┘ │  └────────┘ │             │  └────────┘     │
│             │             │             │                  │
│  ┌────────┐ │  ┌────────┐ │             │                  │
│  │Task H  │ │  │Task I  │ │             │                  │
│  └────────┘ │  └────────┘ │             │                  │
│             │             │             │                  │
└─────────────┴─────────────┴─────────────┴──────────────────┘
```

## Typische Spalten

| Spalte | Bedeutung |
|--------|-----------|
| **Backlog** | Alle geplanten Aufgaben (Sammlung) |
| **To Do** | Aufgaben, die als nächstes bearbeitet werden |
| **In Progress** | Aufgaben, die gerade bearbeitet werden |
| **Review / Testing** | Aufgaben in Prüfung/Test |
| **Done** | Abgeschlossene Aufgaben |

>[!tip] Anpassbar
>Die Spalten können an den eigenen Workflow angepasst werden!

---

# Die 6 Kanban-Prinzipien

## 1. Visualisiere den Workflow
>Mache alle Aufgaben und deren Status **sichtbar**.

**Vorteile:**
- Jeder sieht, woran gearbeitet wird
- Engpässe werden sofort erkennbar
- Transparenz im Team

## 2. Begrenze laufende Arbeit (WIP-Limit)
>**WIP = Work in Progress**
>Setze ein Limit, wie viele Aufgaben gleichzeitig in einer Spalte sein dürfen.

**Beispiel:**
```
In Progress (WIP: 3)
├── Task 1
├── Task 2
└── Task 3  ← Limit erreicht! Keine neue Aufgabe starten
```

>[!important] Warum WIP-Limits?
>- Verhindert Überlastung
>- Fördert **Fokus** (weniger Multitasking)
>- Aufgaben werden **schneller fertig**

## 3. Manage den Fluss
>Überwache, wie schnell Aufgaben durch das System fließen (**Lead Time**, **Cycle Time**).

**Metriken:**
- **Lead Time**: Zeit von "Aufgabe erstellt" bis "Fertig"
- **Cycle Time**: Zeit von "Beginn Bearbeitung" bis "Fertig"
- **Throughput**: Anzahl fertiggestellter Aufgaben pro Zeiteinheit

## 4. Mache Regeln explizit
>Definiere klare **Regeln** für den Workflow.

**Beispiele:**
- "Definition of Done": Wann gilt eine Aufgabe als fertig?
- Wer darf Aufgaben verschieben?
- Wie werden Aufgaben priorisiert?

## 5. Implementiere Feedback-Schleifen
>Regelmäßige **Meetings** zur Prozessverbesserung.

**Typische Meetings:**
- **Daily Standup** (täglich): Kurzes Update (5-15 Min)
- **Review** (wöchentlich/2-wöchentlich): Was wurde erreicht?
- **Retrospektive**: Wie können wir besser werden?

## 6. Verbessere kollaborativ
>Nutze Daten und Feedback, um den Prozess **kontinuierlich zu verbessern** (Kaizen).

---

# Kanban-Karten (Tasks)

## Aufbau einer Karte

```
┌─────────────────────────────────┐
│  Login-Feature implementieren   │ ← Titel
├─────────────────────────────────┤
│  👤 Max Mustermann              │ ← Verantwortlich
│  🏷️  Backend, Critical          │ ← Tags/Labels
│  📅 Deadline: 2025-11-15        │ ← Frist
│  🔗 #1234                       │ ← ID/Link
└─────────────────────────────────┘
```

**Was gehört auf eine Karte?**
- Kurze, klare Beschreibung
- Verantwortliche Person
- Priorität / Tags
- Deadline (optional)
- Link zu Details (z.B. Jira-Ticket, GitHub-Issue)

---

# Kanban vs. Scrum

| Aspekt | Kanban | Scrum |
|--------|--------|-------|
| **Zeitrahmen** | Kontinuierlicher Fluss | Feste Sprints (1-4 Wochen) |
| **Rollen** | Keine festen Rollen | Product Owner, Scrum Master, Team |
| **Planung** | On-Demand | Sprint Planning am Anfang |
| **Änderungen** | Jederzeit möglich | Nur zwischen Sprints |
| **WIP-Limit** | Ja, pro Spalte | Nein (Sprint Backlog ist fixiert) |
| **Meetings** | Optional, flexibel | Daily Standup, Review, Retrospektive (fix) |

>[!tip] Kombination möglich
>Viele Teams nutzen **Scrumban** - eine Mischung aus beiden Methoden!

---

# Praktisches Beispiel: Software-Entwicklung

**Workflow:**

```
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│ Backlog  │  To Do   │  Coding  │  Review  │  Testing │   Done   │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│          │          │ (WIP: 2) │ (WIP: 2) │ (WIP: 3) │          │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│ Feature  │ Bug #42  │ API      │ Login    │ Checkout │ Home     │
│ Dashboard│ DB-Fix   │ Endpoint │ Feature  │ Process  │ Page     │
│          │          │          │          │          │          │
│ Bug #99  │ Security │ Search   │ Payment  │ User     │ Footer   │
│ Payment  │ Update   │ Function │ Gateway  │ Auth     │ Design   │
│ Gateway  │          │          │          │          │          │
│          │          │          │          │ Profile  │ Logo     │
│ ...      │          │          │          │ Edit     │ Update   │
│          │          │          │          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
```

**Ablauf:**
1. **Backlog**: Alle geplanten Features und Bugs
2. **To Do**: Priorisierte Aufgaben für die nächste Zeit
3. **Coding**: Entwickler arbeiten daran (max. 2 parallel)
4. **Review**: Code-Review (max. 2)
5. **Testing**: QA testet (max. 3)
6. **Done**: Fertig und deployed

>[!example] WIP-Limit in Aktion
>Wenn in "Coding" bereits 2 Aufgaben sind, darf keine neue gestartet werden, bis eine in "Review" verschoben wurde.

---

# Tools für Kanban

## Physische Boards
- **Whiteboard + Post-Its**
- Vorteile: Einfach, visuell präsent, keine Technik nötig
- Nachteile: Nicht remote nutzbar, schwer zu archivieren

## Digitale Tools

| Tool | Beschreibung | Preis |
|------|--------------|-------|
| **Trello** | Einsteigerfreundlich, visuell, intuitiv | Kostenlos / Premium |
| **Jira** | Professionell, umfangreich, agile Features | Paid (Free für kleine Teams) |
| **GitHub Projects** | Integriert mit GitHub, für Software-Teams | Kostenlos |
| **Asana** | Team-Kollaboration, einfach zu bedienen | Kostenlos / Premium |
| **Monday.com** | Flexibel, anpassbar, viele Integrationen | Paid |
| **Notion** | All-in-One, sehr flexibel | Kostenlos / Premium |

---

# Vorteile von Kanban

>[!success] Stärken
>- ✅ **Flexibilität**: Jederzeit Änderungen möglich
>- ✅ **Visualisierung**: Sofortiger Überblick über alle Aufgaben
>- ✅ **Engpass-Erkennung**: Probleme werden schnell sichtbar
>- ✅ **Kontinuierliche Lieferung**: Kein Warten auf Sprint-Ende
>- ✅ **Einfacher Einstieg**: Keine komplexe Einarbeitung
>- ✅ **Fokus**: WIP-Limits verhindern Multitasking
>- ✅ **Transparenz**: Jeder weiß, woran gearbeitet wird

---

# Herausforderungen

>[!caution] Schwächen
>- ❌ **Keine festen Deadlines**: Kann zu fehlendem Zeitdruck führen
>- ❌ **Disziplin nötig**: WIP-Limits müssen eingehalten werden
>- ❌ **Fehlende Struktur**: Weniger strukturiert als Scrum
>- ❌ **Planung**: Langfristige Planung schwieriger als bei Sprints

---

# Best Practices

>[!tip] Tipps für erfolgreiches Kanban
>1. **Start simple**: Beginne mit 3-4 Spalten
>2. **WIP-Limits setzen**: Verhindere Überlastung
>3. **Board aktuell halten**: Täglich pflegen
>4. **Metriken nutzen**: Lead Time und Cycle Time messen
>5. **Regelmäßige Reviews**: Was läuft gut? Was nicht?
>6. **Iterativ verbessern**: Board an Workflow anpassen
>7. **Klar definierte "Done"**: Wann ist eine Aufgabe fertig?

---

# Code-Beispiel: Einfaches Kanban-System (Python)

```python
class KanbanBoard:
    def __init__(self):
        self.columns = {
            'to_do': [],
            'in_progress': [],
            'done': []
        }
        self.wip_limit = {'in_progress': 3}

    def add_task(self, task, column='to_do'):
        """Fügt eine Aufgabe zu einer Spalte hinzu"""
        if column in self.wip_limit:
            if len(self.columns[column]) >= self.wip_limit[column]:
                print(f"❌ WIP-Limit erreicht für {column}!")
                return False

        self.columns[column].append(task)
        print(f"✅ Task '{task}' zu {column} hinzugefügt")
        return True

    def move_task(self, task, from_col, to_col):
        """Verschiebt eine Aufgabe zwischen Spalten"""
        if task not in self.columns[from_col]:
            print(f"❌ Task '{task}' nicht in {from_col}")
            return False

        if to_col in self.wip_limit:
            if len(self.columns[to_col]) >= self.wip_limit[to_col]:
                print(f"❌ WIP-Limit erreicht für {to_col}!")
                return False

        self.columns[from_col].remove(task)
        self.columns[to_col].append(task)
        print(f"✅ Task '{task}' von {from_col} zu {to_col}")
        return True

    def show_board(self):
        """Zeigt das Board an"""
        print("\n" + "="*50)
        print("         📋 KANBAN BOARD")
        print("="*50)
        for col, tasks in self.columns.items():
            wip = f" (WIP: {self.wip_limit[col]})" if col in self.wip_limit else ""
            print(f"\n{col.upper()}{wip}:")
            for task in tasks:
                print(f"  - {task}")
        print("="*50 + "\n")

# Beispielnutzung
board = KanbanBoard()
board.add_task("Login implementieren")
board.add_task("Bug #42 fixen")
board.add_task("API-Endpoint erstellen")

board.move_task("Login implementieren", 'to_do', 'in_progress')
board.move_task("Bug #42 fixen", 'to_do', 'in_progress')

board.show_board()
```

**Output:**
```
==================================================
         📋 KANBAN BOARD
==================================================

TO_DO:
  - API-Endpoint erstellen

IN_PROGRESS (WIP: 3):
  - Login implementieren
  - Bug #42 fixen

DONE:

==================================================
```

---

# Zusammenfassung

>[!summary] Kernpunkte
>- **Kanban** = Visualisierung von Workflows auf einem Board
>- **Spalten** repräsentieren Workflow-Phasen (To Do → In Progress → Done)
>- **WIP-Limits** begrenzen gleichzeitige Aufgaben und fördern Fokus
>- **Kontinuierlicher Fluss** ohne feste Sprints
>- **Flexibel**: Änderungen jederzeit möglich
>- **6 Prinzipien**: Visualisieren, WIP begrenzen, Fluss managen, Regeln definieren, Feedback, Verbesserung

---

# Verwandte Konzepte

- [[02 - RESOURCES/Notes/Scrum\|Scrum]] - Anderer agile Framework
- [[Agile Methoden\|Agile Methoden]] - Übergeordnetes Konzept
- [[Lean Management\|Lean Management]] - Ursprung von Kanban
- [[DevOps\|DevOps]] - Oft mit Kanban kombiniert
- [[02 - RESOURCES/Notes/Projektmanagement\|Projektmanagement]] - Allgemeine PM-Methoden

---

# Weiterführende Ressourcen

📚 **Bücher**:
- "Kanban" von David J. Anderson
- "Personal Kanban" von Jim Benson & Tonianne DeMaria Barry

🔗 **Online**:
- kanbanize.com - Kanban-Lernressourcen
- Trello Guide - Praktische Kanban-Anleitung

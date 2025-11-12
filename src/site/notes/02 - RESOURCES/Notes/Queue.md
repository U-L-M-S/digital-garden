---
{"dg-publish":true,"permalink":"/02-resources/notes/queue/","tags":["datenstrukturen/queue","algorithmen/datenstrukturen","GFN/prüfungsrelevant/AP2/vorbereitung"],"noteIcon":"","updated":"2025-11-05T12:25:33.000+01:00"}
---


>Eine [[02 - RESOURCES/Notes/Queue\|Queue]] ist eine Datenstruktur nach dem **First In, First Out (FIFO)** Prinzip - wie eine Warteschlange im Supermarkt, wo der Erste der ankommt auch Erster bedient wird.

>>Wer zuerst kommt, mahlt zuerst!

## Grundprinzip

>[!quote] Definition
>Eine [[02 - RESOURCES/Notes/Queue\|Queue]] ist eine lineare Datenstruktur bei der Elemente **hinten** hinzugefügt und **vorne** entfernt werden.

### FIFO - First In, First Out

```
Hinten ←                    → Vorne
(enqueue)                   (dequeue)
    ┌───┬───┬───┬───┐
    │ 4 │ 3 │ 2 │ 1 │
    └───┴───┴───┴───┘
    ↑               ↑
    Neues Element   Nächstes raus
    kommt hier rein
```

**Wie eine Warteschlange:**
>Menschen stellen sich hinten an und verlassen vorne - niemand drängt sich vor!

## Operationen

### Grundlegende Operationen:

#### 1. enqueue() / add() / offer() - Element hinzufügen
>Fügt ein Element **hinten** in die [[02 - RESOURCES/Notes/Queue\|Queue]] ein.

```java
queue.add(1);    // [1]
queue.add(2);    // [1, 2]
queue.add(3);    // [1, 2, 3] ← 3 ist hinten
```

**Komplexität:** [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] - konstante Zeit

#### 2. dequeue() / remove() / poll() - Element entfernen
>Entfernt das **vorderste** Element und gibt es zurück.

```java
int element = queue.poll();  // 1 (vorne)
// Queue ist jetzt: [2, 3]
```

**Komplexität:** [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]]

>[!warning] Warnung
>- **remove()** wirft Exception bei leerer Queue
>- **poll()** gibt null zurück bei leerer Queue
>- **poll()** ist sicherer!

#### 3. peek() / element() - Vorderstes Element anschauen
>Gibt vorderstes Element zurück **ohne** es zu entfernen.

```java
int front = queue.peek();  // 2 (bei Queue [2, 3])
// Queue bleibt: [2, 3]
```

**Komplexität:** [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]]

**Unterschied:**
- **peek()** gibt null zurück wenn leer
- **element()** wirft Exception wenn leer

#### 4. isEmpty() - Ist Queue leer?
>Prüft ob [[02 - RESOURCES/Notes/Queue\|Queue]] leer ist.

```java
boolean leer = queue.isEmpty();  // true oder false
```

**Komplexität:** [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]]

#### 5. size() - Anzahl Elemente
>Gibt Anzahl der Elemente zurück.

```java
int anzahl = queue.size();  // z.B. 3
```

**Komplexität:** [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]]

## Implementierung in [[02 - RESOURCES/Notes/Java\|Java]]

### Mit Java Queue Interface:

```java
import java.util.Queue;
import java.util.LinkedList;

public class QueueBeispiel {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();

        // Enqueue - Elemente hinzufügen
        queue.add(10);
        queue.add(20);
        queue.add(30);

        System.out.println("Queue: " + queue);  // [10, 20, 30]

        // Peek - Vorderstes anschauen
        System.out.println("Front: " + queue.peek());  // 10

        // Poll - Vorderstes entfernen
        int removed = queue.poll();
        System.out.println("Entfernt: " + removed);  // 10
        System.out.println("Queue: " + queue);  // [20, 30]

        // isEmpty
        System.out.println("Leer? " + queue.isEmpty());  // false

        // Size
        System.out.println("Größe: " + queue.size());  // 2
    }
}
```

### Eigene Implementierung mit Array (Circular Queue):

```java
public class CircularQueue {
    private int[] arr;
    private int front;   // Index des vordersten Elements
    private int rear;    // Index wo nächstes Element eingefügt wird
    private int size;    // Aktuelle Anzahl Elemente
    private int capacity;

    public CircularQueue(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        front = 0;
        rear = 0;
        size = 0;
    }

    public void enqueue(int element) {
        if (isFull()) {
            throw new RuntimeException("Queue ist voll!");
        }
        arr[rear] = element;
        rear = (rear + 1) % capacity;  // Circular
        size++;
    }

    public int dequeue() {
        if (isEmpty()) {
            throw new RuntimeException("Queue ist leer!");
        }
        int element = arr[front];
        front = (front + 1) % capacity;  // Circular
        size--;
        return element;
    }

    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Queue ist leer!");
        }
        return arr[front];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == capacity;
    }

    public int size() {
        return size;
    }
}
```

**Warum Circular?**
>Verhindert dass Array "nach rechts wandert" - nutzt Platz effizient durch Modulo-Rechnung.

```
Normal:     [_ _ _ 3 4]  ← front, rear kann nicht weiter

Circular:   [5 _ _ 3 4]  ← rear springt zurück zu Index 0
             ↑       ↑
            rear    front
```

## Anwendungsfälle

### 1. Drucker-Warteschlange

```java
Queue<String> druckJobs = new LinkedList<>();

// Jobs hinzufügen
druckJobs.add("Dokument1.pdf");
druckJobs.add("Rechnung.docx");
druckJobs.add("Foto.jpg");

// Drucker arbeitet Jobs ab
while (!druckJobs.isEmpty()) {
    String job = druckJobs.poll();
    System.out.println("Drucke: " + job);
}
```

**Ausgabe:**
```
Drucke: Dokument1.pdf
Drucke: Rechnung.docx
Drucke: Foto.jpg
```

### 2. Kundenservice / Call-Center

```java
class Kunde {
    String name;
    int wartenummer;
}

Queue<Kunde> warteschlange = new LinkedList<>();

// Kunden kommen an
warteschlange.add(new Kunde("Anna", 1));
warteschlange.add(new Kunde("Ben", 2));
warteschlange.add(new Kunde("Clara", 3));

// Nächster Kunde wird bedient
Kunde naechster = warteschlange.poll();  // Anna
```

### 3. Breadth-First Search (BFS) in Graphen

>[[02 - RESOURCES/Notes/Queue\|Queue]] wird für Breitensuche in Bäumen und Graphen verwendet.

```java
void breadthFirstSearch(Node start) {
    Queue<Node> queue = new LinkedList<>();
    Set<Node> besucht = new HashSet<>();

    queue.add(start);
    besucht.add(start);

    while (!queue.isEmpty()) {
        Node aktuell = queue.poll();
        System.out.println("Besuche: " + aktuell);

        for (Node nachbar : aktuell.getNachbarn()) {
            if (!besucht.contains(nachbar)) {
                queue.add(nachbar);
                besucht.add(nachbar);
            }
        }
    }
}
```

**Unterschied zu DFS:**
- **BFS mit [[02 - RESOURCES/Notes/Queue\|Queue]]** - Ebene für Ebene
- **DFS mit [[02 - RESOURCES/Notes/Stack\|Stack]]** - Erst in die Tiefe

### 4. Prozess-Scheduling im Betriebssystem

>CPU teilt Zeit zwischen Prozessen nach Round-Robin-Prinzip.

```java
Queue<Prozess> readyQueue = new LinkedList<>();

// Prozesse warten auf CPU
readyQueue.add(new Prozess("Chrome"));
readyQueue.add(new Prozess("Word"));
readyQueue.add(new Prozess("Spotify"));

// CPU führt Prozesse zeitweise aus
while (!readyQueue.isEmpty()) {
    Prozess p = readyQueue.poll();
    p.execute(10);  // 10ms CPU-Zeit

    if (!p.fertig()) {
        readyQueue.add(p);  // Wieder einreihen
    }
}
```

### 5. Message Queue (Asynchrone Kommunikation)

>Server verarbeiten Anfragen aus einer [[02 - RESOURCES/Notes/Queue\|Queue]].

```java
// Producer fügt Nachrichten hinzu
queue.add(new Message("Neue Bestellung"));
queue.add(new Message("E-Mail senden"));

// Consumer verarbeitet Nachrichten
while (!queue.isEmpty()) {
    Message msg = queue.poll();
    verarbeite(msg);
}
```

**Beispiele:**
- RabbitMQ
- Apache Kafka
- Amazon SQS

## Queue-Varianten

### 1. Priority Queue
>Elemente haben Priorität - höchste Priorität kommt zuerst raus, nicht FIFO!

```java
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.add(5);
pq.add(1);
pq.add(3);

System.out.println(pq.poll());  // 1 (kleinste zuerst)
System.out.println(pq.poll());  // 3
System.out.println(pq.poll());  // 5
```

**Verwendung:**
- Task-Scheduling nach Priorität
- Dijkstra-Algorithmus
- Huffman-Codierung

### 2. Deque (Double-Ended Queue)
>Kann an beiden Enden einfügen/entfernen - kombiniert [[02 - RESOURCES/Notes/Stack\|Stack]] und [[02 - RESOURCES/Notes/Queue\|Queue]].

```java
Deque<Integer> deque = new ArrayDeque<>();
deque.addFirst(1);   // Vorne hinzufügen
deque.addLast(3);    // Hinten hinzufügen
deque.removeFirst(); // Vorne entfernen
deque.removeLast();  // Hinten entfernen
```

**Verwendung:**
- Palindrom-Prüfung
- Sliding Window Algorithmen

### 3. Blocking Queue
>Thread-sichere [[02 - RESOURCES/Notes/Queue\|Queue]] für Producer-Consumer-Pattern.

```java
BlockingQueue<String> queue = new ArrayBlockingQueue<>(10);

// Producer Thread
queue.put("Item");  // Blockiert wenn voll

// Consumer Thread
String item = queue.take();  // Blockiert wenn leer
```

## Vergleich mit anderen Datenstrukturen

### [[02 - RESOURCES/Notes/Queue\|Queue]] vs [[02 - RESOURCES/Notes/Stack\|Stack]]

| Aspekt | [[02 - RESOURCES/Notes/Queue\|Queue]] (FIFO) | [[02 - RESOURCES/Notes/Stack\|Stack]] (LIFO) |
|--------|-----------------|------------------|
| Prinzip | First In, First Out | Last In, First Out |
| Analogie | Warteschlange | Stapel Teller |
| Hinzufügen | Hinten (enqueue) | Oben (push) |
| Entfernen | Vorne (dequeue) | Oben (pop) |
| Verwendung | Warteschlangen, BFS | Undo, Rekursion, DFS |

### [[02 - RESOURCES/Notes/Queue\|Queue]] vs Array

| Aspekt | [[02 - RESOURCES/Notes/Queue\|Queue]] | Array |
|--------|-----------|-------|
| Zugriff | Nur vorne/hinten | Beliebiger Index |
| Reihenfolge | FIFO garantiert | Keine Ordnung |
| Operationen | enqueue, dequeue | get, set |
| Verwendung | Sequentielle Verarbeitung | Random Access |

### [[02 - RESOURCES/Notes/Queue\|Queue]] vs [[Linked List\|Linked List]]

| Aspekt | [[02 - RESOURCES/Notes/Queue\|Queue]] (Interface) | [[Linked List\|Linked List]] |
|--------|----------------------|-----------------|
| Was ist es | Konzept/Interface | Konkrete Implementierung |
| Verwendung | FIFO-Verhalten | Kann als [[02 - RESOURCES/Notes/Queue\|Queue]] genutzt werden |
| Flexibilität | Beschränkt auf Queue-Ops | Voller Zugriff auf alle Elemente |

## Vor- und Nachteile

>[!check] Vorteile
>- **Fair** - FIFO garantiert gerechte Reihenfolge
>- **Effizient** - Alle Operationen [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]]
>- **Natürliches Modell** - Passt zu vielen realen Problemen
>- **Einfach** - Leicht zu verstehen und implementieren

>[!fail] Nachteile
>- **Eingeschränkter Zugriff** - Nur vorne und hinten
>- **Keine Suche** - Kann nicht in Mitte schauen
>- **Keine Priorität** - Alle gleich behandelt (außer PriorityQueue)
>- **Feste Größe** - Bei Array-Implementierung begrenzt

## Komplexität

| Operation | Zeitkomplexität | Speicherkomplexität |
|-----------|-----------------|---------------------|
| enqueue() | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] |
| dequeue() | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] |
| peek() | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] |
| isEmpty() | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] |
| size() | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] | [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] |

## Prüfungsrelevanz AP2

>[!important] Für AP2 wichtig
>- **FIFO-Prinzip** erklären können
>- **Operationen** (enqueue, dequeue, peek) kennen
>- **Komplexität** [[02 - RESOURCES/Notes/1. Big O(1)\|O(1)]] für alle Operationen
>- **Anwendungsfälle** nennen (Warteschlange, BFS, Scheduling)
>- **Unterschied zu [[02 - RESOURCES/Notes/Stack\|Stack]]** erklären
>- **Implementierung** in [[02 - RESOURCES/Notes/Java\|Java]] kennen
>- **Queue-Varianten** (PriorityQueue, Deque) kennen

**Typische Prüfungsfrage:**
>"Erkläre das FIFO-Prinzip einer [[02 - RESOURCES/Notes/Queue\|Queue]] und nenne drei praktische Anwendungsfälle. Was ist der Unterschied zu einem [[02 - RESOURCES/Notes/Stack\|Stack]]?"

## Verwandte Konzepte

- [[02 - RESOURCES/Notes/Stack\|Stack]] - LIFO-Datenstruktur
- [[Linked List\|Linked List]] - Kann als [[02 - RESOURCES/Notes/Queue\|Queue]] verwendet werden
- [[Array\|Array]] - Basis für Array-[[02 - RESOURCES/Notes/Queue\|Queue]]
- [[Datenstrukturen\|Datenstrukturen]] - Übergeordnetes Konzept
- [[02 - RESOURCES/Notes/Algorithmus\|Algorithmen]] - BFS nutzt [[02 - RESOURCES/Notes/Queue\|Queue]]s
- [[Threads\|Threads]] - BlockingQueue für Multithreading

## Zusammenfassung

>[!quote] Kern-Aussage
>Eine [[02 - RESOURCES/Notes/Queue\|Queue]] ist eine FIFO-Datenstruktur wo Elemente hinten hinzugefügt und vorne entfernt werden - wie eine Warteschlange.

**Merksatz:**
>"First In, First Out - Wer zuerst kommt, wird zuerst bedient!"

**Die 3 Kern-Operationen:**
1. **enqueue()** - Hinten anstellen
2. **dequeue()** - Vorne rauskommen
3. **peek()** - Vorne anschauen ohne rauszukommen

**Unterschied zum [[02 - RESOURCES/Notes/Stack\|Stack]]:**
- [[02 - RESOURCES/Notes/Queue\|Queue]]: Vorne raus, hinten rein (FIFO)
- [[02 - RESOURCES/Notes/Stack\|Stack]]: Oben rein, oben raus (LIFO)

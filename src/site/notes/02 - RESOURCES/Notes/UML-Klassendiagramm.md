---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-klassendiagramm/","tags":["ausbildung/gfn/ap1/vorbereitung","ausbildung/gfn/ap2/vorbereitung","GFN/prüfungsrelevant/AP2","uml/klassendiagramm"],"noteIcon":"","updated":"2025-11-12T15:21:14.442+01:00"}
---


>Ein [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] zeigt die Struktur von Klassen in einem Programm. Es ist wie ein Bauplan für objektorientierte Software.

>>Mit einem [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] siehst du, welche Klassen es gibt, was sie können und wie sie zusammenhängen.

# I. Aufbau eines Klassendiagramms

>So ist eine Klasse im Diagramm aufgebaut.

## Syntax

<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="UML-Klassendiagramm_2024-11-06_1035.58.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":301,"versionNonce":1083222905,"index":"a0","isDeleted":false,"id":"B4AzMn_7u0_Nria3H9u0P","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-135.668368239142,"y":-74.70797729492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1512696857,"groupIds":["eIoEmz1h2v56MEyvySUer"],"frameId":null,"roundness":{"type":1},"boundElements":[],"updated":1730886342252,"link":null,"locked":false},{"type":"line","version":239,"versionNonce":1320985751,"index":"a1","isDeleted":false,"id":"Vi3sB8ZiOHUQKRjXLYu5d","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-133.24301423523576,"y":-36.1513671875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1713832185,"groupIds":["eIoEmz1h2v56MEyvySUer"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730886342253,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"83Lvx1Wt","type":"text","x":-47.375,"y":-70.6875,"width":107.0399169921875,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":1438960983,"version":46,"versionNonce":1826536727,"isDeleted":false,"boundElements":null,"updated":1730885813792,"link":null,"locked":false,"text":"Klassename","rawText":"Klassename","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Klassename","autoResize":true,"lineHeight":1.25},{"id":"4Q981pWa","type":"text","x":-135.9268715798855,"y":-8.34375,"width":304.28113281250006,"height":31.999999999999993,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":null,"seed":1805890199,"version":163,"versionNonce":1070205271,"isDeleted":false,"boundElements":null,"updated":1730885878211,"link":null,"locked":false,"text":"--------------------------","rawText":"--------------------------","fontSize":25.599999999999994,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"--------------------------","autoResize":false,"lineHeight":1.25},{"id":"1bgWJaFu","type":"text","x":-122.08631387940446,"y":-24.925624236058024,"width":129.2656707763672,"height":11.023159723171876,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a4","roundness":null,"seed":376814585,"version":477,"versionNonce":103749113,"isDeleted":false,"boundElements":null,"updated":1730886577521,"link":"[[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]]","locked":false,"text":"+/-/# attributname: datentyp","rawText":"+/-/# attributname: datentyp","fontSize":8.8185277785375,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+/-/# attributname: datentyp","autoResize":true,"lineHeight":1.25},{"id":"IcP24QRe","type":"text","x":-125.86223616855486,"y":17.51080228731226,"width":149.26962280273438,"height":11.023159723171876,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":363849271,"version":593,"versionNonce":1287725847,"isDeleted":false,"boundElements":[],"updated":1730886581670,"link":"[[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]]","locked":false,"text":"+/-/# methodename(): rückgabetyp","rawText":"+/-/# methodename(): rückgabetyp","fontSize":8.8185277785375,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+/-/# methodename(): rückgabetyp","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"round","scrollX":222.305079325485,"scrollY":170.9398566994928,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Klassendiagramm_2024-11-06_1035.58.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

>[!important] Grundstruktur
>Eine Klasse besteht aus drei Teilen:
>
>```
>┌─────────────────────┐
>│   Klassenname       │  ← 1. Name (großgeschrieben!)
>├─────────────────────┤
>│ - attribut: Typ     │  ← 2. Attribute (Eigenschaften)
>│ - weiteres: Typ     │
>├─────────────────────┤
>│ + methode(): Typ    │  ← 3. Methoden (Funktionen)
>│ + andere(): void    │
>└─────────────────────┘
>```

## Zugriffsmodifikatoren

>Zeigen, wer auf Attribute und Methoden zugreifen darf.

>[!note] Sichtbarkeit
>**Die vier Zugriffsmodifikatoren:**
>
>| Symbol | Name            | Bedeutung                    |
>|--------|-----------------|------------------------------|
>| **+**  | Public          | Alle können darauf zugreifen |
>| **-**  | Private         | Nur die Klasse selbst        |
>| **#**  | Protected       | Klasse + Kindklassen         |
>| **~**  | Package-Private | Nur im gleichen Paket        |
>
>**Beispiel:**
>```
>┌─────────────────────┐
>│      Person         │
>├─────────────────────┤
>│ - name: String      │  ← Private (nur intern)
>│ + alter: int        │  ← Public (alle sehen es)
>│ # adresse: String   │  ← Protected (Kindklassen)
>├─────────────────────┤
>│ + getName(): String │  ← Public-Methode
>│ - validate(): bool  │  ← Private-Methode
>└─────────────────────┘
>```

## Datentypen und Rückgabewerte

>[!note] Typen angeben
>**Bei Attributen:**
>```
>- attributName: Datentyp
>```
>Beispiel: `- alter: int`
>
>**Bei Methoden:**
>```
>+ methodenName(parameter: Typ): Rückgabetyp
>```
>Beispiel: `+ berechneAlter(geburtsjahr: int): int`
>
>**Wenn Methode nichts zurückgibt:**
>```
>+ methodenName(): void
>```
>Beispiel: `+ anzeigen(): void`

>[!tip] Namensregeln
>- **Klassenname**: Großgeschrieben (z.B. `Auto`, `Kunde`)
>- **Attribute**: Kleingeschrieben (z.B. `name`, `alter`)
>- **Methoden**: Kleingeschrieben (z.B. `getName()`, `berechnen()`)
>- **Datentypen**: Nach Doppelpunkt (z.B. `: String`, `: int`)


# II. Praxisbeispiel: Von Code zum Diagramm

>So sieht eine echte Klasse in Code und als Diagramm aus.

>[!example] Java-Klasse "Auto"
>**Java-Code:**
>```java
>public class Auto {
>    // Attribute (Eigenschaften) des Autos
>    private String marke;
>    private String modell;
>    private int baujahr;
>    private boolean istAn;
>
>    // Konstruktor zur Initialisierung eines Autos
>    public Auto(String marke, String modell, int baujahr) {
>        this.marke = marke;
>        this.modell = modell;
>        this.baujahr = baujahr;
>        this.istAn = false;
>    }
>
>    // Methode zum Starten des Autos
>    public void starten() {
>        if (!istAn) {
>            istAn = true;
>            System.out.println(marke + " " + modell + " ist gestartet.");
>        } else {
>            System.out.println(marke + " " + modell + " läuft bereits.");
>        }
>    }
>
>    // Methode zum Ausschalten des Autos
>    public void ausschalten() {
>        if (istAn) {
>            istAn = false;
>            System.out.println(marke + " " + modell + " wurde ausgeschaltet.");
>        } else {
>            System.out.println(marke + " " + modell + " ist bereits aus.");
>        }
>    }
>
>    // Getter-Methode
>    public int getBaujahr() {
>        return baujahr;
>    }
>
>    // Methode zur Ausgabe von Informationen
>    public void anzeigenInfo() {
>        System.out.println("Marke: " + marke + ", Modell: " + modell + ", Baujahr: " + baujahr);
>    }
>}
>```

>Diese [[02 - RESOURCES/Notes/Klasse\|Klasse]] können wir in einem [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] darstellen, um eine bessere Übersicht zu haben.

**Als UML-Klassendiagramm:**

<div id="UML-Klassendiagramm_2024-11-06_1116.16.excalidraw.md2"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":311,"versionNonce":1505280921,"index":"a0","isDeleted":false,"id":"SByzgqtcjvrxWWkV9l0os","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-319.1349410625916,"y":-554.7079772949219,"strokeColor":"#000000","backgroundColor":"transparent","width":683.1146378679346,"height":377.8603990342882,"seed":1129927897,"groupIds":["2yB4WqG__Wv9YEoErJ2y3"],"frameId":null,"roundness":{"type":1},"boundElements":[],"updated":1730888220606,"link":null,"locked":false},{"type":"line","version":249,"versionNonce":1306107511,"index":"a1","isDeleted":false,"id":"ySTu6SRb6-58fWUL7OnxQ","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-313.0014245031913,"y":-457.2015488777373,"strokeColor":"#000000","backgroundColor":"transparent","width":681.2491301261091,"height":4.35938566542883,"seed":1860915641,"groupIds":["2yB4WqG__Wv9YEoErJ2y3"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730888220606,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[681.2491301261091,-4.35938566542883]]},{"id":"OpCODTjx","type":"text","x":-54.375,"y":-534.0208333333333,"width":110.6901485866972,"height":58.20900046008937,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":702355607,"version":106,"versionNonce":880135801,"isDeleted":false,"boundElements":null,"updated":1730888555375,"link":null,"locked":false,"text":"Auto","rawText":"Auto","fontSize":46.56720036807148,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Auto","autoResize":true,"lineHeight":1.25},{"id":"9vVh44P7","type":"text","x":-316.375,"y":-387.4652777777778,"width":674.4220818413628,"height":52.32948290531304,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":null,"seed":492396217,"version":156,"versionNonce":155752665,"isDeleted":false,"boundElements":null,"updated":1730888540050,"link":null,"locked":false,"text":"________________________","rawText":"________________________","fontSize":41.86358632425043,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"________________________","autoResize":true,"lineHeight":1.25},{"id":"aIlR3EFg","type":"text","x":-304.1527777777778,"y":-456.35416666666674,"width":152.7198486328125,"height":100,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a4","roundness":null,"seed":1992497209,"version":141,"versionNonce":495413623,"isDeleted":false,"boundElements":null,"updated":1730888536049,"link":null,"locked":false,"text":"- marke: String\n- modell: String\n- baujahr: int\n- istAn: boolean","rawText":"- marke: String\n- modell: String\n- baujahr: int\n- istAn: boolean","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"- marke: String\n- modell: String\n- baujahr: int\n- istAn: boolean","autoResize":true,"lineHeight":1.25},{"id":"cSJ9Wxjo","type":"text","x":-306.37499999999994,"y":-337.4652777777778,"width":560.95947265625,"height":125,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1397489465,"version":219,"versionNonce":549866903,"isDeleted":false,"boundElements":null,"updated":1730888543286,"link":null,"locked":false,"text":"+ Auto(marke: String, modell: String, baujahr: String): void\n+ starten(): void\n+ ausschalten(): void\n+ getBaujahr(): int\n+ anzeigeInfo(): void","rawText":"+ Auto(marke: String, modell: String, baujahr: String): void\n+ starten(): void\n+ ausschalten(): void\n+ getBaujahr(): int\n+ anzeigeInfo(): void","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ Auto(marke: String, modell: String, baujahr: String): void\n+ starten(): void\n+ ausschalten(): void\n+ getBaujahr(): int\n+ anzeigeInfo(): void","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"round","scrollX":438.875,"scrollY":1008.1597222222223,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Klassendiagramm_2024-11-06_1116.16.excalidraw.md2");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

>[!note] Code → Diagramm
>**Vom Code ins Diagramm:**
>```
>Java-Code              UML-Diagramm
>───────────           ─────────────
>class Auto         →  ┌──────────────┐
>                      │     Auto     │
>                      ├──────────────┤
>private String     →  │ - marke: String
>private int        →  │ - baujahr: int
>                      ├──────────────┤
>public void        →  │ + starten(): void
>public int         →  │ + getBaujahr(): int
>                      └──────────────┘
>```

# III. Klassen verbinden

>Klassen stehen nicht alleine - sie haben Beziehungen zueinander.

>[!important] Beziehungstypen
>In [[02 - RESOURCES/Notes/UML\|UML]] gibt es verschiedene Arten von Verbindungen:
>
>1. **[[02 - RESOURCES/Notes/UML-Assoziation\|Assoziation]]** - "kennt" Beziehung
>2. **[[02 - RESOURCES/Notes/Vererbung\|Vererbung]]** - "ist ein" Beziehung
>3. **[[02 - RESOURCES/Notes/UML-Aggregation\|Aggregation]]** - "hat ein" Beziehung (lose)
>4. **[[02 - RESOURCES/Notes/UML-Komposition\|Komposition]]** - "hat ein" Beziehung (fest)

## Assoziation

>Eine einfache Verbindung zwischen Klassen.

```
ASCII-Darstellung:

┌──────────┐           ┌──────────┐
│  Kunde   │───────────│ Bestellung│
└──────────┘           └──────────┘

   "Kunde erstellt Bestellung"
```

>[!note] Siehe: [[02 - RESOURCES/Notes/UML-Assoziation\|UML-Assoziation]] für Details

## Vererbung

>Eine Klasse erbt von einer anderen.

```
ASCII-Darstellung:

     ┌──────────┐
     │  Tier    │
     └────△─────┘
          │ (Dreieck zeigt zum Elternteil)
          │
    ┌─────┴─────┐
    │           │
┌───┴───┐   ┌───┴───┐
│ Hund  │   │ Katze │
└───────┘   └───────┘

"Hund ist ein Tier"
"Katze ist ein Tier"
```

>[!note] Siehe: [[02 - RESOURCES/Notes/UML-Vererbung\|UML-Vererbung]] für Details

## Aggregation

>Eine Klasse "hat" eine andere (lose Verbindung).

```
ASCII-Darstellung:

┌──────────┐        ┌──────────┐
│   Kurs   │◇───────│ Student  │
└──────────┘        └──────────┘
   (Leere Raute)

"Kurs hat Studenten"
(Studenten können ohne Kurs existieren)
```

>[!note] Siehe: [[02 - RESOURCES/Notes/UML-Aggregation\|UML-Aggregation]] für Details

## Komposition

>Eine Klasse "besitzt" eine andere (feste Verbindung).

```
ASCII-Darstellung:

┌──────────┐        ┌──────────┐
│   Haus   │◆───────│  Raum    │
└──────────┘        └──────────┘
   (Gefüllte Raute)

"Haus besteht aus Räumen"
(Räume können nicht ohne Haus existieren)
```

>[!note] Siehe: [[02 - RESOURCES/Notes/UML-Komposition\|UML-Komposition]] für Details

# IV. Multiplizität (Kardinalität)

>Wie viele Objekte können verbunden sein?

>[!important] Multiplizität angeben
>**Notation:**
>```
>┌──────────┐  1      0..*  ┌──────────┐
>│  Kunde   │───────────────│ Bestellung│
>└──────────┘               └──────────┘
>     │                           │
>     └→ 1 Kunde                  └→ 0 oder mehr Bestellungen
>```
>
>**Häufige Multiplizitäten:**
>
>| Notation | Bedeutung                  |
>|----------|----------------------------|
>| **1**    | Genau eins                 |
>| **0..1** | Null oder eins             |
>| **\***   | Beliebig viele (0 bis ∞)   |
>| **0..\***| Null oder mehr             |
>| **1..\***| Eins oder mehr             |
>| **n**    | Genau n (z.B. 5)           |
>| **n..m** | Zwischen n und m (z.B. 2..5)|

>[!example] Beispiele für Multiplizität
>**1:1 Beziehung:**
>```
>┌──────────┐  1      1  ┌──────────┐
>│  Person  │────────────│ Ausweis  │
>└──────────┘            └──────────┘
>"Jede Person hat genau einen Ausweis"
>```
>
>**1:n Beziehung:**
>```
>┌──────────┐  1     0..* ┌──────────┐
>│  Lehrer  │─────────────│  Schüler │
>└──────────┘             └──────────┘
>"Ein Lehrer hat viele Schüler"
>```
>
>**n:m Beziehung:**
>```
>┌──────────┐  *      *  ┌──────────┐
>│  Student │────────────│   Kurs   │
>└──────────┘            └──────────┘
>"Viele Studenten in vielen Kursen"
>```

# V. Abstrakte Klassen

>Klassen, von denen man keine Objekte erstellen kann.

>[!important] Abstrakte Klassen im Diagramm
>**Darstellung:**
>- Klassenname *kursiv* schreiben
>- Oder: `<<abstract>>` über den Namen
>
>```
>┌─────────────────┐
>│  <<abstract>>   │
>│      Tier       │  oder  ┌──────────┐
>├─────────────────┤        │  *Tier*  │
>│ + bewegen()     │        └──────────┘
>└─────────────────┘
>```
>
>**Eigenschaften:**
>- Kann nicht instanziiert werden
>- Dient als Vorlage für Kindklassen
>- Kann abstrakte Methoden haben

>[!note] Siehe: [[02 - RESOURCES/Notes/UML - Abstrakte Klassen\|UML - Abstrakte Klassen]] für Details

# VI. Prüfungswissen

>Das musst du für die [[02 - RESOURCES/Notes/IHK\|IHK]]-Prüfung können.

>[!important] Prüfungsrelevant
>**Aufbau kennen:**
>- Drei Bereiche: Name, Attribute, Methoden
>- Zugriffsmodifikatoren: +, -, #, ~
>- Datentypen nach Doppelpunkt
>
>**Beziehungen zeichnen können:**
>- Assoziation (einfache Linie)
>- Vererbung (Dreieck zum Elternteil)
>- Aggregation (leere Raute)
>- Komposition (gefüllte Raute)
>
>**Multiplizität verstehen:**
>- 1, *, 0..1, 1..*, 0..*
>- An beide Enden der Linie schreiben
>
>**Von Code ins Diagramm:**
>- Java-Klasse in UML umwandeln können
>- Attribute und Methoden richtig eintragen
>- Beziehungen erkennen

>[!example] Typische Prüfungsfrage
>**Frage:** "Erstellen Sie ein Klassendiagramm für ein Bibliothekssystem mit den Klassen Buch, Autor und Ausleihe."
>
>**Antwort:**
>```
>┌────────────────┐  1      1..*  ┌──────────────┐
>│     Autor      │────────────────│     Buch     │
>├────────────────┤                ├──────────────┤
>│ - name: String │                │ - titel: String│
>│ - id: int      │                │ - isbn: String│
>├────────────────┤                ├──────────────┤
>│ + getName()    │                │ + ausleihen()│
>└────────────────┘                └──────┬───────┘
>                                         │
>                                      1  │ 0..*
>                                         │
>                                   ┌─────┴──────┐
>                                   │  Ausleihe  │
>                                   ├────────────┤
>                                   │ - datum    │
>                                   │ - kunde    │
>                                   └────────────┘
>
>Erklärung:
>- Ein Autor schreibt 1 oder mehr Bücher (1:*)
>- Ein Buch kann 0 oder mehr Ausleihen haben (1:0..*)
>```

# VII. Häufige Fehler

>Das solltest du vermeiden.

>[!warning] Typische Fehler
>**1. Falsche Zugriffsmodifikatoren:**
>```
>❌ FALSCH:
>public name: String
>
>✅ RICHTIG:
>+ name: String
>```
>
>**2. Klassenname klein geschrieben:**
>```
>❌ FALSCH:
>┌──────────┐
>│   auto   │
>
>✅ RICHTIG:
>┌──────────┐
>│   Auto   │
>```
>
>**3. Vererbungspfeil falsch:**
>```
>❌ FALSCH:
>Hund ──→ Tier
>
>✅ RICHTIG:
>Hund ──△ Tier
>(Dreieck zeigt zum Elternteil!)
>```
>
>**4. Multiplizität vergessen:**
>```
>❌ FALSCH:
>Kunde ───── Bestellung
>
>✅ RICHTIG:
>Kunde ──1:*── Bestellung
>```

# VIII. Zusammenfassung

>[!summary] Das Wichtigste auf einen Blick
>**Klassendiagramm zeigt:**
>- Aufbau von Klassen (Attribute + Methoden)
>- Beziehungen zwischen Klassen
>- Sichtbarkeit (public, private, protected)
>- Multiplizität (wie viele?)
>
>**Wichtigste Beziehungen:**
>- Assoziation: ─────
>- Vererbung: ──△
>- Aggregation: ◇────
>- Komposition: ◆────
>
>**Für die Prüfung:**
>- Symbole kennen und anwenden
>- Diagramm aus Text/Code erstellen
>- Beziehungen richtig zeichnen
>- Multiplizität angeben
---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-aggregation/","tags":["uml/klassendiagramm","informatik/oop","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:11:22.000+01:00"}
---

>Aggregation ist eine spezielle Form der [[02 - RESOURCES/Notes/UML-Assoziation\|UML-Assoziation]], die eine "hat-eine"-Beziehung darstellt, bei der das Teil-Objekt unabhängig vom Ganzen existieren kann.
>>In UML wird Aggregation durch eine Linie mit einer **hohlen Raute** (◇) dargestellt. Die Raute zeigt zur "Ganzes"-Klasse.

>[!summary] Kernpunkte
>**Aggregation** ist eine schwache "HAS-A"-Beziehung:
>- Darstellung: **Hohle Raute** (◇) + Linie
>- Bedeutung: "hat" / "besteht aus"
>- **Teil kann ohne Ganzes existieren** (Hauptunterschied zur [[02 - RESOURCES/Notes/UML-Komposition\|UML-Komposition]])
>- Raute zeigt immer zur "Ganzes"-Klasse
>- Beispiel: Auto hat Räder (Räder können auch ohne Auto existieren)

## ASCII-Diagramm: UML-Aggregation

```
AGGREGATION (SCHWACHE BESITZBEZIEHUNG)

┌────────────────┐           ┌────────────────┐
│   UNIVERSITÄT  │◇──────────│    STUDENT     │
├────────────────┤           ├────────────────┤
│ - name: String │           │ - name: String │
│ - ort: String  │           │ - matrikel: int│
└────────────────┘           └────────────────┘
      ◇ Hohle Raute

BEDEUTUNG:
→ Universität "hat" Studenten
→ Student kann ohne Universität existieren
   (Student kann Uni wechseln)
→ ◇ zeigt zur "Ganzes"-Klasse (Universität)
```

## Aggregation vs. Komposition vs. Assoziation

```
VERGLEICH DER BEZIEHUNGEN

ASSOZIATION (einfache Linie)
┌────────┐           ┌────────┐
│PERSON  │───────────│ ADRESSE│
└────────┘           └────────┘
→ Kennt sich
→ Keine Besitzbeziehung


AGGREGATION (hohle Raute)
┌────────┐           ┌────────┐
│FIRMA   │◇──────────│ANGESTELL│
└────────┘           └────────┘
→ "Hat"-Beziehung
→ Teil kann ohne Ganzes existieren
→ Angestellter kann Firma wechseln


KOMPOSITION (gefüllte Raute)  → [[02 - RESOURCES/Notes/UML-Komposition\|UML-Komposition]]
┌────────┐           ┌────────┐
│ HAUS   │◆──────────│ ZIMMER │
└────────┘           └────────┘
→ "Besteht aus"-Beziehung
→ Teil stirbt mit Ganzem
→ Zimmer kann ohne Haus nicht existieren
```

## Java-Code-Beispiel

```java
// AGGREGATION: Abteilung hat Mitarbeiter

public class Abteilung {
    private String name;
    private List<Mitarbeiter> mitarbeiter;  // ← Aggregation

    public Abteilung(String name) {
        this.name = name;
        this.mitarbeiter = new ArrayList<>();
    }

    public void mitarbeiterHinzufuegen(Mitarbeiter m) {
        mitarbeiter.add(m);
    }

    public void mitarbeiterEntfernen(Mitarbeiter m) {
        mitarbeiter.remove(m);
    }
}

public class Mitarbeiter {
    private String name;

    public Mitarbeiter(String name) {
        this.name = name;
    }
}

// VERWENDUNG
Mitarbeiter anna = new Mitarbeiter("Anna");
Mitarbeiter max = new Mitarbeiter("Max");

Abteilung it = new Abteilung("IT");
it.mitarbeiterHinzufuegen(anna);
it.mitarbeiterHinzufuegen(max);

// Wenn it gelöscht wird, existieren anna und max weiter!
it = null;
// anna und max können zu anderer Abteilung wechseln
```

## Multiplizität bei Aggregation

```
KARDINALITÄTEN

     1              1..*
┌─────────┐     ┌─────────┐
│  TEAM   │◇────│ SPIELER │
└─────────┘     └─────────┘

→ Ein Team hat mindestens einen Spieler
→ Spieler können Team wechseln
→ Wenn Team aufgelöst wird, existieren Spieler weiter
```

>[!important] Wichtig für AP2
>**Aggregation Merkmale:**
>- **Notation:** Hohle Raute (◇) + Linie
>- **Bedeutung:** "hat" / schwache Besitzbeziehung
>- **Raute zeigt zum Ganzen** (nicht zum Teil!)
>- **Teil existiert unabhängig** vom Ganzen
>
>**Unterschiede:**
>- **Aggregation:** ◇─── (hohle Raute) - Teil kann ohne Ganzes existieren
>- **Komposition:** ◆─── (gefüllte Raute) - Teil stirbt mit Ganzem
>- **Assoziation:** ─── (einfache Linie) - nur Referenz
>
>**Typische Prüfungsfrage:** "Was ist der Unterschied zwischen Aggregation und Komposition?"
>→ Antwort: Bei Aggregation kann Teil ohne Ganzes existieren, bei Komposition nicht!

>[!example] Praxis-Beispiel

```
BEISPIEL: BIBLIOTHEK

┌─────────────┐         ┌─────────────┐
│ BIBLIOTHEK  │◇────────│    BUCH     │
├─────────────┤    1  * ├─────────────┤
│ - name      │         │ - titel     │
│ - ort       │         │ - isbn      │
└─────────────┘         └─────────────┘

→ Bibliothek "hat" Bücher
→ Wenn Bibliothek geschlossen wird, existieren Bücher weiter
   (können an andere Bibliothek verkauft werden)
→ AGGREGATION (◇)
```

>[!tip] Praxis-Tipps für AP2
>1. **Rauten-Richtung:** Hohle Raute zeigt immer zum "Ganzen" (Container)
>2. **Test für Aggregation:** "Kann Teil ohne Ganzes existieren?" → Ja = Aggregation
>3. **Eselsbrücke:** "Hohle Raute = Hohlraum = Teile können raus (unabhängig existieren)"
>4. **Typischer Fehler:** Raute auf falsche Seite zeichnen

## Verwandte Konzepte
- [[UML-Komposition]] - Starke Besitzbeziehung
- [[02 - RESOURCES/Notes/UML-Assoziation\|UML-Assoziation]] - Einfache Beziehung
- [[02 - RESOURCES/Notes/Vererbung\|Vererbung]] - IS-A Beziehung

<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="UML-Aggregation_2024-11-06_1756.40.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.16.1","elements":[{"type":"rectangle","version":302,"versionNonce":1340257111,"index":"a0","isDeleted":false,"id":"wozgZ_oAnb_2ndppMEmKJ","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-419.43815267314204,"y":-89.70797729492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":271913337,"groupIds":["mkF80bHAO-6TMCCQox_wB"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"kKy2qwNVgsDGJYrHGrgCr","type":"arrow"}],"updated":1730912278035,"link":null,"locked":false},{"type":"line","version":239,"versionNonce":967903639,"index":"a1","isDeleted":false,"id":"iqf-qRbYbzR4mCh4bGpfV","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-417.0127986692358,"y":-51.1513671875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1852209753,"groupIds":["mkF80bHAO-6TMCCQox_wB"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730912278035,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]],"polygon":false},{"id":"IM8glql4","type":"text","x":-342,"y":-85.2109375,"width":90.35993957519531,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":1932081369,"version":95,"versionNonce":1009368759,"isDeleted":false,"boundElements":[],"updated":1730912278035,"link":null,"locked":false,"text":"Tastatur","rawText":"Tastatur","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Tastatur","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":263,"versionNonce":1411274201,"index":"a3","isDeleted":false,"id":"VZrpPZQ-QXLe7NKDySRCb","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":63.323277960373076,"y":-92.91891479492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1568945145,"groupIds":["Skb4Qehed75Xkn8VSTIMf"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"kKy2qwNVgsDGJYrHGrgCr","type":"arrow"}],"updated":1730912254796,"link":null,"locked":false},{"type":"line","version":200,"versionNonce":1371991961,"index":"a4","isDeleted":false,"id":"UWGRK6OHjqU8foKTlyVCF","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":65.74863196427933,"y":-54.3623046875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":984435929,"groupIds":["Skb4Qehed75Xkn8VSTIMf"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730912232676,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]],"polygon":false},{"id":"qJyeaYzV","type":"text","x":181,"y":-86.2109375,"width":26.53997802734375,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1889878199,"version":48,"versionNonce":123590327,"isDeleted":false,"boundElements":[],"updated":1730912240515,"link":null,"locked":false,"text":"PC","rawText":"PC","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"PC","autoResize":true,"lineHeight":1.25},{"id":"kKy2qwNVgsDGJYrHGrgCr","type":"arrow","x":-144.31663167704824,"y":-13.2109375,"width":202.63990963742128,"height":0,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":966086007,"version":159,"versionNonce":2046832759,"isDeleted":false,"boundElements":[],"updated":1730912278035,"link":null,"locked":false,"points":[[0,0],[202.63990963742128,0]],"lastCommittedPoint":null,"startBinding":{"elementId":"wozgZ_oAnb_2ndppMEmKJ","focus":0.0340823171357655,"gap":4.316631677048292,"fixedPoint":[1.0185101874947327,0.5119737045813554]},"endBinding":{"elementId":"VZrpPZQ-QXLe7NKDySRCb","focus":-0.055505954080011764,"gap":9.323277960373048,"fixedPoint":[-0.018510187494732544,0.533463628524312]},"startArrowhead":null,"endArrowhead":"diamond_outline","elbowed":true,"fixedSegments":null},{"id":"RAz7tbtYJqcJPLoIs7crX","type":"freedraw","x":-71.82130500190897,"y":-178.7265625,"width":87,"height":127,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":40,"groupIds":[],"frameId":null,"index":"a8","roundness":null,"seed":941485320,"version":60,"versionNonce":2060902264,"isDeleted":false,"boundElements":null,"updated":1762427119049,"link":null,"locked":false,"points":[[0,0],[5,7.5],[8.5,13],[19.5,31.5],[26,42.5],[31,52],[37.5,64.5],[39.5,69],[44.5,76],[48,82],[50.5,86],[53,90.5],[55,93.5],[55.5,94.5],[55.5,95],[56.5,95.5],[57,96.5],[58,98.5],[58.5,99],[59.5,101],[60.5,102.5],[61.5,104.5],[62,105.5],[62.5,106],[64,107.5],[65,108.5],[66,110],[67,111.5],[67.5,113],[68.5,113.5],[69.5,115],[70.5,116.5],[71,118],[72.5,120],[74,121.5],[74.5,122],[75,122],[76,122.5],[77,123],[77.5,123.5],[78,124],[79.5,124],[82,125],[82,125.5],[82.5,125.5],[83.5,126],[84.5,126],[85.5,126.5],[86.5,127],[87,127],[87,127]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[87,127]},{"id":"auPI_yhdk94m8tLVMt7jm","type":"freedraw","x":-41.82130500190897,"y":-61.7265625,"width":65,"height":62.5,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":40,"groupIds":[],"frameId":null,"index":"a9","roundness":null,"seed":720670984,"version":46,"versionNonce":1533945864,"isDeleted":false,"boundElements":null,"updated":1762427125830,"link":null,"locked":false,"points":[[0,0],[0.5,0],[6,2],[9,3],[18.5,9],[29,15],[34,18],[45,23],[55,28],[58.5,29],[60.5,29.5],[61.5,29.5],[62,29.5],[63.5,29.5],[64,29.5],[65,29],[65,26.5],[65,25],[65,19.5],[64.5,16.5],[64.5,12],[64.5,6],[64.5,-4.5],[64.5,-12],[64.5,-17.5],[64.5,-20.5],[64.5,-23.5],[65,-28.5],[65,-29.5],[65,-31.5],[65,-32.5],[65,-33],[65,-33]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[65,-33]},{"id":"i4o1Jl3FL3X0V76Dk-evV","type":"freedraw","x":-334.32130500190897,"y":-235.2265625,"width":183.5,"height":2,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aA","roundness":null,"seed":1523957256,"version":51,"versionNonce":1644728184,"isDeleted":false,"boundElements":null,"updated":1762427092883,"link":null,"locked":false,"points":[[0,0],[0,-0.5],[2,-1],[15.5,-1],[19,-1],[30,-1],[37,-1.5],[44,-2],[52,-2],[57,-2],[62,-2],[69,-2],[73.5,-2],[78.5,-2],[83,-2],[88.5,-2],[91.5,-2],[94.5,-2],[97.5,-2],[100.5,-2],[104.5,-2],[107.5,-2],[110.5,-1.5],[112.5,-1.5],[116,-1.5],[118.5,-1.5],[121.5,-1.5],[123.5,-1.5],[127,-1.5],[133.5,-1.5],[137.5,-1.5],[140.5,-1.5],[143.5,-1.5],[149,-1.5],[152,-1.5],[155,-1.5],[157.5,-1.5],[160,-1.5],[161,-1.5],[164.5,-1.5],[167.5,-1.5],[170.5,-1.5],[175.5,-1.5],[178,-1.5],[179.5,-1.5],[180.5,-1.5],[181.5,-1.5],[183,-1.5],[183.5,-1.5],[183.5,-1.5]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[183.5,-1.5]},{"id":"nxIa6AipRxEEG-HnXAWeW","type":"freedraw","x":-150.82130500190897,"y":-236.7265625,"width":139,"height":66,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aB","roundness":null,"seed":844435832,"version":135,"versionNonce":453279496,"isDeleted":false,"boundElements":null,"updated":1762427098274,"link":null,"locked":false,"points":[[0,0],[1,0],[3.5,-0.5],[9.5,-3.5],[15.5,-7],[27,-13.5],[34.5,-17.5],[43,-22.5],[49,-25.5],[55,-29],[58,-30.5],[61,-32],[62.5,-33],[66.5,-35],[68,-36],[71,-38],[73,-39],[75,-40],[77.5,-41.5],[79,-43],[80,-43.5],[81,-44],[82,-44.5],[82.5,-45],[83,-45.5],[84,-45.5],[84.5,-45.5],[86,-45],[88.5,-43.5],[92.5,-40],[95.5,-37.5],[98,-35],[101.5,-32],[103.5,-30.5],[108,-27.5],[110,-26],[112,-24.5],[114,-23],[117,-21.5],[118.5,-20.5],[119.5,-20],[121,-19.5],[124,-18],[127,-16.5],[128.5,-15.5],[130.5,-14],[133.5,-11.5],[135,-10.5],[136.5,-9.5],[137.5,-9],[138,-8],[138.5,-7.5],[139,-7.5],[139,-7],[139,-6.5],[137,-6],[135.5,-4.5],[134.5,-3.5],[133,-2.5],[133,-2],[132,-1.5],[131,-1.5],[130,-0.5],[128,0.5],[127,1.5],[125.5,2],[124,2.5],[121,4],[119,5.5],[116.5,7],[116,7.5],[114,8.5],[112,9],[111,9.5],[110.5,10],[109,10.5],[106,12],[104.5,12.5],[102.5,13.5],[101,14],[99,15],[98.5,15],[96.5,16],[95.5,16],[94,16.5],[91.5,17.5],[90.5,18],[89,19],[88,19],[87,19.5],[86.5,19.5],[86,20],[85.5,20.5],[85,20.5],[84,20.5],[83,20.5],[81,20.5],[79.5,20.5],[78,20.5],[76,20.5],[75,20.5],[73,20.5],[71.5,20.5],[69,20.5],[66,20],[60,18.5],[55.5,17],[51,16],[47,14.5],[43.5,13.5],[38,12],[34.5,11],[31.5,10],[30,9.5],[27,8.5],[25,8],[23.5,7.5],[21.5,7],[20,6.5],[19,6],[18,5.5],[17.5,5.5],[16.5,5.5],[16,5],[15,5],[14.5,5],[13.5,5],[13,5],[12.5,5],[11.5,5],[11,5],[10,5],[9.5,5],[9.5,5]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[9.5,5]}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":40,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"diamond_outline","currentItemArrowType":"elbow","currentItemFrameRole":null,"scrollX":603.571305001909,"scrollY":404.984375,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true,"markerName":true,"markerEnabled":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"fromSelection":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Aggregation_2024-11-06_1756.40.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

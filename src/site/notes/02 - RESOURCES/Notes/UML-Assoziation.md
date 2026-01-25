---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-assoziation/","tags":["uml/klassendiagramm","informatik/oop","GFN/prüfungsrelevant/AP2"],"noteIcon":"","updated":"2025-11-12T15:11:21.000+01:00"}
---

>Eine Assoziation ist eine Beziehung zwischen zwei Klassen, die anzeigt, dass Objekte der einen Klasse mit Objekten der anderen Klasse in Verbindung stehen.
>>Zwei Klassen werden mit einer **einfachen Linie** verbunden. Eine Klasse kann eine Referenz auf eine Instanz der anderen Klasse enthalten.

>[!summary] Kernpunkte
>**Assoziation** ist die allgemeinste Form einer Beziehung in UML:
>- Darstellung: **Einfache Linie** zwischen Klassen
>- Bedeutung: "kennt" oder "hat Referenz auf"
>- Keine Besitzbeziehung (im Gegensatz zu [[02 - RESOURCES/Notes/UML-Komposition\|UML-Komposition]])
>- Objekte können unabhängig voneinander existieren
>- Bidirektional oder unidirektional

## ASCII-Diagramm: UML-Assoziation

```
ASSOZIATION (EINFACHE BEZIEHUNG)

┌────────────────┐           ┌────────────────┐
│    STUDENT     │───────────│     KURS       │
├────────────────┤           ├────────────────┤
│ - name: String │           │ - titel: String│
│ - matrikel: int│           │ - credits: int │
├────────────────┤           ├────────────────┤
│ + belegen()    │           │ + starten()    │
└────────────────┘           └────────────────┘

BEDEUTUNG:
→ Student "kennt" Kurs
→ Einfache Linie = Assoziation
→ Keine Besitzbeziehung
→ Beide können unabhängig existieren
```

## Unidirektionale vs. Bidirektionale Assoziation

```
UNIDIREKTIONAL (Pfeil zeigt Navigationsrichtung)

┌────────────┐         ┌────────────┐
│  PERSON    │────────>│  ADRESSE   │
└────────────┘         └────────────┘
→ Person kennt Adresse
→ Adresse kennt Person NICHT


BIDIREKTIONAL (keine Pfeile oder Pfeile in beide Richtungen)

┌────────────┐         ┌────────────┐
│  KUNDE     │─────────│ BESTELLUNG │
└────────────┘         └────────────┘
→ Kunde kennt Bestellung
→ Bestellung kennt Kunde
```

## Multiplizität (Kardinalität)

```
MULTIPLIZITÄT BEI ASSOZIATIONEN

     1              *
┌─────────┐     ┌─────────┐
│ PERSON  │─────│  AUTO   │
└─────────┘     └─────────┘

Bedeutung:
1 = genau eine
* = beliebig viele (0..*)
0..1 = optional (0 oder 1)
1..* = mindestens eine

Beispiel:
→ Eine Person (1) besitzt mehrere (*) Autos
→ Ein Auto (*) gehört zu einer (1) Person
```

## Java-Code-Beispiel

```java
// ASSOZIATION: Student kennt Kurs

public class Student {
    private String name;
    private Kurs[] kurse;  // ← Assoziation (Referenz auf Kurs)

    public Student(String name) {
        this.name = name;
        this.kurse = new Kurs[10];
    }

    public void kursBesuchen(Kurs kurs) {
        // Student nimmt Kurs auf
        // Kurs existiert unabhängig vom Student
    }
}

public class Kurs {
    private String titel;

    public Kurs(String titel) {
        this.titel = titel;
    }
}

// VERWENDUNG
Kurs mathe = new Kurs("Mathematik");
Student anna = new Student("Anna");
anna.kursBesuchen(mathe);  // Assoziation

// Wenn anna gelöscht wird, existiert mathe weiter!
anna = null;
// mathe existiert noch
```

>[!important] Wichtig für AP2
>**Assoziation Merkmale:**
>- **Notation:** Einfache Linie (───) zwischen Klassen
>- **Bedeutung:** "kennt" / "hat Referenz auf"
>- **Unabhängigkeit:** Beide Objekte existieren unabhängig
>- **Keine Besitzbeziehung** (im Gegensatz zu [[02 - RESOURCES/Notes/UML-Komposition\|UML-Komposition]] oder [[02 - RESOURCES/Notes/UML-Aggregation\|UML-Aggregation]])
>
>**Unterschiede:**
>- **Assoziation:** ─── (einfache Linie)
>- **Aggregation:** ◇─── (leere Raute)
>- **Komposition:** ◆─── (gefüllte Raute)
>- **Vererbung:** ───▷ (leerer Pfeil)

>[!example] Praxis-Beispiel

```
BEISPIEL: BANK-SYSTEM

┌─────────────┐         ┌─────────────┐
│   KUNDE     │─────────│    KONTO    │
├─────────────┤    1  * ├─────────────┤
│ - name      │         │ - kontonr   │
│ - id        │         │ - saldo     │
└─────────────┘         └─────────────┘

→ Ein Kunde kann mehrere Konten haben
→ Wenn Kunde gelöscht wird, bleiben Konten bestehen
   (können anderen Kunden zugeordnet werden)
→ ASSOZIATION (keine Besitzbeziehung)
```

>[!tip] Praxis-Tipps für AP2
>1. **Assoziation = einfachste Beziehung** (nur Linie, keine Raute)
>2. **Test:** "Wenn A gelöscht wird, kann B weiter existieren?" → Ja = Assoziation
>3. **Typische Prüfungsfrage:** "Was ist der Unterschied zwischen Assoziation und Komposition?"
>   → Antwort: Bei Assoziation keine Besitzbeziehung, bei Komposition stirbt Teil mit Ganzem

## Verwandte Konzepte
- [[02 - RESOURCES/Notes/UML-Aggregation\|UML-Aggregation]] - Schwache Besitzbeziehung
- [[02 - RESOURCES/Notes/UML-Komposition\|UML-Komposition]] - Starke Besitzbeziehung
- [[02 - RESOURCES/Notes/Vererbung\|Vererbung]] - IS-A Beziehung
- [[02 - RESOURCES/Notes/Relationship\|Relationship]] - ER-Modell Beziehung
- [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] - Übergeordnetes Konzept

<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="UML-Assoziation_2024-11-06_1645.25.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":249,"versionNonce":2110833143,"index":"a0","isDeleted":false,"id":"XHxPGiWsyzO4wue9Is8H-","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-146.96900032963603,"y":-156.70797729492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1510528087,"groupIds":["KUPX0snGGDtGXEC8TW7vj"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"DqnEzSuE-w8UVPHyHzfWj","type":"arrow"}],"updated":1730907977204,"link":null,"locked":false},{"type":"line","version":186,"versionNonce":229426745,"index":"a1","isDeleted":false,"id":"kI1wLVBwYOHLCzLw0aYiX","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-144.54364632572978,"y":-118.1513671875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":2092577143,"groupIds":["KUPX0snGGDtGXEC8TW7vj"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730907955215,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"z481u7fw","type":"text","x":-52,"y":-152.2109375,"width":74.25993347167969,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":2011872057,"version":52,"versionNonce":1955174169,"isDeleted":false,"boundElements":null,"updated":1730907955215,"link":null,"locked":false,"text":"KlasseA","rawText":"KlasseA","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"KlasseA","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":300,"versionNonce":852129753,"index":"a3","isDeleted":false,"id":"zP0u23VMVla7FrYcNcbtw","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-153.42882316913452,"y":114.08108520507812,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1643868759,"groupIds":["AMWQappdvq2boYsKr52Ij"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"DqnEzSuE-w8UVPHyHzfWj","type":"arrow"}],"updated":1730907999023,"link":null,"locked":false},{"type":"line","version":237,"versionNonce":2125403545,"index":"a4","isDeleted":false,"id":"t7tSi4zNcjkcTiII0hRVo","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-151.00346916522827,"y":152.6376953125,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1755910007,"groupIds":["AMWQappdvq2boYsKr52Ij"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730907999023,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"omPK3pLD","type":"text","x":-58.459822839498514,"y":118.578125,"width":75.95993041992188,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1038485655,"version":106,"versionNonce":1665858169,"isDeleted":false,"boundElements":[],"updated":1730907999023,"link":null,"locked":false,"text":"KlasseB","rawText":"KlasseB","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"KlasseB","autoResize":true,"lineHeight":1.25},{"id":"DqnEzSuE-w8UVPHyHzfWj","type":"arrow","x":-16,"y":-2.292022705078125,"width":0,"height":111.37310791015625,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":611229559,"version":123,"versionNonce":977278137,"isDeleted":false,"boundElements":null,"updated":1730907999023,"link":null,"locked":false,"points":[[0,0],[0,111.37310791015625]],"lastCommittedPoint":[7,98],"startBinding":{"elementId":"XHxPGiWsyzO4wue9Is8H-","focus":0.07177282993038166,"gap":9.081085205078125,"fixedPoint":[0.48485215041984747,1.033463628524312]},"endBinding":{"elementId":"zP0u23VMVla7FrYcNcbtw","focus":0.06163788548427139,"gap":13.292022705078125,"fixedPoint":[0.5087666568082219,-0.033463628524311985]},"startArrowhead":null,"endArrowhead":null,"elbowed":true}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":null,"currentItemArrowType":"elbow","scrollX":462,"scrollY":453.7890625,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Assoziation_2024-11-06_1645.25.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
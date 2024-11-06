---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-klassendiagramm/","tags":["GFN/prüfungsrelevant/AP2","empty"],"noteIcon":"","updated":"2024-11-06T11:02:39.361+01:00"}
---

>Ein **Klassendiagramm** ist ein [[02 - RESOURCES/Notes/UML\|UML]]-Diagramm, das die Struktur eines Systems durch Klassen, ihre Eigenschaften, Methoden und Beziehungen zueinander darstellt.
>Es wird verwendet, um die logische Architektur eines Systems zu modellieren und den Aufbau sowie die Interaktionen der einzelnen Komponenten zu visualisieren. 
>>Klassendiagramme sind besonders nützlich für die Planung objektorientierter Systeme, da sie das Design und die Abhängigkeiten klar und strukturiert darstellen.

# Syntax
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="UML-Klassendiagramm_2024-11-06_1035.58.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":301,"versionNonce":1083222905,"index":"a0","isDeleted":false,"id":"B4AzMn_7u0_Nria3H9u0P","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-135.668368239142,"y":-74.70797729492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1512696857,"groupIds":["eIoEmz1h2v56MEyvySUer"],"frameId":null,"roundness":{"type":1},"boundElements":[],"updated":1730886342252,"link":null,"locked":false},{"type":"line","version":239,"versionNonce":1320985751,"index":"a1","isDeleted":false,"id":"Vi3sB8ZiOHUQKRjXLYu5d","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-133.24301423523576,"y":-36.1513671875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1713832185,"groupIds":["eIoEmz1h2v56MEyvySUer"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730886342253,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"83Lvx1Wt","type":"text","x":-47.375,"y":-70.6875,"width":107.0399169921875,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":1438960983,"version":46,"versionNonce":1826536727,"isDeleted":false,"boundElements":null,"updated":1730885813792,"link":null,"locked":false,"text":"Klassename","rawText":"Klassename","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Klassename","autoResize":true,"lineHeight":1.25},{"id":"4Q981pWa","type":"text","x":-135.9268715798855,"y":-8.34375,"width":304.28113281250006,"height":31.999999999999993,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":null,"seed":1805890199,"version":163,"versionNonce":1070205271,"isDeleted":false,"boundElements":null,"updated":1730885878211,"link":null,"locked":false,"text":"--------------------------","rawText":"--------------------------","fontSize":25.599999999999994,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"--------------------------","autoResize":false,"lineHeight":1.25},{"id":"1bgWJaFu","type":"text","x":-122.08631387940446,"y":-24.925624236058024,"width":129.2656707763672,"height":11.023159723171876,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a4","roundness":null,"seed":376814585,"version":477,"versionNonce":103749113,"isDeleted":false,"boundElements":null,"updated":1730886577521,"link":"[[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]]","locked":false,"text":"+/-/# attributname: datentyp","rawText":"+/-/# attributname: datentyp","fontSize":8.8185277785375,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+/-/# attributname: datentyp","autoResize":true,"lineHeight":1.25},{"id":"IcP24QRe","type":"text","x":-125.86223616855486,"y":17.51080228731226,"width":149.26962280273438,"height":11.023159723171876,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":363849271,"version":593,"versionNonce":1287725847,"isDeleted":false,"boundElements":[],"updated":1730886581670,"link":"[[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]]","locked":false,"text":"+/-/# methodename(): rückgabetyp","rawText":"+/-/# methodename(): rückgabetyp","fontSize":8.8185277785375,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+/-/# methodename(): rückgabetyp","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"round","scrollX":222.305079325485,"scrollY":170.9398566994928,"zoom":{"value":1.998456},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Klassendiagramm_2024-11-06_1035.58.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
>**Klassename** muss immer großgeschrieben sein.
>**+/-/#** ist damit die [[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]] gemeint.
>- \+  Public
>- \-  Private
>- \#  Protected



# Bsp
```java
public class Auto {
    // Attribute (Eigenschaften) des Autos
    private String marke;
    private String modell;
    private int baujahr;
    private boolean istAn;

    // Konstruktor zur Initialisierung eines Autos
    public Auto(String marke, String modell, int baujahr) {
        this.marke = marke;
        this.modell = modell;
        this.baujahr = baujahr;
        this.istAn = false; // Auto ist standardmäßig ausgeschaltet
    }

    // Methode zum Starten des Autos
    public void starten() {
        if (!istAn) {
            istAn = true;
            System.out.println(marke + " " + modell + " ist gestartet.");
        } else {
            System.out.println(marke + " " + modell + " läuft bereits.");
        }
    }

    // Methode zum Ausschalten des Autos
    public void ausschalten() {
        if (istAn) {
            istAn = false;
            System.out.println(marke + " " + modell + " wurde ausgeschaltet.");
        } else {
            System.out.println(marke + " " + modell + " ist bereits aus.");
        }
    }

    // Getter-Methode, um das Baujahr abzurufen
    public int getBaujahr() {
        return baujahr;
    }

    // Methode zur Ausgabe von Informationen über das Auto
    public void anzeigenInfo() {
        System.out.println("Marke: " + marke + ", Modell: " + modell + ", Baujahr: " + baujahr);
    }
}
```
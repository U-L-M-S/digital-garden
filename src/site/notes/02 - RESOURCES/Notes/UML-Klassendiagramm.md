---
{"dg-publish":true,"permalink":"/02-resources/notes/uml-klassendiagramm/","tags":["ausbildung/gfn/ap1/vorbereitung","uml/klassendiagramm"],"noteIcon":"","updated":"2025-11-07T14:47:42.165+01:00"}
---

>Ein **Klassendiagramm** ist ein [[02 - RESOURCES/Notes/UML\|UML]]-Diagramm, das die Struktur eines Systems durch Klassen, ihre Eigenschaften, Methoden und Beziehungen zueinander darstellt. 
>Es wird verwendet, um die logische Architektur eines Systems zu modellieren und den Aufbau sowie die Interaktionen der einzelnen Komponenten zu visualisieren.
>>Klassendiagramme sind besonders nützlich für die Planung objektorientierter Systeme, da sie das Design und die Abhängigkeiten klar und strukturiert darstellen.

# Syntax
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="UML-Klassendiagramm_2024-11-06_1035.58.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":301,"versionNonce":1083222905,"index":"a0","isDeleted":false,"id":"B4AzMn_7u0_Nria3H9u0P","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-135.668368239142,"y":-74.70797729492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1512696857,"groupIds":["eIoEmz1h2v56MEyvySUer"],"frameId":null,"roundness":{"type":1},"boundElements":[],"updated":1730886342252,"link":null,"locked":false},{"type":"line","version":239,"versionNonce":1320985751,"index":"a1","isDeleted":false,"id":"Vi3sB8ZiOHUQKRjXLYu5d","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-133.24301423523576,"y":-36.1513671875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1713832185,"groupIds":["eIoEmz1h2v56MEyvySUer"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730886342253,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"83Lvx1Wt","type":"text","x":-47.375,"y":-70.6875,"width":107.0399169921875,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":1438960983,"version":46,"versionNonce":1826536727,"isDeleted":false,"boundElements":null,"updated":1730885813792,"link":null,"locked":false,"text":"Klassename","rawText":"Klassename","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Klassename","autoResize":true,"lineHeight":1.25},{"id":"4Q981pWa","type":"text","x":-135.9268715798855,"y":-8.34375,"width":304.28113281250006,"height":31.999999999999993,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":null,"seed":1805890199,"version":163,"versionNonce":1070205271,"isDeleted":false,"boundElements":null,"updated":1730885878211,"link":null,"locked":false,"text":"--------------------------","rawText":"--------------------------","fontSize":25.599999999999994,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"--------------------------","autoResize":false,"lineHeight":1.25},{"id":"1bgWJaFu","type":"text","x":-122.08631387940446,"y":-24.925624236058024,"width":129.2656707763672,"height":11.023159723171876,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a4","roundness":null,"seed":376814585,"version":477,"versionNonce":103749113,"isDeleted":false,"boundElements":null,"updated":1730886577521,"link":"[[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]]","locked":false,"text":"+/-/# attributname: datentyp","rawText":"+/-/# attributname: datentyp","fontSize":8.8185277785375,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+/-/# attributname: datentyp","autoResize":true,"lineHeight":1.25},{"id":"IcP24QRe","type":"text","x":-125.86223616855486,"y":17.51080228731226,"width":149.26962280273438,"height":11.023159723171876,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":363849271,"version":593,"versionNonce":1287725847,"isDeleted":false,"boundElements":[],"updated":1730886581670,"link":"[[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]]","locked":false,"text":"+/-/# methodename(): rückgabetyp","rawText":"+/-/# methodename(): rückgabetyp","fontSize":8.8185277785375,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+/-/# methodename(): rückgabetyp","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"round","scrollX":222.305079325485,"scrollY":170.9398566994928,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Klassendiagramm_2024-11-06_1035.58.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
>**Klassename** muss immer großgeschrieben sein.  
>**[[02 - RESOURCES/Notes/Datentyp\|Datentyp]]** bezeichnet den [[02 - RESOURCES/Notes/Datentyp\|Datentyp]] eines [[Attributs\|Attributs]].  
>[[02 - RESOURCES/Notes/Rückgabewerttyp\|Rückgabewerttyp]] gibt den [[02 - RESOURCES/Notes/Rückgabewerttyp\|Rückgabewerttyp]] einer [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] an.  
>In der [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] können, falls bekannt, noch [[02 - RESOURCES/Notes/Attribut\|Attribut]]e eingefügt werden.

>_**+/-/#** stehen für die [[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]]en:_  
>- \+ Public  
>- \- Private  
>- \# Protected
>- ~ Package-Private (Default)


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
>Diese [[02 - RESOURCES/Notes/Klasse\|Klasse]] können wir in einem [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]] darstellen, um eine bessere Übersicht zu haben.

<div id="UML-Klassendiagramm_2024-11-06_1116.16.excalidraw.md2"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":311,"versionNonce":1505280921,"index":"a0","isDeleted":false,"id":"SByzgqtcjvrxWWkV9l0os","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-319.1349410625916,"y":-554.7079772949219,"strokeColor":"#000000","backgroundColor":"transparent","width":683.1146378679346,"height":377.8603990342882,"seed":1129927897,"groupIds":["2yB4WqG__Wv9YEoErJ2y3"],"frameId":null,"roundness":{"type":1},"boundElements":[],"updated":1730888220606,"link":null,"locked":false},{"type":"line","version":249,"versionNonce":1306107511,"index":"a1","isDeleted":false,"id":"ySTu6SRb6-58fWUL7OnxQ","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-313.0014245031913,"y":-457.2015488777373,"strokeColor":"#000000","backgroundColor":"transparent","width":681.2491301261091,"height":4.35938566542883,"seed":1860915641,"groupIds":["2yB4WqG__Wv9YEoErJ2y3"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730888220606,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[681.2491301261091,-4.35938566542883]]},{"id":"OpCODTjx","type":"text","x":-54.375,"y":-534.0208333333333,"width":110.6901485866972,"height":58.20900046008937,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":702355607,"version":106,"versionNonce":880135801,"isDeleted":false,"boundElements":null,"updated":1730888555375,"link":null,"locked":false,"text":"Auto","rawText":"Auto","fontSize":46.56720036807148,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Auto","autoResize":true,"lineHeight":1.25},{"id":"9vVh44P7","type":"text","x":-316.375,"y":-387.4652777777778,"width":674.4220818413628,"height":52.32948290531304,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a3","roundness":null,"seed":492396217,"version":156,"versionNonce":155752665,"isDeleted":false,"boundElements":null,"updated":1730888540050,"link":null,"locked":false,"text":"________________________","rawText":"________________________","fontSize":41.86358632425043,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"________________________","autoResize":true,"lineHeight":1.25},{"id":"aIlR3EFg","type":"text","x":-304.1527777777778,"y":-456.35416666666674,"width":152.7198486328125,"height":100,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a4","roundness":null,"seed":1992497209,"version":141,"versionNonce":495413623,"isDeleted":false,"boundElements":null,"updated":1730888536049,"link":null,"locked":false,"text":"- marke: String\n- modell: String\n- baujahr: int\n- istAn: boolean","rawText":"- marke: String\n- modell: String\n- baujahr: int\n- istAn: boolean","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"- marke: String\n- modell: String\n- baujahr: int\n- istAn: boolean","autoResize":true,"lineHeight":1.25},{"id":"cSJ9Wxjo","type":"text","x":-306.37499999999994,"y":-337.4652777777778,"width":560.95947265625,"height":125,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1397489465,"version":219,"versionNonce":549866903,"isDeleted":false,"boundElements":null,"updated":1730888543286,"link":null,"locked":false,"text":"+ Auto(marke: String, modell: String, baujahr: String): void\n+ starten(): void\n+ ausschalten(): void\n+ getBaujahr(): int\n+ anzeigeInfo(): void","rawText":"+ Auto(marke: String, modell: String, baujahr: String): void\n+ starten(): void\n+ ausschalten(): void\n+ getBaujahr(): int\n+ anzeigeInfo(): void","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ Auto(marke: String, modell: String, baujahr: String): void\n+ starten(): void\n+ ausschalten(): void\n+ getBaujahr(): int\n+ anzeigeInfo(): void","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"round","scrollX":438.875,"scrollY":1008.1597222222223,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Klassendiagramm_2024-11-06_1116.16.excalidraw.md2");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

# [[02 - RESOURCES/Notes/Klasse\|Klasse]]n verbinden
>Um Klassen miteinander zu verbinden, verwenden wir [[02 - RESOURCES/Notes/UML-Terminologie\|UML-Terminologie]].
>Das sind die Linien, zwischen die [[02 - RESOURCES/Notes/Klasse\|Klasse]]n.

# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-assoziation/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>Zwei Klassen werden mit einer Linie verbunden, was eine Beziehung zwischen ihnen darstellt. 
>>Eine Assoziation bedeutet, dass Objekte der einen [[02 - RESOURCES/Notes/Klasse\|Klasse]]n auf Objekte der anderen [[02 - RESOURCES/Notes/Klasse\|Klasse]] zugreifen können.
>>Dabei kann eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] eine Referenz auf eine Instanz der anderen [[02 - RESOURCES/Notes/Klasse\|Klasse]] enthalten, aber es wird nicht unbedingt ein neues Objekt erzeugt oder eine [[02 - RESOURCES/Notes/Static Java Methode\|Static Java Methode]] verwendet.
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="UML-Assoziation_2024-11-06_1645.25.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":249,"versionNonce":2110833143,"index":"a0","isDeleted":false,"id":"XHxPGiWsyzO4wue9Is8H-","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-146.96900032963603,"y":-156.70797729492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1510528087,"groupIds":["KUPX0snGGDtGXEC8TW7vj"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"DqnEzSuE-w8UVPHyHzfWj","type":"arrow"}],"updated":1730907977204,"link":null,"locked":false},{"type":"line","version":186,"versionNonce":229426745,"index":"a1","isDeleted":false,"id":"kI1wLVBwYOHLCzLw0aYiX","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-144.54364632572978,"y":-118.1513671875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":2092577143,"groupIds":["KUPX0snGGDtGXEC8TW7vj"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730907955215,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"z481u7fw","type":"text","x":-52,"y":-152.2109375,"width":74.25993347167969,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":2011872057,"version":52,"versionNonce":1955174169,"isDeleted":false,"boundElements":null,"updated":1730907955215,"link":null,"locked":false,"text":"KlasseA","rawText":"KlasseA","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"KlasseA","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":300,"versionNonce":852129753,"index":"a3","isDeleted":false,"id":"zP0u23VMVla7FrYcNcbtw","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-153.42882316913452,"y":114.08108520507812,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1643868759,"groupIds":["AMWQappdvq2boYsKr52Ij"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"DqnEzSuE-w8UVPHyHzfWj","type":"arrow"}],"updated":1730907999023,"link":null,"locked":false},{"type":"line","version":237,"versionNonce":2125403545,"index":"a4","isDeleted":false,"id":"t7tSi4zNcjkcTiII0hRVo","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-151.00346916522827,"y":152.6376953125,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1755910007,"groupIds":["AMWQappdvq2boYsKr52Ij"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730907999023,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"omPK3pLD","type":"text","x":-58.459822839498514,"y":118.578125,"width":75.95993041992188,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1038485655,"version":106,"versionNonce":1665858169,"isDeleted":false,"boundElements":[],"updated":1730907999023,"link":null,"locked":false,"text":"KlasseB","rawText":"KlasseB","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"KlasseB","autoResize":true,"lineHeight":1.25},{"id":"DqnEzSuE-w8UVPHyHzfWj","type":"arrow","x":-16,"y":-2.292022705078125,"width":0,"height":111.37310791015625,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":611229559,"version":123,"versionNonce":977278137,"isDeleted":false,"boundElements":null,"updated":1730907999023,"link":null,"locked":false,"points":[[0,0],[0,111.37310791015625]],"lastCommittedPoint":[7,98],"startBinding":{"elementId":"XHxPGiWsyzO4wue9Is8H-","focus":0.07177282993038166,"gap":9.081085205078125,"fixedPoint":[0.48485215041984747,1.033463628524312]},"endBinding":{"elementId":"zP0u23VMVla7FrYcNcbtw","focus":0.06163788548427139,"gap":13.292022705078125,"fixedPoint":[0.5087666568082219,-0.033463628524311985]},"startArrowhead":null,"endArrowhead":null,"elbowed":true}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":null,"currentItemArrowType":"elbow","scrollX":462,"scrollY":453.7890625,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Assoziation_2024-11-06_1645.25.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

</div></div>

# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-vererbung/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>In [[02 - RESOURCES/Notes/UML\|UML]] wird Vererbung durch eine Pfeil-Linie mit einer leeren Spitze dargestellt. 
>Eine Unterklasse erbt dabei [[02 - RESOURCES/Notes/Attribut\|Attribut]]e und [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]]n von einer Oberklasse.
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="Vererbung_2024-11-06_1725.09.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":251,"versionNonce":414773593,"index":"a0","isDeleted":false,"id":"-kfBYLkbPEY3bBspded3s","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-357.1989117493854,"y":-178.31344604492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":625555351,"groupIds":["kIXcMAO8y8zKWqiyaUBs7"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"NdQIFqov0tVAH6YIcVrQe","type":"arrow"}],"updated":1730910321516,"link":null,"locked":false},{"type":"line","version":188,"versionNonce":522411577,"index":"a1","isDeleted":false,"id":"Cq6R-wmB-ZHeHg0tEVjLe","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-354.77355774547914,"y":-139.7568359375,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":546057399,"groupIds":["kIXcMAO8y8zKWqiyaUBs7"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730910321516,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"2HTYEMO9","type":"text","x":-262.2299114197493,"y":-173.81640625,"width":87.55992126464844,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":1576238551,"version":63,"versionNonce":233004279,"isDeleted":false,"boundElements":[],"updated":1730911490978,"link":null,"locked":false,"text":"Fahrzeug","rawText":"Fahrzeug","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Fahrzeug","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":302,"versionNonce":1946805241,"index":"a3","isDeleted":false,"id":"rGZlb2l1QnoAln_BiLE3h","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-363.6587345888838,"y":92.47561645507812,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1351854839,"groupIds":["DqBZvsMN_OGoR6j0iuq73"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"NdQIFqov0tVAH6YIcVrQe","type":"arrow"}],"updated":1730910321516,"link":null,"locked":false},{"type":"line","version":239,"versionNonce":1425865945,"index":"a4","isDeleted":false,"id":"wNysKS2ZVkFc0zQo6vcAJ","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-361.23338058497757,"y":131.0322265625,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":351351831,"groupIds":["DqBZvsMN_OGoR6j0iuq73"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730910321516,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"pEYnGwcF","type":"text","x":-251.68973425924787,"y":96.97265625,"width":47.53996276855469,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1124112695,"version":122,"versionNonce":1407195159,"isDeleted":false,"boundElements":[],"updated":1730911497650,"link":null,"locked":false,"text":"Auto","rawText":"Auto","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Auto","autoResize":true,"lineHeight":1.25},{"id":"NdQIFqov0tVAH6YIcVrQe","type":"arrow","x":-226.2299114197493,"y":-23.897491455078125,"width":0,"height":111.37310791015625,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":2513495,"version":128,"versionNonce":1133802841,"isDeleted":false,"boundElements":[],"updated":1730911573925,"link":null,"locked":false,"points":[[0,0],[0,111.37310791015625]],"lastCommittedPoint":null,"startBinding":{"elementId":"-kfBYLkbPEY3bBspded3s","focus":0.07177282993038166,"gap":9.081085205078125,"fixedPoint":[0.48485215041984747,1.033463628524312]},"endBinding":{"elementId":"rGZlb2l1QnoAln_BiLE3h","focus":0.06163788548427139,"gap":13.292022705078125,"fixedPoint":[0.5087666568082219,-0.033463628524311985]},"startArrowhead":"arrow","endArrowhead":null,"elbowed":true}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":"arrow","currentItemEndArrowhead":null,"currentItemArrowType":"round","scrollX":412.99331663601004,"scrollY":245.61917100618115,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Vererbung_2024-11-06_1725.09.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
<div id="Vererbung_2024-11-06_1745.07.excalidraw.md2"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.4","elements":[{"type":"rectangle","version":253,"versionNonce":144513527,"index":"a0","isDeleted":false,"id":"g1iAtEpC07_L9j2z3rCVd","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-194.1547403326258,"y":-258.3134460449219,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":595742745,"groupIds":["RBf9HMtBVjDVeQiTK6MgE"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"i5Jm2bkHsaeL8zY6jwc7A","type":"arrow"}],"updated":1730911509552,"link":null,"locked":false},{"type":"line","version":190,"versionNonce":133481239,"index":"a1","isDeleted":false,"id":"nXu2uM3IbzxOPHLCGVsAv","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-191.72938632871956,"y":-219.7568359375,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":785573113,"groupIds":["RBf9HMtBVjDVeQiTK6MgE"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730911509552,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"pI00Revf","type":"text","x":-99.1857400029898,"y":-253.81640625,"width":87.55992126464844,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":821943769,"version":65,"versionNonce":1287276599,"isDeleted":false,"boundElements":[],"updated":1730911509552,"link":null,"locked":false,"text":"Fahrzeug","rawText":"Fahrzeug","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Fahrzeug","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":305,"versionNonce":141955001,"index":"a3","isDeleted":false,"id":"7SrSrGrt900bz_xg7lxcG","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-200.61456317212424,"y":12.475616455078125,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":689355449,"groupIds":["bjda6SkGpefgx-BiChIfV"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"i5Jm2bkHsaeL8zY6jwc7A","type":"arrow"},{"id":"hGqIWe75_w03WERs8D5kf","type":"arrow"}],"updated":1730911555521,"link":null,"locked":false},{"type":"line","version":241,"versionNonce":764470903,"index":"a4","isDeleted":false,"id":"RTZyvkq1LGkYf8LZ3JxEl","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-198.18920916821799,"y":51.0322265625,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1740700569,"groupIds":["bjda6SkGpefgx-BiChIfV"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730911509552,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"U2ZH6dOJ","type":"text","x":-88.64556284248835,"y":16.97265625,"width":47.53996276855469,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1563435129,"version":124,"versionNonce":1706753943,"isDeleted":false,"boundElements":[],"updated":1730911509552,"link":null,"locked":false,"text":"Auto","rawText":"Auto","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Auto","autoResize":true,"lineHeight":1.25},{"id":"i5Jm2bkHsaeL8zY6jwc7A","type":"arrow","x":-63.18574000298986,"y":-103.89749145507812,"width":5.684341886080802e-14,"height":111.37310791015625,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":656910681,"version":130,"versionNonce":343543287,"isDeleted":false,"boundElements":[],"updated":1730911564045,"link":null,"locked":false,"points":[[0,0],[0,55.686553955078125],[5.684341886080802e-14,55.686553955078125],[5.684341886080802e-14,111.37310791015625]],"lastCommittedPoint":null,"startBinding":{"elementId":"g1iAtEpC07_L9j2z3rCVd","focus":0.07177282993038166,"gap":9.081085205078125,"fixedPoint":[0.48485215041984747,1.033463628524312]},"endBinding":{"elementId":"7SrSrGrt900bz_xg7lxcG","focus":0.06163788548427139,"gap":13.292022705078125,"fixedPoint":[0.5087666568082219,-0.033463628524311985]},"startArrowhead":"arrow","endArrowhead":null,"elbowed":true},{"type":"rectangle","version":328,"versionNonce":1335065081,"index":"a7","isDeleted":false,"id":"LE9kjzliIXE-bdK-HjZ8h","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-199.49228354189546,"y":239.08108520507812,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":164172441,"groupIds":["8X1Y0oc1ZglSuwrOY5VLl"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"hGqIWe75_w03WERs8D5kf","type":"arrow"}],"updated":1730911555521,"link":null,"locked":false},{"type":"line","version":264,"versionNonce":1719066681,"index":"a8","isDeleted":false,"id":"QwBVQOdPJWq5x2hdowep8","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-197.0669295379892,"y":277.6376953125,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1411209081,"groupIds":["8X1Y0oc1ZglSuwrOY5VLl"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730911514074,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"Dl9frAA3","type":"text","x":-121.9921875,"y":248.7890625,"width":117.8798828125,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a9","roundness":null,"seed":801067543,"version":69,"versionNonce":1731897847,"isDeleted":false,"boundElements":null,"updated":1730911530784,"link":null,"locked":false,"text":"Elektroauto","rawText":"Elektroauto","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Elektroauto","autoResize":true,"lineHeight":1.25},{"id":"hGqIWe75_w03WERs8D5kf","type":"arrow","x":-59.48429240587683,"y":227.72412985899626,"width":1.5003739682115906,"height":61.51533269667465,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aA","roundness":{"type":2},"seed":2008780921,"version":52,"versionNonce":164766553,"isDeleted":false,"boundElements":null,"updated":1730911582020,"link":null,"locked":false,"points":[[0,0],[-1.5003739682115906,-61.51533269667465]],"lastCommittedPoint":null,"startBinding":{"elementId":"LE9kjzliIXE-bdK-HjZ8h","focus":0.05147739427612909,"gap":11.356955346081861,"fixedPoint":null},"endBinding":{"elementId":"7SrSrGrt900bz_xg7lxcG","focus":-0.019298920413103313,"gap":4.317226117399741,"fixedPoint":null},"startArrowhead":null,"endArrowhead":"arrow","elbowed":false}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":"arrow","currentItemEndArrowhead":null,"currentItemArrowType":"round","scrollX":408.3212400150684,"scrollY":275.3348513420681,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Vererbung_2024-11-06_1745.07.excalidraw.md2");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

</div></div>

# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-aggregation/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>In [[02 - RESOURCES/Notes/UML\|UML]] wird Aggregation durch eine Linie mit einer hohlen Raute dargestellt.
>Sie zeigt eine '<mark style="background: #FFF3A3A6;">hat-eine</mark>'-Beziehung an, bei der die verbundene [[02 - RESOURCES/Notes/Klasse\|Klasse]] unabhängig existieren kann.

<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="UML-Aggregation_2024-11-06_1756.40.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.16.1","elements":[{"type":"rectangle","version":302,"versionNonce":1340257111,"index":"a0","isDeleted":false,"id":"wozgZ_oAnb_2ndppMEmKJ","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-419.43815267314204,"y":-89.70797729492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":271913337,"groupIds":["mkF80bHAO-6TMCCQox_wB"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"kKy2qwNVgsDGJYrHGrgCr","type":"arrow"}],"updated":1730912278035,"link":null,"locked":false},{"type":"line","version":239,"versionNonce":967903639,"index":"a1","isDeleted":false,"id":"iqf-qRbYbzR4mCh4bGpfV","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-417.0127986692358,"y":-51.1513671875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1852209753,"groupIds":["mkF80bHAO-6TMCCQox_wB"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730912278035,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]],"polygon":false},{"id":"IM8glql4","type":"text","x":-342,"y":-85.2109375,"width":90.35993957519531,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a2","roundness":null,"seed":1932081369,"version":95,"versionNonce":1009368759,"isDeleted":false,"boundElements":[],"updated":1730912278035,"link":null,"locked":false,"text":"Tastatur","rawText":"Tastatur","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Tastatur","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":263,"versionNonce":1411274201,"index":"a3","isDeleted":false,"id":"VZrpPZQ-QXLe7NKDySRCb","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":63.323277960373076,"y":-92.91891479492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1568945145,"groupIds":["Skb4Qehed75Xkn8VSTIMf"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"kKy2qwNVgsDGJYrHGrgCr","type":"arrow"}],"updated":1730912254796,"link":null,"locked":false},{"type":"line","version":200,"versionNonce":1371991961,"index":"a4","isDeleted":false,"id":"UWGRK6OHjqU8foKTlyVCF","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":65.74863196427933,"y":-54.3623046875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":984435929,"groupIds":["Skb4Qehed75Xkn8VSTIMf"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730912232676,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]],"polygon":false},{"id":"qJyeaYzV","type":"text","x":181,"y":-86.2109375,"width":26.53997802734375,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1889878199,"version":48,"versionNonce":123590327,"isDeleted":false,"boundElements":[],"updated":1730912240515,"link":null,"locked":false,"text":"PC","rawText":"PC","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"PC","autoResize":true,"lineHeight":1.25},{"id":"kKy2qwNVgsDGJYrHGrgCr","type":"arrow","x":-144.31663167704824,"y":-13.2109375,"width":202.63990963742128,"height":0,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":966086007,"version":159,"versionNonce":2046832759,"isDeleted":false,"boundElements":[],"updated":1730912278035,"link":null,"locked":false,"points":[[0,0],[202.63990963742128,0]],"lastCommittedPoint":null,"startBinding":{"elementId":"wozgZ_oAnb_2ndppMEmKJ","focus":0.0340823171357655,"gap":4.316631677048292,"fixedPoint":[1.0185101874947327,0.5119737045813554]},"endBinding":{"elementId":"VZrpPZQ-QXLe7NKDySRCb","focus":-0.055505954080011764,"gap":9.323277960373048,"fixedPoint":[-0.018510187494732544,0.533463628524312]},"startArrowhead":null,"endArrowhead":"diamond_outline","elbowed":true,"fixedSegments":null},{"id":"RAz7tbtYJqcJPLoIs7crX","type":"freedraw","x":-71.82130500190897,"y":-178.7265625,"width":87,"height":127,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":40,"groupIds":[],"frameId":null,"index":"a8","roundness":null,"seed":941485320,"version":60,"versionNonce":2060902264,"isDeleted":false,"boundElements":null,"updated":1762427119049,"link":null,"locked":false,"points":[[0,0],[5,7.5],[8.5,13],[19.5,31.5],[26,42.5],[31,52],[37.5,64.5],[39.5,69],[44.5,76],[48,82],[50.5,86],[53,90.5],[55,93.5],[55.5,94.5],[55.5,95],[56.5,95.5],[57,96.5],[58,98.5],[58.5,99],[59.5,101],[60.5,102.5],[61.5,104.5],[62,105.5],[62.5,106],[64,107.5],[65,108.5],[66,110],[67,111.5],[67.5,113],[68.5,113.5],[69.5,115],[70.5,116.5],[71,118],[72.5,120],[74,121.5],[74.5,122],[75,122],[76,122.5],[77,123],[77.5,123.5],[78,124],[79.5,124],[82,125],[82,125.5],[82.5,125.5],[83.5,126],[84.5,126],[85.5,126.5],[86.5,127],[87,127],[87,127]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[87,127]},{"id":"auPI_yhdk94m8tLVMt7jm","type":"freedraw","x":-41.82130500190897,"y":-61.7265625,"width":65,"height":62.5,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":40,"groupIds":[],"frameId":null,"index":"a9","roundness":null,"seed":720670984,"version":46,"versionNonce":1533945864,"isDeleted":false,"boundElements":null,"updated":1762427125830,"link":null,"locked":false,"points":[[0,0],[0.5,0],[6,2],[9,3],[18.5,9],[29,15],[34,18],[45,23],[55,28],[58.5,29],[60.5,29.5],[61.5,29.5],[62,29.5],[63.5,29.5],[64,29.5],[65,29],[65,26.5],[65,25],[65,19.5],[64.5,16.5],[64.5,12],[64.5,6],[64.5,-4.5],[64.5,-12],[64.5,-17.5],[64.5,-20.5],[64.5,-23.5],[65,-28.5],[65,-29.5],[65,-31.5],[65,-32.5],[65,-33],[65,-33]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[65,-33]},{"id":"i4o1Jl3FL3X0V76Dk-evV","type":"freedraw","x":-334.32130500190897,"y":-235.2265625,"width":183.5,"height":2,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aA","roundness":null,"seed":1523957256,"version":51,"versionNonce":1644728184,"isDeleted":false,"boundElements":null,"updated":1762427092883,"link":null,"locked":false,"points":[[0,0],[0,-0.5],[2,-1],[15.5,-1],[19,-1],[30,-1],[37,-1.5],[44,-2],[52,-2],[57,-2],[62,-2],[69,-2],[73.5,-2],[78.5,-2],[83,-2],[88.5,-2],[91.5,-2],[94.5,-2],[97.5,-2],[100.5,-2],[104.5,-2],[107.5,-2],[110.5,-1.5],[112.5,-1.5],[116,-1.5],[118.5,-1.5],[121.5,-1.5],[123.5,-1.5],[127,-1.5],[133.5,-1.5],[137.5,-1.5],[140.5,-1.5],[143.5,-1.5],[149,-1.5],[152,-1.5],[155,-1.5],[157.5,-1.5],[160,-1.5],[161,-1.5],[164.5,-1.5],[167.5,-1.5],[170.5,-1.5],[175.5,-1.5],[178,-1.5],[179.5,-1.5],[180.5,-1.5],[181.5,-1.5],[183,-1.5],[183.5,-1.5],[183.5,-1.5]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[183.5,-1.5]},{"id":"nxIa6AipRxEEG-HnXAWeW","type":"freedraw","x":-150.82130500190897,"y":-236.7265625,"width":139,"height":66,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aB","roundness":null,"seed":844435832,"version":135,"versionNonce":453279496,"isDeleted":false,"boundElements":null,"updated":1762427098274,"link":null,"locked":false,"points":[[0,0],[1,0],[3.5,-0.5],[9.5,-3.5],[15.5,-7],[27,-13.5],[34.5,-17.5],[43,-22.5],[49,-25.5],[55,-29],[58,-30.5],[61,-32],[62.5,-33],[66.5,-35],[68,-36],[71,-38],[73,-39],[75,-40],[77.5,-41.5],[79,-43],[80,-43.5],[81,-44],[82,-44.5],[82.5,-45],[83,-45.5],[84,-45.5],[84.5,-45.5],[86,-45],[88.5,-43.5],[92.5,-40],[95.5,-37.5],[98,-35],[101.5,-32],[103.5,-30.5],[108,-27.5],[110,-26],[112,-24.5],[114,-23],[117,-21.5],[118.5,-20.5],[119.5,-20],[121,-19.5],[124,-18],[127,-16.5],[128.5,-15.5],[130.5,-14],[133.5,-11.5],[135,-10.5],[136.5,-9.5],[137.5,-9],[138,-8],[138.5,-7.5],[139,-7.5],[139,-7],[139,-6.5],[137,-6],[135.5,-4.5],[134.5,-3.5],[133,-2.5],[133,-2],[132,-1.5],[131,-1.5],[130,-0.5],[128,0.5],[127,1.5],[125.5,2],[124,2.5],[121,4],[119,5.5],[116.5,7],[116,7.5],[114,8.5],[112,9],[111,9.5],[110.5,10],[109,10.5],[106,12],[104.5,12.5],[102.5,13.5],[101,14],[99,15],[98.5,15],[96.5,16],[95.5,16],[94,16.5],[91.5,17.5],[90.5,18],[89,19],[88,19],[87,19.5],[86.5,19.5],[86,20],[85.5,20.5],[85,20.5],[84,20.5],[83,20.5],[81,20.5],[79.5,20.5],[78,20.5],[76,20.5],[75,20.5],[73,20.5],[71.5,20.5],[69,20.5],[66,20],[60,18.5],[55.5,17],[51,16],[47,14.5],[43.5,13.5],[38,12],[34.5,11],[31.5,10],[30,9.5],[27,8.5],[25,8],[23.5,7.5],[21.5,7],[20,6.5],[19,6],[18,5.5],[17.5,5.5],[16.5,5.5],[16,5],[15,5],[14.5,5],[13.5,5],[13,5],[12.5,5],[11.5,5],[11,5],[10,5],[9.5,5],[9.5,5]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[9.5,5]}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":40,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"diamond_outline","currentItemArrowType":"elbow","currentItemFrameRole":null,"scrollX":603.571305001909,"scrollY":404.984375,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true,"markerName":true,"markerEnabled":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"fromSelection":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Aggregation_2024-11-06_1756.40.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>


</div></div>

# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-komposition/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>In [[02 - RESOURCES/Notes/UML\|UML]] wird Komposition durch eine Linie mit einer ausgefüllten Raute dargestellt. 
>Sie zeigt eine '<mark style="background: #BBFABBA6;">besteht-aus</mark>'-Beziehung, bei der die enthaltenen Objekte nicht unabhängig existieren können

<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="UML-Komposition_2024-11-06_1800.58.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.16.1","elements":[{"type":"rectangle","version":296,"versionNonce":997764889,"index":"a0","isDeleted":false,"id":"AoaPub3azlhPvXgHUFApe","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-360.18983496520667,"y":-80.70797729492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":2020191609,"groupIds":["GmSzVmzCQQlHURQg1oPvN"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"JfzV17_XIuieHFYUP3S9_","type":"arrow"}],"updated":1730912550171,"link":null,"locked":false},{"type":"line","version":233,"versionNonce":1479048409,"index":"a1","isDeleted":false,"id":"5mGEatFSLcj_Fk65r1Td-","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-357.7644809613004,"y":-42.1513671875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":497522265,"groupIds":["GmSzVmzCQQlHURQg1oPvN"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730912550171,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]],"polygon":false},{"type":"rectangle","version":281,"versionNonce":1347194393,"index":"a3","isDeleted":false,"id":"p7bbe-dNeHn1czjQny9P_","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":86.35781158025375,"y":-80.91891479492188,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":144653465,"groupIds":["jSBqRsiE1N1ExOoEcn6XF"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"JfzV17_XIuieHFYUP3S9_","type":"arrow"}],"updated":1730912547337,"link":null,"locked":false},{"type":"line","version":218,"versionNonce":1764040057,"index":"a4","isDeleted":false,"id":"rKlCWxtp_JTOfRX5V5ocy","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":88.78316558416,"y":-42.3623046875,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":715014521,"groupIds":["jSBqRsiE1N1ExOoEcn6XF"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730912477615,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]],"polygon":false},{"id":"JfzV17_XIuieHFYUP3S9_","type":"arrow","x":-85.06831396911298,"y":-6.099999999999994,"width":166.4261255493667,"height":0.2109375,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a5","roundness":null,"seed":1404384919,"version":52,"versionNonce":2137225079,"isDeleted":false,"boundElements":[],"updated":1730912558965,"link":null,"locked":false,"points":[[0,0],[83.2130627746834,0],[83.2130627746834,-0.2109375],[166.4261255493667,-0.2109375]],"lastCommittedPoint":null,"startBinding":{"elementId":"AoaPub3azlhPvXgHUFApe","focus":-0.0013385451409724804,"gap":5,"fixedPoint":[1.0185101874947322,0.4993307274295138]},"endBinding":{"elementId":"p7bbe-dNeHn1czjQny9P_","focus":0.0013385451409724748,"gap":4.999999999999972,"fixedPoint":[-0.018510187494732544,0.4993307274295138]},"startArrowhead":null,"endArrowhead":"diamond","elbowed":true,"fixedSegments":null},{"id":"QZJf5DEH","type":"text","x":-273.78936316388035,"y":-79.77353514966347,"width":75.69903564453125,"height":28.244848628970338,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a6","roundness":null,"seed":1430484695,"version":177,"versionNonce":1526932661,"isDeleted":false,"boundElements":[],"updated":1742879016988,"link":null,"locked":false,"text":"Zimmer","rawText":"Zimmer","fontSize":22.59587890317627,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Zimmer","autoResize":true,"lineHeight":1.25},{"id":"K81p9N6b","type":"text","x":183,"y":-76.2109375,"width":44.799957275390625,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a7","roundness":null,"seed":2073650969,"version":39,"versionNonce":1304053237,"isDeleted":false,"boundElements":[],"updated":1741179080821,"link":null,"locked":false,"text":"Haus","rawText":"Haus","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Haus","autoResize":true,"lineHeight":1.25},{"id":"BcjOMfRG7ipdRc_1Vw7pB","type":"freedraw","x":-34.055796003793375,"y":-150.7265625,"width":83,"height":98,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":40,"groupIds":[],"frameId":null,"index":"a9","roundness":null,"seed":599070072,"version":54,"versionNonce":1856705400,"isDeleted":false,"boundElements":null,"updated":1762427273047,"link":null,"locked":false,"points":[[0,0],[1.5,0.5],[6,6],[9,9.5],[16.5,18],[29,33.5],[36,42],[42.5,49],[47,55],[49.5,58.5],[53.5,62],[58,67],[60.5,68.5],[62,70.5],[63.5,72.5],[64.5,73.5],[65.5,74],[66,74.5],[66,75],[66.5,75.5],[67,76.5],[67.5,77],[68,77.5],[68.5,78.5],[68.5,79],[69.5,80],[70,80.5],[71,81.5],[71.5,82],[72,82.5],[72.5,83],[73,84],[74.5,86],[76,87.5],[77,89],[78,90],[78.5,91.5],[80,92.5],[80,93.5],[80.5,94],[81,94.5],[82,96],[82,96.5],[82.5,97],[83,97.5],[83,98],[83,98]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[83,98]},{"id":"I69CWTgcT6T9scQaqpor7","type":"freedraw","x":-8.555796003793375,"y":-73.7265625,"width":71.5,"height":58,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":40,"groupIds":[],"frameId":null,"index":"aA","roundness":null,"seed":1250242424,"version":76,"versionNonce":1476435832,"isDeleted":false,"boundElements":null,"updated":1762427279611,"link":null,"locked":false,"points":[[0,0],[0.5,0],[1,0],[4,0.5],[6.5,2.5],[11,4],[16.5,6.5],[26.5,12],[30.5,15],[33,17],[35.5,18],[37,19],[38,19.5],[39,20],[40,20],[40.5,20],[41.5,20.5],[42.5,21],[43,21],[44,21],[44,21.5],[44.5,21.5],[45.5,21.5],[46.5,21.5],[47.5,21.5],[48,21.5],[48.5,21.5],[49,21.5],[50.5,21.5],[52,22],[54,22.5],[55,22.5],[56.5,23.5],[58,24],[61.5,25],[66.5,27],[67.5,27.5],[68,28],[69,28],[69.5,28.5],[70.5,29],[71,29],[71,29.5],[71.5,29.5],[71.5,28.5],[71.5,25.5],[71.5,22],[71.5,18],[71.5,15],[71.5,7.5],[71.5,4],[71.5,1],[71.5,-1.5],[71.5,-4],[71.5,-8],[71.5,-11.5],[71.5,-15],[71.5,-17],[71.5,-19],[71,-20],[70.5,-22.5],[70,-24],[70,-25],[69.5,-26.5],[69.5,-27],[69,-27.5],[68.5,-28],[68.5,-28.5],[68.5,-28.5]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[68.5,-28.5]},{"id":"pC9MmDIhk4DP45EpZ8cG9","type":"freedraw","x":-268.5557960037934,"y":-217.7265625,"width":171.5,"height":1.5,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aB","roundness":null,"seed":1295557752,"version":50,"versionNonce":1664118136,"isDeleted":false,"boundElements":null,"updated":1762427243273,"link":null,"locked":false,"points":[[0,0],[0.5,0],[3,0],[8,0],[12,0],[14.5,0],[21.5,0],[32.5,0],[40.5,0],[48,0],[58,0],[62,0],[69.5,0],[77,0],[84.5,0],[94.5,0],[100,0.5],[104,1],[106,1],[110.5,1],[116,1],[119.5,1],[122.5,1],[124,1],[129,1],[132.5,1],[135.5,1],[139,1],[142,1],[147.5,1],[150,1],[153,1],[155.5,1],[157.5,1],[159,1],[160,1],[161,1],[162,1],[163,1],[164,1],[165,1],[165.5,1],[167,1],[168,1],[169,1],[169.5,1.5],[170,1.5],[171.5,1.5],[171.5,1.5]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[171.5,1.5]},{"id":"RbrssVBARGBcU_eGgk2V9","type":"freedraw","x":-98.05579600379338,"y":-216.2265625,"width":126.5,"height":51.5,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aC","roundness":null,"seed":1436381048,"version":169,"versionNonce":2138951688,"isDeleted":false,"boundElements":null,"updated":1762427248065,"link":null,"locked":false,"points":[[0,0],[0.5,0],[3,-2],[5.5,-3.5],[11.5,-7],[15.5,-9],[19,-10],[22.5,-12],[28,-13.5],[34,-17],[38.5,-18.5],[42,-20.5],[44,-21],[46.5,-22],[48,-23],[50,-23.5],[51,-24.5],[52,-25],[53,-26],[54.5,-27],[56,-27.5],[57.5,-28.5],[59,-29],[60,-29.5],[61,-30],[61.5,-30.5],[62,-31],[63.5,-31.5],[64.5,-32],[65,-32.5],[65.5,-32.5],[66,-33],[66.5,-33.5],[67,-33.5],[67.5,-33.5],[68,-33.5],[68.5,-33.5],[70,-33.5],[72,-33.5],[73.5,-33.5],[75.5,-33],[77.5,-32],[79.5,-31],[80.5,-30],[81,-30],[81.5,-30],[81.5,-29.5],[82,-29.5],[82.5,-29.5],[83,-29.5],[84,-29],[85,-28],[86.5,-27.5],[87.5,-26.5],[90,-25],[91,-24.5],[91.5,-24],[92.5,-24],[94,-23],[95,-22.5],[95.5,-22.5],[96.5,-22],[97.5,-21.5],[98.5,-21],[100,-20],[100.5,-19.5],[102,-19],[103,-18],[104,-18],[105,-17.5],[106,-16.5],[107,-16],[107,-15.5],[107.5,-15],[108.5,-14.5],[110,-14],[111,-13],[111.5,-13],[112.5,-12.5],[113.5,-12],[115,-11],[116.5,-10.5],[117.5,-9.5],[118.5,-8.5],[120,-7.5],[120.5,-7],[121.5,-7],[122,-6.5],[123,-6],[124,-4.5],[125,-4],[126,-4],[126.5,-3.5],[126.5,-3],[126,-2.5],[125,-2],[123,-1],[121,0],[118,1],[115.5,1.5],[112,3.5],[109,4.5],[106.5,5.5],[102,7],[100,7.5],[98,8.5],[96,9],[94,9.5],[90.5,10.5],[88,11],[86,12],[85,12],[84,12],[83.5,13],[82.5,13],[81.5,13.5],[81,14],[80.5,14.5],[79.5,14.5],[78,15],[77.5,15.5],[76.5,16],[76,16],[75.5,16.5],[74.5,17],[73.5,17.5],[73,18],[72.5,18],[72,18],[70.5,18],[68.5,18],[64,18],[60.5,18],[57.5,18],[54.5,17],[52,16.5],[49,15.5],[46.5,15],[43.5,14],[41,13.5],[38,12.5],[36,12.5],[34,12.5],[32,12],[29,11],[27,11],[25,10.5],[24,10.5],[21,10],[19.5,10],[17.5,9],[14.5,8.5],[14.5,8],[13.5,8],[13,8],[12,8],[10.5,7.5],[9.5,7.5],[8.5,7.5],[7,7.5],[6.5,7.5],[5.5,7.5],[4.5,7.5],[3.5,7.5],[2.5,7.5],[2,7.5],[2,7],[2,7]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[2,7]},{"id":"3WMcJJIpu3KhePPfsiaCm","type":"freedraw","x":-79.55579600379338,"y":-221.7265625,"width":3,"height":7,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aD","roundness":null,"seed":1371500040,"version":12,"versionNonce":1344751624,"isDeleted":false,"boundElements":null,"updated":1762427248777,"link":null,"locked":false,"points":[[0,0],[0.5,0],[0.5,0.5],[0.5,1.5],[-0.5,3.5],[-1,4.5],[-2,6],[-2,6.5],[-2,7],[-2.5,7],[-2.5,7]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[-2.5,7]},{"id":"6hGf73UqD4F5tykRCOndM","type":"freedraw","x":-68.55579600379338,"y":-221.7265625,"width":5,"height":15,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aE","roundness":null,"seed":812312072,"version":10,"versionNonce":129114376,"isDeleted":false,"boundElements":null,"updated":1762427249527,"link":null,"locked":false,"points":[[0,0],[0,1],[-1,4.5],[-1.5,7.5],[-2.5,10.5],[-4,12.5],[-5,14.5],[-5,15],[-5,15]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[-5,15]},{"id":"53LGAuRnUmu-A00lLCSxE","type":"freedraw","x":-51.055796003793375,"y":-228.2265625,"width":7.5,"height":24,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aF","roundness":null,"seed":1674805000,"version":12,"versionNonce":305830152,"isDeleted":false,"boundElements":null,"updated":1762427250103,"link":null,"locked":false,"points":[[0,0],[0,1],[-1,5.5],[-3,11],[-5,16],[-6,20],[-6.5,22],[-6.5,22.5],[-7,24],[-7.5,24],[-7.5,24]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[-7.5,24]},{"id":"pBiNt-UUt7tcGTuwkxtQ1","type":"freedraw","x":-37.555796003793375,"y":-242.2265625,"width":10,"height":32,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aG","roundness":null,"seed":1352529672,"version":14,"versionNonce":5484552,"isDeleted":false,"boundElements":null,"updated":1762427250733,"link":null,"locked":false,"points":[[0,0],[0,1.5],[-2,6.5],[-3.5,10],[-4,12],[-4.5,15.5],[-6.5,21.5],[-7.5,25],[-9,28.5],[-9,30.5],[-9.5,32],[-10,32],[-10,32]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[-10,32]},{"id":"5dDKABKoXwAejWavvb-4r","type":"freedraw","x":-22.555796003793375,"y":-235.7265625,"width":14.5,"height":31,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aH","roundness":null,"seed":1050496520,"version":18,"versionNonce":1936901384,"isDeleted":false,"boundElements":null,"updated":1762427251526,"link":null,"locked":false,"points":[[0,0],[-0.5,0.5],[-3,6],[-7.5,15.5],[-9,18.5],[-9,20],[-10,22],[-10.5,23.5],[-11.5,25.5],[-12,27],[-12.5,28],[-13,29],[-13,29.5],[-13.5,30],[-14,30.5],[-14.5,31],[-14.5,31]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[-14.5,31]},{"id":"YBc8XO5oOFa__CWgbFMAM","type":"freedraw","x":-9.555796003793375,"y":-229.7265625,"width":5.5,"height":23,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aI","roundness":null,"seed":1253778184,"version":14,"versionNonce":591027208,"isDeleted":false,"boundElements":null,"updated":1762427252391,"link":null,"locked":false,"points":[[0,0],[0,0.5],[-1,4.5],[-2.5,9],[-3.5,14],[-4,16],[-5,18],[-5,20],[-5,21],[-5,22],[-5.5,22.5],[-5.5,23],[-5.5,23]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[-5.5,23]},{"id":"-89z2LRpbAEYppDn8Lb-N","type":"freedraw","x":3.4442039962066247,"y":-226.2265625,"width":4,"height":17.5,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aJ","roundness":null,"seed":1086913032,"version":10,"versionNonce":918795528,"isDeleted":false,"boundElements":null,"updated":1762427253207,"link":null,"locked":false,"points":[[0,0],[0,1],[0,4],[-1,9],[-3,14.5],[-3.5,16.5],[-3.5,17],[-4,17.5],[-4,17.5]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[-4,17.5]},{"id":"tYf6SLYbKmSl_4OXN_CEy","type":"freedraw","x":14.944203996206625,"y":-223.7265625,"width":100.5,"height":38,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aK","roundness":null,"seed":1116738312,"version":274,"versionNonce":424110600,"isDeleted":false,"boundElements":null,"updated":1762427261425,"link":null,"locked":false,"points":[[0,0],[-1,0],[-2.5,0.5],[-4,0.5],[-5,0.5],[-8,0.5],[-10.5,0.5],[-14.5,0.5],[-16.5,0.5],[-23,0.5],[-30.5,0.5],[-38,0],[-43.5,-1],[-46.5,-1.5],[-48,-1.5],[-47,-1.5],[-43,-1.5],[-39.5,-1.5],[-37,-1.5],[-34.5,-1.5],[-33,-1.5],[-33,-2],[-42,-3.5],[-53,-5],[-61.5,-6],[-66,-7],[-67,-7],[-66,-7.5],[-63,-8],[-61,-8.5],[-59.5,-9],[-58.5,-9],[-58,-9.5],[-58,-10],[-59,-10],[-59.5,-10],[-58,-10.5],[-54,-11],[-49.5,-12],[-45.5,-12],[-43.5,-12.5],[-42.5,-13],[-44,-13],[-45.5,-13],[-46,-13],[-45.5,-13],[-42,-13],[-39.5,-13],[-36.5,-12.5],[-34.5,-11.5],[-31,-10],[-29,-9.5],[-27.5,-9],[-27,-8.5],[-26.5,-8.5],[-26.5,-7],[-26.5,-5.5],[-26.5,-4.5],[-26.5,-2.5],[-27,-1],[-27,1],[-27,1.5],[-27,2],[-25.5,2],[-24.5,2],[-23.5,1.5],[-22.5,0],[-21.5,-2],[-21,-4.5],[-21,-7],[-21,-9.5],[-22.5,-12.5],[-24,-13],[-26.5,-14],[-29.5,-15.5],[-32.5,-16],[-35.5,-16.5],[-39,-17],[-40,-17],[-41,-17],[-41.5,-17],[-42.5,-17],[-43,-17],[-43.5,-17],[-44,-17],[-45.5,-17],[-47,-17],[-48.5,-17],[-53,-17],[-55.5,-16],[-56,-16],[-56.5,-15],[-57,-14],[-58,-13],[-59.5,-12],[-61,-11.5],[-62.5,-10.5],[-63.5,-10],[-65.5,-9],[-67.5,-8.5],[-69,-7.5],[-70,-7],[-71.5,-7],[-72,-6.5],[-72.5,-6.5],[-73,-6],[-74,-5.5],[-75,-4.5],[-76.5,-4],[-78,-4],[-79.5,-3],[-81,-2],[-82.5,-2],[-83,-1.5],[-84,-1],[-84.5,-1],[-85.5,-0.5],[-86,-0.5],[-87.5,0],[-88.5,0.5],[-89.5,0.5],[-91,1.5],[-92.5,1.5],[-93.5,2.5],[-94.5,2.5],[-95,2.5],[-95.5,3],[-96,3],[-96.5,3],[-98,3],[-98.5,3.5],[-99.5,3.5],[-100,4],[-100,4.5],[-100.5,4.5],[-100.5,5],[-100.5,6],[-100,6.5],[-99,7],[-98,8],[-97.5,8.5],[-96.5,9],[-95.5,10],[-94,10],[-93,10],[-89.5,10.5],[-89,11],[-86.5,11],[-84,11],[-81.5,11],[-76,11],[-74.5,11],[-72.5,11],[-69.5,11],[-67.5,11],[-67,11],[-64.5,11],[-62.5,11],[-60.5,11],[-58,11],[-54,11],[-51.5,11],[-50,11],[-48.5,11],[-47.5,11],[-46.5,11],[-48.5,11],[-53,10.5],[-59.5,9.5],[-62,9],[-65.5,8.5],[-67.5,8.5],[-69.5,8.5],[-70.5,8],[-71,7.5],[-73,7],[-73.5,6.5],[-74.5,6],[-76,5.5],[-77,5],[-78,4],[-79,3.5],[-79.5,3],[-79.5,2.5],[-79.5,1],[-77,-1],[-72.5,-3.5],[-66.5,-5.5],[-61,-6.5],[-53,-7],[-47.5,-7],[-45,-7],[-41,-5],[-36,-2.5],[-34.5,-1.5],[-34,-1.5],[-34,-0.5],[-35,2],[-38.5,4.5],[-44.5,7.5],[-52,11],[-63.5,14.5],[-66.5,15.5],[-69.5,16],[-72,17],[-75,17.5],[-75.5,17.5],[-76,18],[-75.5,18],[-74,18.5],[-70,19.5],[-59.5,20.5],[-52,21],[-44.5,21],[-38.5,20],[-32,18.5],[-28.5,17.5],[-26.5,16.5],[-25,16],[-24,15],[-23,14.5],[-22,13.5],[-20.5,12],[-18.5,11],[-16.5,10],[-16,9],[-15.5,9],[-15.5,8.5],[-15,8.5],[-14,7.5],[-13.5,7.5],[-13.5,7],[-17,7],[-27.5,7],[-34,7],[-40.5,7.5],[-45,8.5],[-48,9],[-49,9],[-49.5,9],[-50.5,9],[-51,9],[-47.5,9],[-42,9],[-39.5,9],[-35.5,9],[-32,9],[-30.5,10],[-31.5,12],[-36.5,14],[-42.5,15.5],[-46.5,17],[-48,17],[-48.5,18],[-48.5,17.5],[-49,15],[-50,12],[-50.5,9],[-51,5.5],[-51.5,3],[-52.5,1.5],[-53,0.5],[-53,0],[-53.5,0],[-53.5,-1],[-53.5,-1.5],[-54,-1.5],[-54,-2],[-55,-3],[-55.5,-3],[-54.5,-3],[-54,-3],[-54,-3]],"pressures":[],"simulatePressure":true,"lastCommittedPoint":[-54,-3]},{"id":"C3MmhiD9K6c2Y3JwgKFRH","type":"line","x":-57.055796003793375,"y":-178.2265625,"width":105.5,"height":125.5,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a8","roundness":{"type":2},"seed":1082193272,"version":59,"versionNonce":1775599624,"isDeleted":true,"boundElements":null,"updated":1762427235002,"link":null,"locked":false,"points":[[0,0],[105.5,125.5]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":null,"polygon":false},{"id":"dnk28axW","type":"text","x":41.944203996206625,"y":-45.2265625,"width":8,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":40,"groupIds":[],"frameId":null,"index":"aL","roundness":null,"seed":363144824,"version":3,"versionNonce":2063067256,"isDeleted":true,"boundElements":null,"updated":1762427276434,"link":null,"locked":false,"text":"","rawText":"","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":40,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"diamond","currentItemArrowType":"elbow","currentItemFrameRole":null,"scrollX":562.3057960037934,"scrollY":344.484375,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true,"markerName":true,"markerEnabled":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null,"fromSelection":false}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("UML-Komposition_2024-11-06_1800.58.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

</div></div>


---

# Abstrakte Klassen im Klassendiagramm
>Weitere Informationen zur Darstellung und Verwendung von abstrakten Klassen in UML-Klassendiagrammen:
# 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/02-resources/notes/uml-abstrakte-klassen/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>In [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]en werden **abstrakte Klassen** als Klassen dargestellt, die **nicht direkt instanziiert** werden können und als **Vorlage** für andere Klassen dienen.
>>Abstrakte Klassen enthalten oft abstrakte Methoden, die keine Implementierung haben und von den [[02 - RESOURCES/Notes/UML-Vererbung\|Unterklassen]] überschrieben werden müssen.

# Darstellung in UML

>[!important] Notation von abstrakten Klassen
>Es gibt **zwei Möglichkeiten**, abstrakte Klassen in UML zu kennzeichnen:
>
>1. **Kursive Schreibweise**: Der Klassenname wird _kursiv_ geschrieben
>2. **Stereotyp**: Der Klassenname wird mit `<<abstract>>` gekennzeichnet
>
>Beide Notationen sind in der UML-Spezifikation akzeptiert.

## Abstrakte Methoden

>**Abstrakte Methoden** werden ebenfalls _kursiv_ geschrieben oder mit dem Stereotyp `<<abstract>>` gekennzeichnet.
>>Sie haben **keine Implementierung** in der abstrakten Klasse und müssen in den Unterklassen überschrieben werden.

# Eigenschaften

>[!note] Eigenschaften abstrakter Klassen
>- Können **nicht direkt instanziiert** werden
>- Können sowohl **abstrakte** als auch **konkrete** Methoden enthalten
>- Können **Attribute** haben
>- Dienen als **Basisklassen** für andere Klassen
>- Definieren einen **gemeinsamen Bauplan** für verwandte Klassen

# Beispiel

>[!example] Abstrakte Klasse "Fahrzeug"
>```
>┌─────────────────────────┐
>│   <<abstract>>          │
>│      Fahrzeug           │
>├─────────────────────────┤
>│ - marke: String         │
>│ - geschwindigkeit: int  │
>├─────────────────────────┤
>│ + starten(): void       │
>│ + beschleunigen(): void │
>│ + bremsen(): void       │
>└─────────────────────────┘
>          △
>          │
>    ┌─────┴─────┐
>    │           │
>┌───────┐  ┌──────────┐
>│  Auto │  │ Motorrad │
>└───────┘  └──────────┘
>```
>
>In diesem Beispiel ist **Fahrzeug** eine abstrakte Klasse, die von **Auto** und **Motorrad** geerbt wird.

## Java-Beispiel

```java
// Abstrakte Klasse
public abstract class Fahrzeug {
    protected String marke;
    protected int geschwindigkeit;

    public Fahrzeug(String marke) {
        this.marke = marke;
        this.geschwindigkeit = 0;
    }

    // Konkrete Methode
    public void starten() {
        System.out.println(marke + " wird gestartet.");
    }

    // Abstrakte Methode (muss überschrieben werden)
    public abstract void beschleunigen();

    // Abstrakte Methode
    public abstract void bremsen();
}

// Konkrete Klasse
public class Auto extends Fahrzeug {
    public Auto(String marke) {
        super(marke);
    }

    @Override
    public void beschleunigen() {
        geschwindigkeit += 10;
        System.out.println("Auto beschleunigt auf " + geschwindigkeit + " km/h");
    }

    @Override
    public void bremsen() {
        geschwindigkeit -= 10;
        System.out.println("Auto bremst auf " + geschwindigkeit + " km/h");
    }
}
```

# Von konkreter zu abstrakter Klasse

>[!example] Beispiel: Abstrahierung von Formen
>**Ausgangssituation - Konkrete Klassen mit Duplikation:**
>
>Wir haben drei konkrete Klassen mit gemeinsamen Eigenschaften:
>
>```java
>// Konkrete Klasse 1
>public class Kreis {
>    private String farbe;
>    private double radius;
>
>    public void zeichnen() {
>        System.out.println("Zeichne einen " + farbe + "en Kreis");
>    }
>
>    public double berechneFlaeche() {
>        return Math.PI * radius * radius;
>    }
>}
>
>// Konkrete Klasse 2
>public class Rechteck {
>    private String farbe;
>    private double breite;
>    private double hoehe;
>
>    public void zeichnen() {
>        System.out.println("Zeichne ein " + farbe + "es Rechteck");
>    }
>
>    public double berechneFlaeche() {
>        return breite * hoehe;
>    }
>}
>
>// Konkrete Klasse 3
>public class Dreieck {
>    private String farbe;
>    private double basis;
>    private double hoehe;
>
>    public void zeichnen() {
>        System.out.println("Zeichne ein " + farbe + "es Dreieck");
>    }
>
>    public double berechneFlaeche() {
>        return (basis * hoehe) / 2;
>    }
>}
>```
>
>**Problem:**
>- Alle Klassen haben das Attribut `farbe`
>- Alle Klassen haben die Methode `zeichnen()` mit ähnlicher Logik
>- Alle Klassen haben `berechneFlaeche()`, aber unterschiedliche Implementierungen
>- **Code-Duplizierung** und keine gemeinsame Schnittstelle

## UML: Vorher vs. Nachher

**Vorher (konkrete Klassen ohne Abstraktion):**
```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│    Kreis     │   │  Rechteck    │   │   Dreieck    │
├──────────────┤   ├──────────────┤   ├──────────────┤
│- farbe: String│   │- farbe: String│   │- farbe: String│
│- radius: double│  │- breite: double│  │- basis: double│
│              │   │- hoehe: double│   │- hoehe: double│
├──────────────┤   ├──────────────┤   ├──────────────┤
│+ zeichnen()  │   │+ zeichnen()  │   │+ zeichnen()  │
│+ berechneFlaeche()│ │+ berechneFlaeche()│ │+ berechneFlaeche()│
└──────────────┘   └──────────────┘   └──────────────┘
```

**Nachher (mit abstrakter Basisklasse):**
```
        ┌─────────────────────────┐
        │   <<abstract>>          │
        │        Form             │
        ├─────────────────────────┤
        │ # farbe: String         │
        ├─────────────────────────┤
        │ + zeichnen(): void      │
        │ + berechneFlaeche(): double (abstract) │
        │ + getFarbe(): String    │
        │ + setFarbe(String): void│
        └─────────────────────────┘
                   △
                   │
        ┌──────────┼──────────┐
        │          │          │
┌───────────┐ ┌──────────┐ ┌──────────┐
│   Kreis   │ │ Rechteck │ │ Dreieck  │
├───────────┤ ├──────────┤ ├──────────┤
│- radius   │ │- breite  │ │- basis   │
│           │ │- hoehe   │ │- hoehe   │
├───────────┤ ├──────────┤ ├──────────┤
│+ berechneFlaeche()│ │+ berechneFlaeche()│ │+ berechneFlaeche()│
└───────────┘ └──────────┘ └──────────┘
```

## Abstrahierte Lösung in Code

```java
// Abstrakte Basisklasse
public abstract class Form {
    protected String farbe;

    public Form(String farbe) {
        this.farbe = farbe;
    }

    // Konkrete Methode (gemeinsam für alle)
    public void zeichnen() {
        System.out.println("Zeichne eine " + farbe + "e Form");
    }

    // Abstrakte Methode (muss von Unterklassen implementiert werden)
    public abstract double berechneFlaeche();

    // Getter und Setter
    public String getFarbe() {
        return farbe;
    }

    public void setFarbe(String farbe) {
        this.farbe = farbe;
    }
}

// Konkrete Unterklassen
public class Kreis extends Form {
    private double radius;

    public Kreis(String farbe, double radius) {
        super(farbe);
        this.radius = radius;
    }

    @Override
    public double berechneFlaeche() {
        return Math.PI * radius * radius;
    }

    @Override
    public void zeichnen() {
        System.out.println("Zeichne einen " + farbe + "en Kreis mit Radius " + radius);
    }
}

public class Rechteck extends Form {
    private double breite;
    private double hoehe;

    public Rechteck(String farbe, double breite, double hoehe) {
        super(farbe);
        this.breite = breite;
        this.hoehe = hoehe;
    }

    @Override
    public double berechneFlaeche() {
        return breite * hoehe;
    }

    @Override
    public void zeichnen() {
        System.out.println("Zeichne ein " + farbe + "es Rechteck " + breite + "x" + hoehe);
    }
}

public class Dreieck extends Form {
    private double basis;
    private double hoehe;

    public Dreieck(String farbe, double basis, double hoehe) {
        super(farbe);
        this.basis = basis;
        this.hoehe = hoehe;
    }

    @Override
    public double berechneFlaeche() {
        return (basis * hoehe) / 2;
    }

    @Override
    public void zeichnen() {
        System.out.println("Zeichne ein " + farbe + "es Dreieck");
    }
}
```

>[!success] Vorteile der Abstraktion
>**Durch die Abstraktion haben wir erreicht:**
>- ✅ **Weniger Code-Duplikation**: `farbe` nur einmal definiert
>- ✅ **Gemeinsame Schnittstelle**: Alle Formen haben `berechneFlaeche()`
>- ✅ **Polymorphismus möglich**: `Form form = new Kreis("rot", 5.0);`
>- ✅ **Einfachere Wartung**: Änderungen an gemeinsamen Eigenschaften nur an einer Stelle
>- ✅ **Flexibilität**: Neue Formen können einfach hinzugefügt werden
>- ✅ **Erzwungene Implementierung**: Jede Form **muss** `berechneFlaeche()` implementieren

## Verwendung mit Polymorphismus

```java
public class Main {
    public static void main(String[] args) {
        // Polymorphismus: Form-Referenz auf verschiedene Objekte
        Form[] formen = new Form[3];
        formen[0] = new Kreis("rot", 5.0);
        formen[1] = new Rechteck("blau", 4.0, 6.0);
        formen[2] = new Dreieck("grün", 3.0, 4.0);

        // Einheitliche Schnittstelle dank Abstraktion
        for (Form form : formen) {
            form.zeichnen();
            System.out.println("Fläche: " + form.berechneFlaeche());
            System.out.println("---");
        }
    }
}
```

**Ausgabe:**
```
Zeichne einen roten Kreis mit Radius 5.0
Fläche: 78.53981633974483
---
Zeichne ein blaues Rechteck 4.0x6.0
Fläche: 24.0
---
Zeichne ein grünes Dreieck
Fläche: 6.0
---
```

---

# Unterschied zu Interfaces

>[!tip] Abstrakte Klasse vs. Interface
>**Abstrakte Klassen:**
>- Können sowohl abstrakte als auch konkrete Methoden haben
>- Können Attribute (Instanzvariablen) haben
>- Können Konstruktoren haben
>- Eine Klasse kann nur **eine** abstrakte Klasse erben
>
>**[[Interface\|Interface]]:**
>- Alle Methoden sind abstrakt (bis Java 8, dann default-Methoden möglich)
>- Können nur Konstanten haben
>- Keine Konstruktoren
>- Eine Klasse kann **mehrere** Interfaces implementieren

# Verwendung

>[!success] Wann abstrakte Klassen verwenden?
>Verwende abstrakte Klassen, wenn:
>- Mehrere verwandte Klassen **gemeinsamen Code teilen** sollen
>- Du **Attribute oder konkrete Methoden** definieren möchtest
>- Du **nicht-öffentliche** Member benötigst
>- Du eine **"ist-ein"**-Beziehung modellieren möchtest
>
>Beispiele:
>- `Fahrzeug` → `Auto`, `Motorrad`, `LKW`
>- `Tier` → `Hund`, `Katze`, `Vogel`
>- `Form` → `Kreis`, `Rechteck`, `Dreieck`

>[!warning] Wichtige Regeln
>- Eine abstrakte Klasse kann **nicht instanziiert** werden
>- Wenn eine Klasse mindestens eine abstrakte Methode hat, **muss** die Klasse auch abstrakt sein
>- Unterklassen müssen **alle abstrakten Methoden** implementieren, sonst müssen sie selbst abstrakt sein
>- Abstrakte Klassen können **konkrete Methoden** enthalten, die nicht überschrieben werden müssen

---

**Siehe auch:**
- [[02 - RESOURCES/Notes/Abstrakt\|Abstrakt]]
- [[02 - RESOURCES/Notes/Java abstrakte Klasse\|Java abstrakte Klasse]]
- [[02 - RESOURCES/Notes/UML-Klassendiagramm\|UML-Klassendiagramm]]
- [[02 - RESOURCES/Notes/UML-Vererbung\|UML-Vererbung]]
- [[Interface\|Interface]]
- [[02 - RESOURCES/Notes/Klasse\|Klasse]]


</div></div>

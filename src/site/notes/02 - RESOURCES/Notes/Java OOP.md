---
{"dg-publish":true,"permalink":"/02-resources/notes/java-oop/","tags":["inProgress","informatik/code/OOP","informatik/programmierung/sprachen/java"],"noteIcon":"","updated":"2025-10-29T12:59:07.190+01:00"}
---

> Da du jetzt die [[02 - RESOURCES/Notes/Java Grundlage\|Java Grundlage]]n kennst, tauchen wir tiefer in die objektorientierte Programmierung ([[02 - RESOURCES/Notes/OOP\|OOP]]) von [[02 - RESOURCES/Notes/Java\|Java]] ein.

In deinem ersten [[02 - RESOURCES/Notes/Java\|Java]]-Code hast du wahrscheinlich `Hello World` auf der Konsole ausgegeben. Lass uns anschauen, was hier passiert ist:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

In den [[02 - RESOURCES/Notes/Java Grundlage\|Java Grundlage]]n haben wir gelernt, dass `main` eine spezielle [[02 - RESOURCES/Notes/Java Methode\|Java Methode]] ist – sie ist der Code-STARTER. Egal wie groß das Programm ist, der [[02 - RESOURCES/Notes/Compiler\|Compiler]] sucht immer zuerst nach `main`. Dir ist bereits bekannt, dass Code in einer [[02 - RESOURCES/Notes/Java klasse\|Java Klasse]] abläuft, in diesem Fall `HelloWorld`.

Aber was passiert, wenn wir eine [[02 - RESOURCES/Notes/Klasse\|Klasse]] ohne `main`-[[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] erstellen?

```java
public class SayHelloWorld {
    public String getGreeting() {
        return "Hello, World!";
    }
}
```

Diese [[02 - RESOURCES/Notes/Java klasse\|Java Klasse]] lässt sich nicht direkt ausführen, da sie keine `main`-Methode hat. ABER wir können `SayHelloWorld` in `HelloWorld` importieren, dort als [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] instanziieren und in der `main`-[[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] verwenden:

```java
public class HelloWorld {
    public static void main(String[] args) {
        SayHelloWorld hello = new SayHelloWorld();
        System.out.println(hello.getGreeting());
    }
}
```

>[!note] 
>[[02 - RESOURCES/Notes/Java OOP\|Java OOP]] bedeutet im Grunde, mit verschiedenen [[02 - RESOURCES/Notes/Java klasse\|Java Klasse]]n zu arbeiten und diese zu verknüpfen, um Probleme zu lösen. Es gibt natürlich noch viele weitere Details, aber das ist die Basis von [[02 - RESOURCES/Notes/Java OOP\|Java OOP]].

>[!important] 
>Bevor wir weiterlernen, werfen wir einen Blick auf [[02 - RESOURCES/Notes/Java Static\|Java Static]].
>Hier ist derselbe Code wie oben, aber `getGreeting` ist jetzt [[02 - RESOURCES/Notes/static\|static]]:

```java
public class SayHelloWorld {
    public static String getGreeting() {
        return "Hello, World!";
    }
}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println(SayHelloWorld.getGreeting());
    }
}
```

Jetzt erhalten wir dieselbe Ausgabe, ohne ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] erstellen zu müssen.

# [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]] oder [[02 - RESOURCES/Notes/Java Static\|Java Static]]?

>Ob du in [[02 - RESOURCES/Notes/Java\|Java]] eine Instanz eines Objekts oder eine `static`-[[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] verwenden solltest, hängt davon ab, wie die Methode auf Daten zugreift und wie flexibel der Code sein muss. Schauen wir uns an, wann was zu bevorzugen ist:

## Wann verwende ich ein [[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]]?

Ein Objekt ermöglicht dir, Daten individuell für jede Instanz zu speichern. Das ist ideal, wenn die Methode oder der Zustand der Klasse auf ein spezifisches Objekt bezogen ist.

Beispiel:
- Ein **Konto**-Objekt, das Informationen wie `kontostand`, `kontoinhaber`, und `kontoNummer` speichert. Da jeder Kontoinhaber eigene Daten hat, ist eine Instanz sinnvoll.

```java
public class Konto {
    private double kontostand;
    
    public Konto(double startKontostand) {
        this.kontostand = startKontostand;
    }
    
    public double getKontostand() {
        return this.kontostand;
    }
}
```

Hier können wir mehrere `Konto`-Objekte mit unterschiedlichem Kontostand erstellen.

## Wann verwende ich eine [[02 - RESOURCES/Notes/Java Static\|Java Static]] Methode?

`static`-Methoden sind nützlich, wenn die Methode keine spezifischen Daten einer Instanz benötigt, sondern allgemeine Berechnungen oder logische Prozesse durchführt. Sie lassen sich direkt über die Klasse aufrufen, ohne dass ein Objekt erstellt werden muss.

Beispiel:
- Ein `Math`-Helper für allgemeine Berechnungen wie `addieren` oder `subtrahieren`. Da diese unabhängig von einem spezifischen Objekt sind, können sie `static` sein.

```java
public class MathHelper {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

## Entscheidungshilfe
1. **Objektmethode (Instanzmethode)**: Verwende sie, wenn auf Daten oder Methoden einer spezifischen Instanz zugegriffen wird oder diese benötigt werden.
2. **Static Methode**: Verwende sie, wenn keine Instanzdaten erforderlich sind und die [[02 - RESOURCES/Notes/Programmierung Methode\|Programmierung Methode]] universell einsetzbar ist.

>[!note] 
>Einfach gesagt: Wenn der Code sich auf ein spezifisches **Objekt** bezieht, nutze ein **[[02 - RESOURCES/Notes/Java Objekt\|Java Objekt]]**. Wenn der Code für alle **Objekte** gleich ist, verwende **[[02 - RESOURCES/Notes/Java Static\|Java Static]]**.


___


# Klassenarten

## Basis
<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="Java_2024-10-29_0047.37.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.5.2","elements":[{"type":"text","version":268,"versionNonce":622297747,"index":"a2","isDeleted":false,"id":"70vsxeak","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-521.824675549853,"y":-246.3475533354212,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":40.44630432128906,"height":21.28041855586091,"seed":953611987,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165583558,"link":null,"locked":false,"fontSize":17.024334844688727,"fontFamily":5,"text":"Auto","rawText":"Auto","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Auto","autoResize":true,"lineHeight":1.25},{"type":"text","version":503,"versionNonce":1941711229,"index":"a5","isDeleted":false,"id":"No1Sjnsi","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-533.6758922920874,"y":-18.07047681113403,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":35.98689270019531,"height":21.28041855586091,"seed":369868147,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165611459,"link":null,"locked":false,"fontSize":17.024334844688727,"fontFamily":5,"text":"Main","rawText":"Main","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Main","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":413,"versionNonce":524416915,"index":"a7","isDeleted":false,"id":"6Kc2H9W-Eg1M187ELgegB","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-657.0890208351043,"y":-254.15980548318095,"strokeColor":"#000000","backgroundColor":"transparent","width":304.47065668922835,"height":168.41595458984372,"seed":1086792467,"groupIds":["GIMaI3dV5EgES6yWIOEAe"],"frameId":null,"roundness":{"type":1},"boundElements":[],"updated":1730165545221,"link":null,"locked":false},{"type":"line","version":351,"versionNonce":1739144989,"index":"a8","isDeleted":false,"id":"5PBZ-vGAbVNC8C5D3qwt9","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-654.3552544785767,"y":-210.7002678801514,"strokeColor":"#000000","backgroundColor":"transparent","width":303.6391822401005,"height":1.943019432956918,"seed":1354188979,"groupIds":["GIMaI3dV5EgES6yWIOEAe"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730165545221,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[303.6391822401005,-1.943019432956918]]},{"id":"F67cTWoe","type":"text","x":-644.6003103912876,"y":-205.55729693825907,"width":290.195556640625,"height":105.40694710960801,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"a9","roundness":null,"seed":1307767955,"version":210,"versionNonce":964969555,"isDeleted":false,"boundElements":null,"updated":1730165579994,"link":null,"locked":false,"text":"+brand: String \n+speed: double \n+plate: String \n____________________________________\n+Auto()\n+ void drive()\n+ void stop()","rawText":"+brand: String \n+speed: double \n+plate: String \n____________________________________\n+Auto()\n+ void drive()\n+ void stop()","fontSize":12.046508241098058,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+brand: String \n+speed: double \n+plate: String \n____________________________________\n+Auto()\n+ void drive()\n+ void stop()","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":296,"versionNonce":752087517,"index":"aA","isDeleted":false,"id":"dYCYBq7XFUkXfXtKkWMN2","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-649.1491517706843,"y":-25.159805483180946,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1729398451,"groupIds":["9bT3m6d8JB0g3tNPuo3zc"],"frameId":null,"roundness":{"type":1},"boundElements":[],"updated":1730165611459,"link":null,"locked":false},{"type":"line","version":234,"versionNonce":345222717,"index":"aB","isDeleted":false,"id":"lJnXkd4wUI_tSuz3JkeJG","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-646.723797766778,"y":13.396804624240929,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":2060925011,"groupIds":["9bT3m6d8JB0g3tNPuo3zc"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730165611459,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"id":"W2ueHooo","type":"text","x":-640.1202765167759,"y":21.94270306174093,"width":68.03993225097656,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aC","roundness":null,"seed":109640179,"version":63,"versionNonce":2044518045,"isDeleted":false,"boundElements":null,"updated":1730165611459,"link":null,"locked":false,"text":"+main()","rawText":"+main()","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+main()","autoResize":true,"lineHeight":1.25},{"id":"RkQ72BsPzyWu37-2cCrnD","type":"line","x":-519.1003103912876,"y":-87.05729693825907,"width":0.5,"height":61,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"aD","roundness":{"type":2},"seed":1365407571,"version":35,"versionNonce":172658109,"isDeleted":false,"boundElements":null,"updated":1730165618329,"link":null,"locked":false,"points":[[0,0],[-0.5,61]],"lastCommittedPoint":null,"startBinding":null,"endBinding":null,"startArrowhead":null,"endArrowhead":null},{"type":"rectangle","version":362,"versionNonce":945380467,"index":"a0","isDeleted":true,"id":"i_0UWtDjzGBoF-sD9czaY","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-349.8926995465934,"y":-259.2109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":205.14323487849916,"height":247.20664220647774,"seed":870840339,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[{"type":"text","id":"jBwVs4DU"},{"id":"UKR4joS4Ib9vP-gV-NNMz","type":"arrow"}],"updated":1730165606611,"link":null,"locked":false},{"type":"text","version":732,"versionNonce":433002557,"index":"a1","isDeleted":true,"id":"jBwVs4DU","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-344.8926995465934,"y":-254.2109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":183.0076904296875,"height":63.84125566758273,"seed":361818301,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165606611,"link":null,"locked":false,"fontSize":17.024334844688727,"fontFamily":5,"text":"\n________________\n","rawText":"\n________________\n","textAlign":"left","verticalAlign":"top","containerId":"i_0UWtDjzGBoF-sD9czaY","originalText":"\n________________\n","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":318,"versionNonce":136745405,"index":"a3","isDeleted":true,"id":"cHjVsL-xh-yTLg-S_uHC5","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-355,"y":39.566139024287224,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":203.4408013940303,"height":98.74114209919462,"seed":63405117,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[{"type":"text","id":"4g4BEQAN"},{"id":"UKR4joS4Ib9vP-gV-NNMz","type":"arrow"}],"updated":1730165608150,"link":null,"locked":false},{"type":"text","version":598,"versionNonce":1620194451,"index":"a4","isDeleted":true,"id":"4g4BEQAN","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-350,"y":44.566139024287224,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":183.0076904296875,"height":63.84125566758273,"seed":1550893139,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165608150,"link":null,"locked":false,"fontSize":17.024334844688727,"fontFamily":5,"text":"\n________________\n+main()","rawText":"\n________________\n+main()","textAlign":"left","verticalAlign":"top","containerId":"cHjVsL-xh-yTLg-S_uHC5","originalText":"\n________________\n+main()","autoResize":true,"lineHeight":1.25},{"type":"arrow","version":904,"versionNonce":1465199955,"index":"a6","isDeleted":true,"id":"UKR4joS4Ib9vP-gV-NNMz","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-248.58694540347622,"y":-10.79073173985637,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0.013462606584671587,"height":42.69592008403358,"seed":834642621,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730165607452,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0.013462606584671587,42.69592008403358]],"elbowed":false}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":null,"currentItemArrowType":"round","scrollX":742.6003103912876,"scrollY":287.34635943825907,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Java_2024-10-29_0047.37.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

>[!example] 
>Dies ist eine Standardklasse in [[02 - RESOURCES/Notes/Java\|Java]]. Ein Objekt wurde in einer anderen Datei erstellt, in die Main-[[02 - RESOURCES/Notes/Klasse\|Klasse]] importiert, und ein Objekt wird erstellt, mit dem wir arbeiten können.
>
>Natürlich gibt es unendlich viele Möglichkeiten, wie man das anpassen kann. Am besten sollten wir die [[02 - RESOURCES/Notes/Variable\|Variable]]n mit [[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]] auf _private_ setzen.
>
>
>
>```java
>class Auto {
>    // Attribute
>    public String brand;
>    public double speed;
>    public String plate;
>
>    // Konstruktor
>    public Auto(String brand, double speed, String plate) {
>        this.brand = brand;
>        this.speed = speed;
>        this.plate = plate;
>    }
>
>    // Methode zum Fahren
>    public void drive() {
>        System.out.println(brand + " fährt mit " + speed + " km/h.");
>    }
>
>    // Methode zum Anhalten
>    public void stop() {
>        speed = 0;
>        System.out.println(brand + " hat angehalten.");
>    }
>}
>
>public class Main {
>    public static void main(String[] args) {
>        // Erstellen eines Auto-Objekts und Aufruf der Methoden
>        Auto meinAuto = new Auto("BMW", 120.5, "AB-1234");
>        meinAuto.drive();
>        meinAuto.stop();
>    }
>}
>```

>[!example] 
>
>Gleiche BSP aber mit [[02 - RESOURCES/Notes/Java Static\|Java Static]]
>
>```java
>class Auto {
>
>   // Statische Methode zum Fahren
>   public static void drive(String brand, double speed) {
>       System.out.println(brand + " fährt mit " + speed + " km/h.");
>   }
>
>   // Statische Methode zum Anhalten
>   public static void stop(String brand) {
>       System.out.println(brand + " hat angehalten.");
>   }
>}
>
>public class Main {
>   public static void main(String[] args) {
>       // Aufruf der statischen Methoden ohne ein Objekt zu erstellen
>       Auto.drive("BMW", 120.5);
>       Auto.stop("BMW");
>   }
>}
>
>```

## [[02 - RESOURCES/Notes/Java Vererbung\|Java Vererbung]]
<div id="Java_2024-10-29_0136.53.excalidraw.md2"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.5.2","elements":[{"type":"text","version":282,"versionNonce":471975163,"index":"a8","isDeleted":false,"id":"BfU226LV","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":107.02667986817244,"y":-318.7811400996756,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":58.199951171875,"height":25,"seed":1952018717,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230548523,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Animal","rawText":"Animal","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Animal","autoResize":true,"lineHeight":1.25},{"type":"text","version":136,"versionNonce":883542205,"index":"aD","isDeleted":false,"id":"yPUvzmxw","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-226.21537840713165,"y":-19.011957346656118,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":47.299957275390625,"height":25,"seed":1588431581,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165464745,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Duck","rawText":"Duck","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Duck","autoResize":true,"lineHeight":1.25},{"type":"text","version":158,"versionNonce":1800236605,"index":"aE","isDeleted":false,"id":"1PJCfQFn","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":115.26523350086222,"y":-15.592059331321764,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":38.69996643066406,"height":25,"seed":939656083,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165459259,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Dog","rawText":"Dog","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Dog","autoResize":true,"lineHeight":1.25},{"type":"text","version":123,"versionNonce":344586963,"index":"aF","isDeleted":false,"id":"p7ryQwZj","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":427.59118089438346,"y":-26.017496801515108,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":40.299957275390625,"height":25,"seed":721440221,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165456041,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Fish","rawText":"Fish","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Fish","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":361,"versionNonce":206326749,"index":"aG","isDeleted":false,"id":"OP5a27XuIpCsRYs8gU1Im","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-4.639812429892743,"y":-322.2133861342859,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1741942077,"groupIds":["aROLbpQKhb9P8CynkMm5F"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"OE81W7i6FPBd_K2yXOWxt","type":"arrow"},{"id":"H-xawSz_jKVaVr4Kph6rt","type":"arrow"},{"id":"f68W84Ube8q8qmOo4eOUf","type":"arrow"}],"updated":1730165493402,"link":null,"locked":false},{"type":"line","version":296,"versionNonce":851802109,"index":"aH","isDeleted":false,"id":"6VEPEAPJWxB6_ovKdyKx6","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-2.214458425986493,"y":-283.656776026864,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":415055261,"groupIds":["aROLbpQKhb9P8CynkMm5F"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730165477086,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"text","version":164,"versionNonce":179269725,"index":"aI","isDeleted":false,"id":"2d3571qK","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":11.50744486880086,"y":-274.49717377950594,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":126.19987487792969,"height":75,"seed":1111457661,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165477086,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ void fly()\n+ void run()\n+ void swim()","rawText":"+ void fly()\n+ void run()\n+ void swim()","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ void fly()\n+ void run()\n+ void swim()","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":318,"versionNonce":269053085,"index":"aJ","isDeleted":false,"id":"vw_gWQX5utdrZhTwYCFTD","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-331.1395669409694,"y":-23.387526116649326,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":939467507,"groupIds":["JPMqSbTbPNI6wTcLSa0TU"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"H-xawSz_jKVaVr4Kph6rt","type":"arrow"}],"updated":1730165490111,"link":null,"locked":false},{"type":"line","version":255,"versionNonce":1536327037,"index":"aK","isDeleted":false,"id":"feOf0Qu2f9-Qfa5FhwD4K","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-328.71421293706317,"y":15.169083990772549,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1151618195,"groupIds":["JPMqSbTbPNI6wTcLSa0TU"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730165464745,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"rectangle","version":376,"versionNonce":1891699827,"index":"aO","isDeleted":false,"id":"FNX_y1HZtz003_u3eYkb0","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-4.4020433651189705,"y":-23.894527428351864,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1693487027,"groupIds":["A5e6OivCZei7BKiSrQ1Fo"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"OE81W7i6FPBd_K2yXOWxt","type":"arrow"}],"updated":1730165472292,"link":null,"locked":false},{"type":"line","version":313,"versionNonce":380289789,"index":"aP","isDeleted":false,"id":"8Ph5tXQIEjOOcoptT_Pji","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-1.9766893612127205,"y":14.66208267907001,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1380589907,"groupIds":["A5e6OivCZei7BKiSrQ1Fo"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730165459259,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"rectangle","version":371,"versionNonce":1478602525,"index":"aQ","isDeleted":false,"id":"Bwmtlf68GKLTBi_v7K5F0","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":314.48699905112005,"y":-30.04603492131895,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":274450205,"groupIds":["opIBAaF0ztCn4BsB7Tlrh"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"f68W84Ube8q8qmOo4eOUf","type":"arrow"}],"updated":1730165493402,"link":null,"locked":false},{"type":"line","version":308,"versionNonce":1041342995,"index":"aR","isDeleted":false,"id":"_u83y18Vp4mcnxJVb1mao","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":316.9123530550263,"y":8.510575186102926,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":2062474109,"groupIds":["opIBAaF0ztCn4BsB7Tlrh"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730165456041,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"text","version":52,"versionNonce":2041797469,"index":"aS","isDeleted":false,"id":"aL8wv56D","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":10.631848798497629,"y":21.245968295386433,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":113.05989074707031,"height":25,"seed":217312403,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165459259,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ void run()","rawText":"+ void run()","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ void run()","autoResize":true,"lineHeight":1.25},{"type":"text","version":96,"versionNonce":766075573,"index":"aT","isDeleted":false,"id":"SDOplzlP","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-312.7970963278479,"y":37.76517730300236,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":126.19987487792969,"height":50,"seed":595764595,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230064042,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ void fly()\n+ void swim()","rawText":"+ void fly()\n+ void swim()","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ void fly()\n+ void swim()","autoResize":true,"lineHeight":1.25},{"type":"text","version":122,"versionNonce":1582950323,"index":"aU","isDeleted":false,"id":"jtEXcFOO","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":325.52419205397086,"y":19.42261154490427,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":109.33988952636719,"height":25,"seed":228961053,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730165456041,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ void swim","rawText":"+ void swim","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ void swim","autoResize":true,"lineHeight":1.25},{"type":"arrow","version":80,"versionNonce":1464011253,"index":"aV","isDeleted":false,"id":"OE81W7i6FPBd_K2yXOWxt","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":130.5587171329279,"y":-28.894527428351864,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0.23776906477377224,"height":138.90290411609027,"seed":702788253,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230189685,"link":null,"locked":false,"startBinding":{"elementId":"FNX_y1HZtz003_u3eYkb0","focus":-0.0007404074997892553,"gap":5,"fixedPoint":[0.4996297962501054,-0.033463628524311985]},"endBinding":{"elementId":"OP5a27XuIpCsRYs8gU1Im","focus":0.0007404074997892553,"gap":5,"fixedPoint":[0.4996297962501054,1.033463628524312]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[0,-69.45145205804513],[-0.23776906477377224,-69.45145205804513],[-0.23776906477377224,-138.90290411609027]],"elbowed":true},{"type":"arrow","version":58,"versionNonce":130470069,"index":"aW","isDeleted":false,"id":"H-xawSz_jKVaVr4Kph6rt","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-196.17880644292254,"y":-28.387526116649333,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":326.4997545110767,"height":139.4099054277928,"seed":1979947411,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230189686,"link":null,"locked":false,"startBinding":{"elementId":"vw_gWQX5utdrZhTwYCFTD","focus":-0.0007404074997892554,"gap":5,"fixedPoint":[0.4996297962501054,-0.033463628524311985]},"endBinding":{"elementId":"OP5a27XuIpCsRYs8gU1Im","focus":0.0007404074997892554,"gap":5,"fixedPoint":[0.4996297962501054,1.033463628524312]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[0,-69.7049527138964],[326.4997545110767,-69.7049527138964],[326.4997545110767,-139.4099054277928]],"elbowed":true},{"type":"arrow","version":66,"versionNonce":1704454005,"index":"aX","isDeleted":false,"id":"f68W84Ube8q8qmOo4eOUf","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":449.4477595491669,"y":-35.046034921318956,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":319.12681148101274,"height":132.75139662312318,"seed":967413907,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230189686,"link":null,"locked":false,"startBinding":{"elementId":"Bwmtlf68GKLTBi_v7K5F0","focus":-0.0007404074997894659,"gap":5,"fixedPoint":[0.4996297962501053,-0.033463628524311985]},"endBinding":{"elementId":"OP5a27XuIpCsRYs8gU1Im","focus":0.0007404074997890449,"gap":5,"fixedPoint":[0.49962979625010545,1.033463628524312]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[0,-66.37569831156159],[-319.12681148101274,-66.37569831156159],[-319.12681148101274,-132.75139662312318]],"elbowed":true}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"elbow","scrollX":355.3220530499997,"scrollY":382.3117167097477,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Java_2024-10-29_0136.53.excalidraw.md2");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

>[!example] 
>Eine [[02 - RESOURCES/Notes/Java klasse\|Java Klasse]] wird erstellt (Parent-[[02 - RESOURCES/Notes/Klasse\|Klasse]]), und alle anderen Java Klassen (Child-Klassen) werden von dieser abgeleitet, in denen die [[02 - RESOURCES/Notes/Java klasse\|Java klasse]]n die [[02 - RESOURCES/Notes/Java Methode\|Java Methode]]n und [[02 - RESOURCES/Notes/Java Variable\|Java Variable]]n bei sich kopieren.
>
>```java
>class Animal {
>    void fly() {
>        System.out.println("This animal cannot fly.");
>    }
>
>    void run() {
>        System.out.println("This animal cannot run.");
>    }
>
>    void swim() {
>        System.out.println("This animal cannot swim.");
>    }
>}
>
>class Duck extends Animal {
>    @Override
>    void fly() {
>        System.out.println("The duck flies in the sky.");
>    }
>
>    @Override
>    void swim() {
>        System.out.println("The duck swims in the pond.");
>    }
>}
>
>class Dog extends Animal {
>    @Override
>    void run() {
>        System.out.println("The dog runs quickly in the park.");
>    }
>}
>
>class Fish extends Animal {
>    @Override
>    void swim() {
>        System.out.println("The fish swims in the water.");
>    }
>}
>
>
>public class Main {
>    public static void main(String[] args) {
>        Animal duck = new Duck();
>        duck.fly(); // Output: The duck flies in the sky.
>        duck.run(); // Output: The duck waddles along the shore.
>        duck.swim(); // Output: The duck swims in the pond.
>
>        Animal dog = new Dog();
>        dog.run(); // Output: The dog runs quickly in the park.
>        dog.fly(); // Output: This animal cannot fly.
>        dog.swim(); // Output: This animal cannot swim.
>
>        Animal fish = new Fish();
>        fish.swim(); // Output: The fish swims in the water.
>        fish.fly(); // Output: This animal cannot fly.
>        fish.run(); // Output: This animal cannot run.
>    }
>}
>
>```

<div id="Java_2024-10-29_2025.08.excalidraw.md3"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.5.2","elements":[{"type":"text","version":341,"versionNonce":1855127611,"index":"a0","isDeleted":false,"id":"c1vkdklO","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-80.76432557788428,"y":-293.45014262238635,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":58.199951171875,"height":25,"seed":345647387,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230566934,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Animal","rawText":"Animal","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Animal","autoResize":true,"lineHeight":1.25},{"type":"text","version":334,"versionNonce":1420048923,"index":"a1","isDeleted":false,"id":"PJHUf5DQ","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-391.34889886544124,"y":228.06647670546482,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":47.299957275390625,"height":25,"seed":1464618427,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230217872,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Duck","rawText":"Duck","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Duck","autoResize":true,"lineHeight":1.25},{"type":"text","version":194,"versionNonce":1274761115,"index":"a2","isDeleted":false,"id":"whR2MMnF","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-79.06105682583802,"y":11.289481999223938,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":38.69996643066406,"height":25,"seed":361815643,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730229922062,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Dog","rawText":"Dog","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Dog","autoResize":true,"lineHeight":1.25},{"type":"text","version":159,"versionNonce":79995963,"index":"a3","isDeleted":false,"id":"Lyi6UyVH","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":233.2648905676832,"y":0.8640445290305934,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":40.299957275390625,"height":25,"seed":171596539,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730229922062,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Fish","rawText":"Fish","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Fish","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":407,"versionNonce":20035733,"index":"a4","isDeleted":false,"id":"XoT23ErwG62cgnmdbZzkI","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-198.96610275659305,"y":-295.3318448037402,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1909146523,"groupIds":["2b_X3sWU26grnZvR-XlUR"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"UVHz5gWA6LHGN22doO-nd","type":"arrow"},{"id":"VfS9_Me-xHsL8NuPN9wP0","type":"arrow"},{"id":"6-ubE7ByDRYiLdXYJrkLM","type":"arrow"}],"updated":1730230228488,"link":null,"locked":false},{"type":"line","version":332,"versionNonce":655335259,"index":"a5","isDeleted":false,"id":"gACaktTQ6chvbtpVeyVDc","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-196.5407487526868,"y":-256.7752346963183,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1417025595,"groupIds":["2b_X3sWU26grnZvR-XlUR"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730229922063,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"text","version":200,"versionNonce":1614347259,"index":"a6","isDeleted":false,"id":"Dw3GnBip","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-182.81884545789944,"y":-247.61563244896024,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":126.19987487792969,"height":75,"seed":270358747,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730229922063,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ void fly()\n+ void run()\n+ void swim()","rawText":"+ void fly()\n+ void run()\n+ void swim()","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ void fly()\n+ void run()\n+ void swim()","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":667,"versionNonce":521834459,"index":"a7","isDeleted":false,"id":"hyBlZBk1D3JK7RIqY4Xpc","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-497.10716653837585,"y":223.6909079354716,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":575899003,"groupIds":["LBQJyOwZhF0fl-gXqOmcd"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"BbYrZsTAU5oz-cMPWuKbW","type":"arrow"}],"updated":1730230244219,"link":null,"locked":false},{"type":"line","version":594,"versionNonce":783717659,"index":"a8","isDeleted":false,"id":"8_8SpZBkNlJEP9RLbXFkE","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-494.6818125344696,"y":262.2475180428935,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":844832283,"groupIds":["LBQJyOwZhF0fl-gXqOmcd"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730230244219,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"rectangle","version":412,"versionNonce":1199154811,"index":"a9","isDeleted":false,"id":"ADLlo7DFF2xK_Unb-mU2a","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-198.72833369181922,"y":2.987013902193837,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":1529258683,"groupIds":["cqRShpxNsMvZ2yLv8DWfH"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"UVHz5gWA6LHGN22doO-nd","type":"arrow"}],"updated":1730229922063,"link":null,"locked":false},{"type":"line","version":349,"versionNonce":871924667,"index":"aA","isDeleted":false,"id":"CkeI_7Jt3FRM_23AJ0sk8","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-196.30297968791297,"y":41.54362400961571,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":894997339,"groupIds":["cqRShpxNsMvZ2yLv8DWfH"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730229922063,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"rectangle","version":407,"versionNonce":994464859,"index":"aB","isDeleted":false,"id":"bNJY_PLZYwgA9nsMZdfzi","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":120.1607087244198,"y":-3.1644935907732474,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":558067707,"groupIds":["g_Teu4_nZbrW_rY3-zihy"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"VfS9_Me-xHsL8NuPN9wP0","type":"arrow"}],"updated":1730229922063,"link":null,"locked":false},{"type":"line","version":344,"versionNonce":1964718491,"index":"aC","isDeleted":false,"id":"VxkWUs4GZ1dJYrCmGESxv","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":122.58606272832606,"y":35.39211651664863,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":1357494427,"groupIds":["g_Teu4_nZbrW_rY3-zihy"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730229922064,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"text","version":88,"versionNonce":374820411,"index":"aD","isDeleted":false,"id":"nFw1IsaX","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-183.69444152820256,"y":48.127509625932134,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":113.05989074707031,"height":25,"seed":301854011,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730229922064,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ void run()","rawText":"+ void run()","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ void run()","autoResize":true,"lineHeight":1.25},{"type":"text","version":309,"versionNonce":1727255573,"index":"aE","isDeleted":false,"id":"cRNv8iBX","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-488.7736455944168,"y":273.16650340776715,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":126.19987487792969,"height":50,"seed":1474465243,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230248423,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ void fly()\n+ void swim()","rawText":"+ void fly()\n+ void swim()","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ void fly()\n+ void swim()","autoResize":true,"lineHeight":1.25},{"type":"text","version":158,"versionNonce":2044672891,"index":"aF","isDeleted":false,"id":"wb5wXHF6","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":131.19790172727062,"y":46.30415287544997,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":109.33988952636719,"height":25,"seed":95033979,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730229922064,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ void swim","rawText":"+ void swim","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ void swim","autoResize":true,"lineHeight":1.25},{"type":"arrow","version":136,"versionNonce":1244340885,"index":"aG","isDeleted":false,"id":"UVHz5gWA6LHGN22doO-nd","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-63.767573193772336,"y":-2.012986097806163,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0.2377690647738291,"height":138.90290411609027,"seed":2014778139,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230077454,"link":null,"locked":false,"startBinding":{"elementId":"ADLlo7DFF2xK_Unb-mU2a","focus":-0.0007404074997892553,"gap":5,"fixedPoint":[0.4996297962501054,-0.033463628524311985]},"endBinding":{"elementId":"XoT23ErwG62cgnmdbZzkI","focus":0.0007404074997892553,"gap":5,"fixedPoint":[0.4996297962501054,1.033463628524312]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[0,-69.45145205804513],[-0.2377690647738291,-69.45145205804513],[-0.2377690647738291,-138.90290411609027]],"elbowed":true},{"type":"arrow","version":122,"versionNonce":842270709,"index":"aI","isDeleted":false,"id":"VfS9_Me-xHsL8NuPN9wP0","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":255.12146922246666,"y":-8.164493590773247,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":319.1268114810128,"height":132.75139662312318,"seed":2052802651,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230077454,"link":null,"locked":false,"startBinding":{"elementId":"bNJY_PLZYwgA9nsMZdfzi","focus":-0.0007404074997894659,"gap":5,"fixedPoint":[0.4996297962501053,-0.033463628524311985]},"endBinding":{"elementId":"XoT23ErwG62cgnmdbZzkI","focus":0.0007404074997890449,"gap":5,"fixedPoint":[0.49962979625010545,1.033463628524312]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[0,-66.37569831156159],[-319.1268114810128,-66.37569831156159],[-319.1268114810128,-132.75139662312318]],"elbowed":true},{"type":"rectangle","version":690,"versionNonce":811802901,"index":"aJ","isDeleted":false,"id":"fCyQWsdmrqGqI5gzQahgO","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-496.7951936529294,"y":4.619970157358011,"strokeColor":"#000000","backgroundColor":"transparent","width":270.12152099609375,"height":149.41595458984375,"seed":755306427,"groupIds":["8Dw-m7sreYgH7hanboGI7"],"frameId":null,"roundness":{"type":1},"boundElements":[{"id":"6-ubE7ByDRYiLdXYJrkLM","type":"arrow"},{"id":"BbYrZsTAU5oz-cMPWuKbW","type":"arrow"}],"updated":1730230239424,"link":null,"locked":false},{"type":"line","version":616,"versionNonce":1690777877,"index":"aK","isDeleted":false,"id":"T64-VRkNqJjfQSFh4Rl17","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-494.36983964902316,"y":43.176580264779886,"strokeColor":"#000000","backgroundColor":"transparent","width":269.38385009765625,"height":1.72381591796875,"seed":2061590619,"groupIds":["8Dw-m7sreYgH7hanboGI7"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1730230210501,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[269.38385009765625,-1.72381591796875]]},{"type":"text","version":153,"versionNonce":2114539125,"index":"aM","isDeleted":false,"id":"61GjW7dG","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-395.69042838481005,"y":11.767537185433014,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":72.19990539550781,"height":25,"seed":746325499,"groupIds":["8Dw-m7sreYgH7hanboGI7"],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230210501,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"Ostrich","rawText":"Ostrich","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"Ostrich","autoResize":true,"lineHeight":1.25},{"type":"text","version":224,"versionNonce":1159837653,"index":"aN","isDeleted":false,"id":"Ea006tNV","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-491.3194522485531,"y":63.50281798234562,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":65.57994079589844,"height":25,"seed":1789038171,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230210501,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"+ run()","rawText":"+ run()","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+ run()","autoResize":true,"lineHeight":1.25},{"type":"arrow","version":92,"versionNonce":1905416021,"index":"aQ","isDeleted":false,"id":"6-ubE7ByDRYiLdXYJrkLM","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-356.4887088472569,"y":-0.3800298426420454,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":290.25954040571276,"height":140.5358603712544,"seed":387287355,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230229509,"link":null,"locked":false,"startBinding":{"elementId":"fCyQWsdmrqGqI5gzQahgO","focus":-0.6301310930094026,"gap":12.870332310250035,"fixedPoint":[0.5194198680959653,-0.03346362852431237]},"endBinding":{"elementId":"XoT23ErwG62cgnmdbZzkI","focus":-0.6004729732075391,"gap":7.5491823618918374,"fixedPoint":[0.4913971083295079,1.033463628524312]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[0,-70.26793018562716],[290.25954040571276,-70.26793018562716],[290.25954040571276,-140.5358603712544]],"elbowed":true},{"type":"arrow","version":30,"versionNonce":1787944059,"index":"aR","isDeleted":false,"id":"BbYrZsTAU5oz-cMPWuKbW","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-362.146406040329,"y":218.6909079354716,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":0.311972885446437,"height":59.65498318826985,"seed":1499131163,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1730230244219,"link":null,"locked":false,"startBinding":{"elementId":"hyBlZBk1D3JK7RIqY4Xpc","focus":-0.0007404074997894661,"gap":5,"fixedPoint":[0.4996297962501053,-0.033463628524311985]},"endBinding":{"elementId":"fCyQWsdmrqGqI5gzQahgO","focus":0.0007404074997894661,"gap":5,"fixedPoint":[0.4996297962501053,1.033463628524312]},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[0,-29.827491594134926],[0.311972885446437,-29.827491594134926],[0.311972885446437,-59.65498318826985]],"elbowed":true}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"elbow","scrollX":769.1727199845373,"scrollY":592.0203054925968,"zoom":{"value":1},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Java_2024-10-29_2025.08.excalidraw.md3");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>
>[!example] 
>[[02 - RESOURCES/Notes/Java Vererbung\|Java Vererbung]] kann sich noch erweitern und eine Child-Klassen in eine Parent-[[02 - RESOURCES/Notes/Klasse\|Klasse]] umzuwandeln.
>```java
>class Animal {
>   void fly() {
>       System.out.println("This animal cannot fly.");
>   }
>
>   void run() {
>       System.out.println("This animal cannot run.");
>   }
>
>   void swim() {
>       System.out.println("This animal cannot swim.");
>   }
>}
>
>class Ostrich extends Animal {
>   @Override
>   void run() {
>       System.out.println("The bird waddles along the shore.");
>   }
>
>class Duck extends Ostrich {
>   @Override
>   void fly() {
>       System.out.println("The bird flies in the sky.");
>   }
>   @Override
>   void swim() {
>       System.out.println("The bird swims in the pond.");
>   }
>}
>
>class Dog extends Animal {
>   @Override
>   void run() {
>       System.out.println("The dog runs quickly in the park.");
>   }
>}
>
>class Fish extends Animal {
>   @Override
>   void swim() {
>       System.out.println("The fish swims in the water.");
>   }
>}
>
>
>public class Main {
>   public static void main(String[] args) {
>
>       Animal dog = new Dog();
>       dog.run(); // Output: The dog runs quickly in the park.
>       dog.fly(); // Output: This animal cannot fly.
>       dog.swim(); // Output: This animal cannot swim.
>
>       Animal fish = new Fish();
>       fish.swim(); // Output: The fish swims in the water.
>       fish.fly(); // Output: This animal cannot fly.
>       fish.run(); // Output: This animal cannot run.
>       
>       Animal ostrich = new Ostrich();
>       ostrich.swim(); //This animal cannot swim
>       ostrich.fly(); //  The bird flies in the sky
>       ostrich.run(); // The bird waddles along the shore
>       
>       Ostrich duck = new Duck();
>       duck.fly(); // Output: The bird flies in the sky
>       duck.run(); // Output: The bird waddles along the shore.
>       duck.swim(); // Output: The bird swims in the pond.
>   }
>}
>```


# [[02 - RESOURCES/Notes/Java Interface\|Java Interface]]
# [[02 - RESOURCES/Notes/Java Factory Method\|Java Factory Method]]
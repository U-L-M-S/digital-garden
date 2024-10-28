---
{"dg-publish":true,"permalink":"/02-resources/notes/java-wie-funktioniert-es/","tags":["code/java","informatik/virtualisierung"],"updated":"2024-10-27T13:54:03.000+01:00"}
---

<style> .container {font-family: sans-serif; text-align: center;} .button-wrapper button {z-index: 1;height: 40px; width: 100px; margin: 10px;padding: 5px;} .excalidraw .App-menu_top .buttonList { display: flex;} .excalidraw-wrapper { height: 800px; margin: 50px; position: relative;} :root[dir="ltr"] .excalidraw .layer-ui__wrapper .zen-mode-transition.App-menu_bottom--transition-left {transform: none;} </style><script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0/dist/excalidraw.production.min.js"></script><div id="Java_wie_funktioniert_es_2024-10-26_2017.00.excalidraw.md1"></div><script>(function(){const InitialData={"type":"excalidraw","version":2,"source":"https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.5.2","elements":[{"type":"ellipse","version":2203,"versionNonce":843266990,"index":"a0","isDeleted":false,"id":"yNFjAyFoa0pBaoJydxNyr","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-393.4815505608274,"y":-257.81102705309047,"strokeColor":"transparent","backgroundColor":"transparent","width":79.1919142631445,"height":87.62205410618098,"seed":1725785138,"groupIds":["PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false},{"type":"line","version":1244,"versionNonce":33265134,"index":"a1","isDeleted":false,"id":"yKKLGo6pUdqHmVqCrk0pQ","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-374.69158331882284,"y":-207.41750462819292,"strokeColor":"#495057","backgroundColor":"transparent","width":12.650836320188318,"height":10.170250896057496,"seed":231083506,"groupIds":["5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[4.286140979690572,-2.3372162485070476],[8.409498207887736,-0.09856630824469903],[12.213261648746084,-1.9728195937873352],[12.650836320188318,-10.170250896057496]]},{"type":"line","version":824,"versionNonce":1714333742,"index":"a2","isDeleted":false,"id":"pcrVMbZr02M--dIuMa6T9","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-340.5517983725855,"y":-178.36508527335437,"strokeColor":"#495057","backgroundColor":"transparent","width":21.54643339796803,"height":14.444444444444343,"seed":762544050,"groupIds":["5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[4.2592592592591245,-3.0092592592591245],[9.135304659498615,-1.3351254480294301],[13.167562724014715,-6.589755077658083],[-1.8518518518530982,-14.444444444444343],[-8.378870673953315,-11.432908318154205]]},{"type":"line","version":1806,"versionNonce":1858433646,"index":"a3","isDeleted":false,"id":"ItC9XOj0DZKERNcbTAAEO","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-397.71036370231707,"y":-200.81815431337364,"strokeColor":"#495057","backgroundColor":"#ced4da","width":53.451710477793824,"height":36.95026404079046,"seed":1645001074,"groupIds":["fonEkfCevmE0suwyKIXou","ikusVdUThEdEG1DP4aVlf","FutNFdHld9wRfdDhklJgK","5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0.11421566210443146,2.941475505966393],[39.14031821739576,25.662220680908387],[52.95204025206479,15.721398660091626],[53.451710477793824,11.242332820895239],[14.739754753237094,-11.288043359882067],[0,0]]},{"type":"line","version":1307,"versionNonce":1183380654,"index":"a4","isDeleted":false,"id":"-G2yigQt7kWe3kOC6La1p","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-397.13422940761814,"y":-200.2711144306867,"strokeColor":"#495057","backgroundColor":"#ced4da","width":52.73040807408438,"height":22.437421346334304,"seed":718846770,"groupIds":["fMXGN-CnBAUOwDk_gzsTa","nqIzSHrfBjya24GzHmQVf","kf1qztHAz7SfiJgCwpJ4e","5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[38.44304876048511,22.437421346334304],[52.73040807408438,10.447081206101757]]},{"type":"line","version":1231,"versionNonce":1461858030,"index":"a5","isDeleted":false,"id":"WGJylzdRI8wYiPVgdw4gP","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-358.5590352767955,"y":-174.68985613991154,"strokeColor":"#495057","backgroundColor":"#ced4da","width":0.03132583383842302,"height":2.9953646072644915,"seed":104760562,"groupIds":["zI8VWGrF0biOo6rShiEqt","Nd5Wt33zzmdpeqk3upbmm","xscJZtRa76y1-VXd_rYJ2","5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-0.03132583383842302,-2.9953646072644915]]},{"type":"line","version":650,"versionNonce":1830428974,"index":"a6","isDeleted":false,"id":"5-r_sNy2PzbiNhBNHAn_A","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-383.5647535009699,"y":-209.10703130328184,"strokeColor":"#495057","backgroundColor":"#495057","width":32.582969029002015,"height":21.222215380825673,"seed":231020210,"groupIds":["5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-10.458715596330876,8.16513761467877],[12.399482790468028,21.222215380825673],[22.12425343267114,12.506619050550398],[0,0]]},{"type":"line","version":854,"versionNonce":1541000046,"index":"a7","isDeleted":false,"id":"WcwliUq2ZVkGCho_ESnUK","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-360.0842427318954,"y":-195.73001990919593,"strokeColor":"#495057","backgroundColor":"#495057","width":7.375520559826327,"height":5.156962524708888,"seed":303263858,"groupIds":["5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-3.2808014859010655,3.011763381549372],[1.0418305085531756,5.156962524708888],[4.094719073925262,2.3136435444562267],[0,0]]},{"type":"line","version":956,"versionNonce":564800942,"index":"a8","isDeleted":false,"id":"c_PdL09Eqg69y8giwxKvB","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-354.4466588392785,"y":-192.70988568100793,"strokeColor":"#495057","backgroundColor":"#495057","width":15.227869553114942,"height":12.271056484440578,"seed":921735730,"groupIds":["5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-9.522412224156142,8.582233180207822],[-3.723270162588051,12.271056484440578],[5.705457328958801,3.7230395176111415],[0,0]]},{"type":"line","version":2208,"versionNonce":196364270,"index":"a9","isDeleted":false,"id":"c-SrbUMdr8cMpXPBV5WLU","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-349.75903829272613,"y":-173.5934270543702,"strokeColor":"#495057","backgroundColor":"#ced4da","width":10.325861900493805,"height":8.12204795062289,"seed":256080882,"groupIds":["FT5Z62Lrw2_nEeAyPZwta","8qfmkCjUW4eiOUzoqXmRZ","7ezfQO_I24QkeMrvPdPUz","5GKK6Ds1dUnbUKtm2hsWR","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[5.112383161587331,2.155257417460234],[10.325861900493805,-1.9238001260923738],[10.18553212622255,-4.242865965288763],[5.989705433923358,-5.966790533162657],[0,0]]},{"type":"line","version":3137,"versionNonce":1510021678,"index":"aA","isDeleted":false,"id":"OQhEfoaft2aMPpqrycnvT","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-358.18137273643936,"y":-216.1976715618097,"strokeColor":"#495057","backgroundColor":"#ced4da","width":25.059439418853884,"height":22.532361289552,"seed":957558194,"groupIds":["ksqNP57HHDRbDp3j-aehy","YRtsMEAZr0eINwD5N6Rbx","7Le1U4Q9Rxp-BoLCMtX1V","5_Gi2DSHgkYD3M_aKjOzL","mnFf34jNOPQ-FI7UEzVvt","ixqaBshMuZtSpHWbHFK_v","FMZWKOHFRnsTsmcugvfBg","nduQZGnSKtdae-Hi-m3B7","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0.11421566210438161,9.422956987448126],[12.817631894707915,15.935675954361614],[24.559769193124808,7.622238894263049],[25.059439418853884,-1.4864565745628564],[13.57926092607591,-6.5966853351903865],[0,0]]},{"type":"line","version":1919,"versionNonce":1668916334,"index":"aB","isDeleted":false,"id":"2kinHQIo6RiA0-P2GViWH","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-362.1278473003291,"y":-256.260579057683,"strokeColor":"#495057","backgroundColor":"#ced4da","width":40.037471489083146,"height":51.5348828789688,"seed":2038867826,"groupIds":["CtoUfwbg2_5CP9zHP5hvx","nduQZGnSKtdae-Hi-m3B7","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[15.81323992614307,1.5686434234826265],[36.569729553599245,12.773885811519904],[40.037471489083146,28.785616016799395],[38.351254480287025,41.35159842149187],[30.660638644509163,51.5348828789688],[22.92603453893753,47.121393142898796],[3.38057999348257,20.303211324717267],[2.471489084391578,3.7123022338078044]]},{"type":"line","version":2975,"versionNonce":971433646,"index":"aC","isDeleted":false,"id":"eqAaY7HGSdxmFW5irqooY","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-373.3008051668345,"y":-230.07668136855537,"strokeColor":"#495057","backgroundColor":"#ced4da","width":46.86901140734767,"height":54.3714311178362,"seed":1491396914,"groupIds":["CtoUfwbg2_5CP9zHP5hvx","nduQZGnSKtdae-Hi-m3B7","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[4.311701847418056,13.761389868409811],[36.672357030754256,28.290893113945458],[46.4915051662324,19.50728732212292],[46.86901140734767,-7.857569074843923],[37.76870538120877,-16.736013442588842],[13.340736029639045,-26.080538003890744],[1.8028021661685354,-21.15287874969945],[0,0]]},{"type":"line","version":2758,"versionNonce":1307697390,"index":"aD","isDeleted":false,"id":"zhCGmAQmHzUvNGxvSD-ty","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":-370.1189869850165,"y":-230.52205931378867,"strokeColor":"#495057","backgroundColor":"#343a40","width":39.772727272725206,"height":45.505050505050804,"seed":1049948914,"groupIds":["CtoUfwbg2_5CP9zHP5hvx","nduQZGnSKtdae-Hi-m3B7","PXvtHvARuXF3rJqCaPevx"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729969671633,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[3.623737373738095,11.56565656565499],[29.29292929293024,23.58585858585775],[39.64646464646603,18.686868686866546],[39.772727272725206,-5.075757575758416],[31.742424242424477,-14.065656565657264],[11.21212121212102,-21.919191919193054],[1.5151515151524109,-17.777777777778738],[0,0]]},{"type":"rectangle","version":517,"versionNonce":946159410,"index":"aE","isDeleted":false,"id":"aS89FvSlA4lbBGgJa9DDS","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-345,"y":-330.55824288922156,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":174.5748502994012,"height":95,"seed":2088133490,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[{"type":"text","id":"xLZyBGnM"},{"id":"BBYMZalFyS7ttFw6IY6B3","type":"arrow"}],"updated":1729969903646,"link":null,"locked":false},{"type":"text","version":416,"versionNonce":1390604274,"index":"aF","isDeleted":false,"id":"xLZyBGnM","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-332.588818441608,"y":-325.3486620508982,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":149.7524871826172,"height":84.5808383233533,"seed":1820021678,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969629343,"link":null,"locked":false,"fontSize":13.532934131736527,"fontFamily":5,"text":"public class HelloWorld{\n\n\n\n}","rawText":"public class HelloWorld{\n\n\n\n}","textAlign":"center","verticalAlign":"middle","containerId":"aS89FvSlA4lbBGgJa9DDS","originalText":"public class HelloWorld{\n\n\n\n}","autoResize":true,"lineHeight":1.25},{"type":"text","version":158,"versionNonce":1084498354,"index":"aG","isDeleted":false,"id":"KBJQuIrU","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-304.4011976047904,"y":-352.2109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":94.91865539550781,"height":16.91616766467066,"seed":1230215794,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969629343,"link":null,"locked":false,"fontSize":13.532934131736527,"fontFamily":5,"text":"HelloWorld.java","rawText":"HelloWorld.java","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"HelloWorld.java","autoResize":true,"lineHeight":1.25},{"type":"rectangle","version":888,"versionNonce":1023449778,"index":"aL","isDeleted":false,"id":"jzFMmNtFQUSLb9gLCeTNb","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":152,"y":-352.2109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":57,"height":85,"seed":1873785518,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[{"type":"text","id":"eZc9XNM3"},{"id":"BBYMZalFyS7ttFw6IY6B3","type":"arrow"}],"updated":1729969903646,"link":null,"locked":false},{"type":"text","version":619,"versionNonce":583256050,"index":"aM","isDeleted":false,"id":"eZc9XNM3","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":160.2200164794922,"y":-347.2109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":40.559967041015625,"height":75,"seed":970941874,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969883436,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"0111\n000\n101","rawText":"0111000101","textAlign":"center","verticalAlign":"middle","containerId":"jzFMmNtFQUSLb9gLCeTNb","originalText":"0111000101","autoResize":true,"lineHeight":1.25},{"type":"text","version":134,"versionNonce":1543022066,"index":"aN","isDeleted":false,"id":"1abA5VX6","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":134,"y":-261.2109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":95.159912109375,"height":50,"seed":910402802,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[{"id":"8YTUKKIpLnRu_TDbI-JyH","type":"arrow"}],"updated":1729970351685,"link":null,"locked":false,"fontSize":20,"fontFamily":5,"text":"HelloWorld\nin Bytes","rawText":"HelloWorld\nin Bytes","textAlign":"center","verticalAlign":"top","containerId":null,"originalText":"HelloWorld\nin Bytes","autoResize":true,"lineHeight":1.25},{"type":"arrow","version":56,"versionNonce":217408686,"index":"aO","isDeleted":false,"id":"BBYMZalFyS7ttFw6IY6B3","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-161.99999999999994,"y":-279.21093749999994,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":303.99999999999994,"height":5.000000000000057,"seed":882685102,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729970461786,"link":null,"locked":false,"startBinding":{"elementId":"aS89FvSlA4lbBGgJa9DDS","focus":0.11078887361559199,"gap":8.425149700598809,"fixedPoint":null},"endBinding":{"elementId":"jzFMmNtFQUSLb9gLCeTNb","focus":-0.5787177033492823,"gap":10,"fixedPoint":null},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[303.99999999999994,-5.000000000000057]],"elbowed":false},{"type":"text","version":59,"versionNonce":1218621806,"index":"aP","isDeleted":false,"id":"NQR2UKLK","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":-70,"y":-328.2109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":113.29301452636719,"height":25,"seed":1265507822,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1729969923490,"link":"[[02 - RESOURCES/Notes/javac\|javac]]","locked":false,"fontSize":20,"fontFamily":5,"text":"📍[[02 - RESOURCES/Notes/javac\|javac]]","rawText":"[[02 - RESOURCES/Notes/javac\|javac]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/javac\|javac]]","autoResize":true,"lineHeight":1.25},{"type":"ellipse","version":2202,"versionNonce":108614002,"index":"aQ","isDeleted":false,"id":"s1bf8yLGq5Ud7uwUMxEpU","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":165.5184494391726,"y":75.1889729469095,"strokeColor":"transparent","backgroundColor":"transparent","width":79.1919142631445,"height":87.62205410618098,"seed":207869682,"groupIds":["GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[{"id":"8YTUKKIpLnRu_TDbI-JyH","type":"arrow"}],"updated":1729970351686,"link":null,"locked":false},{"type":"line","version":1242,"versionNonce":1391165426,"index":"aR","isDeleted":false,"id":"E5fbLZhi2-8d2-_Xze958","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":184.30841668117714,"y":125.58249537180708,"strokeColor":"#495057","backgroundColor":"transparent","width":12.650836320188318,"height":10.170250896057496,"seed":124790962,"groupIds":["oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[4.286140979690572,-2.3372162485070476],[8.409498207887736,-0.09856630824469903],[12.213261648746084,-1.9728195937873352],[12.650836320188318,-10.170250896057496]]},{"type":"line","version":822,"versionNonce":1360703922,"index":"aS","isDeleted":false,"id":"2W4ljCoN9bogrBOJeOtEP","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":218.44820162741448,"y":154.63491472664563,"strokeColor":"#495057","backgroundColor":"transparent","width":21.54643339796803,"height":14.444444444444343,"seed":143409778,"groupIds":["oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[4.2592592592591245,-3.0092592592591245],[9.135304659498615,-1.3351254480294301],[13.167562724014715,-6.589755077658083],[-1.8518518518530982,-14.444444444444343],[-8.378870673953315,-11.432908318154205]]},{"type":"line","version":1804,"versionNonce":771599218,"index":"aT","isDeleted":false,"id":"zzRvtOvQclLD_9cStOTBW","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":161.2896362976829,"y":132.18184568662636,"strokeColor":"#495057","backgroundColor":"#ced4da","width":53.451710477793824,"height":36.95026404079046,"seed":1249846322,"groupIds":["FBBuCn8_7X2Hz6GNAlVbS","pKE1tiqSyOxqOSIKtemMQ","rx3nRowqSDTBn4CvG2cvY","oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0.11421566210443146,2.941475505966393],[39.14031821739576,25.662220680908387],[52.95204025206479,15.721398660091626],[53.451710477793824,11.242332820895239],[14.739754753237094,-11.288043359882067],[0,0]]},{"type":"line","version":1305,"versionNonce":1876651314,"index":"aU","isDeleted":false,"id":"zIlS4FpGphrw--NVvvahJ","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":161.86577059238184,"y":132.7288855693133,"strokeColor":"#495057","backgroundColor":"#ced4da","width":52.73040807408438,"height":22.437421346334304,"seed":389008882,"groupIds":["3Fe_ldHhEviLYtAOiIsiw","l_MgPxmvk28OIpB-eUfp-","09s8FsD4I7LZZ2Edzsxve","oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[38.44304876048511,22.437421346334304],[52.73040807408438,10.447081206101757]]},{"type":"line","version":1229,"versionNonce":1008400114,"index":"aV","isDeleted":false,"id":"uwmoi6PmQjk2sqjcMHkar","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":200.44096472320447,"y":158.31014386008846,"strokeColor":"#495057","backgroundColor":"#ced4da","width":0.03132583383842302,"height":2.9953646072644915,"seed":1671774130,"groupIds":["tytV1KWWO7bcOjNVD1iBJ","Lbf3FU8exIsPXMutZmeLc","prkT5kqwh0ZVUwo4cbRwP","oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-0.03132583383842302,-2.9953646072644915]]},{"type":"line","version":648,"versionNonce":1933789362,"index":"aW","isDeleted":false,"id":"FNXT9tzGgWP-qcAs9jjG7","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":175.43524649903006,"y":123.89296869671816,"strokeColor":"#495057","backgroundColor":"#495057","width":32.582969029002015,"height":21.222215380825673,"seed":1812363634,"groupIds":["oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-10.458715596330876,8.16513761467877],[12.399482790468028,21.222215380825673],[22.12425343267114,12.506619050550398],[0,0]]},{"type":"line","version":852,"versionNonce":1291543154,"index":"aX","isDeleted":false,"id":"-rNEiz80X7ppZ-ydsKeYd","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":198.91575726810456,"y":137.26998009080407,"strokeColor":"#495057","backgroundColor":"#495057","width":7.375520559826327,"height":5.156962524708888,"seed":1335524146,"groupIds":["oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-3.2808014859010655,3.011763381549372],[1.0418305085531756,5.156962524708888],[4.094719073925262,2.3136435444562267],[0,0]]},{"type":"line","version":954,"versionNonce":1946829874,"index":"aY","isDeleted":false,"id":"bNFqm6OR4vMclWbxP1hJ1","fillStyle":"solid","strokeWidth":1,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":204.5533411607215,"y":140.29011431899207,"strokeColor":"#495057","backgroundColor":"#495057","width":15.227869553114942,"height":12.271056484440578,"seed":751322354,"groupIds":["oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[-9.522412224156142,8.582233180207822],[-3.723270162588051,12.271056484440578],[5.705457328958801,3.7230395176111415],[0,0]]},{"type":"line","version":2206,"versionNonce":576122354,"index":"aZ","isDeleted":false,"id":"SujuqWhbfxJkrbqpqxWt2","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":209.24096170727384,"y":159.4065729456298,"strokeColor":"#495057","backgroundColor":"#ced4da","width":10.325861900493805,"height":8.12204795062289,"seed":1024906930,"groupIds":["GElAM4Qh28f1oYHS3viBc","fBltNewUQoAkmFOP0pkVN","TJMtW8ao2S8OCndwZ6qsJ","oAlT7eDDQ3_Z6qg9LQwiZ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[5.112383161587331,2.155257417460234],[10.325861900493805,-1.9238001260923738],[10.18553212622255,-4.242865965288763],[5.989705433923358,-5.966790533162657],[0,0]]},{"type":"line","version":3135,"versionNonce":1021861810,"index":"aa","isDeleted":false,"id":"xo7a1nG0IzJ_MTYCmrGk2","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":200.81862726356061,"y":116.8023284381903,"strokeColor":"#495057","backgroundColor":"#ced4da","width":25.059439418853884,"height":22.532361289552,"seed":1898786930,"groupIds":["bHLcmjWpTtOYZf6FPdYER","7Y-LqfizakrVm6l92K4_H","xB1M5ZAHB4keLsGEYClNg","EN3LBaz_ZYx6ERGWUiS4R","jputriXk06mF1h3BGqVjB","Q4PpPNCptHPkJaifkyn66","jtw13qM7zVq9yqUbstGv1","XpZpPWrDBz5lxlU8WTqSQ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[0.11421566210438161,9.422956987448126],[12.817631894707915,15.935675954361614],[24.559769193124808,7.622238894263049],[25.059439418853884,-1.4864565745628564],[13.57926092607591,-6.5966853351903865],[0,0]]},{"type":"line","version":1917,"versionNonce":1877318002,"index":"ab","isDeleted":false,"id":"O9bNaduGyCVoJ3xWQGz_W","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":196.87215269967086,"y":76.73942094231697,"strokeColor":"#495057","backgroundColor":"#ced4da","width":40.037471489083146,"height":51.5348828789688,"seed":215110194,"groupIds":["yxXaI0UTcXhD4x10IQ-fn","XpZpPWrDBz5lxlU8WTqSQ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[15.81323992614307,1.5686434234826265],[36.569729553599245,12.773885811519904],[40.037471489083146,28.785616016799395],[38.351254480287025,41.35159842149187],[30.660638644509163,51.5348828789688],[22.92603453893753,47.121393142898796],[3.38057999348257,20.303211324717267],[2.471489084391578,3.7123022338078044]]},{"type":"line","version":2973,"versionNonce":1251318578,"index":"ac","isDeleted":false,"id":"ZWrB1ERNgn4HiKUj00LmX","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":185.69919483316548,"y":102.92331863144463,"strokeColor":"#495057","backgroundColor":"#ced4da","width":46.86901140734767,"height":54.3714311178362,"seed":1122843634,"groupIds":["yxXaI0UTcXhD4x10IQ-fn","XpZpPWrDBz5lxlU8WTqSQ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[4.311701847418056,13.761389868409811],[36.672357030754256,28.290893113945458],[46.4915051662324,19.50728732212292],[46.86901140734767,-7.857569074843923],[37.76870538120877,-16.736013442588842],[13.340736029639045,-26.080538003890744],[1.8028021661685354,-21.15287874969945],[0,0]]},{"type":"line","version":2756,"versionNonce":1532978418,"index":"ad","isDeleted":false,"id":"cZeu_gYFzvv7QbaqUEkb6","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":0,"opacity":100,"angle":0,"x":188.8810130149835,"y":102.47794068621133,"strokeColor":"#495057","backgroundColor":"#343a40","width":39.772727272725206,"height":45.505050505050804,"seed":1367666098,"groupIds":["yxXaI0UTcXhD4x10IQ-fn","XpZpPWrDBz5lxlU8WTqSQ","GBVq1goyrcZkrPfEt3g0u"],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"startBinding":null,"endBinding":null,"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":null,"points":[[0,0],[3.623737373738095,11.56565656565499],[29.29292929293024,23.58585858585775],[39.64646464646603,18.686868686866546],[39.772727272725206,-5.075757575758416],[31.742424242424477,-14.065656565657264],[11.21212121212102,-21.919191919193054],[1.5151515151524109,-17.777777777778738],[0,0]]},{"type":"rectangle","version":138,"versionNonce":1271527090,"index":"b09","isDeleted":false,"id":"0Dz7d46MIavQoEPAXE1Ve","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":232,"y":15.7890625,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":188,"height":82,"seed":1151636014,"groupIds":[],"frameId":null,"roundness":{"type":3},"boundElements":[{"type":"text","id":"QFmmlmkk"}],"updated":1729970344042,"link":null,"locked":false},{"type":"text","version":117,"versionNonce":2088521842,"index":"b0A","isDeleted":false,"id":"QFmmlmkk","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":237,"y":20.7890625,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":91.64814758300781,"height":20,"seed":2056669170,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970344042,"link":null,"locked":false,"fontSize":16,"fontFamily":5,"text":">Hello World","rawText":">Hello World","textAlign":"left","verticalAlign":"top","containerId":"0Dz7d46MIavQoEPAXE1Ve","originalText":">Hello World","autoResize":true,"lineHeight":1.25},{"type":"arrow","version":48,"versionNonce":1234376626,"index":"b0B","isDeleted":false,"id":"8YTUKKIpLnRu_TDbI-JyH","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":184,"y":-200.2109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":6,"height":267,"seed":825197038,"groupIds":[],"frameId":null,"roundness":{"type":2},"boundElements":[],"updated":1729970351686,"link":null,"locked":false,"startBinding":{"elementId":"1abA5VX6","focus":-0.03346482115524191,"gap":11,"fixedPoint":null},"endBinding":{"elementId":"s1bf8yLGq5Ud7uwUMxEpU","focus":-0.35197582582621256,"gap":10.903994480061222,"fixedPoint":null},"lastCommittedPoint":null,"startArrowhead":null,"endArrowhead":"arrow","points":[[0,0],[6,267]],"elbowed":false},{"type":"text","version":39,"versionNonce":218405810,"index":"b0D","isDeleted":false,"id":"tuQQu5FN","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":208,"y":-103.7109375,"strokeColor":"#1e1e1e","backgroundColor":"transparent","width":102.2530517578125,"height":25,"seed":1374859122,"groupIds":[],"frameId":null,"roundness":null,"boundElements":[],"updated":1729970413983,"link":"[[02 - RESOURCES/Notes/JVM\|JVM]]","locked":false,"fontSize":20,"fontFamily":5,"text":"📍[[02 - RESOURCES/Notes/JVM\|JVM]]","rawText":"[[02 - RESOURCES/Notes/JVM\|JVM]]","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"📍[[02 - RESOURCES/Notes/JVM\|JVM]]","autoResize":true,"lineHeight":1.25}],"appState":{"theme":"dark","viewBackgroundColor":"#ffffff","currentItemStrokeColor":"#1e1e1e","currentItemBackgroundColor":"transparent","currentItemFillStyle":"solid","currentItemStrokeWidth":2,"currentItemStrokeStyle":"solid","currentItemRoughness":1,"currentItemOpacity":100,"currentItemFontFamily":5,"currentItemFontSize":20,"currentItemTextAlign":"left","currentItemStartArrowhead":null,"currentItemEndArrowhead":"arrow","currentItemArrowType":"round","scrollX":419.22918488786075,"scrollY":495.2577747316487,"zoom":{"value":1.432475},"currentItemRoundness":"round","gridSize":20,"gridStep":5,"gridModeEnabled":false,"gridColor":{"Bold":"rgba(217, 217, 217, 0.5)","Regular":"rgba(230, 230, 230, 0.5)"},"currentStrokeOptions":null,"frameRendering":{"enabled":true,"clip":true,"name":true,"outline":true},"objectsSnapModeEnabled":false,"activeTool":{"type":"selection","customType":null,"locked":false,"lastActiveTool":null}},"files":{}};InitialData.scrollToContent=true;App=()=>{const e=React.useRef(null),t=React.useRef(null),[n,i]=React.useState({width:void 0,height:void 0});return React.useEffect(()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height});const e=()=>{i({width:t.current.getBoundingClientRect().width,height:t.current.getBoundingClientRect().height})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),React.createElement(React.Fragment,null,React.createElement("div",{className:"excalidraw-wrapper",ref:t},React.createElement(ExcalidrawLib.Excalidraw,{ref:e,width:n.width,height:n.height,initialData:InitialData,viewModeEnabled:!0,zenModeEnabled:!0,gridModeEnabled:!1})))},excalidrawWrapper=document.getElementById("Java_wie_funktioniert_es_2024-10-26_2017.00.excalidraw.md1");ReactDOM.render(React.createElement(App),excalidrawWrapper);})();</script>

# Quellcode
> Als Startpunkt stell dir vor, wir haben folgenden Code in einer Datei, die **HelloWorld.java** heißt.

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

>Wie du bereits im klassischen "Hello World"-Code sehen kannst, ist alles in einer [[02 - RESOURCES/Notes/Klasse\|Klasse]] (HelloWorld) gespeichert.

Die [[02 - RESOURCES/Notes/Funktion\|Funktion]] `main()` ist der **Starter** der Programm.
>[!note] Eigentlich... [[02 - RESOURCES/Notes/Methode\|Methode]]. Da wir in [[02 - RESOURCES/Notes/Java\|Java]] keine  echten [[02 - RESOURCES/Notes/Funktion\|Funktion]]en haben.

Nun hat die [[02 - RESOURCES/Notes/Funktion\|Funktion]] drei Begriffen bei sich:
- public: Der [[02 - RESOURCES/Notes/Zugriffsmodifikator\|Zugriffsmodifikator]] der festlegt, dass die [[02 - RESOURCES/Notes/Methode\|Methode]] von überall aufgerufen werden kann.
- [[02 - RESOURCES/Notes/static\|static]]: ([[02 - RESOURCES/Notes/Static Java Methode\|Static Java Methode]]) bedeutet, dass die [[02 - RESOURCES/Notes/Methode\|Methode]] ohne Erstellen eines Objekts der [[02 - RESOURCES/Notes/Klasse\|Klasse]] aufgerufen werden kann.
- void: [[02 - RESOURCES/Notes/Rückgabewerttyp\|Rückgabewerttyp]]; die [[02 - RESOURCES/Notes/Methode\|Methode]] hat keinen Rückgabewert.

Das Methodenaufruf "`System.out.println("Hello, World!");`" macht nicht anders als "Hello, World!" in der Console auszugeben.

# Kompilierung ([[02 - RESOURCES/Notes/Compiler\|Compiler]])
>Nun mit [[02 - RESOURCES/Notes/javac\|javac]] können wir **HelloWorld.java** kompilieren.

```bash
javac HelloWorld.java
```

Somit wird ein HelloWorld-Datei als [[02 - RESOURCES/Notes/Binärzahl\|Binär]] erstellt.

# Java Virtual Machine (JVM) / [[02 - RESOURCES/Notes/Interpreter\|Interpreter]]
>Jetzt können wir endlich den Code ausführen.

```bash
java HelloWorld
```

Mit diesem Befehl wird die [[02 - RESOURCES/Notes/Binärzahl\|Binär]]-Datei in der [[02 - RESOURCES/Notes/Java\|Java]] Virtual Machine ausgeführt, und das Ergebnis wird an unsere Hostmaschine zurückgegeben.

>[!important] Yep... Virtualisierung sogar hier bei [[02 - RESOURCES/Notes/Java\|Java]] ;D
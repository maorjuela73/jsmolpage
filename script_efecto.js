
// simple2.htm: demonstration of using platform-aware Jmol with jQuery
// author: Bob Hanson hansonr@stolaf.edu 8/11/2012 8:21:03 AM
// ---------------------------------------------------------------------------------
////// special stuff just for this particular page

///// files //////

var s = unescape(document.location.search);
var script = 'set errorCallback "myCallback";'
  + 'set animationFPS 4;set antialiasdisplay;set measurementUnits angstroms;set zoomlarge false;'
  + 'set echo top left;echo loading XXXX...;refresh;'
  + 'load ":XXXX";set echo top center;echo XXXX;'
var xxxx = s.split("_USE=")[0]
if (xxxx.length < 2) {
  xxxx = "dihydrogen"
} else {
  xxxx = xxxx.substring(1);
  if (xxxx.indexOf("load ") >= 0) {
    script = xxxx
    xxxx = ""
  }
}
if (xxxx)
  script = script.replace(/XXXX/g, xxxx)

// --------------------------------------------------------------------------

/////////////////// Funcion de lectura de los datos para el grafico /////////////////

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

////// every page will need one variable and one Info object for each applet object
//////////////////////// INICIO DE CICLO/////////////////////////////////////////


console.log("Aqui comienza INFO")
var Info = {
  width: "100%",
  height: "100%",
  script: script,
  use: "HTML5",
  jarPath: "java",
  j2sPath: "j2s",
  jarFile: "JmolAppletSigned.jar",
  isSigned: false,
  addSelectionOptions: false,
  serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
  readyFunction: null,
  console: "jmol_infodiv",
  disableInitialConsole: true,
  defaultModel: null,
  debug: false
}

Jmol.getApplet("appletCheck", Info, true);

var isApplet = (appletCheck._jmolType.indexOf("_Applet") >= 0);
console.log(isApplet);
var is2D = appletCheck._is2D;

if (!isApplet && !Info.script) {

  Info.defaultModel = "$tylenol";
  Info.script = "#alt:LOAD :tylenol";

}


$(document).ready(function () {
  console.log("Grafico HF")
  $("#middlepanel_HF").html(Jmol.getAppletHtml("jmol", Info));
})

var jsmolPath = ''; /*ADJUST TO YOUR PATH*/

var Info = {
  j2sPath: jsmolPath + "j2s",
  serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
  src: 'PDB/EfectoInductivo/Acidoacetico/acidoacetico.pdb'
};

console.log("Aqui termina INFO")


////////////////////////FIN DEL ETHANO///////////////////////


// //////////////////////// INICIO DEL SN2/////////////////////////////////////////

console.log("Aqui comienza INFO1")

var infoSn2 = {
  width: "100%",
  height: "100%",
  script: script,
  use: "HTML5",
  jarPath: "java",
  j2sPath: "j2s",
  jarFile: "JmolAppletSigned.jar",
  isSigned: false,
  addSelectionOptions: false,
  serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
  readyFunction: null,
  console: "jmol_infodiv",
  disableInitialConsole: true,
  defaultModel: null,
  debug: false
}

Jmol.getApplet("appletCheck", infoSn2, true);

var isApplet = (appletCheck._jmolType.indexOf("_Applet") >= 0);
console.log(isApplet);
var is2D = appletCheck._is2D;

if (!isApplet && !infoSn2.script) {
  infoSn2.defaultModel = "$tylenol";
  infoSn2.script = "#alt:LOAD :tylenol";
}


$(document).ready(function () {
  $("#middlepanel_HCl").html(Jmol.getAppletHtml("jmolsn2", infoSn2));
  var imghbr = document.createElement("img")
  imghbr.setAttribute("src", "PDB/EfectoInductivo/Acidocloroacetico/cloro.png") 
  imghbr.width=300
  imghbr.height=300
  document.querySelector("#myDiv_HCl").appendChild(imghbr)
  var imghbr = document.createElement("img")
  imghbr.setAttribute("src", "PDB/EfectoInductivo/Acidoacetico/acetico.png") 
  imghbr.width=300
  imghbr.height=300
  document.querySelector("#myDiv").appendChild(imghbr)

})

var jsmolPath = ''; /*ADJUST TO YOUR PATH*/

var infoSn2 = {
  j2sPath: jsmolPath + "j2s",
  serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
  src: 'PDB/EfectoInductivo/Acidocloroacetico/acidocloroacetico.pdb'
};

console.log("Aqui termina INFO1")


// //////////////////////// INICIO DEL HBr/////////////////////////////////////////

console.log("Aqui comienza INFO2")

  var infoHbr = {
    width: "100%",
    height: "100%",
    script: script,
    use: "HTML5",
    jarPath: "java",
    j2sPath: "j2s",
    jarFile: "JmolAppletSigned.jar",
    isSigned: false,
    addSelectionOptions: false,
    serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
    readyFunction: null,
    console: "jmol_infodiv",
    disableInitialConsole: true,
    defaultModel: null,
    debug: false
  }
  
  Jmol.getApplet("appletCheck", infoHbr, true);
  
  var isApplet = (appletCheck._jmolType.indexOf("_Applet") >= 0);
  console.log(isApplet);
  var is2D = appletCheck._is2D;
  
  if (!isApplet && !infoHbr.script) {
    infoHbr.defaultModel = "$tylenol";
    infoHbr.script = "#alt:LOAD :tylenol";
  }
  
  
  $(document).ready(function () {
    $("#middlepanel_HBr").html(Jmol.getAppletHtml("jmolhbr", infoHbr));
    var imghbr = document.createElement("img")
    imghbr.setAttribute("src", "PDB/EfectoInductivo/Acidodicloroacetico/2cloro.png") 
    imghbr.width=300
    imghbr.height=300
    document.querySelector("#myDiv_HBr").appendChild(imghbr)
  })
  
  var jsmolPath = ''; /*ADJUST TO YOUR PATH*/
  
  var infoHbr = {
    j2sPath: jsmolPath + "j2s",
    serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
    src: 'PDB/EfectoInductivo/Acidodicloroacetico/acidodicloroacetico.pdb'
  };
  
  console.log("Aqui termina INFO2")



// //////////////////////// INICIO DEL HI/////////////////////////////////////////

console.log("Aqui comienza INFO3")

  var infoHi = {
    width: "100%",
    height: "100%",
    script: script,
    use: "HTML5",
    jarPath: "java",
    j2sPath: "j2s",
    jarFile: "JmolAppletSigned.jar",
    isSigned: false,
    addSelectionOptions: false,
    serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
    readyFunction: null,
    console: "jmol_infodiv",
    disableInitialConsole: true,
    defaultModel: null,
    debug: false
  }
  
  Jmol.getApplet("appletCheck", infoHi, true);
  
  var isApplet = (appletCheck._jmolType.indexOf("_Applet") >= 0);
  console.log(isApplet);
  var is2D = appletCheck._is2D;
  
  if (!isApplet && !infoHi.script) {
    infoHi.defaultModel = "$tylenol";
    infoHi.script = "#alt:LOAD :tylenol";
  }
  
  
  $(document).ready(function () {
    $("#middlepanel_HI").html(Jmol.getAppletHtml("jmolhi", infoHi));
    var imghbr = document.createElement("img")
    imghbr.setAttribute("src", "PDB/EfectoInductivo/Acidotricloroacetico/3cloro.png") 
    imghbr.width=300
    imghbr.height=300
    document.querySelector("#myDiv_hi").appendChild(imghbr)

  })
  
  var jsmolPath = ''; /*ADJUST TO YOUR PATH*/
  
  var infoHi = {
    j2sPath: jsmolPath + "j2s",
    serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
    src: 'PDB/EfectoInductivo/Acidotricloroacetico/acidotricloroacetico.pdb'
  };
  
  console.log("Aqui termina INFO2")


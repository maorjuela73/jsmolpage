
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
//////////////////////// INICIO DEL ETHANO/////////////////////////////////////////

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

  $("#middlepanel").html(Jmol.getAppletHtml("jmol", Info));
  document.getElementById('jmol_canvas2d').style.width = '100%';
  document.getElementById('jmol_canvas2d').style.height = '100%';
  document.getElementById('middlepanel').setAttribute('class', 'text-center');
  console.log('Robapollos' + document.getElementById('jmol_canvas2d').style.height);
})


var jsmolPath = ''; /*ADJUST TO YOUR PATH*/


var Info = {
  j2sPath: jsmolPath + "j2s",
  serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
  src: 'PDB/Rotacion de enlaces/Etano/Et0.pdb'
};

let data_ethano;

let data_ethano_read = readTextFile("data_ethano.json", function (text) {
  this.data_ethano = JSON.parse(text);
});


setTimeout(() => {
  console.log('Aqui comienza el ethano')

  let cont_et = 0;
  let name_ethano = [];
  for (let i = 0; i < 37; i++) {
    name_ethano.push("Et" + cont_et + ".pdb")
    cont_et += 10
  }

  // data_ethano = data_ethano.reverse();
  console.log(this.data_ethano)



  console.log(this.data_ethano[0].distancia);
  console.log(this.data_ethano[0].energia);

  // console.log(this.localFiles)
  var myPlot = document.getElementById('myDiv'),
    x = this.data_ethano[0].distancia,
    y = this.data_ethano[0].energia,
    data = [{
      x: x,
      y: y,
      type: 'scatter',
      mode: 'markers',
      marker: { size: 10 },
      text: name_ethano
    }],
    layout = {
      //     // hovermode: 'closest',
      title: 'Superficie de energía potencial'
    };

  Plotly.newPlot('myDiv', data, layout);

  myPlot.on('plotly_click', function (data) {
    // this.Info.src = "PDB/H2/" + data.points[0].text

    var jsmolPath = ''; /*ADJUST TO YOUR PATH*/
    var Info = {
      j2sPath: jsmolPath + "j2s",
      serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
      src: "PDB/Rotacion de enlaces/Etano/" + data.points[0].text
    };

    $("#middlepanel").html(Jmol.getAppletHtml("jmol", Info));

    console.log("PDB/Rotacion de enlaces/Etano/" + data.points[0].text)
  });

}, 1000)


////////////////////////FIN DEL ETHANO///////////////////////


// //////////////////////// INICIO DEL BUTHANO/////////////////////////////////////////


var Info_but = {
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


Jmol.getApplet("appletCheck", Info_but, true);

var isApplet = (appletCheck._jmolType.indexOf("_Applet") >= 0);
console.log(isApplet);
var is2D = appletCheck._is2D;

if (!isApplet && !Info_but.script) {


  Info_but.defaultModel = "$tylenol";
  Info_but.script = "#alt:LOAD :tylenol";

}


$(document).ready(function () {

  $("#middlepanel_but").html(Jmol.getAppletHtml("jmol_but", Info_but));
  document.getElementById('jmol_canvas2d').style.width = '100%';
  document.getElementById('jmol_canvas2d').style.height = '100%';
  document.getElementById('middlepanel_but').setAttribute('class', 'text-center');
  console.log('Robapollos' + document.getElementById('jmol_canvas2d').style.height);
})



var jsmolPath = ''; /*ADJUST TO YOUR PATH*/


var Info_but = {
  j2sPath: jsmolPath + "j2s",
  serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
  src: 'PDB/Rotacion de enlaces/Butano/Bt0.pdb'
};

let data_butano;

let data_butano_read = readTextFile("data_butano.json", function (text) {
  this.data_butano = JSON.parse(text);
});


setTimeout(() => {
  console.log('Aqui comienza el ethano')

  let cont_et = 0;
  let name_butano = [];
  for (let i = 0; i < 37; i++) {
    name_butano.push("Bt" + cont_et + ".pdb")
    cont_et += 10
  }

  // data_ethano = data_ethano.reverse();
  console.log(this.data_butano)



  console.log(this.data_butano[0].distancia);
  console.log(this.data_butano[0].energia);

  // console.log(this.localFiles)
  var myPlot = document.getElementById('myDiv_but'),
    x = this.data_butano[0].distancia,
    y = this.data_butano[0].energia,
    data = [{
      x: x,
      y: y,
      type: 'scatter',
      mode: 'markers',
      marker: { size: 10 },
      text: name_butano
    }],
    layout = {
      //     // hovermode: 'closest',
      title: 'Superficie de energía potencial'
    };

  Plotly.newPlot('myDiv_but', data, layout);

  myPlot.on('plotly_click', function (data) {
    // this.Info.src = "PDB/H2/" + data.points[0].text

    var jsmolPath = ''; /*ADJUST TO YOUR PATH*/
    var Info_but = {
      j2sPath: jsmolPath + "j2s",
      serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
      src: "PDB/Rotacion de enlaces/Butano/" + data.points[0].text
    };

    $("#middlepanel_but").html(Jmol.getAppletHtml("jmol_but", Info_but));

    console.log("PDB/Rotacion de enlaces/Butano/" + data.points[0].text)
  });

}, 1000)





// ////////////////////////Segundo/////////////////////////////////////////

// var Info2 = {
//   width: "100%",
//   height: "100%",
//   script: script,
//   use: "HTML5",
//   jarPath: "java",
//   j2sPath: "j2s",
//   jarFile: "JmolAppletSigned.jar",
//   isSigned: false,
//   addSelectionOptions: false,
//   serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
//   readyFunction: null,
//   console: "jmol_infodiv",
//   disableInitialConsole: true,
//   defaultModel: null,
//   debug: false
// }


// ////////////////////////Segundo/////////////////////////////////////////

// Jmol.getApplet("appletCheck", Info2, true);

// var isApplet = (appletCheck._jmolType.indexOf("_Applet") >= 0);
// console.log(isApplet);
// var is2D = appletCheck._is2D;

// if (!isApplet && !Info2.script) {


//   Info2.defaultModel = "$tylenol";
//   Info2.script = "#alt:LOAD :tylenol";

// }
// ////////////////////////Segundo/////////////////////////////////////////


// $(document).ready(function () {

//   $("#middlepanel2").html(Jmol.getAppletHtml("jmol2", Info2));
//   document.getElementById('jmol_canvas2d').style.width = '100%';
//   document.getElementById('jmol_canvas2d').style.height = '100%';
//   document.getElementById('middlepanel2').setAttribute('class', 'text-center');
//   console.log('Robapollos' + document.getElementById('jmol_canvas2d').style.height);
// })
// ////////////////////////Segundo/////////////////////////////////////////

// cont = 2;
// let files = [];
// for (let i = 0; i < 8; i++) {
//   files.push("H0." + cont + ".pdb");
//   cont++;
// }
// for (let i = 0; i < 10; i++) {
//   files.push("H1." + i + ".pdb");
// }
// for (let i = 0; i < 10; i++) {
//   files.push("H2." + i + ".pdb");
// }

// files.push("H3.0.pdb")
// console.log("Van los files: ", files)


// console.log(files.reverse())


// var jsmolPath2 = ''; /*ADJUST TO YOUR PATH*/


// var Info2 = {
//   j2sPath: jsmolPath2 + "j2s",
//   serverURL: jsmolPath2 + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
//   src: 'PDB/H2/H3.0.pdb'
// };



// ////////////////////////////////H0///////////////////////////////////////

// let data;

// let bla = readTextFile("data_butano.json", function (text) {
//   this.data = JSON.parse(text);
// });


// setTimeout(() => {

//   cont = 2;
//   let localFiles = [];
//   for (let i = 0; i < 8; i++) {
//     localFiles.push("H0." + cont + ".pdb");
//     cont++;
//   }
//   for (let i = 0; i < 10; i++) {
//     localFiles.push("H1." + i + ".pdb");
//   }
//   for (let i = 0; i < 10; i++) {
//     localFiles.push("H2." + i + ".pdb");
//   }

//   localFiles.push("H7.0.pdb")
//   console.log("Estos son los localfiles ", localFiles)
//   localFiles = localFiles.reverse();

//   console.log(this.data.distancia);
//   console.log(this.localFiles)
//   var myPlot2 = document.getElementById('myDiv2'),
//     x = this.data.distancia,
//     y = this.data.energia,
//     data = [{
//       x: x,
//       y: y,
//       type: 'scatter',
//       mode: 'markers',
//       marker: { size: 10 },
//       text: localFiles
//     }],
//     layout = {
//       // hovermode: 'closest',
//       title: 'Superficie de energía potencial'
//     };

//   Plotly.newPlot('myDiv2', data, layout);

//   myPlot2.on('plotly_click', function (data) {
//     // this.Info.src = "PDB/H2/" + data.points[0].text

//     var jsmolPath2 = ''; /*ADJUST TO YOUR PATH*/
//     var Info2 = {
//       j2sPath: jsmolPath2 + "j2s",
//       serverURL: jsmolPath2 + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
//       src: "PDB/H2/" + data.points[0].text
//     };

//     $("#middlepanel2").html(Jmol.getAppletHtml("jmol2", Info2));

//     console.log("PDB/H2/" + data.points[0].text)
//   });

// }, 1000)


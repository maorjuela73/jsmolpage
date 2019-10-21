
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

    ////// every page will need one variable and one Info object for each applet object

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

    // this next bit just allows us to see what platform we are on
    // based on our decisions indicated in Info

    // "true" here indicates just a check

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

    cont = 2;
    let files = [];
    for (let i = 0; i < 8; i++) {
      files.push("H0." + cont + ".pdb");
      cont++;
    }
    for (let i = 0; i < 10; i++) {
      files.push("H1." + i + ".pdb");
    }
    for (let i = 0; i < 10; i++) {
      files.push("H2." + i + ".pdb");
    }

    files.push("H3.0.pdb")
    console.log("Van los files: ", files)


    console.log(files.reverse())


    var jsmolPath = ''; /*ADJUST TO YOUR PATH*/
    var Info = {
      j2sPath: jsmolPath + "j2s",
      serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
      src: 'PDB/H2/H0.7.pdb'
    };


    /////////////////// Grafico /////////////////

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

    //usage:

    let data;

    let bla = readTextFile("base.json", function (text) {
      this.data = JSON.parse(text);
    });


    setTimeout(() => {

      cont = 2;
      let localFiles = [];
      for (let i = 0; i < 8; i++) {
        localFiles.push("H0." + cont + ".pdb");
        cont++;
      }
      for (let i = 0; i < 10; i++) {
        localFiles.push("H1." + i + ".pdb");
      }
      for (let i = 0; i < 10; i++) {
        localFiles.push("H2." + i + ".pdb");
      }

      localFiles.push("H3.0.pdb")
      console.log("Estos son los localfiles ", localFiles)
      localFiles = localFiles.reverse();

      console.log(this.data.distancia);
      console.log(this.localFiles)
      var myPlot = document.getElementById('myDiv'),
        x = this.data.distancia,
        y = this.data.energia,
        data = [{
          x: x,
          y: y,
          type: 'scatter',
          mode: 'markers',
          marker: { size: 10 },
          text: localFiles
        }],
        layout = {
          // hovermode: 'closest',
          title: 'Superficie de energía potencial'
        };

      Plotly.newPlot('myDiv', data, layout);

      myPlot.on('plotly_click', function (data) {
        // this.Info.src = "PDB/H2/" + data.points[0].text

        var jsmolPath = ''; /*ADJUST TO YOUR PATH*/
        var Info = {
          j2sPath: jsmolPath + "j2s",
          serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
          src: "PDB/H2/" + data.points[0].text
        };

        $("#middlepanel").html(Jmol.getAppletHtml("jmol", Info));

        console.log("PDB/H2/" + data.points[0].text)
      });

    }, 1000)


////////////////////////////////ETHANO///////////////////////////////////////

console.log('Aqui va el ethano')
//     let data_ethano;

//     let bla = readTextFile("base.json", function (text) {
//       this.data_ethano = JSON.parse(text);
//     });


//     setTimeout(() => {

//       cont = 2;
//       let localFiles = [];
//       for (let i = 0; i < 36; i+10) {
//         localFiles.push("Et" + cont + ".pdb");
//         cont++;
//       }

//       console.log("Estos son los localfiles ", localFiles)
      // localFiles = localFiles.reverse();

      // console.log(this.data_ethano.distancia);
      // console.log(this.localFiles)
      // var myPlot = document.getElementById('myDiv'),
      //   x = this.data_ethano.distancia,
      //   y = this.data_ethano.energia,
      //   data = [{
      //     x: x,
      //     y: y,
      //     type: 'scatter',
      //     mode: 'markers',
      //     marker: { size: 10 },
      //     text: localFiles
      //   }],
      //   layout = {
      //     // hovermode: 'closest',
      //     title: 'Superficie de energía potencial'
      //   };

      // Plotly.newPlot('myDiv', data, layout);

      // myPlot.on('plotly_click', function (data) {
      //   // this.Info.src = "PDB/H2/" + data.points[0].text

      //   var jsmolPath = ''; /*ADJUST TO YOUR PATH*/
      //   var Info = {
      //     j2sPath: jsmolPath + "j2s",
      //     serverURL: jsmolPath + "php/jsmol.php", //THIS LINE IS ESSENTIAL FOR CROSS-SITE FILE LOADING
      //     src: "PDB/H2/" + data.points[0].text
      //   };

      //   $("#middlepanel").html(Jmol.getAppletHtml("jmol", Info));

      //   console.log("PDB/H2/" + data.points[0].text)
      // });

    // }, 1000)

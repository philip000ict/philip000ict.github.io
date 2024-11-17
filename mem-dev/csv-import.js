
let Names = ["img/diamond.png","Diamond","img/ruby.png","Ruby","img/emerald.png","Emerald","img/saphire.png","Saphire","img/opal.png","Opal","\
    img/crystal.png","Crystal","img/garnet.png","Garnet","img/malachite.png","Malechite","img/lapis.png","Lapis-Lazuli","img/pyrites.png","Pyrites","\
    img/topaz.png","Topaz","img/jasper.png","Jasper","img/beryl.png","Beryl","img/onyx.png","Onyx","img/chalcedony.png","Chalcedony"];


    // var fileUpload = document.getElementById("fileUpload");
    // var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    // if (regex.test(fileUpload.value.toLowerCase())) {
    //     if (typeof (FileReader) != "undefined") {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             var table = document.createElement("table");
    //             var rows = e.target.result.split("\n");
    //             for (var i = 0; i < rows.length; i++) {
    //                 var row = table.insertRow(-1);
    //                 var cells = rows[i].split(",");
    //                 for (var j = 0; j < cells.length; j++) {
    //                     var cell = row.insertCell(-1);
    //                     cell.innerHTML = cells[j];
    //                 }
    //             }
    //             var dvCSV = document.getElementById("dvCSV");
    //             dvCSV.innerHTML = "";
    //             dvCSV.appendChild(table);
    //         }
    //         reader.readAsText(fileUpload.files[0]);
    //     } else {
    //         alert("This browser does not support HTML5.");
    //     }
    // } else {
    //     alert("Please upload a valid CSV file.");
    // }



// const fs = require('fs');
// const csvParser = require('csv-parser');

// fs.readFile('gems.csv', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const csvData = csvParser.parse(data.toString());
//   console.log(csvData);
//   // csvData is an array of objects, where each object represents a row
// });
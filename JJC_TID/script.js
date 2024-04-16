GetXMLHR('https://mini-tokyo.appspot.com/tid','TrainINFO'); 
function GetXMLHR(FILE_URL, AFTER_SCRIPT_NAME) {
  var XMLHR = new XMLHttpRequest();
  XMLHR.onreadystatechange = function () {
    if (XMLHR.readyState == 4 && XMLHR.status == 200) {
      var DATA_LIST = XMLHR.responseText;
      var AFTER_SCRIPT = new Function("引数", "return " + AFTER_SCRIPT_NAME + "(引数)");
      AFTER_SCRIPT(DATA_LIST);
    }
  }
  XMLHR.open("GET", FILE_URL, true);
  XMLHR.send(null);
}

var TrainINFO_DATA =  new Array();
function TrainINFO(DATA_LIST) {
  DATA_LIST = DATA_LIST.replace(/[\n\r]/g, ""); 
  var DATA = JSON.parse(DATA_LIST);
  for (var i = 0; i < DATA.length; i++) {
    if (DATA[i].id.startsWith("JR-East.JobanLocal")) {
      var idSplit = DATA[i].id.split(".");
      var trainInfo = [
         idSplit[2],
        DATA[i].delay / 60000, // delayを60000で割る
        "J"
      ];
      TrainINFO_DATA.push(trainInfo);
    }
    if (DATA[i].id.startsWith("TokyoMetro.Chiyoda")) {
      var idSplit = DATA[i].id.split(".");
      var trainInfo = [
         idSplit[2].replace(/A/g, "").replace(/B/g, ""),
         DATA[i].delay / 60000, // delayを60000で割る
        "C"
      ];
      TrainINFO_DATA.push(trainInfo);
    }
  }
  console.log(TrainINFO_DATA); // 結果を確認するためのログ
}
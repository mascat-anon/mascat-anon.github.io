/**
 * タイトルなどのテキストに自動で長体をかけるJS
 * @constructor　Choootype
 * @param {String} sel - エフェクトを掛けたい場所のセレクターを指定する。
 * @param {Object} opt - オプションのオブジェクト。
 * @param {Number} opt.min - 長体の最長値を設定する。
 * @param {Number} opt.delay - ウインドウリサイズ終了確認のための待機時間。
 * @param {Number} minAspect - 長体の最小値をを設定します。
 * @param {Object} tgt - 変更する複数のオブジェクト
 * @param {Object} box - 変更する1つのオブジェクト（親要素）
 * @param {Object} span - boxの中身にspanタグを追加したオブジェクト（子要素）
 * @param {Number} boxWidth - boxの要素の幅
 * @param {Object} spanWidth - spanの要素の幅
 * @param {Number} aspecgt - 親要素と子要素のの比率。長体の値
 *
 * Choootype 1.2
 *
 * Yoshiaki Matsumura
 * ejworks corporation
 * Copyright 2021, MIT License
 *
 */
var Choootype = function (div = ".auto_narrow", opt = {}) {
	// 可読性のため0.6倍くらいが望ましいが、最小値を固定してしまうと文字が切れてしまう可能性あり。
	// 初期値は0（長体の限度なし）
	const minAspect = opt.min || 0;
	let timeoutID = 0;
	let delay = opt.delay || 500;
	/**
   * 
	// #container のリサイズに対応
	window.addEventListener("mouseup", ()=>{
	  const tgt = document.querySelectorAll(div);
		tgt.forEach((box) => {
		  const isChoootype = box.querySelector('.js-addChoootype');
		  if(isChoootype != null){
			box.innerHTML = isChoootype.innerHTML;
		  }
		});
		// Choootype();
		__setChoootype(div);
	}, false);
  
	// window のりサイズで再度長体の比率を調整
	window.addEventListener("resize", ()=>{
	  clearTimeout(timeoutID);
	  timeoutID = setTimeout((div = ".choootype")=>{
		const tgt = document.querySelectorAll(div);
		tgt.forEach((box) => {
		  const isChoootype = box.querySelector('.js-addChoootype');
		  if(isChoootype != null){
			box.innerHTML = isChoootype.innerHTML;
		  }
		});
		// Choootype();
		__setChoootype(div);
	  }, delay);
	}, false);
	*
	*/
	// 長体をかける
	function __setChoootype(div) {
	  const tgt = document.querySelectorAll(div);
	  tgt.forEach((box) => {
		// 元のオブジェクトの幅を取得
		const boxWidth = box.offsetWidth;
		// 長体を掛けるためのオブジェクトを生成
		let span = document.createElement("span");
		span.innerHTML = box.textContent;
		span.style.whiteSpace = "nowrap";
		span.className = "js-addChoootype";
		// 中のオブジェクトがはみ出るのではみ出た部分を非表示にする
		box.style.overflow = "hidden";
		box.innerHTML = "";
		box.appendChild(span);
		const spanWidth = span.offsetWidth;
		// 元のオブジェクトより中のオブジェクトが大きいとき、その比率で中のオブジェクトの幅を縮める
		if (boxWidth < spanWidth) {
		  let aspect = boxWidth / spanWidth;
		  if (aspect < minAspect) aspect = minAspect;
		  span.style.transform = "scaleX(" + aspect + ")";
		  span.style.display = "inline-block";
		  span.style.transformOrigin = "top left";
		}
	  });
	}
	__setChoootype(div);
  };
  Choootype();
  
  function startMarquee(element) {
	const speed = 1.8; // Adjust this value to change the scrolling speed
	const containerWidth = element.offsetWidth;
	const contentWidth = element.querySelector('span').offsetWidth;
	let position = containerWidth;
  
	function move() {
	  position -= speed;
	  element.querySelector('span').style.transform = `translateX(${position}px)`;
	  if (position < -contentWidth) {
		position = containerWidth;
	  }
	  requestAnimationFrame(move);
	}
	move();
  }
  //こっからデータ
  var NowTimeSource = "";
  var NowYear = "";
  var NowMonth = "";
  var NowDay = "";
  var NowWeek = "";
  var NowHour = "";
  var NowMin = "";
  var NowSec = "";
  
  function showClock() {
	NowTimeSource = new Date();
	NowYear = NowTimeSource.getFullYear();
	NowMonth = NowTimeSource.getMonth() + 1;
	NowDay = NowTimeSource.getDate();
	if (JapaneseHolidays.isHoliday(NowTimeSource)) { //祝日判定
	  NowWeek = 0;
	} else {
	  NowWeek = NowTimeSource.getDay();
	}
	yobi = new Array("Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat");
	NowHour = NowTimeSource.getHours();
	NowMin = NowTimeSource.getMinutes();
	NowSec = NowTimeSource.getSeconds();
	if (NowHour < 10) NowHour = "0" + NowHour;
	if (NowMin < 10) NowMin = "0" + NowMin;
	if (NowSec < 10) NowSec = "0" + NowSec;
	var msg = NowHour + ":" + NowMin + ":" + NowSec;
	var resetTime = "" + NowHour + NowMin + NowSec;
	if (resetTime === "000000") { //0時にリセット
	  SetTimeTable();
	}
  }
  
  function showClock2() {
	var nowTime = new Date();
	var nowHour = nowTime.getHours();
	var nowMin = nowTime.getMinutes();
	if (nowMin < 10) nowMin = "0" + nowMin;
	var msg = "<span class='' style='font-size: 2.3vmin;' id=''>現在時刻&ensp;</span><br><i>" + nowHour + ":" + nowMin + "</i>";
	document.getElementById("NowTime").innerHTML = msg;
	window.setTimeout(function () {
	  var msg = "<span class='' style='font-size: 2.3vmin;' id=''>現在時刻&ensp;</span><br><i>" + nowHour + "<span style='opacity: 0;'>:</span>" + nowMin + "</i>";
	  document.getElementById("NowTime").innerHTML = msg;
	}, 1000);
  }
  //共通仕様
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
  var ScrollCommonParam = 0; //運行情報なし[0]あり[1]
  var ScrollForceParam = 0; //強制情報なし[0]あり[1]
  var ScrollInfoMessage = "";
  var ScrollForceMessage = "";
  
  function ScrollINFO(DATA_LIST) {
	ScrollForceParam = 0;
	ScrollInfoMessage = ""; //内容クリア
	ScrollForceMessage = "";
	DATA_LIST = DATA_LIST.replace(/[\n\r]/g, ""); // Ｂ
	var DATA = eval("(" + DATA_LIST + ")");
	for (var i = 0; i < DATA.values.length; i++) {
	  if (DATA.values[i][0] == "標準") {
		ScrollInfoMessage += "　" + DATA.values[i][1];
	  } else if (DATA.values[i][0] == "強制") {
		ScrollForceParam = 1;
		ScrollForceMessage += "　" + DATA.values[i][1];
	  }
	}
  }
  var TrainInfoMessage = "";
  var TrainInfoMessage_OVER = "";
  
  function TrainINFO(DATA_LIST) {
	TrainInfoMessage = ""; //内容クリア
	var LineName = new Array(); // Ａ
	var Statues = new Array();
	var Cause = new Array();
	var Date = new Array();
	DATA_LIST = DATA_LIST.replace(/[\n\r]/g, ""); // Ｂ
	var DATA = eval("(" + DATA_LIST + ")"); // Ｃ
	if (DATA.values[0][0] == "None Train Information") {
	  ScrollCommonParam = 0; //運行情報なし[0]あり[1]
	} else {
	  ScrollCommonParam = 1; //運行情報なし[0]あり[1]
	  TrainInfoMessage = "運行情報";
	  TrainInfoMessage_OVER = "運行情報";
	  for (var i = 0; i < DATA.values.length; i++) {
		LineName[i] = DATA.values[i][0]; // Ｄ
		Statues[i] = DATA.values[i][1];
		Cause[i] = DATA.values[i][2];
		Date[i] = DATA.values[i][3];
		TrainInfoMessage += "　●" + Cause[i];
		TrainInfoMessage_OVER += "　● 【" + LineName[i] + "：" + Statues[i] + "】";
	  }
	  if (TrainInfoMessage.length > 250) { //運行情報全文が指定文字以上あったら簡易表示
		TrainInfoMessage = TrainInfoMessage_OVER;
		if (TrainInfoMessage_OVER.length > 250) { //簡易表示も指定文字以上あったらさらに簡易表示
		  TrainInfoMessage = "ただいま千葉県内多くの鉄道路線にダイヤ乱れが発生しています。";
		}
	  }
	}
	SetScroll();
  }
  var TodayTimeTable = new Array();
  //本日のデータをCSVを配列から格納ここから
  function CSV_TimeTable(dataArr) {
	var matrix = new Array();
	if (dataArr.match(/\r/)) var row = dataArr.split("\r\n"); // Ａ
	else row = dataArr.split("\n");
	for (i = 0; i < row.length; i++) {
	  matrix[i] = new Array(); // Ｂ
	  var columnDATA = row[i].split(","); // Ｃ
	  var column = 5; //運行,発時(計),系統,行先,摘要,発時(実),着所,着時
	  for (var j = 0; j < column; j++) {
		matrix[i][j] = columnDATA[j]; // Ｄ
	  }
	  matrix[i][5] = columnDATA[1];
	  matrix[i][6] = "";
	  matrix[i][7] = "";
	}
	let wi = 0;
	let si = 0;
	let hi = 0;
	if (JapaneseHolidays.isHoliday(new Date())) { //祝日判定外部ソース
	  NowWeek = 0;
	} else {
	  NowWeek = NowTimeSource.getDay();
	}
	if (NowWeek == 0) { //  Holiday
	  for (let i = 0; i < matrix.length; i++) { // 振り分け
		if (matrix[i][0] == '祝日') {
		  TodayTimeTable[hi] = matrix[i];
		  hi++;
		}
	  }
	} else if (NowWeek == 6) { //  Saturday
	  for (let i = 0; i < matrix.length; i++) { // 振り分け
		if (matrix[i][0] == '土曜') {
		  TodayTimeTable[si] = matrix[i];
		  si++;
		}
	  }
	} else { //  Weekday
	  for (let i = 0; i < matrix.length; i++) { // 振り分け
		if (matrix[i][0] == '平日') {
		  TodayTimeTable[wi] = matrix[i];
		  wi++;
		}
	  }
	}
  }
  var ViaBunData = new Array();
  //経由と背景色のデータをCSVを配列から格納ここから
  function CSV_ViaBunData(dataArr) {
	var matrix = new Array();
	if (dataArr.match(/\r/)) var row = dataArr.split("\r\n"); // Ａ
	else row = dataArr.split("\n");
	for (i = 0; i < row.length; i++) {
	  matrix[i] = new Array(); // Ｂ
	  var columnDATA = row[i].split(","); // Ｃ
	  var column = 3; //系統行先,経由,カラー
	  for (var j = 0; j < column; j++) {
		matrix[i][j] = columnDATA[j]; // Ｄ
	  }
	}
	ViaBunData = matrix;
	console.log(ViaBunData)
  }
  var RemarkBunData = new Array();
  //備考文のデータをCSVを配列から格納ここから
  function CSV_RemarkBunData(dataArr) {
	var matrix = new Array();
	if (dataArr.match(/\r/)) var row = dataArr.split("\r\n"); // Ａ
	else row = dataArr.split("\n");
	for (i = 0; i < row.length; i++) {
	  matrix[i] = new Array(); // Ｂ
	  var columnDATA = row[i].split(","); // Ｃ
	  var column = 3; //系統行先,経由,カラー
	  for (var j = 0; j < column; j++) {
		matrix[i][j] = columnDATA[j]; // Ｄ
	  }
	}
	RemarkBunData = matrix;
	console.log(RemarkBunData)
  }
  var BusEND = "";
  //いまのデータをJSONを配列から格納ここから
  function JSON_RealTimeTable(DATA_LIST) {
	NowTimeSource = new Date();
	NowHour = NowTimeSource.getHours();
	NowMin = NowTimeSource.getMinutes();
	if (NowMin < 10) NowMin = "0" + NowMin;
	if (NowHour < 10) NowHour = "0" + NowHour;
	var CheckTime = NowHour + "" + NowMin;
	CheckTime = Number(CheckTime)
	console.log(CheckTime)
	DATA_LIST = DATA_LIST.replace(/[\n\r]/g, ""); // Ｂ
	var BusInformationData = eval("(" + DATA_LIST + ")"); // Ｃ
	RealTimeTable = new Array();
	for (let j = 0; j < TodayTimeTable.length; j++) { //臨時運行のデータは毎度消す
	  if (TodayTimeTable[j][0] == "臨時") {
		TodayTimeTable.splice([j], 1);
		j--
	  }
	}
	if (BusInformationData.values[0][0] == "DepPlannedTime") { //運行終了判定
	  BusEND = "yes";
	} else { //運行,発時(計),系統,行先,摘要,発時(実),着所,着時
	  BusEND = "no";
	  for (var i = 0; i < BusInformationData.values.length; i++) {
		RealTimeTable[i] = [];
		RealTimeTable[i][0] = "当日"; // Ｄ
		RealTimeTable[i][1] = BusInformationData.values[i][0];
		RealTimeTable[i][2] = BusInformationData.values[i][1];
		RealTimeTable[i][3] = BusInformationData.values[i][2];
		RealTimeTable[i][4] = "";
		RealTimeTable[i][5] = BusInformationData.values[i][3];
		RealTimeTable[i][6] = BusInformationData.values[i][4];
		RealTimeTable[i][7] = BusInformationData.values[i][5];
		RealTimeTable[i][8] = BusInformationData.values[i][6];
		RealTimeTable[i][9] = BusInformationData.values[i][7];
		//上から振ってくるJSONとマッチング
		for (let j = 0; j < TodayTimeTable.length; j++) {
		  R_MatchingSource = RealTimeTable[i][1] + RealTimeTable[i][2] + RealTimeTable[i][3];
		  T_MatchingSource = TodayTimeTable[j][1] + TodayTimeTable[j][2] + TodayTimeTable[j][3];
		  if (R_MatchingSource == T_MatchingSource) {
			TodayTimeTable[j][0] = RealTimeTable[i][0];
			TodayTimeTable[j][5] = RealTimeTable[i][5];
			TodayTimeTable[j][6] = RealTimeTable[i][6];
			TodayTimeTable[j][7] = RealTimeTable[i][7];
			TodayTimeTable[j][8] = RealTimeTable[i][8];
			TodayTimeTable[j][9] = RealTimeTable[i][9];
		  }
		}
		if (RealTimeTable[i][1] == ":") { //臨時ダイヤの取得
		  console.log("臨時ダイヤ")
		  TodayTimeTable.unshift(['臨時', '', '', '', '', '', '', '']);
		  TodayTimeTable[0][1] = RealTimeTable[i][5];
		  TodayTimeTable[0][2] = RealTimeTable[i][2];
		  TodayTimeTable[0][3] = RealTimeTable[i][3];
		  TodayTimeTable[0][4] = "20";
		  TodayTimeTable[0][5] = NowHour + ":" + NowMin;
		  TodayTimeTable[0][6] = RealTimeTable[i][6];
		  TodayTimeTable[0][7] = RealTimeTable[i][7];
		}
	  }
	}
	for (let j = 0; j < TodayTimeTable.length; j++) { //時間過ぎたら消す
	  if (CheckTime > Number(TodayTimeTable[j][5].replace(/[^0-9]/g, ''))) {
		TodayTimeTable.splice([j], 1);
		console.log("消す")
		j--
	  }
	}
	表示();
	setTimeout(表示, 5000);
  }
  var DispPattern = 0; //初期0
  function 表示() {
	for (let j = 0; j < 5; j++) { //初期状態にもどしてく
	  document.getElementById('Type' + j).innerHTML = "";
	  document.getElementById('TypeBox' + j).style.backgroundColor = "";
	  document.getElementById('Time' + j).innerHTML = "";
	  document.getElementById('Time' + j).style.color = "";
	  document.getElementById('Dist' + j).innerHTML = "";
	  document.getElementById('Dist' + j).style.color = "";
	  document.getElementById('Delay' + j).innerHTML = "";
	  document.getElementById('Delay' + j).style.color = "";
	  document.getElementById('Type' + j).classList.remove("blink");
	  document.getElementById('Time' + j).classList.remove("blink");
	  document.getElementById('Dist' + j).classList.remove("blink");
	  document.getElementById('Delay' + j).classList.remove("blink");
	}
	var DispTableCount = 5;
	var MaxDispTableCount = 5;
	var NoneDispTableCount = 0;
	if (TodayTimeTable.length < DispTableCount) {
	  DispTableCount = TodayTimeTable.length;
	  NoneDispTableCount = MaxDispTableCount - DispTableCount;
	  for (let i = 0; i < NoneDispTableCount; i++) { //初期状態にもどしてく
		let j = DispTableCount + i;
		document.getElementById('Type' + j).innerHTML = "";
		document.getElementById('TypeBox' + j).style.backgroundColor = "";
		document.getElementById('Time' + j).innerHTML = "";
		document.getElementById('Time' + j).style.color = "";
		document.getElementById('Dist' + j).innerHTML = "";
		document.getElementById('Dist' + j).style.color = "";
		document.getElementById('Delay' + j).innerHTML = "";
		document.getElementById('Delay' + j).style.color = "";
		document.getElementById("marquee" + j).querySelector('span').innerHTML = ""; //ここを今度解決させる。
		document.getElementById('Type' + j).classList.remove("blink");
		document.getElementById('Time' + j).classList.remove("blink");
		document.getElementById('Dist' + j).classList.remove("blink");
		document.getElementById('Delay' + j).classList.remove("blink");
		console.log("#発火")
	  }

		
	}
	console.log("#DispTableCount" + DispTableCount)
	console.log("#NoneDispTableCount" + NoneDispTableCount)
	for (let i = 0; i < DispTableCount; i++) {
	  document.getElementById('Type' + i).innerHTML += TodayTimeTable[i][2];
	  var DisplayTime = TodayTimeTable[i][1];
	  if (TodayTimeTable[i][1].length < 5) DisplayTime = "&nbsp;&nbsp;" + TodayTimeTable[i][1]; //時間が一桁の場合左に空白
	  document.getElementById('Time' + i).innerHTML = DisplayTime;
	  document.getElementById('Dist' + i).innerHTML = TodayTimeTable[i][3];
	  var NowTimeSource = new Date();
	  var NowMin = NowTimeSource.getMinutes();
	  if (NowMin < 10) NowMin = "0" + NowMin;
	  var DepPlannedTime = TodayTimeTable[i][1].replace(/[^0-9]/g, '');
	  var DepPredictionTime = TodayTimeTable[i][5].replace(/[^0-9]/g, '');
	  var DelayTime = 0;
	  if (DepPlannedTime.slice(-2) > DepPredictionTime.slice(-2)) { //遅れ計算
		DelayTime = DepPredictionTime.slice(-2) - DepPlannedTime.slice(-2) + 60;
	  } else {
		DelayTime = DepPredictionTime.slice(-2) - DepPlannedTime.slice(-2);
	  }
	  var DepWill = 0;
	  console.log(DepPredictionTime.slice(-2))
	  console.log(NowMin)
	  if (NowMin > DepPredictionTime.slice(-2)) { //あと何分で出る？
		DepWill = DepPredictionTime.slice(-2) - NowMin + 60;
	  } else {
		DepWill = DepPredictionTime.slice(-2) - NowMin;
		console.log(DepPredictionTime.slice(-2))
	  }
	  ViaBunData.forEach((index) => {
		if (index[0] == TodayTimeTable[i][2] + TodayTimeTable[i][3]) {
		  document.getElementById('Type' + i).innerHTML += "＜" + index[1] + "＞";
		  document.getElementById('TypeBox' + i).style.backgroundColor = index[2];
		}
	  });
	  RemarkBunData.forEach((index) => {
		if (index[0] == TodayTimeTable[i][4]) {
		  document.getElementById('Dist' + i).style.color = index[2];
		}
	  });
	  if (TodayTimeTable[i][0] == "臨時") { //臨時表示
		document.getElementById('Delay' + i).innerHTML = "臨時運行予定";
		document.getElementById('Delay' + i).style.color = '#FF00FF';
		document.getElementById('Time' + i).innerHTML = "時刻未定"
		RemarkBunData.forEach((index) => {
		  if (index[0] == TodayTimeTable[i][4]) {
			const marquee = document.getElementById("marquee" + i);
			const spanElement = marquee.querySelector('span');
			console.log(spanElement.textContent)
			if (spanElement.textContent !== index[1]) {
			  spanElement.innerHTML = index[1];
			  startMarquee(marquee);
			}
		  }
		});
	  } else if (TodayTimeTable[i][0] == "当日") { //当日データが取れているものだけ吐く
		if (DispPattern == 0) { //表示パターン
		  if (DelayTime > 15) {
			document.getElementById('Delay' + i).innerHTML = "大幅な遅れ";
			document.getElementById('Delay' + i).style.color = 'red';
			document.getElementById('Time' + i).innerHTML = ""
		  } else if (DelayTime > 0) {
			document.getElementById('Delay' + i).innerHTML = " 遅れ約" + DelayTime + "分";
			document.getElementById('Delay' + i).style.color = 'Orange';
		  } else {
			document.getElementById('Delay' + i).innerHTML = "定刻通り出発";
			document.getElementById('Delay' + i).style.color = '#00ff00';
		  }
		} else if (DispPattern == 1) {
		  if (DelayTime > 15) {
			document.getElementById('Delay' + i).innerHTML = "出発まで約" + DepWill + "分";
			document.getElementById('Time' + i).innerHTML = ""
		  } else if (DelayTime > 0) {
			document.getElementById('Delay' + i).innerHTML = "出発まで約" + DepWill + "分";
		  } else {
			document.getElementById('Delay' + i).innerHTML = "出発まで約" + DepWill + "分";
		  }
		}
		if (TodayTimeTable[i][8] == "far") {
		  const marquee = document.getElementById("marquee" + i);
		  const spanElement = marquee.querySelector('span');
		  const After_spanElement = "このバスは" + TodayTimeTable[i][9] + TodayTimeTable[i][6] + "行き。" + TodayTimeTable[i][6] + "には" + TodayTimeTable[i][7] + "ごろ到着予定です。"
		  if (spanElement.textContent !== After_spanElement) {
			spanElement.innerHTML = After_spanElement;
			console.log("#After_spanElement" + After_spanElement)
			console.log("#After_spanElement" + spanElement.textContent)
			startMarquee(marquee);
		  }
		} else {
		  const marquee = document.getElementById("marquee" + i);
		  const spanElement = marquee.querySelector('span');
		  var position = TodayTimeTable[i][8].slice(9);
		  const After_spanElement = "ただいま" + position + "つ前のバス停を出発。" + "このバスは" + TodayTimeTable[i][9] + TodayTimeTable[i][6] + "行き。" + TodayTimeTable[i][6] + "には" + TodayTimeTable[i][7] + "ごろ到着予定です。"
		  if (spanElement.textContent !== After_spanElement) {
			spanElement.innerHTML = After_spanElement;
			console.log("#After_spanElement" + After_spanElement)
			console.log("#After_spanElement" + spanElement.textContent)
			startMarquee(marquee);
		  }
		}
		if (DepWill < 2) { //出発N分切るとだす
		  document.getElementById('Delay' + i).innerHTML = "まもなく出発";
		  document.getElementById('Delay' + i).style.color = '#FFFF00';
		  document.getElementById('Type' + i).classList.add("blink");
		  document.getElementById('Time' + i).classList.add("blink");
		  document.getElementById('Dist' + i).classList.add("blink");
		  document.getElementById('Delay' + i).classList.add("blink");
		}
	  } else {
		RemarkBunData.forEach((index) => {
		  if (index[0] == TodayTimeTable[i][4]) {
			const marquee = document.getElementById("marquee" + i);
			const spanElement = marquee.querySelector('span');
			console.log(spanElement.textContent)
			if (spanElement.textContent !== index[1]) {
			  spanElement.innerHTML = index[1];
			  startMarquee(marquee);
			}
		  }
		});
	  }
	}
	if (TodayTimeTable.length == 0) {
	  if (BusEND == "yes") {
		document.getElementById('Dist0').innerHTML = "運行終了";
		document.getElementById('Dist0').style.color = 'red';
	  } else {
		document.getElementById('Type0').innerHTML = "情報要求に失敗しました！";
	  }
	}
	console.log("TodayTimeTable")
	if (DispPattern == 0) { //表示パターン
	  DispPattern = 1;
	} else if (DispPattern == 1) {
	  DispPattern = 0;
	}
	//平体のフィッテング
	Choootype();
  }
  
  function SetScroll() {
	var CheckEmpty;
	const timerId = setInterval(function () { //表示成功まで繰り返す
	  if (ScrollForceParam == 1) {
		const marquee = document.getElementById("marquee5");
		const spanElement = marquee.querySelector('span');
		spanElement.innerHTML = ScrollForceMessage;
		startMarquee(marquee);
		CheckEmpty = ScrollForceMessage;
	  } else if (ScrollCommonParam == 0) {
		const marquee = document.getElementById("marquee5");
		const spanElement = marquee.querySelector('span');
		spanElement.innerHTML = ScrollInfoMessage;
		startMarquee(marquee);
		CheckEmpty = ScrollInfoMessage;
	  } else if (ScrollCommonParam == 1) {
		const marquee = document.getElementById("marquee5");
		const spanElement = marquee.querySelector('span');
		spanElement.innerHTML = TrainInfoMessage;
		startMarquee(marquee);
		CheckEmpty = TrainInfoMessage;
	  }
	  if (!CheckEmpty == "") {
		Choootype();
		clearInterval(timerId)
	  }
	}, 100)
  }
  document.querySelectorAll('.marquee').forEach(startMarquee);
// デバック機能
// 現在のURLを取得
const currentUrl = window.location.href;
// URLオブジェクトを作成
const url = new URL(currentUrl);
// URLSearchParamsを使ってクエリパラメータを取得
const params = url.searchParams;
// "stop" パラメータの値を取得
const debugValue = params.get('debug');
// 条件分岐
if (debugValue === 'true') {
	document.getElementById("debug").style.display = 'block'; 
  }
const LanguageValue = params.get('language');
var setLanguage = 0;
  if (LanguageValue === 'EN') {
	setLanguage = 1;
	document.getElementById("text_q").innerHTML = "Set Question";
	document.getElementById("typelabel").innerHTML = "Type";
	document.getElementById("type").innerHTML ='<option value="permanent">Only Perm.</option><option value="deciduous">Only Dec.</option><option value="all">Perm.& Dec.</option>';
	document.getElementById("TestSetlabel").innerHTML = "Count";
	document.getElementById("startButton").innerHTML = "START";
	document.getElementById("resetButton").innerHTML = "RESET";
	document.getElementById("toggleButton").innerText = "Perm. ⇄ Dec.";
	document.querySelector(".state").innerText = "Select your answer.";
	document.getElementById("answerButton").textContent = "To answer";
  }

//問題と解答[写真,判別ビット.名称,コメント]
qa = new Array();
qa[0] = ["11", "11", "上顎右側中切歯", "Maxillary right central incisor"];
qa[1] = ["12", "12", "上顎右側側切歯", "Maxillary right lateral incisor"];
qa[2] = ["13", "13", "上顎右側犬歯", "Maxillary right canine"];
qa[3] = ["14", "14", "上顎右側第一小臼歯", "Maxillary right first premolar"];
qa[4] = ["15", "15", "上顎右側第二小臼歯", "Maxillary right second premolar"];
qa[5] = ["16", "16", "上顎右側第一大臼歯", "Maxillary right first molar"];
qa[6] = ["17", "17", "上顎右側第二大臼歯", "Maxillary right second molar"];

qa[7] = ["21", "21", "上顎左側中切歯", "Maxillary left central incisor"];
qa[8] = ["22", "22", "上顎左側側切歯", "Maxillary left lateral incisor"];
qa[9] = ["23", "23", "上顎左側犬歯", "Maxillary left canine"];
qa[10] = ["24", "24", "上顎左側第一小臼歯", "Maxillary left first premolar"];
qa[11] = ["25", "25", "上顎左側第二小臼歯", "Maxillary left second premolar"];
qa[12] = ["26", "26", "上顎左側第一大臼歯", "Maxillary left first molar"];
qa[13] = ["27", "27", "上顎左側第二大臼歯", "Maxillary left second molar"];

qa[14] = ["31", "31", "下顎左側中切歯", "Mandibular left central incisor"];
qa[15] = ["32", "32", "下顎左側側切歯", "Mandibular left lateral incisor"];
qa[16] = ["33", "33", "下顎左側犬歯", "Mandibular left canine"];
qa[17] = ["34", "34", "下顎左側第一小臼歯", "Mandibular left first premolar"];
qa[18] = ["35", "35", "下顎左側第二小臼歯", "Mandibular left second premolar"];
qa[19] = ["36", "36", "下顎左側第一大臼歯", "Mandibular left first molar"];
qa[20] = ["37", "37", "下顎左側第二大臼歯", "Mandibular left second molar"];

qa[21] = ["41", "41", "下顎右側中切歯", "Mandibular right central incisor"];
qa[22] = ["42", "42", "下顎右側側切歯", "Mandibular right lateral incisor"];
qa[23] = ["43", "43", "下顎右側犬歯", "Mandibular right canine"];
qa[24] = ["44", "44", "下顎右側第一小臼歯", "Mandibular right first premolar"];
qa[25] = ["45", "45", "下顎右側第二小臼歯", "Mandibular right second premolar"];
qa[26] = ["46", "46", "下顎右側第一大臼歯", "Mandibular right first molar"];
qa[27] = ["47", "47", "下顎右側第二大臼歯", "Mandibular right second molar"];

qa[28] = ["51", "1A", "上顎右側乳中切歯", "Maxillary right primary central incisor"];
qa[29] = ["52", "1B", "上顎右側乳側切歯", "Maxillary right primary lateral incisor"];
qa[30] = ["53", "1C", "上顎右側乳犬歯", "Maxillary right primary canine"];
qa[31] = ["54", "1D", "上顎右側第一乳臼歯", "Maxillary right primary first molar"];
qa[32] = ["55", "1E", "上顎右側第二乳臼歯", "Maxillary right primary second molar"];

qa[33] = ["61", "2A", "上顎左側乳中切歯", "Maxillary left primary central incisor"];
qa[34] = ["62", "2B", "上顎左側乳側切歯", "Maxillary left primary lateral incisor"];
qa[35] = ["63", "2C", "上顎左側乳犬歯", "Maxillary left primary canine"];
qa[36] = ["64", "2D", "上顎左側第一乳臼歯", "Maxillary left primary first molar"];
qa[37] = ["65", "2E", "上顎左側第二乳臼歯", "Maxillary left primary second molar"];

qa[38] = ["71", "3A", "下顎左側乳中切歯", "Mandibular left primary central incisor"];
qa[39] = ["72", "3B", "下顎左側乳側切歯", "Mandibular left primary lateral incisor"];
qa[40] = ["73", "3C", "下顎左側乳犬歯", "Mandibular left primary canine"];
qa[41] = ["74", "3D", "下顎左側第一乳臼歯", "Mandibular left primary first molar"];
qa[42] = ["75", "3E", "下顎左側第二乳臼歯", "Mandibular left primary second molar"];

qa[43] = ["81", "4A", "下顎右側乳中切歯", "Mandibular right primary central incisor"];
qa[44] = ["82", "4B", "下顎右側乳側切歯", "Mandibular right primary lateral incisor"];
qa[45] = ["83", "4C", "下顎右側乳犬歯", "Mandibular right primary canine"];
qa[46] = ["84", "4D", "下顎右側第一乳臼歯", "Mandibular right primary first molar"];
qa[47] = ["85", "4E", "下顎右側第二乳臼歯", "Mandibular right primary second molar"];


var FDIselect;
var FDIAnser;
var fileName ;
// 初期設定  
let versionArray = {
	'permanent': ['28', '20', '16', '10', '5', '1'],
	'deciduous': ['20', '10', '5', '1'],
	'all': ['48', '40', '30', '20', '10', '5', '1']
};

document.getElementById('type').addEventListener('change', function() {
	let selectedType = this.value;
	let numberSelect = document.getElementById('TestSet');
	numberSelect.innerHTML = ''; // 一旦クリア
	if (versionArray[selectedType]) {
		versionArray[selectedType].forEach(function(item) {
			let option = document.createElement('option');
			option.value = item;
			option.textContent = item;
			numberSelect.appendChild(option);
		});
	}
});
// 初期化時に変更イベントを発火
window.onload = function() {
	document.getElementById('type').dispatchEvent(new Event('change'));
};
var timerid; //時間制限
function quiz() {
	document.getElementById("progress").innerHTML = "3D Data Now Loading...";
	//問題
	rnd = shuffledTEST[count]; //乱数 
	if (setLanguage === 1) {
		document.getElementById("text_q").innerHTML = "Question " + (count + 1) + " / " + q_max ;
	  }else{
		document.getElementById("text_q").innerHTML = "第" + (count + 1) + "問 ／ 全" + q_max+ "問";
	  }
	
		//3D投影
	fileName = qa[rnd][0];
	init();
	//3D投影
	document.getElementById("debug").innerHTML = "QuestionFDI=" + qa[rnd][0] ;
	FDIAnser = qa[rnd][0];
}

document.addEventListener("DOMContentLoaded", () => {
	const cells = document.querySelectorAll(".cell");
	const qTable = document.querySelector(".q-table");
	const aTable = document.querySelector(".a-table");
	const resizeBar = document.querySelector(".resize-bar");
	const container = document.querySelector(".container");
	const startButton = document.getElementById("startButton");
	const toggleButton = document.getElementById("toggleButton");
	const answerButton = document.getElementById("answerButton");
	const permanentGrid = document.querySelector(".permanent-grid");
	const deciduousGrid = document.querySelector(".deciduous-grid");
	const scrollContainer = document.querySelector(".scroll-container");
	const state = document.querySelector(".state");
	const resetButton = document.getElementById("resetButton");
	let selectedCell = null;
	let isResizing = false;


	startButton.addEventListener("click", () => {
		//出題数
		var q_max_row = document.getElementById("TestSet").value;
		q_max = q_max_row;
		//歯類選別
		if (document.getElementById("type").value == "permanent") {
			var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
				18, 19, 20, 21, 22, 23, 24, 25, 26, 27
			];
		} else if (document.getElementById("type").value == "deciduous") {
			var values = [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
				44, 45, 46, 47
			];
		} else if (document.getElementById("type").value == "all") {
			var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
				18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
				37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47
			];
		}
		//問題シャッフル
		var shuffleByES5 = function(array) {
			var ary = array.slice();
			for (var i = ary.length - 1; 0 < i; i--) {
				var r = Math.floor(Math.random() * (i + 1));
				var temp = ary[i];
				ary[i] = ary[r];
				ary[r] = temp;
			}
			return ary;
		};
		shuffledTEST = shuffleByES5(values);
		//問題番号
		count = 0;
		//解答記録
		ToothName = new Array();
		ansers = new Array();
		//最初の問題
		document.querySelector(".set-content").style.display = "none";
		document.querySelector(".test-content").style.display = "flex";
		quiz();
	});
  
	// セルの選択処理
	const cellClickHandler = (e) => {
		if (selectedCell) selectedCell.classList.remove("selected");
		if (selectedCell !== e.target) {
			e.target.classList.add("selected");
			selectedCell = e.target;
		} else {
			selectedCell = null;
		}
		FDIselect = e.target.getAttribute("data-number");
    document.getElementById("debug").innerHTML +="_SelectFDI="+FDIselect;
	};

	cells.forEach(cell => {
		cell.addEventListener("click", cellClickHandler);
	});

	// 乳歯・永久歯の切り替え
	toggleButton.addEventListener("click", () => {
		const isPermanentVisible = permanentGrid.style.display !== "none";
		permanentGrid.style.display = isPermanentVisible ? "none" : "grid";
		deciduousGrid.style.display = isPermanentVisible ? "grid" : "none";
		scrollContainer.style.maxWidth = isPermanentVisible ? "510px" : "710px";
	});

	// 進行ボタンの処理
	answerButton.addEventListener("click", () => {





		if (setLanguage === 1) {
			if (answerButton.textContent === "To answer") {
				ToothName[count] = qa[rnd][3];
				answerButton.textContent = "NEXT";
				if (FDIAnser == FDIselect) {
					state.innerText = "〇｜" + qa[rnd][3];
					state.style.backgroundColor = "#00B246";
					ansers[count] = "〇";
				} else {
					state.innerText = "×｜" + qa[rnd][3];
					state.style.backgroundColor = "#C70203";
					ansers[count] = "×";
				}
				// cellのクリックイベントを無効化
				cells.forEach(cell => {
					cell.removeEventListener("click", cellClickHandler);
				});
			} else {
				if (selectedCell) selectedCell.classList.remove("selected");
				state.innerText = "Select your answer.";
				state.style.backgroundColor = "#777";
				answerButton.textContent = "To answer";
		  FDIselect="00";
				//次の問題を表示
				count++;
				if (count < q_max) {
					quiz();
				} else {
					//終了
					document.querySelector(".test-content").style.display = "none";
					document.querySelector(".result-content").style.display = "flex";
					var tableEle = document.getElementById('result-box-table');
			
						document.getElementById("text_q").innerHTML = "Feedback";
						tableEle.innerHTML = "<tr><th>No.</th><th>Correct / Incorrect</th><th>Question</th></tr>";

	
					for (n = 0; n < q_max; n++) {
						var tr = document.createElement('tr');
						var td = document.createElement('td');
						td.innerHTML = (n + 1);
						tr.appendChild(td);
						var td = document.createElement('td');
						td.innerHTML = ansers[n];
						tr.appendChild(td);
						var td = document.createElement('td');
						td.innerHTML = ToothName[n];
						tr.appendChild(td);
						tableEle.appendChild(tr);
					}
				}
				// cellのクリックイベントを再度有効化
				cells.forEach(cell => {
					cell.addEventListener("click", cellClickHandler);
				});
			}
		  }else{
			if (answerButton.textContent === "解答する") {
				ToothName[count] = qa[rnd][2];
				answerButton.textContent = "次へ";
				if (FDIAnser == FDIselect) {
					state.innerText = "〇｜" + qa[rnd][2];
					state.style.backgroundColor = "#00B246";
					ansers[count] = "〇";
				} else {
					state.innerText = "×｜" + qa[rnd][2];
					state.style.backgroundColor = "#C70203";
					ansers[count] = "×";
				}
				// cellのクリックイベントを無効化
				cells.forEach(cell => {
					cell.removeEventListener("click", cellClickHandler);
				});
			} else {
				if (selectedCell) selectedCell.classList.remove("selected");
				state.innerText = "解答してください";
				state.style.backgroundColor = "#777";
				answerButton.textContent = "解答する";
		  FDIselect="00";
				//次の問題を表示
				count++;
				if (count < q_max) {
					quiz();
				} else {
					//終了
					document.querySelector(".test-content").style.display = "none";
					document.querySelector(".result-content").style.display = "flex";
					var tableEle = document.getElementById('result-box-table');

						document.getElementById("text_q").innerHTML = "正誤一覧表";
						tableEle.innerHTML = "<tr><th>番号</th><th>正誤</th><th>問題</th></tr>";

					for (n = 0; n < q_max; n++) {
						var tr = document.createElement('tr');
						var td = document.createElement('td');
						td.innerHTML = (n + 1);
						tr.appendChild(td);
						var td = document.createElement('td');
						td.innerHTML = ansers[n];
						tr.appendChild(td);
						var td = document.createElement('td');
						td.innerHTML = ToothName[n];
						tr.appendChild(td);
						tableEle.appendChild(tr);
					}
				}
				// cellのクリックイベントを再度有効化
				cells.forEach(cell => {
					cell.addEventListener("click", cellClickHandler);
				});
			}
		  }











		
	});
	resetButton.addEventListener("click", () => {
		document.querySelector(".result-content").style.display = "none";
		document.querySelector(".set-content").style.display = "flex";
		
		if (setLanguage === 1) {
			document.getElementById("text_q").innerHTML = "Set Question";
		  }else{
			document.getElementById("text_q").innerHTML = "出題設定";
		  }
	});
	// 縦幅のリサイズ処理
	resizeBar.addEventListener("mousedown", startResize);
	resizeBar.addEventListener("touchstart", startResize, {
		passive: false
	});

	function startResize(e) {
		e.preventDefault();
		isResizing = true;
		document.addEventListener("mousemove", resize);
		document.addEventListener("mouseup", stopResize);
		document.addEventListener("touchmove", resize, {
			passive: false
		});
		document.addEventListener("touchend", stopResize);
	}

	function resize(e) {
		if (!isResizing) return;
		const clientY = e.touches ? e.touches[0].clientY : e.clientY;
		const windowHeight = window.innerHeight;
		const containerTop = container.getBoundingClientRect().top;
		const maxQHeight = windowHeight - containerTop - 120;
		let newQHeight = clientY - qTable.getBoundingClientRect().top;
		if (newQHeight > 60 && newQHeight < maxQHeight && clientY < windowHeight -
			60) {
			qTable.style.flex = `0 0 ${newQHeight}px`;
			aTable.style.flex = "1";
		}
	}

	function stopResize() {
		isResizing = false;
		document.removeEventListener("mousemove", resize);
		document.removeEventListener("mouseup", stopResize);
		document.removeEventListener("touchmove", resize);
		document.removeEventListener("touchend", stopResize);
	}
});

//3Dモデル処理

window.addEventListener("DOMContentLoaded", init);
window.addEventListener('resize', init);
// ファイル定義


function init() {
    // 親要素の取得
    const parentElement = document.querySelector('#mainBoard'); // 親要素を指定
    const width = parentElement.clientWidth;
    const height = parentElement.clientHeight;

    // レンダラーを作成
    const canvasElement = document.querySelector('#myCanvas');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasElement,
		alpha: true, //追加 背景を透明にする
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();
    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, 30);

    // カメラコントローラーを作成
    const controls = new THREE.OrbitControls(camera, canvasElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.5;

    // カメラの方向に追従するライト
    const cameraLight = new THREE.DirectionalLight(0xffffff); // カメラに追従するライト
    cameraLight.intensity = 0.75;
    scene.add(cameraLight);


        // 3Dモデルの読み込み
        const objLoader = new THREE.OBJLoader();
        objLoader.load(
            `./models/${fileName}.obj`,
            function (obj) {
                // バウンディングボックスを計算
                const box = new THREE.Box3().setFromObject(obj);

                // バウンディングボックスの中心を計算
                const center = new THREE.Vector3();
                box.getCenter(center);

                // モデルをシーンに追加
                scene.add(obj);

                // 重心が (0, 0, 0) に来るように位置を調整
                obj.position.set(-center.x, -center.y, -center.z);

				document.getElementById("progress").innerHTML = "";
            },
			
        );


    tick();

    function tick() {
        // カメラの方向を取得
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);

        // カメラの位置と方向を基準にライトを設定
        cameraLight.position.copy(camera.position); // カメラ位置にライトを配置
        cameraLight.target.position.copy(camera.position.clone().add(cameraDirection));
        cameraLight.target.updateMatrixWorld();

        // コントローラーの更新
        controls.update();

        renderer.render(scene, camera); // レンダリング
        requestAnimationFrame(tick);
    }
}

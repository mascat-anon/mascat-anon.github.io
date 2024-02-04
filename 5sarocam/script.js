(async () => {
  // 要素を取得
  const targetImg = document.querySelector("#targetImg");
  const imgInfo =  document.querySelector("#imgInfo");
  
  //　画像データを非同期で取得
  const fetchImg = await fetchImage(targetImg.src);
  // 更新日時を取得
  const modified = getModified(fetchImg);
  // 更新日時を表示
  imgInfo.textContent = "撮影日時：" + formatDate(modified)

})();

// fetch（非同期）
async function fetchImage(target) {

  const response = await fetch(target);
  if (response.ok) {
    // キャンバス
        const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  var image = new Image();
  image.src =
      'https://cam.river.go.jp/cam/now/103073002.jpg';

  image.onload = function() {
    ctx.drawImage(image, 640, 200, 640, 400, 0, 0, 640, 400);
ctx.font = '20px Roboto medium';
ctx.fillStyle = "#ffffff"
ctx.lineWidth = "6";
ctx.strokeText("古ヶ崎→", 500, 150);
ctx.fillText("古ヶ崎→", 500, 150);
ctx.strokeText("←松戸営業所方向", 20, 140);
ctx.fillText("←松戸営業所方向", 20, 140);
 ctx.strokeText("小僧弁天方向↘", 410, 270);
ctx.fillText("小僧弁天方向↘", 410, 270);   
  }
    return response;
  } else {
      throw new Error('The data could not be read');
   }
}

// 更新日取得
function getModified(target) {
  const headers = target.headers;
  let lastModified = "";
  //　更新日時を取得（GMT）
  for (var pair of headers.entries()) {
    if (pair[0] === "last-modified") {
      lastModified = pair[1];
     
    }
  }
  return lastModified;
}

// GMTを年月日分に変換
function formatDate(targetDate) {
  const modified = new Date(targetDate);
  const year = modified.getFullYear();
  const month = modified.getMonth() + 1;
  const date = modified.getDate();
  const hours = modified.getHours();
  const minutes = modified.getMinutes();
  return +year + "年" + month + "月" + date + "日" + hours + "時" + minutes + "分";
};
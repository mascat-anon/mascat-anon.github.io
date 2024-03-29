document.addEventListener("DOMContentLoaded", function() {
  var progressBar = document.getElementById("progress-bar");
  var percent = document.getElementById("percent");
  var status = document.getElementById("status");
  var imagesLoaded = 0;
  var totalImages = 20;

  // Preload images
  for (var i = 0; i < totalImages; i++) {
      var img = new Image();
      img.onload = function() {
          imagesLoaded++;
          var progress = (imagesLoaded / totalImages) * 100;
          progressBar.style.width = progress + "%";
          percent.innerHTML = Math.round(progress) + "%";
          if (imagesLoaded === totalImages) {
              // All images loaded, hide loading screen
              document.getElementById("loading-screen").classList.add('loaded');
              status.innerHTML = "ロード完了";
          }
      };
      img.src = "img/" + i + ".svg";
  }
});
function getId(ele) {
  var id_value = ele.id;
  var id_text = ele.innerText;

  document.getElementById("MapTitle").innerText = id_text;
  document.getElementById("menu-btn-check").checked = false;
  const aniDiv = document.getElementById("map");
  aniDiv.classList.remove('fadeIn');
  window.requestAnimationFrame((time1) => {
      window.requestAnimationFrame((time2) => {
        
  document.getElementById('map').src = "img/" + id_value + ".svg";
          aniDiv.classList.add('fadeIn');
      });
  });
}
var area = document.querySelector('.panzoom')
panzoom(area, {
  maxZoom: 5,
  /* 拡大時の上限 */
  minZoom: 0.3,
  /* 縮小時の下限 */
  initialZoom: 1,
  /* コンテンツ表示時の初期倍率 */
  bounds: true,
  /* 表示領域外へ出ないようにする場合はtrue */
  boundsPadding: 0.10 /* bounds: true の時の表示余白 */
});
var element = document.getElementById("MapArea");
element.addEventListener('mousedown', function () {
  element.style.cursor = "move";
});
element.addEventListener('mouseup', function () {
  element.style.cursor = "pointer";
});
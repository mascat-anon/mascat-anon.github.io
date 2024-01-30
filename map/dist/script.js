function getId(ele) {
  var id_value = ele.id;
  var id_text = ele.innerText;
  document.getElementById('map').src = "img/" + id_value + ".jpg";
  document.getElementById("MapTitle").innerText = id_text;
  document.getElementById("menu-btn-check").checked = false;
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
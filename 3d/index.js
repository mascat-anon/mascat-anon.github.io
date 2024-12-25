window.addEventListener("DOMContentLoaded", init);
window.addEventListener('resize', init);
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
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    // シーンを作成
    const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x666666);
    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, 100);

    // カメラコントローラーを作成
    const controls = new THREE.OrbitControls(camera, canvasElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.5;


    // カメラの方向に追従するライト
    const cameraLight = new THREE.DirectionalLight(0xffffff); // カメラに追従するライト
    cameraLight.intensity = 0.75;
    cameraLight.distance = 100;
    scene.add(cameraLight);


    // 3Dモデルの読み込み
    const objLoader = new THREE.OBJLoader();
    objLoader.load(
        './models/mo.obj',
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
        }
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

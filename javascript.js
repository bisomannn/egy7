renderer.domElement.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    console.warn('WebGL context lost');
}, false);

renderer.domElement.addEventListener('webglcontextrestored', () => {
    console.warn('WebGL context restored');
    initScene(); // إعادة تحميل المشهد
}, false);

function initScene() {
    // إعادة تهيئة المشهد هنا
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x262626);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 200);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio * 0.5);
    document.body.appendChild(renderer.domElement);

    // إعادة تحميل بقية المشهد...
}

initScene();
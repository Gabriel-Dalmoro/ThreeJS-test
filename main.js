import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './style.css';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//Add orbit control
// const controls = new OrbitControls(camera, renderer.domElement);

camera.position.setZ(30);
camera.position.setX(-3);

//Add light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//Add grid lines and point light helper
// const pointLightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(pointLightHelper, gridHelper);

//Add avatar texture
const gabeTexture = new THREE.TextureLoader().load(
  './images/yellow-bg-gabe-square.jpg'
);

const gabe = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: gabeTexture })
);

scene.add(gabe);
gabe.position.z = -5;
gabe.position.x = 2;

//Add scroll camera move
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  // gabe.rotation.y += 0.03;
  // gabe.rotation.z += 0.03;
  gabe.rotation.y += 0.03;

  camera.position.z = t * -0.0026;
  camera.position.x = t * -0.002;
  camera.rotation.y = t * -0.0002;
}
document.body.onscroll = moveCamera;
moveCamera();

//Add background image
const bgImage = new THREE.TextureLoader().load('./images/dark-bg.png');
scene.background = bgImage;

//Rendering the cube, so it actually shows up in the browser
function animate() {
  requestAnimationFrame(animate);

  // gabe.rotation.x += 0.01;
  // gabe.rotation.y += 0.01;

  // controls.update();
  // pointLightHelper.update();

  renderer.render(scene, camera);
}

animate();

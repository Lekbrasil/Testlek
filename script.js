// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Three.js 3D Element
const canvas = document.getElementById('three-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x8B5E3C });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

// Auto-rotate for mobile
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Rotate based on mouse (desktop)
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

function updateRotation() {
    sphere.rotation.x = mouseY * Math.PI;
    sphere.rotation.y = mouseX * Math.PI;
    requestAnimationFrame(updateRotation);
}
updateRotation();

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// GSAP Text Animation
gsap.from('.animate', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

// Chatbot Placeholder
const chatbotButton = document.querySelector('.chatbot-button');
chatbotButton.addEventListener('click', () => {
    alert('Chat com Axtron AI estará disponível em breve!');
});

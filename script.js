const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');

// --- 1. CONFIGURACIÓN DEL ÁRBOL ---
function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Ajustar posición según pantalla
    let treeX = window.innerWidth > 768 ? canvas.width * 0.70 : canvas.width / 2;
    let treeY = canvas.height - 20;
    let branchLen = window.innerWidth > 768 ? 120 : 80;

    drawTree(treeX, treeY, branchLen, 0, 12);
}

function drawTree(startX, startY, len, angle, branchWidth) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = "#4b2c20"; // Color tronco
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    if (len < 10) {
        drawHeart(0, -len, 10); // Dibuja corazón en la punta
        ctx.restore();
        return;
    }

    // Ramificaciones recursivas
    drawTree(0, -len, len * 0.75, angle - 20, branchWidth * 0.7);
    drawTree(0, -len, len * 0.75, angle + 20, branchWidth * 0.7);

    ctx.restore();
}

function drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.fillStyle = Math.random() > 0.5 ? "#ff4d6d" : "#c9184a";
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - 3, x - size, y - size, x - size, y);
    ctx.bezierCurveTo(x - size, y + size, x, y + size, x, y + size * 1.5);
    ctx.bezierCurveTo(x, y + size, x + size, y + size, x + size, y);
    ctx.bezierCurveTo(x + size, y - size, x, y - size, x, y);
    ctx.fill();
}

// --- 2. CONTADOR DE TIEMPO ---
// ¡CAMBIA ESTA FECHA! Formato: Año, Mes (0-11), Día, Hora, Min
const startDate = new Date(2023, 1, 14, 17, 15); 

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById('counter').innerHTML = 
        `Nuestro amor comenzó hace...<br>${days}d ${hours}h ${mins}m ${secs}s`;
}

// --- 3. EFECTO DE ESCRITURA ---
const message = "Para el amor de mi vida: \nSi pudiera elegir un lugar seguro, sería a tu lado. Cuanto más tiempo paso contigo, más te amo.";
let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing-text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Inicializar todo
window.addEventListener('resize', init);
init();
typeWriter();
setInterval(updateCounter, 1000);

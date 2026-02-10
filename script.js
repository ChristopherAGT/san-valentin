const startDate = new Date("2024-02-19T00:00:00"); // Pon tu fecha aquí

const lines = [
    { id: "l1", text: "Para el amor de mi vida:" },
    { id: "l2", text: "Si pudiera elegir un lugar seguro, sería a tu lado." },
    { id: "l3", text: "Cuanto más tiempo estoy contigo, más te amo." },
    { id: "l4", text: "— I Love You!" }
];

// Función de escritura
function typeLine(index) {
    if (index >= lines.length) return;
    
    let charIndex = 0;
    const { id, text } = lines[index];
    const element = document.getElementById(id);
    
    const interval = setInterval(() => {
        element.textContent += text[charIndex];
        charIndex++;
        if (charIndex === text.length) {
            clearInterval(interval);
            setTimeout(() => typeLine(index + 1), 500);
        }
    }, 50);
}

// Crear el follaje del árbol
function createTree() {
    const foliage = document.getElementById("foliage");
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.classList.add("leaf-heart");
            heart.innerHTML = "❤️";
            
            // Posicionamiento aleatorio en forma de círculo/corazón
            const x = Math.random() * 200 - 100;
            const y = Math.random() * -150;
            
            heart.style.left = `calc(50% + ${x}px)`;
            heart.style.top = `${150 + y}px`;
            heart.style.fontSize = `${Math.random() * 15 + 10}px`;
            
            foliage.appendChild(heart);
        }, i * 50); // Aparecen uno por uno
    }
}

// Actualizar cronómetro
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    document.getElementById("timer").textContent = `${d}d ${h}h ${m}m ${s}s`;
}

// Iniciar todo
window.onload = () => {
    createTree();
    setTimeout(() => typeLine(0), 1500); // El texto empieza después del árbol
    setInterval(updateTimer, 1000);
};

// 1. CONFIGURACIÓN: Cambia aquí la fecha de inicio de su relación
const fechaInicio = new Date("2024-02-19T00:00:00");

// 2. TEXTOS: Líneas que se escribirán solas
const mensajes = [
    { id: "line1", text: "Para el amor de mi vida:" },
    { id: "line2", text: "Si pudiera elegir un lugar seguro, sería a tu lado." },
    { id: "line3", text: "Cuanto más tiempo estoy contigo, más te amo." },
    { id: "line4", text: "— I Love You!" }
];

/**
 * Función que escribe el texto letra por letra
 */
function escribirTexto(index) {
    if (index >= mensajes.length) return;

    const info = mensajes[index];
    const contenedor = document.getElementById(info.id);
    let i = 0;

    const intervalo = setInterval(() => {
        contenedor.textContent += info.text.charAt(i);
        i++;

        if (i === info.text.length) {
            clearInterval(intervalo);
            // Pequeña pausa antes de escribir la siguiente línea
            setTimeout(() => escribirTexto(index + 1), 600);
        }
    }, 60); // Velocidad de escritura (ms)
}

/**
 * Función que hace florecer el árbol de corazones
 */
function florecerArbol() {
    const follaje = document.getElementById("foliage");
    const totalCorazones = 80; // Cantidad de corazones en el árbol

    for (let i = 0; i < totalCorazones; i++) {
        setTimeout(() => {
            const corazon = document.createElement("div");
            corazon.classList.add("leaf");
            corazon.innerHTML = "❤️";

            // Posicionamiento aleatorio dentro del área del follaje
            // Usamos cálculos matemáticos para que queden en forma de copa
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 110; 
            const x = Math.cos(angle) * radius + 150; 
            const y = Math.sin(angle) * (radius * 0.8) + 100;

            corazon.style.left = `${x}px`;
            corazon.style.top = `${y}px`;
            corazon.style.fontSize = `${Math.random() * (25 - 10) + 10}px`;
            
            // Variación leve de color para dar profundidad
            const opacidad = Math.random() * (1 - 0.6) + 0.6;
            corazon.style.opacity = opacidad;

            follaje.appendChild(heart);
        }, i * 40); // Aparecen secuencialmente
    }
}

/**
 * Función del cronómetro en tiempo real
 */
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    // Formato con ceros a la izquierda para que no "salte" el texto
    const h = horas < 10 ? '0' + horas : horas;
    const m = minutos < 10 ? '0' + minutos : minutos;
    const s = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById("counter").innerHTML = 
        `${dias} días ${h} horas ${m} minutos ${s} segundos`;
}

/**
 * Lluvia de corazones de fondo
 */
function lluviaCorazones() {
    const bg = document.getElementById("bg-hearts");
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "❤️";
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.duration = Math.random() * 3 + 2 + "s";
    heart.style.opacity = Math.random();

    bg.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

// INICIO DE TODO
window.onload = () => {
    // 1. Iniciar contador inmediatamente
    setInterval(actualizarContador, 1000);
    actualizarContador();

    // 2. Iniciar lluvia de fondo
    setInterval(lluviaCorazones, 400);

    // 3. Secuencia de animación principal
    // Esperamos a que el tronco crezca (según el CSS son 2s)
    setTimeout(() => {
        florecerArbol();
        // Empezamos a escribir el texto un poco después de que inicie el árbol
        setTimeout(() => escribirTexto(0), 1000);
    }, 1500);
};

// 1. FECHA DE INICIO
const fechaInicio = new Date("2024-02-19T00:00:00");

// 2. TEXTOS
const mensajes = [
    { id: "line1", text: "Para el amor de mi vida:" },
    { id: "line2", text: "Si pudiera elegir un lugar seguro, sería a tu lado." },
    { id: "line3", text: "Cuanto más tiempo estoy contigo, más te amo." },
    { id: "line4", text: "— I Love You!" }
];

/* ================================
   TEXTO ESCRIBIÉNDOSE
================================ */
function escribirTexto(index) {
    if (index >= mensajes.length) return;

    const info = mensajes[index];
    const el = document.getElementById(info.id);
    let i = 0;

    const intervalo = setInterval(() => {
        el.textContent += info.text[i];
        i++;

        if (i === info.text.length) {
            clearInterval(intervalo);
            setTimeout(() => escribirTexto(index + 1), 600);
        }
    }, 60);
}

/* ================================
   ÁRBOL DE CORAZONES
================================ */
function florecerArbol() {
    const follaje = document.getElementById("foliage");
    const total = 80;

    for (let i = 0; i < total; i++) {
        setTimeout(() => {
            const corazon = document.createElement("div");
            corazon.classList.add("leaf");
            corazon.textContent = "❤️";

            // Forma de copa
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 110;
            const x = Math.cos(angle) * radius + 150;
            const y = Math.sin(angle) * (radius * 0.8) + 120;

            corazon.style.left = `${x}px`;
            corazon.style.top = `${y}px`;
            corazon.style.fontSize = `${Math.random() * 15 + 12}px`;
            corazon.style.animationDelay = `${Math.random() * 0.5}s`;

            follaje.appendChild(corazon);
        }, i * 35);
    }
}

/* ================================
   CONTADOR
================================ */
function actualizarContador() {
    const ahora = new Date();
    const diff = ahora - fechaInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("counter").innerHTML =
        `${dias} días ${horas.toString().padStart(2, "0")} horas ` +
        `${minutos.toString().padStart(2, "0")} minutos ` +
        `${segundos.toString().padStart(2, "0")} segundos`;
}

/* ================================
   LLUVIA DE CORAZONES
================================ */
function lluviaCorazones() {
    const bg = document.getElementById("bg-hearts");
    const heart = document.createElement("div");

    heart.classList.add("falling-heart");
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.opacity = Math.random();

    bg.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

/* ================================
   INICIO
================================ */
window.onload = () => {
    actualizarContador();
    setInterval(actualizarContador, 1000);
    setInterval(lluviaCorazones, 400);

    // Espera a que el tronco termine de crecer
    setTimeout(() => {
        florecerArbol();
        setTimeout(() => escribirTexto(0), 800);
    }, 2000);
};

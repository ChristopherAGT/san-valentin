const fechaInicio = new Date("2024-02-19T00:00:00");

const mensajes = [
    { id: "line1", text: "Para el amor de mi vida:" },
    { id: "line2", text: "Si pudiera elegir un lugar seguro, sería a tu lado." },
    { id: "line3", text: "Cuanto más tiempo estoy contigo, más te amo." },
    { id: "line4", text: "— I Love You!" }
];

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
            setTimeout(() => escribirTexto(index + 1), 600);
        }
    }, 60);
}

function florecerArbol() {
    const follaje = document.getElementById("foliage");
    const totalCorazones = 80;

    for (let i = 0; i < totalCorazones; i++) {
        setTimeout(() => {
            const corazon = document.createElement("div"); // Se define como corazon
            corazon.classList.add("leaf");
            corazon.innerHTML = "❤️";

            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 110; 
            const x = Math.cos(angle) * radius + 150; 
            const y = Math.sin(angle) * (radius * 0.8) + 100;

            corazon.style.left = `${x}px`;
            corazon.style.top = `${y}px`;
            corazon.style.fontSize = `${Math.random() * (25 - 10) + 10}px`;
            corazon.style.opacity = Math.random() * (1 - 0.6) + 0.6;

            follaje.appendChild(corazon); // CORREGIDO: antes decía heart
        }, i * 40);
    }
}

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    const h = horas < 10 ? '0' + horas : horas;
    const m = minutos < 10 ? '0' + minutos : minutos;
    const s = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById("counter").innerHTML = 
        `${dias} días ${h}:${m}:${s}`;
}

function lluviaCorazones() {
    const bg = document.getElementById("bg-hearts");
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "❤️";
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    // CORREGIDO: Usar animationDuration en lugar de duration
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.opacity = Math.random();

    bg.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

window.onload = () => {
    setInterval(actualizarContador, 1000);
    actualizarContador();
    setInterval(lluviaCorazones, 400);

    setTimeout(() => {
        florecerArbol();
        setTimeout(() => escribirTexto(0), 1000);
    }, 1500);
};

// 1. Configuración del texto y efecto "Typewriter"
const messages = [
  { id: "line1", text: "Para el amor de mi vida:" },
  { id: "line2", text: "Si pudiera elegir un lugar seguro, sería a tu lado." },
  { id: "line3", text: "Cuanto más tiempo estoy contigo, más te amo." },
  { id: "line4", text: "— I Love You!" }
];

function typeWriter(elementId, text, speed, callback) {
  let i = 0;
  const element = document.getElementById(elementId);
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

// Iniciar secuencia de escritura
function startAnimations() {
  typeWriter(messages[0].id, messages[0].text, 70, () => {
    typeWriter(messages[1].id, messages[1].text, 50, () => {
      typeWriter(messages[2].id, messages[2].text, 50, () => {
        typeWriter(messages[3].id, messages[3].text, 100);
      });
    });
  });
}

// 2. Contador de tiempo real
const startDate = new Date("2024-02-19T00:00:00"); // Pon tu fecha real aquí

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 3. Lluvia de corazones
function createFallingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.style.opacity = Math.random() * 0.7 + 0.3;
  
  document.getElementById("hearts-bg").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Iniciar todo al cargar
window.onload = () => {
  startAnimations();
  setInterval(updateCounter, 1000);
  setInterval(createFallingHeart, 400);
};
}, 300);
//

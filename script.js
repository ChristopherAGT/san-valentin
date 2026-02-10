// 🔴 CAMBIA ESTA FECHA POR LA TUYA
const startDate = new Date("2026-02-09T00:00:00");

function updateCounter() {
  const now = new Date();
  let diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").textContent =
    `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();

// Corazones cayendo
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart-fall");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
//

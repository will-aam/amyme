// --- 1. Lógica da Contagem Regressiva ---
// Data do evento: 17 de Outubro de 2026 às 20:00:00
const countDownDate = new Date("Oct 17, 2026 20:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Cálculos matemáticos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Se o evento já passou ou chegou, define tudo como 0
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  } else {
    // Atualiza o DOM (formatando para ter sempre 2 dígitos)
    document.getElementById("days").innerHTML =
      days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML =
      seconds < 10 ? "0" + seconds : seconds;
  }
}, 1000);

// --- 2. Lógica do Modal ---
const modal = document.getElementById("giftModal");
const modalContent = document.getElementById("modalContent");

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Pequeno delay para a transição de opacidade/transform funcionar
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100");

    modalContent.classList.remove("translate-y-8");
    modalContent.classList.add("translate-y-0");
  }, 10);
}

function closeModal() {
  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0");

  modalContent.classList.remove("translate-y-0");
  modalContent.classList.add("translate-y-8");

  // Aguarda a animação terminar antes de esconder
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300); // 300ms combina com o duration-300 do Tailwind
}

// =====================================================
// AUREA — interações da página
// =====================================================

const header = document.querySelector("#hd");
const nav = document.querySelector("#nav");
const menuButton = document.querySelector("#bg");

// 1. Header: ganha sombra quando a página rola
addEventListener("scroll", () => header.classList.toggle("sc", scrollY > 8), {
  passive: true,
});

// 2. Menu mobile: abre/fecha e fecha ao clicar em um link
function setMenu(open) {
  nav.classList.toggle("on", open);
  menuButton.setAttribute("aria-expanded", open);
}
menuButton.addEventListener("click", () =>
  setMenu(!nav.classList.contains("on")),
);
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));

// 3. Animação de entrada: elementos com a classe .rv aparecem ao entrar na tela
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".rv").forEach((el) => revealObserver.observe(el));

// 4. FAQ (acordeão): só uma pergunta aberta por vez
const faqItems = document.querySelectorAll("#acc > div");
faqItems.forEach((item) => {
  const button = item.querySelector("button");
  button.addEventListener("click", () => {
    const willOpen = !item.classList.contains("open");
    faqItems.forEach((other) => {
      other.classList.remove("open");
      other.querySelector("button").setAttribute("aria-expanded", false);
    });
    if (willOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", true);
    }
  });
});

// 5. Carrossel de depoimentos: setas, volta ao início no fim e barra de progresso
const track = document.querySelector("#tr");
const progress = document.querySelector("#pg");
const cardStep = () =>
  track.firstElementChild.getBoundingClientRect().width + 24; // largura do card + gap
const maxScroll = () => track.scrollWidth - track.clientWidth;

document.querySelector("#nx").addEventListener("click", () => {
  const atEnd = track.scrollLeft + cardStep() >= maxScroll() - 4;
  track.scrollTo({
    left: atEnd ? 0 : track.scrollLeft + cardStep(),
    behavior: "smooth",
  });
});
document.querySelector("#pv").addEventListener("click", () => {
  const atStart = track.scrollLeft < 4;
  track.scrollTo({
    left: atStart ? maxScroll() : track.scrollLeft - cardStep(),
    behavior: "smooth",
  });
});

function updateProgress() {
  const ratio = maxScroll() > 4 ? track.scrollLeft / maxScroll() : 1;
  progress.style.transform = `scaleX(${0.33 + 0.67 * ratio})`;
}
track.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

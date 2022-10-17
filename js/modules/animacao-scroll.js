export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='js-scroll']");

  function animaScroll() {
    sections.forEach((section) => {
      const halfSection = (window.innerHeight * 3) / 5;
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfSection < 0;
      if (isSectionVisible) {
        section.classList.add("animation");
      } else {
        section.classList.remove("animation");
      }
    });
  }

  animaScroll();
  if (sections.length) {
    window.addEventListener("scroll", animaScroll);
  }
}

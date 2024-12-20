gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".link-card");

cards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 0.5,
    delay: index * 0.1,
  });
});
gsap.from(".block__work__intro", {
  scrollTrigger: {
    trigger: ".block__work__intro",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".work-item", {
  scrollTrigger: {
    trigger: ".work-grid",
    start: "top 75%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  stagger: 0.2,
  ease: "power2.out",
});
document.querySelectorAll('a[href="#contact"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const links = nav.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("mobile-menu-active");
      document.body.classList.remove("mobile-menu-active"); // Optional: if you're locking scrolling on `body`
    });
  });
});

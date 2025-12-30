gsap.from(".content h1", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".content p", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".btn", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power3.out"
});

gsap.to(".wave1", {
  duration: 12,
  x: -80,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".wave2", {
  duration: 16,
  x: 100,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".wave3", {
  duration: 20,
  x: -120,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.from(".about-header", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".about-text p", {
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 85%",
  },
  y: 20,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
});

gsap.from(".skills-grid span", {
  scrollTrigger: {
    trigger: ".skills-grid",
    start: "top 85%",
  },
  y: 20,
  opacity: 0,
  stagger: 0.05,
  duration: 0.6,
});


gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
  },
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.2,
});


gsap.from(".contact-item", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.2,
});


const header = document.getElementById("header");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // At very top → hide
  if (currentScrollY <= 0) {
    header.classList.remove("show");
    return;
  }

  // Scroll down → show header
  if (currentScrollY > lastScrollY) {
    header.classList.add("show");
  } 
  // Scroll up → hide header
  else {
    header.classList.remove("show");
  }

  lastScrollY = currentScrollY;
});

document.getElementById("aboutBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    header.classList.toggle("open");
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('#header .nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && header.classList.contains('open')) {
      header.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}



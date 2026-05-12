// ===== TYPEWRITER EFFECT =====
const fullName = "FAIZAN AHAMAD BHAT";
const typedNameEl = document.getElementById("typed-name");
const scrollIndicator = document.getElementById("scroll-indicator");
const footerYear = document.getElementById("year");

let currentIndex = 0;
let deleting = false;
let typewriterActive = true;

function runTypewriter() {
  if (!typedNameEl || !typewriterActive) return;

  let nextDelay = 100;

  if (!deleting) {
    currentIndex += 1;
    typedNameEl.textContent = fullName.slice(0, currentIndex);

    if (currentIndex >= fullName.length) {
      deleting = true;
      nextDelay = 2000; // Pause at full name
    } else {
      nextDelay = 90;
    }
  } else {
    currentIndex -= 1;
    typedNameEl.textContent = fullName.slice(0, currentIndex);

    if (currentIndex <= 0) {
      deleting = false;
      nextDelay = 500; // Pause before retyping
    } else {
      nextDelay = 55;
    }
  }

  setTimeout(runTypewriter, nextDelay);
}

// ===== SCROLL INDICATOR (Fades when scrolling) =====
function updateScrollIndicator() {
  if (!scrollIndicator) return;

  const fadeDistance = 220;
  const progress = Math.min(window.scrollY / fadeDistance, 1);
  const opacity = 1 - progress;

  scrollIndicator.style.opacity = String(opacity);
  scrollIndicator.style.pointerEvents = opacity < 0.1 ? "none" : "auto";
}

function setupScrollIndicator() {
  if (!scrollIndicator) return;

  let framePending = false;

  scrollIndicator.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById("skills");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  window.addEventListener("scroll", () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(() => {
      updateScrollIndicator();
      framePending = false;
    });
  });

  updateScrollIndicator();
}

// ===== KEYBOARD ACCESSIBILITY FOR REVEAL CARDS =====
function setupKeyboardRevealCards() {
  const revealCards = document.querySelectorAll(".reveal-card");
  
  if (revealCards.length === 0) return;

  revealCards.forEach((card) => {
    card.setAttribute("tabindex", "0");
    
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.classList.toggle("is-active");
      }
    });

    card.addEventListener("blur", () => {
      card.classList.remove("is-active");
    });
  });
}

// ===== SET CURRENT YEAR IN FOOTER =====
function setupCurrentYear() {
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

// ===== ADD SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ===== INITIALIZE EVERYTHING =====
function init() {
  runTypewriter();
  setupScrollIndicator();
  setupKeyboardRevealCards();
  setupCurrentYear();
  setupSmoothScroll();
}

// Start when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
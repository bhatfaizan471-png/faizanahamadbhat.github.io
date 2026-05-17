// ========== DOM ELEMENTS ==========
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const scrollBar = document.getElementById('scrollBar');
const yearEl = document.getElementById('year');
const backToTop = document.getElementById('toTop');
const resumeButton = document.getElementById('downloadResume');
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
const typedNameEl = document.getElementById('typedName');

// ✅ FIX: Declare fullName BEFORE using it
const fullName = "Faizan Ahamad Bhat";

// ========== RESUME CONTENT ==========
const resumeText = `Faizan Ahamad Bhat
B.E. CSE (AI & ML) Student | Full Stack Developer

Highlights
- 50+ LeetCode problems solved
- Prize-winning college inquiry chatbot
- B.E. Computer Science (AIML)

Core Skills
Python, Java, C, MySQL, MongoDB, Git, GitHub, AI/ML basics
Operating Systems: Kali Linux, Ubuntu, Windows

Contact
bhatfaizan471@gmail.com
+91 60065 25161
GitHub: github.com/bhatfaizan471-png
LinkedIn: linkedin.com/in/faizan-ahamad-bhat-71a570385/

Addresses
Primary: Bengaluru, Karnataka
Alternate: Anantnag, Verinag, Jammu & Kashmir`;

// ========== TYPING EFFECT WITH PAUSE ==========
let typeIndex = 0;
let isWaiting = false;

function runTyping() {
  if (!typedNameEl || isWaiting) return;
  
  if (typeIndex < fullName.length) {
    typedNameEl.textContent = fullName.slice(0, typeIndex + 1);
    typeIndex++;
    setTimeout(runTyping, 90);
  } else {
    // Pause at full name for 2 seconds, then stop (no retyping)
    isWaiting = true;
    // Optional: Add cursor blink effect continues
  }
}

// ========== SET CURRENT YEAR ==========
function setYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ========== AOS SETUP (with fallback) ==========
function setupAos() {
  if (typeof AOS !== 'undefined' && AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 90,
    });
  }
  // If AOS not loaded, add reveal animations manually
  else {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16 });
      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback: just show all
      revealElements.forEach(el => el.classList.add('show'));
    }
  }
}

// ========== ACTIVE NAVIGATION LINK ==========
function setActiveLink(id) {
  navLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('is-active', active);
    if (active) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

// ========== SECTION OBSERVER ==========
function setupActiveSectionTracking() {
  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveLink(visible.target.id);
      }
    },
    { threshold: [0.25, 0.4, 0.6], rootMargin: '-18% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

// ========== SCROLL PROGRESS & BACK TO TOP ==========
function updateScrollUI() {
  const doc = document.documentElement;
  const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(window.scrollY / maxScroll, 1);

  if (scrollBar) {
    scrollBar.style.width = `${progress * 100}%`;
  }

  if (backToTop) {
    backToTop.classList.toggle('show', window.scrollY > 450);
  }
}

function setupScrollUI() {
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateScrollUI();
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  updateScrollUI();
}

// ========== PRESS ANIMATIONS (Enhanced) ==========
function setupPressAnimations() {
  const pressSelector = '.btn, .nav-links a, .socials a, .footer-social a, .contact-social a, .to-top, .nav-toggle, .glass, .card, .project-visual, .cert-media, .photo-wrap';
  
  const clearPressed = () => {
    document.querySelectorAll('.is-pressed').forEach((element) => {
      element.classList.remove('is-pressed');
    });
  };

  document.addEventListener('pointerdown', (event) => {
    const target = event.target.closest(pressSelector);
    if (target) {
      target.classList.add('is-pressed');
      setTimeout(() => {
        if (target) target.classList.remove('is-pressed');
      }, 150);
    }
  });

  document.addEventListener('pointerup', clearPressed);
  document.addEventListener('pointercancel', clearPressed);
}

// ========== MOBILE NAVIGATION ==========
function toggleNav(open) {
  if (!header || !navToggle) return;
  const nextState = typeof open === 'boolean' ? open : !header.classList.contains('open');
  header.classList.toggle('open', nextState);
  navToggle.setAttribute('aria-expanded', String(nextState));
  const icon = navToggle.querySelector('i');
  if (icon) {
    icon.className = nextState ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
}

function setupMobileNav() {
  if (!header || !navToggle) return;

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNav();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 900px)').matches) {
        toggleNav(false);
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (header && navToggle && !header.contains(event.target) && header.classList.contains('open')) {
      toggleNav(false);
    }
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 900px)').matches) {
      toggleNav(false);
    }
  });
}

// ========== BACK TO TOP ==========
function setupBackToTop() {
  if (!backToTop) return;
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== RESUME DOWNLOAD ==========
function downloadResume() {
  const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'Faizan_Ahamad_Bhat_Resume.txt';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function setupResumeDownload() {
  if (!resumeButton) return;
  resumeButton.addEventListener('click', downloadResume);
}

// ========== CONTACT FORM ==========
function showStatus(message, type) {
  if (!formMsg) return;
  formMsg.textContent = message;
  formMsg.classList.remove('ok', 'err');
  if (type) {
    formMsg.classList.add(type === 'success' ? 'ok' : 'err');
  }
  setTimeout(() => {
    if (formMsg && formMsg.textContent === message) {
      formMsg.textContent = '';
      formMsg.classList.remove('ok', 'err');
    }
  }, 5000);
}

function validateContactForm(form) {
  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const subject = form.querySelector('#subject');
  const message = form.querySelector('#message');

  if (!name?.value.trim() || name.value.trim().length < 2) return 'Please enter your name.';
  if (!email?.value.trim() || !email.checkValidity()) return 'Please enter a valid email address.';
  if (!subject?.value.trim() || subject.value.trim().length < 3) return 'Please add a subject.';
  if (!message?.value.trim() || message.value.trim().length < 20) return 'Please write a longer message (min 20 characters).';

  return '';
}

function setupContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const error = validateContactForm(contactForm);

    if (error) {
      showStatus(error, 'error');
      return;
    }

    showStatus('✓ Message ready! I will get back to you soon.', 'success');
    contactForm.reset();
  });
}

// ========== SMOOTH SCROLL FOR ALL ANCHORS ==========
function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ========== ADDITIONAL ANIMATIONS ==========
function setupScrollReveal() {
  // Animate stats cards on scroll
  const statCards = document.querySelectorAll('.stat-card');
  if (statCards.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statCards.forEach(card => observer.observe(card));
  }

  // Animate skill chips
  const chips = document.querySelectorAll('.chip');
  if (chips.length > 0 && 'IntersectionObserver' in window) {
    const chipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          chipObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    chips.forEach((chip, index) => {
      chip.style.opacity = '0';
      chip.style.transform = 'translateY(10px)';
      chip.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`;
      chipObserver.observe(chip);
    });
  }
}

// ========== INITIALIZATION ==========
function init() {
  setYear();
  runTyping();        // Now fullName is defined ✅
  setupAos();
  setupMobileNav();
  setupActiveSectionTracking();
  setupScrollUI();
  setupPressAnimations();
  setupBackToTop();
  setupResumeDownload();
  setupContactForm();
  setupSmoothAnchors();
  setupScrollReveal();
  setActiveLink('hero');
}

// Start everything when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
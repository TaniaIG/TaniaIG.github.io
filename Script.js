// Navegación: scroll suave y cambio de link activo
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Banner slider (sin autoplay)
const slides = document.querySelectorAll('.banner-slider .slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const indicators = document.querySelectorAll('.carousel-indicators button');

let currentSlide = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  else if (index >= slides.length) index = 0;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === index);
  });

  currentSlide = index;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Botones slider
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    nextSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
  });
}

// Indicadores slider
indicators.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    showSlide(i);
  });
});

// Inicializar slider en primer slide
showSlide(currentSlide);

// Popup Contactanos
const popup = document.getElementById('contact-popup');
const btnOpenPopup = document.getElementById('btn-contact-popup');
const btnClosePopup = document.getElementById('popup-close');
const popupForm = document.getElementById('popup-form');
const popupMsg = document.getElementById('popup-msg');

if (btnOpenPopup && popup && btnClosePopup && popupForm) {
  btnOpenPopup.addEventListener('click', () => {
    popup.classList.remove('hidden');
    popupMsg.textContent = '';
    popupForm.reset();
  });

  btnClosePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  popupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = popupForm['popup-name'].value.trim();
    const phone = popupForm['popup-phone'].value.trim();

    if (name && phone) {
      popupMsg.textContent = 'Gracias, pronto te contactaremos.';
      popupForm.reset();
    } else {
      popupMsg.textContent = 'Por favor completa todos los campos.';
    }
  });
}

// Formulario Contactanos sección
const contactForm = document.getElementById('contact-form');
const contactMsg = document.getElementById('contact-msg');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm['name'].value.trim();
    const phone = contactForm['phone'].value.trim();

    if (name && phone) {
      contactMsg.textContent = 'Gracias, pronto te contactaremos.';
      contactForm.reset();
    } else {
      contactMsg.textContent = 'Por favor completa todos los campos.';
    }
  });
}

// Animación entrada secciones al hacer scroll (solo scroll down)
const animatedSections = document.querySelectorAll('.animate-section');
let lastScrollY = window.scrollY || window.pageYOffset;

function checkScroll() {
  const currentScrollY = window.scrollY || window.pageYOffset;
  const scrollDown = currentScrollY > lastScrollY;
  lastScrollY = currentScrollY;

  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

    if (scrollDown && isVisible) {
      section.classList.add('visible');
      section.classList.remove('hidden');
    }
  });
}

window.addEventListener('load', () => {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
});

window.addEventListener('scroll', checkScroll);

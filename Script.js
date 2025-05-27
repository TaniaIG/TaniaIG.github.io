// Navegación: cambio de sección activa
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

// Banner slider HOME
const slides = document.querySelectorAll('.banner-slider .slide');
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000);

// POPUP CONTACTANOS
const popup = document.getElementById('contact-popup');
const btnOpenPopup = document.getElementById('btn-contact-popup');
const btnClosePopup = document.getElementById('popup-close');
const popupForm = document.getElementById('popup-form');
const popupMsg = document.getElementById('popup-msg');

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

// FORMULARIO CONTACTANOS SECCIÓN
const contactForm = document.getElementById('contact-form');
const contactMsg = document.getElementById('contact-msg');

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

// ANIMACIÓN DE ENTRADA AL HACER SCROLL (solo entrada, sin salida al scroll up)
const animatedSections = document.querySelectorAll('.animate-section');
let lastScrollY = window.scrollY || window.pageYOffset;

function checkScroll() {
  const currentScrollY = window.scrollY || window.pageYOffset;
  const scrollDown = currentScrollY > lastScrollY;
  lastScrollY = currentScrollY;

  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

    if (scrollDown) {
      if (isVisible) {
        section.classList.add('visible');
        section.classList.remove('hidden');
      }
    }
    // No se oculta nada al hacer scroll hacia arriba
  });
}

// Inicializar visibilidad (para mostrar secciones ya visibles al cargar)
window.addEventListener('load', () => {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
});

window.addEventListener('scroll', checkScroll);

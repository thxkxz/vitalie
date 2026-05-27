// Menú hamburguesa: se inyecta desde JS para no tocar el HTML (mejora progresiva).
// Funciona siempre, incluso con prefers-reduced-motion (es navegación, no decoración).
function initMenuHamburguesa() {
  const nav = document.querySelector('.nav-principal');
  const lista = document.querySelector('.nav-lista');
  if (!nav || !lista) return;

  if (!lista.id) lista.id = 'nav-lista';

  // Botón con 3 líneas
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Abrir menú');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', lista.id);
  for (let i = 0; i < 3; i += 1) {
    const linea = document.createElement('span');
    linea.className = 'nav-toggle-linea';
    toggle.appendChild(linea);
  }

  // El botón va antes de la lista, dentro del nav
  nav.insertBefore(toggle, lista);

  const cerrarMenu = () => {
    nav.classList.remove('nav-abierto');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  };

  toggle.addEventListener('click', () => {
    const abierto = nav.classList.toggle('nav-abierto');
    toggle.setAttribute('aria-expanded', String(abierto));
    toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  });

  // Al tocar un enlace, cerramos el menú
  lista.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', cerrarMenu);
  });
}

// Scroll reveal: las secciones aparecen al entrar en viewport.
// IntersectionObserver responde nativamente al touch-scroll de iOS y Android.
function initScrollReveal() {
  const sections = document.querySelectorAll('main > section');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Si prefiere menos movimiento o el navegador no soporta IntersectionObserver,
  // dejamos todo visible sin animar (mejora progresiva)
  if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

  // Ocultamos las secciones desde JS (sin JS se ven normal)
  sections.forEach((section) => section.classList.add('seccion-oculta'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('seccion-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
  initMenuHamburguesa();
  initScrollReveal();
});

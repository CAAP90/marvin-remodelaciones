// ===================================================
// MARVIN REMODELACIONES — script.js
// ===================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: shrink on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Nav: mobile toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ---------- Scroll reveal (generic sections) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* Nota: la galería de Trabajos ahora es un carrusel infinito en CSS puro
     (ver .marquee-track en style.css) — no necesita JS para animarse. */

  /* ---------- Contact form -> WhatsApp ---------- */
  // TODO: reemplazar por el número real de WhatsApp del negocio (formato: código país + número, sin +, sin espacios)
  const WHATSAPP_NUMBER = '573132241788';

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = data.get('nombre').trim();
      const telefono = data.get('telefono').trim();
      const proyecto = data.get('proyecto');
      const mensaje = data.get('mensaje').trim();

      const texto =
        `Hola, soy ${nombre}.%0A` +
        `Teléfono: ${telefono}%0A` +
        `Tipo de proyecto: ${proyecto}%0A` +
        (mensaje ? `Detalles: ${mensaje}` : 'Quisiera más información.');

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`;
      window.open(url, '_blank');
    });
  }

});
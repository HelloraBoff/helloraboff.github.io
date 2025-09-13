// ===== Tema claro/escuro com persistência
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme-pref');

function setTheme(mode) {
  body.setAttribute('data-theme', mode);
  localStorage.setItem('theme-pref', mode);
}
if (storedTheme) {
  setTheme(storedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
}
themeToggle?.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ===== Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('menu');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// ===== Contadores animados (Hero)
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  counters.forEach(el => {
    const target = Number(el.dataset.countto || 0);
    if (prefersReduced || target === 0) { el.textContent = target; return; }
    const duration = 1200;
    const start = performance.now();
    const from = 0;
    function tick(ts) {
      const p = Math.min(1, (ts - start) / duration);
      const val = Math.floor(from + (target - from) * (1 - Math.pow(1 - p, 3))); // easeOutCubic
      el.textContent = val;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
window.addEventListener('DOMContentLoaded', animateCounters);

// ===== Scroll reveal (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
document.querySelectorAll('.in-observe').forEach(el => observer.observe(el));

// ===== Tilt 3D leve nos cards
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  const maxTilt = 6; // graus
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y / r.height) - 0.5) * -2 * maxTilt;
      const ry = ((x / r.width) - 0.5) * 2 * maxTilt;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

// ===== Filtro de projetos
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    cards.forEach(card => {
      const cats = (card.dataset.category || '').split(' ').filter(Boolean);
      card.style.display = (filter === 'all' || cats.includes(filter)) ? '' : 'none';
    });
  });
});

// ===== Carrossel de depoimentos
document.querySelectorAll('[data-carousel]').forEach(caro => {
  const track = caro.querySelector('.carousel-track');
  const prev = caro.querySelector('.prev');
  const next = caro.querySelector('.next');
  let index = 0;
  function go(i) {
    const total = track.children.length;
    index = (i + total) % total;
    track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
  }
  prev?.addEventListener('click', () => go(index - 1));
  next?.addEventListener('click', () => go(index + 1));
  caro.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(index - 1);
    if (e.key === 'ArrowRight') go(index + 1);
  }, true);
});

// ===== Voltar ao topo
const backToTop = document.querySelector('.back-to-top');
function toggleBackToTop() {
  if (window.scrollY > 600) backToTop?.classList.add('show');
  else backToTop?.classList.remove('show');
}
window.addEventListener('scroll', toggleBackToTop);
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Ano dinâmico no footer
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Form sem backend: mailto
function handleContact(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('mensagem').value.trim();
  const assunto = encodeURIComponent(`Contato Portfólio — ${nome}`);
  const corpo = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\n${msg}`);
  // Substitua pelo seu email
  window.location.href = `mailto:hellorabrito@gmail.com?subject=${assunto}&body=${corpo}`;
  return false;
}
window.handleContact = handleContact;

// ===== Cards clicáveis para abrir o Medium =====
(function enableCardOpenOnClick() {
  const cards = document.querySelectorAll('.card[data-link]');
  cards.forEach(card => {
    const url = card.getAttribute('data-link');
    if (!url) return;
    card.style.cursor = 'pointer';

    card.addEventListener('click', (e) => {
      const interactive = e.target.closest('a, button');
      if (interactive) return; // mantém botões/links internos
      window.open(url, '_blank', 'noopener');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(url, '_blank', 'noopener');
      }
    });
  });
})();

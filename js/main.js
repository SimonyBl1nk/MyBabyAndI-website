// ── NAV ──────────────────────────────────────────
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ── FADE-UP ANIMATIONS ────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── FAQ ───────────────────────────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('open');
  });
});

// ── DONATE AMOUNTS ────────────────────────────────
document.querySelectorAll('.donate-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.donate-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const input = document.getElementById('custom-amount');
    if (input && btn.dataset.amount) input.value = btn.dataset.amount;
  });
});

// Toggle menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Tutup menu saat link diklik
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); })
  );
}

// Tahun dinamis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// (Opsional) smooth scroll offset header
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top:y, behavior:'smooth' });
  });
});

console.log('UI responsif + mobile menu aktif ✅');

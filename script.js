// Smooth scroll for nav links
document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Small UX flourish: elevate header on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const atTop = window.scrollY < 10;
  header.style.boxShadow = atTop ? 'none' : '0 2px 10px rgba(0,0,0,0.15)';
});

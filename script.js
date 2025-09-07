// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú hamburguesa
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');

function closeNav(){
  nav.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  const willOpen = !nav.classList.contains('open');
  nav.classList.toggle('open', willOpen);
  burger.classList.toggle('open', willOpen);
  burger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
});

// Cerrar el menú al navegar
nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => closeNav());
});

// Scroll reveal con IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Enlaces internos (extra por si el navegador no soporta smooth via CSS)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block:'start' });
    }
  });
});

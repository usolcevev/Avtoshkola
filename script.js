// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Form submit
const form = document.getElementById('lead-form');
const toast = document.getElementById('toast');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate send (in real project — send to backend / Telegram / email)
    const data = new FormData(form);
    console.log('Заявка:', Object.fromEntries(data));

    // Show toast
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }

    form.reset();
  });
}

// Smooth scroll for older browsers (optional polyfill not needed for modern)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

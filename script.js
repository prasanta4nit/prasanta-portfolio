const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-header nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-toggle-case]').forEach((trigger) => {
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  const label = trigger.querySelector('.toggle-label');
  if (!panel) return;
  trigger.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(isOpen));
    trigger.classList.toggle('is-open', isOpen);
    if (label) label.textContent = isOpen ? 'Hide case study' : 'View case study';
  });
});

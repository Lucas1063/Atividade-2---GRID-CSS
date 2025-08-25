const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.menu-toggle');
const menu = dropdown.querySelector('.menu');

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const open = menu.classList.toggle('show');
  toggle.setAttribute('aria-expanded', String(open));
});

/* Fecha ao clicar fora */
document.addEventListener('click', () => {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

/* Fecha ao clicar em um item */
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

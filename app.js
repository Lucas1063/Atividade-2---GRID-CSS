const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.menu-toggle');
const menu = dropdown.querySelector('.menu');

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('show');
});

/* Fecha ao clicar fora */
document.addEventListener('click', () => {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});

/* Fecha ao clicar em um item do menu */
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('show');
  }
});

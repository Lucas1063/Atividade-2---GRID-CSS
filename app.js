const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.menu-toggle');
const menu = dropdown.querySelector('.menu');

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('show');
});


document.addEventListener('click', () => {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});


menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('show');
  }
});


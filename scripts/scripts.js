
/* Interacion botones de navegacion laterales en objetivos */

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const ul = document.querySelector('.contenedor_listas');

prev.addEventListener('click', () => {
  ul.scrollBy({
    left: -220, // Ajusta este valor según el tamaño de cada <li>
    behavior: 'smooth'
  });
});

next.addEventListener('click', () => {
  ul.scrollBy({
    left: 220, // Ajusta este valor según el tamaño de cada <li>
    behavior: 'smooth'
  });
});





















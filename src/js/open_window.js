const openButton = document.querySelector('.js-open-menu');
const closeButton = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');

openButton.addEventListener('click', () => {
  menuContainer.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  menuContainer.classList.add('hidden');
  document.body.style.overflow = 'auto';
});
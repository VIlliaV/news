const openButton = document.querySelector('.js-open-menu');
const closeButton = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');
const toggleContainer = document.querySelector('.toggle_container');
const body = document.querySelector('body');

openButton.addEventListener('click', () => {
  menuContainer.classList.remove('is-hidden');
  toggleContainer.classList.add('mob-swicher');
  body.classList.add('no-scroll');
});

closeButton.addEventListener('click', () => {
  menuContainer.classList.add('is-hidden');
  toggleContainer.classList.remove('mob-swicher');
  body.classList.remove('no-scroll');
});

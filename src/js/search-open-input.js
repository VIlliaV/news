const searchIcon = document.querySelector('.search');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle('active-input');
  searchIcon.classList.toggle('active-input');
});
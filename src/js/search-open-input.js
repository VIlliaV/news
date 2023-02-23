const searchIcon = document.querySelector('.search');
const searchBox = document.querySelector('.search-box');
// searchIcon.classList.remove('search-icon-move-wight');

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle('active-input');
  searchIcon.classList.toggle('active-input');
});

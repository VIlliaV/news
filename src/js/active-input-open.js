const searchIcon = document.querySelector('#icon-search_desk');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', () => {
  if (window.innerWidth <= 766) {
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
      searchBox.style.width = '0';
      searchBox.style.display = 'block';
      const searchBoxWidth = searchBox.offsetWidth;
      searchBox.style.width = '180px';
      searchBox.style.height = '31px';
      searchBox.style.position = 'inherit';
      searchBox.focus();
    } else {
      searchBox.style.width = '0';
      searchBox.style.transform = translateX(0);
      searchBox.style.display = 'none';
      searchBox.blur();
    }
  }
});
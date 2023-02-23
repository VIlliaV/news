const refs = {
  openSearchBtn: document.querySelector('#icon-search_desk'),
  searchInput: document.querySelector('#search-input'),
  searchIcon: document.querySelector('.search'),
  mobMenu: document.querySelector('.mob-menu'),
};
refs.openSearchBtn.addEventListener('click', toggleInput);
// console.log(refs.mobMenu.attributes.style.nodeValue);
function toggleInput() {
  refs.searchInput.classList.toggle('search-box-short');
  refs.openSearchBtn.classList.toggle('search-icon-move');
  if (
    refs.mobMenu.attributes.style.nodeValue ===
    'background-color: rgb(46, 46, 46);'
  ) {
    refs.searchIcon.classList.toggle('search-icon-move-wight');
  }
}

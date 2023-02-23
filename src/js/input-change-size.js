const refs = {
  openSearchBtn: document.querySelector('#icon-search_desk'),
  searchInput: document.querySelector('#search-input'),
};
// console.log(refs.openSearchBtn);
// console.log(refs.searchInput.offsetWidth);
refs.openSearchBtn.addEventListener('click', toggleInput);

function toggleInput() {
  refs.searchInput.classList.toggle('search-box-short');
  refs.openSearchBtn.classList.toggle('search-icon-move');
}

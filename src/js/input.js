
import throttle from 'lodash';

const currentPageUrl = window.location.pathname;
console.log(currentPageUrl);

const searchELl = document.querySelector('.search-box');

searchELl.addEventListener('input', throttle(search, 500));
console.log(searchELl);
function search(e) {
  console.log('e');
}


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
// import throttle from 'lodash';

const currentPageUrl = window.location.pathname;
console.log(currentPageUrl);

const searchELl = document.querySelector('.search-box');

searchELl.addEventListener('input', throttle(search, 500));
console.log(searchELl);
function search(e) {
  console.log('e');
}

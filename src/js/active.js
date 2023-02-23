const currentPath = window.location.pathname;

const homeLink = document.getElementById('home-link');
const favoriteLink = document.getElementById('favorite-link');
const readLink = document.getElementById('read-link');

if (currentPath === '/index.html') {
  homeLink.classList.add('active');
} else if (currentPath === '/favorite.html') {
  favoriteLink.classList.add('active');
} else if (currentPath === '/read.html') {
  readLink.classList.add('active');
}

// const liElements = document.querySelectorAll('.menu_item');
// const activeLink = localStorage.getItem('activeLink');
// const logoActive = document.querySelector('.logo');

// logoActive.addEventListener('click', () => {
//   localStorage.setItem('activeLink', '/index.html');
// });

// if (activeLink) {
//   // add the active class to the saved link
//   const link = document.querySelector(`.menu_link[href="${activeLink}"]`);
//   link.parentElement.classList.add('active');
// }

// liElements.forEach(function (li) {
//   li.addEventListener('click', function (event) {
//     liElements.forEach(function (li) {
//       li.classList.remove('active');
//     });

//     this.classList.add('active');
//     const href = this.querySelector('a').getAttribute('href');
//     localStorage.setItem('activeLink', href);
//   });
// });

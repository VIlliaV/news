const currentPath = window.location.pathname;

const mobHomeLink = document.getElementById('mob-home-link');
const mobFavoriteLink = document.getElementById('mob-favorite-link');
const mobReadLink = document.getElementById('mob-read-link');

if (currentPath === '/index.html') {
  mobHomeLink.classList.add('mob-menu__active-item');
} else if (currentPath === '/favorite.html') {
  mobFavoriteLink.classList.add('mob-menu__active-item');
} else if (currentPath === '/read.html') {
  mobReadLink.classList.add('mob-menu__active-item');
}

// const menuLinks = document.querySelectorAll('.menu_link_tel');

// menuLinks.forEach(function(menuLink) {
//   menuLink.addEventListener('click', function(event) {
//     event.preventDefault();

//     const activeLink = document.querySelector('.active-tel');

//     if (activeLink) {
//       activeLink.classList.remove('active-tel');
//     }

//     this.classList.add('active-tel');

//     window.location.href = this.getAttribute('href');
//   });
// });

// const currentPath = window.location.pathname;

// menuLinks.forEach(function(menuLink) {
//   if (menuLink.getAttribute('href') === currentPath) {
//     menuLink.classList.add('active-tel');
//   }
// });

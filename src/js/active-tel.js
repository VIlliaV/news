const menuLinks = document.querySelectorAll('.menu_link_tel');

menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', function(event) {
    event.preventDefault();
    
    const activeLink = document.querySelector('.active-tel');
    
    if (activeLink) {
      activeLink.classList.remove('active-tel');
    }
    
    this.classList.add('active-tel');
    
    window.location.href = this.getAttribute('href');
  });
});

const currentPath = window.location.pathname;

menuLinks.forEach(function(menuLink) {
  if (menuLink.getAttribute('href') === currentPath) {
    menuLink.classList.add('active-tel');
  }
});
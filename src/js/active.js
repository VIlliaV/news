const liElements = document.querySelectorAll('.menu_item');
const activeLink = localStorage.getItem('activeLink');

if (activeLink) {
  // add the active class to the saved link
  const link = document.querySelector(`.menu_link[href="${activeLink}"]`);
  link.parentElement.classList.add('active');
}

liElements.forEach(function (li) {
  li.addEventListener('click', function (event) {
    liElements.forEach(function (li) {
      li.classList.remove('active');
    });

    this.classList.add('active');
    const href = this.querySelector('a').getAttribute('href');
    localStorage.setItem('activeLink', href);
  });
});

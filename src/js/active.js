const liElements = document.querySelectorAll('.menu_item');
const activeLink = localStorage.getItem('activeLink');
const logoActive = document.querySelector('.logo');

logoActive.addEventListener('click', () => {
  localStorage.setItem('activeLink', '/news/index.html');
});

if (activeLink) {
  // add the active class to the saved link
  const link = document.querySelector(`.menu_link[href="/news/index.html"]`);
  link.parentElement.classList.add('active');
}

liElements.forEach(function (li) {
  console.log(li);
  li.addEventListener('click', function (event) {
    liElements.forEach(function (li) {
      li.classList.remove('active');
    });

    this.classList.add('active');
    const href = this.querySelector('a').getAttribute('href');
    localStorage.setItem('activeLink', href);
  });
});
